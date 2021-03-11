// Form.js

const Form = ({submit, dateChange, dateInput }) => {
    return (
        <form action="">
            <label htmlFor="dateInput">What day will you go for a run?</label>
            <input type="date" id="dateInput" className="dateInput" value={dateInput} onChange={dateChange} />

            <label htmlFor="timeZonesInput">Pick your timezone:</label>
            <select name="timeZonesInput" id="timeZonesInput" className="timeZoneInput">
                <option value="eastern">Eastern</option>
                <option value="central">Central</option>
                <option value="pacific">Pacific</option>
                <option value="mountain">Mountain</option>
            </select>

            <div className="sunState">
                <p>When will you go for a run?</p>
                <label htmlFor="sunRiseInput">After Sunrise</label>
                <input type="checkbox" id="sunRiseInput" className="sunRiseInput" />

                <label htmlFor="sunSetInput">Before Sunset</label>
                <input type="checkbox" id="sunSetInput" className="sunSetInput" />

                <div className="runDuration">

                    <label htmlFor="runLength">How long is your run?</label>
                    <select name="runLength" id="runLength">
                        <option value="">15 min</option>
                        <option value="">30 min</option>
                        <option value="">60 min</option>
                        <option value="">90 min</option>
                    </select>
                </div>
            </div>

            <button type="submit" onClick={submit}>Let's Workout!</button>


        </form>
    )
};

export default Form;