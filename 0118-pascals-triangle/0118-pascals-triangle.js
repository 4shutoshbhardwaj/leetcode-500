/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result=[[1],[1,1]];
    if(numRows==1)return [[1]];
    if(numRows==2)return result;
    numRows=numRows-2;
    while(numRows>0){
        let arr=[1];
        for(let i=0;i<result[result.length-2].length;i++){
            arr.push(result[result.length-1][i]+result[result.length-1][i+1]);
        }
        arr.push(1);
        result.push([...arr]);
        numRows--;
    }
    return result;
};