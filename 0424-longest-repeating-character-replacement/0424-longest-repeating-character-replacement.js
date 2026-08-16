/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let obj={};
    let max=0;
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1;
        }
    }
    for(let q in obj){
        let i=0;
        let j=0;
        let n=k;
        while(j<s.length){
            if(q!=s[j]&&n>0){
                n--;
                j++;
            }else if(q==s[j]){
                j++;
            }else if(q!=s[i]&&n==0){
                max=Math.max(max,j-i);
                i++;
                n++;
            }else if(q==s[i]&&n==0){
                max=Math.max(max,j-i);
                i++;
            }
        }
        max=Math.max(max,j-i);
    }
    // console.log(max);
    return max;
};