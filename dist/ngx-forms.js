!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ngxForms=t():e.ngxForms=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=38)}([function(e,t){e.exports=require("@angular/core")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0);o(17);var i=function(){function e(){}return e.prototype.set=function(e){this.dataProvider=e},e.prototype.get=function(e){if(!this.dataProvider[e])throw new Error('Data Provider with name "'+e+'" was not found');return this.dataProvider[e]},e=n([r.Injectable()],e)}();t.DataService=i},function(e,t){e.exports=require("@angular/forms")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(o,n){t(o,n,e)}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),a=function(){function e(e){this.customComponents={},this.factoryResolver=e}return e.prototype.setRootViewContainerRef=function(e){this.rootViewContainer=e},e.prototype.addDynamicComponent=function(e){var t=this.factoryResolver.resolveComponentFactory(e).create(this.rootViewContainer.parentInjector);return this.rootViewContainer.insert(t.hostView),t},e.prototype.storeCustomComponent=function(e,t){this.customComponents[e]=t},e.prototype.getCustomComponent=function(e){return this.customComponents[e]||null},e=n([c.Injectable(),i(0,c.Inject(c.ComponentFactoryResolver)),r("design:paramtypes",[Object])],e)}();t.DynamicFieldService=a},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(19);o(18);var a=o(1),l=function(){function e(e){var t=this;this.dataService=e,this.emitModelChange=new i.EventEmitter,this.requestAutocompleteItems=function(e){var o=t.provider[t.field.providerMethod](e);return c.Observable.fromPromise(o)}}var t;return e.prototype.ngOnInit=function(){var e=this;this.group.controls[this.field.name].value&&this.group.controls[this.field.name].value.forEach(function(t){t.display||(t.display=t[e.field.settings.displayBy],t.value=t[e.field.settings.identifyBy])}),this.provider=this.dataService.get(this.field.provider)},e.prototype.change=function(e){this.emitModelChange.emit(this.emitModel)},e.prototype.isShow=function(){return!this.field.hidden},n([i.Input(),r("design:type",Boolean)],e.prototype,"typeaheadOnly",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"emitModel",void 0),n([i.Input(),r("design:type",Number)],e.prototype,"maxItems",void 0),n([i.Output(),r("design:type",Object)],e.prototype,"emitModelChange",void 0),e=n([i.Component({selector:"form-user",template:o(16)}),r("design:paramtypes",["function"==typeof(t=void 0!==a.DataService&&a.DataService)&&t||Object])],e)}();t.FormUserComponent=l},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e=n([r.Component({selector:"form-hidden",template:o(20)})],e)}();t.FormInputHidden=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e.prototype.isShow=function(){return!this.field.hidden},e=n([r.Component({selector:"form-textarea",template:o(21)})],e)}();t.FormTextareaComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){this.radioMap={}}return e.prototype.isShow=function(){return!this.field.hidden},e.prototype.onSelectionChange=function(e){var t=this,o=this.field.name,n=!1;e||(e=this.radioMap[o],n=!0),this.fields.forEach(function(r){r.name===e&&(r.hidden=n,t.radioMap[o]=e)})},e=n([r.Component({selector:"form-radio",template:o(23)})],e)}();t.FormRadioComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e.prototype.isShow=function(){return!this.field.hidden},e=n([r.Component({selector:"form-checkbox",template:o(24)})],e)}();t.FormCheckboxComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){this.quillToolbar={toolbar:["bold","italic","underline","strike",{header:1},{header:2},{list:"ordered"},{list:"bullet"},"blockquote","code-block","link"]}}return e.prototype.isShow=function(){return!this.field.hidden},e=n([r.Component({selector:"form-text-editor",template:o(30),styles:[o(29).toString()]})],e)}();t.FormTextEditorComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e.prototype.isShow=function(){return!this.field.hidden},e=n([r.Component({selector:"form-select",template:o(31)})],e)}();t.FormSelectComponent=i},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(){function e(){}return e.prototype.isShow=function(){return!this.field.hidden},e=n([r.Component({selector:"form-input",template:o(32)})],e)}();t.FormInputComponent=i},function(e,t){e.exports=require("@angular/platform-browser/animations")},function(e,t){e.exports=require("ngx-chips")},function(e,t){e.exports='\x3c!-- <form class="dynamic-form" [formGroup]="form" (submit)="handleSubmit($event)"> --\x3e\n<form class="dynamic-form" [formGroup]="form">\n    <ng-container *ngFor="let field of config;" dynamicField [field]="field" [fields]="config" [group]="form">\n    </ng-container>\n</form>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(2),a=o(1),l=function(){function e(e,t){this.fb=e,this.dataService=t,this.config=[]}var t,l;return Object.defineProperty(e.prototype,"controls",{get:function(){return this.config.filter(function(e){return"button"!==e.type})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"changes",{get:function(){return this.form.valueChanges},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.dataService.set(this.dataProvider),this.form=this.createGroup(),this.model&&this.form.patchValue(this.model)},e.prototype.ngOnChanges=function(){var e=this;if(this.form){var t=Object.keys(this.form.controls),o=this.controls.map(function(e){return e.name});t.filter(function(e){return!o.includes(e)}).forEach(function(t){return e.form.removeControl(t)}),o.filter(function(e){return!t.includes(e)}).forEach(function(t){var o=e.config.find(function(e){return e.name===t});e.form.addControl(t,e.createControl(o))})}},e.prototype.createGroup=function(){var e=this,t=this.fb.group({});return this.controls.forEach(function(o){o.custom||t.addControl(o.name,e.createControl(o))}),t},e.prototype.createControl=function(e){var t=e.disabled,o=e.required,n=e.minLength,r=e.maxLength,i=e.email,a=e.min,l=e.max,s=e.pattern,f=e.nullValidator,u=e.value,d=[];return void 0!=o&&o&&d.push(c.Validators.required),void 0!=n&&d.push(c.Validators.minLength(n)),void 0!=r&&d.push(c.Validators.maxLength(r)),void 0!=i&&d.push(c.Validators.email),void 0!=a&&d.push(c.Validators.min(a)),void 0!=l&&d.push(c.Validators.max(l)),void 0!=s&&d.push(c.Validators.pattern(s)),void 0!=f&&d.push(c.Validators.nullValidator),this.fb.control({disabled:t,value:u},d)},e.prototype.setDisabled=function(e,t){if(this.form.controls[e]){var o=t?"disable":"enable";this.form.controls[e][o]()}else this.config=this.config.map(function(o){return o.name===e&&(o.disabled=t),o})},e.prototype.setValue=function(e,t){this.form.controls[e].setValue(t,{emitEvent:!0})},n([i.Input(),r("design:type",Array)],e.prototype,"config",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"model",void 0),n([i.Input(),r("design:type",Object)],e.prototype,"dataProvider",void 0),e=n([i.Component({exportAs:"dynamicForm",selector:"dynamic-form",template:o(14)}),r("design:paramtypes",["function"==typeof(t=void 0!==c.FormBuilder&&c.FormBuilder)&&t||Object,"function"==typeof(l=void 0!==a.DataService&&a.DataService)&&l||Object])],e)}();t.DynamicFormComponent=l},function(e,t){e.exports='<div class="form-group row" [formGroup]="group" *ngIf="isShow()">\n    <label class="col-md-2 font-weight-bold col-form-label">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <tag-input [theme]="\'bootstrap\'" [formControlName]="field.name" name="items" [onlyFromAutocomplete]="true">\n            <tag-input-dropdown [autocompleteObservable]=\'requestAutocompleteItems\' [identifyBy]="field.settings.identifyBy" [displayBy]="field.settings.displayBy"\n                [focusFirstElement]="true">\n                <ng-template let-item="item" let-index="index">\n                    {{ item[field.settings.displayBy] }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n</div>\n'},function(e,t){e.exports=require("rxjs/add/operator/toPromise")},function(e,t){e.exports=require("rxjs/add/observable/fromPromise")},function(e,t){e.exports=require("rxjs/Observable")},function(e,t){e.exports='<ng-container [formGroup]="group">\n    <input type="hidden" class="form-control" [formControlName]="field.name">\n</ng-container>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group" *ngIf="isShow()">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <textarea class="form-control" rows="3" [attr.placeholder]="field.placeholder" [formControlName]="field.name"></textarea>\n    </div>\n</div>\n'},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t){e.exports='<div class="form-group row" [formGroup]="group" *ngIf="isShow()">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}</label>\n    <div class="col-md-10">\n      <label  *ngFor="let item of field.options">\n        <input type="radio"  [value]="item.value" [formControlName]="field.name" (change)=onSelectionChange(item.ref)>{{item.value}}\n      </label>\n    </div>\n</div>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group" *ngIf="isShow()">\n  <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}</label>\n  <div class="col-md-10 container">\n    <label class="row" *ngFor="let item of field.options">\n      <input type="checkbox" [formControlName]="field.name">{{item.value}}\n    </label>\n  </div>\n</div>\n'},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){var n={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),c=null,a=0,l=[],s=o(25);function f(e,t){for(var o=0;o<e.length;o++){var r=e[o],i=n[r.id];if(i){i.refs++;for(var c=0;c<i.parts.length;c++)i.parts[c](r.parts[c]);for(;c<r.parts.length;c++)i.parts.push(v(r.parts[c],t))}else{var a=[];for(c=0;c<r.parts.length;c++)a.push(v(r.parts[c],t));n[r.id]={id:r.id,refs:1,parts:a}}}}function u(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[c]?n[c].parts.push(a):o.push(n[c]={id:c,parts:[a]})}return o}function d(e,t){var o=i(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),l.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertInto+" "+e.insertAt.before);o.insertBefore(t,r)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function v(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=a++;o=c||(c=m(t)),n=b.bind(null,o,l,!1),r=b.bind(null,o,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=s(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var c=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,o,t),r=function(){p(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){p(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=u(e,t);return f(o,t),function(e){for(var r=[],i=0;i<o.length;i++){var c=o[i];(a=n[c.id]).refs--,r.push(a)}e&&f(u(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete n[a.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}();function b(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var c=e[r];"number"==typeof c[0]&&n[c[0]]||(o&&!c[2]?c[2]=o:o&&(c[2]="("+c[2]+") and ("+o+")"),t.push(c))}},t}},function(e,t,o){(e.exports=o(27)(!1)).push([e.i,"form-text-editor .editor-container {\n  margin-bottom: 40px; }\n",""])},function(e,t,o){var n=o(28);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(26)(n,r);n.locals&&(e.exports=n.locals)},function(e,t){e.exports='<div class="form-group row" [formGroup]="group" *ngIf="isShow()">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group" required>{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10 editor-container">\n        <quill-editor [modules]="quillToolbar" [formControlName]="field.name"></quill-editor>\n    </div>\n</div>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group" *ngIf="isShow()">\n    <label class="col-md-2 font-weight-bold col-form-label" for="group">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <select [formControlName]="field.name" class="form-control">\n            <option *ngFor="let option of field.options" [ngValue]="option">{{option}}</option>\n        </select>\n    </div>\n</div>\n'},function(e,t){e.exports='<div class="form-group row" [formGroup]="group" *ngIf="isShow()">\n    <label class="col-md-2 font-weight-bold  col-form-label">{{field.label}}\n        <span [hidden]="!field.required">*</span>\n    </label>\n    <div class="col-md-10">\n        <input type="text" class="form-control" [attr.placeholder]="field.placeholder" [formControlName]="field.name">\n    </div>\n</div>\n'},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),c=o(2),a=o(11),l=o(10),s=o(9),f=o(8),u=o(7),d=o(22),p=o(6),m=o(5),h=o(4),v=o(3),y={text:a.FormInputComponent,select:l.FormSelectComponent,editor:s.FormTextEditorComponent,textarea:p.FormTextareaComponent,hidden:m.FormInputHidden,user:h.FormUserComponent,radio:u.FormRadioComponent,checkbox:f.FormCheckboxComponent},b=function(){function e(e,t,o){this.resolver=e,this.container=t,this.dynamicFieldService=o}var t,o,a,l,s;return e.prototype.loadComponent=function(){if(this.field.custom)try{var e=this.dynamicFieldService.getCustomComponent(this.field.type);this.component=this.dynamicFieldService.addDynamicComponent(e),this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.fields=this.fields}catch(e){throw new Error("Can't build custom component field \""+this.field.type+'"')}else{if(!y[this.field.type]){var t=Object.keys(y).join(", ");throw new Error("Trying to use an unsupported type ("+this.field.type+").Supported types: "+t)}this.component=this.dynamicFieldService.addDynamicComponent(y[this.field.type]),this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.fields=this.fields}},e.prototype.ngOnChanges=function(){this.component&&(this.component.instance.field=this.field,this.component.instance.group=this.group,this.component.instance.fields=this.fields)},e.prototype.ngOnInit=function(){this.dynamicFieldService.setRootViewContainerRef(this.container),this.loadComponent()},n([i.Input(),r("design:type","function"==typeof(t=void 0!==d.FieldConfig&&d.FieldConfig)&&t||Object)],e.prototype,"field",void 0),n([i.Input(),r("design:type","function"==typeof(o=void 0!==c.FormGroup&&c.FormGroup)&&o||Object)],e.prototype,"group",void 0),n([i.Input(),r("design:type",Array)],e.prototype,"fields",void 0),e=n([i.Directive({selector:"[dynamicField]"}),r("design:paramtypes",["function"==typeof(a=void 0!==i.ComponentFactoryResolver&&i.ComponentFactoryResolver)&&a||Object,"function"==typeof(l=void 0!==i.ViewContainerRef&&i.ViewContainerRef)&&l||Object,"function"==typeof(s=void 0!==v.DynamicFieldService&&v.DynamicFieldService)&&s||Object])],e)}();t.DynamicFieldDirective=b},function(e,t){e.exports=require("ngx-quill")},function(e,t){e.exports=require("@angular/common")},function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(35),c=o(2),a=o(34),l=o(33),s=o(15),f=o(11),u=o(10),d=o(6),p=o(9),m=o(5),h=o(4),v=o(7),y=o(8),b=o(13),g=o(12),j=o(1);t.DataService=j.DataService;var C=o(3);t.DynamicFieldService=C.DynamicFieldService;var O=function(){function e(){}return e=n([r.NgModule({imports:[i.CommonModule,g.BrowserAnimationsModule,c.ReactiveFormsModule,c.FormsModule,a.QuillModule,b.TagInputModule],declarations:[m.FormInputHidden,p.FormTextEditorComponent,l.DynamicFieldDirective,s.DynamicFormComponent,f.FormInputComponent,u.FormSelectComponent,d.FormTextareaComponent,h.FormUserComponent,v.FormRadioComponent,y.FormCheckboxComponent],exports:[s.DynamicFormComponent],entryComponents:[m.FormInputHidden,f.FormInputComponent,u.FormSelectComponent,p.FormTextEditorComponent,d.FormTextareaComponent,h.FormUserComponent,v.FormRadioComponent,y.FormCheckboxComponent],providers:[j.DataService,C.DynamicFieldService],schemas:[r.NO_ERRORS_SCHEMA]})],e)}();t.NgxFormModule=O},function(e,t){e.exports=require("reflect-metadata")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(37),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(36))}])});