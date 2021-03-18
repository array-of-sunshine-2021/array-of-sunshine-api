//Results.js - takes the API time (UTC) time and converts it to the user's selected timezone and displays it after the submit of the form

import { useState, useEffect } from 'react'
import SunsetForm from './SunsetForm'
import SunriseForm from './SunriseForm'
import moment from 'moment'
import 'moment-timezone'

const Results = ({ apiResult , timeZone}) => {
  
  console.log(apiResult)
  const sunriseApi = apiResult.sunrise;
  const sunsetApi = apiResult.sunset;
  const [timeZoneSelected , setTimeZoneSelected] =useState('')
  const [sunsetTimeZonSelected, setSunsetTimeZoneSlected] = useState('')

  //useEffect will make sure the API is only called once when the inital form is submitted
  //change the API time result from UTC time to the user's selected timezone through an If statement by using moment() for both runrise and sunset times
    useEffect(() => {

      if(timeZone === "America/Toronto"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Toronto").format('HH:mm:ss A')
        setTimeZoneSelected(finalSunRiseTime)

        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Toronto").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)

      }else if(timeZone === "America/Rainy_River"){

        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Rainy_River").format('HH:mm:ss A')
        setTimeZoneSelected(finalSunRiseTime)

        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Rainy_River").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)

      }else if(timeZone === "America/Denver"){

        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Denver").format('HH:mm:ss A')
        setTimeZoneSelected(finalSunRiseTime)

        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Denver").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)

      }else if(timeZone === "America/Vancouver"){

        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Vancouver").format('HH:mm:ss A')
        setTimeZoneSelected(finalSunRiseTime)
        
        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Vancouver").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[apiResult])


  //after the initial form is submitted, display the sunrise and sunset times 
  //put the sunset and sunrise in a new form so that the user can choose the time of day they want to go for a run
    return (
    <main className="wrapper">
      <form>
        <div className="sunRiseContainer">
          <p>{timeZoneSelected}</p>
          {
            timeZoneSelected
              ? <SunriseForm
              riseTime = {timeZoneSelected}
              />
              : ''
          }
        </div>

        <div className="sunSetContainer">
          <p>{sunsetTimeZonSelected}</p>
          {
            sunsetTimeZonSelected
              ? <SunsetForm 
              sunSetTime = {sunsetTimeZonSelected}/>
              : ''
          }
        </div>
      </form>

    </main>
  )
};

export default Results;
