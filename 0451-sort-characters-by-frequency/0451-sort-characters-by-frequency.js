/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj={};
    for(let i=0;i<s.length;i++){
        let q=s[i];
        if(obj[q]==undefined){
            obj[q]=1;
        }else{
            obj[q]++;
        }
    }
    let arr=[];
    for(let q in obj){
        arr.push([q,obj[q]]);
    }
    arr.sort((a,b)=>b[1]-a[1]);
    // console.log(arr);
    let ss="";
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i][1];j++){
            ss+=arr[i][0];
        }
    }
    return ss;
};