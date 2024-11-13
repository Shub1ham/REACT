import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitem from "./component/Todoitem";
import Items from "./component/items";
import Welcomemessage from "./component/Welcomemessage";
import "./App.css";
import { useState, useReducer } from "react";
import Todoitemstore from "./store/todoitemstore";

const todoitemreducer = (currenttodoitem, action) => {
  let newtodoitem=currenttodoitem
  if (action.type === "new_item") {
    newtodoitem = [...currenttodoitem, { name: action.payload.itemname, duedate: action.payload.duedate }]; // here ... is a spread oprator
    
  } else if (action.type === "delete_item") return [];
};

function App() {
  // const initialtodoitem = [
  //   { name: "buy milk", duedate: "4/10/23" },
  //   { name: "go to school", duedate: "4/10/23" },
  //   {name :'playing GTA V',duedate:'5/12/25'}
  // ];

  const [todoitem, setTodoitems] = useState([]);
  const [newtodoitem, dispatchtodoitem] = useReducer(todoitemreducer, []);

  const addnewitem = (itemname, itemduedate) => {
    const newitemaction = {
      type: "new_item",
      payload: { itemname, itemduedate },
    };
    dispatchtodoitem(newitemaction);
  };

  const deleteitem = (todoitemname) => {
    const newtodoitem = todoitem.filter((item) => item.name !== todoitemname);
    setTodoitems(newtodoitem);
  };

  return (
    <Todoitemstore.Provider value={{ todoitem, addnewitem, deleteitem }}>
      <center className="todocontainer">
        <Appname></Appname>
        <Addtodo></Addtodo>
        {todoitem.length === 0 && <Welcomemessage></Welcomemessage>}
        <Items></Items>
      </center>
    </Todoitemstore.Provider>
  );
}

export default App;
