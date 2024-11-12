import styles from "./Item.module.css";
const Item = ({foodItem, bought,handlebuybutton}) => {
  return (
    <li className={`${styles["sk-item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["sk-span"]}>{foodItem}</span>
      <button className={`btn btn-info ${styles.button}`}
      onClick={handlebuybutton}
      
      
      >Buy</button>
    </li>
  );
};

export default Item;
