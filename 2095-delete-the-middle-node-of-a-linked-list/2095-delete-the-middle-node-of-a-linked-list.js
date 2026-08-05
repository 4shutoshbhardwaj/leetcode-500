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
var deleteMiddle = function(head) {
    if(!head||!head.next)return null;
    let s=head;
    let f=head.next;
    while(f.next&&f.next.next){
        s=s.next;
        f=f.next.next;
    }
    console.log(s,f,head);
    s.next=s.next.next;
    console.log(s,f,head);
    return head;
};