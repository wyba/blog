(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{520:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("醉了")])]),t._v(" "),a("p",[t._v("Animations是一个实现android UI界面动画效果的API，Animations提供了一系列的动画效果，可以进行旋转、缩放、淡入淡出等，这些效果可以应用在绝大多数的控件中。")]),t._v(" "),a("p",[t._v("Android的动画分为了三种， 分别是 帧动画、View动画、属性动画。")]),t._v(" "),a("h2",{attrs:{id:"_1、帧动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、帧动画"}},[t._v("#")]),t._v(" 1、帧动画")]),t._v(" "),a("p",[t._v("帧动画就是顺序播放一组预先定义好的图片，就类似于我们观看视频，就是一张一张的图片连续播放。")]),t._v(" "),a("p",[t._v("帧动画的使用很简单，总共就两个步骤：")]),t._v(" "),a("p",[t._v("1、在res/drawable目录下定义一个XML文件，根节点为系统提供的animation-list，然后放入定义更好的图片；")]),t._v(" "),a("p",[t._v("2、使用AnimationDrawable类播放第一步定义好的Drawable中的图片，形成动画效果；")]),t._v(" "),a("h2",{attrs:{id:"_2、view动画-也称补间动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、view动画-也称补间动画"}},[t._v("#")]),t._v(" 2、View动画（也称补间动画）")]),t._v(" "),a("p",[t._v("view动画也称为补间动画，因为我们只需要拿到一个view，设定它开始和结束的位置，中间的view会自动由系统补齐，而不需要帧动画每一幅图都是提前准备好的。")]),t._v(" "),a("p",[t._v("View动画是Android一开始就提供的比较原始的动画，主要支持四种效果：平移、缩放、旋转、透明度变化（渐变） 四种基本效果，我们可以再这四种基础效果的基础上，选择其中的几种进行组合。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wyba/image_store/blog/image-20220429143701569.png",alt:"image-20220429143701569"}})]),t._v(" "),a("h2",{attrs:{id:"_3、属性动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、属性动画"}},[t._v("#")]),t._v(" 3、属性动画")]),t._v(" "),a("p",[t._v("属性动画可以看作是增强版的补间动画，与补间动画对比：")]),t._v(" "),a("p",[a("strong",[t._v("不同点：")])]),t._v(" "),a("p",[t._v("补间动画只能定义两个关键帧在透明、旋转、位移和倾斜这四个属性的变换，但是属性动画可以定义任何属性的变化。")]),t._v(" "),a("p",[t._v("补间动画只能对 UI 组件执行动画，但属性动画可以对任何对象执行动画。")]),t._v(" "),a("p",[a("strong",[t._v("相同点：")])]),t._v(" "),a("p",[t._v("与补间动画类似的是，属性动画也需要定义几个方面的属性：")]),t._v(" "),a("p",[t._v("动画持续时间。默认为 300ms，可以通过 android:duration 属性指定。")]),t._v(" "),a("p",[t._v("动画插值方式。通过 android:interploator 指定。")]),t._v(" "),a("p",[t._v("动画重复次数。通过 android:repeatCount 指定。")]),t._v(" "),a("p",[t._v("重复行为。通过 android:repeatMode 指定。")]),t._v(" "),a("p",[t._v("动画集。在属性资源文件中通过 <set …/> 来组合。")]),t._v(" "),a("p",[t._v("帧刷新率。指定多长时间播放一帧。默认为 10 ms。")]),t._v(" "),a("p",[a("strong",[t._v("属性动画的使用：")])]),t._v(" "),a("p",[t._v("创建 ValueAnimator 或 ObjectAnimator 对象 —— 即可以从 XML 资源文件加载该动画也可以直接调用 ValueAnimator 或者 ObjectAnimator 的静态工厂方法创建动画。")]),t._v(" "),a("p",[t._v("根据需要为 Animator 对象设置属性。")]),t._v(" "),a("p",[t._v("如果需要监听 Animator 的动画开始事件，动画结束事件、动画重复事件、动画值改变事件，并根据事件提供响应处理代码，需要为Animator 对象设置监听器。")]),t._v(" "),a("p",[t._v("如果有多个动画需要同时播放，需要使用 AnimatorSet 组合这些动画。")]),t._v(" "),a("p",[t._v("调用 Animator 对象的 start 启动动画。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startAnim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),t._v(" animator0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            mImageViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里传入的是一个任意对象，此处是imageview对象")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alpha"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),t._v(" animator1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            mImageViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translationY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),t._v(" animator2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            mImageViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translationX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),t._v(" animator3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            mImageViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translationY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),t._v(" animator4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectAnimator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            mImageViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translationX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimatorSet")]),t._v(" set "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimatorSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterpolator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BounceInterpolator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("playTogether")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            animator0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            animator1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            animator2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            animator3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            animator4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mFlag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("h2",{attrs:{id:"_4、属性动画和补间动画的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、属性动画和补间动画的区别"}},[t._v("#")]),t._v(" 4、属性动画和补间动画的区别")]),t._v(" "),a("p",[t._v("1、作用对象不同，补间动画只能作用在view上，属性动画可以作用在所有对象上。")]),t._v(" "),a("p",[t._v("2、属性变化不同，补间动画只是改变显示效果，不会改变view的属性，比如位置、宽高等，而属性动画实际改变对象的属性。")]),t._v(" "),a("p",[t._v("3、动画效果不同，补间动画只能实现位移、缩放、旋转和透明度四种动画操作，而属性动画还能实现补间动画所有效果及其他更多动画效果。")]),t._v(" "),a("h2",{attrs:{id:"_5、插值器和估值器理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、插值器和估值器理解"}},[t._v("#")]),t._v(" 5、插值器和估值器理解")]),t._v(" "),a("p",[t._v("插值器就是反应属性变化的快慢，具体快慢的标准可以由插值器函数求导得到；估值器具体计算属性值，一般计算的方法就是")]),t._v(" "),a("p",[t._v("属性动画是对属性做动画，属性要实现动画。")]),t._v(" "),a("p",[t._v("首先由插值器根据时间流逝的百分比计算出当前属性值改变的百分比，然后由插值器将这个百分比返回。这个时候插值器的工作就完成了。")]),t._v(" "),a("p",[t._v("插值器算好属性变化百分比之后，由估值器根据当前属性改变的百分比来计算改变后的属性值，根据这个属性值，我们就可以对View设置当前的属性值了。")]),t._v(" "),a("h2",{attrs:{id:"_6、属性动画的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、属性动画的原理"}},[t._v("#")]),t._v(" 6、属性动画的原理")]),t._v(" "),a("p",[t._v("属性动画要求动画作用的对象提供该属性的set方法，属性动画根据你传递的该熟悉的初始值和最终值，以动画的效果多次去调用set方法，每次传递给set方法的值都不一样，确切来说是随着时间的推移，所传递的值越来越接近最终值。如果动画的时候没有传递初始值，那么还要提供get方法，因为系统要去拿属性的初始值。")])])}),[],!1,null,null,null);s.default=e.exports}}]);