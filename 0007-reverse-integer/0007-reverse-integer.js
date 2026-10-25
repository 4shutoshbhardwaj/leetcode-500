/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s=x+"";
    let num=0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]=="-")continue;
        num+=s[i];
    }
    num=(+num);
    if(s[0]=="-")num=num-(num+num);
    if((num>2147483647)||(num<-2147483648))return 0;
    return num;
};