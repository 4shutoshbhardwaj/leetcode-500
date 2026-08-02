/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length==1)return s;
    str=s[0];
    max=0;
    for(var i=0;i<s.length;i++){
        for(var j=i+1;j<s.length;j++){
            if(s[i]==s[j]){
                var l=i;
                var r=j;
                var t=false;
                while(l<r){
                    if(s[l]==s[r]){
                        l++;
                        r--;
                    }else{
                        t=true;
                        break;
                    }
                }
                if(max<((j-i)+1)&&!t){
                    str=s.substring(i,j+1);
                    max=((j-i)+1);
                }
            }
        }
    }
    return str;
};