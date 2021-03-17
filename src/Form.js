// Form.js


const Form = (props) => {
    

    return (
        <form action="" className="wrapper">
            <label htmlFor="dateInput">What day will you go for a run?</label>
            <input type="date" id="dateInput" className="dateInput" value={props.dateInput} onChange={props.dateChange} />

            <label htmlFor="timeZonesInput">Pick your timezone:</label>
            <select name="timeZonesInput" id="timeZonesInput" className="timeZoneInput" onChange ={props.timeZone}>
                <option value="placeholder" defaultValue>Choose One:</option>
                <option value="America/Toronto">Eastern</option>
                <option value="America/Rainy_River">Central</option>
                <option value="America/Vancouver">Pacific</option>
                <option value="America/Denver">Mountain</option>
            </select>

            <button type="submit" onClick={props.submit}>Let's Workout!</button>


        </form>
    )
};

export default Form;