// SunriseForm.js
import RunDuration from './RunDuration'
import SunriseRun from './SunriseRun'

import { useState } from 'react'

const SunriseForm = (prop) => {

    const [userSelect, setUserSelect] = useState('')

    const handleChange = (event) => {
        const radioChoiceSunrise = event.target.value
        setUserSelect(radioChoiceSunrise)
    }



    return (
        <div>
            <label htmlFor="sunInput">Run and watch the sunrise</label>
            <input type="radio" name="sunInput" className="sunInput" value="sunrise" onChange= {handleChange}/>

            {
                userSelect
                ? <RunDuration
                riseTime={prop.riseTime}
                />
                : ''
            }


            
        </div>

    )
}
export default SunriseForm;

