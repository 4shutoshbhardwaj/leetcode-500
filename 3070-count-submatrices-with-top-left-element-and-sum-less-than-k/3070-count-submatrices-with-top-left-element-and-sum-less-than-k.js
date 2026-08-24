/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
    let mat=[];
    for(let i=0;i<grid.length;i++){
        mat.push([]);
        for(let j=0;j<grid[i].length;j++){
            if(j==0&&i==0){
                mat[i][j]=grid[i][j];
            }else if(j==0&&i>0){
                mat[i][j]=mat[i-1][j]+grid[i][j];
            }else if(j>0&&i==0){
                mat[i][j]=mat[i][j-1]+grid[i][j];
            }else if(j>0&&i>0){
                mat[i][j]=mat[i-1][j-1]+(mat[i-1][j]-mat[i-1][j-1])+(mat[i][j-1]-mat[i-1][j-1])+grid[i][j];
            }
        }
    }
    let count=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(mat[i][j]<=k)count++;
        }
    }
    // console.log(count);
    return count;
};