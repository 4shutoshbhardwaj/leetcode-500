/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    let n=matrix.length;
    let m=matrix[0].length;
    let height=Array(m).fill(0);
    let max=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j]==1){
                height[j]++;
            }else{
                height[j]=0;
            }
        }
        let arr=[...height];
        arr.sort((a,b)=>b-a);
        for(let j=0;j<m;j++){
            max=Math.max(max,(j+1)*arr[j]);
        }
        // console.log(height,arr,max);
    }
    return max;
};