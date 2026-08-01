/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim(" ");
    let arr=s.split(" ");
    console.log(arr);
    let ss="";
    for(let i=arr.length-1;i>=0;i--){
        if(i!=0&&arr[i]!=""){
            ss+=arr[i]+" ";
        }else if(i==0&&arr[i]!=""){
            ss+=arr[i];
        }
    }
    return ss;
};