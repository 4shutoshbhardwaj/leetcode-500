/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a,b)=>a.length-b.length);
    let obj={};
    let maxCount=1;
    for(let i=0;i<words.length;i++){
        let word=words[i];
        obj[word]=1;
        for(let j=0;j<word.length;j++){
            let temp=word.slice(0,j)+word.slice(j+1);
            if(obj[temp]!=undefined){
                obj[word]=Math.max(obj[word],obj[temp]+1);
            }
        }
        maxCount=Math.max(maxCount,obj[word]);
    }
    // console.log(obj);
    return maxCount;
};
