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
var reverseKGroup = function(head, k) {
    var pre=null;
    var fir=head;
    var las=head;
    var nex=head;
    var c=1;
    var t=false;
    var hh;
    while(las){
        if(c<k){
            las=las.next;
            c++;
        }else{
            if(t)pre.next=null;
            nex=las.next;
            las.next=null;
            var [s,e]=reverse(fir);
            if(!t)hh=s;
            if(t)pre.next=s;
            e.next=nex;
            fir=nex;
            las=nex;
            pre=e;
            c=1;
            t=true;
        }
    }
    return hh;
};
function reverse(h){
    var prev=null;
    var curr=h;
    var next;
    while(curr){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return [prev,h];
}