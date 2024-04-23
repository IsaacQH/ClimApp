
//Hook para las funciones clima. Estados globales y funciones


import axios from 'axios'
import { SearchType } from '../types'

export default function useWeather (){

    const fetchWeather = async (search:SearchType) => {   //Funcion que consulta a la API los datos por medio de función asinc, correra mientras se jecutan otras cosas

        const appId = 'b7366b08a97cdf5351731834042e8685'  //Id que creamos en openWeather

        try {   //Intenta esto

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const data = await axios(geoUrl,{method:'get'})
            console.log(data)

        } catch (error) {  //Si es error, manda el error
            console.log(error)

        }

    }


    return {     //Regresa lo lo que queremos usar en el hook
        fetchWeather
    }
}