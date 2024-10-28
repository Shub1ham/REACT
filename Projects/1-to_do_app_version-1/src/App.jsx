import AppName from "./component/appname";
import Addtodo from "./component/addtodo";
import Item1 from "./component/item1";
import Item2 from "./component/item2";
import "./App.css";
function App() {
  return (
    <center class="container">
      <AppName></AppName>
      <br></br>
      <Addtodo></Addtodo>
      <div class="item-container">
        <Item1></Item1>
        <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
