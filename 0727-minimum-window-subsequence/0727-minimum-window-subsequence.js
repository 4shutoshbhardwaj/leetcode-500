/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function(s, t) {
    let ans="";
    let min=Infinity;
    for(let i=0;i<s.length;i++){
        if(s[i]!=t[t.length-1]){
            continue;
        }
        let k=t.length-1;
        for(let j=i;j>=0;j--){
            // console.log(i,j,k,s[j]);
            if(s[j]==t[k]){
                k--;
            }
            if(k==-1&&min>i-j){
                min=i-j;
                ans=s.slice(j,i+1);
            }
        }
    }
    // console.log(ans);
    return ans;
};