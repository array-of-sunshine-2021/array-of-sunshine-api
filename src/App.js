import "./styles/App.scss";
import axios from "axios";
import { useState } from "react";
import Form from "./Form";
import Results from "./Results.js"


function App() {
  //define state for the form inputs
  const [dateInput, setDateInput] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [result , setResult] = useState([]);
  const [userChoiceTimeZone , setUserChoiceTimeZone] = useState('');

  const timeZoneCoordinates = [
    {
        timezone: 'eastern',
        lat: 43.6532,
        lng: -79.3832,
        
      },
    {
        timezone: 'central',
        lat: 29.7604,
        lng: -95.3698,
      },
    {
      timezone: 'pacific',
      lat:  37.7749,
      lng:  -122.4194,
    },
    {
      timezone: 'mountain',
      lat:  33.4484,
      lng:  -112.0740,
    }
  ]

  const handleDateInput = (event) => {
    const date = event.target.value;
    setDateInput(date);
  };

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
      response = response.data.results;
      console.log(response)
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
      
      />
      {
        userChoiceTimeZone 
        ? <Results
        apiResult = {result}
        timeZone = {userChoiceTimeZone}
        /> 
        : ""
      }

      
    </div>

  );
}

export default App;

