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

  const [sunsetTimeZonSelected, setSunsetTimeZoneSlected] = useState('')


    useEffect(() => {

      if(timeZone === "America/Toronto"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Toronto").format('HH:mm:ss A')
        // console.log(anotherTime)
        setTimeZoneSelected(finalSunRiseTime)

        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Toronto").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)



      }else if(timeZone === "America/Rainy_River"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Rainy_River").format('HH:mm:ss A')
        setTimeZoneSelected(finalSunRiseTime)
        // console.log(anotherTime)
        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Rainy_River").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)

      }else if(timeZone === "America/Denver"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Denver").format('HH:mm:ss A')
        setTimeZoneSelected(finalSunRiseTime)
        // console.log(anotherTime)
        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Denver").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)

      }else if(timeZone === "America/Vancouver"){
        const sunRiseTime = moment(`${sunriseApi}`);
        const finalSunRiseTime = sunRiseTime.tz("America/Vancouver").format('HH:mm:ss A')
        setTimeZoneSelected(finalSunRiseTime)
        // console.log(anotherTime)
        const sunSetTime = moment(`${sunsetApi}`)
        const finalSunSetTime = sunSetTime.tz("America/Vancouver").format('HH:mm:ss A')
        setSunsetTimeZoneSlected(finalSunSetTime)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[apiResult])



    return (
    <main>
      <form>
        <div>
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
              ? <SunsetForm sunSetTime = {timeZoneSelected}/>
              : ''
          }
        </div>
      </form>

    </main>
  )
};

export default Results;
