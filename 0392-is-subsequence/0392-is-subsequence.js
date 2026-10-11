/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let arr=Array(s.length).fill(null).map(()=>Array(t.length).fill(-1));
    function func(i,j){
        if(i==s.length)return true;
        if(j==t.length)return false;
        if(arr[i][j]!=-1)return arr[i][j];
        let a=false;
        let b=false;
        if(s[i]==t[j]){
            a=func(i+1,j+1);
        }else{
            b=func(i,j+1);
        }
        arr[i][j]=a||b;
        return a||b;
    }
    return func(0,0);
};