import Item from "./item";
let List = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} fooditems={item}></Item>
      ))}
    </ul>
  );
};

export default List;
