/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length==0)return null;
    let arr=lists[0];
    for(let i=1;i<lists.length;i++){
        arr=merge(arr,lists[i]);
    }
    return arr;
};

function merge(ar1,ar2){
    let h=new ListNode(0);
    let head=h;
    while(ar1&&ar2){
        if(ar1.val<ar2.val){
            h.next=ar1;
            h=h.next;
            ar1=ar1.next;
        }else if(ar1.val>ar2.val){
            h.next=ar2;
            h=h.next;
            ar2=ar2.next;
        }else{
            h.next=ar1;
            h=h.next;
            ar1=ar1.next;
            h.next=ar2;
            h=h.next;
            ar2=ar2.next;
        }
    }
    while(ar1){
        h.next=ar1;
        h=h.next;
        ar1=ar1.next;
    }
    while(ar2){
        h.next=ar2;
        h=h.next;
        ar2=ar2.next;
    }
    return head.next;
}