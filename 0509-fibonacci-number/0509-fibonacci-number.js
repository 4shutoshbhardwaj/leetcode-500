/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr=Array(n+1).fill(-1);
    function fib(n){
        if(n==0)return 0;
        if(n==1)return 1;
        if(arr[n]!=-1)return arr[n];
        let a=fib(n-1);
        let b=fib(n-2);
        arr[n]=a+b;
        return arr[n];
    }
    return fib(n);
};