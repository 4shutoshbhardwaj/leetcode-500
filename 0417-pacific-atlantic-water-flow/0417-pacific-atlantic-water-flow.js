/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let visited=Array(heights.length).fill(null).map(()=>Array(heights[0].length).fill(null).map(()=>[-1,-1]));
    function bfs1(i,j){
        let q=[[i,j]];
        visited[i][j][0]=1;
        let z=0;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            if(row>0&&heights[row-1][col]>=heights[row][col]&&visited[row-1][col][0]==-1){
                visited[row-1][col][0]=1;
                q.push([row-1,col]);
            }
            if(row<heights.length-1&&heights[row+1][col]>=heights[row][col]&&visited[row+1][col][0]==-1){
                visited[row+1][col][0]=1;
                q.push([row+1,col]);
            }
            if(col>0&&heights[row][col-1]>=heights[row][col]&&visited[row][col-1][0]==-1){
                visited[row][col-1][0]=1;
                q.push([row,col-1]);
            }
            if(col<heights[0].length-1&&heights[row][col+1]>=heights[row][col]&&visited[row][col+1][0]==-1){
                visited[row][col+1][0]=1;
                q.push([row,col+1]);
            }
            z++;
        }
    }
    function bfs2(i,j){
        let q=[[i,j]];
        visited[i][j][1]=1;
        let z=0;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            if(row>0&&heights[row-1][col]>=heights[row][col]&&visited[row-1][col][1]==-1){
                visited[row-1][col][1]=1;
                q.push([row-1,col]);
            }
            if(row<heights.length-1&&heights[row+1][col]>=heights[row][col]&&visited[row+1][col][1]==-1){
                visited[row+1][col][1]=1;
                q.push([row+1,col]);
            }
            if(col>0&&heights[row][col-1]>=heights[row][col]&&visited[row][col-1][1]==-1){
                visited[row][col-1][1]=1;
                q.push([row,col-1]);
            }
            if(col<heights[0].length-1&&heights[row][col+1]>=heights[row][col]&&visited[row][col+1][1]==-1){
                visited[row][col+1][1]=1;
                q.push([row,col+1]);
            }
            z++;
        }
    }
    for(let i=0;i<heights.length;i++){
        if(visited[i][0][0]==-1){
            bfs1(i,0);
        }
    }
    for(let i=0;i<heights[0].length;i++){
        if(visited[0][i][0]==-1){
            bfs1(0,i);
        }
    }
    for(let i=0;i<heights.length;i++){
        if(visited[i][heights[0].length-1][1]==-1){
            bfs2(i,heights[0].length-1);
        }
    }
    for(let i=0;i<heights[0].length;i++){
        if(visited[heights.length-1][i][1]==-1){
            bfs2(heights.length-1,i);
        }
    }
    let res=[];
    for(let i=0;i<heights.length;i++){
        for(let j=0;j<heights[0].length;j++){
            if(visited[i][j][0]==1&&visited[i][j][1]==1){
                res.push([i,j]);
            }
        }
    }
    return res;
};