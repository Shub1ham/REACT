import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitem from "./component/Todoitem";
import Items from "./component/items";
import "./App.css";

function App() {
  const todoitem = [
    { name: "buy milk", duedate: "4/10/23" },
    { name: "go to school", duedate: "4/10/23" },
    {name :'playing GTA V',duedate:'5/12/25'}
  ];
  return (
    <center className="todocontainer">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <Items todoitem={todoitem}></Items>
    </center>
  );
}

export default App;
