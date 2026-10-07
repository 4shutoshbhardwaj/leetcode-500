/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let string="";
    for(let i=0;i<s.length;i++){
        let k=0,str="";
        while(k<s.length){
            if(k<i){
                str+=s[k];
                k++;
                if(k==i){
                    let t=true;
                    for(let i=0;i<str.length;i++){
                        if(str.indexOf(str[i].toLowerCase())==-1||str.indexOf(str[i].toUpperCase())==-1){
                            t=false;
                        }
                    }
                    if(t){
                        string.length<str.length?string=str:string=string;
                    }
                }
                continue;
            }
            str+=s[k];
            k++;
            let t=true;
            for(let i=0;i<str.length;i++){
                if(str.indexOf(str[i].toLowerCase())==-1||str.indexOf(str[i].toUpperCase())==-1){
                    t=false;
                }
            }
            if(t){
                string.length<str.length?string=str:string=string;
            }
            str=str.slice(1);
        }
    }
    return string;
};