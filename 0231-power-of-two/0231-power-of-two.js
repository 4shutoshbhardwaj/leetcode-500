/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1)return true;
    let num=1;
    while(num<=n){
        num*=2;
        if(num==n)return true;
    }
    return false;
};