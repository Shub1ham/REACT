import Fooditems from "./component/fooditems";
import Errormessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {
  let fooditems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"]
  
  return (
    <center>
      <h1 className="heading">Healthy Food</h1>
      <Errormessage items={fooditems}></Errormessage>              
      <Fooditems items={fooditems}></Fooditems>
    </center>
  );
}

export default App;
