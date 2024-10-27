function Hello(){ 
    let myname='shubham'

    let fullname=()=>{
        return "shubham kokate"
    }
    return <h3>hello this is a future . i am {fullname()}</h3> // by using {} i can use any js variable or method , object
}

export default Hello;