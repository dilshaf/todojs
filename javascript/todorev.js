let inputid=document.getElementById("inputid")
let btnid=document.getElementById("btnid")
let ulid=document.getElementById("ulid")

console.log(inputid)
console.log(btnid)
console.log(ulid)

function todoapp(){
    
    let input=document.getElementById("inputid").value
    console.log(input,'heyy')
    if(input==''){
        alert('please enter anything...')
    }else{
    let li=document.createElement("li")
    console.log(li)
    // li.innerHTML=input
    ulid.appendChild(li)

    let span=document.createElement('span')
    span.innerText=input
    li.appendChild(span)
    

    let deletebtn=document.createElement("i")
    deletebtn.classList.add("fa-solid", "fa-trash")
    li.appendChild(deletebtn);

    let editbtn=document.createElement("i")
    editbtn.classList.add("fa-solid", "fa-pen-to-square")
    li.appendChild(editbtn)

    li.addEventListener("click",function(events){
        if(events.target.classList[1]=="fa-trash"){
            events.target.parentElement.remove()
        }else if(events.target.classList[1]=="fa-pen-to-square"){
            let updatetext=prompt('enter update text')
            let updation=li.querySelector("span")
            updation.innerText=updatetext;


        }
    })
    }


    inputid.value=''
    inputid.focus();
}

    function callback(Event){
        console.log('hello')
        if(Event.key=='Enter'){
            btnid.click()
        }
    }
    document.addEventListener('keypress',callback)
    
    

