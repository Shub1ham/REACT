import styles from "./Addtodo.module.css"
import { useRef} from "react"
import { BiMessageAdd } from "react-icons/bi";
function Addtodo({onnewitem}) {

  const todonameelement = useRef();
  const duedateelement = useRef();


  const handleaddbuttonclick=(event)=>{
       event.preventDefault()
       const todoname=todonameelement.current.value;
       const duedate=duedateelement.current.value;
       todonameelement.current.value=""
       duedateelement.current.value=""
       onnewitem(todoname,duedate)
  }


  return (
    <div class="container cen">
      <form class={`row ${styles.skrow}`}
      onSubmit={handleaddbuttonclick}
      >
        <div class="col-3">
          <input className={styles.input} ref={todonameelement} type="text" placeholder="Enter Todo Here" 
          ></input>
        </div>
        <div class="col-3">
          <input type="date"
          ref={duedateelement}
          ></input>
        </div>
        <div class="col-2">
          <button type="submit" className={`btn btn-success ${styles["sk-button"]} ${styles.butt}`}
          // onClick={handleaddbuttonclick}
          >
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
