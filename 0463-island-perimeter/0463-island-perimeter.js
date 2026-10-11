/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let visited=Array(grid.length).fill(null).map(()=>Array(grid[0].length).fill(false));
    function bfs(i,j){
        let q=[[i,j]];
        let z=0;
        let count=0;
        visited[i][j]=true;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            if(row>0&&grid[row-1][col]==1&&!visited[row-1][col]){
                visited[row-1][col]=true;
                q.push([row-1,col]);
            }else if(row==0||grid[row-1][col]==0){
                count++;
            }
            if(row<grid.length-1&&grid[row+1][col]==1&&!visited[row+1][col]){
                visited[row+1][col]=true;
                q.push([row+1,col]);
            }else if(row==grid.length-1||grid[row+1][col]==0){
                count++;
            }
            if(col>0&&grid[row][col-1]==1&&!visited[row][col-1]){
                visited[row][col-1]=true;
                q.push([row,col-1]);
            }else if(col==0||grid[row][col-1]==0){
                count++;
            }
            if(col<grid[0].length-1&&grid[row][col+1]==1&&!visited[row][col+1]){
                visited[row][col+1]=true;
                q.push([row,col+1]);
            }else if(col==grid[0].length-1||grid[row][col+1]==0){
                count++;
            }
            z++;
            // console.log(count,row,col);
        }
        return count;
    }
    let sum=0;
    for(let i=0;i<visited.length;i++){
        for(let j=0;j<visited[0].length;j++){
            if(!visited[i][j]&&grid[i][j]==1){
                sum+=bfs(i,j);
            }
        }
    }
    return sum;
};