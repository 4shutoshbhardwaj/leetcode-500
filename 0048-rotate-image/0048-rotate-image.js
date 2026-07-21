/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let arr=[];
    for(let i=0;i<matrix.length;i++){
        arr.push([]);
        for(let j=matrix.length-1;j>=0;j--){
            arr[i].push(matrix[j][i]);
        }
    }
    for(let i=0;i<arr.length;i++){
        matrix[i]=[...arr[i]];
    }
    // console.log(arr,matrix);
};