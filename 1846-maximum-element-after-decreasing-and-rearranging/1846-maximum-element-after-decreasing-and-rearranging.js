/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b)=>a-b);
    let max=0;
    let t=true;
    arr[0]=1;
    for(let i=0;i<arr.length-1;i++){
        if(Math.abs(arr[i]-arr[i+1])>1){
            arr[i+1]=arr[i]+1;
        }
        max=Math.max(max,arr[i]);
    }
    max=Math.max(max,arr[arr.length-1]);
    // console.log(max,arr);
    return max;
};