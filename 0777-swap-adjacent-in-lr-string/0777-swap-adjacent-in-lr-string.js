/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function(start, result) {
    let n=start.length;
    let m=result.length;
    let i=0;
    let j=0;
    while(i<n||j<m){
        while(i<n&&start[i]=="X")i++;
        while(j<m&&result[j]=="X")j++;
        if(start[i]!=result[j])return false;
        if(start[i]=="R"&&j<i)return false;
        if(start[i]=="L"&&i<j)return false;
        i++;
        j++;
    }
    return true;
};