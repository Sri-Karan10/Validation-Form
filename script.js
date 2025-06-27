const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal===''){
        setError(username,'username is required');
    }else{
        setSuccess(username)
    }

    if(emailVal===''){
        setError(email,'Email is required');
    }else if(!isValidEmail(emailVal)){
        setError(email,'Please enter a valid email');
    }else{
        setSuccess(email);
    }

    if(passwordVal===''){
        setError(password,'Password is required');
    }else if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 Character');
    }else{
        setSuccess(password);
    }

    if(cpasswordVal===''){
        setError(cpassword,'Conform password is required');
    }else if(cpasswordVal!==passwordVal){
        setError(cpassword,"Password doesn't match")
    }else{
        setSuccess(cpassword)
    }
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.match(pattern) !== null;
}