import StudentCard from "./StudentCard";

function Studentlist(){
    const students = [
        {id: 1, name: "Poojan", grade: "A", sem:"6th"},
        {id: 2, name: "Aum", grade: "A+", sem:"5th"},
        {id: 3, name: "Agam", grade: "B", sem:"4th"},
    ];

    return(
        <div>
            <h2>Student List</h2>
            {students.map((student) =>(
                <StudentCard  
                key  = {student.id}
                id = {student.id}
                name = {student.name}
                grade = {student.grade}
                sem = {student.sem}
                />
            ))}
        </div>
    );
}

export default Studentlist;