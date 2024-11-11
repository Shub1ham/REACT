import styles from "./Foodinput.module.css"
const handleonchange=(event)=>{{console.log(event.target.value)}}
function Foodinput(){
   return <input className={styles.foodinput} type="text" placeholder="Enter Here"
   onChange={handleonchange}
   
   ></input>
}
export default Foodinput