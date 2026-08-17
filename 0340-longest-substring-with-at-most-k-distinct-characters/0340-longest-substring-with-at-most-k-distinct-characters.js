/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(k==0)return 0;
    let i=0;
    let j=0;
    let obj={};
    let max=0;
    while(j<s.length){
        if(obj[s[j]]==undefined&&Object.keys(obj).length<k){
            obj[s[j]]=1;
            j++;
        }else if(obj[s[j]]!=undefined&&Object.keys(obj).length<=k){
            obj[s[j]]++;
            j++;
        }else if(obj[s[j]]==undefined&&Object.keys(obj).length==k&&obj[s[i]]>1){
            max=Math.max(max,j-i);
            obj[s[i]]--;
            i++;
        }else if(obj[s[j]]==undefined&&Object.keys(obj).length==k&&obj[s[i]]==1){
            max=Math.max(max,j-i);
            delete obj[s[i]];
            i++;
        }
    }
    max=Math.max(max,j-i);
    return max;
};