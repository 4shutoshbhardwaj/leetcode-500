/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD=1000000007n;
    function power(base,exp){
        let ans=1n;
        while(exp>0n){
            if(exp%2n==1n){
                ans=(ans*base)%MOD;
            }
            base=(base*base)%MOD;
            exp=exp/2n;
        }
        return ans;
    }
    n=BigInt(n);
    let even=(n+1n)/2n;
    let odd=n/2n;
    let evenWays=power(5n,even);
    let oddWays=power(4n,odd);
    return Number((evenWays*oddWays)%MOD);
};