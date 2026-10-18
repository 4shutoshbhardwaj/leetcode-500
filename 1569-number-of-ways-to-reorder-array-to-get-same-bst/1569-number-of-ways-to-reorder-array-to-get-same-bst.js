/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    let MOD = 1000000007;
    let BIGMOD = 1000000007n;
    let n = nums.length;
    let c = Array(n+1).fill(null).map(() => Array(n+1).fill(0));
    for(let i=0;i<=n;i++){
        c[i][0]=1;
        c[i][i]=1;
        for(let j=1;j<i;j++){
            c[i][j]=(c[i-1][j-1]+c[i-1][j])%MOD;
        }
    }
    function func(arr){
        if(arr.length<=2) return 1n;
        let root=arr[0];
        let left=[];
        let right=[];
        for(let i=1;i<arr.length;i++){
            if(arr[i]<root) left.push(arr[i]);
            else right.push(arr[i]);
        }
        let a=func(left);
        let b=func(right);
        let ways=BigInt(c[arr.length-1][left.length]);
        return (ways*a%BIGMOD)*b%BIGMOD;
    }
    return Number((func(nums)-1n+BIGMOD)%BIGMOD);
};