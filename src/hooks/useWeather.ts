
//Hook para las funciones clima. Estados globales y funciones


import axios from 'axios'
import {z} from 'zod'
import { SearchType } from '../types'


//Zod : esto sutituye el definir el type
const Weather = z.object({  //Definimos el skema de  Weather
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_min: z.string(),
        temp_max: z.string()
    })
})

type Weather = z.infer<typeof Weather> //

export default function useWeather (){

    const fetchWeather = async (search:SearchType) => {   //Funcion que consulta a la API los datos por medio de función asinc, correra mientras se jecutan otras cosas

        const appId = import.meta.env.VITE_API_KEY  //Id que creamos en openWeather como variable de entorno

        try {   //Intenta esto

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl,{method:'get'}) //Desstructuramos solo data de la respuesta axios
            
            
            const lat = data[0].lat  //Latitud 
            const lon = data[0].lon  //Longitud

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const {data:weatherResult} = await axios(weatherUrl)  //Get default -  renombramos data para evitar error

            const result = Weather.safeParse(weatherResult)
            if(result){
                //Action1
            }else {
                //Action2
            }
            

        } catch (error) {  //Si es error, manda el error
            console.log(error)

        }

    }


    return {     //Regresa lo lo que queremos usar en el hook
        fetchWeather
    }
}