/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n=1;
    let arr=[];
    for(let i=0;i<Math.floor(s.length/2);i++){
        if(s.length%n==0){
            arr.push(n);
        }
        n++;
    }
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        let k=0;
        let str="";
        while(k<num){
            str+=s[k];
            k++;
        }
        let string=str;
        while(string.length<s.length){
            string+=str;
        }
        if(string==s)return true;
    }
    return false;
};