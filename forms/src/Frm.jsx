import { useState } from "react";


function Frm(){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");
    const[age, setAge] = useState("");
    const[text, setText] = useState("");
    const[city, setCity] = useState("Ahmedabad");
    const[isAgreed, setIsAgreed] = useState(false);
    const[gender, setGender] = useState("");

  return(
    <div>
      <h2>Form</h2>
      {/* All Elements */}
      {/* text */}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      <br />
      {/* email */}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
      <br />
      {/* password */}
      <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
      <br />
      {/* number */}
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Your age" min={1} max={100} />
      <br />
      {/* textarea */}
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Message" rows={4} />
      <br />
      {/* dropdown */}
      <select value={city} onChange={(e) => setCity(e.target.value)} placeholder="Select City">
        <option value="ahm">Ahmedabad</option>
        <option value="bar">Baroda</option>
        <option value="snagar">Surendranagar</option>
        <option value="raj">Rajkot</option>
      </select>
      <br />
      {/* checkbox */}
      <input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)}/>
      <label> I agree to the terms and condition</label>
      <br />
      {/* radio */}
      <input type="radio" value="Male" checked={gender === "Male"} onChange={(e)=> setGender(e.target.value)}/>
      <label>Male</label>
      <input type="radio" value="Female" checked={gender === "Female"} onChange={(e)=> setGender(e.target.value)}/>
      <label>Female</label>
      <br />

      <hr />
      <h2>Form Data</h2>
      <p>You enter: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {pass}</p>
      <p>Age: {age}</p>
      <p>Message: {text}</p>
      <p>{isAgreed ? "Checked" : "Not Checked"}</p>
      <p>Selected gender: {gender}</p>
    </div>
  ); 
}

export default Frm;