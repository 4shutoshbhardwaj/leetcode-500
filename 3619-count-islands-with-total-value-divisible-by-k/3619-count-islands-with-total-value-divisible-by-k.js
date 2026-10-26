/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    let visited=Array(grid.length).fill(null).map(()=>Array(grid[0].length).fill(false));
    function func(i,j){
        let q=[[i,j]];
        let z=0;
        visited[i][j]=true;
        let count=grid[i][j];
        while(z<q.length){
            let [row,column]=q[z];
            // row-1, i--
            if(row>0&&grid[row-1][column]!=0&&!visited[row-1][column]){
                visited[row-1][column]=true;
                count+=grid[row-1][column];
                q.push([row-1,column]);
            }
            // row+1, i++
            if(row<grid.length-1&&grid[row+1][column]!=0&&!visited[row+1][column]){
                visited[row+1][column]=true;
                count+=grid[row+1][column];
                q.push([row+1,column]);
            }
            // column-1, j--
            if(column>0&&grid[row][column-1]!=0&&!visited[row][column-1]){
                visited[row][column-1]=true;
                count+=grid[row][column-1];
                q.push([row,column-1]);
            }
            // column+1, j++
            if(column<grid[0].length-1&&grid[row][column+1]!=0&&!visited[row][column+1]){
                visited[row][column+1]=true;
                count+=grid[row][column+1];
                q.push([row,column+1]);
            }
            z++;
        }
        return count;
    }
    let count=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]!=0&&!visited[i][j]){
                let val=func(i,j);
                if(val%k==0){
                    count++;
                }
            }
        }
    }
    return count;
};