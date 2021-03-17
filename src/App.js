import "./styles/App.scss";
import axios from "axios";
import { useState , useEffect } from "react";
import Form from "./Form";
import Results from "./Results.js"


function App() {
  //define state for the form inputs
  const [dateInput, setDateInput] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [result , setResult] = useState([]);
  const [userChoiceTimeZone , setUserChoiceTimeZone] = useState('');
  // const [rise, setRise] = useState('')
  // const [sunSet, setSunSet] = useState('')

//create
  const timeZoneCoordinates = [
    {
        timezone: 'America/Toronto',
        lat: 43.6532,
        lng: -79.3832,
        
      },
    {
        timezone: 'America/Rainy_River',
        lat: 29.7604,
        lng: -95.3698,
      },
    {
      timezone: 'America/Vancouver',
      lat:  37.7749,
      lng:  -122.4194,
    },
    {
      timezone: 'America/Denver',
      lat:  33.4484,
      lng:  -112.0740,
    }
  ]

//capture the date input from the form
  const handleDateInput = (event) => {
    const date = event.target.value;
    setDateInput(date);
  };

//Handle form to capture the timezone the user selects and add it to the params of the API
    const handleTimeZone = (event) => {
    const timeZoneSelected = event.target.value
    setUserChoiceTimeZone(timeZoneSelected)
    const timeZoneUserChoice = timeZoneCoordinates.filter((timeZoneCoordinate) => {
      return(
        timeZoneSelected === timeZoneCoordinate.timezone
      )
    })
    const latitude = timeZoneUserChoice[0].lat
    const longitude= timeZoneUserChoice[0].lng
    setLatitude(latitude)
    setLongitude(longitude)
  }

//call the API on the form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "GET",
      url: "https://api.sunrise-sunset.org/json",
      params: {
        lat: `${latitude}`,
        lng: `${longitude}`,
        date: `${dateInput}`,
        formatted: 0, 
      },
    }).then((response) => {
      const responseObj= response.data.results;
      setResult(responseObj)
    
    })
  };
    

  return (
    <div className="App">
      <h1>SUN RUN</h1>
      <h2>hello, testing</h2>

      <Form
      submit={handleSubmit}
      date= {dateInput}
      dateChange={handleDateInput}
      timeZone = {handleTimeZone}
      />
      
      <Results
      apiResult = {result}
      timeZone = {userChoiceTimeZone}
      // rise = {rise}
      // sunset = {sunSet}
      /> 
      
    

      
    </div>

  );
}

export default App;

