import "./styles/App.scss";
import axios from "axios";
import { useState } from "react";
import Form from "./Form";
import Results from "./Results.js"


function App() {
  //define state for the form inputs
  const [dateInput, setDateInput] = useState('');
  const [sunrise , setSunrise] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [duration , setDuration] = useState('');
  const [result , setResult] = useState([]);
  const [userChoiceTimeZone , setUserChoiceTimeZone] = useState('')


  const timeZoneCoordinates = [
    {
        timezone: 'eastern',
        lat: 43.6532,
        lng: -79.3832,
        timezone: 'eastern',
      },
    {
        timezone: 'central',
        lat: 29.7604,
        lng: -95.3698,
        timezone: 'central',
      },
    {
      timezone: 'pacific',
      lat:  37.7749,
      lng:  -122.4194,
      timezone: 'pacific',
    },
    {
      timezone: 'mountain',
      lat:  33.4484,
      lng:  -112.0740,
      timezone: 'mountain',
    }
  ]

  //create functions to handle input changes from the form
  const handleDateInput = (event) => {
    const date = event.target.value;
    setDateInput(date);
  };

  const handleTimeZone = (event) => {
    const timeZoneSelected = event.target.value

    setUserChoiceTimeZone(timeZoneSelected)

    const timeZoneUserChoice = timeZoneCoordinates.filter((timeZoneCoordinate) => {
      // console.log(timeZoneCoordinate)
      return(
        timeZoneSelected === timeZoneCoordinate.timezone
      )
    })
    const latitude = timeZoneUserChoice[0].lat
    const longitude= timeZoneUserChoice[0].lng
    setLatitude(latitude)
    setLongitude(longitude)
  }


  const handleRadioChoice = (event) => {
    const radioChoice = event.target.value;
    setSunrise(radioChoice)
  }

  const handleDuration = (event) => {
    const durationChoice = event.target.value;
    setDuration(durationChoice)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "GET",
      url: "https://api.sunrise-sunset.org/json",
      params: {
        lat: `${latitude}`,
        lng: `${longitude}`,
        date: `${dateInput}`,
      },
    }).then((response) => {
      response = response.data.results;
      // const apiSunrise = response.sunrise;
      // const apiSunset = response.sunset;
      setResult(response)
    });
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
      sunRun = {handleRadioChoice}
      duration = {handleDuration}
      />
      <Results
       apiResult = {result}
       userDuration = {duration}
       timeZone = {userChoiceTimeZone}
      />
    </div>

  );
}

export default App;

