
import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../helpers"
import styles from "./WeatherDetail.module.css"

type WeatherDetailProps = {
    weather: Weather
}

export const WeatherDetail = ({weather}: WeatherDetailProps) => {
  return (
    <div className={styles.container}>
        <h2>Weather: {weather.name}</h2>
        <p className={styles.current}>{formatTemperature(weather.main.temp)} °C</p>
        <div className={styles.temperatures}>
            <p>Min: <span>{formatTemperature(weather.main.temp_min)} °C</span></p>
            <p>Min: <span>{formatTemperature(weather.main.temp_max)} °C</span></p>
        </div>
    </div>
  )
}
