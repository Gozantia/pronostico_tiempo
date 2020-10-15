import React, { useState, useEffect } from "react";
import axios from "axios";
import Actual from "./Actual";

function Pronostico(props) {
  const [horaData, setHoraData] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${props.cityname}&APPID=ca651b8d0ab118af883ff06f91d43760&units=metric`
      )
      .then(function (response) {
        const { data } = response;
        const { list } = data;
        const newPronostico = list.slice(0, 8);
        const newHoraData = {};
        newPronostico.forEach((hora, index) => {
          newHoraData[index ] = {
            id: index,
            hora: hora.dt_txt,
            icono:`http://openweathermap.org/img/wn/${hora.weather[0].icon}@2x.png`,
            temperatura: Math.floor(hora.main.temp)
          };
          
        });
        console.log(newPronostico)
        setHoraData(newHoraData);
      })

      .catch((error) => {
        console.log(error.response);
      });
  }, [props.cityname]);

  const getHoraCard = (horaId) => {
    const { hora, icono, temperatura } = horaData[horaId];
    return (
    <div key={horaId} className="hora">
        <img src={icono} alt="{hora}"/>
        <h6>{temperatura}°C </h6>
        <h6>{hora}</h6>
    </div>
    );
  };

  return (
    <div className="container mt-3">
      <Actual cityname={props.cityname} />
      <h5 className="text-center mt-3">Próximas horas:</h5>
      <div className="container-card">
        {Object.keys(horaData).map(
          (horaId) =>
            getHoraCard(horaId)
        )}
      </div>
    </div>
  );
}
export default Pronostico;
