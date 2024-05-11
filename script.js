'use strict';

let taskDOM = document.querySelector('#task')
let addDOM = document.querySelector('#liveToastBtn')
let list = document.querySelector('#list')
let toastDOM = document.querySelector('#liveToast')

addDOM.addEventListener('click',newElement)

function newElement(event){
    event.preventDefault()
    
    if(taskDOM.value.trim() !== ""){
        let li = document.createElement("li")
        li.textContent = taskDOM.value
        list.appendChild(li)
        let spanDOM = document.createElement('span')
        spanDOM.className ="close"
        spanDOM.textContent = "x"
        

    spanDOM.addEventListener('click',function(){
        li.remove()
    })

    li.appendChild(spanDOM)
    list.appendChild(li)
    $(".success").toast("show");
    }else{
        $(".error").toast("show");
    }
    taskDOM.value =""
}