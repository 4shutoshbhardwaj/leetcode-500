/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let mod=1000000007;
    let ans=0;
    let pow=1;
    for(let i=1;i<=n;i++){
        if((i&(i-1))==0){
            pow*=2;
        }
        ans=(ans*pow+i)%mod;
    }
    return ans;
};