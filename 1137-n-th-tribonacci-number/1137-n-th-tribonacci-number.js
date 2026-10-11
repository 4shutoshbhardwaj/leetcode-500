/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr=Array(n+1).fill(-1);
    function tri(n){
        if(n==0)return 0;
        if(n==1)return 1;
        if(n==2)return 1;
        if(arr[n]!=-1)return arr[n];
        let a=tri(n-1);
        let b=tri(n-2);
        let c=tri(n-3);
        arr[n]=a+b+c;
        return arr[n];
    }
    return tri(n);
};