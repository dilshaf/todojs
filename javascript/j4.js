console.log("haiiii");
let inid=document.getElementById("inid");
let btnid=document.getElementById("btnid");
let ulid=document.getElementById("ulid");

console.log(inid);
console.log(btnid);
console.log(ulid);

//create function
function todo(){
    console.log("todo");
    let inputvalue=inid.value;
    if (inputvalue === '') {
        alert('please enter your task')
    }
    else {
    console.log(inputvalue);

    let li=document.createElement("li");
    console.log(li);
    li.innerText=inputvalue;
    ulid.appendChild(li);
    console.log(inputvalue);
    inid.value = '';
    inid.focus();
    }
}
function callback(Event) {
    console.log('log');
    if (Event.key === 'Enter') {
        btnid.click();
    }
}
document.addEventListener("keypress", callback);
btnid.addEventListener("click",todo);