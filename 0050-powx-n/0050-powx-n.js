/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    function func(x,n){
        if(n==0){
            return 1;
        }
        if(n<0){
            return func(1/x,-n);
        }
        if(n%2==0){
            return func(x*x,Math.floor(n/2));
        }
        return x*func(x,n-1);
    }
    return func(x,n);


    
};