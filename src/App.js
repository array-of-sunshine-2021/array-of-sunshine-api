import "./styles/App.scss";
import axios from "axios";
import { useState } from "react";
import Form from "./Form";


function App() {
  //define state for the form inputs
  const [dateInput, setDateInput] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [sunrise , setSunrise] = useState('');

//hard coded timezone cities for lat and long 
//in an array of objects
  const timeZoneCoordinates = [
    eastern = {
        lat: 43.6532,
        lng: 79.3832
      },
    central = {
        lat:29.7604,
        lng:95.3698,
      },
    pacific = {
      lat:37.7749,
      lng:122.4194,
    },
    mountain = {
      lat:33.4484,
      lng:112.0740,
    }
  ]

  
  //create functions to handle input changes from the form
  const handleDateInput = (event) => {
    const date = event.target.value;
    setDateInput(date);
  };

  const handleTimeZone = (event) => {
    const timeZoneSelected = event.target.value
    setTimeZone(timeZoneSelected)

    // const [eastern, central, pacific, mountain] = timeZoneCoordinates

    const timeZoneUserChoice = timeZoneCoordinates.filter((timeZoneCoordinate) => {
      console.log(timeZoneCoordinate)
      return(
        timeZoneSelected === timeZoneCoordinate 
      )
    })
    console.log(timeZoneUserChoice)
  }


  const handleRadioChoice = (event) => {
    const radioChoice = event.target.value
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "GET",
      url: "https://api.sunrise-sunset.org/json",
      params: {
        lat: 36.72016,
        lng: -4.42034,
        date: `${dateInput}`,
      },
    }).then((response) => {
      response = response.data.results;
      console.log(response);
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
      />
    </div>
  );
}

export default App;

