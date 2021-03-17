// RunDuration.js
import { useState } from 'react'
import moment from 'moment'

const RunDuration = (prop) => {

    const [runDuration, setRunDuration] = useState('');

    const handleChange = (event) => {
        const timeValue = event.target.value

        const duration = moment.duration({ hours: 0, minutes: `${timeValue}`, seconds: 0 })
        const suggestedTime = moment(prop.riseTime, 'HH:mm').subtract(duration).format('HH:mm');
    
        console.log(suggestedTime)
        console.log(timeValue)
    }




    return (
        <div>
            <label htmlFor="runLength">How long is your run?</label>
            <select name="runLength" id="runLength" onChange={handleChange}>
                <option value="placeholder" defaultValue>Choose One:</option>
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
            </select>
        </div>
    )
}

export default RunDuration