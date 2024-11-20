import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCallback } from "react";
import { useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let passw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "/!@#$%^&*()";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      passw += str.charAt(char);
    }
    setpassword(passw);
  }, [length, numberallowed, charallowed]);
  
  useEffect(()=>{passwordgenerator()},[length,numberallowed,charallowed])
  return (
    <center>
      <h1>Password Generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
        ></input>
        <button>COPY</button>
      </div>
      <div>
        <input type="range" min={8} max={50} value={length}
        onChange={(event)=>setlength(event.target.value)}
        ></input>
        <label>Length : {length}</label>
        <input type="checkbox"
        defaultChecked={numberallowed}
        onChange={()=>setnumberallowed((pre)=>!pre)}
        ></input>
        <label>Number</label>
        <input type="checkbox"
        defaultChecked={charallowed}
        onChange={()=>setcharallowed((pre)=>!pre)}
        ></input>
        <label>Character</label>
      </div>
    </center>
  );
}

export default App;
