/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let lg=[-1];
    let rg=[-1];
    let max=-1;
    for(let i=1;i<height.length;i++){
        max=Math.max(max,height[i-1]);
        lg.push(max);
    }
    max=-1;
    for(let i=height.length-2;i>=0;i--){
        max=Math.max(max,height[i+1]);
        rg.unshift(max);
    }
    let ans=0;
    for(let i=0;i<height.length;i++){
        if(lg[i]>height[i]&&rg[i]>height[i]){
            ans+=(Math.min(lg[i],rg[i])-height[i]);
        }
    }
    // console.log(ans);
    return ans;
};