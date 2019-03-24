(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{179:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"html"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),r("h2",{attrs:{id:"doctype-作用？标准模式与兼容模式区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doctype-作用？标准模式与兼容模式区别","aria-hidden":"true"}},[t._v("#")]),t._v(" Doctype 作用？标准模式与兼容模式区别?")]),t._v(" "),r("p",[t._v("DOCTYPE是用来声明文档类型和DTD规范的。 <!DOCTYPE html>声明位于HTML文档中的第一行，不是一个HTML标签，处于 html 标签之前。")]),t._v(" "),r("p",[t._v("告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。")]),t._v(" "),r("p",[t._v("标准模式的排版 和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。\n在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容 HTML5不基于SGML，所以不用指定DTD")]),t._v(" "),r("h2",{attrs:{id:"html-全局属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html-全局属性","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML 全局属性")]),t._v(" "),r("p",[t._v("全局属性是所有HTML元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。")]),t._v(" "),r("h2",{attrs:{id:"页面导入样式时，使用-link-和-import-有什么区别？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面导入样式时，使用-link-和-import-有什么区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面导入样式时，使用 link 和@import 有什么区别？")]),t._v(" "),r("p",[t._v("link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；"),r("br"),t._v("\n而@import 是 CSS 提供的，只能用于加载 CSS;")]),t._v(" "),r("p",[t._v("页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;")]),t._v(" "),r("p",[t._v("import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题;")]),t._v(" "),r("p",[t._v("link 支持使用 js 控制 DOM 去改变样式，而@import 不支持;")]),t._v(" "),r("h2",{attrs:{id:"介绍一下你对浏览器内核的理解？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下你对浏览器内核的理解？","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍一下你对浏览器内核的理解？")]),t._v(" "),r("p",[t._v("主要分成两部分：渲染引擎(layout engineer 或 Rendering Engine)和 JS 引擎。")]),t._v(" "),r("p",[t._v("渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后渲染到用户的屏幕上。\nJS 引擎则：解析和执行 javascript 来实现逻辑和控制 DOM 进行交互。")]),t._v(" "),r("p",[t._v("最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。")]),t._v(" "),r("h2",{attrs:{id:"em-与-i-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#em-与-i-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" em 与 i 的区别")]),t._v(" "),r("p",[t._v("效果都是斜体")]),t._v(" "),r("p",[t._v("em 是语义化标签，表强调")]),t._v(" "),r("p",[t._v("i 是样式标签， 表斜体")]),t._v(" "),r("h2",{attrs:{id:"哪些元素可以自闭合？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#哪些元素可以自闭合？","aria-hidden":"true"}},[t._v("#")]),t._v(" 哪些元素可以自闭合？")]),t._v(" "),r("p",[t._v("表单元素 input")]),t._v(" "),r("p",[t._v("img")]),t._v(" "),r("p",[t._v("br, hr")]),t._v(" "),r("p",[t._v("meta, link")]),t._v(" "),r("h2",{attrs:{id:"html和dom的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html和dom的关系","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML和DOM的关系")]),t._v(" "),r("p",[t._v("HTML只是一个字符串")]),t._v(" "),r("p",[t._v("DOM由HTML解析而来")]),t._v(" "),r("p",[t._v("JS可以维护DOM")]),t._v(" "),r("h2",{attrs:{id:"property和attribute的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#property和attribute的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" property和attribute的区别")]),t._v(" "),r("p",[t._v("例如一个input标签 "),r("input",{attrs:{value:"3"}}),t._v(' 他的attribute是3 但如果使用input.value = 4 或 直接修改值为4，这时再去getAttribute得到的还是"3"')]),t._v(" "),r("h2",{attrs:{id:"form-作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#form-作用","aria-hidden":"true"}},[t._v("#")]),t._v(" form 作用")]),t._v(" "),r("p",[t._v("直接提交表单")]),t._v(" "),r("p",[t._v("使用submit / reset按钮")]),t._v(" "),r("p",[t._v("便于浏览器保存表单")]),t._v(" "),r("p",[t._v("第三方库可以整体取值")]),t._v(" "),r("p",[t._v("第三方库可以进行表单验证")]),t._v(" "),r("h2",{attrs:{id:"简述一下你对-html-语义化的理解？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简述一下你对-html-语义化的理解？","aria-hidden":"true"}},[t._v("#")]),t._v(" 简述一下你对 HTML 语义化的理解？")]),t._v(" "),r("p",[t._v("用正确的标签做正确的事情。")]),t._v(" "),r("p",[t._v("html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;")]),t._v(" "),r("p",[t._v("即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;")]),t._v(" "),r("p",[t._v("搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;")]),t._v(" "),r("p",[t._v("使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。")]),t._v(" "),r("h2",{attrs:{id:"html-中-title-属性和-alt-属性的区别？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html-中-title-属性和-alt-属性的区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" html 中 title 属性和 alt 属性的区别？")]),t._v(" "),r("img",{attrs:{src:"#",alt:"alt信息"}}),t._v("\n当图片不输出信息的时候，会显示 alt 信息 鼠标放上去没有信息，当图片正常读取，不会出现 alt 信息。\n"),r("img",{attrs:{src:"#",alt:"alt信息",title:"title信息"}}),t._v("\n当图片不输出信息的时候，会显示 alt 信息 鼠标放上去会出现 title 信息；\n"),r("p",[t._v("当图片正常输出的时候，不会出现 alt 信息，鼠标放上去会出现 title 信息。\n除了纯装饰图片外都必须设置有意义的值，搜索引擎会分析。")]),t._v(" "),r("h2",{attrs:{id:"移动端项目需要注意的4个问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移动端项目需要注意的4个问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动端项目需要注意的4个问题")]),t._v(" "),r("p",[t._v("meta中设置viewport\n阻止用户手滑放大或缩小页面，需要在 index.html中添加meta元素,设置viewport。\n")]),r("meta",{attrs:{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}}),r("p"),t._v(" "),r("h2",{attrs:{id:"css样式统一问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css样式统一问题","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS样式统一问题")]),t._v(" "),r("p",[t._v("我们需要重置页面样式，因为在不同的手机浏览器上，默认的css样式不是统一的。")]),t._v(" "),r("p",[t._v("解决方法：使用reset.css重置所有元素的默认样式")]),t._v(" "),r("h2",{attrs:{id:"一像素边框问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一像素边框问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 一像素边框问题")]),t._v(" "),r("p",[t._v("有的手机分辨率比较高，是2倍屏或3倍屏，手机上的浏览器就会把CSS中的1像素值展示为2个或3个物理宽度")]),t._v(" "),r("p",[t._v('解决方法： 添加一个border.css库，将利用scroll缩放的原理将边框重置。当我们需要使用一像素边框时只需要在标签上添加对应类名，如设置底部一像素边框就在标签上加入"border-bottom"的class名')]),t._v(" "),r("h2",{attrs:{id:"_300毫秒点击延迟问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_300毫秒点击延迟问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 300毫秒点击延迟问题")]),t._v(" "),r("p",[t._v("在移动端开发中，某些机型上使用click事件会延迟300ms才执行，这样影响了用户体验。\n解决方法： 引入fastclick.js。")]),t._v(" "),r("p",[t._v("当用户一次点击屏幕之后，浏览器并不能立刻判断用户是要进行双击缩放，还是想要进行单击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。于是，300 毫秒延迟就这么诞生了。")]),t._v(" "),r("p",[t._v("FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。简而言之，FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟click 事件的click事件（自定义事件），并把浏览器在 300 毫秒之后真正触发的 click 事件阻止掉。")]),t._v(" "),r("h2",{attrs:{id:"浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢？","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？")]),t._v(" "),r("p",[t._v("在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。\n离线的情况下，浏览器就直接使用离线存储的资源。\n在离线状态时，操作 window.applicationCache 进行需求实现。")]),t._v(" "),r("h2",{attrs:{id:"实现不使用-border-画出-1px-高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现不使用-border-画出-1px-高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。")]),t._v(" "),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),r("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),r("div",{staticStyle:{height:"1px",overflow:"hidden",background:"red"}}),t._v(" "),r("h2",{attrs:{id:"说一下思路，如何把一个图片的地址，传到服务器，并保存在服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下思路，如何把一个图片的地址，传到服务器，并保存在服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 说一下思路，如何把一个图片的地址，传到服务器，并保存在服务器")]),t._v(" "),r("p",[t._v("js进行图片预览 使用input标签来选择图片，使用FileReader读取图片并转成base64编码，然后发送给服务器   window.FileReader")]),t._v(" "),r("p",[t._v("FormData   文件可以使用 input:file 来进行上传，并获取 fileInputElement.files[0] 作为value"),r("br"),t._v('\nform标签必须加上enctype="multipart/form-data"属性，method必须为post，表单中的input的type为file')])])}],!1,null,null,null);a.default=s.exports}}]);