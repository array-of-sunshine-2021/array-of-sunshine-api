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

    const timeZoneUserChoice = timeZoneCoordinates.filter(
      (timeZoneCoordinate) => {
        // console.log(timeZoneCoordinate)
        return timeZoneSelected === timeZoneCoordinate.timezone;
      }
    );
    console.log(timeZoneUserChoice);
    const latitude = timeZoneUserChoice[0].lat;
    const longitude = timeZoneUserChoice[0].lng;
    console.log(latitude, longitude);
    setLatitude(latitude);
    setLongitude(longitude);
  };

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
      setResult(response)
    });
  };

  return (
    <div className="App">
      <header>
        <h1 className="wrapper">
          SUNRUN <FontAwesomeIcon icon={faRunning} />
        </h1>
      </header>
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
       radioChoice = {sunrise}
      />
      
    </div>

  );
}

export default App;
//Use the Sunrise/Sunset API
 //https://sunrise-sunset.org/api

// MY UNDERSTANDING UNDERSTANDING

 //App will suggest the time the user should leave for their run in order to hit sunrise or be back before sunset
  //Time will be suggested for user using a dropdown menu to select time: 15mins, 30mins, 45mins, 60mins

// Allow user enter the date of their run and choose whether to start the run by sunrise or finish the run before sunset
  //If user decides to start the run by sunrise, that is, clicks the 'start by sunrise' button...
    //User should set the duration of the run by the sunrise 'time'. For example, if sunrise starts by 8am, user cannot set 'duration of run' before 8am. It should throw an error if user does. So the 'start by sunrise' option button checks to see that the user picks a duration by or after 8am.

    //However, if user decides to not run till sunset by selecting the 'run before sunset' button, 
      // We get the value of 'sunset' time, find the difference between the sunset time and sunrise time to determine if the 'duration of the time to run' chosen by the user could be accomodated in the difference of the time. 
        //If it could, allow user to run

          //If not, the code should throw an error like 'insufficient time' to take a run.
            //For example, if sunrise is 8am and sunset is 6pm in my location, and the current time I decided to run is 5:30pm (5:30pm is still after sunrise), choosing a duration of more than 30mins should throw an error. Because I won't be back before sunset (6pm)

// Requirements:
// • Using the Sunrise/Sunset API - https://sunrise-sunset.org/api - suggest the time the user should leave for their run in order to hit sunrise or be back before sunset

// • Users should be able to enter the date of their run and choose whether they want to start the run


// by sunrise or finish the run before the sun sets

// • If it’s sun set, enter the duration of the run
// • The app will suggest the time to leave for the run in order to hit sunrise or be back before sunset
// • Proper error handling. For example:
// • If a user types in a query that yields no result - they should be provided feedback (e.g. there
// were no items found)
// • Common error resp
