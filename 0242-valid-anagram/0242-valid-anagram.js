/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj={};
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1;
        }else{
            obj[s[i]]++;
        }
    }
    for(let i=0;i<t.length;i++){
        if(obj[t[i]]<0||obj[t[i]]==undefined){
            return false;
        }else{
            obj[t[i]]--;
        }
    }
    for(let i in obj){
        if(!obj[i]==0){
            return false;
        }
    }
    return true;
};