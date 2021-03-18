// SunRiseRunDuration.js - if the user selects the sunrise radio button, display a select menu to choose how long they would like their run to be

import { useState } from "react";
import moment from "moment";

const SunRiseRunDuration = (prop) => {
  const [runDuration, setRunDuration] = useState("");

  //handle the change between run duration values the user may select
  const handleChange = (event) => {
    const timeValue = event.target.value;

    //when the user selects a run duration time - subtract that value from the sunrise time
    const duration = moment.duration({
      hours: 0,
      minutes: `${timeValue}`,
      seconds: 0,
    });
    //calculate the time the user should start running in order catch the sunrise and format the time
    const suggestedTime = moment(prop.riseTime, "HH:mm:ss A")
      .subtract(duration)
      .format("HH:mm:ss A");

    setRunDuration(suggestedTime);
  };

  //create a drop down menu for the user to select how long they intend their run to be
  return (
    <div className="sunRiseDurationContainer">
      <label htmlFor="runLength">How long is your run?</label>
      <select name="runLength" id="runLength" onChange={handleChange}>
        <option value="placeholder" defaultValue>
          Choose One:
        </option>
        <option value="15">15 min</option>
        <option value="30">30 min</option>
        <option value="60">60 min</option>
        <option value="90">90 min</option>
      </select>
      {runDuration ? (
        <p class="runStart">
          Start your run at <br /><span>{runDuration}</span><br /> to see the sunrise
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SunRiseRunDuration;
