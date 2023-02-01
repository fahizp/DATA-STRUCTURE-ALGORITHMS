function linerSearch(array,target) {
    for (let index = 0; index < array.length; index++) {
      if (array[index]===target) {
        return index
      }
        
    }
    return -1;
}

console.log(linerSearch([-5,2,10,4,6],10));
console.log(linerSearch([-5,2,10,4,6],6));
console.log(linerSearch([-5,2,10,4,6],20));