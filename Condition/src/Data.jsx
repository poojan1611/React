import { useState } from 'react';

function Data() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  function loadData() {
    setIsLoading(true);
    setData(null);

    setTimeout(() => {
      setIsLoading(false);
      setData("✅ Data Loaded Successfully!");
    }, 2000);
  }

  return (
    <div>
      <button onClick={loadData}>Load Data</button>

      {isLoading && <p>⏳ Loading... please wait</p>}
      {data && <p>{data}</p>}
    </div>
  );
}

export default Data;