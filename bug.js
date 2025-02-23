function foo(x){
  if (x == null) { //This condition will return true if x is null or undefined
    return 0; 
  }
  return x;
}
console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: 0