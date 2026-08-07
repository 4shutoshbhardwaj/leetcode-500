/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let obj={
        2:"abc",
        3:"def",
        4:"ghi",
        5:"jkl",
        6:"nmo",
        7:"pqrs",
        8:"tuv",
        9:"wxyz"
    }
    let arr=[];
    function func(i,s){
        if(s.length==digits.length){
            arr.push(s);
        }
        if(i>=digits.length)return;
        let char=digits[i];
        let options=obj[char].split("");
        for(let j=0;j<options.length;j++){
            s+=options[j];
            func(i+1,s);
            s=s.substring(0,s.length-1);
        }
    }
    func(0,"");
    return arr;
};