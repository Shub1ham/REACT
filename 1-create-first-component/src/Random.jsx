function Random() {
  let num = Math.random()*100;
  return <h1 style={{"backgroundColor":'#776691'}}>random number is{Math.round(num)}</h1>;
}

export default Random;
