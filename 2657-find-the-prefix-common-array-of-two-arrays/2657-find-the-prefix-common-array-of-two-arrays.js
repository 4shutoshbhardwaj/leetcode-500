/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let obja={};
    let objb={};
    let common=0;
    let ans=[];
    for(let i=0;i<A.length;i++){
        if(obja[A[i]]==undefined){
            obja[A[i]]=1;
        }
        if(objb[B[i]]==undefined){
            objb[B[i]]=1;
        }
        if(obja[B[i]]){
            common++;
        }
        if(objb[A[i]]&&A[i]!=B[i]){
            common++;
        }
        ans.push(common);
    }
    // console.log(ans);
    return ans;
};