import Item from "./item";
const Todoitems = ({ todoitems }) => {
  return (
    <div className="item-container">
      {todoitems.map((item) => (
        <Item todoname={item.name} tododate={item.duedate}></Item>
      ))}
    </div>
  );
};

export default Todoitems;
