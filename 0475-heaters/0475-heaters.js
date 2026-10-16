/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let res=[];
    heaters.sort((a,b)=>a-b);
    for(let k=0;k<houses.length;k++){
        let i=0;
        let j=heaters.length-1;
        let ans=[Infinity,Infinity];
        while(i<=j){
            let m=i+(Math.floor((j-i)/2));
            if(heaters[m]==houses[k]){
                ans[0]=0;
                ans[1]=0;
            }
            if(heaters[m]>houses[k]){
                ans[1]=Math.abs(heaters[m]-houses[k]);
                j=m-1;
            }else{
                ans[0]=Math.abs(heaters[m]-houses[k]);
                i=m+1;
            }
        }
        res.push(Math.min(ans[0],ans[1]));
    }
    // console.log(res);
    return Math.max(...res);
};