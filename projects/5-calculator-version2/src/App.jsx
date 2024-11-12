import styles from "./App.module.css"
import Display from "./component/Display";
import Buttoncontainer from "./component/Buttonscontainer";
import {useState} from "react";
import Item from "../../../3-fragments/learning-fragment/src/component/Item";
function App(){

  let [calval , setcalval]= useState("");

  const handleclickbutton=(buttontext)=>{
    if(buttontext==='C'){
      setcalval("");
    }
    else if (buttontext==='='){
      const result=eval(calval)
      setcalval(result);
    }
    else{
      const newdisplayvalue=calval+buttontext
      setcalval(newdisplayvalue)
    }
    
  }

  const buttonname=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return(
    <div className={styles.calculator}>
       <Display displayvalue={calval}></Display>
       <Buttoncontainer buttonname={buttonname} handleclickbutton={handleclickbutton} ></Buttoncontainer>
    </div>
  )

}

export default App;