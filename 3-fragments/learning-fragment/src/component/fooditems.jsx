import { useState } from "react";
import Item from "./Item";
const Fooditems = ({items}) => {
//   let fooditems=["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"]
  let [activeitem , setsctiveitem]=useState([])

  let onbuybutton=(item , event)=>{
    let newitem=[...activeitem,item]
    setsctiveitem(newitem)
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} bought={activeitem.includes(item)} handlebuybutton={(event)=>onbuybutton(item,event)}></Item>
      ))}
    </ul>
  );
};

export default Fooditems;
