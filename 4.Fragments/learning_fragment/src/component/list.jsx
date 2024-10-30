import Item from "./item";
let List = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} fooditems={item} handlebuybutton={()=>(console.log(`${item} being bought`))}></Item>
      ))}
    </ul>
  );
};

export default List;
