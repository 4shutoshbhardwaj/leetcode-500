/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let i=1;
    let j=Math.max(...piles);
    let ans=-1;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        let hour=0;
        for(let k=0;k<piles.length;k++){
            hour+=Math.ceil(piles[k]/m);
        }
        if(hour<=h){
            j=m-1;
            ans=m;
        }else if(hour>h){
            i=m+1;
        }
    }
    return ans;
};