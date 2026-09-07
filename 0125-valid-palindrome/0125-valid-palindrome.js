/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    var ss="";
    for(var i=0;i<s.length;i++){
        if((s[i].charCodeAt()>96&&s[i].charCodeAt()<123)||(s[i].charCodeAt()>=48&&s[i].charCodeAt()<58)){
            ss+=s[i];
        }
    }
    var i=0;
    var j=ss.length-1;
    // console.log(ss);
    while(i<j){
        if(ss[i]!=ss[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};