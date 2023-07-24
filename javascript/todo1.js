function action(){
    var input=document.getElementById("inputid").value;
    let li=document.createElement("li");
    console.log(li);
    li.innerHTML=input
    ulid.appendChild(li);
    let span=document.createElement('span')
    span.innerHTML='\u00d7'
    li.appendChild(span)
    console.log(span)
    inputid.value=''
    inputid.focus();




}
ulid.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }

    
})