import Fooditems from "./component/fooditems";
import Errormessage from "./component/ErrorMessage";

function App() {
  let fooditems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"]
  
  return (
    <center>
      <h1>Healthy Food</h1>
      <Errormessage items={fooditems}></Errormessage>              
      <Fooditems items={fooditems}></Fooditems>
    </center>
  );
}

export default App;
