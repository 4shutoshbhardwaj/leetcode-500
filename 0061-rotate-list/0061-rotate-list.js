/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head||!head.next||k==0)return head;
    var c=0;
    var hh=head;
    while(hh.next){
        hh=hh.next;
        c++;
    }
    c++;
    if(k==c)return head;
    if(k>c)k=Math.floor(k%c);
    if(k==0)return head;
    var h=head;
    while(c-1>k){
        h=h.next;
        c--;
    }
    var n=h.next;
    h.next=null;
    hh.next=head;
    return n;
};