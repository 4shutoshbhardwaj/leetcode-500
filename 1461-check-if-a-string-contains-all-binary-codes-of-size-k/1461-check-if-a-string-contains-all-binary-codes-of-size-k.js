/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let obj={};
    let count=0;
    for(let i=0;i<s.length-k+1;i++){
        let str=s.slice(i,i+k);
        if(obj[str]==undefined){
            obj[str]=1;
            count++;
        }
    }
    let prod=1;
    for(let i=0;i<k;i++){
        prod=2*prod;
    }
    console.log(obj);
    if(count==prod)return true;
    else return false;
};