import AppName from "./component/appname";
import Addtodo from "./component/addtodo";
import Todoitems from "./component/todoitems";
import "./App.css";
function App() {
  let todoitems = [
    { 
      name: "Buy Milk",
      duedate: "4/10/2023",
    },
    {
      name: "Go To Collage",
      duedate: "4/10/2023",
    },
  ];

  return (
    <center class="container">
      <AppName></AppName>
      <br></br>
      <Addtodo></Addtodo>
      <Todoitems todoitems={todoitems}></Todoitems>
    </center>
  );
}

export default App;
