/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let half1=s.slice(0,Math.floor(s.length/2)).split("").sort().join("");
    let mid=s.length%2==1?s.slice(Math.floor(s.length/2),Math.floor(s.length/2)+1):"";
    // let half2=s.slice(s.length%2==0?Math.floor(s.length/2):Math.floor(s.length/2)+1);
    // let str1=half1.split("").sort().join("");
    // let str2=half2.split("").reverse().sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0)).join("");
    // console.log(str1,mid,str2);
    return half1+mid+half1.split("").reverse().join("");
};