const form = document.querySelector('#ce-form');
    form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#inpt-name').value;
    const email = document.querySelector('#inpt-email').value;
    const regno = document.querySelector('#inpt-regno').value;
    const attendence = parseFloat(document.querySelector('#inpt-atd').value);

    const display = document.querySelector('.show');

    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let success = true;

    if(name == ''){
        alert("Invalid Name");
        success = false;
    }

    if(!email_pattern.test(email)){
        alert("Invalid Email");
        success = false;
    }

    if(regno.length != 12){
        alert("Invalid Registration No.");
        success = false;
    }

    if(!success){
        return;
    }

    if(attendence >= 75){
        alert("Eligible for Course");
        display.innerHTML = "<h3>Eligible for Course</h3>";
    }
    else{
        alert("Not Eligible for Course");
        display.innerHTML = "<h4>Not Eligible for Course</h4>";
    }

    form.reset();

})