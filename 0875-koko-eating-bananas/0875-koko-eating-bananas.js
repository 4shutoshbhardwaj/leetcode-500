/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let i=1;
    let j=Math.max(...piles);
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        let hours=0;
        for(let q=0;q<piles.length;q++){
            hours+=Math.ceil(piles[q]/mid);
        }
        if(hours<=h){
            j=mid-1;
        }else{
            i=mid+1;
        }
    }
    return i;
};