import React , {useState, useEffect} from 'react'
import axios from 'axios';
import Moment from 'react-moment';

function Actual(props) {
    const [clima, setClima] = useState("");
    const [desc, setDesc] = useState("");
    const [iconDesc, setIconDesc] = useState(" ")
    const [dtactual, setdtActual] = useState("");
    const [nameCity, setNameCity] = useState("");
    const [windSpeed, setWindSpeed] = useState([]);
    const [humedad, setHumedad] = useState([]);
    const [visibilidad, setVisibilidad] = useState([]);
    const [presion, setPresion] = useState([]);
    // const [mainh1, setH1] = useState([]);
    // const [iconH1, setIconH1] = useState([]);
    
    const APIkey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${props.cityname}&APPID=${APIkey}`) 
        .then(function (response) {
          const { data } = response;
          setClima(data.main.temp - 273.15)
          setDesc(data.weather[0].main)
          setIconDesc(data.weather[0].icon);
          setdtActual(data.dt);
          setNameCity(data.name);
          setWindSpeed(data.wind.speed);
          setHumedad(data.main.humidity)
          setVisibilidad(data.visibility)
          setPresion(data.main.pressure)
        //   setH1(data.weather[1].main)
        //   setIconH1(data.weather[1].icon);
          console.log(data)
        })
        .catch((error) => {
            console.log(error.response);
          });
     }, [props.cityname]);

     const iconActual = `http://openweathermap.org/img/wn/${iconDesc}@2x.png`;
    // const iconoH1 = `http://openweathermap.org/img/wn/${iconH1}@2x.png`;

    return (
    

            <div className="mt-3">
            
            <header className="row">
                <div className="col-12 mt-3">
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
            </header>
            <section className="current mt-3">
           
                <div className="col-4">
                    <img src={iconActual} alt="{desc}"/>
                </div>
                    <div className="col-4">
                        <h2>{Math.floor(clima) }°C - {desc}</h2>
                    </div>
                    <div className="col-4">
                        <h4>{nameCity} </h4>
                        <Moment unix format="dddd DD-MM-YY" >{dtactual}</Moment>
                    </div>
            {/* <ul className="list-group flex-row justify-content-center">
                    <li className="list-group-item">  
                        <img src={iconoH1} alt="{desc}"/>
                        {mainh1}
                    </li>
             </ul>  */}
            </section>
        </div>
    )
}

export default Actual
