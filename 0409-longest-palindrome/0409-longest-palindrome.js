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
    for(let i in obj){
        if(obj[i]%2==1&&max<obj[i]){
            max=obj[i];
            char=i;
        }
    }
    let ans=0;
    for(let i in obj){
        if(obj[i]%2==0){
            ans+=obj[i];
        }else if(i!=char){
            ans+=obj[i]-1;
        }
    }
    return ans+max;
};