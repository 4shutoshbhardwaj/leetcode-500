/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let obj={};
    for(let i=0;i<allowed.length;i++){
        let s=allowed[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }
    }
    let count=0;
    for(let i=0;i<words.length;i++){
        let t=true;
        for(let j=0;j<words[i].length;j++){
            let s=words[i][j];
            if(!obj[s]){
                t=false;
                break;
            }
        }
        if(t){
            count++;
        }
    }
    // console.log(count);
    return count;
};