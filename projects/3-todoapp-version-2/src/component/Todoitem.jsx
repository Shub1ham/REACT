import styles from "./Todoitems.module.css"
function Todoitem({todoname , tododate}) {
  return (
    <div className="container cen">
      <div className={`row ${styles.skrow}`}>
        <div className="col-3">{todoname}</div>
        <div className="col-3">{tododate}</div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${styles["sk-button"]}`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
