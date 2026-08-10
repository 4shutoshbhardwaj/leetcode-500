/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let obj={};
    for(let i=0;i<sentence.length;i++){
        let s=sentence[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }
    }
    let count=0;
    for(let i in obj){
        count++;
    }
    return count>=26?true:false;
};