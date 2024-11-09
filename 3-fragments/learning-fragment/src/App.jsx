function App() {
  let fooditems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"]
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {fooditems.map(item=>(<li key={item} class="list-group-item">{item}</li>))}
        
      </ul>
    </>
  );
}

export default App;
