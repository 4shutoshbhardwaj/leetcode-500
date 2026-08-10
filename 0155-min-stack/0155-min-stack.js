var MinStack = function() {
    this.arr=[];
    this.min=[];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    if(this.min.length==0){
        this.min.push(x);
    }else{
        this.min.push(Math.min(x,this.min[this.min.length-1]));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};