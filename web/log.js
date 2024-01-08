
const fixedMail = 'milonsagor08@gmail.com';
const fixedPass ='0310';


function validate(){
    if(document.getElementById('mail').value!==fixedMail){
        swal ('Wrong Email!!')
        return false;
    }else{
        alert ('Your Information is Correct. Click OK to Enter the Page.');
    };
    
    if(document.getElementById('pass').value!== fixedPass){
        swal ('Wrong Password!!')
        return false;
    };

}
