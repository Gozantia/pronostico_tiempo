import React, {useState, useEffect} from "react";
import axios from 'axios';
import Moment from 'react-moment';

function Pronostico(props) {
   
    const [clima, setClima] = useState("");
    const [desc, setDesc] = useState("");
    const [iconDesc, setIconDesc] = useState(" ")
    const [dtactual, setdtActual] = useState("");
    const [nameCity, setNameCity] = useState("");
    const [windSpeed, setWindSpeed] = useState([]);
    const [humedad, setHumedad] = useState([]);
    const [visibilidad, setVisibilidad] = useState([]);
    const [presion, setPresion] = useState([]);
    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=${props.cityname}&APPID=ca651b8d0ab118af883ff06f91d43760`)
        .then(function (response) {
          const { data } = response;
          setClima(data.list[0].main.temp - 273.15)
          setDesc(data.list[0].weather[0].description);
          setIconDesc(data.list[0].weather[0].icon);
          setdtActual(data.list[0].dt);
          setNameCity(data.city.name);
          setWindSpeed(data.list[0].wind.speed);
          setHumedad(data.list[0].main.humidity)
          setVisibilidad(data.list[0].visibility)
          setPresion(data.list[0].main.pressure)
          console.log(data)
        })
        .catch((error) => {
            console.log(error.response);
          });
     }, [props.cityname]);

     const iconActual = `http://openweathermap.org/img/wn/${iconDesc}@2x.png`

    return (
        <div className="container">
            <div className="row">
            <div className="col-12 h-100">
                <ul className="list-group flex-row justify-content-center">
                    <li className="list-group-item">
                        Viento: {windSpeed}m/s
                    </li>
                    <li className="list-group-item">
                        Humedad: {humedad}%
                    </li>
                    <li className="list-group-item">
                        Visibilidad: {visibilidad} mts
                    </li>
                    <li className="list-group-item">
                        Presión: {presion} hPa
                    </li>
                </ul>
            </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-2 col-md-2 col-lg-2 col-xl-1">
                    <img src={iconActual} alt="{desc}"/>
                </div>
                    <div className="col-12 col-sm-auto col-md-4 col-lg-4">
                    <h2 className=" py-3">{Math.floor(clima) }℃ - {desc}</h2>
                    <h4>{nameCity} </h4>
                    <Moment unix format="dddd DD" >{dtactual}</Moment>
                </div>
            </div>
        </div>

    )
}
export default Pronostico
