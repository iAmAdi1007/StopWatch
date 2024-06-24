import "./styles.css";
import StopWatch from "./components/StopWatch";

export default function App() {
  return (
    <div className="App">
      <StopWatch startTime={0} />
    </div>
  );
}
