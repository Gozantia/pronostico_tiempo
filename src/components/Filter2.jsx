import React from 'react'

function Filter2(props) {
       
    return (
      
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-4 col-lg-4">
                <h5>Pronóstico del tiempo para:</h5>
            </div>
            <div className="col-10 col-md-6 col-lg-6">
              <input
                type="text"
                className="form-control"
                placeholder="(ingresa el nombre de una ciudad)"
                name="city"
                onChange={props.loadcity}
                onClick={props.limpiar}     
                onKeyPress={props.handleKeyPress}
              />
            </div>            
            <div className="col-1">
              <button className="btn btn-info" onClick={props.pronostico} ><i className="fa fa-search"></i></button>
            </div>
          </div>
    );
};


export default Filter2
