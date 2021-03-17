import { useState, useEffect } from 'react'
import SunsetForm from './SunsetForm'
import SunriseForm from './SunriseForm'



const Results = ({ apiResult, timeZone }) => {
  const sunriseApi = apiResult.sunrise;
  const sunsetApi = apiResult.sunset;

  const [rise, setRise] = useState('')
  const [sunSet, setSunSet] = useState('')
  
  
  useEffect(() => {

    if (timeZone === "eastern") {
      const convertedESTRise = parseInt(sunriseApi) - 4;

      const sunriseSubstrEst = sunriseApi.substring(2);

      const finalRiseEST = convertedESTRise + sunriseSubstrEst;

      setRise(finalRiseEST)

      const convertedESTSet = parseInt(sunsetApi) - 4;

      const sunsetSubstrEst = sunsetApi.substring(2);

      const finalSetEST = convertedESTSet + sunsetSubstrEst;

      setSunSet(finalSetEST)

    } else if (timeZone === "central") {

      const convertedCTRise = parseInt(sunriseApi) - 5;

      const sunriseSubstrCT = sunriseApi.substring(2, 8)

      const finalRiseCT = convertedCTRise + sunriseSubstrCT;

      setRise(finalRiseCT)

      const convertedCTSet = parseInt(sunsetApi) - 5;

      const sunsetSubstrCT = sunsetApi.substring(2, 8);

      const finalSetCT = convertedCTSet + sunsetSubstrCT;

      setSunSet(finalSetCT)

    } else if (timeZone === "mountain") {

      const convertedMTRise = (parseInt(sunriseApi) + 12) - 6;

      const sunriseSubstrMT = sunriseApi.substring(1, 7);

      const finalRiseMT = convertedMTRise + sunriseSubstrMT;

      setRise(finalRiseMT)

      const convertedMTSet = (parseInt(sunsetApi) + 12) - 6;

      const sunsetSubstrMT = sunsetApi.substring(1, 7);

      const finalSetMT = convertedMTSet + sunsetSubstrMT;

      setSunSet(finalSetMT)

    } else if (timeZone === "pacific") {

      const convertedPSTRise = (parseInt(sunriseApi) + 12) - 7;

      const sunriseSubstrPST = sunriseApi.substring(1, 7);

      const finalRisePST = convertedPSTRise + sunriseSubstrPST;

      setRise(finalRisePST)

      const convertedPSTSet = (parseInt(sunsetApi) + 12) - 7;

      const sunsetSubstrPST = sunsetApi.substring(1, 7);

      const finalSetPST = convertedPSTSet + sunsetSubstrPST;

      setSunSet(finalSetPST)
    }

  }, [apiResult])


  return (
    <main>
      <form>

        <div>
          <p>{rise}</p>
          {
            rise
              ? <SunriseForm
              riseTime = {rise}
              />
              : ''
          }
        </div>

        <div className="sunSetContainer">
          <p>{sunSet}</p>
          {
            sunSet
              ? <SunsetForm />
              : ''
          }
        </div>
      </form>

    </main>
  )
};

export default Results;
