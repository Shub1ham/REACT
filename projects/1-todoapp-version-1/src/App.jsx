import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitem1 from "./component/Todoitem1";
import Todoitem2 from "./component/Todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todocontainer">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <div className="items-container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
