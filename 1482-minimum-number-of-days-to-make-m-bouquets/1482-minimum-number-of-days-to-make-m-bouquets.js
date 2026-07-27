/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let i=Math.min(...bloomDay);
    let j=Math.max(...bloomDay);
    if(bloomDay.length<(m*k))return -1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        let bloomed=0;
        // console.log(mid);
        let bouquets=0;
        for(let q=0;q<bloomDay.length;q++){
            if(mid>=bloomDay[q]){
                bloomed+=1;
                if(bloomed==k){
                    bouquets++;
                    bloomed=0;
                }
            }else{
                bloomed=0;
            }
        }
        if(bouquets<m){
            i=mid+1;
        }else{
            j=mid-1;
        }
    }
    return i;
};