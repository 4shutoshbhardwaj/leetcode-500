/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i1=0;
    let i2=0;
    let s="";
    while(i1<word1.length&&i2<word2.length){
        s+=""+word1[i1];
        s+=""+word2[i2];
        i1++;
        i2++;
    }
    while(i1<word1.length){
        s+=""+word1[i1];
        i1++;
    }
    while(i2<word2.length){
        s+=""+word2[i2];
        i2++;
    }
    return s;
};