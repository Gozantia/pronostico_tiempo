import React, { Component } from 'react'
import Filter from './components/Filter2';
import Pronostico from './components/Pronostico';
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadPronostico:false,
      loadciudad: undefined
    }
    this.loadPronostico=this.loadPronostico.bind(this)
  }
  loadPronostico(){
    this.setState({
      loadPronostico:true
    })
  }

  unLoadPronostico= async e =>{
    e.preventDefault();
    const city = e.target.value =" ";
    this.setState({
      loadPronostico:false,
      loadciudad: city
    })
  }
  
  getCity = async e => {
    e.preventDefault();
    const city = e.target.value;
    this.setState({
      loadCiudad: city
  })
  console.log(city)
  };
 

  render() {
    
    const {loadPronostico } = this.state;
    return (
      <div>
        <header>
          <Filter pronostico={this.loadPronostico} loadcity={this.getCity} limpiar={this.unLoadPronostico}/>
        </header>
        <div>
          {loadPronostico && <Pronostico cityname={this.state.loadCiudad}/> }
        </div>
      </div>
    )
  }
}

export default App
