/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let obj={};
    let arr=s.split(" ");
    if(arr.length!=pattern.length)return false;
    for(let i=0;i<pattern.length;i++){
        console.log(obj,i,obj[pattern[i].charCodeAt(0)],obj[arr[i]]);
        if(obj[pattern[i].charCodeAt(0)]==undefined&&obj[arr[i].slice(0,Math.ceil(arr[i].length/2))]==undefined){
            obj[pattern[i].charCodeAt(0)]=arr[i];
            obj[arr[i].slice(0,Math.ceil(arr[i].length/2))]=pattern[i];
        }else if(obj[pattern[i].charCodeAt(0)]!=arr[i]||obj[arr[i].slice(0,Math.ceil(arr[i].length/2))]!=pattern[i]){
            return false;
        }
    }
    return true;
};