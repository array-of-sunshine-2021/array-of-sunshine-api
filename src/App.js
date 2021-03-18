import "./styles/App.scss";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Form from "./Form";
import Results from "./Results.js";



function App() {
  //define state for the form inputs
  const [dateInput, setDateInput] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [result , setResult] = useState([]);
  const [userChoiceTimeZone , setUserChoiceTimeZone] = useState('');

  //create an array of timezone objects in order to push lat and lng into the params of the API
  const timeZoneCoordinates = [
    {
      timezone: "America/Toronto",
      lat: 43.6532,
      lng: -79.3832,
    },
    {
      timezone: "America/Rainy_River",
      lat: 29.7604,
      lng: -95.3698,
    },
    {
      timezone: "America/Vancouver",
      lat: 37.7749,
      lng: -122.4194,
    },
    {
      timezone: "America/Denver",
      lat: 33.4484,
      lng: -112.074,
    },
  ];

  //handle the date input from the form
  const handleDateInput = (event) => {
    const date = event.target.value;
    setDateInput(date);
    console.log(date)
  };

  //handle the timezone select from the form and make it correspond to the array of timezone objects
  const handleTimeZone = (event) => {
    const timeZoneSelected = event.target.value
    setUserChoiceTimeZone(timeZoneSelected)

    setUserChoiceTimeZone(timeZoneSelected);

    const timeZoneUserChoice = timeZoneCoordinates.filter(
      (timeZoneCoordinate) => {
        return timeZoneSelected === timeZoneCoordinate.timezone;
      }
    );
    const latitude = timeZoneUserChoice[0].lat;
    const longitude = timeZoneUserChoice[0].lng;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  //on the submit of the form, run the API call
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
    }).catch(() => {
      alert(`Oh no, looks like you forgot to enter the DATE & your TIMEZONE. PLease make sure to enter both!`)
    })
  };

  //add the Form component (to be viewed on page load) & appened the results to the page after the form is submitted
  return (
    <div className="App">
      <header>
        <h1>
          SUN RUN <FontAwesomeIcon icon={faRunning} />
        </h1>
      </header>

      <Form
        submit={handleSubmit}
        date={dateInput}
        dateChange={handleDateInput}
        timeZone={handleTimeZone}
      />

      <Results
        className="wrapper"
        apiResult={result}
        timeZone={userChoiceTimeZone}
      />
      <footer className ="footer">
            <p>Created at <a href="https://www.junocollege.com">Juno College</a></p>
      </footer>
    </div>
  );
}

export default App;
