/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    let obj={
        1:[[0,-1],[0,1]],
        2:[[-1,0],[1,0]],
        3:[[0,-1],[1,0]],
        4:[[0,1],[1,0]],
        5:[[0,-1],[-1,0]],
        6:[[0,1],[-1,0]]
    };
    let m=grid.length;
    let n=grid[0].length;
    let visited=Array.from({length:m},()=>Array(n).fill(false));
    function dfs(i,j,pi,pj){
        if(i<0||i>=m||j<0||j>=n)return false;
        if(visited[i][j])return false;
        if(pi!=-1){
            let di=pi-i;
            let dj=pj-j;
            let connected=false;
            for(let d of obj[grid[i][j]]){
                if(d[0]==di&&d[1]==dj){
                    connected=true;
                    break;
                }
            }
            if(!connected)return false;
        }
        if(i==m-1&&j==n-1)return true;
        visited[i][j]=true;
        for(let d of obj[grid[i][j]]){
            let ni=i+d[0];
            let nj=j+d[1];
            if(dfs(ni,nj,i,j))return true;
        }
        return false;
    }
    return dfs(0,0,-1,-1);
};