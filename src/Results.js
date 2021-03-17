import { useState, useEffect } from 'react'
import SunsetForm from './SunsetForm'
import SunriseForm from './SunriseForm'
import moment from 'moment'
import 'moment-timezone'



const Results = ({ apiResult , timeZone}) => {
  
  console.log(apiResult)
  const sunriseApi = apiResult.sunrise;
  const sunsetApi = apiResult.sunset;
  // setRise(sunriseApi)
  // setSunSet(sunsetApi)

  const [timeZoneSelected , setTimeZoneSelected] =useState('')


    useEffect(() => {

      if(timeZone === "America/Toronto"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const anotherTime = sunRiseTime.tz("America/Toronto").format('HH:mm:ss A')
        // console.log(anotherTime)
        setTimeZoneSelected(anotherTime)
      }else if(timeZone === "America/Rainy_River"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const anotherTime = sunRiseTime.tz("America/Rainy_River").format('HH:mm:ss A')
        setTimeZoneSelected(anotherTime)
        // console.log(anotherTime)

      }else if(timeZone === "America/Denver"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const anotherTime = sunRiseTime.tz("America/Denver").format('HH:mm:ss A')
        setTimeZoneSelected(anotherTime)
        // console.log(anotherTime)

      }else if(timeZone === "America/Vancouver"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const anotherTime = sunRiseTime.tz("America/Vancouver").format('HH:mm:ss A')
        setTimeZoneSelected(anotherTime)
        // console.log(anotherTime)
      }
    },[apiResult , sunriseApi , timeZone])



    return (
    <main>
      <form>
        <div>
          <p>{timeZoneSelected}</p>
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
