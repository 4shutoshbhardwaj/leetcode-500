/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let arr=[];
    for(let i=0;i<mat.length;i++){
        arr.push([]);
        for(let j=0;j<mat[i].length;j++){
            let sum=0;
            for(let x=(i-k<0?0:i-k);x<=(i+k>mat.length-1?mat.length-1:i+k);x++){
                for(let y=(j-k<0?0:j-k);y<=(j+k>mat[0].length-1?mat[0].length-1:j+k);y++){
                    sum+=mat[x][y];
                }
            }
            arr[i][j]=sum;
        }
    }
    return arr;
};