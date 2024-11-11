import Fooditems from "./component/fooditems";
import Errormessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import "./App.css";
import Foodinput from "./component/Foodinput";

function App() {
  let fooditems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <Errormessage items={fooditems}></Errormessage>
      <Foodinput></Foodinput>
      <Fooditems items={fooditems}></Fooditems>
    </Container>
    <Container>
      <p>above list of healthy foods that are good</p>
    </Container>
    </>
  );
}

export default App;
