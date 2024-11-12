import Todoitem from "./Todoitem";
import styles from "./Items.module.css"
function Items({todoitem , ondeleteclick }) {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoitem.map((item) => (
          <Todoitem
            key={item.name}
            todoname={item.name}
            tododate={item.duedate}
            ondeleteclick={ondeleteclick}
          ></Todoitem>
        ))}
      </div>
    </>
  );
}

export default Items;
