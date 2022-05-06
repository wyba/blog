(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{537:function(t,a,e){"use strict";e.r(a);var s=e(21),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("说明：批量替换可以省好多事情，特别是迁移到AndroidX时，一个个去修改xml和引入是件痛苦的事情。")])]),t._v(" "),e("p",[t._v("举个例子，我们要把AppCompatTextView换成TextView")]),t._v(" "),e("h2",{attrs:{id:"_1-修改xml中的标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改xml中的标签"}},[t._v("#")]),t._v(" 1.修改XML中的标签")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<androidx.appcompat.widget.AppCompatTextView\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("替换成")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<TextView\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("鼠标右击项目，选择Replace in Path")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207141222605.png",alt:"image-20211207141222605"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207141342436.png",alt:"image-20211207141342436"}})]),t._v(" "),e("p",[t._v("选择Replace All，全部替换")]),t._v(" "),e("h2",{attrs:{id:"_2-修改java文件中的引入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改java文件中的引入"}},[t._v("#")]),t._v(" 2.修改java文件中的引入")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import androidx.appcompat.widget.AppCompatTextView;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("修改成")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import android.widget.TextView;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207141755442.png",alt:"image-20211207141755442"}})]),t._v(" "),e("h2",{attrs:{id:"_3-appcompattextview变量声明替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-appcompattextview变量声明替换"}},[t._v("#")]),t._v(" 3.AppCompatTextView变量声明替换")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207142012913.png",alt:"image-20211207142012913"}})]),t._v(" "),e("p",[t._v("大功告成！")]),t._v(" "),e("p",[t._v("有个小小的问题，就是会有多余的引用，因为原来有TextView的引入")]),t._v(" "),e("h2",{attrs:{id:"_4-清除整个工程import的无用引用-非必要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-清除整个工程import的无用引用-非必要"}},[t._v("#")]),t._v(" 4.清除整个工程import的无用引用（非必要）")]),t._v(" "),e("p",[t._v("鼠标右击项目，选择Optimize Imports")]),t._v(" "),e("p",[t._v("这个过程挺久的，如果没把握，其实没必要可以不用，除非有强迫症。。。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207142509889.png",alt:"image-20211207142509889"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);