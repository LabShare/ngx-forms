!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ngxForms=t():e.ngxForms=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=require("@angular/core")},function(e,t){e.exports=require("@angular/forms")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){this.components={}}return e.prototype.addField=function(e,t){if(!e||!e.length)throw new Error("Failed to add new component. Type is incorrent, Type value: "+e);if(!t)throw new Error("Failed to add new component. Component is undefined");this.components[e]=t},e.prototype.getField=function(e){if(!this.components[e]){var t=Object.keys(this.components).join(", ");throw new Error('Trying to use an unsupported field type "'+e+'". Supported types: '+t)}return this.components[e]},e=o([r.Injectable()],e)}();t.DynamicFieldService=i},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var c;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var c=e[r];"number"==typeof c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t,n){var o,r,i={},c=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),l=null,s=0,f=[],d=n(24);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var c=0;c<r.parts.length;c++)r.parts[c](o.parts[c]);for(;c<o.parts.length;c++)r.parts.push(b(o.parts[c],t))}else{var a=[];for(c=0;c<o.parts.length;c++)a.push(b(o.parts[c],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[c]?o[c].parts.push(a):n.push(o[c]={id:c,parts:[a]})}return n}function m(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return y(t,e.attrs),m(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=l||(l=h(t)),o=O.bind(null,n,c,!1),r=O.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var c=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return u(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var c=n[r];(a=i[c.id]).refs--,o.push(a)}e&&u(p(e,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var g,j=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function O(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=j(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){this.fields={}}return e.prototype.getField=function(e){if(!this.fields.hasOwnProperty(e))throw new Error("Can't find field name: "+e+", please check config file!");return this.fields[e]},e.prototype.addFields=function(e){var t=this;e.forEach(function(e){return t.fields[e.name]=e})},e=o([r.Injectable()],e)}();t.FieldConfigService=i},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){this.selected=0,this.groups=[],this.watchers=[]}return e.prototype.add=function(e){var t=this;this.groups.push(e),this.groups.length>1&&(e.hidden=!0),this.watchers.forEach(function(e){return e.groups=t.groups})},e.prototype.select=function(e){this.groups.forEach(function(e){e.hidden=!0}),this.groups[e].hidden=!1,this.selected=e},e.prototype.reset=function(){this.groups.forEach(function(e){e.hidden=!1}),this.groups=[],this.selected=0},e.prototype.addWatcher=function(e){this.watchers.push(e)},e.prototype.getAllGroups=function(){return this.groups},e=o([r.Injectable()],e)}();t.FormNavService=i},function(e,t){e.exports=require("@angular/common")},,function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(16),a=n(18),l=n(20),s=n(25),f=n(27),d=n(29),u=n(31),p=n(33),m=n(2),v=function(){function e(e){this.dynamicFieldService=e,this.dynamicFieldService.addField("text",c.FormInputComponent),this.dynamicFieldService.addField("select",a.FormSelectComponent),this.dynamicFieldService.addField("editor",l.FormTextEditorComponent),this.dynamicFieldService.addField("textarea",d.FormTextareaComponent),this.dynamicFieldService.addField("hidden",u.FormInputHiddenComponent),this.dynamicFieldService.addField("radio",f.FormRadioComponent),this.dynamicFieldService.addField("checkbox",s.FormCheckboxComponent),this.dynamicFieldService.addField("label",p.FormLabelComponent)}var t;return e=o([i.Injectable(),r("design:paramtypes",["function"==typeof(t=void 0!==m.DynamicFieldService&&m.DynamicFieldService)&&t||Object])],e)}();t.PreloadService=v,t.Components=[c.FormInputComponent,a.FormSelectComponent,l.FormTextEditorComponent,d.FormTextareaComponent,u.FormInputHiddenComponent,f.FormRadioComponent,s.FormCheckboxComponent,p.FormLabelComponent]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(11),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(12))},function(e,t){e.exports=require("reflect-metadata")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(7),c=n(1),a=n(13),l=n(14),s=n(35),f=n(39),d=n(43),u=n(49),p=n(50),m=n(2);t.DynamicFieldService=m.DynamicFieldService;var v=n(9),h=n(5),y=function(){function e(){}return e=o([r.NgModule({imports:[i.CommonModule,p.BrowserAnimationsModule,c.ReactiveFormsModule,c.FormsModule,a.QuillModule,u.TagInputModule,d.FormNavModule],declarations:[v.Components,l.DynamicFieldDirective,s.DynamicFormComponent,f.DynamicPanelComponent],exports:[s.DynamicFormComponent],entryComponents:[v.Components],providers:[m.DynamicFieldService,v.PreloadService,h.FieldConfigService],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.NgxFormModule=y},function(e,t){e.exports=require("ngx-quill")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),a=n(1),l=n(15),s=n(2),f=n(9),d=function(){function e(e,t,n,o,r){this.parent=e,this.resolver=t,this.container=n,this.dynamicFieldService=o,this.preloadService=r}var t,n,d,u,p,m,v;return e.prototype.ngOnChanges=function(){this.component&&(this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model)},e.prototype.ngOnInit=function(){var e=this.dynamicFieldService.getField(this.field.type),t=this.resolver.resolveComponentFactory(e);this.component=this.container.createComponent(t),this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.model=this.model},e.prototype.ngOnDestroy=function(){this.component&&this.component.destroy()},o([c.Input(),r("design:type","function"==typeof(t=void 0!==l.IFieldConfig&&l.IFieldConfig)&&t||Object)],e.prototype,"field",void 0),o([c.Input(),r("design:type","function"==typeof(n=void 0!==a.FormGroup&&a.FormGroup)&&n||Object)],e.prototype,"group",void 0),o([c.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=o([c.Directive({selector:"[dynamicField]"}),i(0,c.Optional()),i(0,c.Host()),i(0,c.SkipSelf()),r("design:paramtypes",["function"==typeof(d=void 0!==a.ControlContainer&&a.ControlContainer)&&d||Object,"function"==typeof(u=void 0!==c.ComponentFactoryResolver&&c.ComponentFactoryResolver)&&u||Object,"function"==typeof(p=void 0!==c.ViewContainerRef&&c.ViewContainerRef)&&p||Object,"function"==typeof(m=void 0!==s.DynamicFieldService&&s.DynamicFieldService)&&m||Object,"function"==typeof(v=void 0!==f.PreloadService&&f.PreloadService)&&v||Object])],e)}();t.DynamicFieldDirective=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-input",template:n(17)})],e)}();t.FormInputComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <input type="text" class="form-control" [attr.placeholder]="field.placeholder" [formControlName]="field.name">\n    </div>\n</div>\n'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-select",template:n(19)})],e)}();t.FormSelectComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <select [formControlName]="field.name" class="form-control">\n            <option *ngFor="let option of field.options" [ngValue]="option">{{option}}</option>\n        </select>\n    </div>\n</div>'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),c=function(){function e(){this.quillToolbar={toolbar:["bold","italic","underline","strike",{header:1},{header:2},{list:"ordered"},{list:"bullet"},"blockquote","code-block","link"]}}var t;return t=e,e=t=o([r.Component({selector:"form-text-editor",template:n(21),styles:[n(22).toString()],providers:[{provide:i.NG_VALUE_ACCESSOR,useExisting:r.forwardRef(function(){return t}),multi:!0}]})],e)}();t.FormTextEditorComponent=c},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10 editor-container">\n        <quill-editor [modules]="quillToolbar" [formControlName]="field.name"></quill-editor>\n    </div>\n</div>'},function(e,t,n){var o=n(23);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"form-text-editor .editor-container {\n  margin-bottom: 40px; }\n\nform-text-editor .ql-container.ql-disabled {\n  background-color: #e9ecef; }\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-checkbox",template:n(26)})],e)}();t.FormCheckboxComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <input type="checkbox" class="form-control" [formControlName]="field.name">\n    </div>\n</div>\n'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-radio",template:n(28)})],e)}();t.FormRadioComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <label *ngFor="let item of field.options">\n            <input type="radio" [value]="item" [formControlName]="field.name">{{item}}\n        </label>\n    </div>\n</div>'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-textarea",template:n(30)})],e)}();t.FormTextareaComponent=i},function(e,t){e.exports='<div class="row" [formGroup]="group">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span class="required-icon" [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <textarea class="form-control" rows="3" [attr.placeholder]="field.placeholder" [formControlName]="field.name"></textarea>\n    </div>\n</div>'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-hidden",template:n(32)})],e)}();t.FormInputHiddenComponent=i},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <input type="hidden" class="form-control" [formControlName]="field.name">\n</ng-container>\n'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e=o([r.Component({selector:"form-label",template:n(34)})],e)}();t.FormLabelComponent=i},function(e,t){e.exports='<div class="row">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}</label>\n    <div class="col-md-10">\n        <span>{{group.value[this.field.name]}}</span>\n    </div>\n</div>'},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(1),a=n(2),l=n(5),s=function(){function e(e,t,n){this.fb=e,this.dynamicFieldService=t,this.fieldConfigService=n}var t,s,f;return Object.defineProperty(e.prototype,"controls",{get:function(){return this.formConfig.fields.filter(function(e){return"button"!==e.type})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"changes",{get:function(){return this.form.valueChanges},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;this.form=this.fb.group({}),this.controls.forEach(function(t){e.form.addControl(t.name,e.createControl(t))}),this.model&&this.form.patchValue(this.model),this.formConfig.fields.forEach(function(t){t.lookup&&e.lookups.hasOwnProperty(t.lookup)&&(t.options=e.lookups[t.lookup],t.extract&&(t.options=t.options.map(function(e){return e[t.extract]})))}),this.fieldConfigService.addFields(this.formConfig.fields)},e.prototype.ngOnChanges=function(){var e=this;if(this.form){var t=Object.keys(this.form.controls),n=this.controls.map(function(e){return e.name});t.filter(function(e){return!n.includes(e)}).forEach(function(t){return e.form.removeControl(t)}),n.filter(function(e){return!t.includes(e)}).forEach(function(t){var n=e.formConfig.fields.find(function(e){return e.name===t});e.form.addControl(t,e.createControl(n))})}},e.prototype.createControl=function(e){var t=e.disabled,n=e.required,o=e.minLength,r=e.maxLength,i=e.email,a=e.min,l=e.max,s=e.pattern,f=e.value,d=[];return void 0!==n&&n&&d.push(c.Validators.required),void 0!==o&&d.push(c.Validators.minLength(o)),void 0!==r&&d.push(c.Validators.maxLength(r)),void 0!==i&&d.push(c.Validators.email),void 0!==a&&d.push(c.Validators.min(a)),void 0!==l&&d.push(c.Validators.max(l)),void 0!==s&&d.push(c.Validators.pattern(s)),this.fb.control({disabled:t,value:f},d)},e.prototype.setValue=function(e,t){this.form.controls[e].setValue(t,{emitEvent:!0})},o([i.Input(),r("design:type",Object)],e.prototype,"formConfig",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"dataProvider",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"lookups",void 0),e=o([i.Component({exportAs:"dynamicForm",selector:"dynamic-form",template:n(36),styles:[n(37).toString()]}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormBuilder&&c.FormBuilder)&&t||Object,"function"==typeof(s=void 0!==a.DynamicFieldService&&a.DynamicFieldService)&&s||Object,"function"==typeof(f=void 0!==l.FieldConfigService&&l.FieldConfigService)&&f||Object])],e)}();t.DynamicFormComponent=s},function(e,t){e.exports='<div class="row">\n    <div class="col-md-2">\n        <form-nav></form-nav>\n    </div>\n    <div class="col-md-10" [formGroup]="form">\n        <div *ngFor="let group of formConfig.form" [navTab]="group">\n\n            <ng-container *ngIf="group.fields">\n                <dynamic-panel [panelConfig]="group" [group]="form" [model]="model" [hidden]="group.hidden"></dynamic-panel>\n            </ng-container>\n\n            <ng-container *ngIf="group.panels">\n                <dynamic-panel *ngFor="let panelConfig of group.panels" [panelConfig]="panelConfig" [group]="form"\n                    [model]="model" [hidden]="group.hidden"></dynamic-panel>\n            </ng-container>\n        </div>\n    </div>\n</div>'},function(e,t,n){var o=n(38);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".required-icon {\n  color: red; }\n",""])},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(5),a=function(){function e(e){this.fcs=e}var t;return e.prototype.getFieldConfig=function(e){return this.fcs.getField(e)},o([i.Input(),r("design:type",Object)],e.prototype,"panelConfig",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"group",void 0),o([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),e=o([i.Component({selector:"dynamic-panel",template:n(40),styles:[n(41).toString()]}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FieldConfigService&&c.FieldConfigService)&&t||Object])],e)}();t.DynamicPanelComponent=a},function(e,t){e.exports='<div class="card mb-3" [formGroup]="group">\n    <div class="card-header" *ngIf="panelConfig.label">\n        {{panelConfig.label}}\n    </div>\n    <div class="card-body">\n        <div *ngFor="let field of panelConfig.fields" dynamicField [field]="getFieldConfig(field)" [group]="group" [model]="model" class="mb-2"Ï></div>\n    </div>\n</div>'},function(e,t,n){var o=n(42);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"dynamic-panel .panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  dynamic-panel .panel .panel-heading {\n    color: #333;\n    background-color: #f5f5f5;\n    padding: 10px 15px;\n    border-bottom: 1px solid #ddd;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  dynamic-panel .panel .panel-body {\n    padding: 15px; }\n",""])},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(44),c=n(48),a=n(6),l=n(7),s=function(){function e(){}return e=o([r.NgModule({imports:[l.CommonModule],declarations:[i.FormNavComponent,c.NavDirective],exports:[i.FormNavComponent,c.NavDirective],providers:[a.FormNavService],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.FormNavModule=s},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(6),a=function(){function e(e){this.ns=e,this.ref={groups:[]},e.addWatcher(this.ref)}var t;return e.prototype.select=function(e){this.ns.select(e)},e.prototype.getSelected=function(){return this.ns.selected},e.prototype.prev=function(){this.select(this.ns.selected-1)},e.prototype.next=function(){this.select(this.ns.selected+1)},e.prototype.disablePrev=function(){return this.ns.selected<1},e.prototype.disableNext=function(){return this.ns.selected>this.ref.groups.length-2},e.prototype.ngOnDestroy=function(){this.ns.reset()},e=o([i.Component({selector:"form-nav",template:n(45),styles:[n(46).toString()]}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormNavService&&c.FormNavService)&&t||Object])],e)}();t.FormNavComponent=a},function(e,t){e.exports='<ul class="list-group mb-3">\n    <ng-container *ngFor="let item of ref.groups; let itemIndex = index">\n        <a class="list-group-item" [class.active]=\'itemIndex === getSelected()\' (click)="select(itemIndex)">{{item.label}}</a>\n    </ng-container>\n</ul>\n\n<div class="card">\n    <div class="card-body">\n        <div class="col-lg-12" ng-hide="!tab">\n            <button type="button" class="btn btn-primary ml-1" [disabled]="disablePrev()" (click)="prev()" title="Previous">Previous</button>\n            <button type="button" class="btn btn-primary ml-1" [disabled]="disableNext()" (click)="next()" title="Next">Next</button>\n        </div>\n    </div>\n</div>'},function(e,t,n){var o=n(47);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(6),a=function(){function e(e){this.navService=e}var t;return e.prototype.ngOnInit=function(){this.group.static||this.navService.add(this.group)},o([i.Input("navTab"),r("design:type",Object)],e.prototype,"group",void 0),e=o([i.Directive({selector:"[navTab]"}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormNavService&&c.FormNavService)&&t||Object])],e)}();t.NavDirective=a},function(e,t){e.exports=require("ngx-chips")},function(e,t){e.exports=require("@angular/platform-browser/animations")}])});