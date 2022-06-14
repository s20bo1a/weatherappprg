import React from "react";
import "./forecast-weather.scss";
class ForeCast extends React.Component {

  render() {
    const forecastItems = this.props.forecast.map((f, i) => {
      const key = `forecast-item_${i}`;
      const url = `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;

      let hour = new Date(f.dt * 1000).getHours();
      let ampm = 'AM';
      if (hour > 12) {
        hour = hour - 12;
        ampm = 'PM';

      }
      return (
        <div className="forecast-item" key={key}>
          <p className="forecast-item__hour">{hour}:00{ampm}{" "}</p>
          <p className="forecast-item__temp">{f.temp}°</p>
          <img src={url} alt={f.weather[0].description} />
          <p className="forecast-item__description">{f.weather[0].main}</p>
        </div>

      )

    })





    return (
      <div className="forecast">
        <h1 className="forecast-title">Hourly Forecast</h1>
        <div className="forecast-items">{forecastItems}</div>
      </div>


    )
  }

}
export default ForeCast;