/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines=0;
    let sum=0;
    for(let i=0;i<s.length;i++){
        if(sum+widths[s.charCodeAt(i)-97]>100){
            lines++;
            sum=widths[s.charCodeAt(i)-97];
        }else{
            sum+=widths[s.charCodeAt(i)-97];
        }
    }
    return [lines+1,sum];
};