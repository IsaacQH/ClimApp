
//Hook para las funciones clima. Estados globales y funciones


import axios from 'axios'
import {z} from 'zod'
import { SearchType } from '../types'
import { useMemo, useState } from 'react'


//Zod : esto sutituye el definir el type
const Weather = z.object({  //Definimos el skema de  Weather
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_min: z.number(),
        temp_max: z.number()
    })
})

export type Weather = z.infer<typeof Weather> //

export default function useWeather (){


    const [weather, setWeather] = useState<Weather>({  //Le defimos que es tipo clima
        name: '',
        main: {
            temp: 0,
            temp_min: 0,
            temp_max: 0 
        }
    })

    const [loading, setLoading] = useState(false)  //State que mostará si esta cargandose

    const fetchWeather = async (search:SearchType) => {   //Funcion que consulta a la API los datos por medio de función asinc, correra mientras se jecutan otras cosas
        
        const appId = import.meta.env.VITE_API_KEY  //Id que creamos en openWeather como variable de entorno
        setLoading(true)  //Una vez iniciada la funcion async estamos cargando
        try {   //Intenta esto

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl,{method:'get'}) //Desstructuramos solo data de la respuesta axios
            
            
            const lat = data[0].lat  //Latitud 
            const lon = data[0].lon  //Longitud

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const {data:weatherResult} = await axios(weatherUrl)  //Get default -  renombramos data para evitar error

            const result = Weather.safeParse(weatherResult)  //Result crea un objeto nuevo con un success booleano y lo demás de data

            if(result.success){  //Si existe el valor o es true
                setWeather(result.data)  //Seteamos el weather al valor obenido
            }else {
                //Action2
            }
            

        } catch (error) {  //Si es error, manda el error
            console.log(error)

        } finally{   //Una vez que termine el async,  hace ...
            setLoading(false)  //Una vez terminada la busqueda, se quita el loading 
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather]) //Revisa que exista el name cada que se modifica

    return {     //Regresa lo lo que queremos usar en el hook
        weather,
        fetchWeather,
        hasWeatherData
    }
}