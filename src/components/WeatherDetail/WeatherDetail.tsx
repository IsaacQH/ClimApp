
import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../helpers"

type WeatherDetailProps = {
    weather: Weather
}

export const WeatherDetail = ({weather}: WeatherDetailProps) => {
  return (
    <div>
        <h2>Weather: {weather.name}</h2>
        <p>{formatTemperature(weather.main.temp)} °C</p>
        <div>
            <p>Min: <span>{formatTemperature(weather.main.temp_min)} °C</span></p>
            <p>Min: <span>{formatTemperature(weather.main.temp_max)} °C</span></p>
        </div>
    </div>
  )
}
