var containsDuplicate = function(nums) {
    if(!Array.isArray(nums)){
        return false;
    }
    let duplicate = new Map();
    for(let num of nums){
        duplicate.set(num,(duplicate.get(num)||0)+1);
    }
    for(let [key,value] of duplicate){
        if(value>1){
            return true;
        }
    }
    return false;
};
console.log(containsDuplicate(nums));