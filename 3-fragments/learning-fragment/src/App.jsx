import Fooditems from "./component/fooditems";
import Errormessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import "./App.css";
import Foodinput from "./component/Foodinput";
import { useState } from "react";

function App() {
  // let fooditems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // let [texttoshow , settextstate]=useState();  // here are 2 elements that use state holds 1] current value 2] that method or function which we can edith later
  
  let [fooditems, setfooditems]= useState([])

  const onkeydown = (event) => {
    {
      if(event.key==="Enter"){
        let newfooditem=event.target.value
        event.target.value=''
        let newitem=[...fooditems, newfooditem]
        setfooditems(newitem)
      }
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <Foodinput handlekeydown={onkeydown}></Foodinput>
        <Errormessage items={fooditems}></Errormessage>
        <Fooditems items={fooditems}></Fooditems>
      </Container>
      <Container>
        <p>above list of healthy foods that are good</p>
      </Container>
    </>
  );
}

export default App;
