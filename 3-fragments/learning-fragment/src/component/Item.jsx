import styles from "./Item.module.css";
const Item = ({foodItem}) => {
  return (
    <li className={`${styles["sk-item"]} list-group-item`}>
      <span className={styles["sk-span"]}>{foodItem}</span>
      <button className={`btn btn-info ${styles.button}`}
      onClick={(event)=>{
        console.log(event)
        console.log(`${foodItem} being bought`);
      }}
      
      
      >Buy</button>
    </li>
  );
};

export default Item;
