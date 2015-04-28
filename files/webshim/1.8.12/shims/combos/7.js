jQuery.webshims.register("form-extend",function(b,d,j,m,t,k){j=j.Modernizr;t=j.inputtypes;if(j.formvalidation&&!d.bugs.bustedValidity){var e=d.inputTypes,s={};d.addInputType=function(a,g){e[a]=g};d.addValidityRule=function(a,g){s[a]=g};d.addValidityRule("typeMismatch",function(a,g,c,b){if(""===g)return!1;b=b.typeMismatch;if(!("type"in c))c.type=(a[0].getAttribute("type")||"").toLowerCase();e[c.type]&&e[c.type].mismatch&&(b=e[c.type].mismatch(g,a));return b});var o=k.overrideMessages,p=!t.number||
!t.time||!t.range||o,v="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),k=o?["value","checked"]:["value"],q=[],h=function(a,g){if(a){var c=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(o||e[c])o&&!g&&"radio"==c&&a.name?b(m.getElementsByName(a.name)).each(function(){b.prop(this,"validity")}):b.prop(a,"validity")}},r={};["input","textarea","select"].forEach(function(a){var g=d.defineNodeNameProperty(a,
"setCustomValidity",{prop:{value:function(c){var c=c+"",f="input"==a?b(this).getNativeElement()[0]:this;g.prop._supvalue.call(f,c);d.bugs.validationMessage&&d.data(f,"customvalidationMessage",c);p&&(d.data(f,"hasCustomError",!!c),h(f))}}});r[a]=g.prop._supvalue});if(p||o)k.push("min"),k.push("max"),k.push("step"),q.push("input");o&&(k.push("required"),k.push("pattern"),q.push("select"),q.push("textarea"));if(p){var u;q.forEach(function(a){var c=d.defineNodeNameProperty(a,"validity",{prop:{get:function(){if(!u){var f=
"input"==a?b(this).getNativeElement()[0]:this,l=c.prop._supget.call(f);if(!l)return l;var i={};v.forEach(function(a){i[a]=l[a]});if(!b.prop(f,"willValidate"))return i;u=!0;var k=b(f),n={type:(f.getAttribute&&f.getAttribute("type")||"").toLowerCase(),nodeName:(f.nodeName||"").toLowerCase()},x=k.val(),w=!!d.data(f,"hasCustomError"),h;u=!1;i.customError=w;if(i.valid&&i.customError)i.valid=!1;else if(!i.valid){var j=!0;b.each(i,function(a,c){if(c)return j=!1});if(j)i.valid=!0}b.each(s,function(c,g){i[c]=
g(k,x,n,i);if(i[c]&&(i.valid||!h)&&(o||e[n.type]&&e[n.type].mismatch))r[a].call(f,d.createValidationMessage(f,c)),i.valid=!1,h=!0});i.valid?(r[a].call(f,""),d.data(f,"hasCustomError",!1)):o&&!h&&!w&&b.each(i,function(c,g){if("valid"!==c&&g)return r[a].call(f,d.createValidationMessage(f,c)),!1});return i}},writeable:!1}})});k.forEach(function(a){d.onNodeNamesPropertyModify(q,a,function(){h(this)})});if(m.addEventListener){var f,l=function(a){if("form"in a.target){var c=a.target.form;clearTimeout(f);
h(a.target);c&&o&&b("input",c).each(function(){"password"==this.type&&h(this)})}};m.addEventListener("change",l,!0);o&&(m.addEventListener("blur",l,!0),m.addEventListener("keydown",function(a){13==a.keyCode&&l(a)},!0));m.addEventListener("input",function(a){clearTimeout(f);f=setTimeout(function(){h(a.target)},290)},!0)}var c=q.join(",");d.addReady(function(a,g){b(c,a).add(g.filter(c)).each(function(){b.prop(this,"validity")})});o&&d.ready("DOM form-message",function(){d.activeLang({register:"form-core",
callback:function(){b("input, select, textarea").getNativeElement().each(function(){if(!d.data(this,"hasCustomError")){var a=this,c=b.prop(a,"validity")||{valid:!0},f;c.valid||(f=(a.nodeName||"").toLowerCase(),b.each(c,function(c,g){if("valid"!==c&&g)return r[f].call(a,d.createValidationMessage(a,c)),!1}))}})}})})}d.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return d.inputTypes[a]?a:this.type}}});j.input.list&&!(b("<datalist><select><option></option></select></datalist>").prop("options")||
[]).length&&d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var a=this.options||[];if(!a.length){var c=b("select",this);if(c[0]&&c[0].options&&c[0].options.length)a=c[0].options}return a}}})}});
jQuery.webshims.register("form-number-date-api",function(b,d){var j,m,t;if(!d.getStep)d.getStep=function(f,d){var c=b.attr(f,"step");if("any"===c)return c;d=d||p(f);if(!e[d]||!e[d].step)return c;c=j.asNumber(c);return(!isNaN(c)&&0<c?c:e[d].step)*e[d].stepScaleFactor};if(!d.addMinMaxNumberToCache)d.addMinMaxNumberToCache=function(f,b,c){f+"AsNumber"in c||(c[f+"AsNumber"]=e[c.type].asNumber(b.attr(f)),isNaN(c[f+"AsNumber"])&&f+"Default"in e[c.type]&&(c[f+"AsNumber"]=e[c.type][f+"Default"]))};var k=
parseInt("NaN",10),e=d.inputTypes,s=function(f){return"number"==typeof f||f&&f==1*f},o=function(f){return b('<input type="'+f+'" />').prop("type")===f},p=function(f){return(f.getAttribute("type")||"").toLowerCase()},v=d.addMinMaxNumberToCache,q=function(f,b){for(var f=""+f,b=b-f.length,c=0;c<b;c++)f="0"+f;return f},h=d.bugs.valueAsNumberSet||d.bugs.bustedValidity;d.addValidityRule("stepMismatch",function(b,l,c,a){if(""===l)return!1;if(!("type"in c))c.type=p(b[0]);if("date"==c.type)return!1;a=(a||
{}).stepMismatch;if(e[c.type]&&e[c.type].step){if(!("step"in c))c.step=d.getStep(b[0],c.type);if("any"==c.step)return!1;if(!("valueAsNumber"in c))c.valueAsNumber=e[c.type].asNumber(l);if(isNaN(c.valueAsNumber))return!1;v("min",b,c);b=c.minAsNumber;isNaN(b)&&(b=e[c.type].stepBase||0);a=Math.abs((c.valueAsNumber-b)%c.step);a=!(1.0E-7>=a||1.0E-7>=Math.abs(a-c.step))}return a});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(b){d.addValidityRule(b.name,
function(d,c,a,g){g=(g||{})[b.name]||!1;if(""===c)return g;if(!("type"in a))a.type=p(d[0]);if(e[a.type]&&e[a.type].asNumber){if(!("valueAsNumber"in a))a.valueAsNumber=e[a.type].asNumber(c);if(isNaN(a.valueAsNumber))return!1;v(b.attr,d,a);if(isNaN(a[b.attr+"AsNumber"]))return g;g=a[b.attr+"AsNumber"]*b.factor<a.valueAsNumber*b.factor-1.0E-7}return g})});d.reflectProperties(["input"],["max","min","step"]);var r=d.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var f=p(this),f=e[f]&&
e[f].asNumber?e[f].asNumber(b.prop(this,"value")):r.prop._supget&&r.prop._supget.apply(this,arguments);null==f&&(f=k);return f},set:function(f){var l=p(this);e[l]&&e[l].numberToString?isNaN(f)?b.prop(this,"value",""):(l=e[l].numberToString(f),!1!==l?b.prop(this,"value",l):d.warn("INVALID_STATE_ERR: DOM Exception 11")):r.prop._supset&&r.prop._supset.apply(this,arguments)}}}),u=d.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var f=p(this);return e[f]&&e[f].asDate&&!e[f].noAsDate?
e[f].asDate(b.prop(this,"value")):u.prop._supget&&u.prop._supget.call(this)||null},set:function(f){var l=p(this);if(e[l]&&e[l].dateToString&&!e[l].noAsDate){if(null===f)return b.prop(this,"value",""),"";l=e[l].dateToString(f);if(!1!==l)return b.prop(this,"value",l),l;d.warn("INVALID_STATE_ERR: DOM Exception 11")}else return u.prop._supset&&u.prop._supset.apply(this,arguments)||null}}});j={mismatch:function(b){return!s(b)},step:1,stepScaleFactor:1,asNumber:function(b){return s(b)?1*b:k},numberToString:function(b){return s(b)?
b:!1}};m={minDefault:0,maxDefault:100};t={mismatch:function(f){if(!f||!f.split||!/\d$/.test(f))return!0;var d=f.split(/\u002D/);if(3!==d.length)return!0;var c=!1;b.each(d,function(a,b){if(!(s(b)||b&&b=="0"+1*b))return c=!0,!1});if(c)return c;if(4!==d[0].length||2!=d[1].length||12<d[1]||2!=d[2].length||33<d[2])c=!0;return f!==this.dateToString(this.asDate(f,!0))},step:1,stepScaleFactor:864E5,asDate:function(b,d){return!d&&this.mismatch(b)?null:new Date(this.asNumber(b,!0))},asNumber:function(b,d){var c=
k;if(d||!this.mismatch(b))b=b.split(/\u002D/),c=Date.UTC(b[0],b[1]-1,b[2]);return c},numberToString:function(b){return s(b)?this.dateToString(new Date(1*b)):!1},dateToString:function(b){return b&&b.getFullYear?b.getUTCFullYear()+"-"+q(b.getUTCMonth()+1,2)+"-"+q(b.getUTCDate(),2):!1}};if(h||!o("range")||!o("time"))m=b.extend({},j,m);(h||!o("number"))&&d.addInputType("number",j);(h||!o("range"))&&d.addInputType("range",m);(h||!o("date"))&&d.addInputType("date",t)});
jQuery.webshims.register("form-number-date-ui",function(b,d,j,m,t,k){var e=d.triggerInlineForm,s=Modernizr.inputtypes,o=function(){var b={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},a=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(g,d){var f,i,e;i="width";a&&(i=b[g.css(a)]||i);f=g[i]();i="width"==i;if(f){var n=parseInt(d.css("marginLeft"),10)||0,k=d.outerWidth();(e=parseInt(g.css("marginRight"),10)||0)&&g.css("marginRight",0);n<=-1*k?(d.css("marginRight",
Math.floor(Math.abs(k+n)+e)),g.css("paddingRight",(parseInt(g.css("paddingRight"),10)||0)+Math.abs(n)),i&&g.css("width",Math.floor(f+n))):(d.css("marginRight",e),g.css("width",Math.floor(f-n-k)))}}}(),p={},v=b([]),q,h=function(c,a){b("input",c).add(a.filter("input")).each(function(){var c=b.prop(this,"type");if(h[c]&&!d.data(this,"shadowData"))h[c](b(this))})},r=function(c,a){if(k.lazyDate){var g=b.data(c[0],"setDateLazyTimer");g&&clearTimeout(g);b.data(c[0],"setDateLazyTimer",setTimeout(function(){c.datepicker("setDate",
a);b.removeData(c[0],"setDateLazyTimer");c=null},0))}else c.datepicker("setDate",a)};if(k.lazyDate===t)try{k.lazyDate=b.browser.msie&&9>d.browserVersion||500>b(j).width()&&500>b(j).height()}catch(u){}var f={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!k.copyAttrs)k.copyAttrs={};d.extendUNDEFProp(k.copyAttrs,f);h.common=function(c,a,g){Modernizr.formvalidation&&c.bind("firstinvalid",function(b){(d.fromSubmit||!q)&&c.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",
function(a){!b.isInvalidUIPrevented()&&!a.isDefaultPrevented()&&(d.validityAlert.showFor(b.target),b.preventDefault(),a.preventDefault());c.unbind("invalid.replacedwidgetbubble")})});var e,h,i=b("input, span.ui-slider-handle",a),l=c[0].attributes;for(e in k.copyAttrs)if((h=l[e])&&h.specified)f[e]&&i[0]?i.attr(e,h.nodeValue):a[0].setAttribute(e,h.nodeValue);h=c.attr("id");e=k.calculateWidth?{css:{marginRight:c.css("marginRight"),marginLeft:c.css("marginLeft")},outerWidth:c.outerWidth()}:{};e.label=
h?b('label[for="'+h+'"]',c[0].form):v;h=d.getID(e.label);a.addClass(c[0].className);d.addShadowDom(c,a,{data:g||{},shadowFocusElement:b("input.input-datetime-local-date, span.ui-slider-handle",a)[0],shadowChilds:i});c.after(a).hide();c[0].form&&b(c[0].form).bind("reset",function(b){b.originalEvent&&!b.isDefaultPrevented()&&setTimeout(function(){c.prop("value",c.prop("value"))},0)});1==a.length&&!b("*",a)[0]&&(a.attr("aria-labelledby",h),e.label.bind("click",function(){a.focus();return!1}));return e};
Modernizr.formvalidation&&["input","form"].forEach(function(b){var a=d.defineNodeNameProperty(b,"checkValidity",{prop:{value:function(){q=!0;var b=a.prop._supvalue.apply(this,arguments);q=!1;return b}}})});if(!s.date||k.replaceUI){var l=function(c,a,g,f){var e,i,h=function(){n.dpDiv.unbind("mousedown.webshimsmousedownhandler");i=e=!1},n=a.bind("focusin",function(){h();n.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){e=!0})}).bind("focusout blur",
function(b){e&&(i=!0,b.stopImmediatePropagation())}).datepicker(b.extend(!0,{onClose:function(){i&&a.not(":focus")?(h(),a.trigger("focusout"),a.triggerHandler("blur")):h()}},p,k.datepicker,c.data("datepicker"))).bind("change",g).data("datepicker");n.dpDiv.addClass("input-date-datepicker-control");f&&d.triggerDomUpdate(f[0]);["disabled","min","max","value","step"].forEach(function(b){var a=c.prop(b);""!==a&&("disabled"!=b||!a)&&c.prop(b,a)});return n};h.date=function(c){if(b.fn.datepicker){var a=b('<input class="input-date" type="text" />'),
g=this.common(c,a,h.date.attrs),d=l(c,a,function(g){h.date.blockAttr=!0;var d;if(k.lazyDate){var f=b.data(a[0],"setDateLazyTimer");f&&(clearTimeout(f),b.removeData(a[0],"setDateLazyTimer"))}try{d=(d=b.datepicker.parseDate(a.datepicker("option","dateFormat"),a.prop("value")))?b.datepicker.formatDate("yy-mm-dd",d):a.prop("value")}catch(n){d=a.prop("value")}c.prop("value",d);h.date.blockAttr=!1;g.stopImmediatePropagation();e(c[0],"input");e(c[0],"change")});g.css&&(a.css(g.css),g.outerWidth&&a.outerWidth(g.outerWidth),
d.trigger[0]&&o(a,d.trigger))}};h.date.attrs={disabled:function(c,a,g){b.prop(a,"disabled",!!g)},min:function(c,a,g){try{g=b.datepicker.parseDate("yy-mm-dd",g)}catch(d){g=!1}g&&b(a).datepicker("option","minDate",g)},max:function(c,a,g){try{g=b.datepicker.parseDate("yy-mm-dd",g)}catch(d){g=!1}g&&b(a).datepicker("option","maxDate",g)},value:function(c,a,g){if(!h.date.blockAttr){try{var d=b.datepicker.parseDate("yy-mm-dd",g)}catch(f){d=!1}d?r(b(a),d):b.prop(a,"value",g)}}}}if(!s.range||k.replaceUI)h.range=
function(c){if(b.fn.slider){var a=b('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),d=this.common(c,a,h.range.attrs);b("span",a).attr("aria-labelledby",d.label.attr("id"));d.label.bind("click",function(){b("span",a).focus();return!1});d.css&&(a.css(d.css),d.outerWidth&&a.outerWidth(d.outerWidth));a.slider(b.extend(!0,{},k.slider,c.data("slider"))).bind("slide",function(b,a){if(b.originalEvent)h.range.blockAttr=!0,c.prop("value",a.value),h.range.blockAttr=
!1,e(c[0],"input"),e(c[0],"change")});["disabled","min","max","step","value"].forEach(function(a){var d=c.attr(a),g;"value"==a&&!d&&(g=c.getShadowElement())&&(d=(b(g).slider("option","max")-b(g).slider("option","min"))/2);null!=d&&c.attr(a,d)})}},h.range.attrs={disabled:function(c,a,d){d=!!d;b(a).slider("option","disabled",d);b("span",a).attr({"aria-disabled":d+"",tabindex:d?"-1":"0"})},min:function(c,a,d){d=d?1*d||0:0;b(a).slider("option","min",d);b("span",a).attr({"aria-valuemin":d})},max:function(c,
a,d){d=d||0===d?1*d||100:100;b(a).slider("option","max",d);b("span",a).attr({"aria-valuemax":d})},value:function(c,a,d){d=b(c).prop("valueAsNumber");isNaN(d)||(h.range.blockAttr||b(a).slider("option","value",d),b("span",a).attr({"aria-valuenow":d,"aria-valuetext":d}))},step:function(c,a,d){d=d&&b.trim(d)?1*d||1:1;b(a).slider("option","step",d)}};if(!d.bugs.valueAsNumberSet&&(k.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range))j=function(){d.data(this,"hasShadow")&&b.prop(this,"value",
b.prop(this,"value"))},d.onNodeNamesPropertyModify("input","valueAsNumber",j),d.onNodeNamesPropertyModify("input","valueAsDate",j);b.each(["disabled","min","max","value","step"],function(b,a){d.onNodeNamesPropertyModify("input",a,function(b){var c=d.data(this,"shadowData");if(c&&c.data&&c.data[a]&&c.nativeElement===this)c.data[a](this,c.shadowElement,b)})});if(!k.availabeLangs)k.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");
j=function(){b.datepicker&&(d.activeLang({langObj:b.datepicker.regional,module:"form-number-date-ui",callback:function(c){b("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",b.extend(!0,p,c,k.datepicker))}}),b(m).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};b(m).bind("jquery-uiReady.langchange input-widgetsReady.langchange",j);j();(function(){var c=function(){var a={};return function(c){return c in a?a[c]:a[c]=b('<input type="'+c+'" />')[0].type===
c}}();if(!c("number")){var a=d.cfg["forms-ext"],f=d.inputTypes,h=function(a,c,e){e=e||{};if(!("type"in e))e.type=b.prop(a,"type");if(!("step"in e))e.step=d.getStep(a,e.type);if(!("valueAsNumber"in e))e.valueAsNumber=f[e.type].asNumber(b.prop(a,"value"));var h="any"==e.step?f[e.type].step*f[e.type].stepScaleFactor:e.step;d.addMinMaxNumberToCache("min",b(a),e);d.addMinMaxNumberToCache("max",b(a),e);if(isNaN(e.valueAsNumber))e.valueAsNumber=f[e.type].stepBase||0;if("any"!==e.step&&(a=Math.round(1E7*
((e.valueAsNumber-(e.minAsnumber||0))%e.step))/1E7)&&Math.abs(a)!=e.step)e.valueAsNumber-=a;a=e.valueAsNumber+h*c;return a=!isNaN(e.minAsNumber)&&a<e.minAsNumber?e.valueAsNumber*c<e.minAsNumber?e.minAsNumber:isNaN(e.maxAsNumber)?e.valueAsNumber:e.maxAsNumber:!isNaN(e.maxAsNumber)&&a>e.maxAsNumber?e.valueAsNumber*c>e.maxAsNumber?e.maxAsNumber:isNaN(e.minAsNumber)?e.valueAsNumber:e.minAsNumber:Math.round(1E7*a)/1E7};d.modules["form-number-date-ui"].getNextStep=h;var k=function(a,c,d){if(!a.disabled&&
!a.readOnly&&!b(d).hasClass("step-controls")&&(b.prop(a,"value",f[c].numberToString(h(a,b(d).hasClass("step-up")?1:-1,{type:c}))),b(a).unbind("blur.stepeventshim"),e(a,"input"),m.activeElement)){if(m.activeElement!==a)try{a.focus()}catch(k){}setTimeout(function(){if(m.activeElement!==a)try{a.focus()}catch(c){}b(a).one("blur.stepeventshim",function(){e(a,"change")})},0)}};if(a.stepArrows){var i={set:function(){var b=d.data(this,"step-controls");if(b)b[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};
d.onNodeNamesPropertyModify("input","disabled",i);d.onNodeNamesPropertyModify("input","readonly",b.extend({},i))}var l={38:1,40:-1};d.addReady(function(i,j){a.stepArrows&&b("input",i).add(j.filter("input")).each(function(){var i=b.prop(this,"type");if(f[i]&&f[i].asNumber&&a.stepArrows&&!(!0!==a.stepArrows&&!a.stepArrows[i]||c(i)||b(j).hasClass("has-step-controls"))){var j=this,m=b('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(j).bind("selectstart dragstart",
function(){return!1}).bind("mousedown mousepress",function(b){k(j,i,b.target);return!1}).bind("mousepressstart mousepressend",function(a){b(a.target)["mousepressstart"==a.type?"addClass":"removeClass"]("mousepress-ui")}),p=function(a,c){if(!j.disabled&&!j.readOnly)return b.prop(j,"value",f[i].numberToString(h(j,c,{type:i}))),e(j,"input"),!1},n=b(j).addClass("has-step-controls").attr({readonly:j.readOnly,disabled:j.disabled,autocomplete:"off",role:"spinbutton"}).bind(b.browser.msie?"keydown":"keypress",
function(a){if(!j.disabled&&!j.readOnly&&l[a.keyCode])return b.prop(j,"value",f[i].numberToString(h(j,l[a.keyCode],{type:i}))),e(j,"input"),!1});b.fn.mwheelIntent?n.add(m).bind("mwheelIntent",p):n.bind("focus",function(){n.add(m).unbind(".mwhellwebshims").bind("mousewheel.mwhellwebshims",p)}).bind("blur",function(){b(j).add(m).unbind(".mwhellwebshims")});d.data(j,"step-controls",m);a.calculateWidth&&(o(n,m),m.css("marginTop",(n.outerHeight()-m.outerHeight())/2))}})})}})();d.addReady(function(c,a){b(m).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(b.datepicker||b.fn.slider){if(b.datepicker&&!p.dateFormat)p.dateFormat=b.datepicker._defaults.dateFormat;h(c,a)}b.datepicker&&b.fn.slider?b(m).unbind(".initinputui"):d.modules["input-widgets"].src||d.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
