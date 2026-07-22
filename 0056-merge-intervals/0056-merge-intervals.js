/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result=[];
    intervals.sort((a,b)=>a[0]-b[0]);
    let temp=[[...intervals[0]]];
    for(let i=0;i<intervals.length;i++){
        if(temp[temp.length-1][1]>=intervals[i][0]&&temp[temp.length-1][1]>=intervals[i][1])continue;
        if(temp[temp.length-1][1]>=intervals[i][0]){
            temp[temp.length-1][1]=intervals[i][1];
        }else{
            temp.push([...intervals[i]]);
        }
    }
    // console.log(temp);
    return temp;
};