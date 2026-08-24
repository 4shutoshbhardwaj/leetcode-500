/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let half1=s.slice(0,Math.floor(s.length/2)).split("").sort().join("");
    let mid=s.length%2==1?s.slice(Math.floor(s.length/2),Math.floor(s.length/2)+1):"";
    return half1+mid+half1.split("").reverse().join("");
};