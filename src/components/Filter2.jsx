import React from 'react'

function Filter2(props) {
       
    return (
      <div className="container h-100 mt-1 ">
        
          <div>{props.error ? error() : ""}</div>
          <div className="row ">
            <div className="col-md-5 col-sm-12 text-right align-self-center ">
                <h5>Pronóstico del tiempo para:</h5>
            </div>
            <div className="col-md-5 col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="(ingresa el nombre de una ciudad)"
                name="city"
                onChange={props.loadcity}
                onClick={props.limpiar}
              />
            </div>            
            <div className="col-md-1">
              <button className="btn btn-info" onClick={props.pronostico}><i className="fa fa-search"></i></button>
            </div>
            <div className="col-md-1">
            </div>
          </div>

      </div>
    );
};
function error(props){
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City...!
    </div>
    )
};

export default Filter2
