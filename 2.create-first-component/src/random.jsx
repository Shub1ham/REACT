function Random(){

    let number=Math.random() *100 ;
    return <h1 style={{'background-color':'#776691'}}>random number : {Math.round(number)}</h1>

}

export default Random;