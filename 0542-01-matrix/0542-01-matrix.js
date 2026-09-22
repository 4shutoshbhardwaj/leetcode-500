/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let arr=Array(mat.length).fill(null).map(()=>Array(mat[0].length).fill(0));
    let visited=Array(mat.length).fill(null).map(()=>Array(mat[0].length).fill(false));
    let q=[];
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]==0){
                q.push([i,j]);
            }
        }
    }
    let z=0;
    while(z<q.length){
        let row=q[z][0];
        let col=q[z][1];
        // up i--;
        if(row>0&&mat[row-1][col]==1&&!visited[row-1][col]){
            visited[row-1][col]=true;
            arr[row-1][col]=arr[row][col]+1;
            q.push([row-1,col]);
        }
        // down i++;
        if(row<mat.length-1&&mat[row+1][col]==1&&!visited[row+1][col]){
            visited[row+1][col]=true;
            arr[row+1][col]=arr[row][col]+1;
            q.push([row+1,col]);
        }
        // left j--;
        if(col>0&&mat[row][col-1]==1&&!visited[row][col-1]){
            visited[row][col-1]=true;
            arr[row][col-1]=arr[row][col]+1;
            q.push([row,col-1]);
        }
        // right j++;
        if(col<mat[0].length-1&&mat[row][col+1]==1&&!visited[row][col+1]){
            visited[row][col+1]=true;
            arr[row][col+1]=arr[row][col]+1;
            q.push([row,col+1]);
        }
        z++;
    }
    return arr;
};