/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    let arr=Array(m).fill(null).map(()=>Array(n).fill("#"));
    let s=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(i==0||j==arr[0].length-1){
                arr[i][j]=".";
            }
        }
        s.push(arr[i].join(""));
    }
    return s;
};