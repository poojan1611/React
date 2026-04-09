function List({id, name}){

    // const users = ["Poojan", "Aum", "Agam", "Vimal"];

    // return(
    //     <div>
    //         <h2>Users List</h2>
    //         <ul>
    //             {/* {users.map((user, index) => (<li key ={index}>{user}</li>))} */}
    //             {users.map((user) => ( <li>{user}</li> ))}
    //         </ul>
    //     </div>
    // );

    const students = [
        {id : 1, name: "Poojan", age: 19, grade: "A", semester: "6th"},
        {id : 2, name: "Aum", age: 21, grade: "A+", semester: "5th"},
        {id : 3, name: "Agam", age: 20, grade: "B", semester: "4th"},
        {id : 4, name: "Vimal", age: 18, grade: "A", semester: "3th"},
    ];

    return(
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student)=> (
                    <div key = {student.id}>
                        <h3>Name: {student.name}</h3>
                        <p>Age: {student.age}</p>
                        <p>Grade: {student.grade}</p>
                        <p>Semester : {student.semester}</p>
                        <hr />
                    </div>
                ) )}
            </ul>
        </div>
    );

}

export default List;