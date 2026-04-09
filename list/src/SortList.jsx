function SortList(){
    const numbers = [40, 10, 30, 20, 50]; 

    return(
        <div>
            <h3>Assending Order</h3>
            <ul>
                {[...numbers]
                .sort((a,b) => a-b)
                .map((num, index) => 
                ( <li key={index}>{num}</li> )
                )}
            </ul>
        </div>
    );
}

export default SortList;