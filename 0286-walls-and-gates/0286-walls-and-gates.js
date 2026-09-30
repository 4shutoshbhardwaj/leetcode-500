/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    function bfs(){
        let q=[];
        for(let i=0;i<rooms.length;i++){
            for(let j=0;j<rooms[0].length;j++){
                if(rooms[i][j]==0){
                    q.push([i,j]);
                }
            }
        }
        let z=0;
        let count=1;
        let curLen=q.length;
        while(z<q.length){
            let row=q[z][0];
            let col=q[z][1];
            if(row>0&&rooms[row-1][col]>count){
                rooms[row-1][col]=count;
                q.push([row-1,col]);
            }
            if(row<rooms.length-1&&rooms[row+1][col]>count){
                rooms[row+1][col]=count;
                q.push([row+1,col]);
            }
            if(col>0&&rooms[row][col-1]>count){
                rooms[row][col-1]=count;
                q.push([row,col-1]);
            }
            if(col<rooms[0].length-1&&rooms[row][col+1]>count){
                rooms[row][col+1]=count;
                q.push([row,col+1]);
            }
            z++;
            if(curLen==z){
                curLen=q.length;
                count++;
            }
        }
    }
    bfs()
};