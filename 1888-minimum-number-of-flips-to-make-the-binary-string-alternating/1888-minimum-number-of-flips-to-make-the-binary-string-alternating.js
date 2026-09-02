/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    let n=s.length;
    let str=s+s;
    let ans=n;
    let count1=0;
    let count2=0;
    for(let i=0;i<2*n;i++){
        let expected1=i%2==0?1:0;
        let expected2=i%2==0?0:1;
        if(str[i]!=expected1)count1++;
        if(str[i]!=expected2)count2++;
        if(i>=n){
            let j=i-n;
            let oldExpected1=j%2==0?1:0;
            let oldExpected2=j%2==0?0:1;
            if(str[j]!=oldExpected1)count1--;
            if(str[j]!=oldExpected2)count2--;
        }
        if(i>=n-1){
            ans=Math.min(count1,count2,ans);
        }
    }
    return ans;
};