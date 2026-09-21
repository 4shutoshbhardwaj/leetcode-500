/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let visited=Array(image.length).fill(null).map(()=>Array(image[0].length).fill(false));
    let q=[[sr,sc]];
    let i=0;
    let temp=image[sr][sc];
    image[sr][sc]=color;
    while(i<q.length){
        let row=q[i][0];
        let col=q[i][1];
        // up i--;
        if(row>0&&!visited[row-1][col]&&image[row-1][col]==temp){
            visited[row-1][col]=true;
            image[row-1][col]=color;
            q.push([row-1,col]);
        }
        // down i++;
        if(row<image.length-1&&!visited[row+1][col]&&image[row+1][col]==temp){
            visited[row+1][col]=true;
            image[row+1][col]=color;
            q.push([row+1,col]);
        }
        // left j--;
        if(col>0&&!visited[row][col-1]&&image[row][col-1]==temp){
            visited[row][col-1]=true;
            image[row][col-1]=color;
            q.push([row,col-1]);
        }
        // right j++;
        if(col<image[0].length-1&&!visited[row][col+1]&&image[row][col+1]==temp){
            visited[row][col+1]=true;
            image[row][col+1]=color;
            q.push([row,col+1]);
        }
        i++;
    }
    return image;
};