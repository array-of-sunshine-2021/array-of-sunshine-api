//SunsetForm.js

import SunsetRunDuration from './SunSetRunDuration'

import { useState } from 'react'

const SunsetForm = (prop) => {

     const [userSelect, setUserSelect] = useState('')

     const handleChange = (event) => {
     const radioChoiceSunset = event.target.value
          setUserSelect(radioChoiceSunset)
     }


     return(
          <div>
               <label htmlFor="sunInput">Run and watch the sunset</label>
               <input type="radio" name="sunInput" className="sunInput" value ="sunset" onChange={handleChange}/>
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