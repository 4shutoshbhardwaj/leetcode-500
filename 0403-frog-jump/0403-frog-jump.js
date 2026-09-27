/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let obj={};
    for(let i=0;i<stones.length;i++){
        if(obj[stones[i]]==undefined){
            obj[stones[i]]=i;
        }
    }
    let arr=Array(stones.length+1).fill(null).map(()=>Array(stones.length+1).fill(-1));
    function func(i,jump){
        if(i==stones.length-1)return true;
        if(arr[i][jump]!=-1)return arr[i][jump];
        let a=false,b=false,c=false;
        if(jump-1>0&&obj[stones[i]+jump-1]&&obj[stones[i]+jump-1]>i){
            a=func(obj[stones[i]+jump-1],jump-1);
        }
        if(jump>0&&obj[stones[i]+jump]&&obj[stones[i]+jump]>i){
            b=func(obj[stones[i]+jump],jump);
        }
        if(obj[stones[i]+jump+1]&&obj[stones[i]+jump+1]>i){
            c=func(obj[stones[i]+jump+1],jump+1);
        }
        arr[i][jump]=a||b||c;
        return a||b||c;
    }
    return func(0,0);
};