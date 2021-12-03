function validEmail() {
    //Gets value in email_address id
    var address = document.getElementById("email_address").value;
    
    //Makes sure email starts with a string, then has an '@' symbol, then another string, the '.com', '.edu', or '.edu'
    var pattern = /^\S+@\S+\.(com|edu|org)$/

    //Checks pattern is valid according to above regex
    if(pattern.test(address)){
        return (true);
    }
    else {
        alert("Please enter a valid email address.");
        return (false);
    }
}

