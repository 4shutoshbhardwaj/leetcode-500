/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    let i=0;
    let j=mat[0].length-1;
    while(i<=j){
        let mid=Math.floor((j-i)/2)+i;
        let max=-Infinity;
        let maxi=-1;
        for(let s=0;s<mat.length;s++){
            if(mat[s][mid]>max){
                max=mat[s][mid];
                maxi=s;
            }
        }
        if((mid==0||mat[maxi][mid-1]<max)&&(mid==mat[0].length-1||mat[maxi][mid+1]<max)){
            return [maxi,mid]
        }
        if(mid==0||mat[maxi][mid-1]>max){
            j=mid-1;
        }else{
            i=mid+1;
        }
    }
};