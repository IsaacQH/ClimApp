import { useState } from "react"
import { countries } from "../../data/countries"
import styles from "./Form.module.css"
import { SearchType } from "../../types"
import Alert from "../Alert/Alert"

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}

const Form = ({fetchWeather}:FormProps) => {

    const [search, setSearch] = useState<SearchType>({  //iniciamos el state del search en vaacios
        city: "",
        country:""
    })

    const [alert, setAlert] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> |React.ChangeEvent<HTMLSelectElement>) => {  //Registra en los change los valores capturados
        setSearch({
            ...search,   //Saca la copia del city o country
            [e.target.name] : e.target.value   //Revisa que evento y nombre, guarada el nuevo valor 
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //Función que registra el submit
        e.preventDefault()  //Previende el reload

        //Validar el formulario
        if(Object.values(search).includes('')){ //Si hay un campo vacio
            setAlert("All fields required")  //Setea el texto de alerta
            return  //Detiene la función
        }
        setAlert("")  //Quita la alerta

        fetchWeather(search)  //Llama a la función fetch del hook useWeather y le pasa los datos de search


    }
        
    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">City:</label>
                <input
                    id= "city"
                    type="text"
                    name="city"
                    placeholder="Write your city"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div  className={styles.field}>
                <label htmlFor="country">Country:</label>
                <select 
                    value={search.country}
                    id="country"
                    name="country"
                    onChange={handleChange}
                >
                    <option value="">-- Select your country --</option>
                        {countries.map((country) => (
                            <option
                                key = {country.code}
                                value={country.code}
                            >{country.name}</option>
                        ))}
                </select>
            </div>

            <input type="submit" value="Search" className={styles.submit}/>

        </form>
    )
}

export default Form