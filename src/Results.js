import {useEffect} from 'react'


const Results = ({ apiResult, userDuration, timeZone, radioChoice}) => {
  const sunriseApi = apiResult.sunrise;
  const sunsetApi = apiResult.sunset;
  console.log(apiResult);

  
useEffect(() => {
    if (timeZone === "eastern" && radioChoice === "sunrise") {

      const convertedESTRise = parseInt(sunriseApi) - 4;
      
      const sunriseSubstrEst = sunriseApi.substring(2);
      
      const finalRiseEST = convertedESTRise + sunriseSubstrEst;
      
      console.log(finalRiseEST)

    } else if (timeZone === "eastern" && radioChoice === "sunset"){

      const convertedESTSet = parseInt(sunsetApi) - 4;

      const sunsetSubstrEst = sunsetApi.substring(2);
      
      const finalSetEST = convertedESTSet + sunsetSubstrEst;

      console.log(finalSetEST)

    } else if (timeZone === "central" && radioChoice === "sunrise"){

      const convertedCTRise = parseInt(sunriseApi) - 5;

      const sunriseSubstrCT = sunriseApi.substring(2);

      const finalRiseCT = convertedCTRise + sunriseSubstrCT;

      console.log(finalRiseCT)

    } else if (timeZone === "central" && radioChoice === "sunset") {

      const convertedCTSet = parseInt(sunsetApi) - 5;

      const sunsetSubstrCT = sunsetApi.substring(2);

      const finalSetCT = convertedCTSet + sunsetSubstrCT;

      console.log(finalSetCT)

    }else if (timeZone === "mountain" && radioChoice === "sunrise"){

      const convertedMTRise = (parseInt(sunriseApi) + 12) - 6;

      const sunriseSubstrMT = sunriseApi.substring(1,7) + ' AM';

      const finalRiseMT = convertedMTRise + sunriseSubstrMT;

      console.log(finalRiseMT)

    }else if (timeZone === "mountain" && radioChoice === "sunset"){

      const convertedMTSet = (parseInt(sunsetApi) + 12) - 6;

      const sunsetSubstrMT = sunsetApi.substring(1,7) + ' PM';

      const finalSetMT = convertedMTSet + sunsetSubstrMT;

      console.log(finalSetMT)

    }else if (timeZone === "pacific" && radioChoice === "sunrise"){

      const convertedPSTRise = (parseInt(sunriseApi) + 12) - 7;

      const sunriseSubstrPST = sunriseApi.substring(1,7) + ' AM';

      const finalRisePST = convertedPSTRise + sunriseSubstrPST;

      console.log(finalRisePST)

    }else if (timeZone === "pacific" && radioChoice === "sunset"){

      const convertedPSTSet = (parseInt(sunsetApi) + 12) - 7;

      const sunsetSubstrPST = sunsetApi.substring(1,7) + ' PM';

      const finalSetPST = convertedPSTSet + sunsetSubstrPST;

      console.log(finalSetPST)
    }
    
  
    

},[apiResult])



  return <div></div>;
};

export default Results;
