import React, { Component } from 'react';
import Form from './Component/Form';
import Weather from './Component/Weather';
import './index.css';
const API_KEY = "834695cb0eb7bf54a96a81936d84a89b";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state = {
    tempreture: '',
    City: '',
    Country: '',
    humidity: '',
    description: '',
    wind:'',
    Error: '',


  }
  getweather = async (e) => {
    e.preventDefault()
    const Country = e.target.elements.Country.value;
    const City = e.target.elements.City.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}`);
    const data = await api.json()
    if (City && Country) {
      this.setState({
        tempreture:parseInt(data.main.temp - 273.13) ,
        City: data.name,
        Country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind:data.wind.speed ,
        Error: '',
      })
    } else {
      this.setState({
        tempreture: '',
        City: '',
        Country: '',
        humidity: '',
        description: '',
        wind:'',
        Error: 'please enter data',

      })
    }
  }

  render() {


    return (

      <div className="App">
       <h1>Weather App</h1> 
        <Form getweather={this.getweather} />
        <Weather 
          tempreture={this.state.tempreture}
          City={this.state.City}
          Country={this.state.Country}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          Error={this.state.Error}
        />
      </div>


    );
  }
}
export default App;
