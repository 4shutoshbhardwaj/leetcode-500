/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let obj={};
    let allIncluded={};
    let ans="";
    for(let i=0;i<t.length;i++){
        if(obj[t[i]]==undefined){
            obj[t[i]]=1;
        }else{
            obj[t[i]]++;
        }
    }
    let flag=false;
    let i=0;
    let count=0;
    let min=Infinity;
    for(let j=0;j<s.length;j++){
        if(allIncluded[s[j]]==undefined){
            allIncluded[s[j]]=1;
        }else{
            allIncluded[s[j]]++;
        }
        if(obj[s[j]]&&allIncluded[s[j]]<=obj[s[j]]){
            count++;
        }
        while(count==t.length){
            if(j-i+1<min){
                min=j-i+1;
                ans=s.slice(i,j+1);
            }
            allIncluded[s[i]]--;
            if(obj[s[i]]&&allIncluded[s[i]]<obj[s[i]]){
                count--;
            }
            i++;
        }
    }
    return ans;
};