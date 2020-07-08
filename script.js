const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

//show inputs error mssage
function showError(input, message){
         const formControl = input.parentElement;
         formControl.className = 'form-control error';
         const small = formControl.querySelector('small');
         small.innerText = message;

}

//show success
function showSuccess(input){
         const formControl = input.parentElement;
         formControl.className = 'form-control success';
}

//check email if it is valid
function checkEmail(input){
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value.trim())){
        showSuccess(input);
   } 
   else{
       showError(input, 'Email is not valid');
   }
}

//check required fields 
function checkRequired(inputArr){
        inputArr.forEach(function(input){
        	
        if(input.value.trim() === ''){
           	showError(input, `${getFieldName(input)} is required`);
           }
           else {
           	showSuccess(input);
           }
    });
}
//checkLength
function checkLength(input, min, max){
         if(input.value.length < min){
         	showError(input, `${getFieldName(input)} must be at least ${min} characters`);
         }
         else if(input.value.length > max){
             showError(input, `${getFieldName(input)} must be  less that ${max} characters`);
         } 
          else {
          	showSuccess(input);
          }
}
//check password
function passwordMatch(input1, input2){
	    if(input1.value != input2.value){
	    	showError(input2,'Passwords do not match!');
	    }
}
//getFieldName
function getFieldName(input){
	      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//event listeners
form.addEventListener('submit',function(e){
      e.preventDefault();
     checkRequired([username, email, password, confirm_password]);
     checkLength(username, 3, 15);
     checkLength(password, 6, 25);
     checkEmail(email);
     passwordMatch(password, confirm_password);

});
