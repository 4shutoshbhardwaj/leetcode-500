/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {

    let eve1=[];
    let eve2=[];
    let odd1=[];
    let odd2=[];

    for(let i=0;i<s1.length;i++){
        if(i%2==0){
            eve1.push(s1[i]);
            eve2.push(s2[i]);
        }else{
            odd1.push(s1[i]);
            odd2.push(s2[i]);
        }
    }
    return eve1.sort().join("")==eve2.sort().join("")&&odd1.sort().join("")==odd2.sort().join("");

    // s1.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    // s2.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    // // s2.sort();
    // let t=true;
    // for(let i=0;i<s1.length;i++){
    //     if(s1[i]!=s2[i])t=false;
    // }
    // return t;

    // let arr=s1.split("");
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if((j-i)%2==0&&(arr[i]==s2[j]||arr[j]==s2[i])){
    //             let temp=arr[i];
    //             arr[i]=arr[j];
    //             arr[j]=temp;
    //         }
    //     }
    //     let t=true;
    //     for(let j=0;j<arr.length;j++){
    //         if(s2[j]!=arr[j])t=false;
    //     }
    //     if(t)return true;
    // }
    // return false;

    // let flag=false;
    // function func(subArr,i){
    //     if(flag)return;
    //     if(i==subArr.length){
    //         let t=true;
    //         for(let j=0;j<subArr.length;j++){
    //             if(subArr[j]!=s2[j]){
    //                 t=false;
    //                 break;
    //             }
    //         }
    //         if(t)flag=true;
    //         return;
    //     }
    //     for(let j=i+1;j<subArr.length;j++){
    //         if((j-i)%2==0){
    //             let temp=subArr[i];
    //             subArr[i]=subArr[j];
    //             subArr[j]=temp;
    //             func(subArr,i+1);
    //             temp=subArr[i];
    //             subArr[i]=subArr[j];
    //             subArr[j]=temp;
    //         }
    //     }
    //     func(subArr,i+1);
    // }
    // func(s1.split(""),0);
    // return flag
};