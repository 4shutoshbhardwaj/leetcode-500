/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let obj={
        "a":1,
        "A":1,
        "e":1,
        "E":1,
        "i":1,
        "I":1,
        "o":1,
        "O":1,
        "u":1,
        "U":1
    }
    let i=0;
    let j=s.length-1;
    let ss=s.split("");
    while(i<j){
        if(obj[ss[i]]==undefined){
            i++;
        }
        if(obj[ss[j]]==undefined){
            j--;
        }
        if(obj[ss[i]]!=undefined&&obj[ss[j]]!=undefined){
            let temp=ss[i];
            ss[i]=ss[j];
            ss[j]=temp;
            i++;
            j--;
        }
    }
    ss=ss.join("");
    return ss;
};