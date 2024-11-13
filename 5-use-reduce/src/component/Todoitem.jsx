import styles from "./Todoitems.module.css"
import { MdDelete } from "react-icons/md";
import Todoitemstore from "../store/todoitemstore";
import { useContext } from "react";
function Todoitem({todoname , tododate }) {
  const {deleteitem} = useContext(Todoitemstore)
  return (
    <div className="container cen">
      <div className={`row ${styles.skrow}`}>
        <div className="col-3">{todoname}</div>
        <div className="col-3">{tododate}</div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${styles["sk-button"]}`}
          onClick={()=>deleteitem(todoname)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
