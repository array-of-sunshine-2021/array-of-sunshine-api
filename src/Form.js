// Form.js

const Form = (props) => {
    

    return (
        <form action="" className="wrapper">
            <label htmlFor="dateInput">What day will you go for a run?</label>
            <input type="date" id="dateInput" className="dateInput" value={props.dateInput} onChange={props.dateChange} />

            <label htmlFor="timeZonesInput">Pick your timezone:</label>
            <select name="timeZonesInput" id="timeZonesInput" className="timeZoneInput" onChange ={props.timeZone} >
                <option value="placeholder" disabled selected>Choose One:</option>
                <option value="eastern">Eastern</option>
                <option value="central">Central</option>
                <option value="pacific">Pacific</option>
                <option value="mountain">Mountain</option>
            </select>

            <button type="submit" onClick={props.submit}>Let's Workout!</button>


        </form>
    )
};

export default Form;
