/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    let diff=arr[0]-arr[1];
    console.log(arr,diff);
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]-arr[i+1]!=diff)return false;
    }
    return true;
};