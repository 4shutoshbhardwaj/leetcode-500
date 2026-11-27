/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let enStr="";
    strs.map((str)=>{
        if(str==""){
            str="_";
        }
        if(enStr==""){
            enStr+=str;
        }else{
            enStr+=("++##"+str);
        }
    })
    return enStr;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let arr=s.split("++##");
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="_"){
            arr[i]="";
        }
    }
    return arr;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */