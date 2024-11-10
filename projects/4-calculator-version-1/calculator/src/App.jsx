import styles from "./App.module.css"
import Display from "./component/Display";
import Buttoncontainer from "./component/Buttonscontainer";
function App(){
  const buttonname=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return(
    <div className={styles.calculator}>
       <Display></Display>
       <Buttoncontainer buttonname={buttonname}></Buttoncontainer>
    </div>
  )

}

export default App;