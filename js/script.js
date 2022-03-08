'use strict';

const myUserInput = document.querySelectorAll('form input');
const submitBtn = document.querySelector('form input[type="submit"]');
// user input start here
const inputArray = Array.prototype.slice.call(myUserInput);
// input array destructuring start here
const [names,email,phone,password] = inputArray;

function formValidate()
{
    submitBtn.addEventListener('click', (e) => 
    {
        e.preventDefault();
    if(names.value === '' || email.value === '' || phone.value === '' || password.value === '')
    {
            alert('Please fill up the form');
    }else{
        console.log('Your registation has been successfully submited');
    }
    names.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';
    })
}



