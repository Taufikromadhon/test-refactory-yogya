function fizzBuzz(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= 1; j++) {
      if (i % 3 == 0) 
        str = str + "Fizz";
      else if (i % 5 == 0) 
        str = str + "Buzz";
      else if (i % 15 == 0) 
        str = str + "Fizz Buzz";
      else 
        str = str + i;
      }
    str = str + ", ";
  }
//   var k = parseInt(1) + parseInt(n);
  for (var m = 1; m <= 1; m++) {
    str = str.substring(0, str.length - 2);
  }
  var hasil = document.getElementById("output-fizzBuzz");
  hasil.innerHTML = str;
  console.log(str);
}

function submitFizzBuzz(event) {
  event.preventDefault();
  let inputByUser = event.target["your-fizzBuzz"].value;
  var n = inputByUser;
  fizzBuzz(n);
}
