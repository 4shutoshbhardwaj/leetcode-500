/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let obj={};
    let a=[...arr];
    a.sort((a,b)=>a-b);
    let i=0;
    let j=1;
    while(i<a.length){
        if(obj[a[i]]==undefined){
            obj[a[i]]=j;
            j++;
        }
        i++;
    }
    for(let i=0;i<arr.length;i++){
        a[i]=obj[arr[i]];
    }
    return a;
};