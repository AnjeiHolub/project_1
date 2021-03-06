function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function tabsTmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"components\u002Ftabs\u002Ftabs.tmpl.pug":"div.tabs\n  each item, index in items\n    case index\n      when indexDisplayTab\n        input(id=index type=\"radio\" name=\"list\" checked)\n        label(for=index title=item.title)=item.title\n      default\n        input(id=index type=\"radio\" name=\"list\")\n        label(for=index title=item.title)=item.title\n  input(id=\"tab__add\" type=\"radio\" name=\"list__add\")\n  label(for=\"tab__add\")\n    i(class=\"fa fa-plus-square\" aria-hidden=\"true\")\n\n\n"};
;var locals_for_with = (locals || {});(function (indexDisplayTab, items) {;pug_debug_line = 1;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"tabs\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var item = $$obj[index];
;pug_debug_line = 3;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
switch (index){
case indexDisplayTab:
;pug_debug_line = 5;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("id", index, true, false)+" type=\"radio\" name=\"list\" checked=\"checked\"") + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", index, true, false)+pug_attr("title", item.title, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  break;
default:
;pug_debug_line = 8;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("id", index, true, false)+" type=\"radio\" name=\"list\"") + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", index, true, false)+pug_attr("title", item.title, true, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var item = $$obj[index];
;pug_debug_line = 3;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
switch (index){
case indexDisplayTab:
;pug_debug_line = 5;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("id", index, true, false)+" type=\"radio\" name=\"list\" checked=\"checked\"") + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", index, true, false)+pug_attr("title", item.title, true, false)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  break;
default:
;pug_debug_line = 8;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("id", index, true, false)+" type=\"radio\" name=\"list\"") + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", index, true, false)+pug_attr("title", item.title, true, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  break;
}
    }
  }
}).call(this);

;pug_debug_line = 10;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Cinput id=\"tab__add\" type=\"radio\" name=\"list__add\"\u002F\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Clabel for=\"tab__add\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "components\u002Ftabs\u002Ftabs.tmpl.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-plus-square\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";}.call(this,"indexDisplayTab" in locals_for_with?locals_for_with.indexDisplayTab:typeof indexDisplayTab!=="undefined"?indexDisplayTab:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}