var maxProfit = function(prices) {
    if(!Array.isArray(prices)){
        return 0;
    }
    let left = 0;
    let right = 1;
    let difference = [];
    findIndex(left,right,difference);
    function findIndex(left,right,difference){
       if(right==prices.length){
        return;
       }
       else if(prices[left]<prices[right]){
        let value = prices[right]-prices[left];
        difference.push(value);
        right++;
        return findIndex(left,right,difference)
       }
       else if(prices[right]<=prices[left]){
        left=right;
        right++;
        return findIndex(left,right,difference);
       }
    }
    console.log(difference);
    if(difference.length>0){
        return Math.max(...difference);
    }
    else{
        return 0;
    }
};
console.log(maxProfit(prices));