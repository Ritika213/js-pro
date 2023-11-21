function UserInputChanged(input) {
    console.log(input.value);
    var year = input.value;

    // check for leap year
    // Algorithm based on logic from here - https://en.wikipedia.org/wiki/Leap_year#Algorithm
    var a = year % 4;
    var b = year % 100;
    var c = year % 400;
 
    var isLeap = (a == 0);
    isLeap = isLeap && (b != 0);
    isLeap = isLeap || (c == 0);

    console.log ("Is Year " + year + " a leap year? " + isLeap);
    
    document.getElementById("result").innerText = year + " is " + (isLeap ? "a " : " not a") + " leap year";
  }
  
  

