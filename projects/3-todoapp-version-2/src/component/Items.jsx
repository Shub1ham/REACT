import Todoitem from "./Todoitem";
import styles from "./Items.module.css"
function Items({todoitem}) {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoitem.map((item) => (
          <Todoitem
            key={item.name}
            todoname={item.name}
            tododate={item.duedatedate}
          ></Todoitem>
        ))}
      </div>
    </>
  );
}

export default Items;
