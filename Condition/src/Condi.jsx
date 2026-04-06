import { useState } from "react";

function Condi(){

    const[islogged, setIslogged] = useState(false);

    // if (islogged){
    //     return(
    //      <div>
    //         <h2>Welcome Poojan, You are logged in.</h2>
    //         <button onClick={()=> setIslogged(false)}>Logout</button>
    //      </div>   
    //     );
    // }

    // return(
    //     <div>
    //         <h2>please Login</h2>
    //         <button onClick={() => setIslogged(true)}>Login</button>
    //     </div>
    // );

    // return(
    //     <div>
    //         {islogged ? <h2>Welcome back, Poojan</h2> : <h2>Please Login</h2> }

    //         <button onClick={() =>setIslogged(!islogged)}>
    //             {islogged ? "Logout" : "Login "}
    //         </button>
    //     </div>
    // );

    // return(
    //     <div>
    //         <h2>Dashboard</h2>
    //         {islogged && (
    //             <div>
    //                 <h3>Welcome back </h3>
    //             </div>
    //         )}
    //         <button onClick={() => setIslogged(!islogged)}> Logout </button>
    //     </div>
    // );

    

}

export default Condi;