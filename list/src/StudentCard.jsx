function StudentCard({id, name, grade, sem}){
    return(
        <div className= "studentCard">
            <h3>{name}</h3>
            <p>Grade: {grade}</p>
            <p>Semester: {sem}</p>
            <hr />
        </div>
    );
}

export default StudentCard;