import styles from "./Item.module.css";
const Item = ({foodItem}) => {
  return (
    <li className={`${styles["sk-item"]} list-group-item`}>
      <span className={styles["sk-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
