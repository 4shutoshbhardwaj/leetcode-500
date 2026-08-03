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
var middleNode = function(head) {
    let s=head;
    let f=head;
    while(f.next!=null&&f.next.next!=null){
        f=f.next.next;
        s=s.next;
    }
    // console.log(f.next!=null);
    if(f.next!=null){
        return s.next
    }
    return s;
};