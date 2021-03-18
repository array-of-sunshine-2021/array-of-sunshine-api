//SunsetForm.js - the form that allows the user to choose to run before sunset

import SunsetRunDuration from './SunSetRunDuration'
import { useState } from 'react'

const SunsetForm = (prop) => {
     const [userSelect, setUserSelect] = useState('')

     //handle the event for when the user selects the sunrise radio button
     const handleChange = (event) => {
     const radioChoiceSunset = event.target.value
          setUserSelect(radioChoiceSunset)
     }

     //once the sunrise and sunset times are displayed, create a button so the user can choose if they want be back before the sunset
     return(
          <div>
               <label htmlFor="sunInput">Run and watch the sunset</label>
               <input type="radio" name="sunInput" className="sunInput" value ="sunset" onChange={handleChange}/>

          {/* when the user selects the sunrise radio button, prompt the user to select how long they want their run to be */}
               {
                    userSelect
                    ?<SunsetRunDuration
                    sunSetTime= {prop.sunSetTime}/>
                    : ''
               }
               
          </div>
     )
}

export default SunsetForm; 