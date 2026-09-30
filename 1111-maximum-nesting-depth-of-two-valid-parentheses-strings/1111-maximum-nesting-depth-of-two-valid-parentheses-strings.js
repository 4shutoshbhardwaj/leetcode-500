/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let ans=[];
    let n=1;
    let prev="(";
    for(let i=0;i<seq.length;i++){
        if(seq[i]=="("&&prev=="("){
            n=Math.abs(n-1)
            ans.push(n);
            prev=seq[i];
        }else if(seq[i]==")"&&prev=="("){
            ans.push(n);
            prev=seq[i];
        }else if(seq[i]=="("&&prev==")"){
            ans.push(n);
            prev=seq[i];
        }else if(seq[i]==")"&&prev==")"){
            n=Math.abs(n-1)
            ans.push(n);
            prev=seq[i];
        }
    }
    // console.log(ans);
    return ans;
};