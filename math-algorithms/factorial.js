//give an integer n find the factorial of the integer
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
    // console.log(result);
  }
  return result;
}
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));
