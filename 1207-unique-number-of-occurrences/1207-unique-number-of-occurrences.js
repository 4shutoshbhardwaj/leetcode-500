/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj={};
    for(let i=0;i<arr.length;i++){
        let s=arr[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }else{
            obj[s]++;
        }
    }
    let a=[];
    for(let o in obj){
        a.push(obj[o]);
    }
    a.sort((a,b)=>a-b);
    for(let i=1;i<a.length;i++){
        if(a[i-1]==a[i])return false;
    }
    return true;
};