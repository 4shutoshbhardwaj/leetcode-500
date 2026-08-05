/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next&&n==1)return null;
    let count=0;
    let h=head;
    while(h){
        count++;
        h=h.next;
    }
    if(count==n)return head.next;
    h=head;
    let subCount=1;
    // console.log(count,h);
    while(h){
        if(count-subCount==n){
            h.next=h.next.next;
        }
        h=h.next;
        subCount++;
    }
    // console.log(head);
    return head;
};