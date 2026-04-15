import { useState } from "react";

function Contact(){

    const[formData, setFormData] =  useState({name:"", email: "", subject: "", message: ""});
    const[error, setError] = useState({});
    const[submitted, setSubmitted] = useState(false);

    function handleChange(e){
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function validate(){
        let newError = {};

        if(!formData.name) newError.name = "Name is required!";
        if(!formData.email) newError.email = "Email is required!";
        else if(!formData.email.includes("@")) newError.email = "Please enter a valid email!";
        if(!formData.subject) newError.subject = "Subject is required!";
        if(!formData.message) newError.message = "Message is required!";
        else if(formData.message.length < 10) newError.message = "Message is too short!";

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
        setSubmitted(true);
    }

    if(submitted){
        return(
            <div>
                <h2>Message Submitted Successfully!</h2>
                <p>Thanks {formData.name}, We'll reply to {formData.email} very soon!</p>
            </div>
        );
    }

    return(
        <div>
            <h2>Contact Us</h2>
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
                    <label>Subject:</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter Subject" />
                    {error.subject && <p style={{color:"red"}}>{error.subject}</p> }
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter message" rows={5} />
                    {error.message && <p style={{color:"red"}}>{error.message}</p> }
                </div>
                <button type="submit">Contact Us</button>
            </form>
        </div>
    );
}

export default Contact;