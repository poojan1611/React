import { useState } from "react";

function StdList(){

    const[showPassed, setShowPassed] = useState(false);

    const students = [
        { id: 1, name: "Poojan", marks: 85 },
        { id: 2, name: "Raj", marks: 42 },
        { id: 3, name: "Sarah", marks: 91 },
        { id: 4, name: "Mike", marks: 58 },
        { id: 5, name: "Priya", marks: 73 }
    ];

    const displayedStudents = showPassed ? students.filter((student) => student.marks >= 50 ) : students;

    return(
        <div>
            <h2>Student List</h2>
            <button onClick={() => setShowPassed(false)}>Show All</button>
            <button onClick={() => setShowPassed(true)}> Show Only Passed</button>

            {displayedStudents.map((student) => (
                <div key = {student.id}>
                    <h3>{student.name}</h3>
                    <p>Marks: {student.marks}</p>
                    <p>Result: {student.marks >=50 ? "Pass" : "Fail"}</p>
                    <hr />
                </div>))}
        </div>
    );
}

export default StdList;