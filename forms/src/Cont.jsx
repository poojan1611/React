import { useState } from "react";

function Cont(){

    const[formData, setFormData] = useState({name: "", email:"", sem: "", gender:"", terms:false});
    const[error, setError] = useState({});
    const[submitted, setsubmitted] = useState(false);

    function handleChange(e){
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function validate(){
        let newError = {};

        if(!formData.name) newError.name = "Name is required!";
        if(!formData.email) newError.email = "Email is required!";
        else if(!formData.email.includes("@")) newError.email = "Please enter a valid email!";
        if(!formData.sem) newError.sem = "choose semester is required!";
        if(!formData.gender) newError.gender = "select gender is required!";
        if(!formData.terms) newError.terms = "You must agree to the terms!";


        return newError;
    }

    function handle(e){
        e.preventDefault();
        const newError = validate();

        if(Object.keys(newError).length > 0){
            setError(newError);
            return;
        }
        setError({});
        setsubmitted(true);
    }

    if(submitted){
        return(
            <div>
                <h2>Form Submitted Successfully!</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Semester: {formData.sem}</p>
                <p>Gender: {formData.gender}</p>
                <p>✅ Agreed to Terms & Conditions</p>
            </div>
        );
    }

    return(
        <div>
            <h2>Student Form</h2>
            <form onSubmit={handle}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
                    {error.name && <p style={{color:"red"}}>{error.name}</p> }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                    {error.email && <p style={{color:"red"}}>{error.email}</p> }
                </div>
                <div>
                    <label>Semester:</label>
                    <select name="sem" value={formData.sem} onChange={handleChange}>
                        <option value="">-- Select Semester --</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                    </select>
                </div>
                <div>
                    <label>Gender:</label>
                    <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                    <label>Male</label>
                    <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
                    <label>Female</label>
                    {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}
                </div>
                <div>
                    <input type="checkbox" name="terms" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} />
                    <label> I agree to the terms and conditions</label>
                    {error.terms && <p style={{color:"red"}}>{error.terms}</p> }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Cont;