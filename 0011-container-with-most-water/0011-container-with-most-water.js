/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l=0;
    var r=height.length-1;
    var maxWater=0;
    while(l<r){
        var width=r-l;
        var minHeight=Math.min(height[l],height[r]);
        var maxUpcommingWater=width*minHeight;
        maxWater=Math.max(maxWater,maxUpcommingWater);
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return maxWater;
};