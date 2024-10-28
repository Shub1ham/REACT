import styles from './item.module.css'

let Item = (props) => {
  return (
    <li  className={`${styles.rows} list-group-item`}>
      <span className={`${styles['font-size']}`}>{props.fooditems}</span>
    </li>
  );
};

export default Item;
