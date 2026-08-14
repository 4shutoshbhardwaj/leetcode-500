/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let mat=[];
    let k=0;
    for(let i=0;i<m;i++){
        mat.push([]);
        for(let j=0;j<n;j++){
            mat[i][j]=original[k];
            k++;
        }
    }
    console.log(k);
    if(k<original.length||k>original.length)return [];
    return mat;
};