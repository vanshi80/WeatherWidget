import { useState } from "react"
import InfoBox from "./InfoBox.jsx"
import SearchBox from "./SearchBox.jsx"
export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Sikandrabad",
        feelsLike: 22.63,
        humidity: 39,
        temp: 23.23,
        tempMax: 23.23,
        tempMin: 23.23,
        weather: "broken clouds",
    });

    //updateInfo will get an object like the weatherInfo object and the weatherInfo will be set with this new object.
    // Now this updateInfo function will be called by the SearchBox after extracting the weatherInfo out of the API
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2 style={{ fontSize: "2rem", marginTop: "0" }}>Weather Widget</h2>
            <hr style={{ marginBottom: "2rem" }} />
            <SearchBox updateInfo={updateInfo} />
            {/* now sending the weather info as prop to the infoBox which it has to display */}
            <InfoBox info={weatherInfo} />
        </div>
    )
}