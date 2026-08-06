/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    let odd=Math.floor(n/2);
    let eve=n-odd;
    const MOD=1000000007n;
    function func(num,pow){
        pow=BigInt(pow);
        num=BigInt(num);
        let res=1n;
        while(pow>0n){
            if(pow%2n==1n){
                res=(res*num)%MOD;
            }
            num=(num*num)%MOD;
            // pow=Math.floor(pow/2);
            pow>>=1n;
        }
        return res;
    }
    return Number((func(4,odd)*func(5,eve))%MOD);
};