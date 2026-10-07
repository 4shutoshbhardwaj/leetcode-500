/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    function func(st,i,str){
        // console.log(st,i,str);
        if(i>=s.length&&st.length==0&&(ans.length==0||ans.length>0&&ans[0].length==str.length)&&valid(str)){
            // console.log(valid(str));
            ans.push(str);
            return;
        }else if(i>=s.length)return;
        if(s[i]=="("){
            st.push(s[i]);
            str+=s[i];
            func(st,i+1,str);
            st.pop();
            str=str.slice(0,str.length-1);
            func(st,i+1,str);
        }
        if(s[i]==")"&&st.length>0){
            let a=st.pop();
            str+=s[i];
            func(st,i+1,str);
            st.push(a);
            str=str.slice(0,str.length-1);
            func(st,i+1,str);
        }
        if(s[i]==")"&&st.length==0){
            func(st,i+1,str);
        }
        if(s[i]!=")"&&s[i]!="("){
            str+=s[i];
            func(st,i+1,str);
        }
        // func(st,i+1,str);
    }
    function valid(str){
        let st=[];
        for(let i=0;i<str.length;i++){
            if(str[i]=="("){
                st.push(str[i]);
            }else if(str[i]==")"&&st.length>0){
                st.pop();
            }else if(str[i]==")"&&st.length==0){
                return false;
            }
        }
        return st.length==0;
    }
    let ans=[];
    func([],0,"");
    let obj={};
    for(let i=0;i<ans.length;i++){
        if(obj[ans[i]]==undefined){
            obj[ans[i]]=1;
        }
    }
    ans=[];
    for(let o in obj){
        ans.push(o);
    }
    return ans;
};