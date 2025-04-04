var productExceptSelf = function (nums) {
    if (!Array.isArray(nums)) {
        return 0;
    }
    let prefix = [1];
    let suffix = [1];
    let forward = 1;
    let reverse = 1;
    let value = 1;
    let answer = [];
    for(let i=1;i<nums.length;i++){
        forward *= nums[i-1];
        reverse *= nums[nums.length-i];
        prefix.push(forward);
        suffix.unshift(reverse)
    }
    for(let i=0;i<nums.length;i++){
        value = prefix[i]*suffix[i];
        answer.push(value);
    }
    return answer;
};
console.log(productExceptSelf(nums))