function nearestFibonacci(num) {
  if (num == 0) {
    // document.write(0);
    return;
  }
  let first = 0,
    second = 1;
  let third = first + second;

  while (third <= num) {
    first = second;
    second = third;
    third = first + second;
  }
  let ans = Math.abs(third - num) >= Math.abs(second - num)
    ? second
    : third;

  // document.write(ans);
  var hasil = document.getElementById("output-nearest-fibonacci");
  hasil.innerHTML = ans;
  console.log("Fibonacci Terdekat = "+ans);
}

function submitNearestFibonacci(event) {
  event.preventDefault();
  let inputByUser1 = event.target["first-fibo"].value;
  let inputByUser2 = event.target["second-fibo"].value;
  let inputByUser3 = event.target["third-fibo"].value;
  var i;
  var fiboNum = [];
  fiboNum[0] = inputByUser1;
  fiboNum[1] = inputByUser2;
  fiboNum[2] = inputByUser3;

  let N = parseInt(fiboNum[0]) + parseInt(fiboNum[1]) + parseInt(fiboNum[2]);
  console.log("Hasil Penjumlahan = "+N);
  nearestFibonacci(N);
  
}
