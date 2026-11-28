/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=-Infinity;
    let min=Infinity;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i];
        }
        max=Math.max(max,prices[i]-min);
    }
    // console.log(min,max);
    return max;
};