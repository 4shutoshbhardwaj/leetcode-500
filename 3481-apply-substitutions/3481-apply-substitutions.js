/**
 * @param {string[][]} replacements
 * @param {string} text
 * @return {string}
 */
var applySubstitutions = function(replacements, text) {
    let arr=text.split("_");
    let obj={};
    for(let i=0;i<replacements.length;i++){
        if(obj[replacements[i][0]]==undefined){
            obj[replacements[i][0]]=replacements[i][1];
        }
    }
    let str="";
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            str+=obj[arr[i][1]];
        }else{
            str+=obj[arr[i][1]]+"_";
        }
    }
    // console.log(str);
    while(true){
        let t=true;
        let i=1;
        while(i<str.length-1){
            if(str[i+1]=="%"&&str[i-1]=="%"){
                // console.log(i,str[i]);
                t=false;
                let str1=str.slice(0,i-1);
                let str2=str.slice(i+2);
                str=str1+obj[str[i]]+str2;
                i-=2;
            }
            i++;
        }
        if(t)break;
    }
    // console.log(obj,arr,str);
    return str;
};