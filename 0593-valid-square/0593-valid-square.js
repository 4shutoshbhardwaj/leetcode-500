/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    let arr=[p1,p2,p3,p4];
    let res=[];
    for(let i=0;i<4;i++){
        for(let j=i+1;j<4;j++){
            let s1=arr[i][0]-arr[j][0];
            let s2=arr[i][1]-arr[j][1];
            res.push(s1*s1+s2*s2);
        }
    }
    res.sort((a,b)=>a-b);
    return res[0]>0&&res[0]==res[1]&&res[1]==res[2]&&res[2]==res[3]&&res[4]==res[5]&&res[4]==2*res[0];
};