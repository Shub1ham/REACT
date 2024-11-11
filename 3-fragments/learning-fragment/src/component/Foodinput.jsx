import styles from "./Foodinput.module.css"
function Foodinput({handleonchange}){
   return <input className={styles.foodinput} type="text" placeholder="Enter Here"
   onChange={handleonchange}
   
   ></input>
}
export default Foodinput