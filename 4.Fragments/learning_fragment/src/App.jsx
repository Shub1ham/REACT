// import React from "react";
import "./App.css";

function App() {
  let fooditem=['Dal','Milk','Roti','Green Vegetable','salad','Ghee']
  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {fooditem.map((item)=>(<li key={item} class="list-group-item">{item}</li> ))}
      </ul>
    </>
    /* </React.Fragment> */
  );
}

export default App;
