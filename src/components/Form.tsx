import { countries } from "../data/countries"
import styles from "./modules/Form.module.css"

const Form = () => {
  return (
    <form className={styles.form}>

        <div className={styles.field}>
            <label htmlFor="city">City:</label>
            <input
                id= "city"
                type="text"
                name="city"
                placeholder="Write your city"
            />
        </div>

        <div  className={styles.field}>
            <label htmlFor="city">Country:</label>
            <select>
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