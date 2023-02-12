

function userValidate() {

    //username validation
    var name = document.getElementById('myText').value;
    var letter = /^[A-Z a-z]+$/;

    if (name.match(letter)) {

        // document.getElementById('check1').innerHTML = "Success";
        true;


    }
    else {
        // document.getElementById('check1').innerHTML = " and enter alphabet only..";
        alert("Alphabet only");


    }


}



function passwdValidate() {

    var number = /^[0-9]/;
    var pswdd = document.getElementById('myPswd').value;


    //password validation
    if (pswdd.match(number)) {
        // alert("Correct pass");

        done();

    }
    else {
        // document.getElementById('check2').innerHTML = "enter numbers only";
        alert("number only");



    }
    true;
}

function done() {
    document.getElementById('done').innerHTML = "Loggin successfully";
}