/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var i=0;
    var j=matrix[i].length-1;
    while(i<matrix.length&&j>-1){
        console.log(i,j);
        if(matrix[i][j]==target)return true;
        else if(matrix[i][j]>target)j--;
        else i++;
    }
    return false;
};