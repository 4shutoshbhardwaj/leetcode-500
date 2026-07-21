/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows==1)return [[1]];
    var arr=[[1],[1,1]];
    for(var i=3;i<=numRows;i++){
        var lastArr=arr[arr.length-1];
        var tempArr=[1];
        for(var j=0;j<lastArr.length-1;j++){
            tempArr.push(lastArr[j]+lastArr[j+1]);
        }
        tempArr.push(1);
        arr.push(tempArr);
    }
    return arr;
};