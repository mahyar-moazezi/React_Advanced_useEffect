import { useState, useMemo } from "react";
import "./styles.css";
import { useFetch } from "./useFetch";
export default function App() {
  const [url, setUrl] = useState(null);
  // const myOptions = useMemo(() => ({ url }), [url]);
  const { data } = useFetch({ url, onSuccess: () => console.log("sucess") });

  console.log("App Rendering");
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>{data ? JSON.stringify(data) : "No Data"}</div>
      <button onClick={() => setUrl("max.json")} style={{ margin: "20px" }}>
        GET DATA
      </button>
    </div>
  );
}
