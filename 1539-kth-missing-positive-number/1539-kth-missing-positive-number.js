/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i=0;
    let j=1;
    let count=0;
    while(count!=k){
        if(arr[i]!=j){
            count++;
        }else{
            i++;
        }
        j++;
    }
    return j-1;
};