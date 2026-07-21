/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let arr=[];
    for(let i=0;i<matrix.length;i++){
        arr.push([...matrix[i]]);
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(arr[i][j]==0){
                console.log(arr[i][j]);
                let y=0;
                let z=0;
                while(z<matrix[i].length){
                    matrix[i][z]=0;
                    z++;
                }
                while(y<matrix.length){
                    matrix[y][j]=0;
                    y++;
                }
            }
        }
    }
    // console.log(arr,matrix);
};