// Form.js
import { useState } from 'react';


const Form = (props) => {
    const [sunSet, setSunSet] = useState('false');
    
    const handleToggle = () => {
        setSunSet(!sunSet)
    }

    const handleToggleSunrise = () => {
        setSunSet('false')
    }

    return (
        <form action="" className="wrapper">
            <label htmlFor="dateInput">What day will you go for a run?</label>
            <input type="date" id="dateInput" className="dateInput" value={props.dateInput} onChange={props.dateChange} />

            <label htmlFor="timeZonesInput">Pick your timezone:</label>
            <select name="timeZonesInput" id="timeZonesInput" className="timeZoneInput" onChange ={props.timeZone} >
                <option value="eastern">Eastern</option>
                <option value="central">Central</option>
                <option value="pacific">Pacific</option>
                <option value="mountain">Mountain</option>
            </select>

            <div className="sunState">
                <p>When will you go for a run?</p>
                <label htmlFor="sunInput">After Sunrise</label>
                <input type="radio" name="sunInput" className="sunInput" value ="sunrise" onChange = {props.sunRun} onClick = {handleToggleSunrise}/>

                <label htmlFor="sunInput">Before Sunset</label>
                <input type="radio" name="sunInput" className="sunInput" value ="sunset" onChange = {props.sunRun} />

                <div className={`${sunSet ? "runDuration" : "runDurationVisible"}`}>
                    <label htmlFor="runLength">How long is your run?</label>
                    <select onChange = {props.duration}name="runLength" id="runLength">
                        <option value="15">15 min</option>
                        <option value="30">30 min</option>
                        <option value="60">60 min</option>
                        <option value="90">90 min</option>
                    </select>
                </div>
            </div>

            <button type="submit" onClick={props.submit}>Let's Workout!</button>


        </form>
    )
};

export default Form;