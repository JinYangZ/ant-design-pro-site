webpackJsonp([42,47],{1521:function(n,e){n.exports={content:["article",["p","Ant Design Pro \u662f\u4e00\u4e2a\u9075\u5faa ",["a",{title:null,href:"http://ant.design"},"Ant Design"]," \u8bbe\u8ba1\u89c4\u8303\u7684\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u524d\u7aef\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e React \u7684\u4e00\u5957\u540e\u53f0\u7ba1\u7406\u548c\u63a7\u5236\u53f0\u7684\u811a\u624b\u67b6\uff0c\u5e2e\u52a9\u5feb\u901f\u642d\u5efa\u60a8\u7684\u4f01\u4e1a\u4e2d\u540e\u53f0\u4e1a\u52a1\u4ea7\u54c1\u3002\u4e0b\u9762\u7684\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u5f00\u59cb\u5f00\u53d1\u548c\u4f7f\u7528\u8fd9\u4e2a\u811a\u624b\u67b6\u3002"],["h2","\u5b89\u88c5"],["p","\u6709\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">git</span> clone --depth<span class="token operator">=</span>1 git@github.com:ant-design/ant-design-pro.git my-project\n$ <span class="token function">cd</span> my-project'},["code","$ git clone --depth=1 git@github.com:ant-design/ant-design-pro.git my-project\n$ cd my-project"]],["p","\u6216\u8005\u70b9\u51fb ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/archive/master.zip"},"https://github.com/ant-design/ant-design-pro/archive/master.zip"]," \u4e0b\u8f7d\u5230\u672c\u5730\u540e\u89e3\u538b\u3002"],["h2","\u76ee\u5f55\u7ed3\u6784"],["p","\u6211\u4eec\u5df2\u7ecf\u4e3a\u60a8\u751f\u6210\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u63d0\u4f9b\u4e86\u6db5\u76d6\u4e2d\u540e\u53f0\u5f00\u53d1\u7684\u5404\u7c7b\u529f\u80fd\u548c\u5751\u4f4d\uff0c\u4e0b\u9762\u662f\u6574\u4e2a\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u3002"],["pre",{lang:"bash",highlighted:'\u251c\u2500\u2500 mock                     <span class="token comment" spellcheck="true"># \u672c\u5730\u6a21\u62df\u6570\u636e</span>\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico          <span class="token comment" spellcheck="true"># Favicon</span>\n\u2502   \u2514\u2500\u2500 index.html           <span class="token comment" spellcheck="true"># HTML \u5165\u53e3\u6a21\u677f</span>\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 common               <span class="token comment" spellcheck="true"># \u5e94\u7528\u516c\u7528\u914d\u7f6e\uff0c\u5982\u5bfc\u822a\u4fe1\u606f</span>\n\u2502   \u251c\u2500\u2500 components           <span class="token comment" spellcheck="true"># \u4e1a\u52a1\u901a\u7528\u7ec4\u4ef6</span>\n\u2502   \u251c\u2500\u2500 e2e                  <span class="token comment" spellcheck="true"># \u96c6\u6210\u6d4b\u8bd5\u7528\u4f8b</span>\n\u2502   \u251c\u2500\u2500 layouts              <span class="token comment" spellcheck="true"># \u901a\u7528\u5e03\u5c40</span>\n\u2502   \u251c\u2500\u2500 models               <span class="token comment" spellcheck="true"># dva model</span>\n\u2502   \u251c\u2500\u2500 routes               <span class="token comment" spellcheck="true"># \u4e1a\u52a1\u9875\u9762\u5165\u53e3\u548c\u5e38\u7528\u6a21\u677f</span>\n\u2502   \u251c\u2500\u2500 services             <span class="token comment" spellcheck="true"># \u540e\u53f0\u63a5\u53e3\u670d\u52a1</span>\n\u2502   \u251c\u2500\u2500 utils                <span class="token comment" spellcheck="true"># \u5de5\u5177\u5e93</span>\n\u2502   \u251c\u2500\u2500 g2.js                <span class="token comment" spellcheck="true"># \u53ef\u89c6\u5316\u56fe\u5f62\u914d\u7f6e</span>\n\u2502   \u251c\u2500\u2500 polyfill.js          <span class="token comment" spellcheck="true"># \u517c\u5bb9\u6027\u57ab\u7247</span>\n\u2502   \u251c\u2500\u2500 theme.js             <span class="token comment" spellcheck="true"># \u4e3b\u9898\u914d\u7f6e</span>\n\u2502   \u251c\u2500\u2500 index.js             <span class="token comment" spellcheck="true"># \u5e94\u7528\u5165\u53e3</span>\n\u2502   \u251c\u2500\u2500 index.less           <span class="token comment" spellcheck="true"># \u5168\u5c40\u6837\u5f0f</span>\n\u2502   \u2514\u2500\u2500 router.js            <span class="token comment" spellcheck="true"># \u8def\u7531\u5165\u53e3</span>\n\u251c\u2500\u2500 tests                    <span class="token comment" spellcheck="true"># \u6d4b\u8bd5\u5de5\u5177</span>\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 package.json'},["code","\u251c\u2500\u2500 mock                     # \u672c\u5730\u6a21\u62df\u6570\u636e\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 favicon.ico          # Favicon\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.html           # HTML \u5165\u53e3\u6a21\u677f\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 common               # \u5e94\u7528\u516c\u7528\u914d\u7f6e\uff0c\u5982\u5bfc\u822a\u4fe1\u606f\n\u2502\xa0\xa0 \u251c\u2500\u2500 components           # \u4e1a\u52a1\u901a\u7528\u7ec4\u4ef6\n\u2502\xa0\xa0 \u251c\u2500\u2500 e2e                  # \u96c6\u6210\u6d4b\u8bd5\u7528\u4f8b\n\u2502\xa0\xa0 \u251c\u2500\u2500 layouts              # \u901a\u7528\u5e03\u5c40\n\u2502\xa0\xa0 \u251c\u2500\u2500 models               # dva model\n\u2502\xa0\xa0 \u251c\u2500\u2500 routes               # \u4e1a\u52a1\u9875\u9762\u5165\u53e3\u548c\u5e38\u7528\u6a21\u677f\n\u2502\xa0\xa0 \u251c\u2500\u2500 services             # \u540e\u53f0\u63a5\u53e3\u670d\u52a1\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils                # \u5de5\u5177\u5e93\n\u2502\xa0\xa0 \u251c\u2500\u2500 g2.js                # \u53ef\u89c6\u5316\u56fe\u5f62\u914d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 polyfill.js          # \u517c\u5bb9\u6027\u57ab\u7247\n\u2502\xa0\xa0 \u251c\u2500\u2500 theme.js             # \u4e3b\u9898\u914d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js             # \u5e94\u7528\u5165\u53e3\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.less           # \u5168\u5c40\u6837\u5f0f\n\u2502\xa0\xa0 \u2514\u2500\u2500 router.js            # \u8def\u7531\u5165\u53e3\n\u251c\u2500\u2500 tests                    # \u6d4b\u8bd5\u5de5\u5177\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 package.json"]],["h2","\u672c\u5730\u5f00\u53d1"],["p","\u5b89\u88c5\u4f9d\u8d56\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span>'},["code","$ npm install"]],["blockquote",["p","\u5982\u679c\u7f51\u7edc\u72b6\u51b5\u4e0d\u4f73\uff0c\u53ef\u4ee5\u4f7f\u7528 ",["a",{title:null,href:"https://cnpmjs.org/"},"cnpm"]," \u8fdb\u884c\u52a0\u901f\u3002"]],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> start'},["code","$ npm start"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/MfQCsjebComazCNfaJCD.png",width:"700"}]],["p","\u542f\u52a8\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee ",["a",{title:null,href:"http://localhost:8000"},"http://localhost:8000"],"\uff0c\u4f60\u770b\u5230\u4e0b\u9762\u7684\u9875\u9762\u5c31\u4ee3\u8868\u6210\u529f\u4e86\u3002"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png",width:"700",alt:"\u9996\u9875\u622a\u56fe"}]],["p","\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u4fee\u6539\u4ee3\u7801\u8fdb\u884c\u4e1a\u52a1\u5f00\u53d1\u4e86\uff0c\u6211\u4eec\u5185\u5efa\u4e86\u5178\u578b\u4e1a\u52a1\u6a21\u677f\u3001\u5e38\u7528\u4e1a\u52a1\u7ec4\u4ef6\u3001\u6a21\u62df\u6570\u636e\u3001HMR \u5b9e\u65f6\u9884\u89c8\u3001\u72b6\u6001\u7ba1\u7406\u3001\u56fd\u9645\u5316\u3001\u5168\u5c40\u8def\u7531\u7b49\u7b49\u5404\u79cd\u5b9e\u7528\u7684\u529f\u80fd\u8f85\u52a9\u5f00\u53d1\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u9605\u8bfb\u548c\u63a2\u7d22\u5de6\u4fa7\u7684\u5176\u4ed6\u6587\u6863\u3002"]],meta:{order:0,title:"\u5f00\u59cb\u4f7f\u7528",type:"\u5165\u95e8",filename:"docs/getting-started.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5",title:"\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u76ee\u5f55\u7ed3\u6784",title:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u672c\u5730\u5f00\u53d1",title:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"]]]}}});