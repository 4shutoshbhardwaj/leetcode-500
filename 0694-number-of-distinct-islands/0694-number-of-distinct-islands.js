/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    let visited=Array(grid.length).fill(null).map(()=>Array(grid[0].length).fill(false));
    let count=0;
    let obj={};
    function bfs(i,j){
        visited[i][j]=true;
        let q=[[i,j]];
        let z=0;
        let str="0,0|";
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            // up i--;
            if(row>0&&grid[row-1][col]==1&&!visited[row-1][col]){
                visited[row-1][col]=true;
                q.push([row-1,col]);
                str+=(row-1-i)+","+(col-j)+"|";

            }
            // down i++;
            if(row<grid.length-1&&grid[row+1][col]==1&&!visited[row+1][col]){
                visited[row+1][col]=true;
                q.push([row+1,col]);
                str+=(row+1-i)+","+(col-j)+"|";
            }
            // left j--;
            if(col>0&&grid[row][col-1]==1&&!visited[row][col-1]){
                visited[row][col-1]=true;
                q.push([row,col-1]);
                str+=(row-i)+","+(col-1-j)+"|";
            }
            // right j++;
            if(col<grid[0].length-1&&grid[row][col+1]==1&&!visited[row][col+1]){
                visited[row][col+1]=true;
                q.push([row,col+1]);
                str+=(row-i)+","+(col+1-j)+"|";
            }
            z++;
        }
        if(obj[str]==undefined){
            obj[str]=1;
            count++;
        }
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==1&&!visited[i][j]){
                bfs(i,j);
            }
        }
    }
    // console.log(obj);
    return count;
};