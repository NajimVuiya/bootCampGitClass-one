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

/*
    == git commmand ==
    int 'for initialize'
    git config --global user.name 'user name'
    git config --global user.eamil 'user email address'
    git config --list
    git commit-m 'measn updated and final stage "m means message "'
    git log 'for showing updated virsion number'
    git log --oneline 'it will readuce updated virsion number's number or code'
    git show updated number 'it will show you your all the updated'
    git commit-am 'it will avoid staging area it will just commit'
    wq and Enter press 'for avoid end '
    git checkout 'for change brach'
    git switch -c nameOfBranch 'you can create a new branch'
    git switch 'go back in previous branch'
    git add 
    git add .
*/

/* 
-------------------------------------------
 gitHub class 2 start here
 
 git diff 'for logcal stage'
 git diff --staged 'for staged repojitory'
 git revert 'mean's undo it means we are just commit now but we think we need to change something of it'
-------------------------------------- -*practice*-revert updated
*/
// Time



