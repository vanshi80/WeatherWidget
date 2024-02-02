import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

// now we received info as prop from the WeatherApp which is given by the SearchBox
export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1566996694954-90b052c413c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyb2tlbiUyMGNsb3VkcyUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1526066843114-f1623fde3476?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="weather_image"
                    height="140"
                    image={info.temp > 15 ? HOT_URL : info.humidity > 80 ? RAIN_URL : COLD_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.temp > 15 ? < WbSunnyIcon /> : info.humidity > 80 ? <UmbrellaIcon /> : <AcUnitIcon />}
                    </Typography>
                    <hr />
                    {/* if we do not set component as span then react will provide some warning message.*/}
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}