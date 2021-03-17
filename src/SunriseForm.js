// SunriseForm.js


const SunriseForm = () => {

    const handleToggle = () => {
        setSunSet(!sunSet)
    }
  
    const handleToggleSunrise = () => {
        setSunSet('false')
    }

   

    return (
        <div>
            <label htmlFor="sunInput">Run and watch the sunrise</label>
            <input type="radio" name="sunInput" className="sunInput" value="sunrise" />


            <div className={`${sunrise ? "runDuration" : "runDurationVisible"}`}>
                    <label htmlFor="runLength">How long is your run?</label>
                    <select onChange = {handleToggle}name="runLength" id="runLength">
                        <option value="15">15 min</option>
                        <option value="30">30 min</option>
                        <option value="60">60 min</option>
                        <option value="90">90 min</option>
                    </select>
                </div>
        </div>

    )
}
export default SunriseForm;

