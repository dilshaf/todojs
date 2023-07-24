function getValue(){
    console.log('calling');
    let value=document.querySelector('input').value;
    console.log(`value is: ${value}`);
    // document.querySelector("h1").innerHTML=value
    console.log(value.length);
    if(value.length==0){
    document.querySelector("span").innerHTML='field is required'
    }
    if(value.length>=5 && value.length<=15){
        document.querySelector("h1").innerHTML=value
    }
    else{
            document.querySelector("span").innerHTML='max 15 characters'
        }

    
    

}