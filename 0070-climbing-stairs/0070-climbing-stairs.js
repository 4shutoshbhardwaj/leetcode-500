/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr=Array(n+1).fill(0);
    function func(n){
        if(n<0)return 0;
        if(n==0)return 1;
        if(arr[n]!=0)return arr[n];
        let a=func(n-1);
        let b=func(n-2);
        arr[n]=a+b;
        return a+b;
    }
    return func(n);
};