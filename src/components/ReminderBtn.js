import React from "react"
	
	const ReminderBtn = props => {
	    const handleClick = () => {
	        alert("Take one dose red pill, two doses of the purple pills. Take one half of your vitamin D supplement (don't take the whole thing!)")
	    }
	    return (
	        <button onClick={handleClick}>
	            Click Me for Reminder!
	        </button>
	    )
	}
	
	export default ReminderBtn