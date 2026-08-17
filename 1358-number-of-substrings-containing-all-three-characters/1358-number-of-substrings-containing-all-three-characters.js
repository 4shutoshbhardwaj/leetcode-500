/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let i=0;
    let j=0;
    let obj={};
    let ans=0;
    while(j<s.length+1){
        // console.log(obj,i,j,ans)
        if(obj["a"]&&obj["b"]&&obj["c"]){
            ans+=s.length-j+1;
            obj[s[i]]--;
            if(obj[s[i]]==0)delete obj[s[i]];
            i++;
        }else{
            if(obj[s[j]]==undefined){
                obj[s[j]]=1;
            }else{
                obj[s[j]]++;
            }
            j++;
        }
    }
    return ans;
};