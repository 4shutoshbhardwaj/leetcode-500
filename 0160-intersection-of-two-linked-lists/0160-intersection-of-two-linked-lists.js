/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let obj={};
    let h1=headB;
    let h2=headA;
    while(h1){
        let s=h1.val;
        if(obj[s]==undefined){
            obj[s]=h1;
        }
        h1=h1.next;
    }
    let temp;
    while(h2){
        let s=h2.val;
        if(obj[s]!=undefined&&obj[s]==h2&&obj[s].val==h2.val&&obj[s].next==h2.next){
            return h2;
        }
        temp=h2;
        h2=h2.next;
    }
    return null;
};