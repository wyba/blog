(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{544:function(t,s,a){"use strict";a.r(s);var e=a(21),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("说明：嘿嘿，后端数据库学习，搞起！")])]),t._v(" "),a("h2",{attrs:{id:"_1-下载mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载mysql"}},[t._v("#")]),t._v(" 1.下载Mysql")]),t._v(" "),a("p",[t._v("mysql社区版下载链接：https://dev.mysql.com/downloads/mysql/")]),t._v(" "),a("p",[t._v("社区版是免费的，收费的咱就不介绍了，没钱，只能白嫖O(∩_∩)O哈哈~")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208093111436.png",alt:"image-20211208093111436"}})]),t._v(" "),a("p",[t._v("可以看到最新版的mysql已经更新到了8.0.27，点击右边的Looking for previous GA version?，可以看到有64位的下载，想要下载以前的版本，点击Archives")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208093905097.png",alt:"image-20211208093905097"}})]),t._v(" "),a("p",[t._v("选择相应的平台下载吧！！！")]),t._v(" "),a("h2",{attrs:{id:"_2-解压缩版配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压缩版配置"}},[t._v("#")]),t._v(" 2.解压缩版配置")]),t._v(" "),a("p",[t._v("安装版步骤麻烦，直接解压缩，用命令行安装会快点")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208103222100.png",alt:"image-20211208103222100"}})]),t._v(" "),a("p",[t._v("打开命令行，cd进入bin目录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208103349512.png",alt:"image-20211208103349512"}})]),t._v(" "),a("p",[t._v("1.mysqld -install\n2.mysqld  --initialize-insecure   （不设置root密码）\n3.net start mysql\n4.net stop mysql\n5.mysqld remove")]),t._v(" "),a("p",[t._v("在win10上可以直接启动成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208104537409.png",alt:"image-20211208104537409"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208104629433.png",alt:"image-20211208104629433"}})]),t._v(" "),a("p",[t._v("检查是否能登录上去：mysql -u root -p，因为没设置密码，所以第一次登录不用输入密码，直接回车就能登录成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208105229885.png",alt:"image-20211208105229885"}})]),t._v(" "),a("h2",{attrs:{id:"_3-设置成开机自启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置成开机自启服务"}},[t._v("#")]),t._v(" 3.设置成开机自启服务")]),t._v(" "),a("p",[t._v("打开本地服务，找到mysql，选择属性，启动类型为自启即可")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208104831832.png",alt:"image-20211208104831832"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208104942487.png",alt:"image-20211208104942487"}})]),t._v(" "),a("h2",{attrs:{id:"_4-设置root密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置root密码"}},[t._v("#")]),t._v(" 4.设置root密码")]),t._v(" "),a("p",[t._v("首先登录MySQL。\n格式：mysql> set password for 用户名@localhost = password('新密码');\n例子：mysql> set password for root@localhost = password('123');")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20211208110225819.png",alt:"image-20211208110225819"}})]),t._v(" "),a("p",[a("strong",[t._v("特别注意：删除数据库之前，一定要备份！！！")])])])}),[],!1,null,null,null);s.default=r.exports}}]);