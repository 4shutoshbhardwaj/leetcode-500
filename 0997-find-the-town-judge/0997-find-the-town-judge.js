/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let arr=Array(n+1).fill(null).map(()=>[]);
    for(let i=0;i<trust.length;i++){
        arr[trust[i][0]].push(trust[i][1]);
    }
    let num=-1;
    for(let i=1;i<arr.length;i++){
        if(arr[i].length==0)num=i;
    }
    for(let i=1;i<arr.length;i++){
        if(i==num)continue;
        let t=false;
        for(let j=0;j<arr[i].length;j++){
            if(num==arr[i][j]){
                t=true;
            }
            // console.log(arr,i,j,num);
        }
        if(!t)return -1;
    }
    return num;
    // return -1;
};