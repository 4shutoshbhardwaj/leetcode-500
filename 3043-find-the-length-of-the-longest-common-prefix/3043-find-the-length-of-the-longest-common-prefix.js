/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let max=0;
    let obj={};
    for(let i=0;i<arr1.length;i++){
        let str=""+arr1[i];
        for(let j=0;j<str.length;j++){
            let s=""+arr1[i];
            s=s.slice(0,j+1);
            // console.log(str,obj,j,str.slice(0,j+1));
            if(obj[s]==undefined){
                obj[s]=s.length;
            }
        }
    }
    // console.log(obj);
    for(let i=0;i<arr2.length;i++){
        let str=""+arr2[i];
        for(let j=0;j<str.length;j++){
            let s=""+arr2[i];
            s=s.slice(0,j+1);
            // console.log(s);
            if(obj[s]!=undefined){
                max=Math.max(max,obj[s]);
            }
        }
    }
    return max;
};