/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function(grid, k) {
    let n=grid.length;
    let m=grid[0].length;
    let ans=[];
    for(let i=0;i<=n-k;i++){
        let row=[];
        for(let j=0;j<=m-k;j++){
            let arr=[];
            for(let x=i;x<i+k;x++){
                for(let y=j;y<j+k;y++){
                    arr.push(grid[x][y]);
                }
            }
            arr.sort((a,b)=>a-b);
            let minAns=Infinity;
            for(let q=0;q<arr.length-1;q++){
                if(arr[q]!=arr[q+1]){
                    minAns=Math.min(minAns,Math.abs(arr[q]-arr[q+1]));
                }
            }
            if(minAns==Infinity)minAns=0;
            row.push(minAns);
        }
        ans.push(row);
    }
    return ans;
};