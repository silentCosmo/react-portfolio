import React from 'react'

function Greeting() {
    const date = new Date();
let greeting; 

if (date.getHours() >= 4 && date.getHours() < 12) { 
    greeting = "Good Morning!";
} else if (date.getHours() >= 12 && date.getHours() < 17) { 
    greeting = "Good Afternoon!";
} else if (date.getHours() >= 17 && date.getHours() < 20) {
    greeting = "Good Evening!";
} else if (date.getHours() >= 20 || date.getHours() < 4) {
    greeting = "Good Night!";
}
  return (
    <h4>{greeting}</h4>
  )
}

export default Greeting