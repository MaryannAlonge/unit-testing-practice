import './App.css';
import Todo from "./components/todo"
function App() {
  // create todo items
  const todos = [
    {id: 1, title: "wash dishes", completed: false, },
    {id: 2, title: "make dinner", completed: true, },
  ];
  return (
    <div className="App">
      {/* use the above items as parameters for this componemt */}
      {todos.map((todo) =>{
        return(<Todo todo={todo}/>)
})}
    </div>
  );
}

export default App;
