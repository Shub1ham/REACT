// import React from "react";
import "./App.css";
import Heading from "./component/heading";
import List from "./component/list";
import Error from "./component/error_message";
import Container from "./component/Container";
import Searchbar from "./component/Searchbar";
function App() {
  let fooditem=['Dal','Milk','Roti','Green Vegetable','salad','Ghee']
  // let fooditem = [];
  let texttodisplay=''
  const displaychange = (event)=>{console.log(event.target.value);
     texttodisplay=event.target.value}

  return (
    // <React.Fragment>
    <>
    <Container>
      <Heading /> 
      <Error items={fooditem}></Error>
      <Searchbar displaychange={displaychange}></Searchbar>
      <p>{texttodisplay}</p>
      <List items={fooditem}></List>
    </Container>
    <Container>
      <p>above is a list of healthy food</p>
    </Container>
    </>
    /* </React.Fragment> */
  );
}

export default App;
