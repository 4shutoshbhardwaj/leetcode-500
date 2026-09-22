/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let arr=Array(board.length).fill(null).map(()=>Array(board[0].length).fill("X"));
    let visited=Array(board.length).fill(null).map(()=>Array(board[0].length).fill(false));
    let q=[];
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if((i==0||j==0||i==board.length-1||j==board[0].length-1)&&board[i][j]=="O"){
                q.push([i,j]);
            }
        }
    }
    let z=0;
    while(z<q.length){
        console.log(q);
        let row=q[z][0];
        let col=q[z][1];
        arr[row][col]="O";
        visited[row][col]=true;
        // up i--;
        if(row>0&&!visited[row-1][col]&&board[row-1][col]=="O"){
            visited[row-1][col]=true;
            arr[row-1][col]="O";
            q.push([row-1,col]);
        }
        // down i++;
        if(row<board.length-1&&!visited[row+1][col]&&board[row+1][col]=="O"){
            visited[row+1][col]=true;
            arr[row+1][col]="O";
            q.push([row+1,col]);
        }
        // left j--;
        if(col>0&&!visited[row][col-1]&&board[row][col-1]=="O"){
            visited[row][col-1]=true;
            arr[row][col-1]="O";
            q.push([row,col-1]);
        }
        // right j++;
        if(col<board[0].length-1&&!visited[row][col+1]&&board[row][col+1]=="O"){
            visited[row][col+1]=true;
            arr[row][col+1]="O";
            q.push([row,col+1]);
        }
        z++;
    }
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        board[i]=[...arr[i]];
    }
};