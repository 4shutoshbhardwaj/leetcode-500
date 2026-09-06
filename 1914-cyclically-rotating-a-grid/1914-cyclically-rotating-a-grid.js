/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, z) {
    let i=0;
    let k=grid.length-1;
    let j=0;
    let l=grid[0].length-1;
    let layers=grid.length<grid[0].length?grid.length:grid[0].length;
    let arr=[];
    for(let q=0;q<layers/2;q++){
        arr.push([]);
        for(let w=j;w<l;w++){
            arr[q].push(grid[i][w]);
        }
        for(let e=i;e<k;e++){
            arr[q].push(grid[e][l]);
        }
        for(let r=l;r>j;r--){
            arr[q].push(grid[k][r]);
        }
        for(let t=k;t>i;t--){
            arr[q].push(grid[t][j]);
        }
        i++;
        j++;
        k--;
        l--;
    }
    for(let i=0;i<arr.length;i++){
        let ar1=arr[i];
        let n=z%ar1.length;
        let l=0;
        let r=n-1;
        while(l<r){
            let temp=ar1[l];
            ar1[l]=ar1[r];
            ar1[r]=temp;
            l++;
            r--;
        }
        l=n;
        r=ar1.length-1;
        while(l<r){
            let temp=ar1[l];
            ar1[l]=ar1[r];
            ar1[r]=temp;
            l++;
            r--;
        }
        // console.log(arr);
    }
    i=0;
    k=grid.length-1;
    j=0;
    l=grid[0].length-1;
    layers=grid.length<grid[0].length?grid.length:grid[0].length;
    for(let q=0;q<layers/2;q++){
        for(let w=j;w<l;w++){
            grid[i][w]=arr[q].pop();
        }
        for(let e=i;e<k;e++){
            grid[e][l]=arr[q].pop();
        }
        for(let r=l;r>j;r--){
            grid[k][r]=arr[q].pop();
        }
        for(let t=k;t>i;t--){
            grid[t][j]=arr[q].pop();
        }
        i++;
        j++;
        k--;
        l--;
    }
    // console.log(grid);
    return grid;
};