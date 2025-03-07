document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const acountNumber = document.getElementById('Acount-number').value;
    // console.log(acountNumber)
    const acountPin  = document.getElementById('Acount-pin').value;
    const convertPin = parseInt(acountPin);
    // console.log(acountPin);
    if(acountNumber.length === 11 && acountPin.length === 4){
        if(convertPin === 1234   ){
            window.location.href= "./main.html"
        }
        else{
            alert("pin thik nai"); 
        }
    }
    else{
        alert("need a valid account number");
    }
})