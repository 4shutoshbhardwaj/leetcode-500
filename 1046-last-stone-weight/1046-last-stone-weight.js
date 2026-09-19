/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let arr=[...stones];
    arr.sort((a,b)=>a-b);
    while(arr.length>1){
        if(arr.length>=2){
            let last=arr.pop();
            let secondLast=arr.pop();
            console.log(last,secondLast,arr);
            arr.push((last-secondLast));
        }
        arr.sort((a,b)=>a-b);
    }
    console.log(arr);
    return arr[0];
};