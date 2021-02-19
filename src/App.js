import React, { useState } from "react";
import './App.css';
import CityInput from "./Components/CityInput"
import CityWeather from "./Components/CityWeather"

function App(){
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState({});
  const [temp, setTemp] = useState();

  const renderCityWeather =()=>{
      if(temp){
        return <CityWeather temp={temp} />
      }
    }
  

  return (
    <>
    <CityInput city={city} setCity={setCity} setCityWeather={setCityWeather} setTemp={setTemp} />
    <br />
    {renderCityWeather()}
    </>
  )
}

export default App;