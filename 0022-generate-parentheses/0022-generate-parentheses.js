/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr=[];
    let s="";
    function func(op,cl){
        if(op==n&&cl==n){
            arr.push(s);
            return;
        }
        if(op<n){
            s+="(";
            func(op+1,cl);
            s=s.substring(0,s.length-1);
        }
        if(op>cl){
            s+=")";
            func(op,cl+1);
            s=s.substring(0,s.length-1);
        }

    }
    func(0,0);
    // console.log(arr);
    return arr;
};