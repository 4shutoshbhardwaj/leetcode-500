/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
    let arr=[];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            arr.push(grid[i][j]);
            let maxK=Math.min(Math.floor((grid.length-1-i)/2),j,grid[0].length-1-j);
            for(let k=1;k<=maxK;k++){
                let sum=0;
                for(let x=0;x<=k;x++){
                    sum+=grid[i+x][j-x];
                }
                for(let x=1;x<=k;x++){
                    sum+=grid[i+x][j+x];
                }
                for(let x=1;x<=k;x++){
                    sum+=grid[i+k+x][j-k+x];
                }
                for(let x=1;x<k;x++){
                    sum+=grid[i+k+x][j+k-x];
                }
                arr.push(sum);
            }
        }
    }
    arr=[...new Set(arr)];
    arr.sort((a,b)=>b-a);
    return arr.slice(0,3);
};