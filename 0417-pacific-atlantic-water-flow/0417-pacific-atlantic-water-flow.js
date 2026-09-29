/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let cache=Array(heights.length).fill(null).map(()=>Array(heights[0].length).fill(null).map(()=>[-1,-1]));
    function bfs(i,j){
        let visited=Array(heights.length).fill(null).map(()=>Array(heights[0].length).fill(false));
        visited[i][j]=true;
        let q=[[i,j]];
        let z=0;
        let pacific=false;
        let atlantic=false;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            if(cache[row][col][0]==1&&cache[row][col][1]==1){
                pacific=true;
                atlantic=true;
            }
            if(cache[row][col][0]==0&&cache[row][col][1]==1){
                atlantic=true;
            }
            if(cache[row][col][0]==1&&cache[row][col][1]==0){
                pacific=true;
            }
            if(row==0||col==0){
                pacific=true;
            }
            if(row==heights.length-1||col==heights[0].length-1){
                atlantic=true;
            }
            if(pacific&&atlantic){
                cache[i][j]=[1,1];
                return;
            }
            // up row--;
            if(row>0&&heights[row-1][col]<=heights[row][col]&&visited[row-1][col]==false){
                visited[row-1][col]=true;
                q.push([row-1,col]);
            }
            // down row++;
            if(row<heights.length-1&&heights[row+1][col]<=heights[row][col]&&visited[row+1][col]==false){
                visited[row+1][col]=true;
                q.push([row+1,col]);
            }
            // left col--;
            if(col>0&&heights[row][col-1]<=heights[row][col]&&visited[row][col-1]==false){
                visited[row][col-1]=true;
                q.push([row,col-1]);
            }
            // right col++;
            if(col<heights[0].length-1&&heights[row][col+1]<=heights[row][col]&&visited[row][col+1]==false){
                visited[row][col+1]=true;
                q.push([row,col+1]);
            }
            z++;
        }
        if(pacific&&atlantic){
            cache[i][j]=[1,1];
            return;
        }
        if(atlantic){
            cache[i][j]=[0,1];
            return;
        }
        if(pacific){
            cache[i][j]=[1,0];
            return;
        }
    }
    for(let i=0;i<heights.length;i++){
        for(let j=0;j<heights[0].length;j++){
            if(cache[i][j][0]==-1&&cache[i][j][1]==-1){
                bfs(i,j);
            }
        }
    }
    let res=[];
    for(let i=0;i<heights.length;i++){
        for(let j=0;j<heights[0].length;j++){
            if(cache[i][j][0]==1&&cache[i][j][1]==1){
                res.push([i,j]);
            }
        }
    }
    // console.log(cache);
    return res;
};