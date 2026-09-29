/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max=-Infinity;
    function bfs(i,j){
        let q=[[i,j]];
        let z=0;
        count=1;
        grid[i][j]=0;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            // up row--;
            if(row>0&&grid[row-1][col]==1){
                grid[row-1][col]=0;
                q.push([row-1,col]);
                count++;
            }
            // down row++;
            if(row<grid.length-1&&grid[row+1][col]==1){
                grid[row+1][col]=0;
                q.push([row+1,col]);
                count++;
            }
            // left col--;
            if(col>0&&grid[row][col-1]==1){
                grid[row][col-1]=0;
                q.push([row,col-1]);
                count++;
            }
            // right col++;
            if(col<grid[0].length-1&&grid[row][col+1]==1){
                grid[row][col+1]=0;
                q.push([row,col+1]);
                count++;
            }
            z++;
        }
        max=Math.max(count,max);
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==1){
                bfs(i,j);
            }
        }
    }
    return max==-Infinity?0:max;
};