

//Función para calcular en grados celcius
export const formatTemperature = (temperature: number): number => {
    const kelvin = 273.15  //Grados kelvin
    const celcius = temperature-kelvin
    return parseFloat(celcius.toFixed(1))
}