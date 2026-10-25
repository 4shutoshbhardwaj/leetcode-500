/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let visited=Array(grid.length).fill(null).map(()=>Array(grid[0].length).fill(false));
    function func(i,j){
        let q=[[i,j]];
        let z=0;
        visited[i][j]=true;
        let closed=true;
        while(z<q.length){
            let [row,column]=q[z];
            if(row==0||row==grid.length-1||column==0||column==grid[0].length-1){
                closed=false;
            }
            // row-1, i--
            if(row>0&&grid[row-1][column]==0&&!visited[row-1][column]){
                visited[row-1][column]=true;
                q.push([row-1,column]);
            }
            // row+1, i++
            if(row<grid.length-1&&grid[row+1][column]==0&&!visited[row+1][column]){
                visited[row+1][column]=true;
                q.push([row+1,column]);
            }
            // column-1, j--
            if(column>0&&grid[row][column-1]==0&&!visited[row][column-1]){
                visited[row][column-1]=true;
                q.push([row,column-1]);
            }
            // column+1, j++
            if(column<grid[0].length-1&&grid[row][column+1]==0&&!visited[row][column+1]){
                visited[row][column+1]=true;
                q.push([row,column+1]);
            }
            z++;
        }
        return closed;
    }
    let count=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==0&&!visited[i][j]){
                let t=func(i,j);
                if(t)count++;
            }
        }
    }
    return count;
};