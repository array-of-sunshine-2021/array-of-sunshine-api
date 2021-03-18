// Form.js - the initial form for the user to select the date for their run and their timezone

const Form = (props) => {

    return (
        //create a form that allows the user to select the date they plan on taking a run and what timezone they are in
        <div className="wrapper">
            <div className="headingForm">
                <form>
                    <label htmlFor="dateInput">What day will you go for a run?</label>
                    <input 
                    type="date" id="dateInput" 
                    className="dateInput" 
                    value={props.dateInput} 
                    onChange={props.dateChange}
                    required />

                    <label htmlFor="timeZonesInput">Pick your timezone:</label>
                    <select 
                    name="timeZonesInput" 
                    id="timeZonesInput" 
                    className="timeZoneInput" 
                    onChange ={props.timeZone} 
                    required>
                        <option value="placeholder" defaultValue>Choose One:</option>
                        <option value="America/Toronto">Eastern</option>
                        <option value="America/Rainy_River">Central</option>
                        <option value="America/Vancouver">Pacific</option>
                        <option value="America/Denver">Mountain</option>
                    </select>

                    <button type="submit" onClick={props.submit}>Let's Workout!</button>
                </form>
            </div>
        </div>
    )
};

export default Form;
