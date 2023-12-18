import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-red-500 p-4 rounded mb-4"> React with tailwind</h1>
      <Card userName="Jeams" btnTxt="Click Me" />
      <Card userName="Andrew" />
    </>
  );
}

export default App;
