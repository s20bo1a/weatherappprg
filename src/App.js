import React from "react"; 
import './App.scss';
                                 //functional components which returns a template
import SearchBar from './components/searchbar';
import CurrentWeather from './components/current-weather';
import ForeCast from './components/forecast-weather';

import { getCurrentWeather,getForeCast } from './apis/open-weather.api';


class  App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        location: 'London',
        temp: '',
        feelsLike:'',
        desciption:'',
        icon:'',
        hourlyForeCast:[]
    }; 
    
  }
  componentDidMount(){
    this.onFormSubmit();
  }
  onInputChange(e) {
      this.setState({
          location: e.target.value,
      });
  }
  async onFormSubmit() {
       const  weatherRes=await getCurrentWeather(this.state.location);
        const lat=weatherRes.data.coord.lat;
        const lon=weatherRes.data.coord.lon;
        const forecastRes= await getForeCast(lat,lon);
     
    //undefined
      // getCurrentWeather(this.state.location)
      //     .then((res) => {
             
      //     });
               this.setState({
                  temp: weatherRes.data.main.temp,
                  feelsLike:weatherRes.data.main.feels_like,
                  description:weatherRes.data.weather[0].main,  //for accesing data from the api
                  icon:weatherRes.data.weather[0].icon,
                  hourlyForeCast:forecastRes.data.hourly
               });
  } 
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar 
        location={this.state.location}
        inputChange={(e)=>this.onInputChange(e)}
        formSubmitted={()=>this.onFormSubmit()}
        /> 
        <CurrentWeather 
        currentTemperature={this.state.temp}
        feelsLike={this.state.feelsLike}
        description={this.state.description}
        icon={this.state.icon}
        />
        <ForeCast forecast={this.state.hourlyForeCast}/>
        
        </header>
    </div>
  );
}
}
export default App;
