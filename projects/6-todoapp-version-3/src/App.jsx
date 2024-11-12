import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitem from "./component/Todoitem";
import Items from "./component/items";
import Welcomemessage from "./component/Welcomemessage";
import "./App.css";
import {useState} from "react" 

function App() {
  // const initialtodoitem = [
  //   { name: "buy milk", duedate: "4/10/23" },
  //   { name: "go to school", duedate: "4/10/23" },
  //   {name :'playing GTA V',duedate:'5/12/25'}
  // ];

  const [todoitem, setTodoitems] = useState([]);

  const handlenewitem=(itemname , itemduedate)=>{
    const newtodoitem=[...todoitem , {name:itemname,duedate:itemduedate}]
    setTodoitems(newtodoitem)
  }

  const handledeleteitem =(todoitemname)=>{
    const newtodoitem = todoitem.filter((item)=>item.name !== todoitemname)
    setTodoitems(newtodoitem)
  }

  return (
    <center className="todocontainer">
      <Appname></Appname>
      <Addtodo onnewitem={handlenewitem}></Addtodo>
      {todoitem.length===0 && <Welcomemessage ></Welcomemessage>}
      <Items todoitem={todoitem} ondeleteclick={handledeleteitem}></Items>
    </center>
  );
}

export default App;
