
var MyQueue = function() {
    this.arr=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let helper=[];
    if(this.arr.length>0){
        while(this.arr.length>0){
            helper.push(this.arr.pop());
        }
        this.arr.push(x);
        while(helper.length>0){
            this.arr.push(helper.pop());
        }
    }else{
        this.arr.push(x);
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr.length==0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */