/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let arr=[];
    let max=0;
    for(let i=0;i<matrix.length;i++){
        arr.push([]);
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]=="1"){
                if(i==0){
                    arr[i][j]=1;
                }else{
                    arr[i][j]=arr[i-1][j]+1;
                }
            }else{
                arr[i][j]=0;
            }
        }
        let nums=[...arr[i]];
        let st=[];
        let lnse=[];
        for(let i=0;i<nums.length;i++){
            while(st.length>0&&nums[st[st.length-1]]>=nums[i]){
                st.pop();
            }
            if(st.length==0){
                lnse.push(-1);
            }else{
                lnse.push(st[st.length-1]);
            }
            st.push(i);
        }
        st=[];
        let rnse=[];
        for(let i=nums.length-1;i>=0;i--){
            while(st.length>0&&nums[st[st.length-1]]>=nums[i]){
                st.pop();
            }
            if(st.length==0){
                rnse[i]=nums.length;
            }else{
                rnse[i]=st[st.length-1];
            }
            st.push(i);
        }
        for(let i=0;i<nums.length;i++){
            let s=(rnse[i]-lnse[i]-1)*nums[i];
            max=Math.max(max,s);
        }
    }
    // console.log(max);
    return max;
};