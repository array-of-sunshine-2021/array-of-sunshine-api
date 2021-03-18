// SunsetRunDuration.js - if the user selects the sunset radio button, display a select menu to choose how long they would like their run to be

import { useState } from 'react'
import moment from 'moment'

const SunsetRunDuration = (prop) => {
    const [runSetDuration, setRunSetDuration] = useState('');

    //handle the change between run duration values the user may select
    const handleChange = (event) => {
        const timeValue = event.target.value

        //when the user selects a run duration time - subtract that value from the sunset time 
        const duration = moment.duration({ hours: 0, minutes: `${timeValue}`, seconds: 0 })
        //calculate the time the user should start running in order to get back before the sunsets and format the time 
        const suggestedRunTime = moment(prop.sunSetTime, 'HH:mm:ss A').subtract(duration).format('HH:mm:ss A');

        setRunSetDuration(suggestedRunTime)
    }

    //create a drop down menu for the user to select how long they intend their run to be
    return(
        <div>
            <label htmlFor="runLength">How long is your run?</label>
            <select name="runLength" id="runLength" onChange={handleChange}>
                <option value="placeholder" defaultValue>Choose One:</option>
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
            </select>
            <p>{`If you want to be home before dark be sure to leave at ${runSetDuration}!`}</p>
        </div>
    )
}

export default SunsetRunDuration