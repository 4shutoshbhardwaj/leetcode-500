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
var sortList = function(head) {
    return ms(head);
    function merge(h1,h2){
        var em=new ListNode(0);
        var e=em;
        while(h1&&h2){
            if(h1.val>h2.val){
                e.next=h2;
                h2=h2.next;
            }else{
                e.next=h1;
                h1=h1.next;
            }
            e=e.next;
        }
        e.next=h1||h2;
        return em.next;
    }
    function ms(h){
        if(!h||!h.next)return h;
        var m=mid(h);
        var mn=m.next;
        m.next=null;
        var lh=ms(h);
        var rh=ms(mn);
        return merge(lh,rh);
    }
    function mid(h){
        var s=h;
        var f=h;
        while(f&&f.next&&f.next.next){
            s=s.next;
            f=f.next.next;
        }
        return s;
    }
};