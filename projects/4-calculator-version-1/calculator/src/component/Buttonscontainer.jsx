import styles from "./Buttoncontainer.module.css"
function Buttoncontainer({buttonname}){
return(
    <div className={styles.buttflex}>
        {buttonname.map((item)=>(<button key={item} className={styles.butt}>{item}</button>))}
       </div>
)
}

export default Buttoncontainer;