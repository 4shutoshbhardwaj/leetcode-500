/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    let m=grid.length;
    let n=grid[0].length;
    let MAX_XOR=1024;
    const memo=Array.from({length:m},()=>
        Array.from({length:n},()=>
            new Array(MAX_XOR).fill(-1)
        )
    );
    function func(i,j,val){
        if(i==m-1&&j==n-1){
            return val;
        }
        if(memo[i][j][val]!=-1){
            return memo[i][j][val];
        }
        let ans=Infinity;
        if(i<m-1){
            ans=Math.min(ans,func(i+1,j,val^grid[i+1][j]));
        }
        if(j<n-1){
            ans=Math.min(ans,func(i,j+1,val^grid[i][j+1]));
        }
        memo[i][j][val]=ans;
        return memo[i][j][val];
    }
    return func(0,0,grid[0][0]);
};