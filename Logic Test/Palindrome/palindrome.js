function isPalindromeCheck(string) {

    var strArray = string.toLowerCase().split("");
    var newArr = strArray.join('');
    var reverseArr = [...newArr].reverse().join('');

    if( newArr === reverseArr){
        return (string+"   # --> Palindrome ");
    } else {
        return (string+"   # --> Not Palindrome ");
    }
  
    
  }
  
  var palindrome1 = isPalindromeCheck("Radar");
  var palindrome2 = isPalindromeCheck("Malam");
  var palindrome3 = isPalindromeCheck("Kasur ini rusak");
  var palindrome4 = isPalindromeCheck("Ibu Ratna antar ubi");
  var palindrome5 = isPalindromeCheck("Malas");
  var palindrome6 = isPalindromeCheck("Makan nasi goreng");
  var palindrome7 = isPalindromeCheck("Balonku ada lima");
  console.log(palindrome1);
  console.log(palindrome2);
  console.log(palindrome3);
  console.log(palindrome4);
  console.log(palindrome5);
  console.log(palindrome6);
  console.log(palindrome7);
  
 
  document.write(palindrome1+"<br>");
  document.write(palindrome2+"<br>");
  document.write(palindrome3+"<br>");
  document.write(palindrome4+"<br>");
  document.write(palindrome5+"<br>");
  document.write(palindrome6+"<br>");
  document.write(palindrome7+"<br>");
  