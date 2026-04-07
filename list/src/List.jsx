function List({id, name}){

    // const fruits = ["Apple", "Banana", "Mango", "Orange"];

    // return(
    //     <div>
    //         <h2>Fruits List</h2>
    //         <ul>
    //             {fruits.map((fruit, index) => (<li key={index} > {fruit} </li>))}
    //         </ul>
    //     </div>
    // );

    // ❌ Wrong — trying to use key as prop inside component
            // function Student({ key, name }) {
            // return <p>{key} - {name}</p>; // key is undefined here!
            // }

            // // ✅ Correct — pass id separately if needed
            // function Student({ id, name }) {
            return <p>{id} - {name}</p>;
            // }

            // // And in parent:
            // <Student key={student.id} id={student.id} name={student.name} />

        // And in parent:
        <Student key={student.id} id={student.id} name={student.name} />
    }

export default List;