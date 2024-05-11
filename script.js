'use strict';

let taskDOM = document.querySelector('#task')
let addDOM = document.querySelector('#liveToastBtn')
let list = document.querySelector('#list')
let toastDOM = document.querySelector('#liveToast')
let inputs = []

addDOM.addEventListener('click', newElement)

function newElement(event) {
    event.preventDefault()
    
    if (taskDOM.value.trim() !== "") {
        let li = document.createElement("li")
        li.textContent = taskDOM.value
        list.appendChild(li)
        let spanDOM = document.createElement('span')
        spanDOM.className ="close"
        spanDOM.textContent = "x"

        inputs.push(taskDOM.value)
        console.log(inputs)
        let inputString = JSON.stringify(inputs)
        localStorage.setItem("inputs", inputString)

        spanDOM.addEventListener('click', function() {
            li.remove()
        });

        li.appendChild(spanDOM)
        list.appendChild(li)
        $(".success").toast("show")
    } else {
        $(".error").toast("show")
    }
    taskDOM.value =""
}

list.addEventListener("click", function(task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("checked")
    }
})

window.onload = function() {
    let storedInputs = localStorage.getItem("inputs")
    if (storedInputs) {
        inputs = JSON.parse(storedInputs)
        inputs.forEach(function(task) {
            let li = document.createElement("li")
            li.textContent = task
            let spanDOM = document.createElement("span")
            spanDOM.className = "close"
            spanDOM.textContent = "x"
            li.appendChild(spanDOM)
            list.appendChild(li)
        })
    }
}