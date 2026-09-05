/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr=[];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            arr.push(grid[i][j]);
        }
    }
    for(let i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    let z=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            arr.push(grid[i][j]);
            grid[i][j]=arr[z];
            z++;
        }
    }
    return grid;
};