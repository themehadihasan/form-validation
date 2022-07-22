let yourName = document.getElementById("name");
let contactNumber = document.getElementById("phone");
let email = document.getElementById("email");
let message = document.getElementById("message");

let flag = 1;

function isFormValid() {
    if(yourName.value == "" && contactNumber.value == "" && email.value == "" && message.value == "") {
        document.getElementById("findError").innerHTML = "All fields are required";
        flag = 0;
    } else if(yourName.value == "" || contactNumber.value == "" || email.value == "" || message.value == "") {
        document.getElementById("findError").innerHTML = "All fields are required";
        flag = 0;
    } else if(yourName.value.length < 3) {
        document.getElementById("findError").innerHTML = "'Your Name' is required minimum 3 characters";
        flag = 0;
    } else if(contactNumber.value.length < 10) {
        document.getElementById("findError").innerHTML = "'Contact Number' is not less than 10 characters";
        flag = 0;
    } else if(isNaN(contactNumber.value)) {
        document.getElementById("findError").innerHTML = "'Contact Number' is required only numeric value";
        flag = 0;
    } else {
        document.getElementById("findError").innerHTML = "";
        flag = 1;
    }
    
    if(flag) {
        return true;
    } else {
        return false;
    }
}