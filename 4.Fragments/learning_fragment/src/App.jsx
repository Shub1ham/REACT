// import React from "react";
import "./App.css";
import Heading from "./component/heading";
import List from "./component/list";
import Error from "./component/error_message";
function App() {
  let fooditem=['Dal','Milk','Roti','Green Vegetable','salad','Ghee']
  // let fooditem = [];

  return (
    // <React.Fragment>
    <>
      <Heading />
      <Error items={fooditem}></Error>
      <List items={fooditem}></List>
    </>
    /* </React.Fragment> */
  );
}

export default App;
