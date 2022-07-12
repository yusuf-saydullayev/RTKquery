import { useState } from "react";
import { useGetUserQuery } from "./redux/UserApi";
function App() {
  const [count, setCount] = useState();
  const { data, isLoading, error } = useGetUserQuery(count, {
    pollingInterval: 5000,
  });
  return (
    <div className="App">
      <h1>Hello RTK</h1>
      <select value={count} onChange={(e) => setCount(e.target.value)}>
        <option value="">All</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="9">9</option>
      </select>
      {isLoading ? (
        "Loading...."
      ) : error ? (
        "Error"
      ) : data ? (
        <ul>
          {data?.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
