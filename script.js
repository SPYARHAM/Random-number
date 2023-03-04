function generateNumber() {
    var number = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").innerHTML = number;
  }
  var count = 0; // Keep track of the number of generated numbers
  var numbers = []; // An array to store the generated numbers

  function generateNumberWithinRange() {
    if (count >= 100) {
      alert("All numbers have been generated");
      return;
    }

    // Generate the next number based on the count
    var number;
    if (count < 25) {
      number = Math.floor(Math.random() * (12 - 6 + 1) + 6);
    } else if (count < 50) {
      number = Math.floor(Math.random() * (12 - 3 + 1) + 3);
    } else if (count < 75) {
      number = Math.floor(Math.random() * (6 - 3 + 1) + 3);
    } else {
      number = Math.floor(Math.random() * (9 - 6 + 1) + 6);
    }

    // Add the number to the array and update the HTML
    numbers.push(number);
    document.getElementById("number-with-range").innerHTML = number;

    // Increment the count
    count++;
  }

  function generateNumberWithLocation(){
    var location =document.getElementsByName("location");
    var selectedLocation = [];
    for(var i=0;i<location.length;i++){
      if(location[i].checked){
        selectedLocation.push(location[i].value);
      }
    }
    if (selectedLocation.length == 0) {
      alert("Please select at least one Location.");
      return;
    }
    var number;
    while(true){
      number=Math.floor(Math.random()*100) + 1;
      if(selectedLocation.includes("India") && isEven(number)){
        break;
      }
      if(selectedLocation.includes("USA") && isOdd(number)){
        break;
      }
      if(selectedLocation.includes("Russia") && isPrime(number)){
        break;
      }
    }
    document.getElementById("number-with-location").innerHTML = number;
  }

  function generateNumberWithProperties() {
    var properties = document.getElementsByName("property");
    var selectedProperties = [];
    for (var i = 0; i < properties.length; i++) {
      if (properties[i].checked) {
        selectedProperties.push(properties[i].value);
      }
    }
    if (selectedProperties.length == 0) {
      alert("Please select at least one property.");
      return;
    }
    var number;
    while (true) {
      number = Math.floor(Math.random() * 100) + 1;
      if (selectedProperties.includes("even") && isEven(number)) {
        break;
      }
      if (selectedProperties.includes("odd") && isOdd(number)) {
        break;
      }
      if (selectedProperties.includes("prime") && isPrime(number)) {
        break;
      }
      if (selectedProperties.includes("composite") && isComposite(number)) {
        break;
      }
      if (selectedProperties.includes('multipleOf3')  && isMulipleof3(number)) {
        break;
      }
      if (selectedProperties.includes('multipleOf5')  && isMulipleof5(number)) {
       break;
      }
      if (selectedProperties.includes('multipleOf7')  && isMulipleof7(number)) {
        break;
      }
    }
    document.getElementById("number-with-properties").innerHTML = number;
  }
  
  function isEven(number) {
    if(number % 2 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  function isOdd(number) {
    if(number % 2 != 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
    
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  function isComposite(number) {
    if (number < 4) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return true;
      }
    }
    return false;
  }
  function isMulipleof3(number) {
    if(number % 3 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  function isMulipleof5(number) {
    if(number % 5 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  function isMulipleof7(number) {
    if(number % 7 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  
 