import "./styles.css";
import { useFetch } from "./useFetch";
export default function App() {
  const { data } = useFetch({
    url: "/joe.json",
  });
  return (
    <div className="App">
      <div>Hi</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
