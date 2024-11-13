import {createContext} from "react"

const Todoitemstore=createContext({todoitem :[],
    addnewitem:()=>{},
    deleteitem: ()=>{}
  });

export default Todoitemstore;
