var twoSum = function (nums, target) {
    if (!Array.isArray(nums) || typeof target !== 'number') {
        return 0;
    }
    let result = [];
    let element = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (element.has(difference)) {
            result.push(nums.indexOf(difference), i);
        }
        else {
            element.set(nums[i], true);
        }
    };
    return result;
}
console.log(twoSum(nums,target))