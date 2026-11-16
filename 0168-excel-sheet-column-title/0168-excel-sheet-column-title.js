/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans=[];
    while(columnNumber>0){
        let n=Math.floor((columnNumber-1)%26);
        ans.push(String.fromCharCode(65+n));
        columnNumber=Math.floor((columnNumber-1)/26);
    }
    return ans.reverse().join("");
};