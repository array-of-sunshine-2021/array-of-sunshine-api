// SunriseForm.js
import RunDuration from './RunDuration'

import { useState } from 'react'

const SunriseForm = () => {

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
                ? <RunDuration/>
                : ''
            }


            
        </div>

    )
}
export default SunriseForm;

