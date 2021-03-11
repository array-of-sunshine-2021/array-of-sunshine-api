//MVP pseudoCODE WAHOOOOO

//user completes a form to decide the best time to take a run between sunrise and sunset

//form data includes:
    //Date
    //Timezone
        //create an array of objects to represent timezones based off of preselected long & lat (AKA a pre determined city)
            //filter out the 'timezones' that haven't been selected by the user
    //Sunrise or Sunset
        //IF USER CHOOSES SUNSET:
            //intended length of run

//on submit of the form:
    //STEP ONE: capture the value of each of the form inputs to pass to the API
    //STEP TWO: call the API with specified params 

    //IF user selects 'sunset' prompt them to pick a desired run time 

//DISPLAY:
    //USER CHOSE:
        //SUNRISE:
            //"the sun rises at *** time" API response
            //"you have *** time to complete your run" API response

        //SUNSET:
            //"the sun sets at *** time" API response
            //"make sure to get out for your run by *** time" API response (time of sunset - length of run) MATH! :)

//ERROR handling:
    //.catch() after the API call for cases when the API may be down/out/bad/etc. 
    // ALERT user to try again later or just go for a run anyway