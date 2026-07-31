/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // console.log(matrix.length);
    let index=-1;
    let i=0;
    let j=matrix.length-1;
    while(i<=j){
        let mid=Math.floor((j-i)/2)+i;
        // console.log(matrix[mid],mid);
        if(matrix[mid][0]==target)return true;
        if(matrix[mid][0]<=target){
            index=mid;
            i=mid+1;
        }else if(matrix[mid][0]>target){
            j=mid-1;
        }
    }
    // console.log(index);
    if(index==-1)return false;
    i=0;
    j=matrix[index].length-1;
    while(i<=j){
        let mid=Math.floor((j-i)/2)+i;
        if(matrix[index][mid]==target){
            return true;
        }
        if(matrix[index][mid]<target){
            i=mid+1;
        }else{
            j=mid-1;
        }
    }
    return false;
    // console.log(index);
};