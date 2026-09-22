/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q=[];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==2){
                q.push([i,j]);
            }
        }
    }
    let z=0;
    let count=0;
    let temp=q.length;
    while(z<q.length){
        let row=q[z][0];
        let col=q[z][1];
        // up i--;
        if(row>0&&grid[row-1][col]==1){
            grid[row-1][col]=2;
            q.push([row-1,col]);
        }
        // down i++;
        if(row<grid.length-1&&grid[row+1][col]==1){
            grid[row+1][col]=2;
            q.push([row+1,col]);
        }
        // left j--;
        if(col>0&&grid[row][col-1]==1){
            grid[row][col-1]=2;
            q.push([row,col-1]);
        }
        // right j++;
        if(col<grid[0].length-1&&grid[row][col+1]==1){
            grid[row][col+1]=2;
            q.push([row,col+1]);
        }
        z++;
        if(z==temp){
            count++;
            temp=q.length;
        }
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==1){
                return -1;
            }
        }
    }
    // console.log(temp,count,grid);
    return count==0?count:count-1;
};