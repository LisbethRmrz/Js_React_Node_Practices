const originalArray = [2,5,6,7,1,8,9,10];
let newArray = originalArray.slice();
newArray.forEach(deleteMinNumber)

function deleteMinNumber(item, index) {
    let min = Math.min(...newArray);
  if(item === min){
    let getIndex = index;
    deleteMin = newArray.splice(getIndex, 1);
  }
}
console.log(`Original array is: [${originalArray}]`);
console.log(`New array is: [${newArray}]`);