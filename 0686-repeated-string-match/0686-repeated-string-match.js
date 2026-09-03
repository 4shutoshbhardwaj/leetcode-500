/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    if(a.indexOf(b)!=-1)return 1;
    let n=Math.ceil(b.length/a.length);
    let s="";
    let num=n;
    for(let i=0;i<num;i++){
        s+=a;
    }
    if(s.indexOf(b)!=-1)return n;
    s+=a;
    if(s.indexOf(b)!=-1)return n+1;
    return -1;
};