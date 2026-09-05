/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let arr=[];
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            arr.push(mat[i][j]);
        }
    }
    if(r*c!=arr.length)return mat;
    let ar1=[];
    let z=0;
    for(let i=0;i<r;i++){
        ar1.push([]);
        for(let j=0;j<c;j++){
            ar1[i].push(arr[z]);
            z++;
        }
    }
    return ar1;
};