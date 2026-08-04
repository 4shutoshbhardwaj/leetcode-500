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
var oddEvenList = function(head) {
    if(!head)return null;
    let f=head;
    let s=head.next;
    let temps=s;
    let tempf=f;
    if(!s)return f;
    while(s&&f){
        f.next=s.next;
        if(!f.next)break;
        f=f.next;
        s.next=f.next;
        s=s.next;
        // console.log(s,f);
    }
    f.next=temps;
    // console.log(tempf,temps,f,s);
    return tempf;
};