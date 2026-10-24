/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let days=[31,28,31,30,31,30,31,31,30,31,30,31];
    function func(date){
        let arr=date.split("-").map(Number);
        let total=arr[1];
        for(let i=0;i<arr[0]-1;i++){
            total+=days[i];
        }
        return total;
    }
    let a=func(arriveAlice);
    let b=func(leaveAlice);
    let c=func(arriveBob);
    let d=func(leaveBob);
    let start=Math.max(a,c);
    let end=Math.min(b,d);
    return Math.max(0,end-start+1);
};