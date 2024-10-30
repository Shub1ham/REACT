import styles from './item.module.css'

let Item = ({fooditems,handlebuybutton}) => {
  return (
    <li  className={`${styles.rows} list-group-item`}>
      <span className={`${styles['font-size']}`}>{fooditems}</span>
      <button className={`${styles.butt}  btn btn-info`}
      
      onClick={handlebuybutton}

      >Buy</button>
    </li>
  );
};

export default Item;
