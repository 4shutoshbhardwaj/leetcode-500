/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let arr=Array(cost.length).fill(-1);
    function func(i){
        if(i>=cost.length)return 0;
        if(arr[i]!=-1)return arr[i];
        arr[i]=cost[i]+Math.min(func(i+1),func(i+2));
        return arr[i];
    }
    return Math.min(func(0),func(1));
};