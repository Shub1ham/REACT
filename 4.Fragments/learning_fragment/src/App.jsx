// import React from "react";
import "./App.css";

function App() {
  // let fooditem=['Dal','Milk','Roti','Green Vegetable','salad','Ghee']
  let fooditem=[]

  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      {fooditem.length===0 ? <h3>i am still hungry.</h3> : null }    
      {fooditem===0 && <h3>i am still hungry.</h3> }

      <ul class="list-group">
        {fooditem.map((item)=>(<li key={item} class="list-group-item">{item}</li> ))}
      </ul>
    </>
    /* </React.Fragment> */
  );
}

export default App;
