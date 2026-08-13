
var StockSpanner = function() {
    this.arr=[];
    this.st=[];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let sum=0;
    while(this.st.length>0&&this.st[this.st.length-1][0]<=price){
        sum+=this.st[this.st.length-1][1];
        this.st.pop();
    }
    this.st.push([price,sum+1]);
    return sum+1;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */