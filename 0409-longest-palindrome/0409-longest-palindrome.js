/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let obj={};
    let max=0;
    let char="";
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1;
        }else{
            obj[s[i]]++;
        }
    }
    let ans=0;
    let t=false;
    for(let i in obj){
        if(obj[i]%2==0){
            ans+=obj[i];
        }else{
            if(!t)t=!t;
            ans+=obj[i]-1;
        }
    }
    return t?ans+1:ans;
};