/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    for(let i=x;i<x+k/2;i++){
        for(let j=y;j<y+k;j++){
            let temp=grid[i][j];
            grid[i][j]=grid[x+k-1-(i-x)][j];
            grid[x+k-1-(i-x)][j]=temp;
        }
    }
    return grid;
};