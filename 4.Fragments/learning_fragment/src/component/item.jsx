import styles from './item.module.css'

let Item = (props) => {
  const buybuttonclicked=(event)=>{
    console.log(`${props.fooditems} being bought`)
  }
  return (
    <li  className={`${styles.rows} list-group-item`}>
      <span className={`${styles['font-size']}`}>{props.fooditems}</span>
      <button className={`${styles.butt}  btn btn-info`}
      
      onClick={(event)=>buybuttonclicked(event)}

      >Buy</button>
    </li>
  );
};

export default Item;
