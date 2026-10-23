/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let s="";
    let ans="";
    for(let i=0;i<str2.length;i++){
        s+=str2[i];
        let string="";
        while(string.length<str2.length){
            string+=s;
        }
        if(string==str2){
            string="";
            while(string.length<str1.length){
                string+=s;
            }
            if(string==str1){
                if(ans.length<s.length){
                    ans=s;
                }
            }
        }
    }
    return ans;
};