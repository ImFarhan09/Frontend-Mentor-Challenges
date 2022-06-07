const form = document.getElementById('form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    const firstname = form['fname'].value;
    const lastname = form['lname'].value;
    const email = form['email'].value;
    const password = form['pword'].value;

    if(firstname ===''){
        addError('fname','First Name cannot be empty');
    } else{
        removeError('fname');
    }

    if(lastname ===''){
        addError('lname','Last Name cannot be empty');
    } else{
        removeError('lname');
    }

    if(email ===''){
        addError('email','Email cannot be empty');
    } else if(!isValid(email)){
        addError('email','Looks like this is not an email');
    } else{
        removeError('email');
    }

    if(password ===''){
        addError('pword','Pasword cannot be empty');
    } else{
        removeError('pword');
    }
})

function addError(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
}

function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');

}

function isValid(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}