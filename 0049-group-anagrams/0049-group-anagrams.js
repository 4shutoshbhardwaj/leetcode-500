/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj={};
    strs.forEach(str=>{
        const sortedStr=str.split('').sort().join('');
        if(obj[sortedStr]){
            obj[sortedStr].push(str);
        }else{
            obj[sortedStr]=[str];
        }
    })
    let result=[];
    for(o in obj){
        result.push(obj[o]);
    }
    return result;
};