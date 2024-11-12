import styles from "./Foodinput.module.css"
function Foodinput({handlekeydown}){
   return <input className={styles.foodinput} type="text" placeholder="Enter Here"
   onKeyDown={handlekeydown}
   
   ></input>
}
export default Foodinput