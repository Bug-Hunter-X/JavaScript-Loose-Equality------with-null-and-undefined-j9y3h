function foo(x){
  if (x === null) { //This condition will only return true if x is null
    return 0; 
  }
  return x;
}
console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: undefined