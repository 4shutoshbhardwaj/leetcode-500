/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let arr=[];
    function pushVal(val){
        if(arr.length==0){
            arr.push(val);
        }else{
            let temp=[];
            while(val<arr[arr.length-1]){
                temp.push(arr.pop());
            }
            arr.push(val);
            while(temp.length>0){
                arr.push(temp.pop());
            }
        }
    }
    while(stones.length>0){
        pushVal(stones.pop());
    }
    console.log(arr);
    while(arr.length>1){
        let last=arr.pop();
        let secondLast=arr.pop();
        pushVal((last-secondLast));
    }
    return arr[0];
};