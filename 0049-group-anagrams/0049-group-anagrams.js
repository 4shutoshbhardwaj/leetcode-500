/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj={};
    strs.map((str)=>{
        let sortedStr=str.split("").sort().join("");
        if(obj[sortedStr]){
            obj[sortedStr].push(str);
        }else{
            obj[sortedStr]=[str];
        }
    })
    // console.log(obj);
    let arr=[];
    for(let i in obj){
        arr.push(obj[i]);
    }
    return arr;
};