import {useEffect} from 'react'
import Moment from 'react-moment';
import 'moment-timezone';


const Results = ({ apiResult, userDuration, timeZone }) => {
  const sunriseApi = apiResult.sunrise;
  const sunsetApi = apiResult.sunset;
  console.log(apiResult);

useEffect(() => {
    if (timeZone === "eastern") {

      const convertedESTRise = parseInt(sunriseApi) - 4;
      const convertedESTSet = parseInt(sunsetApi) - 4;

      const sunriseSubstrEst = sunriseApi.substring(2);
      const sunsetSubstrEst = sunsetApi.substring(2);

      const finalRiseEST = convertedESTRise + sunriseSubstrEst;
      const finalSetEST = convertedESTSet + sunsetSubstrEst;

      console.log (finalRiseEST, finalSetEST);

      

  } else if (timeZone === "central") {
    const convertedCTRise = parseInt(sunriseApi) - 5;
    const convertedCTSet = parseInt(sunsetApi) - 5;

    const sunriseSubstrCT = sunriseApi.substring(2);
    const sunsetSubstrCT = sunsetApi.substring(2);

    const finalRiseCT = convertedCTRise + sunriseSubstrCT;
    const finalSetCT = convertedCTSet + sunsetSubstrCT;

    console.log (finalRiseCT, finalSetCT)

  } else if (timeZone === "mountain") {
    const convertedMTRise = parseInt(sunriseApi) - 7;
    const convertedMTSet = parseInt(sunsetApi) - 7;

    const sunriseSubstrMT = sunriseApi.substring(2);
    const sunsetSubstrMT = sunsetApi.substring(2);

    const finalRiseMT = convertedMTRise + sunriseSubstrMT;
    const finalSetMT = convertedMTSet + sunsetSubstrMT;

    console.log(finalRiseMT, finalSetMT)


  } else if (timeZone === "pacific") {
    const convertedPSTRise = parseInt(sunriseApi) - 7;
    const convertedPSTSet = parseInt(sunsetApi) - 7;

    const sunriseSubstrPST = sunriseApi.substring(2);
    const sunsetSubstrPST = sunsetApi.substring(2);

    const finalRisePST = convertedPSTRise + sunriseSubstrPST;
    const finalSetPST = convertedPSTSet + sunsetSubstrPST;

    console.log(finalRisePST, finalSetPST);

}
},[apiResult])



  return <div></div>;
};

export default Results;
