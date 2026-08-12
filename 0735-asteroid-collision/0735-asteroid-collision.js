/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(nums) {
    let st=[];
    for(let i=0;i<nums.length;i++){
        // console.log(st);
        if(st.length>0&&st[st.length-1]<0&&nums[i]<0){
            st.push(nums[i]);
            continue;
        }
        if(st.length>0&&st[st.length-1]>0&&nums[i]>0){
            st.push(nums[i]);
            continue;
        }
        while(st.length>0&&st[st.length-1]>0&&nums[i]<0&&Math.abs(st[st.length-1])<Math.abs(nums[i])){
            st.pop();
        }
        // while(st.length>0&&st[st.length-1]<0&&nums[i]>0&&Math.abs(st[st.length-1])<Math.abs(nums[i])){
        //     st.pop();
        // }
        if(st.length>0&&st[st.length-1]>0&&nums[i]<0&&Math.abs(st[st.length-1])==Math.abs(nums[i])){
            st.pop();
            continue;
        }
        if(st[st.length-1]>0&&nums[i]<0&&st[st.length-1]>nums[i]){
            continue;
        }
        st.push(nums[i]);
    }
    // console.log(st);
    return st;
};