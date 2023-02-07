var twoSum = function(target,nums){
    const hashmap ={};
    for(let i=0;i< nums.lenght; i++){
      const diff = target - nums[i];
      if (diff in hashmap) {
        console.log(hashmap[diff],i);
        return [hashmap[diff],i];
          }
          hashmap[nums[i]]=i;
    }
}

console.log(twoSum(9,[2,7,11,15]));
