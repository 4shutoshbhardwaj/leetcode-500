/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length!=word2.length)return false;
    let count1=0,obj1={},obj2={},count2=0;
    for(let i=0;i<word1.length;i++){
        if(obj1[word1[i]]==undefined){
            obj1[word1[i]]=1;
            count1++;
        }else{
            obj1[word1[i]]++;
        }
    }
    for(let i=0;i<word2.length;i++){
        if(!obj1[word2[i]])return false;
        if(obj2[word2[i]]==undefined){
            obj2[word2[i]]=1;
            count2++;
        }else{
            obj2[word2[i]]++;
        }
    }
    let ar1=[],ar2=[];
    for(let i in obj1){
        ar1.push(obj1[i]);
    }
    for(let i in obj2){
        ar2.push(obj2[i]);
    }
    ar1.sort((a,b)=>a-b);
    ar2.sort((a,b)=>a-b);
    for(let i=0;i<ar1.length;i++){
        if(ar1[i]!=ar2[i])return false;
    }
    // console.log(obj1,obj2,sum,count1,count2);
    // if(sum!=0)return false;
    return count1==count2;
};