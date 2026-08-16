/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let obj={};
    let i=0;
    let j=0;
    let max=0;
    while(j<s.length){
        if(obj[s[j]]==undefined){
            obj[s[j]]=1;
            j++;
        }else{
            max=Math.max(max,j-i);
            delete obj[s[i]];
            i++;
        }
    }
    max=Math.max(max,j-i);
    // console.log(max);
    return max;
}