import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Form from './Form'

function App() {
  //define state for the form inputs
  const [dateInput, setDateInput] = useState('');

  //create functions to handle input changes from the form
  const handleDateInput = (event) => {
    setDateInput(event.target.value);
    console.log(event);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'GET',
      url: 'https://api.sunrise-sunset.org/json',
      params: {
        lat: 36.7201600,
        lng: -4.4203400,
        date: {dateInput}
      }
    }).then(response => {
      response = response.data.results
      // console.log(response);
    })
  }


  return (
    <div className="App">
      <Form
      submit={handleSubmit}
      dateInput= {dateInput}
      dateChange={handleDateInput}
      />
      
    </div>
  );
}

export default App;
