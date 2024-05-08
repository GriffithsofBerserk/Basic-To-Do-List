'use strict';

//<li class="list-group-item">
//<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
//<label class="form-check-label" for="firstCheckbox">First checkbox</label>
//</li>

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)

function formHandler(event){
    event.preventDefault()
    const WORK_NAME = document.querySelector('#workname')
    console.log(WORK_NAME.value)
    addItem(WORK_NAME.value)
}

let userListDOM = document.querySelector('#userList')
const addItem = (workname) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label justify-content-between" for="firstCheckbox">${workname}</label>
        <button type="button" class="btn btn-outline-primary float-end" id="delete">Delete</button> 
        `
    liDOM.classList.add(
        'list-group-item',  'align-items-center','justify-content-between'
    )
    userListDOM.append(liDOM)
    return userListDOM = document.querySelector('#userList')
}

let deleteText = document.querySelector('#userList')
deleteText.addEventListener('click',formDelete)

function formDelete(event){
    event.preventDefault()
    const DELETE_ITEM = document.querySelector('#delete')
    console.log("delete tıklandı")
    deleteText.remove(DELETE_ITEM.value)
    return userListDOM = document.querySelector('#userList')
}