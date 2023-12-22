import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex items-center justify-center pt-10">
      <div>
        <h1 className="text-4xl font-bold">Learn Redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
