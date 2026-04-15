import { useState } from "react";

function Regform(){

    const [formdata, setFormData] = useState({name: "", email: "", city:"", age:""});
    const[submitted, setSubmitted] = useState(false);

    function handleChange(e){
        const{name, value} = e.target;
        setFormData({ ...formdata, [name]: value});
    }

    function handle(e){
        e.preventDefault();
        setSubmitted(true);
    }

    if(submitted){
        return(
            <div>
                <h2>Regestration Successfully.</h2>
                <p>Name: {formdata.name}</p>
                <p>Email: {formdata.email}</p>
                <p>City: {formdata.city}</p>
                <p>Age: {formdata.age}</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Regestration Form</h2>
            <form onSubmit={handle}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Enter Name" />
                    <br />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={formdata.email} onChange={handleChange} placeholder="Enter Email" />
                    <br />
                </div> 
                <div>
                    <label>City: </label>
                    <input type="text" name="city" value={formdata.city} onChange={handleChange} placeholder="Enter City" />
                    <br />
                </div>
                <div>
                    <label>Age: </label>
                    <input type="number" name="age" value={formdata.age} onChange={handleChange} placeholder="Enter Age" min={1} max={100} />
                    <br />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Regform;