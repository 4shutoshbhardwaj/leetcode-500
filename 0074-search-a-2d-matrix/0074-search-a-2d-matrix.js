/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i=0;
    let j=matrix.length-1;
    let num=-1;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        if(matrix[m][matrix[0].length-1]==target){
            return true;
        }
        if(matrix[m][matrix[0].length-1]>target){
            j=m-1;
            num=m;
        }else if(matrix[m][matrix[0].length-1]<target){
            i=m+1;
        }
    }
    // console.log(matrix[num]);
    if(num==-1)return false;
    i=0;
    j=matrix[num].length-1;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        if(matrix[num][m]==target){
            return true;
        }
        if(matrix[num][m]>target){
            j=m-1;
        }else if(matrix[num][m]<target){
            i=m+1;
        }
    }
    return false;
};