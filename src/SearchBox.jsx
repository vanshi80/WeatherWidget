import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4a3be9efbcde36b6d4d1de6c549fbb66";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
            throw (err);
        }
    }

    let [city, setCity] = useState("Sikandrabad");
    let [error, setError] = useState(false);

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    }
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="CityName" variant="outlined" required onChange={handleChange} value={city} />
                <br /><br />
                <Button style={{ marginBottom: "1rem" }} variant="contained" type='submit'>Submit</Button>
                {error && <p style={{ color: "red", marginTop: 0 }}>This place does not exist!</p>}
            </form>
        </div>
    )
}