/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let wSum=0;
    for(let i=0;i<cardPoints.length;i++){
        wSum+=cardPoints[i];
    }
    let i=0;
    let j=0;
    let sum=0;
    k=cardPoints.length-k;
    while(k>0){
        sum+=cardPoints[j];
        j++;
        k--;
    }
    let maxSum=wSum-sum;
    while(j<cardPoints.length){
        sum-=cardPoints[i];
        i++;
        sum+=cardPoints[j];
        j++;
        maxSum=Math.max(maxSum,wSum-sum);
    }
    return maxSum;
};