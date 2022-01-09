import "./App.css";
import { NumberButton } from "./components/NumberButton";
import { Display } from "./components/Display";
function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="rounded-lg max-w-lg px-4 shadow-lg mx-auto">
      <Display />
      <div className="mx-5 grid grid-cols-3 w-44 max-w-sm ">
        {numbers.map((number) => {
          return <NumberButton number={number} />;
        })}
      </div>
    </div>
  );
}

export default App;
