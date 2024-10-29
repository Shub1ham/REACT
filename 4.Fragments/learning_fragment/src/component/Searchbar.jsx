import styles from './Searchbar.module.css'
const Searchbar=()=>{
    const displaychange=(event)=>{
        console.log(event.target.value)
    }
    return (
        <input type="text" placeholder="Search Here" className={styles.search}
        
        onChange={displaychange}
        
        ></input>
    )
}

export default Searchbar;