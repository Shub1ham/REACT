import Item from "./Item";
const Fooditems = ({items}) => {
//   let fooditems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"]

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} handlebuybutton={()=>{console.log(`${item} bought`)}}></Item>
      ))}
    </ul>
  );
};

export default Fooditems;
