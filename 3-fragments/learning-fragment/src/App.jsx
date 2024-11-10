function App() {
  // let fooditems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"]
  let fooditems=[]
  return (
    <center>
      <h1>Healthy Food</h1>
      {/* {fooditems.length===0 ? <h3>i am still hungry</h3> : null} */}
      {fooditems.length===0 && <h3>i am still hungry</h3>}           
      <ul className="list-group">
        {fooditems.map(item=>(<li key={item} class="list-group-item">{item}</li>))}
        
      </ul>
    </center>
  );
}

export default App;
