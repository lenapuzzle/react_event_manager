	import React from "react"
	
	const EventTile = props => {
	    const [background, setBackground] = React.useState("")
	
	    const { title, timePeriod, description, eventType} = props
	
	    let eventBackground
	    switch (eventType) {
	        case "personal": 
	            eventBackground = "green-bg"
	            break
	        case "business-casual":
	            eventBackground = "pink-bg"
	            break
	        case "business":
	            eventBackground = "blue-bg"
	            break
	        default:
	            eventBackground = "blue-bg"
	    } 
	
	    return (    
	        <div className={`${eventBackground} ${background}`}>
	            <h2>{title}</h2>
	            <p>{timePeriod}</p>
	            <p>{description}</p>
	            <button onClick={() => setBackground("gray-bg")}>Done</button>
	        </div>
	    )
	}

export default EventTile