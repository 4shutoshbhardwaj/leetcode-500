/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i=0;
    let j=s.length-1;
    let count=0;
    while(i<j){
        if(s[i]==s[j]){
            i++;
            j--;
        }else{
            count++;
            break;
        }
    }
    if(i>=j)return true;
    let a=i+1;
    let b=j;
    while(a<b){
        if(s[a]==s[b]){
            a++;
            b--;
        }else{
            break;
        }
    }
    if(a>=b)return true;
    a=i;
    b=j-1;
    while(a<b){
        if(s[a]==s[b]){
            a++;
            b--;
        }else{
            break;
        }
    }
    if(a>=b)return true;
    return false;
};