/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)return false;
    let s=head;
    let f=head;
    while(f.next&&f.next.next){
        s=s.next;
        f=f.next.next;
        if(f.next==s.next&&f.val==s.val)return true;
    }
    return false;
};