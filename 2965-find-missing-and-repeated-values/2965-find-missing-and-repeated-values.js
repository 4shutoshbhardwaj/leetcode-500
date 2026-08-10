/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let obj={};
    let ans1;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            let s=grid[i][j];
            if(obj[s]==undefined){
                obj[s]=1;
            }else{
                ans1=s;
            }
        }
    }
    let ans2;
    for(let i=1;i<=(grid.length*grid.length);i++){
        if(!obj[i]){
            ans2=i;
        }
    }
    return [ans1,ans2];
};