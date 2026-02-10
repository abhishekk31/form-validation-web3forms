var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error")

function validationName(){
    var Name=document.getElementById("Name").value;
    if (Name==""){
        nameError.innerHTML="name is required";
        nameError.style.color = "red";
        return false
    }
    if(!Name.match(/^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$/
)){
      nameError.innerHTML="write valid name"
      nameError.style.color = "red";
      return false
    }
    else{
        nameError.innerHTML="valid"
        nameError.style.color = "green";
        return true;
    }
    
}

function phoneErrorRs(){
    var Phone=document.getElementById("phone").value;
    if(Phone.length==0){
          phoneError.innerHTML="enter phone number";
          phoneError.style.color="red";
          return false
    }
    if(Phone.length!==10){
        phoneError.innerHTML="phone number should be 10 numbers";
          phoneError.style.color="red";
          return false
    }
    else{
        phoneError.innerHTML="Valid";
          phoneError.style.color="green";
          return true
    }
}


