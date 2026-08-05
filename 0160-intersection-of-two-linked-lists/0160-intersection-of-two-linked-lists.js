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
    // return null;
    let obj={};
    let h1=headB;
    let h2=headA;
    while(h1){
        let s=h1.val;
        // console.log(h1.val);
        if(obj[s]==undefined){
            obj[s]=h1;
        }
        h1=h1.next;
    }
    // console.log(obj);
    let temp;
    while(h2){
        let s=h2.val;
        if(obj[s]!=undefined&&obj[s]==h2&&obj[s].val==h2.val&&obj[s].next==h2.next){
            // console.log(obj[s],temp,h2);
            return h2;
        }
        temp=h2;
        h2=h2.next;
    }
    return null;
};

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