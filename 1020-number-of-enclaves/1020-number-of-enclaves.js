/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let visited=Array(grid.length).fill(null).map(()=>Array(grid[0].length).fill(false));
    let ans=0;
    function bfs(i,j){
        let q=[[i,j]];
        let z=0;
        visited[i][j]=true;
        let count=1;
        let touched=false;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            if(row==0||col==0||row==grid.length-1||col==grid[0].length-1){
                touched=true;
            }
            // up i--;
            if(row>0&&!visited[row-1][col]&&grid[row-1][col]==1){
                visited[row-1][col]=true;
                q.push([row-1,col]);
                count++;
            }
            // down i++;
            if(row<grid.length-1&&!visited[row+1][col]&&grid[row+1][col]==1){
                visited[row+1][col]=true;
                q.push([row+1,col]);
                count++;
            }
            // left j--;
            if(col>0&&!visited[row][col-1]&&grid[row][col-1]==1){
                visited[row][col-1]=true;
                q.push([row,col-1]);
                count++;
            }
            // right j++;
            if(col<grid[0].length-1&&!visited[row][col+1]&&grid[row][col+1]==1){
                visited[row][col+1]=true;
                q.push([row,col+1]);
                count++;
            }
            z++;
        }
        if(!touched){
            ans+=count;
        }
    }
    for(let i=1;i<grid.length-1;i++){
        for(let j=1;j<grid[0].length-1;j++){
            if(!visited[i][j]&&grid[i][j]==1){
                bfs(i,j);
            }
        }
    }
    return ans;
};