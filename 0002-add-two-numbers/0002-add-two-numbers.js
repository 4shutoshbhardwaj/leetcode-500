/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let tp=new ListNode(0);
    let hold=tp;
    let q1=l1;
    let q2=l2;
    let carry=0;
    while(q1||q2){
        let sum=carry;
        if(q1)sum+=q1.val;
        if(q2)sum+=q2.val;
        let nn=new ListNode(sum%10);
        tp.next=nn;
        tp=tp.next;
        carry=Math.floor(sum/10);
        if(q1)q1=q1.next;
        if(q2)q2=q2.next;
    }
    if(carry>0){
        let nn=new ListNode(carry);
        tp.next=nn;
        tp=tp.next;
    }
    // console.log(hold.next);
    return hold.next;
};