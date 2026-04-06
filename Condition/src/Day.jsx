import { useState } from "react";

function Day(){

    const[isDay, setIsDay] = useState(true);

    return(
        <div style = {{backgroundColor: isDay ? "white" : "#1a1a2e",
                color : isDay ? "black" : "white",
                padding : "50px",
                minHeight : "100vh",
                textAlign: "center"
            }}>
            {isDay ? (<h2>Good Morning! It's day mode.</h2>) : (<h2>Good Night! It's night mode.</h2>) }
            <button onClick={() => setIsDay(!isDay)} style={{margin: "20px",padding:"10px 20px", cursor:"pointer"}}>{isDay ? "Switch to night" : "Switch to Day"}</button>
        </div>
    );
}

export default Day;