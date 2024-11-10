import styles from "./Addtodo.module.css"
function Addtodo() {
  return (
    <div class="container cen">
      <div class={`row ${styles.skrow}`}>
        <div class="col-3">
          <input className={styles.input} type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-3">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class={`btn btn-success ${styles["sk-button"]} ${styles.butt}`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
