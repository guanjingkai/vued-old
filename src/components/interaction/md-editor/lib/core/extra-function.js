/**
 * textarea 插入内容
 */
export const insertTextAtCaret = (obj, {prefix, subfix, str}, $vm) => {
    obj.focus()
    if (document.selection) {
        alert('document.selection')
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        var startPos = obj.selectionStart;
        var endPos = obj.selectionEnd;
        var tmpStr = obj.value;
        if (startPos === endPos) {
            // 直接插入
            obj.value = tmpStr.substring(0, startPos) + prefix + str + subfix + tmpStr.substring(endPos, tmpStr.length);
            obj.selectionStart = startPos + prefix.length;
            obj.selectionEnd = startPos + (str.length + prefix.length);
        } else {
            // 存在选中区域
            if (tmpStr.substring(startPos - prefix.length, startPos) === prefix && tmpStr.substring(endPos, endPos + subfix.length) === subfix) {
                // 取消
                obj.value = tmpStr.substring(0, startPos - prefix.length) + tmpStr.substring(startPos, endPos) + tmpStr.substring(endPos + subfix.length, tmpStr.length);
                obj.selectionStart = startPos - prefix.length;
                obj.selectionEnd = endPos - prefix.length;
            } else {
                // 确定
                obj.value = tmpStr.substring(0, startPos) + prefix + tmpStr.substring(startPos, endPos) + subfix + tmpStr.substring(endPos, tmpStr.length);
                obj.selectionStart = startPos + prefix.length;
                obj.selectionEnd = startPos + (endPos - startPos + prefix.length);
            }
        }
    } else {
        alert('else')
        // obj.value += str;
    }
    // 触发change事件
    $vm.d_value = obj.value
    obj.focus()
}
/**
 * 生成导航目录
 */
export const getNavigation = ($vm , full) => {
    let navigationContent;

    navigationContent = $vm.$refs.navigationContent

    navigationContent.innerHTML = $vm.d_render
    let nodes = navigationContent.children
    if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
            judageH(nodes[i] , i , nodes)
        }
    }
    function judageH(node , i , nodes) {
        let reg = /^H[1-6]{1}$/;
        if (!reg.exec(node.tagName)) {
            node.style.display = 'none'
        } else {
            let hx = parseInt(node.tagName.substring(1,2));
            node.onclick = function () {
                if (full) {
                    let vReadModel = $vm.$refs.vReadModel;
                    vReadModel.scrollTop = vReadModel.children[0].children[i].offsetTop
                } else {
                    let vShowContent = $vm.$refs.vShowContent;
                    let vNoteEdit = $vm.$refs.vNoteEdit;
                    if (!$vm.s_subField && !$vm.s_screen_phone) {
                        let vNoteDivEdit = $vm.$refs.vNoteDivEdit
                        vNoteEdit.scrollTop = vNoteDivEdit.children[i].offsetTop
                    } else {
                        vNoteEdit.scrollTop = vShowContent.children[i].offsetTop * (vNoteEdit.scrollHeight - vNoteEdit.offsetHeight) / (vShowContent.scrollHeight - vShowContent.offsetHeight)
                    }
                }
            }
        }
    }
}

/**
 * 滚动条联动
 */
export const scrollLink = ($event, $vm) => {
    let element = $event.srcElement ? $event.srcElement : $event.target
    let ratio = element.scrollTop / (element.scrollHeight - element.offsetHeight)
    if ($vm.edit_scroll_height >= 0 && element.scrollHeight !== $vm.edit_scroll_height && (element.scrollHeight - element.offsetHeight - element.scrollTop <= 30)) {
        // star 内容变化 导致 高度增加  且滚动条距离底部小于25px  自动滚动到底部
        $vm.$refs.vNoteEdit.scrollTop = element.scrollHeight - element.offsetHeight
        ratio = 1
    }
    $vm.edit_scroll_height = element.scrollHeight
    // end ----
    if ($vm.$refs.vShowContent.scrollHeight > $vm.$refs.vShowContent.offsetHeight) {
        $vm.$refs.vShowContent.scrollTop = ($vm.$refs.vShowContent.scrollHeight - $vm.$refs.vShowContent.offsetHeight) * ratio
    }
}
/**
 * 监听浏览器fullscreen
 * @param $vm
 */
export const fullscreenchange = ($vm) => {
    // 阅读模式 全屏监听事件
    $vm.$el.addEventListener('fullscreenchange', function (e) {
        $vm.$toolbar_right_read_change_status()
    }, false);
    $vm.$el.addEventListener('mozfullscreenchange', function (e) {
        $vm.$toolbar_right_read_change_status()
    }, false);
    $vm.$el.addEventListener('webkitfullscreenchange', function (e) {
        $vm.$toolbar_right_read_change_status()
    }, false);
    $vm.$el.addEventListener('msfullscreenchange', function (e) {
        $vm.$toolbar_right_read_change_status()
    }, false);
}

/**
 * 监听浏览器onresize
 * @param $vm
 */
export const windowResize = ($vm) => {
    function sizeToStatus() {
        if ($vm.$el.clientWidth > 768) {
            // > 768
            $vm.s_screen_phone = false;
        }
        else {
            // <  768
            $vm.s_screen_phone = true;
        }
    }

    sizeToStatus();
    window.addEventListener('resize', function() {
        // 媒介查询
        sizeToStatus();
    })
}
