import { countries } from "../data/countries"


const Form = () => {
  return (
    <form>

        <div>
            <label htmlFor="city">City:</label>
            <input
                id= "city"
                type="text"
                name="city"
                placeholder="Look for city"
            />
        </div>

        <div>
            <label htmlFor="city">Country:</label>
            <select>
            <option value="">-- Select country --</option>
                {countries.map((country) => (
                    <option
                        key = {country.code}
                        value={country.code}
                    >{country.name}</option>
                ))}
            </select>
        </div>

        <input type="submit" value="Seacrh weather"/>

    </form>
  )
}

export default Form