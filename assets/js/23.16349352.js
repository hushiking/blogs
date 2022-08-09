(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{253:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"javascript-表达式与语句区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-表达式与语句区别"}},[s._v("#")]),s._v(" JavaScript 表达式与语句区别")]),s._v(" "),a("p",[a("strong",[s._v("Javascript 语言精粹")]),s._v("：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("表达式是由运算符构成，并运算产生结果的语法结构。")])]),s._v(" "),a("li",[a("p",[s._v("程序是由语句构成，语句则是由“;（分号）”分隔的句子或命令。")])]),s._v(" "),a("li",[a("p",[s._v("如果在表达式后面加上一个“;”分隔符，这就被称为“表达式语句”。它表明“只有表达式，而没有其他语法元素的语句”")])])]),s._v(" "),a("p",[s._v("JavaScript 一个表达式会产生一个值，它可以放在任何需要一个值的地方。比如，作为一个函数调用的参数。下面的每行代码都是一个表达式：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("myBook\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("myFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("语句可以理解成一个行为。循环语句和 if 语句就是典型的语句。一个程序是由一系列语句组成的。JavaScript 中某些需要语句的地方，你可以使用一个表达式来代替。这样的语句称之为表达式语句。但反过来不可以：你不能在一个需要表达式的地方放一个语句。比如，一个if语句不能作为一个函数的参数。")]),s._v(" "),a("h2",{attrs:{id:"json-与-eval-用法区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-与-eval-用法区别"}},[s._v("#")]),s._v(" json 与 eval 用法区别")]),s._v(" "),a("ul",[a("li",[s._v("json字符串的解析方法")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" jsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"data1":"Hello,", "data2":"world!}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" evalJson"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'('")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("jsonData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" jsonParseJson"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jsonData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" jsonstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"data1":"hello","data2":++value}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'('")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("jsonstr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这时value值为2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jsonstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//报错")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/json%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%A7%A3%E6%9E%90%E6%8A%A5%E9%94%99.png",alt:"Alt json字符串解析报错",title:"json字符串解析报错"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("结果分析")]),s._v(" "),a("ul",[a("li",[s._v("从控制输出台的结果可以看出，第一个 eval() 顺利执行，第二个报错了。")]),s._v(" "),a("li",[a("strong",[s._v("从上例就可以明显地看出，eval 在解析字符串时，会执行该字符串中的代码(这样的后果是相当恶劣的)")])]),s._v(" "),a("li",[s._v("如上例中，由于用 eval 解析一个 json 字符串而造成原先的 value 的值改变。")]),s._v(" "),a("li",[s._v("在**《高性能JavaScript》**一书中指出，使用 eval 乱来解析 JSON 字符串是很危险的，容易将一些置于字符串中的危险代码一并执行。")]),s._v(" "),a("li",[s._v("所以我们应该尽量使用 "),a("code",[s._v("JSON.parse()")]),s._v(" 方法来解析 JSON 字符串。")])])]),s._v(" "),a("li",[a("p",[s._v("补充理解")]),s._v(" "),a("ul",[a("li",[s._v("另外，在一个 "),a("strong",[a("em",[s._v("字符串")])]),s._v(" 中如果我们想输出“\\”字符，我们必须使用 "),a("strong",[s._v("转义字符")])]),s._v(" "),a("li",[s._v("所以最终形式是："),a("code",[s._v('console.log("\\\\")')]),s._v(";")]),s._v(" "),a("li",[s._v("但是由于 "),a("code",[s._v("JSON.parse")]),s._v(" 解析的是字符串的真实含义")]),s._v(" "),a("li",[s._v("所以每一个"),a("code",[s._v('"\\"')]),s._v("又都要使用"),a("code",[s._v('"\\"')]),s._v("来进行转义")]),s._v(" "),a("li",[s._v("所以最终形式为："),a("code",[s._v('console.log(JSON.parse(\'{"a":"\\\\\\\\"}\'))')]),s._v(";")]),s._v(" "),a("li",[s._v("要注意理解其中意思。")])])]),s._v(" "),a("li",[a("p",[s._v("为什么 eval() 解析的时候要加上括号？")]),s._v(" "),a("ul",[a("li",[s._v("因为 "),a("strong",[s._v("eval() 相当于一个执行环境")])]),s._v(" "),a("li",[s._v("当你不加括号的时候，jsonData 会被认为是一条复合语句。运行的时候就会逐个字符的解析。")]),s._v(" "),a("li",[s._v("但是加上括号的时候，jsonData 就当做一个表达式去运算。从括号开始就被当做了对象进行识别。")])])])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"js表达式与语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js表达式与语句"}},[s._v("#")]),s._v(" js表达式与语句")]),s._v(" "),a("blockquote",[a("p",[s._v("基本含义")])]),s._v(" "),a("ul",[a("li",[s._v("在 javascript 中所有表达式都有返回值（如果没有返回值就是 undefined），这个返回值就可以继续作为表达式的一部分。")]),s._v(" "),a("li",[s._v("大多数语言表达式的定义基本分为（忽略优先级）：\n"),a("ul",[a("li",[s._v("运算符 表达式 "),a("strong",[s._v("(一元，比如 !true)")])]),s._v(" "),a("li",[s._v("表达式 运算符 表达式 "),a("strong",[s._v("(二元，比如 1+2)")])]),s._v(" "),a("li",[s._v("表达式1 ？ 表达式2 ： 表达式3 "),a("strong",[s._v("(三元，a>b?a:b)")])]),s._v(" "),a("li",[s._v("左括号 表达式 右括号 "),a("strong",[s._v("(括号 (1+2))")])]),s._v(" "),a("li",[s._v("表达式(参数列表) "),a("strong",[s._v("(函数调用)")])])])]),s._v(" "),a("li",[s._v("可见这是一种递归的定义，所以又规定 "),a("strong",[s._v("字面量(就是1,2,3,“abc”)，this等是表达式")])]),s._v(" "),a("li",[s._v("“语句”的意思是指不是表达式的语句。\n"),a("ul",[a("li",[s._v("在 javascript 里面满足这个条件的就函数声明、变量声明(var a=10是声明和赋值)、for语句、if语句、while语句、switch语句、return、try catch。")]),s._v(" "),a("li",[s._v("javascript 还有一种函数表达式，它的形式跟函数声明一模一样。如果写 "),a("code",[s._v("function fn() { return 0;}")]),s._v(" 是函数声明而写 "),a("code",[s._v("var a = function fn(){ return 0;}")]),s._v(" 等号后面的就是函数表达式。")])])]),s._v(" "),a("li",[a("strong",[s._v("最简单的区别")]),s._v(" "),a("ul",[a("li",[s._v("表达式可以嵌套在别的表达式中，但语句不行。语句只能独立出现。")]),s._v(" "),a("li",[s._v("另外，语句没有返回值。")]),s._v(" "),a("li",[s._v("表达式计算出一个值，但语句用来执行以使某件事发生。《JavaScript 权威指南》（第6版）")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("举例说明")])]),s._v(" "),a("ul",[a("li",[s._v("在程序设计语言中，语句指的是执行单元，通常以行作为单位。")]),s._v(" "),a("li",[s._v("表达式指的是可用于计算的式子，即可能产生一个值的式子。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("aa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("aa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\naa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("aa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("aa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" aa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("alert aa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nbb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("aa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\naa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("语句可以包含有表达式，表达式也可以单独形成一个语句，如上所示\n"),a("ul",[a("li",[s._v("其中"),a("code",[s._v("1+aa()")]),s._v("和"),a("code",[s._v("bb+56")]),s._v("就是表达式")]),s._v(" "),a("li",[s._v("最后一句"),a("code",[s._v("aa++")]),s._v("就是一个由单个表达式构成的语句")])])]),s._v(" "),a("li",[s._v("如果你听到或看到有人说 if 语句、for 语句，其实大多数情况指的都是 if 分支结构，for 循环结构。")])]),s._v(" "),a("h2",{attrs:{id:"看似语句的表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#看似语句的表达式"}},[s._v("#")]),s._v(" 看似语句的表达式")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下面是一个对象字面量,也就是一个可以生成一个对象值的表达式")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("不过同时，它也是一个完全合法的语句，这个语句的组成部分有：")]),s._v(" "),a("ol",[a("li",[s._v("一个代码块：一个由大括号包围的语句序列")]),s._v(" "),a("li",[s._v("一个标签：你可以在任何语句前面放置一个标签，这里的 foo 就是一个标签")]),s._v(" "),a("li",[s._v("一条语句：表达式语句 bar(3, 5)")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("你也许会感到震惊，那就是 JavaScript 居然可以有独立的代码块(常见的代码块是依托于循环或者 if 语句的)。下面的代码演示了这种代码块的作用：你可以给它设置一个标签然后跳出这个代码块.")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("printTwo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    printing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"One"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("printTwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v(" printing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Two"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Three"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nOne\nThree\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nOne\nTwo\nThree\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("blockquote",[a("p",[s._v("简单用一幅图表示表达式与语句直接的关系")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/front-end/%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%8E%E8%AF%AD%E5%8F%A5.png",alt:"Alt 表达式与语句关系图",title:"表达式与语句关系图"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);