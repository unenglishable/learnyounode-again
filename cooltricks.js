//use a forEach:
array.forEach(function(element) {
  // the thing to do to an element
  console.log(element+1);
});

// use a filter:
array.filter(function(element) {
  // keep if element matches condition
  return element === condition;
});
