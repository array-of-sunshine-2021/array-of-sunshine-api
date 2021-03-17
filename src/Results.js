import { useState, useEffect } from 'react'
import SunsetForm from './SunsetForm'
import SunriseForm from './SunriseForm'
import moment from 'moment'
import 'moment-timezone'



const Results = ({ rise , sunset , timeZone}) => {
  
  const [timeZoneSelected , setTimeZoneSelected] =useState('')

    
    if(timeZone === "America/Toronto"){
      const time = moment(`${rise}`);
      const anotherTime = time.tz("America/Toronto").format('HH:mm:ss A')
      console.log(anotherTime)
      setTimeZoneSelected(anotherTime)
    }else if(timeZone === "America/Rainy_River"){
      const time = moment(`${rise}`);
      const anotherTime = time.tz("America/Rainy_River").format('HH:mm:ss A')
      setTimeZoneSelected(anotherTime)
    }else if(timeZone === "America/Denver"){
      const time = moment(`${rise}`);
      const anotherTime = time.tz("America/Denver").format('HH:mm:ss A')
      setTimeZoneSelected(anotherTime)
    }else if(timeZone === "America/Vancouver"){
      const time = moment(`${rise}`);
      const anotherTime = time.tz("America/Vancouver").format('HH:mm:ss A')
      setTimeZoneSelected(anotherTime)
    }




<<<<<<< HEAD
  }, [apiResult])
=======
>>>>>>> a7acb58fcc1ed819083860389967bd12ecd8d8a8


    return (
    <main>
      <form>
        <div>
          {/* <p>{timeZoneSelected}</p> */}
          {/* {
            timeZoneSelected
              ? <SunriseForm
              riseTime = {timeZoneSelected}
              />
              : ''
          } */}
        </div>

        {/* <div className="sunSetContainer">
          <p>{sunset}</p>
          {
            sunset
              ? <SunsetForm />
              : ''
          }
        </div> */}
      </form>

    </main>
  )
};

export default Results;
