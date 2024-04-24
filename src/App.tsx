
import styles from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/Form/Form"
import { Spinner } from "./components/Spinner/Spinner"
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const {weather, loading, notFound, fetchWeather, hasWeatherData} = useWeather()

  return (
    <>
      <h1 className={styles.title}>How's the weather looking?</h1>

      <div className={styles.container}>
        <Form
          fetchWeather = {fetchWeather}
        />
        {loading && <Spinner/>}
        {(hasWeatherData && !loading) && (
          <WeatherDetail
            weather = {weather}
          />
          )
        }
        {(notFound && !loading) && <Alert>City not found</Alert>}
      </div>
    </>
  )
}
export default App
