import styles from './Searchbar.module.css'
const Searchbar=({displaychange})=>{
    
    return (
        <input type="text" placeholder="Search Here" className={styles.search}
        
        onChange={displaychange}
        
        ></input>
    )
}

export default Searchbar;