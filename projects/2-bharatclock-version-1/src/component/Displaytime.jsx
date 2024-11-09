function Displaytime(){
    let time=new Date();
    
    return<p>This is the Current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default Displaytime;