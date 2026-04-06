import { useState } from "react";

function Condi(){

    const[islogged, setIslogged] = useState(false);

    if (islogged){
        return(
         <div>
            <h2>Welcome Poojan, You are logged in.</h2>
            <button onClick={()=> setIslogged(false)}>Logout</button>
         </div>   
        );
    }

    return(
        <div>
            <h2>please Login</h2>
            <button onClick={() => setIslogged(true)}>Login</button>
        </div>
    );
}

export default Condi;