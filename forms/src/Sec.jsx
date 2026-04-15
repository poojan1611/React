import { useState } from "react";

function Sec(){
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState(false);

    function handle(e){
        e.preventDefault();
        if(email === "" || pass === ""){
            setError("Please fill all the fields !");
            return;
        }
        if(!email.includes("@")){
            setError("Please enter a valid email !");
            return;
        }
        if(pass.length < 6){
            setError("Password must be at least 6 char long !");
            return;
        }
        setError("");
        setSuccess(true);
    }

    if(success){
        return(
            <h2>Welcome {email}, Login Successfull.</h2>
        );
    }

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color: "red"}}>{error}</p> }
            <form onSubmit={handle}>
                <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" />
                </div>
                <div>
                <label>Password:</label>
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Sec;