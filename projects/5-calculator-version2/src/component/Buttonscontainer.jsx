import styles from "./Buttoncontainer.module.css";
function Buttoncontainer({ buttonname, handleclickbutton }) {
  return (
    <div className={styles.buttflex}>
      {buttonname.map((item) => (
        <button key={item} className={styles.butt} 
        onClick={()=>handleclickbutton(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Buttoncontainer;
