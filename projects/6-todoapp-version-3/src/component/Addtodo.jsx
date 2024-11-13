import styles from "./Addtodo.module.css"
import {useState} from "react"
import { BiMessageAdd } from "react-icons/bi";
function Addtodo({onnewitem}) {
  const [todoname, settodoname] = useState('');
  const [duedate, setduedate] = useState('');

  const handlenamechange=(event)=>{
    settodoname(event.target.value)
  }

  const handledatechange=(event)=>{
    setduedate(event.target.value)
  }

  const handleaddbuttonclick=(event)=>{
       event.preventDefault()
       onnewitem(todoname,duedate)
       settodoname("");
       setduedate("");
  }


  return (
    <div class="container cen">
      <form class={`row ${styles.skrow}`}
      onSubmit={handleaddbuttonclick}
      >
        <div class="col-3">
          <input className={styles.input} type="text" placeholder="Enter Todo Here" value={todoname}
          onChange={handlenamechange}
          ></input>
        </div>
        <div class="col-3">
          <input type="date"
          value={duedate}
          onChange={handledatechange} 
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
