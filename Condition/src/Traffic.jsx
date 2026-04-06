import { useState } from "react";

function Traffic(){

    const[light, setLight] = useState("red")
    
    function handle(){
        switch(light){
            case "red":
                return <h2 style={{color : "red"}}> 🔴 Stop </h2>
            case "yellow":
                return <h2 style={{color : "yellow"}}> 🟡 Slow </h2>
            case "green":
                return <h2 style={{color : "green"}}> 🟢 Go </h2>
            default: 
                return <h2>Unknown Signal</h2>
        }
    }

    return(
        <div>
            {handle()}
            <br />
            <button onClick={()=>setLight("red")}>Red</button>
            <button onClick={()=>setLight("yellow")}>Yellow</button>
            <button onClick={()=>setLight("green")}>Green</button>
        </div>
    );
}

export default Traffic;