/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let i=Math.max(...weights);
    let j=weights.reduce((a, b) => a + b, 0);
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        let sum=0;
        let day=days;
        for(let w in weights){
            if(sum+weights[w]>mid){
                sum=weights[w];
                day--;
            }else{
                sum+=weights[w];
            }
        }
        if(day>0){
            j=mid-1;
        }else if(day<=0){
            i=mid+1;
        }
    }
    return i;
};