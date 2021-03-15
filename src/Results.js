//Results.js

const Results = ({ apiResult, userDuration, timeZone }) => {
  const sunriseApi = apiResult.sunrise;
  const sunsetApi = apiResult.sunset;
  console.log(apiResult);
  if (timeZone === "eastern") {
       //     console.log(typeof sunrise);
       const sunriseSubstrEst = sunriseApi.substr(2);
console.log(sunriseSubstrEst)
//     const covertedESTRise = parseInt(sunrise) - 4;
//     const covertedESTSet = parseInt(sunset) - 4;

//     const sunriseSubstrEst = sunrise.subs?t(2);
     //    console.log(typeof(covertedESTRise));
  } else if (timeZone === "central") {
    const covertedCTRise = parseInt(sunriseApi) - 5;
    const covertedCTSet = parseInt(sunsetApi) - 5;
    //     console.log(covertedCT);
  } else if (timeZone === "mountain") {
    const covertedMTRise = parseInt(sunriseApi) - 7;
    const covertedMTSet = parseInt(sunsetApi) - 7;
    //     console.log(covertedMT);
  } else if (timeZone === "pacific") {
    const covertedPSTRise = parseInt(sunriseApi) - 7;
    const covertedPSTSet = parseInt(sunsetApi) - 7;

    //     console.log(covertedPST);
  }

  // const newSunriseTime = parseInt(sunrise) + 4
  // console.log(newSunriseTime)

  // const testing = () => {
  //   const test = '12:45:10 AM'

  //   console.log(typeof(test.substring(2)))
  //   console.log(typeof(parseInt(test)))

  // }
  // testing()

  return <div></div>;
};

export default Results;
