import Todoitem from "./Todoitem";
import styles from "./Items.module.css"
import Todoitemstore from "../store/todoitemstore";
import {useContext} from "react"
function Items() {
  
  const {todoitem} = useContext(Todoitemstore)
  
  return (
    <>
      <div className={styles["items-container"]}>
        {todoitem.map((item) => (
          <Todoitem
            key={item.name}
            todoname={item.name}
            tododate={item.duedate}
            
          ></Todoitem>
        ))}
      </div>
    </>
  );
}

export default Items;
