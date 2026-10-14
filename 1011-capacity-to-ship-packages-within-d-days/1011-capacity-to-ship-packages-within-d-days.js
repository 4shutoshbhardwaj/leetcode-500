/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let j=0;
    for(let i=0;i<weights.length;i++){
        j+=weights[i];
    }
    let i=Math.max(...weights);
    let ans=0;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        let daysConsumed=1;
        let sum=0;
        for(let k=0;k<weights.length;k++){
            if((sum+weights[k])<=m){
                sum+=weights[k];
            }else{
                daysConsumed++;
                sum=weights[k];
            }
        }
        if(daysConsumed<=days){
            j=m-1;
            ans=m;
        }else{
            i=m+1;
        }
    }
    return ans;
};