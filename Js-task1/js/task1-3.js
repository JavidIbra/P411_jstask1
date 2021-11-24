
let nums = [3, 10, 7, 17, 27];
  
function findMax(array) {
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    if (max < array[index]) {
      max = array[index];
    }
  }
  return max;
}

console.log("daxil edilen coxlugun en boyuk ededi: " + findMax(nums));
