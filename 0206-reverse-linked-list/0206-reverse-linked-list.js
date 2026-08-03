/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head||!head.next)return head;
    let f=head;
    let s=head.next;
    let t=s.next;
    f.next=null;
    s.next=f;
    f=s;
    s=t;
    if(!s)return f;
    // console.log(f,s,t);
    t=s.next;
    while(t){
        s.next=f;
        f=s;
        s=t;
        t=s.next;
    }
    s.next=f;
    // console.log(f,s,t);
    return s;
};