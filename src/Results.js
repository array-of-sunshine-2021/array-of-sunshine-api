//Results.js

const Results = ({apiResult , userDuration , timeZone}) => {
     const sunrise = apiResult.sunrise
     const sunset = apiResult.sunset 
     console.log(apiResult)
     if(timeZone === 'eastern' ){
          console.log(sunrise)
          const covertedESTRise = parseInt(sunrise) - 8;
          const covertedESTSet = parseInt(sunset) - 4;
          console.log(covertedESTRise)

     }else if (timeZone === 'pacific') {
          const covertedPST = parseInt(sunrise) + 5;
          const covertedPSTSet = parseInt(sunset) - 4;

          console.log(covertedPST)

     }else if (timeZone === 'mountain') {
          const covertedMT = parseInt(sunrise) + 7;
          console.log(covertedMT)

     }else if (timeZone === 'central'){
          const covertedCT = parseInt(sunrise) + 7;
          console.log(covertedCT)
     }

     // const newSunriseTime = parseInt(sunrise) + 4
     // console.log(newSunriseTime)

     // const testing = () => {
  //   const test = '12:45:10 AM'

  //   console.log(typeof(test.substring(2)))
  //   console.log(typeof(parseInt(test)))

  // }
  // testing()

     return(
          <div>

          </div>
     )
}

export default Results;