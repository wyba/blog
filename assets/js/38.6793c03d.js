(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{522:function(t,a,e){"use strict";e.r(a);var g=e(21),s=Object(g.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("说明：jdk环境变量设置，老生常谈了，今天尝试一下最新的jdk安装和配置，先把原来的老旧卸载掉，开始("),e("em",[t._v("^▽^")]),t._v(")。")])]),t._v(" "),e("h2",{attrs:{id:"_1-下载并安装jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载并安装jdk"}},[t._v("#")]),t._v(" 1.下载并安装JDK")]),t._v(" "),e("p",[t._v("JDK下载链接（https://www.oracle.com/java/technologies/downloads/#jdk17-windows）")]),t._v(" "),e("p",[t._v("我去现在jdk更新到17了，我电脑上还是jdk8，老版本好像没有64位的下载了，坑哦。")]),t._v(" "),e("p",[t._v("下载安装版吧，解压缩版好像更方便的样子。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211206155158732.png",alt:"image-20211206155158732"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211206155453798.png",alt:"image-20211206155453798"}})]),t._v(" "),e("p",[t._v("开始安装：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207095411776.png",alt:"image-20211207095411776"}})]),t._v(" "),e("p",[t._v("下一步")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207095528948.png",alt:"image-20211207095528948"}})]),t._v(" "),e("p",[t._v("修改安装目录，下一步")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207095618824.png",alt:"image-20211207095618824"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207095644241.png",alt:"image-20211207095644241"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207095709939.png",alt:"image-20211207095709939"}})]),t._v(" "),e("p",[t._v("安装完成，关闭，查看安装目录，配置环境变量")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207095818081.png",alt:"image-20211207095818081"}})]),t._v(" "),e("p",[t._v("好奇怪，怎么没有jre，是不是只能默认装在C盘，有点坑，看看解压缩版有没有jre")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207100650021.png",alt:"image-20211207100650021"}})]),t._v(" "),e("p",[t._v("也没有，哭了，不按套路出牌，百度了一下，发现自JDK11以上好像就没有jre文件夹，先试一下百度经验（https://jingyan.baidu.com/article/a378c96090c250f2282830ca.html），解决总结：")]),t._v(" "),e("p",[t._v("1.创建jre文件夹，copy jdk下的文件到jre")]),t._v(" "),e("p",[t._v("2.然后返回到jre目录下，通过分析对比jdk文件夹jre文件夹的差异，可以删除运行环境不需要的文件夹以减少jre文件体积，删除这个运行环境不需要的jmods文件夹（约有70M大小），jdk和jre的区别大概就是这个jmods文件夹，然后再查看了除了bin和lib文件夹以外的文件夹都不占什么大小，所以就删除jmods文件夹就行了")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207101320177.png",alt:"image-20211207101320177"}})]),t._v(" "),e("h2",{attrs:{id:"_2-win10上的环境变量配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-win10上的环境变量配置"}},[t._v("#")]),t._v(" 2.Win10上的环境变量配置")]),t._v(" "),e("p",[t._v("此电脑---》属性--》--》高级系统设置--》高级--》环境变量--》系统变量")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207101445970.png",alt:"image-20211207101445970"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207101653414.png",alt:"image-20211207101653414"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207101736437.png",alt:"image-20211207101736437"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207102049045.png",alt:"image-20211207102049045"}})]),t._v(" "),e("p",[t._v("安装完jdk17后，发现系统变量多了一个")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207102329785.png",alt:"image-20211207102329785"}})]),t._v(" "),e("p",[t._v("此时虽然可以直接使用java命令，但是还是配置一下环境")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207102421862.png",alt:"image-20211207102421862"}})]),t._v(" "),e("p",[t._v("老套路：")]),t._v(" "),e("p",[t._v("新建变量：JAVA_HOME，值：F:\\Program Files\\Java\\jdk-17.0.1")]),t._v(" "),e("p",[t._v("新建变量：CLASSPATH，值：.;%JAVA_HOME%\\lib;%JAVA_HOME%\\lib\\tools.jar;")]),t._v(" "),e("p",[t._v("将以上两个变量加入path")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207103858660.png",alt:"image-20211207103858660"}})]),t._v(" "),e("p",[t._v("删掉C:\\Program Files\\Common Files\\Oracle\\Java\\javapath变量，重新测试，java -version")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211207104001815.png",alt:"image-20211207104001815"}})]),t._v(" "),e("p",[t._v("大功告成，写这个还挺花时间的，况且还是上班时间，真无聊啊。。。")])])}),[],!1,null,null,null);a.default=s.exports}}]);