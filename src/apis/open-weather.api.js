import axios from "axios";

//const API_KEY ='5f0f294bee7d8d28765c4f87c9dfe694';
axios.defaults.baseURL='https://api.openweathermap.org/data/2.5/';
const appIdQueryParam=`appid=${process.env.REACT_APP_API_KEY}`;
function getCurrentWeather(location){
return axios.get(
`weather?q=${location}&units=imperial&${appIdQueryParam}`
);
}
function getForeCast(lat,lon){
    return axios.get(
        `onecall?lat=${lat}&lon=${lon}&units=imperial&${appIdQueryParam}`
    )
}




export {
    getCurrentWeather ,
    getForeCast
}