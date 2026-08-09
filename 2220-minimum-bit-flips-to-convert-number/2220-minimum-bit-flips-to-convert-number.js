/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let ans=start^goal;
    let count=0;
    for(let i=0;i<32;i++){
        if(ans&(1<<i)){
            count++;
        }
    }
    return count;
};