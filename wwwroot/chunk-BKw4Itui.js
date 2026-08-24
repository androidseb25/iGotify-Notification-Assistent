import{$ as Le$1,$n as q,$t as Z4$1,A as Ee$1,An as hC,Ar as wn$1,B as IW,Bn as le$1,C as DA,Cr as v_,Dr as wN,Dt as SD,E as DN,Er as wD,Fn as jD,Fr as y9,Gn as n9,Gt as Xi,H as In$1,Ht as WW,I as He$1,Ir as yC,It as Tl,Jt as Xt$1,K as JN,Lr as yL,Lt as UN,Mn as hg,Mt as Sn$1,N as Ft$1,Nn as iW,O as EA,Or as wT,Ot as SI,Pn as il,Pt as TD,Q as LL,Qt as Z,R as IN,S as D,St as RD,Tn as fg,Tt as S,U as Ix,Un as mW,Ut as X,V as Il,Vn as m$1,W as Iy,Wn as me$1,Wt as X4$1,Xn as oe$1,Y as K4$1,Yn as oc$1,Yt as Y4$1,Z as Ki,Zn as pC,Zt as Yt$1,_t as PL,an as _z,ar as ra,at as Ms,b as Cl$1,bn as eN,br as uy,c as B,cn as b$1,ct as ND,dr as tA,en as Zo,er as q4$1,et as MD,f as Br$1,fn as bS,fr as tN,ft as OD,gr as uC,h as CD,ht as On$1,i as $l,in as _l,ir as rW,it as Mk,j as F,jr as xN,jt as Sl$1,k as EW,kt as SN,l as BC,lt as NW,mn as be$1,mt as Ol,nn as _W,nr as qI,nt as MW,on as aW,ot as Mz,p as C,pn as bW,pt as OW,q as Ji,qn as ne$1,qt as Xr$1,r as $W,rn as _e$1,s as AW,sn as an$1,sr as rl,tn as Zp,tr as qD,tt as MR,ur as sW,ut as Nl$1,vn as dA,vr as uW,vt as PN,w as DC,wn as fW,wr as wA,x as Cn$1,xr as vC,xt as Qo,yn as dy,yr as uh,yt as Pt$1,zn as lW,zr as z}from"./main-XPBLSAS2.js";var _0=(()=>{class a{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,c){this._renderer=e,this._elementRef=c}setProperty(e,c){this._renderer.setProperty(this._elementRef.nativeElement,e,c)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(c){return new(c||a)(me$1(wn$1),me$1(Pt$1))};static ɵdir=Ft$1({type:a})}return a})();var j8=(()=>{class a extends _0{static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵdir=Ft$1({type:a,features:[wD]})}return a})();var Y4=new C(``);var W8={provide:Y4,useExisting:oc$1(()=>F0),multi:!0};function G8(){let a=Sn$1()?Sn$1().getUserAgent():``;return/android (\d+)/.test(a.toLowerCase())}var q8=new C(``);var F0=(()=>{class a extends _0{_compositionMode;_composing=!1;constructor(e,c,n){super(e,c),this._compositionMode=n,this._compositionMode??=!G8()}writeValue(e){let c=e??``;this.setProperty(`value`,c)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(c){return new(c||a)(me$1(wn$1),me$1(Pt$1),me$1(q8,8))};static ɵdir=Ft$1({type:a,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(c,n){c&1&&Sl$1(`input`,function(i){return n._handleInput(i.target.value)})(`blur`,function(){return n.onTouched()})(`compositionstart`,function(){return n._compositionStart()})(`compositionend`,function(i){return n._compositionEnd(i.target.value)})},standalone:!1,features:[EA([W8]),wD]})}return a})();function K4(a){return a==null||Q4(a)===0}function Q4(a){return a==null?null:Array.isArray(a)||typeof a==`string`?a.length:a instanceof Set?a.size:null}var c4=new C(``);var Z4=new C(``);var X8=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var j4=class{static min(t){return Y8(t)}static max(t){return K8(t)}static required(t){return T0(t)}static requiredTrue(t){return Q8(t)}static email(t){return Z8(t)}static minLength(t){return J8(t)}static maxLength(t){return e5(t)}static pattern(t){return a5(t)}static nullValidator(t){return X1()}static compose(t){return O0(t)}static composeAsync(t){return R0(t)}};function Y8(a){return t=>{if(t.value==null||a==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<a?{min:{min:a,actual:t.value}}:null}}function K8(a){return t=>{if(t.value==null||a==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>a?{max:{max:a,actual:t.value}}:null}}function T0(a){return K4(a.value)?{required:!0}:null}function Q8(a){return a.value===!0?null:{required:!0}}function Z8(a){return K4(a.value)||X8.test(a.value)?null:{email:!0}}function J8(a){return t=>{let e=t.value?.length??Q4(t.value);return e===null||e===0?null:e<a?{minlength:{requiredLength:a,actualLength:e}}:null}}function e5(a){return t=>{let e=t.value?.length??Q4(t.value);return e!==null&&e>a?{maxlength:{requiredLength:a,actualLength:e}}:null}}function a5(a){if(!a)return X1;let t,e;return typeof a==`string`?(e=``,a.charAt(0)!==`^`&&(e+=`^`),e+=a,a.charAt(a.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=a.toString(),t=a),c=>{if(K4(c.value))return null;let n=c.value;return t.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function X1(a){return null}function E0(a){return a!=null}function P0(a){return Zo(a)?oe$1(a):a}function B0(a){let t={};return a.forEach(e=>{t=e!=null?D(D({},t),e):t}),Object.keys(t).length===0?null:t}function I0(a,t){return t.map(e=>e(a))}function c5(a){return!a.validate}function V0(a){return a.map(t=>c5(t)?t:e=>t.validate(e))}function O0(a){if(!a)return null;let t=a.filter(E0);return t.length==0?null:function(e){return B0(I0(e,t))}}function J4(a){return a!=null?O0(V0(a)):null}function R0(a){if(!a)return null;let t=a.filter(E0);return t.length==0?null:function(e){return bS(I0(e,t).map(P0)).pipe(X(B0))}}function e3(a){return a!=null?R0(V0(a)):null}function x0(a,t){return a===null?[t]:Array.isArray(a)?[...a,t]:[a,t]}function H0(a){return a._rawValidators}function $0(a){return a._rawAsyncValidators}function W4(a){return a?Array.isArray(a)?a:[a]:[]}function Y1(a,t){return Array.isArray(a)?a.includes(t):a===t}function S0(a,t){let e=W4(t);return W4(a).forEach(n=>{Y1(e,n)||e.push(n)}),e}function N0(a,t){return W4(t).filter(e=>!Y1(a,e))}var K1=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=J4(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=e3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var n1=class extends K1{name;get formDirective(){return null}get path(){return null}};var z1=`VALID`;var q1=`INVALID`;var c1=`PENDING`;var M1=`DISABLED`;var _2=class{};var Q1=class extends _2{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var L1=class extends _2{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var C1=class extends _2{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var t1=class extends _2{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var G4=class extends _2{source;constructor(t){super(),this.source=t}};var l1=class extends _2{source;constructor(t){super(),this.source=t}};function U0(a){return(t4(a)?a.validators:a)||null}function t5(a){return Array.isArray(a)?J4(a):a||null}function j0(a,t){return(t4(t)?t.asyncValidators:a)||null}function n5(a){return Array.isArray(a)?e3(a):a||null}function t4(a){return a!=null&&!Array.isArray(a)&&typeof a==`object`}function l5(a,t,e){let c=a.controls;if(!(t?Object.keys(c):c).length)throw new b$1(1e3,``);if(!W0(c,e))throw new b$1(1001,``)}function i5(a,t,e){a._forEachChild((c,n)=>{if(e[n]===void 0)throw new b$1(-1002,``)})}var Z1=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=B(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Z(this.statusReactive)}set status(t){Z(()=>this.statusReactive.set(t))}_status=Ms(()=>this.statusReactive());statusReactive=B(void 0);get valid(){return this.status===z1}get invalid(){return this.status===q1}get pending(){return this.status===c1}get disabled(){return this.status===M1}get enabled(){return this.status!==M1}errors;get pristine(){return Z(this.pristineReactive)}set pristine(t){Z(()=>this.pristineReactive.set(t))}_pristine=Ms(()=>this.pristineReactive());pristineReactive=B(!0);get dirty(){return!this.pristine}get touched(){return Z(this.touchedReactive)}set touched(t){Z(()=>this.touchedReactive.set(t))}_touched=Ms(()=>this.touchedReactive());touchedReactive=B(!1);get untouched(){return!this.touched}_events=new z;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(S0(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(S0(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(N0(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(N0(t,this._rawAsyncValidators))}hasValidator(t){return Y1(this._rawValidators,t)}hasAsyncValidator(t){return Y1(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let c=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(F(D({},t),{sourceControl:c})),e&&t.emitEvent!==!1&&this._events.next(new C1(!0,c))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let c=t.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:c})}),t.onlySelf||this._parent?._updateTouched(t,c),e&&t.emitEvent!==!1&&this._events.next(new C1(!1,c))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let c=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(F(D({},t),{sourceControl:c})),e&&t.emitEvent!==!1&&this._events.next(new L1(!1,c))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let c=t.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,c),e&&t.emitEvent!==!1&&this._events.next(new L1(!0,c))}markAsPending(t={}){this.status=c1;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new t1(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(F(D({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=M1,this.errors=null,this._forEachChild(n=>{n.disable(F(D({},t),{onlySelf:!0}))}),this._updateValue();let c=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Q1(this.value,c)),this._events.next(new t1(this.status,c)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(F(D({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=z1,this._forEachChild(c=>{c.enable(F(D({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(F(D({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(c=>c(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let c=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===z1||this.status===c1)&&this._runAsyncValidator(c,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Q1(this.value,e)),this._events.next(new t1(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(F(D({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M1:z1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=c1,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let c=P0(this.asyncValidator(this));this._asyncValidationSubscription=c.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((c,n)=>c&&c._find(n),this)}getError(t,e){let c=e?this.get(e):this;return c?.errors?c.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,c){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||c)&&this._events.next(new t1(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,c)}_initObservables(){this.valueChanges=new Le$1,this.statusChanges=new Le$1}_calculateStatus(){return this._allControlsDisabled()?M1:this.errors?q1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(c1)?c1:this._anyControlsHaveStatus(q1)?q1:z1}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let c=!this._anyControlsDirty(),n=this.pristine!==c;this.pristine=c,t.onlySelf||this._parent?._updatePristine(t,e),n&&this._events.next(new L1(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new C1(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){t4(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=t5(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=n5(this._rawAsyncValidators)}_updateHasRequiredValidator(){Z(()=>this._hasRequired.set(this.hasValidator(j4.required)))}};function W0(a,t){return Object.hasOwn(a,t)}function r5(a){return a.tagName===`INPUT`||a.tagName===`SELECT`||a.tagName===`TEXTAREA`}function o5(a,t,e,c){switch(e){case`name`:a.setAttribute(t,e,c);break;case`disabled`:case`readonly`:case`required`:c?a.setAttribute(t,e,``):a.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:c!==void 0?a.setAttribute(t,e,c.toString()):a.removeAttribute(t,e);break}}var q4=class{kind;context;control;message;constructor({kind:t,context:e,control:c}){this.kind=t,this.context=e,this.control=c}};var s5=(()=>{class a{_validator=X1;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let c=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(c),this._validator=this._enabled?this.createValidator(c):X1,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,features:[Xt$1]})}return a})();var f5={provide:c4,useExisting:oc$1(()=>G0),multi:!0};var G0=(()=>{class a extends s5{required;inputName=`required`;normalizeInput=In$1;createValidator=e=>T0;enabled(e){return e}static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵdir=Ft$1({type:a,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(c,n){c&2&&Cl$1(`required`,n._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[EA([f5]),wD]})}return a})();var d5=new C(``);var y1=new C(``,{factory:()=>n4});var n4=`always`;function u5(a,t){return[...t.path,a]}function X4(a,t,e=n4){q0(a,t),t.valueAccessor.writeValue(a.value),(a.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(a.disabled),h5(a,t),v5(a,t),g5(a,t),m5(a,t)}function w0(a,t,e=!0){let c=()=>{};t?.valueAccessor?.registerOnChange(c),t?.valueAccessor?.registerOnTouched(c),p5(a,t),a&&(t._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function J1(a,t){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function m5(a,t){if(t.valueAccessor.setDisabledState){let e=c=>{t.valueAccessor.setDisabledState(c)};a.registerOnDisabledChange(e),t._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function q0(a,t){let e=H0(a);t.validator!==null?a.setValidators(x0(e,t.validator)):typeof e==`function`&&a.setValidators([e]);let c=$0(a);t.asyncValidator!==null?a.setAsyncValidators(x0(c,t.asyncValidator)):typeof c==`function`&&a.setAsyncValidators([c]);let n=()=>a.updateValueAndValidity();J1(t._rawValidators,n),J1(t._rawAsyncValidators,n)}function p5(a,t){let e=!1;if(a!==null){if(t.validator!==null){let n=H0(a);if(Array.isArray(n)&&n.length>0){let l=n.filter(i=>i!==t.validator);l.length!==n.length&&(e=!0,a.setValidators(l))}}if(t.asyncValidator!==null){let n=$0(a);if(Array.isArray(n)&&n.length>0){let l=n.filter(i=>i!==t.asyncValidator);l.length!==n.length&&(e=!0,a.setAsyncValidators(l))}}}let c=()=>{};return J1(t._rawValidators,c),J1(t._rawAsyncValidators,c),e}function h5(a,t){t.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn===`change`&&X0(a,t)})}function g5(a,t){t.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn===`blur`&&a._pendingChange&&X0(a,t),a.updateOn!==`submit`&&a.markAsTouched()})}function X0(a,t){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function v5(a,t){let e=(c,n)=>{t.valueAccessor.writeValue(c),n&&t.viewToModelUpdate(c)};a.registerOnChange(e),t._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function z5(a,t){q0(a,t)}function Y0(a,t){if(!a.hasOwnProperty(`model`))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function M5(a){return Object.getPrototypeOf(a.constructor)===j8}function b5(a,t){a._syncPendingControls(),t.forEach(e=>{let c=e.control;c.updateOn===`submit`&&c._pendingChange&&(e.viewToModelUpdate(c._pendingValue),c._pendingChange=!1)})}function L5(a,t){if(!t)return null;let e,c,n;return t.forEach(l=>{l.constructor===F0?e=l:M5(l)?c=l:n=l}),n||c||e||null}var K0={provide:d5,useFactory:()=>{let a=m$1(g2,{self:!0});return{setParseErrors:t=>{a.setParseErrorSource(t)},set onReset(t){a.onReset=t}}}};var g2=class extends K1{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof l1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=L5(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,c){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=c,this.injector?.get(be$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(Xr$1);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new Ee$1,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(c=>{c instanceof l1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(n=>{this.control?.setValue(n,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(n)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=r5(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(n=>n instanceof G0))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let c=this.control,n=this.customControlBindings;Object.is(n.value,c.value)||(n.value=c.value,t.setCustomControlModelInput(c.value)),this.bindControlProperty(t,n,`touched`,c.touched),this.bindControlProperty(t,n,`dirty`,c.dirty),this.bindControlProperty(t,n,`valid`,c.valid),this.bindControlProperty(t,n,`invalid`,c.invalid),this.bindControlProperty(t,n,`pending`,c.pending),this.bindControlProperty(t,n,`disabled`,c.disabled),this.shouldBindRequired&&this.bindControlProperty(t,n,`required`,this.isRequired);let l=c.errors;if(n.errors!==l){n.errors=l;let i=this._convertErrors(l);t.setInputOnDirectives(`errors`,i)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,c,n){if(e[c]===n)return;e[c]=n;let l=t.setInputOnDirectives(c,n);this.isNativeFormElement&&!l&&(c===`disabled`||c===`required`)&&this.renderer&&o5(this.renderer,t.nativeElement,c,n)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([c,n])=>new q4({context:n,kind:c,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,c=Ms(()=>{let n=t();return n.length===0?null:n.reduce((l,i)=>(l[i.kind]=i,l),{})});this.parseErrorsValidator=(()=>e).bind(this),Xi(()=>{e=c(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var e4=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Cl=(()=>{class a extends e4{constructor(e){super(e)}static ɵfac=function(c){return new(c||a)(me$1(g2,2))};static ɵdir=Ft$1({type:a,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(c,n){c&2&&jD(`ng-untouched`,n.isUntouched)(`ng-touched`,n.isTouched)(`ng-pristine`,n.isPristine)(`ng-dirty`,n.isDirty)(`ng-valid`,n.isValid)(`ng-invalid`,n.isInvalid)(`ng-pending`,n.isPending)},standalone:!1,features:[wD]})}return a})();var yl=(()=>{class a extends e4{constructor(e){super(e)}static ɵfac=function(c){return new(c||a)(me$1(n1,10))};static ɵdir=Ft$1({type:a,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(c,n){c&2&&jD(`ng-untouched`,n.isUntouched)(`ng-touched`,n.isTouched)(`ng-pristine`,n.isPristine)(`ng-dirty`,n.isDirty)(`ng-valid`,n.isValid)(`ng-invalid`,n.isInvalid)(`ng-pending`,n.isPending)(`ng-submitted`,n.isSubmitted)},standalone:!1,features:[wD]})}return a})();var a4=class extends Z1{constructor(t,e,c){super(U0(e),j0(c,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,c={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:c.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let c=this._find(t);c&&c._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,c={}){let n=this._find(t);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:c.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){Z(()=>{i5(this,!0,t),Object.keys(t).forEach(c=>{l5(this,!0,c),this.controls[c].setValue(t[c],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(c=>{let n=this._find(c);n&&n.patchValue(t[c],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((c,n)=>{c.reset(t?t[n]:null,F(D({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new l1(this))}getRawValue(){return this._reduceChildren({},(t,e,c)=>(t[c]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,c)=>c._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let c=this.controls[e];c&&t(c,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,c]of Object.entries(this.controls))if(this.contains(e)&&t(c))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,c,n)=>((c.enabled||this.disabled)&&(e[n]=c.value),e))}_reduceChildren(t,e){let c=t;return this._forEachChild((n,l)=>{c=e(c,n,l)}),c}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return W0(this.controls,t)?this.controls[t]:null}};var C5={provide:n1,useExisting:oc$1(()=>y5)};var b1=Promise.resolve();var y5=(()=>{class a extends n1{callSetDisabledState;get submitted(){return Z(this.submittedReactive)}_submitted=Ms(()=>this.submittedReactive());submittedReactive=B(!1);_directives=new Set;form;ngSubmit=new Le$1;options;constructor(e,c,n){super(),this.callSetDisabledState=n,this.form=new a4({},J4(e),e3(c))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){b1.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){b1.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){b1.then(()=>{let c=this._findContainer(e.path),n=new a4({});z5(n,e),c.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){b1.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,c){b1.then(()=>{this.form.get(e.path).setValue(c)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),b5(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new G4(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(c){return new(c||a)(me$1(c4,10),me$1(Z4,10),me$1(y1,8))};static ɵdir=Ft$1({type:a,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(c,n){c&1&&Sl$1(`submit`,function(i){return n.onSubmit(i)})(`reset`,function(){return n.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[EA([C5]),wD]})}return a})();function k0(a,t){let e=a.indexOf(t);e>-1&&a.splice(e,1)}function A0(a){return typeof a==`object`&&a!==null&&Object.keys(a).length===2&&`value`in a&&`disabled`in a}var x5=class extends Z1{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,c){super(U0(e),j0(c,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),t4(e)&&(e.nonNullable||e.initialValueIsDefault)&&(A0(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){Z(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(c=>c(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new l1(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){k0(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){k0(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){A0(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var S5={provide:g2,useExisting:oc$1(()=>N5)};var D0=Promise.resolve();var N5=(()=>{class a extends g2{_changeDetectorRef;callSetDisabledState;control=new x5;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name=``;isDisabled;model;options;update=new Le$1;constructor(e,c,n,l,i,r,o,f){super(o,f,l),this._changeDetectorRef=i,this.callSetDisabledState=r,this._parent=e,this._setValidators(c),this._setAsyncValidators(n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let c=e.name.previousValue;this.formDirective.removeControl({name:c,path:this._getPath(c)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),Y0(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,X4(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,X4(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){D0.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let c=e.isDisabled.currentValue,n=c!==0&&In$1(c);D0.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?u5(e,this._parent):[e]}static ɵfac=function(c){return new(c||a)(me$1(n1,9),me$1(c4,10),me$1(Z4,10),me$1(Y4,10),me$1(Xr$1,8),me$1(y1,8),me$1(_e$1,8),me$1(wn$1,8))};static ɵdir=Ft$1({type:a,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[EA([S5,K0]),wD,Xt$1,eN(null)]})}return a})();var Sl=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return a})();var Q0=new C(``);var w5={provide:g2,useExisting:oc$1(()=>k5)};var k5=(()=>{class a extends g2{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new Le$1;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,c,n,l,i,r,o){super(o,r,n),this._ngModelWarningConfig=l,this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(c)}ngOnChanges(e){if(this._isControlChanged(e)){let c=e.form.previousValue;c&&(w0(c,this,!1),this.removeParseErrorsValidator(c)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,X4(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}Y0(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&w0(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty(`form`)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!0)}static ɵfac=function(c){return new(c||a)(me$1(c4,10),me$1(Z4,10),me$1(Y4,10),me$1(Q0,8),me$1(y1,8),me$1(wn$1,8),me$1(_e$1,8))};static ɵdir=Ft$1({type:a,selectors:[[``,`formControl`,``]],inputs:{form:[0,`formControl`,`form`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},exportAs:[`ngForm`],standalone:!1,features:[EA([w5,K0]),wD,Xt$1,eN(null)]})}return a})();var Z0=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({})}return a})();var Nl=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:y1,useValue:e.callSetDisabledState??n4}]}}static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({imports:[Z0]})}return a})();var wl=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:Q0,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:y1,useValue:e.callSetDisabledState??n4}]}}static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({imports:[Z0]})}return a})();function i3(a,t){(t==null||t>a.length)&&(t=a.length);for(var e=0,c=Array(t);e<t;e++)c[e]=a[e];return c}function A5(a){if(Array.isArray(a))return a}function D5(a){if(Array.isArray(a))return i3(a)}function _5(a,t){if(!(a instanceof t))throw new TypeError(`Cannot call a class as a function`)}function J0(a,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,`value`in c&&(c.writable=!0),Object.defineProperty(a,_6(c.key),c)}}function F5(a,t,e){return t&&J0(a.prototype,t),e&&J0(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function s4(a,t){var e=typeof Symbol<`u`&&a[Symbol.iterator]||a[`@@iterator`];if(!e){if(Array.isArray(a)||(e=L3(a))||t&&a&&typeof a.length==`number`){e&&(a=e);var c=0,n=function(){};return{s:n,n:function(){return c>=a.length?{done:!0}:{done:!1,value:a[c++]}},e:function(o){throw o},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,i=!0,r=!1;return{s:function(){e=e.call(a)},n:function(){var o=e.next();return i=o.done,o},e:function(o){r=!0,l=o},f:function(){try{i||e.return==null||e.return()}finally{if(r)throw l}}}}function b(a,t,e){return(t=_6(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function T5(a){if(typeof Symbol<`u`&&a[Symbol.iterator]!=null||a[`@@iterator`]!=null)return Array.from(a)}function E5(a,t){var e=a==null?null:typeof Symbol<`u`&&a[Symbol.iterator]||a[`@@iterator`];if(e!=null){var c,n,l,i,r=[],o=!0,f=!1;try{if(l=(e=e.call(a)).next,t===0){if(Object(e)!==e)return;o=!1}else for(;!(o=(c=l.call(e)).done)&&(r.push(c.value),r.length!==t);o=!0);}catch(d){f=!0,n=d}finally{try{if(!o&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(f)throw n}}return r}}function P5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e6(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);t&&(c=c.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),e.push.apply(e,c)}return e}function m(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?e6(Object(e),!0).forEach(function(c){b(a,c,e[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):e6(Object(e)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(e,c))})}return a}function h4(a,t){return A5(a)||E5(a,t)||L3(a,t)||P5()}function m2(a){return D5(a)||T5(a)||L3(a)||B5()}function I5(a,t){if(typeof a!=`object`||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var c=e.call(a,t||`default`);if(typeof c!=`object`)return c;throw new TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(a)}function _6(a){var t=I5(a,`string`);return typeof t==`symbol`?t:t+``}function u4(a){"@babel/helpers - typeof";return u4=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(t){return typeof t}:function(t){return t&&typeof Symbol==`function`&&t.constructor===Symbol&&t!==Symbol.prototype?`symbol`:typeof t},u4(a)}function L3(a,t){if(a){if(typeof a==`string`)return i3(a,t);var e={}.toString.call(a).slice(8,-1);return e===`Object`&&a.constructor&&(e=a.constructor.name),e===`Map`||e===`Set`?Array.from(a):e===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i3(a,t):void 0}}var a6=function(){};var C3={};var F6={};var T6=null;var E6={mark:a6,measure:a6};try{typeof window<`u`&&(C3=window),typeof document<`u`&&(F6=document),typeof MutationObserver<`u`&&(T6=MutationObserver),typeof performance<`u`&&(E6=performance)}catch{}var c6=(C3.navigator||{}).userAgent;var t6=c6===void 0?``:c6;var T2=C3;var R=F6;var n6=T6;var l4=E6;T2.document;var N2=!!R.documentElement&&!!R.head&&typeof R.addEventListener==`function`&&typeof R.createElement==`function`;var P6=~t6.indexOf(`MSIE`)||~t6.indexOf(`Trident/`);var i4;var O5=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/;var R5=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i;var B6={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}};var H5={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var I6=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];var c2=`classic`;var k1=`duotone`;var V6=`sharp`;var O6=`sharp-duotone`;var R6=`chisel`;var H6=`etch`;var $6=`graphite`;var U6=`jelly`;var j6=`jelly-duo`;var W6=`jelly-fill`;var G6=`mosaic`;var q6=`notdog`;var X6=`notdog-duo`;var Y6=`pixel`;var K6=`slab`;var Q6=`slab-duo`;var Z6=`slab-press`;var J6=`slab-press-duo`;var ee=`thumbprint`;var ae=`utility`;var ce=`utility-duo`;var te=`utility-fill`;var ne=`vellum`;var le=`whiteboard`;var $5=`Classic`;var U5=`Duotone`;var j5=`Sharp`;var W5=`Sharp Duotone`;var G5=`Chisel`;var q5=`Etch`;var X5=`Graphite`;var Y5=`Jelly`;var K5=`Jelly Duo`;var Q5=`Jelly Fill`;var Z5=`Mosaic`;var J5=`Notdog`;var e7=`Notdog Duo`;var a7=`Pixel`;var c7=`Slab`;var t7=`Slab Duo`;var n7=`Slab Press`;var l7=`Slab Press Duo`;var i7=`Thumbprint`;var r7=`Utility`;var o7=`Utility Duo`;var s7=`Utility Fill`;var f7=`Vellum`;var d7=`Whiteboard`;var ie=[c2,k1,V6,O6,R6,H6,$6,U6,j6,W6,G6,q6,X6,Y6,K6,Q6,Z6,J6,ee,ae,ce,te,ne,le];i4={},b(b(b(b(b(b(b(b(b(b(i4,c2,$5),k1,U5),V6,j5),O6,W5),R6,G5),H6,q5),$6,X5),U6,Y5),j6,K5),W6,Q5),b(b(b(b(b(b(b(b(b(b(i4,G6,Z5),q6,J5),X6,e7),Y6,a7),K6,c7),Q6,t7),Z6,n7),J6,l7),ee,i7),ae,r7),b(b(b(b(i4,ce,o7),te,s7),ne,f7),le,d7);var u7={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}};var m7={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}};var p7=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]);var h7={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}};var re=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`];var l6={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}};var g7=[`kit`];b(b({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var L7={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}};var C7={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}};var y7={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}};var i6={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}};var r4;var o4={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var x7=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];r4={},b(b(b(b(b(b(b(b(b(b(r4,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),b(b(b(b(b(b(b(b(b(b(r4,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),b(b(b(b(r4,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`);b(b({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ya={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}};var xa={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]};var r3={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}};var oe=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,`faslr`,`faslpr`,`fasldr`,`faslpdr`,`fapr`,`fams`,`favs`,`fawsb`,`fatl`,`fans`,`fands`,`faes`,`fagt`,`fajr`,`fajfr`,`fajdr`,`facr`,`fausb`,`faudsb`,`faufsb`].concat(x7,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]);var Na=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`];var se=[1,2,3,4,5,6,7,8,9,10];var wa=se.concat([11,12,13,14,15,16,17,18,19,20]);var Aa=[].concat(m2(Object.keys(xa)),Na,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,o4.GROUP,o4.SWAP_OPACITY,o4.PRIMARY,o4.SECONDARY]).concat(se.map(function(a){return``.concat(a,`x`)})).concat(wa.map(function(a){return`w-`.concat(a)}));var Da={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}};var x2=`___FONT_AWESOME___`;var o3=16;var fe=`fa`;var de=`svg-inline--fa`;var U2=`data-fa-i2svg`;var s3=`data-fa-pseudo-element`;var _a=`data-fa-pseudo-element-pending`;var y3=`data-prefix`;var x3=`data-icon`;var r6=`fontawesome-i2svg`;var Fa=`async`;var Ta=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`];var ue=[`::before`,`::after`,`:before`,`:after`];var me=(function(){try{return!0}catch{return!1}})();function A1(a){return new Proxy(a,{get:function(e,c){return c in e?e[c]:e[c2]}})}var pe=m({},B6);pe[c2]=m(m(m(m({},{"fa-duotone":`duotone`}),B6[c2]),l6.kit),l6[`kit-duotone`]);var Ea=A1(pe);var f3=m({},h7);f3[c2]=m(m(m(m({},{duotone:`fad`}),f3[c2]),i6.kit),i6[`kit-duotone`]);var o6=A1(f3);var d3=m({},r3);d3[c2]=m(m({},d3[c2]),y7.kit);var S3=A1(d3);var u3=m({},ya);u3[c2]=m(m({},u3[c2]),L7.kit);A1(u3);var Pa=O5;var he=`fa-layers-text`;var Ba=R5;A1(m({},u7));var Va=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`];var a3=H5;var Oa=[].concat(m2(g7),m2(Aa));var S1=T2.FontAwesomeConfig||{};function Ra(a){var t=R.querySelector(`script[`+a+`]`);if(t)return t.getAttribute(a)}function Ha(a){return a===``?!0:a===`false`?!1:a===`true`?!0:a}R&&typeof R.querySelector==`function`&&(s6=[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]],s6.forEach(function(a){var t=h4(a,2),e=t[0],c=t[1],n=Ha(Ra(e));n!=null&&(S1[c]=n)}));var s6;var ge={styleDefault:`solid`,familyDefault:c2,cssPrefix:fe,replacementClass:de,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};S1.familyPrefix&&(S1.cssPrefix=S1.familyPrefix);var o1=m(m({},ge),S1);o1.autoReplaceSvg||(o1.observeMutations=!1);var M={};Object.keys(ge).forEach(function(a){Object.defineProperty(M,a,{enumerable:!0,set:function(e){o1[a]=e,N1.forEach(function(c){return c(M)})},get:function(){return o1[a]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){o1.cssPrefix=t,N1.forEach(function(e){return e(M)})},get:function(){return o1.cssPrefix}});T2.FontAwesomeConfig=M;var N1=[];function $a(a){return N1.push(a),function(){N1.splice(N1.indexOf(a),1)}}var F2=o3;var v2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ua(a){if(!(!a||!N2)){var t=R.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=a;for(var e=R.head.childNodes,c=null,n=e.length-1;n>-1;n--){var l=e[n],i=(l.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(c=l)}return R.head.insertBefore(t,c),a}}var ja=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function f6(){for(var a=12,t=``;a-->0;)t+=ja[Math.random()*62|0];return t}function s1(a){for(var t=[],e=(a||[]).length>>>0;e--;)t[e]=a[e];return t}function N3(a){return a.classList?s1(a.classList):(a.getAttribute(`class`)||``).split(` `).filter(function(t){return t})}function ve(a){return``.concat(a).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Wa(a){return Object.keys(a||{}).reduce(function(t,e){return t+``.concat(e,`="`).concat(ve(a[e]),`" `)},``).trim()}function g4(a){return Object.keys(a||{}).reduce(function(t,e){return t+``.concat(e,`: `).concat(a[e].trim(),`;`)},``)}function w3(a){return a.size!==v2.size||a.x!==v2.x||a.y!==v2.y||a.rotate!==v2.rotate||a.flipX||a.flipY}function Ga(a){var t=a.transform,e=a.containerWidth,c=a.iconWidth,n={transform:`translate(`.concat(e/2,` 256)`)},l=`translate(`.concat(t.x*32,`, `).concat(t.y*32,`) `),i=`scale(`.concat(t.size/16*(t.flipX?-1:1),`, `).concat(t.size/16*(t.flipY?-1:1),`) `),r=`rotate(`.concat(t.rotate,` 0 0)`);return{outer:n,inner:{transform:``.concat(l,` `).concat(i,` `).concat(r)},path:{transform:`translate(`.concat(c/2*-1,` -256)`)}}}function qa(a){var t=a.transform,e=a.width,c=e===void 0?o3:e,n=a.height,l=n===void 0?o3:n,i=a.startCentered,r=i===void 0?!1:i,o=``;return r&&P6?o+=`translate(`.concat(t.x/F2-c/2,`em, `).concat(t.y/F2-l/2,`em) `):r?o+=`translate(calc(-50% + `.concat(t.x/F2,`em), calc(-50% + `).concat(t.y/F2,`em)) `):o+=`translate(`.concat(t.x/F2,`em, `).concat(t.y/F2,`em) `),o+=`scale(`.concat(t.size/F2*(t.flipX?-1:1),`, `).concat(t.size/F2*(t.flipY?-1:1),`) `),o+=`rotate(`.concat(t.rotate,`deg) `),o}var Xa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ze(){var a=fe,t=de,e=M.cssPrefix,c=M.replacementClass,n=Xa;if(e!==a||c!==t){var l=new RegExp(`\\.`.concat(a,`\\-`),`g`),i=new RegExp(`\\--`.concat(a,`\\-`),`g`),r=new RegExp(`\\.`.concat(t),`g`);n=n.replace(l,`.`.concat(e,`-`)).replace(i,`--`.concat(e,`-`)).replace(r,`.`.concat(c))}return n}var d6=!1;function c3(){M.autoAddCss&&!d6&&(Ua(ze()),d6=!0)}var Ya={mixout:function(){return{dom:{css:ze,insertCss:c3}}},hooks:function(){return{beforeDOMElementCreation:function(){c3()},beforeI2svg:function(){c3()}}}};var S2=T2||{};S2[x2]||(S2[x2]={});S2[x2].styles||(S2[x2].styles={});S2[x2].hooks||(S2[x2].hooks={});S2[x2].shims||(S2[x2].shims=[]);var u2=S2[x2];var Me=[];var be=function(){R.removeEventListener(`DOMContentLoaded`,be),m4=1,Me.map(function(t){return t()})};var m4=!1;N2&&(m4=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),m4||R.addEventListener(`DOMContentLoaded`,be));function Ka(a){N2&&(m4?setTimeout(a,0):Me.push(a))}function D1(a){var t=a.tag,e=a.attributes,c=e===void 0?{}:e,n=a.children,l=n===void 0?[]:n;return typeof a==`string`?ve(a):`<`.concat(t,` `).concat(Wa(c),`>`).concat(l.map(D1).join(``),`</`).concat(t,`>`)}function u6(a,t,e){if(a&&a[t]&&a[t][e])return{prefix:t,iconName:e,icon:a[t][e]}}var Qa=function(t,e){return function(c,n,l,i){return t.call(e,c,n,l,i)}};var t3=function(t,e,c,n){var l=Object.keys(t),i=l.length,r=n!==void 0?Qa(e,n):e,o,f,d;for(c===void 0?(o=1,d=t[l[0]]):(o=0,d=c);o<i;o++)f=l[o],d=r(d,t[f],f,t);return d};function Le(a){return m2(a).length!==1?null:a.codePointAt(0).toString(16)}function m6(a){return Object.keys(a).reduce(function(t,e){var c=a[e];return!!c.icon?t[c.iconName]=c.icon:t[e]=c,t},{})}function m3(a,t){var c=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,n=c===void 0?!1:c,l=m6(t);typeof u2.hooks.addPack==`function`&&!n?u2.hooks.addPack(a,m6(t)):u2.styles[a]=m(m({},u2.styles[a]||{}),l),a===`fas`&&m3(`fa`,t)}var w1=u2.styles;var Za=u2.shims;var Ce=Object.keys(S3);var Ja=Ce.reduce(function(a,t){return a[t]=Object.keys(S3[t]),a},{});var k3=null;var ye={};var xe={};var Se={};var Ne={};var we={};function ec(a){return~Oa.indexOf(a)}function ac(a,t){var e=t.split(`-`),c=e[0],n=e.slice(1).join(`-`);return c===a&&n!==``&&!ec(n)?n:null}var ke=function(){var t=function(l){return t3(w1,function(i,r,o){return i[o]=t3(r,l,{}),i},{})};ye=t(function(n,l,i){if(l[3]&&(n[l[3]]=i),l[2])l[2].filter(function(o){return typeof o==`number`}).forEach(function(o){n[o.toString(16)]=i});return n}),xe=t(function(n,l,i){if(n[i]=i,l[2])l[2].filter(function(o){return typeof o==`string`}).forEach(function(o){n[o]=i});return n}),we=t(function(n,l,i){var r=l[2];return n[i]=i,r.forEach(function(o){n[o]=i}),n});var e=`far`in w1||M.autoFetchSvg,c=t3(Za,function(n,l){var i=l[0],r=l[1],o=l[2];return r===`far`&&!e&&(r=`fas`),typeof i==`string`&&(n.names[i]={prefix:r,iconName:o}),typeof i==`number`&&(n.unicodes[i.toString(16)]={prefix:r,iconName:o}),n},{names:{},unicodes:{}});Se=c.names,Ne=c.unicodes,k3=v4(M.styleDefault,{family:M.familyDefault})};$a(function(a){k3=v4(a.styleDefault,{family:M.familyDefault})});ke();function A3(a,t){return(ye[a]||{})[t]}function cc(a,t){return(xe[a]||{})[t]}function $2(a,t){return(we[a]||{})[t]}function Ae(a){return Se[a]||{prefix:null,iconName:null}}function tc(a){var t=Ne[a],e=A3(`fas`,a);return t||(e?{prefix:`fas`,iconName:e}:null)||{prefix:null,iconName:null}}function E2(){return k3}var De=function(){return{prefix:null,iconName:null,rest:[]}};function nc(a){var t=c2,e=Ce.reduce(function(c,n){return c[n]=``.concat(M.cssPrefix,`-`).concat(n),c},{});return ie.forEach(function(c){(a.includes(e[c])||a.some(function(n){return Ja[c].includes(n)}))&&(t=c)}),t}function v4(a){var e=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,c=e===void 0?c2:e,n=Ea[c][a];if(c===k1&&!a)return`fad`;var l=o6[c][a]||o6[c][n],i=a in u2.styles?a:null;return l||i||null}function lc(a){var t=[],e=null;return a.forEach(function(c){var n=ac(M.cssPrefix,c);n?e=n:c&&t.push(c)}),{iconName:e,rest:t}}function p6(a){return a.sort().filter(function(t,e,c){return c.indexOf(t)===e})}var h6=oe.concat(re);function z4(a){var e=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,c=e===void 0?!1:e,n=null,l=p6(a.filter(function(g){return h6.includes(g)})),i=p6(a.filter(function(g){return!h6.includes(g)})),f=h4(l.filter(function(g){return n=g,!I6.includes(g)}),1)[0],d=f===void 0?null:f,u=nc(l),v=m(m({},lc(i)),{},{prefix:v4(d,{family:u})});return m(m(m({},v),sc({values:a,family:u,styles:w1,config:M,canonical:v,givenPrefix:n})),ic(c,n,v))}function ic(a,t,e){var c=e.prefix,n=e.iconName;if(a||!c||!n)return{prefix:c,iconName:n};var l=t===`fa`?Ae(n):{},i=$2(c,n);return n=l.iconName||i||n,c=l.prefix||c,c===`far`&&!w1.far&&w1.fas&&!M.autoFetchSvg&&(c=`fas`),{prefix:c,iconName:n}}var rc=ie.filter(function(a){return a!==c2||a!==k1});var oc=Object.keys(r3).filter(function(a){return a!==c2}).map(function(a){return Object.keys(r3[a])}).flat();function sc(a){var t=a.values,e=a.family,c=a.canonical,n=a.givenPrefix,l=n===void 0?``:n,i=a.styles,r=i===void 0?{}:i,o=a.config,f=o===void 0?{}:o,d=e===k1,u=t.includes(`fa-duotone`)||t.includes(`fad`),v=f.familyDefault===`duotone`,g=c.prefix===`fad`||c.prefix===`fa-duotone`;if(!d&&(u||v||g)&&(c.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(c.prefix=`fab`),!c.prefix&&rc.includes(e)){if(Object.keys(r).find(function(D){return oc.includes(D)})||f.autoFetchSvg)c.prefix=p7.get(e).defaultShortPrefixId,c.iconName=$2(c.prefix,c.iconName)||c.iconName}return(c.prefix===`fa`||l===`fa`)&&(c.prefix=E2()||`fas`),c}var fc=(function(){function a(){_5(this,a),this.definitions={}}return F5(a,[{key:`add`,value:function(){for(var e=this,c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(r){e.definitions[r]=m(m({},e.definitions[r]||{}),i[r]),m3(r,i[r]);var o=S3[c2][r];o&&m3(o,i[r]),ke()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,c){var n=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(n).map(function(l){var i=n[l],r=i.prefix,o=i.iconName,f=i.icon,d=f[2];e[r]||(e[r]={}),d.length>0&&d.forEach(function(u){typeof u==`string`&&(e[r][u]=f)}),e[r][o]=f}),e}}])})();var g6=[];var i1={};var r1={};var dc=Object.keys(r1);function uc(a,t){var e=t.mixoutsTo;return g6=a,i1={},Object.keys(r1).forEach(function(c){dc.indexOf(c)===-1&&delete r1[c]}),g6.forEach(function(c){var n=c.mixout?c.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]==`function`&&(e[i]=n[i]),u4(n[i])===`object`&&Object.keys(n[i]).forEach(function(r){e[i]||(e[i]={}),e[i][r]=n[i][r]})}),c.hooks){var l=c.hooks();Object.keys(l).forEach(function(i){i1[i]||(i1[i]=[]),i1[i].push(l[i])})}c.provides&&c.provides(r1)}),e}function p3(a,t){for(var e=arguments.length,c=new Array(e>2?e-2:0),n=2;n<e;n++)c[n-2]=arguments[n];return(i1[a]||[]).forEach(function(i){t=i.apply(null,[t].concat(c))}),t}function j2(a){for(var t=arguments.length,e=new Array(t>1?t-1:0),c=1;c<t;c++)e[c-1]=arguments[c];(i1[a]||[]).forEach(function(l){l.apply(null,e)})}function P2(){var a=arguments[0],t=Array.prototype.slice.call(arguments,1);return r1[a]?r1[a].apply(null,t):void 0}function h3(a){a.prefix===`fa`&&(a.prefix=`fas`);var t=a.iconName,e=a.prefix||E2();if(t)return t=$2(e,t)||t,u6(_e.definitions,e,t)||u6(u2.styles,e,t)}var _e=new fc;var mc=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,j2(`noAuto`)};var s2={noAuto:mc,config:M,dom:{i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N2?(j2(`beforeI2svg`,t),P2(`pseudoElements2svg`,t),P2(`i2svg`,t)):Promise.reject(new Error(`Operation requires a DOM of some kind.`))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Ka(function(){gc({autoReplaceSvgRoot:e}),j2(`watch`,t)})}},parse:{icon:function(t){if(t===null)return null;if(u4(t)===`object`&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$2(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf(`fa-`)===0?t[1].slice(3):t[1],c=v4(t[0]);return{prefix:c,iconName:$2(c,e)||e}}if(typeof t==`string`&&(t.indexOf(``.concat(M.cssPrefix,`-`))>-1||t.match(Pa))){var n=z4(t.split(` `),{skipLookups:!0});return{prefix:n.prefix||E2(),iconName:$2(n.prefix,n.iconName)||n.iconName}}if(typeof t==`string`){var l=E2();return{prefix:l,iconName:$2(l,t)||t}}}},library:_e,findIconDefinition:h3,toHtml:D1};var gc=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,c=e===void 0?R:e;(Object.keys(u2.styles).length>0||M.autoFetchSvg)&&N2&&M.autoReplaceSvg&&s2.dom.i2svg({node:c})};function M4(a,t){return Object.defineProperty(a,"abstract",{get:t}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(c){return D1(c)})}}),Object.defineProperty(a,"node",{get:function(){if(N2){var c=R.createElement(`div`);return c.innerHTML=a.html,c.children}}}),a}function vc(a){var t=a.children,e=a.main,c=a.mask,n=a.attributes,l=a.styles,i=a.transform;if(w3(i)&&e.found&&!c.found){var f={x:e.width/e.height/2,y:.5};n.style=g4(m(m({},l),{},{"transform-origin":``.concat(f.x+i.x/16,`em `).concat(f.y+i.y/16,`em`)}))}return[{tag:`svg`,attributes:n,children:t}]}function zc(a){var t=a.prefix,e=a.iconName,c=a.children,n=a.attributes,l=a.symbol,i=l===!0?``.concat(t,`-`).concat(M.cssPrefix,`-`).concat(e):l;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:m(m({},n),{},{id:i}),children:c}]}]}function Mc(a){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(e){return e in a})}function D3(a){var t=a.icons,e=t.main,c=t.mask,n=a.prefix,l=a.iconName,i=a.transform,r=a.symbol,o=a.maskId,f=a.extra,d=a.watchable,u=d===void 0?!1:d,v=c.found?c:e,g=v.width,C=v.height,L=[M.replacementClass,l?``.concat(M.cssPrefix,`-`).concat(l):``].filter(function(f2){return f.classes.indexOf(f2)===-1}).filter(function(f2){return f2!==``||!!f2}).concat(f.classes).join(` `),D={children:[],attributes:m(m({},f.attributes),{},{"data-prefix":n,"data-icon":l,class:L,role:f.attributes.role||`img`,viewBox:`0 0 `.concat(g,` `).concat(C)})};!Mc(f.attributes)&&!f.attributes[`aria-hidden`]&&(D.attributes[`aria-hidden`]=`true`),u&&(D.attributes[U2]=``);var V=m(m({},D),{},{prefix:n,iconName:l,main:e,mask:c,maskId:o,transform:i,symbol:r,styles:m({},f.styles)}),K=c.found&&e.found?P2(`generateAbstractMask`,V)||{children:[],attributes:{}}:P2(`generateAbstractIcon`,V)||{children:[],attributes:{}},G=K.children,z2=K.attributes;return V.children=G,V.attributes=z2,r?zc(V):vc(V)}function v6(a){var t=a.content,e=a.width,c=a.height,n=a.transform,l=a.extra,i=a.watchable,r=i===void 0?!1:i,o=m(m({},l.attributes),{},{class:l.classes.join(` `)});r&&(o[U2]=``);var f=m({},l.styles);w3(n)&&(f.transform=qa({transform:n,startCentered:!0,width:e,height:c}),f[`-webkit-transform`]=f.transform);var d=g4(f);d.length>0&&(o.style=d);var u=[];return u.push({tag:`span`,attributes:o,children:[t]}),u}function bc(a){var t=a.content,e=a.extra,c=m(m({},e.attributes),{},{class:e.classes.join(` `)}),n=g4(e.styles);n.length>0&&(c.style=n);var l=[];return l.push({tag:`span`,attributes:c,children:[t]}),l}var n3=u2.styles;function g3(a){var t=a[0],e=a[1],l=h4(a.slice(4),1)[0],i=null;return Array.isArray(l)?i={tag:`g`,attributes:{class:``.concat(M.cssPrefix,`-`).concat(a3.GROUP)},children:[{tag:`path`,attributes:{class:``.concat(M.cssPrefix,`-`).concat(a3.SECONDARY),fill:`currentColor`,d:l[0]}},{tag:`path`,attributes:{class:``.concat(M.cssPrefix,`-`).concat(a3.PRIMARY),fill:`currentColor`,d:l[1]}}]}:i={tag:`path`,attributes:{fill:`currentColor`,d:l}},{found:!0,width:t,height:e,icon:i}}var Lc={found:!1,width:512,height:512};function Cc(a,t){!me&&!M.showMissingIcons&&a&&console.error(`Icon with name "`.concat(a,`" and prefix "`).concat(t,`" is missing.`))}function v3(a,t){var e=t;return t===`fa`&&M.styleDefault!==null&&(t=E2()),new Promise(function(c,n){if(e===`fa`){var l=Ae(a)||{};a=l.iconName||a,t=l.prefix||t}if(a&&t&&n3[t]&&n3[t][a]){var i=n3[t][a];return c(g3(i))}Cc(a,t),c(m(m({},Lc),{},{icon:M.showMissingIcons&&a?P2(`missingIconAbstract`)||{}:{}}))})}var z6=function(){};var z3=M.measurePerformance&&l4&&l4.mark&&l4.measure?l4:{mark:z6,measure:z6};var x1=`FA "7.3.1"`;var yc=function(t){return z3.mark(``.concat(x1,` `).concat(t,` begins`)),function(){return Fe(t)}};var Fe=function(t){z3.mark(``.concat(x1,` `).concat(t,` ends`)),z3.measure(``.concat(x1,` `).concat(t),``.concat(x1,` `).concat(t,` begins`),``.concat(x1,` `).concat(t,` ends`))};var _3={begin:yc,end:Fe};var f4=function(){};function M6(a){return typeof(a.getAttribute?a.getAttribute(U2):null)==`string`}function xc(a){var t=a.getAttribute?a.getAttribute(y3):null,e=a.getAttribute?a.getAttribute(x3):null;return t&&e}function Sc(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(M.replacementClass)}function Nc(){if(M.autoReplaceSvg===!0)return d4.replace;return d4[M.autoReplaceSvg]||d4.replace}function wc(a){return R.createElementNS(`http://www.w3.org/2000/svg`,a)}function kc(a){return R.createElement(a)}function Te(a){var e=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,c=e===void 0?a.tag===`svg`?wc:kc:e;if(typeof a==`string`)return R.createTextNode(a);var n=c(a.tag);Object.keys(a.attributes||[]).forEach(function(i){n.setAttribute(i,a.attributes[i])});return(a.children||[]).forEach(function(i){n.appendChild(Te(i,{ceFn:c}))}),n}function Ac(a){var t=` `.concat(a.outerHTML,` `);return t=``.concat(t,`Font Awesome fontawesome.com `),t}var d4={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(n){e.parentNode.insertBefore(Te(n),e)}),e.getAttribute(U2)===null&&M.keepOriginalSource){var c=R.createComment(Ac(e));e.parentNode.replaceChild(c,e)}else e.remove()},nest:function(t){var e=t[0],c=t[1];if(~N3(e).indexOf(M.replacementClass))return d4.replace(t);var n=new RegExp(``.concat(M.cssPrefix,`-.*`));if(delete c[0].attributes.id,c[0].attributes.class){var l=c[0].attributes.class.split(` `).reduce(function(r,o){return o===M.replacementClass||o.match(n)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});c[0].attributes.class=l.toSvg.join(` `),l.toNode.length===0?e.removeAttribute(`class`):e.setAttribute(`class`,l.toNode.join(` `))}var i=c.map(function(r){return D1(r)}).join(`
`);e.setAttribute(U2,``),e.innerHTML=i}};function b6(a){a()}function Ee(a,t){var e=typeof t==`function`?t:f4;if(a.length===0)e();else{var c=b6;M.mutateApproach===Fa&&(c=T2.requestAnimationFrame||b6),c(function(){var n=Nc(),l=_3.begin(`mutate`);a.map(n),l(),e()})}}var F3=!1;function Pe(){F3=!0}function M3(){F3=!1}var p4=null;function L6(a){if(n6&&M.observeMutations){var t=a.treeCallback,e=t===void 0?f4:t,c=a.nodeCallback,n=c===void 0?f4:c,l=a.pseudoElementsCallback,i=l===void 0?f4:l,r=a.observeMutationsRoot,o=r===void 0?R:r;p4=new n6(function(f){if(!F3){var d=E2();s1(f).forEach(function(u){if(u.type===`childList`&&u.addedNodes.length>0&&!M6(u.addedNodes[0])&&(M.searchPseudoElements&&i(u.target),e(u.target)),u.type===`attributes`&&u.target.parentNode&&M.searchPseudoElements&&i([u.target],!0),u.type===`attributes`&&M6(u.target)&&~Va.indexOf(u.attributeName))if(u.attributeName===`class`&&xc(u.target)){var v=z4(N3(u.target)),g=v.prefix,C=v.iconName;u.target.setAttribute(y3,g||d),C&&u.target.setAttribute(x3,C)}else Sc(u.target)&&n(u.target)})}}),N2&&p4.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Dc(){p4&&p4.disconnect()}function _c(a){var t=a.getAttribute(`style`),e=[];return t&&(e=t.split(`;`).reduce(function(c,n){var l=n.split(`:`),i=l[0],r=l.slice(1);return i&&r.length>0&&(c[i]=r.join(`:`).trim()),c},{})),e}function Fc(a){var t=a.getAttribute(`data-prefix`),e=a.getAttribute(`data-icon`),c=a.innerText!==void 0?a.innerText.trim():``,n=z4(N3(a));return n.prefix||(n.prefix=E2()),t&&e&&(n.prefix=t,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&c.length>0&&(n.iconName=cc(n.prefix,a.innerText)||A3(n.prefix,Le(a.innerText))),!n.iconName&&M.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=a.firstChild.data)),n}function Tc(a){return s1(a.attributes).reduce(function(e,c){return e.name!==`class`&&e.name!==`style`&&(e[c.name]=c.value),e},{})}function Ec(){return{iconName:null,prefix:null,transform:v2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function C6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Fc(a),c=e.iconName,n=e.prefix,l=e.rest,i=Tc(a),r=p3(`parseNodeAttributes`,{},a);return m({iconName:c,prefix:n,transform:v2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:l,styles:t.styleParser?_c(a):[],attributes:i}},r)}var Pc=u2.styles;function Be(a){var t=M.autoReplaceSvg===`nest`?C6(a,{styleParser:!1}):C6(a);return~t.extra.classes.indexOf(he)?P2(`generateLayersText`,a,t):P2(`generateSvgReplacementMutation`,a,t)}function Bc(){return[].concat(m2(re),m2(oe))}function y6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N2)return Promise.resolve();var e=R.documentElement.classList,c=function(u){return e.add(``.concat(r6,`-`).concat(u))},n=function(u){return e.remove(``.concat(r6,`-`).concat(u))},l=M.autoFetchSvg?Bc():I6.concat(Object.keys(Pc));l.includes(`fa`)||l.push(`fa`);var i=[`.`.concat(he,`:not([`).concat(U2,`])`)].concat(l.map(function(d){return`.`.concat(d,`:not([`).concat(U2,`])`)})).join(`, `);if(i.length===0)return Promise.resolve();var r=[];try{r=s1(a.querySelectorAll(i))}catch{}if(r.length>0)c(`pending`),n(`complete`);else return Promise.resolve();var o=_3.begin(`onTree`),f=r.reduce(function(d,u){try{var v=Be(u);v&&d.push(v)}catch(g){me||g.name===`MissingIcon`&&console.error(g)}return d},[]);return new Promise(function(d,u){Promise.all(f).then(function(v){Ee(v,function(){c(`active`),c(`complete`),n(`pending`),typeof t==`function`&&t(),o(),d()})}).catch(function(v){o(),u(v)})})}function Ic(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Be(a).then(function(e){e&&Ee([e],t)})}function Vc(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(t||{}).icon?t:h3(t||{}),n=e.mask;return n&&(n=(n||{}).icon?n:h3(n||{})),a(c,m(m({},e),{},{mask:n}))}}var Oc=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.transform,n=c===void 0?v2:c,l=e.symbol,i=l===void 0?!1:l,r=e.mask,o=r===void 0?null:r,f=e.maskId,d=f===void 0?null:f,u=e.classes,v=u===void 0?[]:u,g=e.attributes,C=g===void 0?{}:g,L=e.styles,D=L===void 0?{}:L;if(t){var V=t.prefix,K=t.iconName,G=t.icon;return M4(m({type:`icon`},t),function(){return j2(`beforeDOMElementCreation`,{iconDefinition:t,params:e}),D3({icons:{main:g3(G),mask:o?g3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:K,transform:m(m({},v2),n),symbol:i,maskId:d,extra:{attributes:C,styles:D,classes:v}})})}};var Rc={mixout:function(){return{icon:Vc(Oc)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=y6,e.nodeCallback=Ic,e}}},provides:function(t){t.i2svg=function(e){var c=e.node,n=c===void 0?R:c,l=e.callback;return y6(n,l===void 0?function(){}:l)},t.generateSvgReplacementMutation=function(e,c){var n=c.iconName,l=c.prefix,i=c.transform,r=c.symbol,o=c.mask,f=c.maskId,d=c.extra;return new Promise(function(u,v){Promise.all([v3(n,l),o.iconName?v3(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var C=h4(g,2),L=C[0],D=C[1];u([e,D3({icons:{main:L,mask:D},prefix:l,iconName:n,transform:i,symbol:r,maskId:f,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){var c=e.children,n=e.attributes,l=e.main,i=e.transform,r=e.styles,o=g4(r);o.length>0&&(n.style=o);var f;return w3(i)&&(f=P2(`generateAbstractTransformGrouping`,{main:l,transform:i,containerWidth:l.width,iconWidth:l.width})),c.push(f||l.icon),{children:c,attributes:n}}}};var Hc={mixout:function(){return{layer:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.classes,l=n===void 0?[]:n;return M4({type:`layer`},function(){j2(`beforeDOMElementCreation`,{assembler:e,params:c});var i=[];return e(function(r){Array.isArray(r)?r.map(function(o){i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:`span`,attributes:{class:[``.concat(M.cssPrefix,`-layers`)].concat(m2(l)).join(` `)},children:i}]})}}}};var $c={mixout:function(){return{counter:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.title,l=n===void 0?null:n,i=c.classes,r=i===void 0?[]:i,o=c.attributes,f=o===void 0?{}:o,d=c.styles,u=d===void 0?{}:d;return M4({type:`counter`,content:e},function(){return j2(`beforeDOMElementCreation`,{content:e,params:c}),bc({content:e.toString(),title:l,extra:{attributes:f,styles:u,classes:[``.concat(M.cssPrefix,`-layers-counter`)].concat(m2(r))}})})}}}};var Uc={mixout:function(){return{text:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.transform,l=n===void 0?v2:n,i=c.classes,r=i===void 0?[]:i,o=c.attributes,f=o===void 0?{}:o,d=c.styles,u=d===void 0?{}:d;return M4({type:`text`,content:e},function(){return j2(`beforeDOMElementCreation`,{content:e,params:c}),v6({content:e,transform:m(m({},v2),l),extra:{attributes:f,styles:u,classes:[``.concat(M.cssPrefix,`-layers-text`)].concat(m2(r))}})})}}},provides:function(t){t.generateLayersText=function(e,c){var n=c.transform,l=c.extra,i=null,r=null;if(P6){var o=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/o,r=f.height/o}return Promise.resolve([e,v6({content:e.innerHTML,width:i,height:r,transform:n,extra:l,watchable:!0})])}}};var Ie=new RegExp(`"`,`ug`);var x6=[1105920,1112319];var S6=m(m(m(m({},{FontAwesome:{normal:`fas`,400:`fas`}}),m7),Da),C7);var b3=Object.keys(S6).reduce(function(a,t){return a[t.toLowerCase()]=S6[t],a},{});var jc=Object.keys(b3).reduce(function(a,t){var e=b3[t];return a[t]=e[900]||m2(Object.entries(e))[0][1],a},{});function Wc(a){return Le(m2(a.replace(Ie,``))[0]||``)}function Gc(a){var t=a.getPropertyValue(`font-feature-settings`).includes(`ss01`),c=a.getPropertyValue(`content`).replace(Ie,``),n=c.codePointAt(0),l=n>=x6[0]&&n<=x6[1],i=c.length===2?c[0]===c[1]:!1;return l||i||t}function qc(a,t){var e=a.replace(/^['"]|['"]$/g,``).toLowerCase(),c=parseInt(t),n=isNaN(c)?`normal`:c;return(b3[e]||{})[n]||jc[e]}function N6(a,t){var e=``.concat(_a).concat(t.replace(`:`,`-`));return new Promise(function(c,n){if(a.getAttribute(e)!==null)return c();var i=s1(a.children).filter(function(G2){return G2.getAttribute(s3)===t})[0],r=T2.getComputedStyle(a,t),o=r.getPropertyValue(`font-family`),f=o.match(Ba),d=r.getPropertyValue(`font-weight`),u=r.getPropertyValue(`content`);if(i&&!f)return a.removeChild(i),c();if(f&&u!==`none`&&u!==``){var v=r.getPropertyValue(`content`),g=qc(o,d),C=Wc(v),L=f[0].startsWith(`FontAwesome`),D=Gc(r),V=A3(g,C),K=V;if(L){var G=tc(C);G.iconName&&G.prefix&&(V=G.iconName,g=G.prefix)}if(V&&!D&&(!i||i.getAttribute(y3)!==g||i.getAttribute(x3)!==K)){a.setAttribute(e,K),i&&a.removeChild(i);var z2=Ec(),f2=z2.extra;f2.attributes[s3]=t,v3(V,g).then(function(G2){var D4=D3(m(m({},z2),{},{icons:{main:G2,mask:De()},prefix:g,iconName:K,extra:f2,watchable:!0})),q2=R.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?a.insertBefore(q2,a.firstChild):a.appendChild(q2),q2.outerHTML=D4.map(function(U8){return D1(U8)}).join(`
`),a.removeAttribute(e),c()}).catch(n)}else c()}else c()})}function Xc(a){return Promise.all([N6(a,`::before`),N6(a,`::after`)])}function Yc(a){return a.parentNode!==document.head&&!~Ta.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(s3)&&(!a.parentNode||a.parentNode.tagName!==`svg`)}var Kc=function(t){return!!t&&ue.some(function(e){return t.includes(e)})};var Qc=function(t){if(!t)return[];var e=new Set,c=t.split(/,(?![^()]*\))/).map(function(o){return o.trim()});c=c.flatMap(function(o){return o.includes(`(`)?o:o.split(`,`).map(function(f){return f.trim()})});var n=s4(c),l;try{for(n.s();!(l=n.n()).done;){var i=l.value;if(Kc(i)){var r=ue.reduce(function(o,f){return o.replace(f,``)},i);r!==``&&r!==`*`&&e.add(r)}}}catch(o){n.e(o)}finally{n.f()}return e};function w6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(N2){var e;if(t)e=a;else if(M.searchPseudoElementsFullScan)e=a.querySelectorAll(`*`);else{var c=new Set,n=s4(document.styleSheets),l;try{for(n.s();!(l=n.n()).done;){var i=l.value;try{var r=s4(i.cssRules),o;try{for(r.s();!(o=r.n()).done;){var f=o.value,u=s4(Qc(f.selectorText)),v;try{for(u.s();!(v=u.n()).done;){var g=v.value;c.add(g)}}catch(L){u.e(L)}finally{u.f()}}}catch(L){r.e(L)}finally{r.f()}}catch(L){M.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: `.concat(i.href,` (`).concat(L.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(L){n.e(L)}finally{n.f()}if(!c.size)return;var C=Array.from(c).join(`, `);try{e=a.querySelectorAll(C)}catch{}}return new Promise(function(L,D){var V=s1(e).filter(Yc).map(Xc),K=_3.begin(`searchPseudoElements`);Pe(),Promise.all(V).then(function(){K(),M3(),L()}).catch(function(){K(),M3(),D()})})}}var Zc={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=w6,e}}},provides:function(t){t.pseudoElements2svg=function(e){var c=e.node,n=c===void 0?R:c;M.searchPseudoElements&&w6(n)}}};var k6=!1;var Jc={mixout:function(){return{dom:{unwatch:function(){Pe(),k6=!0}}}},hooks:function(){return{bootstrap:function(){L6(p3(`mutationObserverCallbacks`,{}))},noAuto:function(){Dc()},watch:function(e){var c=e.observeMutationsRoot;k6?M3():L6(p3(`mutationObserverCallbacks`,{observeMutationsRoot:c}))}}}};var A6=function(t){return t.toLowerCase().split(` `).reduce(function(c,n){var l=n.toLowerCase().split(`-`),i=l[0],r=l.slice(1).join(`-`);if(i&&r===`h`)return c.flipX=!0,c;if(i&&r===`v`)return c.flipY=!0,c;if(r=parseFloat(r),isNaN(r))return c;switch(i){case`grow`:c.size=c.size+r;break;case`shrink`:c.size=c.size-r;break;case`left`:c.x=c.x-r;break;case`right`:c.x=c.x+r;break;case`up`:c.y=c.y-r;break;case`down`:c.y=c.y+r;break;case`rotate`:c.rotate=c.rotate+r;break}return c},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})};var et={mixout:function(){return{parse:{transform:function(e){return A6(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,c){var n=c.getAttribute(`data-fa-transform`);return n&&(e.transform=A6(n)),e}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var c=e.main,n=e.transform,l=e.containerWidth,i=e.iconWidth,r={transform:`translate(`.concat(l/2,` 256)`)},o=`translate(`.concat(n.x*32,`, `).concat(n.y*32,`) `),f=`scale(`.concat(n.size/16*(n.flipX?-1:1),`, `).concat(n.size/16*(n.flipY?-1:1),`) `),d=`rotate(`.concat(n.rotate,` 0 0)`),g={outer:r,inner:{transform:``.concat(o,` `).concat(f,` `).concat(d)},path:{transform:`translate(`.concat(i/2*-1,` -256)`)}};return{tag:`g`,attributes:m({},g.outer),children:[{tag:`g`,attributes:m({},g.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:m(m({},c.icon.attributes),g.path)}]}]}}}};var l3={x:0,y:0,width:`100%`,height:`100%`};function D6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||t)&&(a.attributes.fill=`black`),a}function at(a){return a.tag===`g`?a.children:[a]}uc([Ya,Rc,Hc,$c,Uc,Zc,Jc,et,{hooks:function(){return{parseNodeAttributes:function(e,c){var n=c.getAttribute(`data-fa-mask`),l=n?z4(n.split(` `).map(function(i){return i.trim()})):De();return l.prefix||(l.prefix=E2()),e.mask=l,e.maskId=c.getAttribute(`data-fa-mask-id`),e}}},provides:function(t){t.generateAbstractMask=function(e){var c=e.children,n=e.attributes,l=e.main,i=e.mask,r=e.maskId,o=e.transform,f=l.width,d=l.icon,u=i.width,v=i.icon,g=Ga({transform:o,containerWidth:u,iconWidth:f}),C={tag:`rect`,attributes:m(m({},l3),{},{fill:`white`})},L=d.children?{children:d.children.map(D6)}:{},D={tag:`g`,attributes:m({},g.inner),children:[D6(m({tag:d.tag,attributes:m(m({},d.attributes),g.path)},L))]},V={tag:`g`,attributes:m({},g.outer),children:[D]},K=`mask-`.concat(r||f6()),G=`clip-`.concat(r||f6()),z2={tag:`mask`,attributes:m(m({},l3),{},{id:K,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[C,V]},f2={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:G},children:at(v)},z2]};return c.push(f2,{tag:`rect`,attributes:m({fill:`currentColor`,"clip-path":`url(#`.concat(G,`)`),mask:`url(#`.concat(K,`)`)},l3)}),{children:c,attributes:n}}}},{provides:function(t){var e=!1;T2.matchMedia&&(e=T2.matchMedia(`(prefers-reduced-motion: reduce)`).matches),t.missingIconAbstract=function(){var c=[],n={fill:`currentColor`},l={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};c.push({tag:`path`,attributes:m(m({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=m(m({},l),{},{attributeName:`opacity`}),r={tag:`circle`,attributes:m(m({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return e||r.children.push({tag:`animate`,attributes:m(m({},l),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:m(m({},i),{},{values:`1;0;1;1;0;1;`})}),c.push(r),c.push({tag:`path`,attributes:m(m({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:e?[]:[{tag:`animate`,attributes:m(m({},i),{},{values:`1;0;0;0;0;1;`})}]}),e||c.push({tag:`path`,attributes:m(m({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:m(m({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:c}}}},{hooks:function(){return{parseNodeAttributes:function(e,c){var n=c.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:s2});s2.noAuto;var Ve=s2.config;s2.library;var Oe=s2.dom;var Re=s2.parse;s2.findIconDefinition;s2.toHtml;var He=s2.icon;s2.layer;s2.text;s2.counter;var ot=[`*`];var st=(()=>{class a{defaultPrefix=`fas`;fallbackIcon=null;fixedWidth;set autoAddCss(e){Ve.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static ɵfac=function(c){return new(c||a)};static ɵprov=S({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var ft=(()=>{class a{definitions={};addIcons(...e){for(let c of e){c.prefix in this.definitions||(this.definitions[c.prefix]={}),this.definitions[c.prefix][c.iconName]=c;for(let n of c.icon[2])typeof n==`string`&&(this.definitions[c.prefix][n]=c)}}addIconPacks(...e){for(let c of e){let n=Object.keys(c).map(l=>c[l]);this.addIcons(...n)}}getIconDefinition(e,c){return e in this.definitions&&c in this.definitions[e]?this.definitions[e][c]:null}static ɵfac=function(c){return new(c||a)};static ɵprov=S({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var dt=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)};var ut=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")};var Ue=a=>a!=null&&(a===90||a===180||a===270||a===`90`||a===`180`||a===`270`);var mt=a=>{let t=Ue(a.rotate),e={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith(`spin`),"fa-spin":a.animation===`spin`||a.animation===`spin-reverse`,"fa-spin-pulse":a.animation===`spin-pulse`||a.animation===`spin-pulse-reverse`,"fa-spin-reverse":a.animation===`spin-reverse`||a.animation===`spin-pulse-reverse`,"fa-pulse":a.animation===`spin-pulse`||a.animation===`spin-pulse-reverse`,"fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip===`horizontal`||a.flip===`both`,"fa-flip-vertical":a.flip===`vertical`||a.flip===`both`,[`fa-${a.size}`]:a.size!=null,[`fa-rotate-${a.rotate}`]:t,"fa-rotate-by":a.rotate!=null&&!t,[`fa-pull-${a.pull}`]:a.pull!=null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(e).map(c=>e[c]?c:null).filter(c=>c!=null)};var T3=new WeakSet;var $e=`fa-auto-css`;function pt(a,t,e){if(!t.autoAddCss||T3.has(a))return;if(a.getElementById($e)!=null){t.autoAddCss=!1,T3.add(a);return}let c=a.createElement(`style`);c.setAttribute(`type`,`text/css`),c.setAttribute(`id`,$e),e&&c.setAttribute(`nonce`,e),c.innerHTML=Oe.css();let n=a.head.childNodes,l=null;for(let i=n.length-1;i>-1;i--){let r=n[i],o=r.nodeName.toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(l=r)}a.head.insertBefore(c,l),t.autoAddCss=!1,T3.add(a)}var ht=a=>a.prefix!==void 0&&a.iconName!==void 0;var gt=(a,t)=>ht(a)?a:Array.isArray(a)&&a.length===2?{prefix:a[0],iconName:a[1]}:{prefix:t,iconName:a};var vt=(()=>{class a{stackItemSize=Ol(`1x`);size=Ol();_effect=Xi(()=>{if(this.size())throw new Error(`fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.`)});static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[`fa-icon`,`stackItemSize`,``],[`fa-duotone-icon`,`stackItemSize`,``]],inputs:{stackItemSize:[1,`stackItemSize`],size:[1,`size`]}})}return a})();var zt=(()=>{class a{size=Ol();classes=Ms(()=>{let e=this.size();return F(D({},e?{[`fa-${e}`]:!0}:{}),{"fa-stack":!0})});static ɵfac=function(c){return new(c||a)};static ɵcmp=Qo({type:a,selectors:[[`fa-stack`]],hostVars:2,hostBindings:function(c,n){c&2&&tA(n.classes())},inputs:{size:[1,`size`]},ngContentSelectors:ot,decls:1,vars:0,template:function(c,n){c&1&&(Tl(),_l(0))},encapsulation:2})}return a})();var Ql=(()=>{class a{icon=Y4$1();title=Y4$1();animation=Y4$1();mask=Y4$1();flip=Y4$1();size=Y4$1();pull=Y4$1();border=Y4$1();inverse=Y4$1();symbol=Y4$1();rotate=Y4$1();fixedWidth=Y4$1();transform=Y4$1();a11yRole=Y4$1();renderedIconHTML=Ms(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return ut(),``;let c=this.findIconDefinition(e);if(!c)return``;let n=this.buildParams();pt(this.document,this.config,this.cspNonce);let l=He(c,n);return this.sanitizer.bypassSecurityTrustHtml(l.html.join(`
`))});cspNonce=m$1(Ki);document=m$1(q);sanitizer=m$1(MR);config=m$1(st);iconLibrary=m$1(ft);stackItem=m$1(vt,{optional:!0});stack=m$1(zt,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error(`FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.`)}findIconDefinition(e){let c=gt(e,this.config.defaultPrefix);if(`icon`in c)return c;return this.iconLibrary.getIconDefinition(c.prefix,c.iconName)??(dt(c),null)}buildParams(){let e=this.fixedWidth(),c={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e==`boolean`?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},n=this.transform(),l=typeof n==`string`?Re.transform(n):n,i=this.mask(),r=i!=null?this.findIconDefinition(i):null,o={},f=this.a11yRole();f!=null&&(o.role=f);let d={};return c.rotate!=null&&!Ue(c.rotate)&&(d[`--fa-rotate-angle`]=`${c.rotate}`),{title:this.title(),transform:l,classes:mt(c),mask:r??void 0,symbol:this.symbol(),attributes:o,styles:d}}static ɵfac=function(c){return new(c||a)};static ɵcmp=Qo({type:a,selectors:[[`fa-icon`]],hostAttrs:[1,`ng-fa-icon`],hostVars:2,hostBindings:function(c,n){c&2&&(ND(`innerHTML`,n.renderedIconHTML(),wT),Cl$1(`title`,n.title()??void 0))},inputs:{icon:[1,`icon`],title:[1,`title`],animation:[1,`animation`],mask:[1,`mask`],flip:[1,`flip`],size:[1,`size`],pull:[1,`pull`],border:[1,`border`],inverse:[1,`inverse`],symbol:[1,`symbol`],rotate:[1,`rotate`],fixedWidth:[1,`fixedWidth`],transform:[1,`transform`],a11yRole:[1,`a11yRole`]},outputs:{icon:`iconChange`,title:`titleChange`,animation:`animationChange`,mask:`maskChange`,flip:`flipChange`,size:`sizeChange`,pull:`pullChange`,border:`borderChange`,inverse:`inverseChange`,symbol:`symbolChange`,rotate:`rotateChange`,fixedWidth:`fixedWidthChange`,transform:`transformChange`,a11yRole:`a11yRoleChange`},decls:0,vars:0,template:function(c,n){},encapsulation:2})}return a})();var Zl=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({})}return a})();var ai={prefix:`fas`,iconName:`mobile`,icon:[384,512,[128241,`mobile-android`,`mobile-phone`],`f3ce`,`M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]};var ci={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]};var ti={prefix:`fas`,iconName:`trash`,icon:[448,512,[],`f1f8`,`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`]};var ni={prefix:`fas`,iconName:`right-to-bracket`,icon:[512,512,[`sign-in-alt`],`f2f6`,`M345 273c9.4-9.4 9.4-24.6 0-33.9L201 95c-6.9-6.9-17.2-8.9-26.2-5.2S160 102.3 160 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L345 273zm7 143c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0z`]};var li={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]};var ii={prefix:`fas`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z`]};var ri={prefix:`fas`,iconName:`plus`,icon:[448,512,[10133,61543,`add`],`2b`,`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]};var oi={prefix:`fas`,iconName:`copy`,icon:[448,512,[],`f0c5`,`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]};var si={prefix:`fas`,iconName:`eye-slash`,icon:[576,512,[],`f070`,`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z`]};var fi={prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]};function B2(...a){let t=[];for(let e=0;e<a.length;e++){let c=a[e];if(!c)continue;let n=typeof c;if(n===`string`||n===`number`)t.push(c);else if(n===`object`){let l=Array.isArray(c)?[B2(...c)]:Object.entries(c).map(([i,r])=>r?i:void 0);t=l.length?t.concat(l.filter(i=>!!i)):t}}return t.join(` `).trim()}var Lt=Object.defineProperty;var je=Object.getOwnPropertySymbols;var Ct=Object.prototype.hasOwnProperty;var yt=Object.prototype.propertyIsEnumerable;var We=(a,t,e)=>t in a?Lt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var Ge=(a,t)=>{for(var e in t||(t={}))Ct.call(t,e)&&We(a,e,t[e]);if(je)for(var e of je(t))yt.call(t,e)&&We(a,e,t[e]);return a};function qe(...a){let t=[];for(let e=0;e<a.length;e++){let c=a[e];if(!c)continue;let n=typeof c;if(n===`string`||n===`number`)t.push(c);else if(n===`object`){let l=Array.isArray(c)?[qe(...c)]:Object.entries(c).map(([i,r])=>r?i:void 0);t=l.length?t.concat(l.filter(i=>!!i)):t}}return t.join(` `).trim()}function xt(a){return typeof a==`function`&&`call`in a&&`apply`in a}function St({skipUndefined:a=!1},...t){return t?.reduce((e,c={})=>{for(let n in c){let l=c[n];if(!(a&&l===void 0))if(n===`style`)e.style=Ge(Ge({},e.style),c.style);else if(n===`class`||n===`className`)e[n]=qe(e[n],c[n]);else if(xt(l)){let i=e[n];e[n]=i?(...r)=>{i(...r),l(...r)}:l}else e[n]=l}return e},{})}function E3(...a){return St({skipUndefined:!1},...a)}var b4={};function Xe(a=`pui_id_`){return Object.hasOwn(b4,a)||(b4[a]=0),b4[a]++,`${a}${b4[a]}`}var Ye=(()=>{class a extends BC{name=`common`;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var W=new C(`PARENT_INSTANCE`);var I=(()=>{class a{document=m$1(q);platformId=m$1(Br$1);el=m$1(Pt$1);injector=m$1(_e$1);cd=m$1(Xr$1);renderer=m$1(wn$1);config=m$1(Mk);$parentInstance=m$1(W,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=m$1(Ye);baseStyle=m$1(BC);scopedStyleEl;parent=this.$params.parent;cn=B2;_themeScopedListener;themeChangeListenerMap=new Map;dt=Ol();unstyled=Ol();pt=Ol();ptOptions=Ol();$attrSelector=Xe(`pc`);get $name(){return this.componentName||`UnknownComponent`}get $hostName(){let e=this.hostName;return Ji(e)?e():e}get $el(){return this.el?.nativeElement}directivePT=B(void 0);directiveUnstyled=B(void 0);$unstyled=Ms(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=Ms(()=>He$1(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>He$1(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||He$1(e,this.$params))}_$styleCache;get $style(){return this._$styleCache||(this._$styleCache=D(D({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)),this._$styleCache}get $styleOptions(){return{nonce:this.config?.csp().nonce}}_$paramsCache;get $params(){if(!this._$paramsCache){let e=this._getHostInstance(this)||this.$parentInstance;this._$paramsCache={instance:this,parent:{instance:e}}}return this._$paramsCache}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){Xi(e=>{this.document&&!Mz(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(`_themeScopedListener`,this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener(`_themeScopedListener`)})}),Xi(e=>{this.document&&!Mz(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(`_loadCoreStyles`,this._loadCoreStyles))),e(()=>{this._offThemeChangeListener(`_loadCoreStyles`)})}),this._hook(`onBeforeInit`)}ngOnInit(){this._$paramsCache=void 0,this._$styleCache=void 0,this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook(`onInit`)}ngOnChanges(e){this.onChanges(e),this._hook(`onChanges`,e)}ngDoCheck(){this.onDoCheck(),this._hook(`onDoCheck`)}ngAfterContentInit(){this.onAfterContentInit(),this._hook(`onAfterContentInit`)}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook(`onAfterContentChecked`)}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,``),this.config?.verified()===!1&&SI(),this.onAfterViewInit(),this._hook(`onAfterViewInit`)}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook(`onAfterViewChecked`)}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook(`onDestroy`)}_mergeProps(e,...c){return pC(e)?e(...c):E3(...c)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,c=``,n={}){return hC(e,c,n)}_hook(e,...c){if(this.$hostName||!this.pt()&&!this.directivePT()&&!this.config?.pt())return;let n=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),l=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);n?.(...c),l?.(...c)}_load(){y9.isStyleNameLoaded(`base`)||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),y9.setLoadedStyleName(`base`)),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(`_load`,()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,`global.css`,this.$params);le$1(e)&&this.baseStyle.load(e,D({name:`global`},this.$styleOptions))}_loadCoreStyles(){!y9.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),y9.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()===`none`)){if(!ne$1.isStyleNameLoaded(`common`)){let{primitive:e,semantic:c,global:n,style:l}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,D({name:`primitive-variables`},this.$styleOptions)),this.baseStyle.load(c?.css,D({name:`semantic-variables`},this.$styleOptions)),this.baseStyle.load(n?.css,D({name:`global-variables`},this.$styleOptions)),this.baseStyle.loadBaseStyle(D({name:`global-style`},this.$styleOptions),l),ne$1.setLoadedStyleName(`common`)}if(!ne$1.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:c}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,D({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(D({name:`${this.$style?.name}-style`},this.$styleOptions),c),ne$1.setLoadedStyleName(this.$style?.name)}if(!ne$1.isStyleNameLoaded(`layer-order`)){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,D({name:`layer-order`,first:!0},this.$styleOptions)),ne$1.setLoadedStyleName(`layer-order`)}}}_loadScopedThemeStyles(e){this.config?.theme()?.options?.cssVariables===!1&&this.$style?.name&&ne$1.addScopedToken({[this.$style.name]:e})&&(ne$1.deleteLoadedStyleName(this.$style.name),this._loadThemeStyles());let{css:c}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},n=this.$style?.load(c,D({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,c=()=>{}){this._offThemeChangeListener(e),y9.clearLoadedStyleNames();let n=c.bind(this);this.themeChangeListenerMap.set(e,n),an$1.on(`theme:change`,n)}_removeThemeListeners(){this._offThemeChangeListener(`_themeScopedListener`),this._offThemeChangeListener(`_loadCoreStyles`),this._offThemeChangeListener(`_load`)}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(an$1.off(`theme:change`,this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},c=``,n={},l=!0){let i=/./g.test(c)&&!!n[c.split(`.`)[0]],{mergeSections:r=!0,mergeProps:o=!1}=this._getPropValue(`ptOptions`)?.()||this.config?.ptOptions?.()||{},f=l?i?this._useGlobalPT(this._getPTClassValue,c,n):this._useDefaultPT(this._getPTClassValue,c,n):void 0,d=i?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,c,F(D({},n),{global:f||{}})),u=this._getPTDatasets(c);return r||!r&&d?o?this._mergeProps(o,f,d,u):D(D(D({},f),d),u):D(D({},d),u)}_getPTDatasets(e=``){let c=`data-pc-`,n=e===`root`&&le$1(this.$pt()?.[`data-pc-section`]);return e!==`transition`&&F(D({},e===`root`&&F(D({[`${c}name`]:uC(n?this.$pt()?.[`data-pc-section`]:this.$name)},n&&{[`${c}extend`]:uC(this.$name)}),{[`${this.$attrSelector}`]:``})),{[`${c}section`]:uC(e.includes(`.`)?e.split(`.`).at(-1)??``:e)})}_getPTClassValue(e,c,n){let l=this._getOptionValue(e,c,n);return On$1(l)||yL(l)?{class:l}:l}_getPT(e,c=``,n){let l=(i,r=!1)=>{let o=n?n(i):i,f=uC(c),d=uC(this.$hostName||this.$name);return(r?f!==d?o?.[f]:void 0:o?.[f])??o};return e?.hasOwnProperty(`_usept`)?{_usept:e._usept,originalValue:l(e.originalValue),value:l(e.value)}:l(e,!0)}_usePT(e,c,n,l){let i=r=>c?.call(this,r,n,l);if(e?.hasOwnProperty(`_usept`)){let{mergeSections:r=!0,mergeProps:o=!1}=e._usept||this.config?.ptOptions()||{},f=i(e.originalValue),d=i(e.value);return f===void 0&&d===void 0?void 0:On$1(d)?d:On$1(f)?f:r||!r&&d?o?this._mergeProps(o,f,d):D(D({},f),d):d}return i(e)}_useGlobalPT(e,c,n){return this._usePT(this.$globalPT,e,c,n)}_useDefaultPT(e,c,n){return this._usePT(this.$defaultPT,e,c,n)}ptm(e=``,c={}){return this._getPTValue(this.$pt(),e,D(D({},this.$params),c))}ptms(e,c={}){return e.reduce((n,l)=>(n=E3(n,this.ptm(l,c))||{},n),{})}ptmo(e={},c=``,n={}){return this._getPTValue(e,c,D({instance:this},n),!1)}cx(e,c={}){return this.$unstyled()?void 0:B2(this._getOptionValue(this.$style.classes,e,D(D({},this.$params),c)))}sx(e=``,c=!0,n={}){if(c){let l=this._getOptionValue(this.$style.inlineStyles,e,D(D({},this.$params),n));return D(D({},this._getOptionValue(this.baseComponentStyle.inlineStyles,e,D(D({},this.$params),n))),l)}}translate(e,c){let n=this.config.getTranslation(e);return c?n?.[c]:n}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,inputs:{dt:[1,`dt`],unstyled:[1,`unstyled`],pt:[1,`pt`],ptOptions:[1,`ptOptions`]},features:[EA([Ye,BC]),Xt$1]})}return a})();var x=(()=>{class a{pBind=Ol(void 0);_attrs=B(void 0);attrs=Ms(()=>this._attrs()||this.pBind());styles=Ms(()=>this.attrs()?.style);classes=Ms(()=>B2(this.attrs()?.class));listeners=[];el=m$1(Pt$1);renderer=m$1(wn$1);constructor(){Xi(()=>{let l=this.attrs()||{},{style:e,class:c}=l,n=qI(l,[`style`,`class`]);for(let[i,r]of Object.entries(n))if(i.startsWith(`on`)&&typeof r==`function`){let o=i.slice(2).toLowerCase();if(!this.listeners.some(f=>f.eventName===o)){let f=this.renderer.listen(this.el.nativeElement,o,r);this.listeners.push({eventName:o,unlisten:f})}}else r==null?this.renderer.removeAttribute(this.el.nativeElement,i):(this.renderer.setAttribute(this.el.nativeElement,i,r.toString()),i in this.el.nativeElement&&(this.el.nativeElement[i]=r))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){fg(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[``,`pBind`,``]],hostVars:4,hostBindings:function(c,n){c&2&&(JN(n.styles()),tA(n.classes()))},inputs:{pBind:[1,`pBind`]}})}return a})();var f1=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({})}return a})();var Nt=[`*`];var wt={root:`p-fluid`};var Ke=(()=>{class a extends BC{name=`fluid`;classes=wt;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var Qe=new C(`FLUID_INSTANCE`);var I2=(()=>{class a extends I{componentName=`Fluid`;$pcFluid=m$1(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=m$1(Ke);static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵcmp=Qo({type:a,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(c,n){c&2&&tA(n.cx(`root`))},features:[EA([Ke,{provide:Qe,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],ngContentSelectors:Nt,decls:1,vars:0,template:function(c,n){c&1&&(Tl(),_l(0))},dependencies:[$l],encapsulation:2})}return a})();var Hi=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({imports:[I2]})}return a})();var kt=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var At={root:`p-ink`};var Je=(()=>{class a extends BC{name=`ripple`;style=kt;classes=At;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var L4=(()=>{class a extends I{componentName=`Ripple`;_componentStyle=m$1(Je);animationListener;mouseDownListener;timeout;constructor(){super(),Xi(()=>{_z(this.platformId)&&(this.config.ripple()?(this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))):this.remove())})}onMouseDown(e){let c=this.getInk();if(!c||this.document.defaultView?.getComputedStyle(c,null).display===`none`)return;if(!this.$unstyled()&&vC(c,`p-ink-active`),c.setAttribute(`data-p-ink-active`,`false`),!EW(c)&&!IW(c)){let r=Math.max(lW(this.el.nativeElement),PL(this.el.nativeElement));c.style.height=r+`px`,c.style.width=r+`px`}let n=bW(this.el.nativeElement),l=e.pageX-n.left+this.document.body.scrollTop-IW(c)/2,i=e.pageY-n.top+this.document.body.scrollLeft-EW(c)/2;this.renderer.setStyle(c,`top`,i+`px`),this.renderer.setStyle(c,`left`,l+`px`),!this.$unstyled()&&yC(c,`p-ink-active`),c.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let r=this.getInk();r&&(!this.$unstyled()&&vC(r,`p-ink-active`),r.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let e=this.el.nativeElement.children;for(let c=0;c<e.length;c++)if(typeof e[c].className==`string`&&e[c].className.indexOf(`p-ink`)!==-1)return e[c];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&vC(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&vC(e.currentTarget,`p-ink-active`),e.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let e=this.renderer.createElement(`span`);this.renderer.addClass(e,`p-ink`),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,`data-p-ink`,`true`),this.renderer.setAttribute(e,`data-p-ink-active`,`false`),this.renderer.setAttribute(e,`aria-hidden`,`true`),this.renderer.setAttribute(e,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(e,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,AW(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[EA([Je]),wD]})}return a})();var e8=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: dt('button.font.size');
        font-weight: dt('button.label.font.weight');
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var C4=(()=>{class a{_iconSignal=B(null);get _icon(){return this._iconSignal()}set _icon(e){this._iconSignal.set(e)}size=Ol(void 0);color=Ol(void 0);styleClass=Ol(void 0);spin=Ol(void 0);iconNodes=Ms(()=>this._iconSignal()?.nodes??[]);computedSize=Ms(()=>this.size()??20);computedClass=Ms(()=>{let e=this._iconSignal();return B2(`p-icon`,e?.name&&`p-icon-${e.name}`,this.spin()&&`p-icon-spin`,this.styleClass())});get hostWidth(){return this.computedSize()}get hostHeight(){return this.computedSize()}get hostViewBox(){return this._iconSignal()?.svg?.viewBox}get hostFill(){return this._iconSignal()?.svg?.fill}get hostXmlns(){return this._iconSignal()?.svg?.xmlns}hostAriaHidden=`true`;get hostClass(){return this.computedClass()}get hostColor(){return this.color()||null}get hostIconSize(){return this.size()?`${this.size()}px`:null}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,hostVars:12,hostBindings:function(c,n){c&2&&(Cl$1(`width`,n.hostWidth)(`height`,n.hostHeight)(`viewBox`,n.hostViewBox)(`fill`,n.hostFill)(`xmlns`,n.hostXmlns)(`aria-hidden`,n.hostAriaHidden),tA(n.hostClass),Nl$1(`color`,n.hostColor)(`--%NS%px-icon-size`,n.hostIconSize))},inputs:{size:[1,`size`],color:[1,`color`],styleClass:[1,`styleClass`],spin:[1,`spin`]}})}return a})();var a8={name:`spinner`,meta:{tags:[`spinner`,`loading`,`process`,`wait`,`buffering`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M1 10C1 5.02579 5.02579 1 10 1C12.3905 1 14.562 1.9393 16.1738 3.45312C16.4756 3.73669 16.4905 4.21178 16.207 4.51367C15.9235 4.81558 15.4484 4.83039 15.1465 4.54688C13.7983 3.2807 11.9895 2.5 10 2.5C5.85421 2.5 2.5 5.85421 2.5 10C2.5 14.1458 5.85421 17.5 10 17.5C14.1458 17.5 17.5 14.1458 17.5 10C17.5 9.58579 17.8358 9.25 18.25 9.25C18.6642 9.25 19 9.58579 19 10C19 14.9742 14.9742 19 10 19C5.02579 19 1 14.9742 1 10Z`,fill:`currentColor`,key:`p4wko0`}]]};var _t=(a,t)=>t[1].key||a;function Ft(a,t){if(a&1&&(Iy(),TD(0,`path`)),a&2){let e=PN().$implicit;Cl$1(`d`,e[1].d)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`fill-rule`,e[1].fillRule)(`clip-rule`,e[1].clipRule)(`stroke`,e[1].stroke)(`stroke-width`,e[1].strokeWidth)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function Tt(a,t){if(a&1&&(Iy(),TD(0,`circle`)),a&2){let e=PN().$implicit;Cl$1(`cx`,e[1].cx)(`cy`,e[1].cy)(`r`,e[1].r)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Et(a,t){if(a&1&&(Iy(),TD(0,`rect`)),a&2){let e=PN().$implicit;Cl$1(`x`,e[1].x)(`y`,e[1].y)(`width`,e[1].width)(`height`,e[1].height)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Pt(a,t){if(a&1&&(Iy(),TD(0,`line`)),a&2){let e=PN().$implicit;Cl$1(`x1`,e[1].x1)(`y1`,e[1].y1)(`x2`,e[1].x2)(`y2`,e[1].y2)(`stroke`,e[1].stroke)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function Bt(a,t){if(a&1&&(Iy(),TD(0,`polyline`)),a&2){let e=PN().$implicit;Cl$1(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function It(a,t){if(a&1&&(Iy(),TD(0,`polygon`)),a&2){let e=PN().$implicit;Cl$1(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Vt(a,t){if(a&1&&(Iy(),TD(0,`ellipse`)),a&2){let e=PN().$implicit;Cl$1(`cx`,e[1].cx)(`cy`,e[1].cy)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Ot(a,t){if(a&1&&DN(0,Ft,1,9,`:svg:path`)(1,Tt,1,6,`:svg:circle`)(2,Et,1,9,`:svg:rect`)(3,Pt,1,7,`:svg:line`)(4,Bt,1,4,`:svg:polyline`)(5,It,1,4,`:svg:polygon`)(6,Vt,1,7,`:svg:ellipse`),a&2){let e,c=t.$implicit;wN((e=c[0])===`path`?0:e===`circle`?1:e===`rect`?2:e===`line`?3:e===`polyline`?4:e===`polygon`?5:e===`ellipse`?6:-1)}}var c8=(()=>{class a extends C4{constructor(){super(),this._icon=a8}static ɵfac=function(c){return new(c||a)};static ɵcmp=Qo({type:a,selectors:[[`svg`,`data-p-icon`,`spinner`]],features:[wD],decls:2,vars:0,template:function(c,n){c&1&&IN(0,Ot,7,1,null,null,_t),c&2&&SN(n.iconNodes())},encapsulation:2,changeDetection:1})}return a})();var P3=(()=>{class a{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,c){e&&c&&(e.classList?e.classList.add(c):e.className+=` `+c)}static addMultipleClasses(e,c){if(e&&c)if(e.classList){let n=c.trim().split(` `);for(let l=0;l<n.length;l++)e.classList.add(n[l])}else{let n=c.split(` `);for(let l=0;l<n.length;l++)e.className+=` `+n[l]}}static removeClass(e,c){e&&c&&(e.classList?e.classList.remove(c):e.className=e.className.replace(new RegExp(`(^|\\b)`+c.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `))}static removeMultipleClasses(e,c){e&&c&&[c].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(l=>this.removeClass(e,l)))}static hasClass(e,c){return e&&c?e.classList?e.classList.contains(c):new RegExp(`(^| )`+c+`( |$)`,`gi`).test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(c){return c!==e})}static find(e,c){return Array.from(e.querySelectorAll(c))}static findSingle(e,c){return this.isElement(e)?e.querySelector(c):null}static index(e){let c=e.parentNode.childNodes,n=0;for(var l=0;l<c.length;l++){if(c[l]==e)return n;c[l].nodeType==1&&n++}return-1}static indexWithinGroup(e,c){let n=e.parentNode?e.parentNode.childNodes:[],l=0;for(var i=0;i<n.length;i++){if(n[i]==e)return l;n[i].attributes&&n[i].attributes[c]&&n[i].nodeType==1&&l++}return-1}static appendOverlay(e,c,n=`self`){n!==`self`&&e&&c&&this.appendChild(e,c)}static alignOverlay(e,c,n=`self`,l=!0){e&&c&&(l&&(e.style.minWidth=`${a.getOuterWidth(c)}px`),n===`self`?this.relativePosition(e,c):this.absolutePosition(e,c))}static relativePosition(e,c,n=!0){let l=G=>{if(G)return getComputedStyle(G).getPropertyValue(`position`)===`relative`?G:l(G.parentElement)},i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=c.offsetHeight,o=c.getBoundingClientRect(),f=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),u=this.getViewport(),g=l(e)?.getBoundingClientRect()||{top:-1*f,left:-1*d},C,L,D=`top`;o.top+r+i.height>u.height?(C=o.top-g.top-i.height,D=`bottom`,o.top+C<0&&(C=-1*o.top)):(C=r+o.top-g.top,D=`top`);let V=o.left+i.width-u.width,K=o.left-g.left;if(i.width>u.width?L=(o.left-g.left)*-1:V>0?L=K-V:L=o.left-g.left,e.style.top=C+`px`,e.style.left=L+`px`,e.style.transformOrigin=D,n){let G=hg(/-anchor-gutter$/)?.value;e.style.marginTop=D===`bottom`?`calc(${G??`2px`} * -1)`:G??``}}static absolutePosition(e,c,n=!0){let l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=l.height,r=l.width,o=c.offsetHeight,f=c.offsetWidth,d=c.getBoundingClientRect(),u=this.getWindowScrollTop(),v=this.getWindowScrollLeft(),g=this.getViewport(),C,L;d.top+o+i>g.height?(C=d.top+u-i,e.style.transformOrigin=`bottom`,C<0&&(C=u)):(C=o+d.top+u,e.style.transformOrigin=`top`),d.left+r>g.width?L=Math.max(0,d.left+v+f-r):L=d.left+v,e.style.top=C+`px`,e.style.left=L+`px`,n&&(e.style.marginTop=origin===`bottom`?`calc(var(--p-anchor-gutter) * -1)`:`calc(var(--p-anchor-gutter))`)}static getParents(e,c=[]){return e.parentNode===null?c:this.getParents(e.parentNode,c.concat([e.parentNode]))}static getScrollableParents(e){let c=[];if(e){let n=this.getParents(e),l=/(auto|scroll)/,i=r=>{let o=window.getComputedStyle(r,null);return l.test(o.getPropertyValue(`overflow`))||l.test(o.getPropertyValue(`overflowX`))||l.test(o.getPropertyValue(`overflowY`))};for(let r of n){let o=r.nodeType===1&&r.dataset.scrollselectors;if(o){let f=o.split(`,`);for(let d of f){let u=this.findSingle(r,d);u&&i(u)&&c.push(u)}}r.nodeType!==9&&i(r)&&c.push(r)}}return c}static getHiddenElementOuterHeight(e){e.style.visibility=`hidden`,e.style.display=`block`;let c=e.offsetHeight;return e.style.display=`none`,e.style.visibility=`visible`,c}static getHiddenElementOuterWidth(e){e.style.visibility=`hidden`,e.style.display=`block`;let c=e.offsetWidth;return e.style.display=`none`,e.style.visibility=`visible`,c}static getHiddenElementDimensions(e){let c={};return e.style.visibility=`hidden`,e.style.display=`block`,c.width=e.offsetWidth,c.height=e.offsetHeight,e.style.display=`none`,e.style.visibility=`visible`,c}static scrollInView(e,c){let n=getComputedStyle(e).getPropertyValue(`borderTopWidth`),l=n?parseFloat(n):0,i=getComputedStyle(e).getPropertyValue(`paddingTop`),r=i?parseFloat(i):0,o=e.getBoundingClientRect(),d=c.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-l-r,u=e.scrollTop,v=e.clientHeight,g=this.getOuterHeight(c);d<0?e.scrollTop=u+d:d+g>v&&(e.scrollTop=u+d-v+g)}static fadeIn(e,c){e.style.opacity=0;let n=+new Date,l=0,i=function(){l=+e.style.opacity.replace(`,`,`.`)+(new Date().getTime()-n)/c,e.style.opacity=l,n=+new Date,+l<1&&(window.requestAnimationFrame?window.requestAnimationFrame(i):setTimeout(i,16))};i()}static fadeOut(e,c){var n=1,l=50,r=l/c;let o=setInterval(()=>{n=n-r,n<=0&&(n=0,clearInterval(o)),e.style.opacity=n},l)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,c){var n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(i){return[].indexOf.call(document.querySelectorAll(i),this)!==-1}).call(e,c)}static getOuterWidth(e,c){let n=e.offsetWidth;if(c){let l=getComputedStyle(e);n+=parseFloat(l.marginLeft)+parseFloat(l.marginRight)}return n}static getHorizontalPadding(e){let c=getComputedStyle(e);return parseFloat(c.paddingLeft)+parseFloat(c.paddingRight)}static getHorizontalMargin(e){let c=getComputedStyle(e);return parseFloat(c.marginLeft)+parseFloat(c.marginRight)}static innerWidth(e){let c=e.offsetWidth,n=getComputedStyle(e);return c+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),c}static width(e){let c=e.offsetWidth,n=getComputedStyle(e);return c-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),c}static getInnerHeight(e){let c=e.offsetHeight,n=getComputedStyle(e);return c+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),c}static getOuterHeight(e,c){let n=e.offsetHeight;if(c){let l=getComputedStyle(e);n+=parseFloat(l.marginTop)+parseFloat(l.marginBottom)}return n}static getHeight(e){let c=e.offsetHeight,n=getComputedStyle(e);return c-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),c}static getWidth(e){let c=e.offsetWidth,n=getComputedStyle(e);return c-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),c}static getViewport(){let e=window,c=document,n=c.documentElement,l=c.getElementsByTagName(`body`)[0];return{width:e.innerWidth||n.clientWidth||l.clientWidth,height:e.innerHeight||n.clientHeight||l.clientHeight}}static getOffset(e){var c=e.getBoundingClientRect();return{top:c.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:c.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,c){let n=e.parentNode;if(!n)throw`Can't replace element`;return n.replaceChild(c,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent;if(e.indexOf(`MSIE `)>0)return!0;if(e.indexOf(`Trident/`)>0){e.indexOf(`rv:`);return!0}return e.indexOf(`Edge/`)>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}static appendChild(e,c){if(this.isElement(c))c.appendChild(e);else if(c&&c.el&&c.el.nativeElement)c.el.nativeElement.appendChild(e);else throw`Cannot append `+c+` to `+e}static removeChild(e,c){if(this.isElement(c))c.removeChild(e);else if(c.el&&c.el.nativeElement)c.el.nativeElement.removeChild(e);else throw`Cannot remove `+e+` from `+c}static removeElement(e){`remove`in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement==`object`?e instanceof HTMLElement:e&&typeof e==`object`&&e!==null&&e.nodeType===1&&typeof e.nodeName==`string`}static calculateScrollbarWidth(e){if(e){let c=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(c.borderLeftWidth)-parseFloat(c.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let c=document.createElement(`div`);c.className=`p-scrollbar-measure`,document.body.appendChild(c);let n=c.offsetWidth-c.clientWidth;return document.body.removeChild(c),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement(`div`);e.className=`p-scrollbar-measure`,document.body.appendChild(e);let c=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=c,c}static invokeElementMethod(e,c,n){e[c].apply(e,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),c=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf(`compatible`)<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:c[1]||``,version:c[2]||`0`}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e==`number`&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<`u`&&e.nodeName&&e.parentNode}static focus(e,c){e&&document.activeElement!==e&&e.focus(c)}static getFocusableSelectorString(e=``){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,c=``){let n=this.find(e,this.getFocusableSelectorString(c)),l=[];for(let i of n){let r=getComputedStyle(i);this.isVisible(i)&&r.display!=`none`&&r.visibility!=`hidden`&&l.push(i)}return l}static getFocusableElement(e,c=``){let n=this.findSingle(e,this.getFocusableSelectorString(c));if(n){let l=getComputedStyle(n);if(this.isVisible(n)&&l.display!=`none`&&l.visibility!=`hidden`)return n}return null}static getFirstFocusableElement(e,c=``){let n=this.getFocusableElements(e,c);return n.length>0?n[0]:null}static getLastFocusableElement(e,c){let n=this.getFocusableElements(e,c);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,c=!1){let n=a.getFocusableElements(e),l=0;if(n&&n.length>0){let i=n.indexOf(n[0].ownerDocument.activeElement);c?i==-1||i===0?l=n.length-1:l=i-1:i!=-1&&i!==n.length-1&&(l=i+1)}return n[l]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,c){if(!e)return null;switch(e){case`document`:return document;case`window`:return window;case`@next`:return c?.nextElementSibling;case`@prev`:return c?.previousElementSibling;case`@parent`:return c?.parentElement;case`@grandparent`:return c?.parentElement?.parentElement;default:let n=typeof e;if(n===`string`)return document.querySelector(e);if(n===`object`&&e.hasOwnProperty(`nativeElement`))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let i=(r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e;return i&&i.nodeType===9||this.isExist(i)?i:null}}static isClient(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}static getAttribute(e,c){if(e){let n=e.getAttribute(c);return isNaN(n)?n===`true`||n===`false`?n===`true`:n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e=`p-overflow-hidden`){document.body.style.setProperty(`--px-scrollbar-width`,this.calculateBodyScrollbarWidth()+`px`),this.addClass(document.body,e)}static unblockBodyScroll(e=`p-overflow-hidden`){document.body.style.removeProperty(`--px-scrollbar-width`),this.removeClass(document.body,e)}static createElement(e,c={},...n){if(e){let l=document.createElement(e);return this.setAttributes(l,c),l.append(...n),l}}static setAttribute(e,c=``,n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(c,n)}static setAttributes(e,c={}){if(this.isElement(e)){let n=(l,i)=>{let r=e?.$attrs?.[l]?[e?.$attrs?.[l]]:[];return[i].flat().reduce((o,f)=>{if(f!=null){let d=typeof f;if(d===`string`||d===`number`)o.push(f);else if(d===`object`){let u=Array.isArray(f)?n(l,f):Object.entries(f).map(([v,g])=>l===`style`&&(g||g===0)?`${v.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${g}`:g?v:void 0);o=u.length?o.concat(u.filter(v=>!!v)):o}}return o},r)};Object.entries(c).forEach(([l,i])=>{if(i!=null){let r=l.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),i):l===`pBind`?this.setAttributes(e,i):(i=l===`class`?[...new Set(n(`class`,i))].join(` `).trim():l===`style`?n(`style`,i).join(`;`).trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[l]=i),e.setAttribute(l,i))}})}}static isFocusableElement(e,c=``){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c}`):!1}}return a})();function p9(){iW({variableName:n9(`scrollbar.width`).name})}function h9(){sW({variableName:n9(`scrollbar.width`).name})}var y4=class{element;listener;scrollableParents;constructor(t,e=()=>{}){this.element=t,this.listener=e}bindScrollListener(){this.scrollableParents=P3.getScrollableParents(this.element);for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener(`scroll`,this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener(`scroll`,this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var t8=(()=>{class a extends I{autofocus=Ol(!1,{alias:`pAutoFocus`,transform:In$1});focused=!1;host=m$1(Pt$1);onAfterContentChecked(){this.autofocus()===!1?this.host.nativeElement.removeAttribute(`autofocus`):this.host.nativeElement.setAttribute(`autofocus`,!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){_z(this.platformId)&&this.autofocus()&&setTimeout(()=>{let e=P3.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵdir=Ft$1({type:a,selectors:[[``,`pAutoFocus`,``]],inputs:{autofocus:[1,`pAutoFocus`,`autofocus`]},features:[wD]})}return a})();var Rt=`
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }

`;var Ht={root:({instance:a})=>{let t=a.value(),e=a.size(),c=a.badgeSize(),n=a.severity();return[`p-badge p-component`,{"p-badge-circle":le$1(t)&&String(t).length===1,"p-badge-dot":ra(t),"p-badge-sm":e===`small`||c===`small`,"p-badge-lg":e===`large`||c===`large`,"p-badge-xl":e===`xlarge`||c===`xlarge`,"p-badge-info":n===`info`,"p-badge-success":n===`success`,"p-badge-warn":n===`warn`,"p-badge-danger":n===`danger`,"p-badge-secondary":n===`secondary`,"p-badge-contrast":n===`contrast`}]}};var l8=(()=>{class a extends BC{name=`badge`;style=Rt;classes=Ht;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var i8=new C(`BADGE_INSTANCE`);var B3=(()=>{class a extends I{componentName=`Badge`;$pcBadge=m$1(i8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}badgeSize=Ol();size=Ol();severity=Ol();value=Ol();badgeDisabled=Ol(!1,{transform:In$1});_componentStyle=m$1(l8);displayStyle=Ms(()=>this.badgeDisabled()?`none`:null);dataP=Ms(()=>{let e=this.value(),c=this.severity(),n=this.size();return this.cn({circle:e!=null&&String(e).length===1,empty:e==null,disabled:this.badgeDisabled(),[c]:c,[n]:n})});static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵcmp=Qo({type:a,selectors:[[`p-badge`]],hostVars:5,hostBindings:function(c,n){c&2&&(Cl$1(`data-p`,n.dataP()),tA(n.cx(`root`)),Nl$1(`display`,n.displayStyle()))},inputs:{badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`]},features:[EA([l8,{provide:i8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],decls:1,vars:1,template:function(c,n){c&1&&dA(0),c&2&&qD(n.value())},dependencies:[WW],encapsulation:2})}return a})();var r8=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({imports:[B3,WW,WW]})}return a})();var Ut=[`content`];var jt=[`loadingicon`];var Wt=[`icon`];var Gt=[`*`];function qt(a,t){a&1&&MD(0)}function Xt(a,t){if(a&1&&Il(0,`span`,5),a&2){let e=PN(3);tA(e.cn(e.cx(`loadingIcon`),`pi-spin`,e.$loadingIcon())),SD(`pBind`,e.ptm(`loadingIcon`)),Cl$1(`aria-hidden`,!0)}}function Yt(a,t){if(a&1&&(Iy(),Il(0,`svg`,6)),a&2){let e=PN(3);tA(e.cn(e.cx(`loadingIcon`),e.cx(`spinnerIcon`))),SD(`spin`,!0)(`pBind`,e.ptm(`loadingIcon`)),Cl$1(`aria-hidden`,!0)}}function Kt(a,t){if(a&1&&DN(0,Xt,1,4,`span`,2)(1,Yt,1,5,`:svg:svg`,4),a&2)wN(PN(2).$loadingIcon()?0:1)}function Qt(a,t){a&1&&MD(0)}function Zt(a,t){if(a&1&&CD(0,Qt,1,0,`ng-container`,7),a&2){let e=PN(2);SD(`ngTemplateOutlet`,e.loadingIconTemplate())(`ngTemplateOutletContext`,e.getLoadingIconTemplateContext())}}function Jt(a,t){if(a&1&&DN(0,Kt,2,1)(1,Zt,1,2,`ng-container`),a&2)wN(PN().loadingIconTemplate()?1:0)}function en(a,t){if(a&1&&Il(0,`span`,5),a&2){let e=PN(2);tA(e.cn(e.cx(`icon`),e.$icon())),SD(`pBind`,e.ptm(`icon`)),Cl$1(`data-p`,e.dataIconP())}}function an(a,t){a&1&&MD(0)}function cn(a,t){if(a&1&&CD(0,an,1,0,`ng-container`,7),a&2){let e=PN(2);SD(`ngTemplateOutlet`,e.iconTemplate())(`ngTemplateOutletContext`,e.getIconTemplateContext())}}function tn(a,t){if(a&1&&(DN(0,en,1,4,`span`,2),DN(1,cn,1,2,`ng-container`)),a&2){let e=PN();wN(e.$icon()&&!e.iconTemplate()?0:-1),v_(),wN(!e.icon()&&e.iconTemplate()?1:-1)}}function nn(a,t){if(a&1&&(rl(0,`span`,5),dA(1),Zp()),a&2){let e=PN();tA(e.cx(`label`)),SD(`pBind`,e.ptm(`label`)),Cl$1(`aria-hidden`,e.$icon()&&!e.$label())(`data-p`,e.dataLabelP()),v_(),qD(e.$label())}}function ln(a,t){if(a&1&&Il(0,`p-badge`,3),a&2){let e=PN();SD(`value`,e.$badge())(`severity`,e.$badgeSeverity())(`pt`,e.ptm(`pcBadge`))(`unstyled`,e.unstyled())}}var rn={root:({instance:a})=>{let t=a.hasIcon(),e=a.label(),c=a.buttonProps(),n=a.loading(),l=a.link(),i=a.severity(),r=a.raised(),o=a.rounded(),f=a.text(),d=a.variant(),u=a.outlined(),v=a.size(),g=a.plain(),C=a.badge(),L=a.hasFluid(),D=a.iconPos();return[`p-button p-component`,{"p-button-icon-only":t&&!e&&!c?.label&&!C,"p-button-vertical":(D===`top`||D===`bottom`)&&e,"p-button-loading":n||c?.loading,"p-button-link":l||c?.link,[`p-button-${i||c?.severity}`]:i||c?.severity,"p-button-raised":r||c?.raised,"p-button-rounded":o||c?.rounded,"p-button-text":f||d===`text`||c?.text||c?.variant===`text`,"p-button-outlined":u||d===`outlined`||c?.outlined||c?.variant===`outlined`,"p-button-sm":v===`small`||c?.size===`small`,"p-button-lg":v===`large`||c?.size===`large`,"p-button-plain":g||c?.plain,"p-button-fluid":L}]},loadingIcon:`p-button-loading-icon`,icon:({instance:a})=>{let t=a.iconPos(),e=a.buttonProps(),c=a.label(),n=a.icon();return[`p-button-icon`,{[`p-button-icon-${t||e?.iconPos}`]:c||e?.label,"p-button-icon-left":(t===`left`||e?.iconPos===`left`)&&c||e?.label,"p-button-icon-right":(t===`right`||e?.iconPos===`right`)&&c||e?.label,"p-button-icon-top":(t===`top`||e?.iconPos===`top`)&&c||e?.label,"p-button-icon-bottom":(t===`bottom`||e?.iconPos===`bottom`)&&c||e?.label},n,e?.icon]},spinnerIcon:({instance:a})=>Object.entries(a.cx(`icon`)).filter(([,t])=>!!t).reduce((t,[e])=>t+` ${e}`,`p-button-loading-icon`),label:`p-button-label`};var d1=(()=>{class a extends BC{name=`button`;style=e8;classes=rn;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var o8=new C(`BUTTON_INSTANCE`);var on=(()=>{class a extends I{componentName=`Button`;hostName=Ol(``);$pcButton=m$1(o8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});_componentStyle=m$1(d1);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}type=Ol(`button`);badge=Ol();disabled=Ol(!1,{transform:In$1});raised=Ol(!1,{transform:In$1});rounded=Ol(!1,{transform:In$1});text=Ol(!1,{transform:In$1});plain=Ol(!1,{transform:In$1});outlined=Ol(!1,{transform:In$1});link=Ol(!1,{transform:In$1});tabindex=Ol(0,{transform:uh});size=Ol();variant=Ol();style=Ol();styleClass=Ol();badgeSeverity=Ol(`secondary`);ariaLabel=Ol();autofocus=Ol(!1,{transform:In$1});iconPos=Ol(`left`);icon=Ol();label=Ol();loading=Ol(!1,{transform:In$1});loadingIcon=Ol();severity=Ol();buttonProps=Ol();fluid=Ol(void 0,{transform:In$1});iconOnly=Ol(!1,{transform:In$1});onClick=q4$1();onFocus=q4$1();onBlur=q4$1();contentTemplate=K4$1(`content`,{descendants:!1});loadingIconTemplate=K4$1(`loadingicon`,{descendants:!1});iconTemplate=K4$1(`icon`,{descendants:!1});pcFluid=m$1(I2,{optional:!0,host:!0,skipSelf:!0});hasFluid=Ms(()=>this.fluid()??!!this.pcFluid);$type=Ms(()=>this.type()||this.buttonProps()?.type);$ariaLabel=Ms(()=>this.ariaLabel()||this.buttonProps()?.ariaLabel);mergedStyle=Ms(()=>this.style()||this.buttonProps()?.style);$disabled=Ms(()=>this.disabled()||this.loading()||this.buttonProps()?.disabled);$severity=Ms(()=>this.severity()||this.buttonProps()?.severity);$tabindex=Ms(()=>this.tabindex()||this.buttonProps()?.tabindex);$autofocus=Ms(()=>this.autofocus()||this.buttonProps()?.autofocus);$loading=Ms(()=>this.loading()||this.buttonProps()?.loading);$icon=Ms(()=>this.icon()||this.buttonProps()?.icon);$label=Ms(()=>this.label()||this.buttonProps()?.label);$badge=Ms(()=>this.badge()||this.buttonProps()?.badge);$loadingIcon=Ms(()=>this.loadingIcon()||this.buttonProps()?.loadingIcon);$badgeSeverity=Ms(()=>this.badgeSeverity()||this.buttonProps()?.badgeSeverity);showLabel=Ms(()=>!this.contentTemplate()&&this.$label());showBadge=Ms(()=>!this.contentTemplate()&&this.$badge());getLoadingIconTemplateContext(){return{class:this.cx(`loadingIcon`),pt:this.ptm(`loadingIcon`)}}getIconTemplateContext(){return{class:this.cx(`icon`),pt:this.ptm(`icon`)}}hasIcon=Ms(()=>this.$icon()||this.iconTemplate()||this.loadingIcon()||this.loadingIconTemplate());$outlined=Ms(()=>this.outlined()||this.variant()===`outlined`||this.buttonProps()?.outlined||this.buttonProps()?.variant===`outlined`);$text=Ms(()=>this.text()||this.variant()===`text`||this.buttonProps()?.text||this.buttonProps()?.variant===`text`);$iconOnly=Ms(()=>this.iconOnly()||this.hasIcon()&&!this.$label()&&!this.$badge());dataP=Ms(()=>this.cn({[this.size()]:this.size(),"icon-only":this.$iconOnly(),loading:this.$loading(),fluid:this.hasFluid(),rounded:this.rounded(),raised:this.raised(),outlined:this.$outlined(),text:this.$text(),link:this.link(),vertical:(this.iconPos()===`top`||this.iconPos()===`bottom`)&&this.$label()}));dataIconP=Ms(()=>this.cn({[this.iconPos()]:this.iconPos(),[this.size()]:this.size()}));dataLabelP=Ms(()=>this.cn({[this.size()]:this.size(),"icon-only":this.$iconOnly()}));static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵcmp=Qo({type:a,selectors:[[`p-button`]],contentQueries:function(c,n,l){c&1&&RD(l,n.contentTemplate,Ut,4)(l,n.loadingIconTemplate,jt,4)(l,n.iconTemplate,Wt,4),c&2&&UN(3)},inputs:{hostName:[1,`hostName`],type:[1,`type`],badge:[1,`badge`],disabled:[1,`disabled`],raised:[1,`raised`],rounded:[1,`rounded`],text:[1,`text`],plain:[1,`plain`],outlined:[1,`outlined`],link:[1,`link`],tabindex:[1,`tabindex`],size:[1,`size`],variant:[1,`variant`],style:[1,`style`],styleClass:[1,`styleClass`],badgeSeverity:[1,`badgeSeverity`],ariaLabel:[1,`ariaLabel`],autofocus:[1,`autofocus`],iconPos:[1,`iconPos`],icon:[1,`icon`],label:[1,`label`],loading:[1,`loading`],loadingIcon:[1,`loadingIcon`],severity:[1,`severity`],buttonProps:[1,`buttonProps`],fluid:[1,`fluid`],iconOnly:[1,`iconOnly`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[EA([d1,{provide:o8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],ngContentSelectors:Gt,decls:7,vars:18,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[3,`class`,`pBind`],[3,`value`,`severity`,`pt`,`unstyled`],[`data-p-icon`,`spinner`,3,`class`,`spin`,`pBind`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`spin`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(c,n){c&1&&(Tl(),rl(0,`button`,0),Sl$1(`click`,function(i){return n.onClick.emit(i)})(`focus`,function(i){return n.onFocus.emit(i)})(`blur`,function(i){return n.onBlur.emit(i)}),_l(1),CD(2,qt,1,0,`ng-container`,1),DN(3,Jt,2,1),DN(4,tn,2,2),DN(5,nn,2,6,`span`,2),DN(6,ln,1,4,`p-badge`,3),Zp()),c&2&&(JN(n.mergedStyle()),tA(n.cn(n.cx(`root`),n.styleClass(),n.buttonProps()?.styleClass)),SD(`disabled`,n.$disabled())(`pAutoFocus`,n.$autofocus())(`pBind`,n.ptm(`root`)),Cl$1(`type`,n.$type())(`aria-label`,n.$ariaLabel())(`tabindex`,n.$tabindex())(`data-p`,n.dataP())(`data-p-disabled`,n.$disabled())(`data-p-severity`,n.$severity()),v_(2),SD(`ngTemplateOutlet`,n.contentTemplate()),v_(),wN(n.$loading()?3:-1),v_(),wN(n.$loading()?-1:4),v_(),wN(n.showLabel()?5:-1),v_(),wN(n.showBadge()?6:-1))},dependencies:[Ix,L4,t8,c8,r8,B3,x],encapsulation:2})}return a})();var s8=new C(`BUTTON_ICON_INSTANCE`);var f8=(()=>{class a extends I{componentName=`ButtonIcon`;pButtonIconPT=Ol();pButtonUnstyled=Ol();$pcButtonIcon=m$1(s8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});constructor(){super(),Xi(()=>{let e=this.pButtonIconPT();e&&this.directivePT.set(e)}),Xi(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[``,`pButtonIcon`,``]],hostVars:2,hostBindings:function(c,n){c&2&&jD(`p-button-icon`,!n.$unstyled()&&!0)},inputs:{pButtonIconPT:[1,`pButtonIconPT`],pButtonUnstyled:[1,`pButtonUnstyled`]},features:[EA([d1,{provide:s8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD]})}return a})();var d8=new C(`BUTTON_LABEL_INSTANCE`);var u8=(()=>{class a extends I{componentName=`ButtonLabel`;pButtonLabelPT=Ol();pButtonLabelUnstyled=Ol();$pcButtonLabel=m$1(d8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});constructor(){super(),Xi(()=>{let e=this.pButtonLabelPT();e&&this.directivePT.set(e)}),Xi(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[``,`pButtonLabel`,``]],hostVars:2,hostBindings:function(c,n){c&2&&jD(`p-button-label`,!n.$unstyled()&&!0)},inputs:{pButtonLabelPT:[1,`pButtonLabelPT`],pButtonLabelUnstyled:[1,`pButtonLabelUnstyled`]},features:[EA([d1,{provide:d8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD]})}return a})();var m8=new C(`BUTTON_DIRECTIVE_INSTANCE`);var er=(()=>{class a extends I{componentName=`Button`;pButton=Ol(void 0,{alias:`pButton`});pButtonPT=Ol();pButtonUnstyled=Ol();hostName=Ol(``);text=Ol(!1,{transform:In$1});plain=Ol(!1,{transform:In$1});raised=Ol(!1,{transform:In$1});size=Ol();outlined=Ol(!1,{transform:In$1});link=Ol(!1,{transform:In$1});rounded=Ol(!1,{transform:In$1});fluid=Ol(void 0,{transform:In$1});variant=Ol();iconOnly=Ol(!1,{transform:In$1});loading=Ol(!1,{transform:In$1});severity=Ol();$pcButtonDirective=m$1(m8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});pcFluid=m$1(I2,{optional:!0,host:!0,skipSelf:!0});_componentStyle=m$1(d1);iconSignal=K4$1(f8,{descendants:!1});labelSignal=K4$1(u8,{descendants:!1});isIconOnly=Ms(()=>!!(!this.labelSignal()&&this.iconSignal()));styleClass=Ms(()=>{if(this.$unstyled())return``;let e=this.pButton(),c=typeof e==`object`&&e!==null?e:{},n=typeof e==`string`&&e!==``?e:void 0,l=c.severity??n??this.severity(),i=c.size??this.size(),r=c.variant??this.variant(),o=this.cn(`p-button`,`p-component`,{"p-button-icon-only":this.iconOnly()||c.iconOnly||this.isIconOnly(),"p-button-loading":this.loading(),"p-disabled":this.loading(),"p-button-text":this.text()||r===`text`||c.text,"p-button-outlined":this.outlined()||r===`outlined`||c.outlined,"p-button-link":this.link()||r===`link`||c.link,"p-button-plain":this.plain()||c.plain,"p-button-raised":this.raised()||c.raised,"p-button-rounded":this.rounded()||c.rounded,"p-button-sm":i===`small`,"p-button-lg":i===`large`,"p-button-fluid":this.fluid()??c.fluid??!!this.pcFluid,[`p-button-${l}`]:!!l});return c.styleClass?`${o} ${c.styleClass}`:o});hostStyle=Ms(()=>{let e=this.pButton();return(typeof e==`object`&&e!==null?e:{}).style??null});constructor(){super(),Xi(()=>{let e=this.pButtonPT();e&&this.directivePT.set(e)}),Xi(()=>{let e=this.pButtonUnstyled();e!==void 0&&this.directiveUnstyled.set(e)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[``,`pButton`,``]],contentQueries:function(c,n,l){c&1&&RD(l,n.iconSignal,f8,4)(l,n.labelSignal,u8,4),c&2&&UN(2)},hostVars:4,hostBindings:function(c,n){c&2&&(JN(n.hostStyle()),tA(n.styleClass()))},inputs:{pButton:[1,`pButton`],pButtonPT:[1,`pButtonPT`],pButtonUnstyled:[1,`pButtonUnstyled`],hostName:[1,`hostName`],text:[1,`text`],plain:[1,`plain`],raised:[1,`raised`],size:[1,`size`],outlined:[1,`outlined`],link:[1,`link`],rounded:[1,`rounded`],fluid:[1,`fluid`],variant:[1,`variant`],iconOnly:[1,`iconOnly`],loading:[1,`loading`],severity:[1,`severity`]},features:[EA([d1,{provide:m8,useExisting:a},{provide:W,useExisting:a}]),tN([x,L4]),wD]})}return a})();var ar=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({imports:[on]})}return a})();var x4=(()=>{class a extends I{modelValue=B(void 0);$filled=Ms(()=>le$1(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵdir=Ft$1({type:a,features:[wD]})}return a})();var p8=`
    .p-inputtext {
        font-weight: dt('inputtext.font.weight');
        font-size: dt('inputtext.font.size');
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var sn={root:({instance:a})=>[`p-inputtext p-component`,{"p-filled":a.$filled(),"p-inputtext-sm":a.pSize()===`small`,"p-inputtext-lg":a.pSize()===`large`,"p-invalid":a.invalid(),"p-variant-filled":a.$variant()===`filled`,"p-inputtext-fluid":a.hasFluid}]};var h8=(()=>{class a extends BC{name=`inputtext`;style=p8;classes=sn;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var g8=new C(`INPUTTEXT_INSTANCE`);var Lr=(()=>{class a extends x4{componentName=`InputText`;hostName=Ol(``);pInputTextPT=Ol();pInputTextUnstyled=Ol();bindDirectiveInstance=m$1(x,{self:!0});$pcInputText=m$1(g8,{optional:!0,skipSelf:!0})??void 0;ngControl=m$1(g2,{optional:!0,self:!0});pcFluid=m$1(I2,{optional:!0,host:!0,skipSelf:!0});pSize=Ol(void 0,{alias:`pSize`});variant=Ol();fluid=Ol(void 0,{transform:In$1});invalid=Ol(void 0,{transform:In$1});$variant=Ms(()=>this.variant()||this.config.inputVariant());_componentStyle=m$1(h8);get hasFluid(){return this.fluid()??!!this.pcFluid}dataP=Ms(()=>this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()}));constructor(){super(),Xi(()=>{let e=this.pInputTextPT();e&&this.directivePT.set(e)}),Xi(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[``,`pInputText`,``]],hostVars:3,hostBindings:function(c,n){c&1&&Sl$1(`input`,function(){return n.onInput()}),c&2&&(Cl$1(`data-p`,n.dataP()),tA(n.cx(`root`)))},inputs:{hostName:[1,`hostName`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[EA([h8,{provide:g8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD]})}return a})();var Cr=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({})}return a})();var v8=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('floatlabel.font.size');
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var fn=[`*`];var dn={root:({instance:a})=>{let t=a.variant();return[`p-floatlabel`,{"p-floatlabel-over":t===`over`,"p-floatlabel-on":t===`on`,"p-floatlabel-in":t===`in`}]}};var z8=(()=>{class a extends BC{name=`floatlabel`;style=v8;classes=dn;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var M8=new C(`FLOATLABEL_INSTANCE`);var Br=(()=>{class a extends I{componentName=`FloatLabel`;_componentStyle=m$1(z8);$pcFloatLabel=m$1(M8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}variant=Ol(`over`);static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵcmp=Qo({type:a,selectors:[[`p-floatlabel`],[`p-float-label`]],hostVars:2,hostBindings:function(c,n){c&2&&tA(n.cx(`root`))},inputs:{variant:[1,`variant`]},features:[EA([z8,{provide:M8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],ngContentSelectors:fn,decls:1,vars:0,template:function(c,n){c&1&&(Tl(),_l(0))},dependencies:[WW,f1],encapsulation:2})}return a})();var un=[`*`];var mn={root:`p-inputicon`};var b8=(()=>{class a extends BC{name=`inputicon`;classes=mn;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var L8=new C(`INPUTICON_INSTANCE`);var Xr=(()=>{class a extends I{componentName=`InputIcon`;hostName=Ol(``);_componentStyle=m$1(b8);$pcInputIcon=m$1(L8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵcmp=Qo({type:a,selectors:[[`p-inputicon`]],hostVars:2,hostBindings:function(c,n){c&2&&tA(n.cx(`root`))},inputs:{hostName:[1,`hostName`]},features:[EA([b8,{provide:L8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],ngContentSelectors:un,decls:1,vars:0,template:function(c,n){c&1&&(Tl(),_l(0))},dependencies:[WW],encapsulation:2})}return a})();var C8=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var pn=[`*`];var hn={root:`p-iconfield`};var y8=(()=>{class a extends BC{name=`iconfield`;style=C8;classes=hn;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var x8=new C(`ICONFIELD_INSTANCE`);var ro=(()=>{class a extends I{componentName=`IconField`;hostName=Ol(``);_componentStyle=m$1(y8);$pcIconField=m$1(x8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}iconPosition=Ol(`left`);static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵcmp=Qo({type:a,selectors:[[`p-iconfield`],[`p-icon-field`]],hostVars:2,hostBindings:function(c,n){c&2&&tA(n.cx(`root`))},inputs:{hostName:[1,`hostName`],iconPosition:[1,`iconPosition`]},features:[EA([y8,{provide:x8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],ngContentSelectors:pn,decls:1,vars:0,template:function(c,n){c&1&&(Tl(),_l(0))},dependencies:[f1],encapsulation:2})}return a})();var S8=(()=>{class a extends x4{required=Ol(void 0,{transform:In$1});invalid=Ol(void 0,{transform:In$1});disabled=Ol(void 0,{transform:In$1});name=Ol();_disabled=B(!1);$disabled=Ms(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,c){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵdir=Ft$1({type:a,inputs:{required:[1,`required`],invalid:[1,`invalid`],disabled:[1,`disabled`],name:[1,`name`]},features:[wD]})}return a})();var zo=(()=>{class a extends S8{pcFluid=m$1(I2,{optional:!0,host:!0,skipSelf:!0});fluid=Ol(void 0,{transform:In$1});variant=Ol();size=Ol();inputSize=Ol();pattern=Ol();min=Ol();max=Ol();step=Ol();minlength=Ol();maxlength=Ol();$variant=Ms(()=>this.variant()||this.config.inputVariant());$pattern=Ms(()=>{let e=this.pattern();return typeof e==`string`&&e.length>0?e:void 0});get hasFluid(){return this.fluid()??!!this.pcFluid}static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵdir=Ft$1({type:a,inputs:{fluid:[1,`fluid`],variant:[1,`variant`],size:[1,`size`],inputSize:[1,`inputSize`],pattern:[1,`pattern`],min:[1,`min`],max:[1,`max`],step:[1,`step`],minlength:[1,`minlength`],maxlength:[1,`maxlength`]},features:[wD]})}return a})();var N8={name:`times`,meta:{tags:[`times`,`close`,`cancel`,`delete`,`remove`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M14.4199 4.51962C14.7128 4.22696 15.1876 4.22685 15.4805 4.51962C15.7731 4.81246 15.7731 5.28732 15.4805 5.58016L11.0606 10L15.4805 14.4199C15.773 14.7129 15.7732 15.1877 15.4805 15.4805C15.1877 15.7732 14.7128 15.773 14.4199 15.4805L10 11.0606L5.58014 15.4805C5.2873 15.7731 4.81245 15.7731 4.5196 15.4805C4.22682 15.1876 4.22692 14.7128 4.5196 14.4199L8.93949 10L4.5196 5.58016C4.22676 5.28727 4.22673 4.8125 4.5196 4.51962C4.81248 4.22677 5.28726 4.22678 5.58014 4.51962L10 8.93951L14.4199 4.51962Z`,fill:`currentColor`,key:`ow8ecl`}]]};var gn=(a,t)=>t[1].key||a;function vn(a,t){if(a&1&&(Iy(),TD(0,`path`)),a&2){let e=PN().$implicit;Cl$1(`d`,e[1].d)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`fill-rule`,e[1].fillRule)(`clip-rule`,e[1].clipRule)(`stroke`,e[1].stroke)(`stroke-width`,e[1].strokeWidth)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function zn(a,t){if(a&1&&(Iy(),TD(0,`circle`)),a&2){let e=PN().$implicit;Cl$1(`cx`,e[1].cx)(`cy`,e[1].cy)(`r`,e[1].r)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Mn(a,t){if(a&1&&(Iy(),TD(0,`rect`)),a&2){let e=PN().$implicit;Cl$1(`x`,e[1].x)(`y`,e[1].y)(`width`,e[1].width)(`height`,e[1].height)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function bn(a,t){if(a&1&&(Iy(),TD(0,`line`)),a&2){let e=PN().$implicit;Cl$1(`x1`,e[1].x1)(`y1`,e[1].y1)(`x2`,e[1].x2)(`y2`,e[1].y2)(`stroke`,e[1].stroke)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function Ln(a,t){if(a&1&&(Iy(),TD(0,`polyline`)),a&2){let e=PN().$implicit;Cl$1(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Cn(a,t){if(a&1&&(Iy(),TD(0,`polygon`)),a&2){let e=PN().$implicit;Cl$1(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function yn(a,t){if(a&1&&(Iy(),TD(0,`ellipse`)),a&2){let e=PN().$implicit;Cl$1(`cx`,e[1].cx)(`cy`,e[1].cy)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function xn(a,t){if(a&1&&DN(0,vn,1,9,`:svg:path`)(1,zn,1,6,`:svg:circle`)(2,Mn,1,9,`:svg:rect`)(3,bn,1,7,`:svg:line`)(4,Ln,1,4,`:svg:polyline`)(5,Cn,1,4,`:svg:polygon`)(6,yn,1,7,`:svg:ellipse`),a&2){let e,c=t.$implicit;wN((e=c[0])===`path`?0:e===`circle`?1:e===`rect`?2:e===`line`?3:e===`polyline`?4:e===`polygon`?5:e===`ellipse`?6:-1)}}var xo=(()=>{class a extends C4{constructor(){super(),this._icon=N8}static ɵfac=function(c){return new(c||a)};static ɵcmp=Qo({type:a,selectors:[[`svg`,`data-p-icon`,`times`]],features:[wD],decls:2,vars:0,template:function(c,n){c&1&&IN(0,xn,7,1,null,null,gn),c&2&&SN(n.iconNodes())},encapsulation:2,changeDetection:1})}return a})();var Sn=Object.defineProperty;var w8=Object.getOwnPropertySymbols;var Nn=Object.prototype.hasOwnProperty;var wn=Object.prototype.propertyIsEnumerable;var k8=(a,t,e)=>t in a?Sn(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var I3=(a,t)=>{for(var e in t||(t={}))Nn.call(t,e)&&k8(a,e,t[e]);if(w8)for(var e of w8(t))wn.call(t,e)&&k8(a,e,t[e]);return a};var kn=(a,t,e)=>new Promise((c,n)=>{var l=o=>{try{r(e.next(o))}catch(f){n(f)}},i=o=>{try{r(e.throw(o))}catch(f){n(f)}},r=o=>o.done?c(o.value):Promise.resolve(o.value).then(l,i);r((e=e.apply(a,t)).next())});var S4=`animation`;var _1=`transition`;var An=[`data-enter-phase`,`data-enter-from`,`data-enter-to`,`data-enter-active`,`data-leave-phase`,`data-leave-from`,`data-leave-to`,`data-leave-active`];function Dn(a){return a?a.disabled||!!(a.safe&&_W()):!1}function _n(a,t){return a?I3(I3({},a),Object.entries(t).reduce((e,[c,n])=>{var l;return e[c]=(l=a[c])!=null?l:n,e},{})):I3({},t)}function Fn(a){let{name:t,enterClass:e,leaveClass:c}=a||{};return{enter:{from:e?.from||`${t}-enter-from`,to:e?.to||`${t}-enter-to`,active:e?.active||`${t}-enter-active`},leave:{from:c?.from||`${t}-leave-from`,to:c?.to||`${t}-leave-to`,active:c?.active||`${t}-leave-active`}}}function Tn(a){return{enter:{onBefore:a?.onBeforeEnter,onStart:a?.onEnter,onAfter:a?.onAfterEnter,onCancelled:a?.onEnterCancelled},leave:{onBefore:a?.onBeforeLeave,onStart:a?.onLeave,onAfter:a?.onAfterLeave,onCancelled:a?.onLeaveCancelled}}}function En(a,t){let e=window.getComputedStyle(a),c=g=>{let C=e[`${g}Duration`].split(`, `).map(rW),L=e[`${g}Delay`].split(`, `).map(rW);return L.length<C.length&&L.length>0&&(L=C.map((D,V)=>L[V%L.length])),[L,C]},[n,l]=c(_1),[i,r]=c(S4),o=Math.max(...l.map((g,C)=>g+n[C])),f=Math.max(...r.map((g,C)=>g+i[C])),d,u=0,v=0;return t===_1?o>0&&(d=_1,u=o,v=l.length):t===S4?f>0&&(d=S4,u=f,v=r.length):(u=Math.max(o,f),d=u>0?o>f?_1:S4:void 0,v=d?d===_1?l.length:r.length:0),{type:d,timeout:u,count:v}}function N4(a,t){return typeof a==`number`?a:a!=null&&typeof a==`object`&&a[t]!=null?a[t]:null}function A8(a,t){return a?`--${a}-${t}`:`--${t}`}function W2(a,t,e){let{autoHeight:c,autoWidth:n,cssVarPrefix:l}=t,i=typeof e==`object`;c&&OW(a,A8(l,`height`),i?e.height:e),n&&OW(a,A8(l,`width`),i?e.width:e)}function D8(a,t){if(!t.autoHeight&&!t.autoWidth)return;let e=a.scrollHeight,c=a.scrollWidth;if(!e||!c){let n=DC(a);e||(e=n.height),c||(c=n.width)}W2(a,t,{height:e+`px`,width:c+`px`})}function Pn(a,t){a.setAttribute(`data-${t}-phase`,``)}function _8(a,t,e){a.removeAttribute(`data-enter-from`),a.removeAttribute(`data-enter-to`),a.removeAttribute(`data-leave-from`),a.removeAttribute(`data-leave-to`),a.setAttribute(`data-${t}-${e}`,``),a.setAttribute(`data-${t}-active`,``)}function F8(a){a.removeAttribute(`data-enter-phase`),a.removeAttribute(`data-leave-phase`)}function Bn(a){An.forEach(t=>a.removeAttribute(t))}var In=Object.freeze({name:`p`,safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!0,cssVarPrefix:``});function V3(a,t){if(!a)throw new Error(`Element is required.`);let e={},c=!1,n={},l=null,i={},r=d=>{for(let u of Object.keys(e))delete e[u];if(Object.assign(e,_n(d,In)),!e.enter&&!e.leave)throw new Error(`Enter or leave must be true.`);i=Tn(e),c=Dn(e),n=Fn(e),l=null},o=d=>kn(null,null,function*(){l?.();let u=a,{onBefore:v,onStart:g,onAfter:C,onCancelled:L}=i[d]||{},D={element:a};if(Pn(u,d),c){v?.(D),g?.(D),C?.(D),F8(u),W2(u,e,d===`enter`?`auto`:`0px`);return}let{from:V,active:K,to:G}=n[d]||{};return v?.(D),d===`enter`?W2(u,e,`0px`):d===`leave`&&D8(u,e),yC(u,V),yC(u,K),_8(u,d,`from`),u.offsetHeight,d===`enter`?D8(u,e):d===`leave`&&W2(u,e,`0px`),vC(u,V),yC(u,G),_8(u,d,`to`),g?.(D),new Promise(z2=>{let f2=N4(e.duration,d),G2=()=>{vC(u,[G,K]),l=null,Bn(u),F8(u)},D4=()=>{G2(),C?.(D),z2(),d===`enter`?W2(u,e,`auto`):d===`leave`&&W2(u,e,`0px`)},q2=()=>{};l=()=>{q2(),G2(),L?.(D),z2()},q2=On(u,e.type,f2,D4)})});r(t),W2(a,e,`0px`);let f={enter:()=>e.enter?o(`enter`):Promise.resolve(),leave:()=>e.leave?o(`leave`):Promise.resolve(),cancel:()=>{l?.(),l=null},update:(d,u)=>{if(!d)throw new Error(`Element is required.`);a=d,f.cancel(),u&&r(u)}};return e.appear&&f.enter(),f}var Vn=0;function On(a,t,e,c){let n=a._motionEndId=++Vn,l=()=>{n===a._motionEndId&&c()};if(e!=null){let L=setTimeout(l,e);return()=>clearTimeout(L)}let{type:i,timeout:r,count:o}=En(a,t);if(!i)return c(),()=>{};let f=i+`end`,d=0,u=()=>{a.removeEventListener(f,g,!0),clearTimeout(C)},v=()=>{u(),l()},g=L=>{L.target===a&&++d>=o&&v()};a.addEventListener(f,g,{capture:!0});let C=setTimeout(()=>{d<o&&v()},r+1);return u}var Rn=[`*`];function Hn(a,t){a&1&&_l(0)}var w4=new WeakMap;function F1(a,t){if(a)switch(w4.has(a)||w4.set(a,{display:a.style.display,visibility:a.style.visibility,maxHeight:a.style.maxHeight}),t){case`display`:a.style.display=`none`;break;case`visibility`:a.style.visibility=`hidden`,a.style.maxHeight=`0`;break}}function k4(a,t){if(!a)return;let e=w4.get(a)??a.style;switch(t){case`display`:a.style.display=e?.display||``;break;case`visibility`:a.style.visibility=e?.visibility||``,a.style.maxHeight=e?.maxHeight||``;break}w4.delete(a)}var $n=`
    .p-motion {
        display: block;
    }
`;var Un={root:`p-motion`};var O3=(()=>{class a extends BC{name=`motion`;style=$n;classes=Un;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var T8=new C(`MOTION_INSTANCE`);var R3=(()=>{class a extends I{$pcMotion=m$1(T8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m$1(x,{self:!0});onAfterViewChecked(){let c=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(D(D({},this.ptms([`host`,`root`])),c))}_componentStyle=m$1(O3);visible=Ol(!1);mountOnEnter=Ol(!0);unmountOnLeave=Ol(!0);name=Ol(void 0);type=Ol(void 0);safe=Ol(void 0);disabled=Ol(!1);appear=Ol(!1);enter=Ol(!0);leave=Ol(!0);duration=Ol(void 0);hideStrategy=Ol(`display`);enterFromClass=Ol(void 0);enterToClass=Ol(void 0);enterActiveClass=Ol(void 0);leaveFromClass=Ol(void 0);leaveToClass=Ol(void 0);leaveActiveClass=Ol(void 0);options=Ol({});onBeforeEnter=q4$1();onEnter=q4$1();onAfterEnter=q4$1();onEnterCancelled=q4$1();onBeforeLeave=q4$1();onLeave=q4$1();onAfterLeave=q4$1();onLeaveCancelled=q4$1();motionOptions=Ms(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=B(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),Xi(()=>{let e=this.hideStrategy();this.isInitialMount?(F1(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(F1(this.$el,e),this.rendered.set(!0))}),Xi(()=>{this.motion||(this.motion=V3(this.$el,this.motionOptions()))}),X4$1(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),c=this.hideStrategy();this.visible()?(await NW(),k4(this.$el,c),(e||!this.isInitialMount)&&(this.applyMotionDuration(`enter`),this.motion?.enter())):this.isInitialMount||(await NW(),this.applyMotionDuration(`leave`),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(F1(this.$el,c),this.unmountOnLeave()&&(await NW(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let c=Z(this.motionOptions),n=N4(c.duration,e);if(n==null||!this.$el)return;let l=this.$el,i=`${n}ms`;c.type===`transition`?l.style.transitionDuration=i:l.style.animationDuration=i}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,k4(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static ɵfac=function(c){return new(c||a)};static ɵcmp=Qo({type:a,selectors:[[`p-motion`]],hostVars:2,hostBindings:function(c,n){c&2&&tA(n.cx(`root`))},inputs:{visible:[1,`visible`],mountOnEnter:[1,`mountOnEnter`],unmountOnLeave:[1,`unmountOnLeave`],name:[1,`name`],type:[1,`type`],safe:[1,`safe`],disabled:[1,`disabled`],appear:[1,`appear`],enter:[1,`enter`],leave:[1,`leave`],duration:[1,`duration`],hideStrategy:[1,`hideStrategy`],enterFromClass:[1,`enterFromClass`],enterToClass:[1,`enterToClass`],enterActiveClass:[1,`enterActiveClass`],leaveFromClass:[1,`leaveFromClass`],leaveToClass:[1,`leaveToClass`],leaveActiveClass:[1,`leaveActiveClass`],options:[1,`options`]},outputs:{onBeforeEnter:`onBeforeEnter`,onEnter:`onEnter`,onAfterEnter:`onAfterEnter`,onEnterCancelled:`onEnterCancelled`,onBeforeLeave:`onBeforeLeave`,onLeave:`onLeave`,onAfterLeave:`onAfterLeave`,onLeaveCancelled:`onLeaveCancelled`},features:[EA([O3,{provide:T8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],ngContentSelectors:Rn,decls:1,vars:1,template:function(c,n){c&1&&(Tl(),DN(0,Hn,1,0)),c&2&&wN(n.rendered()?0:-1)},dependencies:[$l,f1],encapsulation:2})}return a})();var E8=new C(`MOTION_DIRECTIVE_INSTANCE`);var Ro=(()=>{class a extends I{$pcMotionDirective=m$1(E8,{optional:!0,skipSelf:!0})??void 0;visible=Ol(!1,{alias:`pMotion`});name=Ol(void 0,{alias:`pMotionName`});type=Ol(void 0,{alias:`pMotionType`});safe=Ol(void 0,{alias:`pMotionSafe`});disabled=Ol(!1,{alias:`pMotionDisabled`});appear=Ol(!1,{alias:`pMotionAppear`});enter=Ol(!0,{alias:`pMotionEnter`});leave=Ol(!0,{alias:`pMotionLeave`});duration=Ol(void 0,{alias:`pMotionDuration`});hideStrategy=Ol(`display`,{alias:`pMotionHideStrategy`});enterFromClass=Ol(void 0,{alias:`pMotionEnterFromClass`});enterToClass=Ol(void 0,{alias:`pMotionEnterToClass`});enterActiveClass=Ol(void 0,{alias:`pMotionEnterActiveClass`});leaveFromClass=Ol(void 0,{alias:`pMotionLeaveFromClass`});leaveToClass=Ol(void 0,{alias:`pMotionLeaveToClass`});leaveActiveClass=Ol(void 0,{alias:`pMotionLeaveActiveClass`});options=Ol({},{alias:`pMotionOptions`});onBeforeEnter=q4$1({alias:`pMotionOnBeforeEnter`});onEnter=q4$1({alias:`pMotionOnEnter`});onAfterEnter=q4$1({alias:`pMotionOnAfterEnter`});onEnterCancelled=q4$1({alias:`pMotionOnEnterCancelled`});onBeforeLeave=q4$1({alias:`pMotionOnBeforeLeave`});onLeave=q4$1({alias:`pMotionOnLeave`});onAfterLeave=q4$1({alias:`pMotionOnAfterLeave`});onLeaveCancelled=q4$1({alias:`pMotionOnLeaveCancelled`});motionOptions=Ms(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),X4$1(()=>{if(!this.$el)return;this.motion??=V3(this.$el,Z(this.motionOptions));let e=this.isInitialMount&&this.visible()&&this.appear(),c=this.hideStrategy();this.visible()?(k4(this.$el,c),(e||!this.isInitialMount)&&(this.applyMotionDuration(`enter`),this.motion?.enter())):this.isInitialMount?F1(this.$el,c):(this.applyMotionDuration(`leave`),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&F1(this.$el,c)})),this.isInitialMount=!1})}applyMotionDuration(e){let c=Z(this.motionOptions),n=N4(c.duration,e);if(n==null||!this.$el)return;let l=this.$el,i=`${n}ms`;c.type===`transition`?l.style.transitionDuration=i:l.style.animationDuration=i}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,k4(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static ɵfac=function(c){return new(c||a)};static ɵdir=Ft$1({type:a,selectors:[[``,`pMotion`,``]],inputs:{visible:[1,`pMotion`,`visible`],name:[1,`pMotionName`,`name`],type:[1,`pMotionType`,`type`],safe:[1,`pMotionSafe`,`safe`],disabled:[1,`pMotionDisabled`,`disabled`],appear:[1,`pMotionAppear`,`appear`],enter:[1,`pMotionEnter`,`enter`],leave:[1,`pMotionLeave`,`leave`],duration:[1,`pMotionDuration`,`duration`],hideStrategy:[1,`pMotionHideStrategy`,`hideStrategy`],enterFromClass:[1,`pMotionEnterFromClass`,`enterFromClass`],enterToClass:[1,`pMotionEnterToClass`,`enterToClass`],enterActiveClass:[1,`pMotionEnterActiveClass`,`enterActiveClass`],leaveFromClass:[1,`pMotionLeaveFromClass`,`leaveFromClass`],leaveToClass:[1,`pMotionLeaveToClass`,`leaveToClass`],leaveActiveClass:[1,`pMotionLeaveActiveClass`,`leaveActiveClass`],options:[1,`pMotionOptions`,`options`]},outputs:{onBeforeEnter:`pMotionOnBeforeEnter`,onEnter:`pMotionOnEnter`,onAfterEnter:`pMotionOnAfterEnter`,onEnterCancelled:`pMotionOnEnterCancelled`,onBeforeLeave:`pMotionOnBeforeLeave`,onLeave:`pMotionOnLeave`,onAfterLeave:`pMotionOnAfterLeave`,onLeaveCancelled:`pMotionOnLeaveCancelled`},features:[EA([O3,{provide:E8,useExisting:a},{provide:W,useExisting:a}]),wD]})}return a})();var P8=(()=>{class a{static ɵfac=function(c){return new(c||a)};static ɵmod=Cn$1({type:a});static ɵinj=Yt$1({imports:[R3]})}return a})();var B8=class a{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t==`object`&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,c){return c?this.resolveFieldData(t,c)===this.resolveFieldData(e,c):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t==`object`&&typeof e==`object`){var c=Array.isArray(t),n=Array.isArray(e),l,i,r;if(c&&n){if(i=t.length,i!=e.length)return!1;for(l=i;l--!==0;)if(!this.equalsByValue(t[l],e[l]))return!1;return!0}if(c!=n)return!1;var o=this.isDate(t),f=this.isDate(e);if(o!=f)return!1;if(o&&f)return t.getTime()==e.getTime();var d=t instanceof RegExp,u=e instanceof RegExp;if(d!=u)return!1;if(d&&u)return t.toString()==e.toString();var v=Object.keys(t);if(i=v.length,i!==Object.keys(e).length)return!1;for(l=i;l--!==0;)if(!Object.prototype.hasOwnProperty.call(e,v[l]))return!1;for(l=i;l--!==0;)if(r=v[l],!this.equalsByValue(t[r],e[r]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(`.`)==-1)return t[e];{let c=e.split(`.`),n=t;for(let l=0,i=c.length;l<i;++l){if(n==null)return null;n=n[c[l]]}return n}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,c){t&&e!==c&&(c>=t.length&&(c%=t.length,e%=t.length),t.splice(c,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,c,n){if(c.length>0){let l=!1;for(let i=0;i<c.length;i++)if(this.findIndexInList(c[i],n)>e){c.splice(i,0,t),l=!0;break}l||c.push(t)}else c.push(t)}static findIndexInList(t,e){let c=-1;if(e){for(let n=0;n<e.length;n++)if(e[n]==t){c=n;break}}return c}static contains(t,e){if(t!=null&&e&&e.length){for(let c of e)if(this.equals(t,c))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize(`NFKD`).replace(new RegExp(`\\p{Diacritic}`,`gu`),``)),t}static isDate(t){return Object.prototype.toString.call(t)===`[object Date]`}static isEmpty(t){return t==null||t===``||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t==`object`&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,c,n=1){let l=-1,i=this.isEmpty(t),r=this.isEmpty(e);return i&&r?l=0:i?l=n:r?l=-n:typeof t==`string`&&typeof e==`string`?l=t.localeCompare(e,c,{numeric:!0}):l=t<e?-1:t>e?1:0,l}static sort(t,e,c=1,n,l=1){let i=a.compare(t,e,n,c),r=c;return(a.isEmpty(t)||a.isEmpty(e))&&(r=l===1?c:l),r*i}static merge(t,e){if(!(t==null&&e==null)){if((t==null||typeof t==`object`)&&(e==null||typeof e==`object`))return D(D({},t||{}),e||{});if((t==null||typeof t==`string`)&&(e==null||typeof e==`string`))return[t||``,e||``].join(` `);return e||t}}static isPrintableCharacter(t=``){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let c=-1;if(this.isNotEmpty(t))try{c=t.findLastIndex(e)}catch{c=t.lastIndexOf([...t].reverse().find(e))}return c}static findLast(t,e){let c;if(this.isNotEmpty(t))try{c=t.findLast(e)}catch{c=[...t].reverse().find(e)}return c}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t==`object`&&typeof e==`object`){var c=Array.isArray(t),n=Array.isArray(e),l,i,r;if(c&&n){if(i=t.length,i!=e.length)return!1;for(l=i;l--!==0;)if(!this.deepEquals(t[l],e[l]))return!1;return!0}if(c!=n)return!1;var o=t instanceof Date,f=e instanceof Date;if(o!=f)return!1;if(o&&f)return t.getTime()==e.getTime();var d=t instanceof RegExp,u=e instanceof RegExp;if(d!=u)return!1;if(d&&u)return t.toString()==e.toString();var v=Object.keys(t);if(i=v.length,i!==Object.keys(e).length)return!1;for(l=i;l--!==0;)if(!Object.prototype.hasOwnProperty.call(e,v[l]))return!1;for(l=i;l--!==0;)if(r=v[l],!this.deepEquals(t[r],e[r]))return!1;return!0}return t!==t&&e!==e}static minifyCSS(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,``).replace(/ {2,}/g,` `).replace(/ ([{:}]) /g,`$1`).replace(/([;,]) /g,`$1`).replace(/ !/g,`!`).replace(/: /g,`:`)}static toFlatCase(t){return this.isString(t)?t.replace(/(-|_)/g,``).toLowerCase():t}static isString(t,e=!0){return typeof t==`string`&&(e||t!==``)}};var I8=0;function $o(a=`pn_id_`){return I8++,`${a}${I8}`}function Wn(){let a=[],t=(l,i)=>{let r=a.length>0?a[a.length-1]:{key:l,value:i},o=r.value+(r.key===l?0:i)+2;return a.push({key:l,value:o}),o},e=l=>{a=a.filter(i=>i.value!==l)},c=()=>a.length>0?a[a.length-1].value:0,n=l=>l&&parseInt(l.style.zIndex,10)||0;return{get:n,set:(l,i,r)=>{i&&(i.style.zIndex=String(t(l,r)))},clear:l=>{l&&(e(n(l)),l.style.zIndex=``)},getCurrent:()=>c(),generateZIndex:t,revertZIndex:e}}var A4=Wn();var V8=[`content`];var Gn=[`overlay`];var O8=[`*`,`*`];var qn=()=>({mode:null});var $8=a=>({$implicit:a});var Xn=a=>({mode:a});function Yn(a,t){a&1&&MD(0)}function Kn(a,t){if(a&1&&(_l(0),CD(1,Yn,1,0,`ng-container`,2)),a&2){let e=PN();v_(),SD(`ngTemplateOutlet`,e.contentTemplate())(`ngTemplateOutletContext`,wA(3,$8,DA(2,qn)))}}function Qn(a,t){a&1&&MD(0)}function Zn(a,t){if(a&1){let e=xN();rl(0,`div`,4,0),Sl$1(`click`,function(){uy(e);return dy(PN(2).onOverlayClick())}),rl(2,`p-motion`,5),Sl$1(`onBeforeEnter`,function(n){uy(e);return dy(PN(2).onOverlayBeforeEnter(n))})(`onEnter`,function(n){uy(e);return dy(PN(2).onOverlayEnter(n))})(`onAfterEnter`,function(n){uy(e);return dy(PN(2).onOverlayAfterEnter(n))})(`onBeforeLeave`,function(n){uy(e);return dy(PN(2).onOverlayBeforeLeave(n))})(`onLeave`,function(n){uy(e);return dy(PN(2).onOverlayLeave(n))})(`onAfterLeave`,function(n){uy(e);return dy(PN(2).onOverlayAfterLeave(n))}),rl(3,`div`,4,1),Sl$1(`click`,function(n){uy(e);return dy(PN(2).onOverlayContentClick(n))}),_l(5,1),CD(6,Qn,1,0,`ng-container`,2),Zp()()()}if(a&2){let e=PN(2);JN(e.sx(`root`)),tA(e.cn(e.cx(`root`),e.mergedStyleClass())),SD(`pBind`,e.ptm(`root`)),v_(2),SD(`visible`,e.visible())(`appear`,!0)(`options`,e.computedMotionOptions()),v_(),JN(e.sx(`content`)),tA(e.cn(e.cx(`content`),e.mergedContentStyleClass())),SD(`pBind`,e.ptm(`content`)),v_(3),SD(`ngTemplateOutlet`,e.contentTemplate())(`ngTemplateOutletContext`,wA(17,$8,wA(15,Xn,e.overlayMode())))}}function Jn(a,t){if(a&1&&DN(0,Zn,7,19,`div`,3),a&2)wN(PN().modalVisible()?0:-1)}var el={root:({instance:a})=>{return D(D({position:`absolute`,top:`0`},a.modal()?a.$overlayResponsiveOptions()?.style:a.$overlayOptions()?.style),a.style())},content:({instance:a})=>{return D(D({},a.modal()?a.$overlayResponsiveOptions()?.contentStyle:a.$overlayOptions()?.contentStyle),a.contentStyle())}};var al=`
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`;var cl={host:`p-overlay-host`,root:({instance:a})=>{let t=a.modal(),e=a.overlayResponsiveDirection();return[`p-overlay p-component`,{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":t,"p-overlay-center":t&&e===`center`,"p-overlay-top":t&&e===`top`,"p-overlay-top-start":t&&e===`top-start`,"p-overlay-top-end":t&&e===`top-end`,"p-overlay-bottom":t&&e===`bottom`,"p-overlay-bottom-start":t&&e===`bottom-start`,"p-overlay-bottom-end":t&&e===`bottom-end`,"p-overlay-left":t&&e===`left`,"p-overlay-left-start":t&&e===`left-start`,"p-overlay-left-end":t&&e===`left-end`,"p-overlay-right":t&&e===`right`,"p-overlay-right-start":t&&e===`right-start`,"p-overlay-right-end":t&&e===`right-end`}]},content:`p-overlay-content`};var R8=(()=>{class a extends BC{name=`overlay`;style=al;classes=cl;inlineStyles=el;static ɵfac=(()=>{let e;return function(n){return(e||(e=il(a)))(n||a)}})();static ɵprov=S({token:a,factory:a.ɵfac})}return a})();var H8=new C(`OVERLAY_INSTANCE`);var is=(()=>{class a extends I{componentName=`Overlay`;$pcOverlay=m$1(H8,{optional:!0,skipSelf:!0})??void 0;hostName=Ol(``);visible=Y4$1(!1);mode=Ol();style=Ol();styleClass=Ol();contentStyle=Ol();contentStyleClass=Ol();target=Ol();autoZIndex=Ol();baseZIndex=Ol();listener=Ol();responsive=Ol();options=Ol();appendTo=Ol(void 0);inline=Ol(!1);motionOptions=Ol(void 0);onBeforeShow=q4$1();onShow=q4$1();onBeforeHide=q4$1();onHide=q4$1();onAnimationStart=q4$1();onAnimationDone=q4$1();onBeforeEnter=q4$1();onEnter=q4$1();onAfterEnter=q4$1();onBeforeLeave=q4$1();onLeave=q4$1();onAfterLeave=q4$1();overlayViewChild=Z4$1(`overlay`);contentViewChild=Z4$1(`content`);contentTemplate=K4$1(`content`,{descendants:!1});hostAttrSelector=Ol();$appendTo=Ms(()=>this.appendTo()||this.config.overlayAppendTo());$overlayOptions=Ms(()=>D(D({},this.config?.overlayOptions),this.options()));$overlayResponsiveOptions=Ms(()=>D(D({},this.$overlayOptions()?.responsive),this.responsive()));overlayResponsiveDirection=Ms(()=>this.$overlayResponsiveOptions()?.direction||`center`);$mode=Ms(()=>this.mode()||this.$overlayOptions()?.mode);mergedStyleClass=Ms(()=>this.cn(this.styleClass(),this.modal()?this.$overlayResponsiveOptions()?.styleClass:this.$overlayOptions()?.styleClass));mergedContentStyleClass=Ms(()=>this.cn(this.contentStyleClass(),this.modal()?this.$overlayResponsiveOptions()?.contentStyleClass:this.$overlayOptions()?.contentStyleClass));$target=Ms(()=>{let e=this.target()||this.$overlayOptions()?.target;return e===void 0?`@prev`:e});$autoZIndex=Ms(()=>{let e=this.autoZIndex()||this.$overlayOptions()?.autoZIndex;return e===void 0?!0:e});$baseZIndex=Ms(()=>{let e=this.baseZIndex()||this.$overlayOptions()?.baseZIndex;return e===void 0?0:e});$listener=Ms(()=>this.listener()||this.$overlayOptions()?.listener);modal=Ms(()=>{if(_z(this.platformId))return this.$mode()===`modal`||this.$overlayResponsiveOptions()&&this.document.defaultView?.matchMedia(this.$overlayResponsiveOptions().media?.replace(`@media`,``)||`(max-width: ${this.$overlayResponsiveOptions().breakpoint})`).matches});overlayMode=Ms(()=>this.$mode()||(this.modal()?`modal`:`overlay`));overlayEl=Ms(()=>this.overlayViewChild()?.nativeElement);contentEl=Ms(()=>this.contentViewChild()?.nativeElement);targetEl=Ms(()=>LL(this.$target(),this.el?.nativeElement));computedMotionOptions=Ms(()=>D(D({},this.ptm(`motion`)),this.motionOptions()||this.$overlayOptions()?.motionOptions));modalVisible=B(!1);isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=m$1(R8);bindDirectiveInstance=m$1(x,{self:!0});documentKeyboardListener;parentDragSubscription=null;transformOptions={default:`scaleY(0.8)`,center:`scale(0.7)`,top:`translate3d(0px, -100%, 0px)`,"top-start":`translate3d(0px, -100%, 0px)`,"top-end":`translate3d(0px, -100%, 0px)`,bottom:`translate3d(0px, 100%, 0px)`,"bottom-start":`translate3d(0px, 100%, 0px)`,"bottom-end":`translate3d(0px, 100%, 0px)`,left:`translate3d(-100%, 0px, 0px)`,"left-start":`translate3d(-100%, 0px, 0px)`,"left-end":`translate3d(-100%, 0px, 0px)`,right:`translate3d(100%, 0px, 0px)`,"right-start":`translate3d(100%, 0px, 0px)`,"right-end":`translate3d(100%, 0px, 0px)`};overlayService=m$1($W);constructor(){super(),Xi(()=>{this.visible()&&!this.modalVisible()&&this.modalVisible.set(!0)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}show(e,c=!1){this.onVisibleChange(!0),this.handleEvents(`onShow`,{overlay:e||this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),c&&mW(this.targetEl()),this.modal()&&yC(this.document?.body,`p-overflow-hidden`)}hide(e,c=!1){if(this.visible())this.onVisibleChange(!1),this.handleEvents(`onHide`,{overlay:e||this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),c&&mW(this.targetEl()),this.modal()&&vC(this.document?.body,`p-overflow-hidden`);else return}onVisibleChange(e){this.visible.set(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl()}),this.isOverlayContentClicked=!0}container=B(void 0);onOverlayBeforeEnter(e){this.handleEvents(`onBeforeShow`,{overlay:this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),this.container.set(this.overlayEl()||e.element),this.show(this.overlayEl(),!0),this.hostAttrSelector()&&this.overlayEl()&&this.overlayEl().setAttribute(this.hostAttrSelector(),``),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents(`onBeforeEnter`,e)}onOverlayEnter(e){this.handleEvents(`onEnter`,e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents(`onAfterEnter`,e)}onOverlayBeforeLeave(e){this.handleEvents(`onBeforeHide`,{overlay:this.overlayEl(),target:this.targetEl(),mode:this.overlayMode()}),this.handleEvents(`onBeforeLeave`,e)}onOverlayLeave(e){this.handleEvents(`onLeave`,e)}onOverlayAfterLeave(e){this.hide(this.overlayEl(),!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),A4.clear(this.overlayEl()),this.modalVisible.set(!1),this.cd.markForCheck(),this.handleEvents(`onAfterLeave`,e)}handleEvents(e,c){this[e].emit(c);let n=this.options();n&&n[e]&&n[e](c),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](c)}setZIndex(){this.$autoZIndex()&&A4.set(this.overlayMode(),this.overlayEl(),this.$baseZIndex()+this.config?.zIndex[this.overlayMode()])}appendOverlay(){this.$appendTo()&&this.$appendTo()!==`self`&&(this.$appendTo()===`body`?fW(this.document.body,this.overlayEl()):fW(this.$appendTo(),this.overlayEl()))}alignOverlay(){this.modal()||this.overlayEl()&&this.targetEl()&&(this.overlayEl().style.minWidth=lW(this.targetEl())+`px`,this.$appendTo()===`self`?uW(this.overlayEl(),this.targetEl()):aW(this.overlayEl(),this.targetEl()))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!==`self`&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl())&&this.hide(this.overlayEl(),!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new y4(this.targetEl(),e=>{(!this.$listener()||this.$listener()(e,{type:`scroll`,mode:this.overlayMode(),valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,`click`,e=>{let n=!(this.targetEl()&&(this.targetEl().isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl().contains(e.target)))&&!this.isOverlayContentClicked;(this.$listener()?this.$listener()(e,{type:`outside`,mode:this.overlayMode(),valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,`resize`,e=>{(this.$listener()?this.$listener()(e,{type:`resize`,mode:this.overlayMode(),valid:!MW()}):!MW())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||(this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,`keydown`,e=>{if(this.$overlayOptions().hideOnEscape===!1||e.code!==`Escape`)return;(this.$listener()?this.$listener()(e,{type:`keydown`,mode:this.overlayMode(),valid:!MW()}):!MW())&&this.hide(e,!0)}))}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl(),!0),this.overlayEl()&&this.$appendTo()!==`self`&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl()),A4.clear(this.overlayEl())),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static ɵfac=function(c){return new(c||a)};static ɵcmp=Qo({type:a,selectors:[[`p-overlay`]],contentQueries:function(c,n,l){c&1&&RD(l,n.contentTemplate,V8,4),c&2&&UN()},viewQuery:function(c,n){c&1&&OD(n.overlayViewChild,Gn,5)(n.contentViewChild,V8,5),c&2&&UN(2)},inputs:{hostName:[1,`hostName`],visible:[1,`visible`],mode:[1,`mode`],style:[1,`style`],styleClass:[1,`styleClass`],contentStyle:[1,`contentStyle`],contentStyleClass:[1,`contentStyleClass`],target:[1,`target`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],listener:[1,`listener`],responsive:[1,`responsive`],options:[1,`options`],appendTo:[1,`appendTo`],inline:[1,`inline`],motionOptions:[1,`motionOptions`],hostAttrSelector:[1,`hostAttrSelector`]},outputs:{visible:`visibleChange`,onBeforeShow:`onBeforeShow`,onShow:`onShow`,onBeforeHide:`onBeforeHide`,onHide:`onHide`,onAnimationStart:`onAnimationStart`,onAnimationDone:`onAnimationDone`,onBeforeEnter:`onBeforeEnter`,onEnter:`onEnter`,onAfterEnter:`onAfterEnter`,onBeforeLeave:`onBeforeLeave`,onLeave:`onLeave`,onAfterLeave:`onAfterLeave`},features:[EA([R8,{provide:H8,useExisting:a},{provide:W,useExisting:a}]),tN([x]),wD],ngContentSelectors:O8,decls:2,vars:1,consts:[[`overlay`,``],[`content`,``],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`style`,`pBind`],[3,`click`,`pBind`],[`name`,`p-anchored-overlay`,3,`onBeforeEnter`,`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`,`visible`,`appear`,`options`]],template:function(c,n){c&1&&(Tl(O8),DN(0,Kn,2,5)(1,Jn,1,1)),c&2&&wN(n.inline()?0:1)},dependencies:[Ix,WW,x,P8,R3],encapsulation:2})}return a})();export{wl as $,ai as A,is as B,V3 as C,Y4 as D,Xr as E,f1 as F,oi as G,k5 as H,fi as I,ri as J,p9 as K,g2 as L,c8 as M,ci as N,Zl as O,er as P,ti as Q,h9 as R,Sl as S,Xe as T,li as U,j4 as V,ni as W,si as X,ro as Y,t8 as Z,P3 as _,Br as a,yl as at,Ro as b,Cr as c,Hi as d,x as et,I as f,Nl as g,N5 as h,B8 as i,y5 as it,ar as j,a4 as k,F0 as l,Lr as m,A4 as n,xo as nt,C4 as o,zo as ot,L4 as p,r8 as q,B3 as r,y4 as rt,Cl as s,$o as t,x5 as tt,G0 as u,P8 as v,W as w,S8 as x,Ql as y,ii as z};