/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited=Array(grid.length).fill(null).map(()=>Array(grid[0].length).fill(false));
    function func(i,j){
        visited[i][j]=true;
        let q=[[i,j]];
        let z=0;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            // up, i--;
            if(row>0&&grid[row-1][col]==1&&!visited[row-1][col]){
                visited[row-1][col]=true;
                q.push([row-1,col]);
            }
            // down, i++;
            if(row<grid.length-1&&grid[row+1][col]==1&&!visited[row+1][col]){
                visited[row+1][col]=true;
                q.push([row+1,col]);
            }
            // right, j++;
            if(col<grid[0].length-1&&grid[row][col+1]==1&&!visited[row][col+1]){
                visited[row][col+1]=true;
                q.push([row,col+1]);
            }
            // left, j--;
            if(col>0&&grid[row][col-1]==1&&!visited[row][col-1]){
                visited[row][col-1]=true;
                q.push([row,col-1]);
            }
            // // left-up, j--,i--;
            // if(col>0&&row>0&&grid[row-1][col-1]==1&&!visited[row-1][col-1]){
            //     visited[row-1][col-1]=true;
            //     q.push([row-1,col-1]);
            // }
            // // right-up, j++,i--;
            // if(col<grid[0].length-1&&row>0&&grid[row-1][col+1]==1&&!visited[row-1][col+1]){
            //     visited[row-1][col+1]=true;
            //     q.push([row-1,col+1]);
            // }
            // // right-down, j++,i++;
            // if(col<grid[0].length-1&&row<grid.length-1&&grid[row+1][col+1]==1&&!visited[row+1][col+1]){
            //     visited[row+1][col+1]=true;
            //     q.push([row+1,col+1]);
            // }
            // // left-down, j--,i++;
            // if(col>0&&row<grid.length-1&&grid[row+1][col-1]==1&&!visited[row+1][col-1]){
            //     visited[row+1][col-1]=true;
            //     q.push([row+1,col-1]);
            // }
            z++;
        }
    }
    let count=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1&&!visited[i][j]){
                count++;
                func(i,j);
            }
        }
    }
    return count;
};