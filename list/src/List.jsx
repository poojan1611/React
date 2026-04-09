function List({id, name}){

    const users = ["Poojan", "Aum", "Agam", "Vimal"];

    return(
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user, index) => (<li key ={index}>{user}</li>))}
            </ul>
        </div>
    );

}

export default List;