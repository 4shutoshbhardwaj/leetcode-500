/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=s.split(" ");
    for(let i=0;i<arr.length;i++){
        let q="";
        let k=arr[i].length-1;
        while(k>=0){
            q+=arr[i][k];
            k--;
        }
        arr[i]=q;
    }
    let ss="";
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            ss+=arr[i];
        }else{
            ss+=arr[i]+" ";
        }
    }
    // console.log(ss,arr);
    return ss;
};