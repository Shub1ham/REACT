import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitem from "./component/Todoitem";
import Items from "./component/items";
import Welcomemessage from "./component/Welcomemessage";
import "./App.css";
import { useState } from "react";
import Todoitemstore from "./store/todoitemstore";

function App() {
  // const initialtodoitem = [
  //   { name: "buy milk", duedate: "4/10/23" },
  //   { name: "go to school", duedate: "4/10/23" },
  //   {name :'playing GTA V',duedate:'5/12/25'}
  // ];

  const [todoitem, setTodoitems] = useState([]);

  const addnewitem = (itemname, itemduedate) => {
    const newtodoitem = [...todoitem, { name: itemname, duedate: itemduedate }]; // here ... is a spread oprator
    setTodoitems(newtodoitem);
  };

  const deleteitem = (todoitemname) => {
    const newtodoitem = todoitem.filter((item) => item.name !== todoitemname);
    setTodoitems(newtodoitem);
  };

  return (
    <Todoitemstore.Provider value={{todoitem,addnewitem,deleteitem}}>
      <center className="todocontainer">
        <Appname></Appname>
        <Addtodo ></Addtodo>
        {todoitem.length === 0 && <Welcomemessage></Welcomemessage>}
        <Items></Items>
      </center>
    </Todoitemstore.Provider>
  );
}

export default App;