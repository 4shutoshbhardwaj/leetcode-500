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
    function dfs(i,j){
        if(i==m-1&&j==n-1)return true;
        visited[i][j]=true;
        for(let q=0;q<obj[grid[i][j]].length;q++){
            let dir=obj[grid[i][j]][q];
            console.log(dir);
            let ni=i+dir[0];
            let nj=j+dir[1];
            if(ni<0||ni>=m||nj<0||nj>=n||visited[ni][nj])continue;
            for(let w=0;w<obj[grid[ni][nj]].length;w++){
                let backdir=obj[grid[ni][nj]][w];
                if(ni+backdir[0]==i&&nj+backdir[1]==j){
                    if(dfs(ni,nj))return true;
                }
            }
        }
        return false;
    }
    return dfs(0,0);
};