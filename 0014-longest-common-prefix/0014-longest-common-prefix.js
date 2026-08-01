/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var max=strs.reduce((acc,a)=>acc=acc<a.length?a.length:acc,-Infinity);
    var str="";
    for(var i=0;i<max;i++){
        str+=strs[0][i]?strs[0][i]:"";
        for(var j=0;j<strs.length;j++){
            if(!strs[j].startsWith(str))return str.slice(0,str.length-1);
        }
    }
    return str;
};