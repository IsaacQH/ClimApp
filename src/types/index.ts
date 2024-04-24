
//TIPOS DE DATOS

export type SearchType = {  //datos para search
    city: string,
    country: string
}

export type CountriesType = {  //Datos para contries
    code: string,
    name: string
}

export type Weather = {
    name: string,
    main: {
        temp: number,
        temp_max: number,
        temp_min: number
    }
}