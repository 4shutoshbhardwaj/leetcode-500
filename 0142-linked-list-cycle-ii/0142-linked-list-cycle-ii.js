/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // if(!head||!head.next)return null;
    // let obj=new Set();
    // let f=head;
    // while(f){
    //     if(obj.has(f)){
    //         return f;
    //     }
    //     obj.add(f);
    //     f=f.next;
    // }
    // return null;

    if(!head||!head.next)return null;
    let slow=head;
    let fast=head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            slow=head;
            while(slow!=fast){
                slow=slow.next;
                fast=fast.next;
            }
            return slow;
        }
    }
    return null;
};