// RunDuration.js

const RunDuration = () => {
    return (
        <div>
            <label htmlFor="runLength">How long is your run?</label>
            <select name="runLength" id="runLength">
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
            </select>
        </div>
    )
}

export default RunDuration