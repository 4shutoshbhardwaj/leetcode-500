/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    let arr=[];
    for(let i=0;i<mat.length;i++){
        arr.push([...mat[i]]);
    }
    console.log(arr,mat);
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<k;j++){
            if(i%2==1){
                arr[i].push(arr[i].shift());
            }else{
                arr[i].unshift(arr[i].pop());
            }
        }
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]!=arr[i][j])return false;
        }
    }
    return true;
};