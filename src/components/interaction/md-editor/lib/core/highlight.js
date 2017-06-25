import hljs from 'highlight.js-async-webpack'
function highLightCode(str, callback) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    var pre_code = dom.querySelectorAll('pre.hljs > code');
    if (pre_code) {
        var flag = 0;
        var cnt = 0;
        var deal = 0;
        for (var i = 0; i < pre_code.length; i++) {
            if (pre_code[i].className.length > 0) {
                cnt = cnt + 1;
                if (!hljs.hljsBlock(pre_code[i], pre_code[i].className, function() {
                    deal = deal + 1;
                    if (deal == cnt) {
                        callback(dom.innerHTML);
                    }
                })) flag = flag + 1;
            }
        }
        if (cnt == 0 || flag == cnt) {
            callback(dom.innerHTML);
        }
    }
    else {
        callback(dom.innerHTML);
    }
}
export default highLightCode;
