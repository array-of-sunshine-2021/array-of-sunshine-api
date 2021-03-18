// SunriseForm.js - the form that allows the user to choose to run and catch the sunrise

import SunRiseRunDuration from './SunRiseRunDuration'
import { useState } from 'react'

import nounSunrise from './assets/nounSunrise.png'

const SunriseForm = (prop) => {
    const [userSelect, setUserSelect] = useState('')

    //handle the event for when the user selects the sunrise radio button
    const handleChange = (event) => {
        const radioChoiceSunrise = event.target.value
        setUserSelect(radioChoiceSunrise)
    }

     //once the sunrise and sunset times are displayed, create a button so the user can choose if they want to run and catch the sunrise
    return (
        <div className="sunRiseContainer">
            <p>Sunrise {prop.riseTime}</p>
            <img className="sunriseImage" src={nounSunrise} alt="sunrise icon"/>
            <label htmlFor="sunInput">Run and watch the sunrise </label>
            <input type="radio" name="sunInput" className="sunInput" value="sunrise" onChange= {handleChange}/>

        {/* when the user selects the sunrise radio button, prompt the user to select how long they want their run to be */}
            {
                userSelect
                ? <SunRiseRunDuration
                riseTime={prop.riseTime}
                />
                : ''
            }

        </div>
    )
}
export default SunriseForm;

