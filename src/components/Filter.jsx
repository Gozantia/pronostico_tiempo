import React, {useState} from 'react';  
import axios from 'axios';
import Moment from 'react-moment';

function Filter() {
    const [ciudad, setCiudad] = useState("Medellin");
    const [pais, setPais] = useState("co");
    const [clima, setClima] = useState("");
    const [desc, setDesc] = useState("");
    const [iconDesc, setIconDesc] = useState(" ")
    const [dtactual, setdtActual] = useState("");


    const obtenerClima = (ciudad, pais) => {
      axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&APPID=ca651b8d0ab118af883ff06f91d43760`,
      })
        .then((response) => {
         console.log(response.data);  
         //Se convierte F a C
        setClima(response.data.list[0].main.temp - 273.15);
        setDesc(response.data.list[0].weather[0].description);
        setIconDesc(response.data.list[0].weather[0].icon);
        setdtActual(response.data.list[0].dt);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const iconActual = `http://openweathermap.org/img/wn/${iconDesc}@2x.png`
    return (
        <div>
           <main>
           <input 
          type="text"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <input
          type="text"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
        <button
          onClick={()=>{
            obtenerClima(ciudad, pais);
          }}
        >Ver el clima</button>
        </main>
        <header>
          <h1>Pronóstico {ciudad} </h1>
          <img src={iconActual} alt="{desc}"/>
          <Moment unix format="dddd DD" >{dtactual}</Moment>
          <p>Temperatura  {Math.round(clima * 100) / 100} ℃ -{desc} </p>
        </header>
        </div>
        
    )
}

export default Filter
