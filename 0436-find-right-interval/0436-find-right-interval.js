/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let arr=[];
    for(let i=0;i<intervals.length;i++){
        arr.push([intervals[i][0],i]);
    }
    arr.sort((a,b)=>a[0]-b[0]);
    let res=[];
    for(let k=0;k<intervals.length;k++){
        let target=intervals[k][1];
        let i=0;
        let j=arr.length-1;
        let ans=-1;
        let t=false;
        while(i<=j){
            let m=i+Math.floor((j-i)/2);
            if(arr[m][0]==target){
                res.push(arr[m][1]);
                t=true;
                break;
            }
            if(arr[m][0]>=target){
                ans=arr[m][1];
                j=m-1;
            }else{
                i=m+1;
            }
        }
        if(!t){
            res.push(ans);
        }
    }
    return res;
};