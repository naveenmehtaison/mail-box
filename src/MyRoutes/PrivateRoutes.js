const PrivateRoute=(selector,Component,Alt)=>{
    console.log(selector,Component,Alt)
    if(selector){
        return(<Component/>)

    }
    else if(selector==false){
        return(<Alt/>)
    }


}
export default PrivateRoute