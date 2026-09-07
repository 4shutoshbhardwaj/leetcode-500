/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    let m=grid.length;
    let n=grid[0].length;
    let visited=Array.from({length:m},()=>Array(n).fill(false));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(!visited[i][j]){
                if(func(i,j,-1,-1))return true;
            }
        }
    }
    function func(i,j,pi,pj){
        visited[i][j]=true;
        let dir=[[0,1],[0,-1],[1,0],[-1,0]];
        for(let d of dir){
            let ni=i+d[0];
            let nj=j+d[1];
            if(ni<0||ni>=m||nj<0||nj>=n)continue;
            if(grid[i][j]!=grid[ni][nj])continue;
            if(!visited[ni][nj]){
                if(func(ni,nj,i,j))return true;
            }else{
                if(ni!=pi&&nj!=pj)return true;
            }
        }
    }
    return false;
};