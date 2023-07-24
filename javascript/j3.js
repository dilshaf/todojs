console.log("hyy");
let addinput = document.getElementById("addinput");
let btnid = document.getElementById("btnid");
let itemid = document.getElementById("itemid");

// console.log(addinput);
// console.log(btnid);
// console.log(itemid);

function todoAdd() {
    // console.log("click");
    let inputvalue = addinput.value;
    //condition
    if (inputvalue === '') {
        alert('please enter your task')
    }
    else {
        //      //first create list append()
        let li = document.createElement("li");
        let span=document.createElement("span");
        span.innerText=inputvalue;
        // console.log(li);
        //deletebutton

        // let deletebtn = document.createElement("i");
        // deletebtn.classList.add("fa-solid", "fa-trash");
        // deletebtn.style.backgroundColor = "yellow";
        // let Editbtn=document.createElement("i");
        // Editbtn.classList.add("fa-solid","fa-pen-to-square");

        // li.addEventListener("click", function name(events) {
        //     console.log('events')
        //     let targetcls = events.target.classLists;
        //     console.log(events.target.classList[1]);
            // console.log(targetcls,'targetcode');
            // console.log(targetcls[0]);
            // console.log(targetcls[1]);
            // console.log(targetcls[1]==='fa-trash');

            // console.log(events.target.parentElement.remove(),'-----parent Element');
            // console.log(events.target);
            // console.log(targetcls);
            // console.log(targetcls[0]);
            // console.log(targetcls[1]);
            // console.log(targetcls[1]==='fa-trash');

            // if (events.target.classList[1] === 'fa-trash') {
            //     events.target.parentElement.remove();

            // }elseif(targetcls[1] === 'fa-pen-to-square'){
            //     let update=prompt('enter text');
            //     console.log(update,"update....")
            //     let newSpan =  li.querySelector("span")
            //     newSpan.innerText = updateText;
            //     console.log(li);
            //     console.log(newSpan);
            // }
            // itemid.appendChild(li);

        // })
        // if (inputValue === '') {
        //     // true
        //     alert('please enter your task')
        // } else {

        // let li=document.createElement("li");
        // let span=document.createElement("span");




        //insert value inside li
        // li.innerText = inputvalue;

        // span.innerText=inputvalue;
        itemid.appendChild(li);


        //step-b
        // itemid.appendChild(li);
        // li.appendChild(span);



        // console.log(inputvalue);

        // //first create list append()
        // let li=document.createElement("li");
        // console.log(li);

        // //insert value inside li
        // li.innerText=inputvalue;

        // //step-b
        // itemid.appendChild(li);
        // itemid.appendChild(li);
        // li.appendChild(deletebtn);
        li.appendChild(span);

        addinput.value = '';
        addinput.focus();

        let deletebtn = document.createElement("i");
        deletebtn.classList.add("fa-solid", "fa-trash");
        deletebtn.style.backgroundColor = "yellow";
        li.appendChild(deletebtn);

        let Editbtn=document.createElement("i");
        Editbtn.classList.add("fa-solid","fa-pen-to-square");
        li.appendChild(Editbtn);

        li.addEventListener("click", function name(evets) {
            let targetClass = evets.target.classList;

        if (evets.target.classList[1] === 'fa-trash') {
            
            evets.target.parentElement.remove()
        }else if (evets.target.classList[1] === 'fa-pen-to-square'){
            let updateText =  prompt("Enter text");
            console.log(updateText,'update text here...');

        let newSpan=li.querySelector("span")
        newSpan.innerText=updateText;
        console.log(li);
        console.log(newSpan)
    }

    });
    }
}
function callback(Event) {
    console.log('log');
    if (Event.key === 'Enter') {
        btnid.click();
    }
}

document.addEventListener("keypress", callback);
// btnid("click",todoAdd);
btnid.addEventListener("click", todoAdd);

