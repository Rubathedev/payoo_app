document.getElementById('add-money')
   .addEventListener('click', function(event) {
       event.preventDefault(); // ✅ Fix: Properly prevent form submission

       const amount = document.getElementById('amount').value; // ✅ Fix: Trim spaces
       const convertAmount = parseFloat(amount); 

       const pin = document.getElementById('Acount-pin').value; // ✅ Fix: Trim spaces
       const converPin = parseInt(pin); // ✅ Fix: Ensure proper parsing as base-10 integer

       const mainBalance = document.getElementById('main-balance').innerText;
       const convertBalance = parseFloat(mainBalance); 

       console.log("Entered PIN:", converPin); // Debugging log

       if (converPin === 1234) { 
           console.log("Correct PIN! Adding money...");
           const total = convertBalance + convertAmount;
           document.getElementById('main-balance').innerText = total;
       } else {
           console.log("Pin is incorrect");
       }
   });
