import{Aa as V1,Ac as v0,B as q,C as X,Cb as $1,D as t1,Db as W1,Dc as q1,E as L,Eb as j2,Ec as o2,F as M2,Fb as n0,G as k1,Gb as i0,Gc as R4,H as q3,Ha as A,Hc as X1,Ia as Z3,Ic as H4,J as j,Ja as O1,Jc as g0,K as F2,Ka as F4,Kb as o1,Kc as z0,L as w,Lb as r0,Lc as U4,Mb as S2,Mc as $4,N as $,Nb as o0,Nc as W4,O as H,Ob as s0,Oc as B2,P as x,Pc as G2,Qc as U,R as t2,Ra as d2,Rc as M0,S as C,Sa as S,Sb as f0,T as s2,Ta as Q,U as X3,Ua as m,Ub as j1,V as e2,Va as c2,Vb as d0,Wa as R1,Xa as D,Xb as u0,Y as A1,Ya as J3,Yb as B4,Z as D1,Za as T4,_a as E4,a as g,aa as k,b as Z,ba as T2,bb as H1,bc as I4,c as U3,ca as l1,cb as e0,d as $3,da as n1,db as U1,e as W3,ea as D4,fa as _4,fb as n2,fc as V4,g as j3,ga as i1,gb as E2,h as G3,ha as _1,hb as P4,ia as F1,ic as m0,ja as r1,jc as p0,ka as Y3,la as T1,lc as O4,ma as f2,n as N1,na as V,nb as a0,o as c1,oa as l2,oc as s1,p as T,pa as a2,pc as G1,q as R,qa as E1,qc as h0,r as E,ra as Q3,s as v,sa as p2,t as g2,ta as h2,u as z2,ub as c0,v as $2,va as K3,w as A4,wa as P1,wb as t0,x as W2,xa as B1,xb as P2,y as P,ya as _,z as w1,za as I1,zb as l0}from"./chunk-67KDJ7HL.js";var k0=(()=>{class a{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||a)(w(F2),w(M2))};static \u0275dir=x({type:a})}return a})(),Ce=(()=>{class a extends k0{static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,features:[C]})}return a})(),q4=new E("");var ye={provide:q4,useExisting:c1(()=>A0),multi:!0};function xe(){let a=E4()?E4().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var Se=new E(""),A0=(()=>{class a extends k0{_compositionMode;_composing=!1;constructor(e,t,l){super(e,t),this._compositionMode=l,this._compositionMode==null&&(this._compositionMode=!xe())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||a)(w(F2),w(M2),w(Se,8))};static \u0275dir=x({type:a,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,l){t&1&&f2("input",function(i){return l._handleInput(i.target.value)})("blur",function(){return l.onTouched()})("compositionstart",function(){return l._compositionStart()})("compositionend",function(i){return l._compositionEnd(i.target.value)})},standalone:!1,features:[A([ye]),C]})}return a})();function X4(a){return a==null||Y4(a)===0}function Y4(a){return a==null?null:Array.isArray(a)||typeof a=="string"?a.length:a instanceof Set?a.size:null}var Q4=new E(""),K4=new E(""),Ne=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,b0=class{static min(c){return we(c)}static max(c){return ke(c)}static required(c){return Ae(c)}static requiredTrue(c){return De(c)}static email(c){return _e(c)}static minLength(c){return Fe(c)}static maxLength(c){return Te(c)}static pattern(c){return Ee(c)}static nullValidator(c){return D0()}static compose(c){return B0(c)}static composeAsync(c){return I0(c)}};function we(a){return c=>{if(c.value==null||a==null)return null;let e=parseFloat(c.value);return!isNaN(e)&&e<a?{min:{min:a,actual:c.value}}:null}}function ke(a){return c=>{if(c.value==null||a==null)return null;let e=parseFloat(c.value);return!isNaN(e)&&e>a?{max:{max:a,actual:c.value}}:null}}function Ae(a){return X4(a.value)?{required:!0}:null}function De(a){return a.value===!0?null:{required:!0}}function _e(a){return X4(a.value)||Ne.test(a.value)?null:{email:!0}}function Fe(a){return c=>{let e=c.value?.length??Y4(c.value);return e===null||e===0?null:e<a?{minlength:{requiredLength:a,actualLength:e}}:null}}function Te(a){return c=>{let e=c.value?.length??Y4(c.value);return e!==null&&e>a?{maxlength:{requiredLength:a,actualLength:e}}:null}}function Ee(a){if(!a)return D0;let c,e;return typeof a=="string"?(e="",a.charAt(0)!=="^"&&(e+="^"),e+=a,a.charAt(a.length-1)!=="$"&&(e+="$"),c=new RegExp(e)):(e=a.toString(),c=a),t=>{if(X4(t.value))return null;let l=t.value;return c.test(l)?null:{pattern:{requiredPattern:e,actualValue:l}}}}function D0(a){return null}function _0(a){return a!=null}function F0(a){return X3(a)?W3(a):a}function T0(a){let c={};return a.forEach(e=>{c=e!=null?g(g({},c),e):c}),Object.keys(c).length===0?null:c}function E0(a,c){return c.map(e=>e(a))}function Pe(a){return!a.validate}function P0(a){return a.map(c=>Pe(c)?c:e=>c.validate(e))}function B0(a){if(!a)return null;let c=a.filter(_0);return c.length==0?null:function(e){return T0(E0(e,c))}}function Z4(a){return a!=null?B0(P0(a)):null}function I0(a){if(!a)return null;let c=a.filter(_0);return c.length==0?null:function(e){let t=E0(e,c).map(F0);return G3(t).pipe(j3(T0))}}function J4(a){return a!=null?I0(P0(a)):null}function L0(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function V0(a){return a._rawValidators}function O0(a){return a._rawAsyncValidators}function j4(a){return a?Array.isArray(a)?a:[a]:[]}function Q1(a,c){return Array.isArray(a)?a.includes(c):a===c}function C0(a,c){let e=j4(c);return j4(a).forEach(l=>{Q1(e,l)||e.push(l)}),e}function y0(a,c){return j4(c).filter(e=>!Q1(a,e))}var K1=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=Z4(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=J4(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control?.reset(c)}hasError(c,e){return this.control?this.control.hasError(c,e):!1}getError(c,e){return this.control?this.control.getError(c,e):null}},Y2=class extends K1{name;get formDirective(){return null}get path(){return null}},b2=class extends K1{_parent=null;name=null;valueAccessor=null},Z1=class{_cd;constructor(c){this._cd=c}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var hl=(()=>{class a extends Z1{constructor(e){super(e)}static \u0275fac=function(t){return new(t||a)(w(b2,2))};static \u0275dir=x({type:a,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,l){t&2&&P1("ng-untouched",l.isUntouched)("ng-touched",l.isTouched)("ng-pristine",l.isPristine)("ng-dirty",l.isDirty)("ng-valid",l.isValid)("ng-invalid",l.isInvalid)("ng-pending",l.isPending)},standalone:!1,features:[C]})}return a})(),vl=(()=>{class a extends Z1{constructor(e){super(e)}static \u0275fac=function(t){return new(t||a)(w(Y2,10))};static \u0275dir=x({type:a,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,l){t&2&&P1("ng-untouched",l.isUntouched)("ng-touched",l.isTouched)("ng-pristine",l.isPristine)("ng-dirty",l.isDirty)("ng-valid",l.isValid)("ng-invalid",l.isInvalid)("ng-pending",l.isPending)("ng-submitted",l.isSubmitted)},standalone:!1,features:[C]})}return a})();var f1="VALID",Y1="INVALID",q2="PENDING",d1="DISABLED",N2=class{},J1=class extends N2{value;source;constructor(c,e){super(),this.value=c,this.source=e}},m1=class extends N2{pristine;source;constructor(c,e){super(),this.pristine=c,this.source=e}},p1=class extends N2{touched;source;constructor(c,e){super(),this.touched=c,this.source=e}},X2=class extends N2{status;source;constructor(c,e){super(),this.status=c,this.source=e}},G4=class extends N2{source;constructor(c){super(),this.source=c}},e4=class extends N2{source;constructor(c){super(),this.source=c}};function R0(a){return(l4(a)?a.validators:a)||null}function Be(a){return Array.isArray(a)?Z4(a):a||null}function H0(a,c){return(l4(c)?c.asyncValidators:a)||null}function Ie(a){return Array.isArray(a)?J4(a):a||null}function l4(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function Ve(a,c,e){let t=a.controls;if(!(c?Object.keys(t):t).length)throw new N1(1e3,"");if(!t[e])throw new N1(1001,"")}function Oe(a,c,e){a._forEachChild((t,l)=>{if(e[l]===void 0)throw new N1(-1002,"")})}var a4=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(c,e){this._assignValidators(c),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get status(){return d2(this.statusReactive)}set status(c){d2(()=>this.statusReactive.set(c))}_status=S(()=>this.statusReactive());statusReactive=q(void 0);get valid(){return this.status===f1}get invalid(){return this.status===Y1}get pending(){return this.status===q2}get disabled(){return this.status===d1}get enabled(){return this.status!==d1}errors;get pristine(){return d2(this.pristineReactive)}set pristine(c){d2(()=>this.pristineReactive.set(c))}_pristine=S(()=>this.pristineReactive());pristineReactive=q(!0);get dirty(){return!this.pristine}get touched(){return d2(this.touchedReactive)}set touched(c){d2(()=>this.touchedReactive.set(c))}_touched=S(()=>this.touchedReactive());touchedReactive=q(!1);get untouched(){return!this.touched}_events=new $3;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(C0(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(C0(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(y0(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(y0(c,this._rawAsyncValidators))}hasValidator(c){return Q1(this._rawValidators,c)}hasAsyncValidator(c){return Q1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){let e=this.touched===!1;this.touched=!0;let t=c.sourceControl??this;c.onlySelf||this._parent?.markAsTouched(Z(g({},c),{sourceControl:t})),e&&c.emitEvent!==!1&&this._events.next(new p1(!0,t))}markAllAsDirty(c={}){this.markAsDirty({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(c))}markAllAsTouched(c={}){this.markAsTouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(c))}markAsUntouched(c={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=c.sourceControl??this;this._forEachChild(l=>{l.markAsUntouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:t})}),c.onlySelf||this._parent?._updateTouched(c,t),e&&c.emitEvent!==!1&&this._events.next(new p1(!1,t))}markAsDirty(c={}){let e=this.pristine===!0;this.pristine=!1;let t=c.sourceControl??this;c.onlySelf||this._parent?.markAsDirty(Z(g({},c),{sourceControl:t})),e&&c.emitEvent!==!1&&this._events.next(new m1(!1,t))}markAsPristine(c={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=c.sourceControl??this;this._forEachChild(l=>{l.markAsPristine({onlySelf:!0,emitEvent:c.emitEvent})}),c.onlySelf||this._parent?._updatePristine(c,t),e&&c.emitEvent!==!1&&this._events.next(new m1(!0,t))}markAsPending(c={}){this.status=q2;let e=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new X2(this.status,e)),this.statusChanges.emit(this.status)),c.onlySelf||this._parent?.markAsPending(Z(g({},c),{sourceControl:e}))}disable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=d1,this.errors=null,this._forEachChild(l=>{l.disable(Z(g({},c),{onlySelf:!0}))}),this._updateValue();let t=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new J1(this.value,t)),this._events.next(new X2(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Z(g({},c),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(l=>l(!0))}enable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=f1,this._forEachChild(t=>{t.enable(Z(g({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(Z(g({},c),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(c,e){c.onlySelf||(this._parent?.updateValueAndValidity(c),c.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===f1||this.status===q2)&&this._runAsyncValidator(t,c.emitEvent)}let e=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new J1(this.value,e)),this._events.next(new X2(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),c.onlySelf||this._parent?.updateValueAndValidity(Z(g({},c),{sourceControl:e}))}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?d1:f1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c,e){if(this.asyncValidator){this.status=q2,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:c!==!1};let t=F0(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(l=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(l,{emitEvent:e,shouldHaveEmitted:c})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let c=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,c}return!1}setErrors(c,e={}){this.errors=c,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(c){let e=c;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,l)=>t&&t._find(l),this)}getError(c,e){let t=e?this.get(e):this;return t?.errors?t.errors[c]:null}hasError(c,e){return!!this.getError(c,e)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c,e,t){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),(c||t)&&this._events.next(new X2(this.status,e)),this._parent&&this._parent._updateControlsErrors(c,e,t)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?d1:this.errors?Y1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(q2)?q2:this._anyControlsHaveStatus(Y1)?Y1:f1}_anyControlsHaveStatus(c){return this._anyControls(e=>e.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c,e){let t=!this._anyControlsDirty(),l=this.pristine!==t;this.pristine=t,c.onlySelf||this._parent?._updatePristine(c,e),l&&this._events.next(new m1(this.pristine,e))}_updateTouched(c={},e){this.touched=this._anyControlsTouched(),this._events.next(new p1(this.touched,e)),c.onlySelf||this._parent?._updateTouched(c,e)}_onDisabledChange=[];_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){l4(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){return!c&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=Be(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=Ie(this._rawAsyncValidators)}},c4=class extends a4{constructor(c,e,t){super(R0(e),H0(t,e)),this.controls=c,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(c,e){return this.controls[c]?this.controls[c]:(this.controls[c]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(c,e,t={}){this.registerControl(c,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(c,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(c,e,t={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],e&&this.registerControl(c,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,e={}){Oe(this,!0,c),Object.keys(c).forEach(t=>{Ve(this,!0,t),this.controls[t].setValue(c[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(c,e={}){c!=null&&(Object.keys(c).forEach(t=>{let l=this.controls[t];l&&l.patchValue(c[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(c={},e={}){this._forEachChild((t,l)=>{t.reset(c?c[l]:null,Z(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new e4(this))}getRawValue(){return this._reduceChildren({},(c,e,t)=>(c[t]=e.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&c(t,e)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&c(t))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(e,t,l)=>((t.enabled||this.disabled)&&(e[l]=t.value),e))}_reduceChildren(c,e){let t=c;return this._forEachChild((l,n)=>{t=e(t,l,n)}),t}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var h1=new E("",{factory:()=>n4}),n4="always";function Re(a,c){return[...c.path,a]}function e3(a,c,e=n4){U0(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||e==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),$e(a,c),je(a,c),We(a,c),He(a,c)}function x0(a,c,e=!0){let t=()=>{};c?.valueAccessor?.registerOnChange(t),c?.valueAccessor?.registerOnTouched(t),Ue(a,c),a&&(c._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function t4(a,c){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(c)})}function He(a,c){if(c.valueAccessor.setDisabledState){let e=t=>{c.valueAccessor.setDisabledState(t)};a.registerOnDisabledChange(e),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function U0(a,c){let e=V0(a);c.validator!==null?a.setValidators(L0(e,c.validator)):typeof e=="function"&&a.setValidators([e]);let t=O0(a);c.asyncValidator!==null?a.setAsyncValidators(L0(t,c.asyncValidator)):typeof t=="function"&&a.setAsyncValidators([t]);let l=()=>a.updateValueAndValidity();t4(c._rawValidators,l),t4(c._rawAsyncValidators,l)}function Ue(a,c){let e=!1;if(a!==null){if(c.validator!==null){let l=V0(a);if(Array.isArray(l)&&l.length>0){let n=l.filter(i=>i!==c.validator);n.length!==l.length&&(e=!0,a.setValidators(n))}}if(c.asyncValidator!==null){let l=O0(a);if(Array.isArray(l)&&l.length>0){let n=l.filter(i=>i!==c.asyncValidator);n.length!==l.length&&(e=!0,a.setAsyncValidators(n))}}}let t=()=>{};return t4(c._rawValidators,t),t4(c._rawAsyncValidators,t),e}function $e(a,c){c.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&$0(a,c)})}function We(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&$0(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function $0(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function je(a,c){let e=(t,l)=>{c.valueAccessor.writeValue(t),l&&c.viewToModelUpdate(t)};a.registerOnChange(e),c._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function Ge(a,c){a==null,U0(a,c)}function W0(a,c){if(!a.hasOwnProperty("model"))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(c,e.currentValue)}function qe(a){return Object.getPrototypeOf(a.constructor)===Ce}function Xe(a,c){a._syncPendingControls(),c.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function j0(a,c){if(!c)return null;Array.isArray(c);let e,t,l;return c.forEach(n=>{n.constructor===A0?e=n:qe(n)?t=n:l=n}),l||t||e||null}var Ye={provide:Y2,useExisting:c1(()=>Qe)},u1=Promise.resolve(),Qe=(()=>{class a extends Y2{callSetDisabledState;get submitted(){return d2(this.submittedReactive)}_submitted=S(()=>this.submittedReactive());submittedReactive=q(!1);_directives=new Set;form;ngSubmit=new P;options;constructor(e,t,l){super(),this.callSetDisabledState=l,this.form=new c4({},Z4(e),J4(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){u1.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e3(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){u1.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){u1.then(()=>{let t=this._findContainer(e.path),l=new c4({});Ge(l,e),t.registerControl(e.name,l),l.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){u1.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){u1.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Xe(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new G4(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||a)(w(Q4,10),w(K4,10),w(h1,8))};static \u0275dir=x({type:a,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,l){t&1&&f2("submit",function(i){return l.onSubmit(i)})("reset",function(){return l.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[A([Ye]),C]})}return a})();function S0(a,c){let e=a.indexOf(c);e>-1&&a.splice(e,1)}function N0(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var Ke=class extends a4{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(c=null,e,t){super(R0(e),H0(t,e)),this._applyFormState(c),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),l4(e)&&(e.nonNullable||e.initialValueIsDefault)&&(N0(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,e={}){this.value=this._pendingValue=c,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(c,e={}){this.setValue(c,e)}reset(c=this.defaultValue,e={}){this._applyFormState(c),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new e4(this))}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){S0(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){S0(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){N0(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var Ze={provide:b2,useExisting:c1(()=>Je)},w0=Promise.resolve(),Je=(()=>{class a extends b2{_changeDetectorRef;callSetDisabledState;control=new Ke;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new P;constructor(e,t,l,n,i,r){super(),this._changeDetectorRef=i,this.callSetDisabledState=r,this._parent=e,this._setValidators(t),this._setAsyncValidators(l),this.valueAccessor=j0(this,n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),W0(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){e3(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){w0.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,l=t!==0&&D(t);w0.then(()=>{l&&!this.control.disabled?this.control.disable():!l&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Re(e,this._parent):[e]}static \u0275fac=function(t){return new(t||a)(w(Y2,9),w(Q4,10),w(K4,10),w(q4,10),w(R1,8),w(h1,8))};static \u0275dir=x({type:a,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[A([Ze]),C,t1]})}return a})();var zl=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=x({type:a,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return a})();var G0=new E(""),e5={provide:b2,useExisting:c1(()=>a5)},a5=(()=>{class a extends b2{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new P;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,l,n,i){super(),this._ngModelWarningConfig=n,this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=j0(this,l)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&x0(t,this,!1),e3(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}W0(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&x0(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||a)(w(Q4,10),w(K4,10),w(q4,10),w(G0,8),w(h1,8))};static \u0275dir=x({type:a,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[A([e5]),C,t1]})}return a})();var q0=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({})}return a})();var Ml=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:h1,useValue:e.callSetDisabledState??n4}]}}static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[q0]})}return a})(),bl=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:G0,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:h1,useValue:e.callSetDisabledState??n4}]}}static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[q0]})}return a})();function o3(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,t=Array(c);e<c;e++)t[e]=a[e];return t}function c5(a){if(Array.isArray(a))return a}function t5(a){if(Array.isArray(a))return o3(a)}function l5(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function X0(a,c){for(var e=0;e<c.length;e++){var t=c[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,N6(t.key),t)}}function n5(a,c,e){return c&&X0(a.prototype,c),e&&X0(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function o4(a,c){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=y3(a))||c&&a&&typeof a.length=="number"){e&&(a=e);var t=0,l=function(){};return{s:l,n:function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}},e:function(o){throw o},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n,i=!0,r=!1;return{s:function(){e=e.call(a)},n:function(){var o=e.next();return i=o.done,o},e:function(o){r=!0,n=o},f:function(){try{i||e.return==null||e.return()}finally{if(r)throw n}}}}function M(a,c,e){return(c=N6(c))in a?Object.defineProperty(a,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[c]=e,a}function i5(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function r5(a,c){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,l,n,i,r=[],o=!0,s=!1;try{if(n=(e=e.call(a)).next,c===0){if(Object(e)!==e)return;o=!1}else for(;!(o=(t=n.call(e)).done)&&(r.push(t.value),r.length!==c);o=!0);}catch(f){s=!0,l=f}finally{try{if(!o&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(s)throw l}}return r}}function o5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y0(a,c){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);c&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),e.push.apply(e,t)}return e}function u(a){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?Y0(Object(e),!0).forEach(function(t){M(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Y0(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function p4(a,c){return c5(a)||r5(a,c)||y3(a,c)||o5()}function m2(a){return t5(a)||i5(a)||y3(a)||s5()}function f5(a,c){if(typeof a!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,c||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function N6(a){var c=f5(a,"string");return typeof c=="symbol"?c:c+""}function d4(a){"@babel/helpers - typeof";return d4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d4(a)}function y3(a,c){if(a){if(typeof a=="string")return o3(a,c);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o3(a,c):void 0}}var Q0=function(){},x3={},w6={},k6=null,A6={mark:Q0,measure:Q0};try{typeof window<"u"&&(x3=window),typeof document<"u"&&(w6=document),typeof MutationObserver<"u"&&(k6=MutationObserver),typeof performance<"u"&&(A6=performance)}catch{}var d5=x3.navigator||{},K0=d5.userAgent,Z0=K0===void 0?"":K0,k2=x3,F=w6,J0=k6,i4=A6,yl=!!k2.document,y2=!!F.documentElement&&!!F.head&&typeof F.addEventListener=="function"&&typeof F.createElement=="function",D6=~Z0.indexOf("MSIE")||~Z0.indexOf("Trident/"),a3,u5=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,m5=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,_6={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},p5={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},F6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],K="classic",b1="duotone",T6="sharp",E6="sharp-duotone",P6="chisel",B6="etch",I6="graphite",V6="jelly",O6="jelly-duo",R6="jelly-fill",H6="notdog",U6="notdog-duo",$6="slab",W6="slab-press",j6="thumbprint",G6="utility",q6="utility-duo",X6="utility-fill",Y6="whiteboard",h5="Classic",v5="Duotone",g5="Sharp",z5="Sharp Duotone",M5="Chisel",b5="Etch",L5="Graphite",C5="Jelly",y5="Jelly Duo",x5="Jelly Fill",S5="Notdog",N5="Notdog Duo",w5="Slab",k5="Slab Press",A5="Thumbprint",D5="Utility",_5="Utility Duo",F5="Utility Fill",T5="Whiteboard",Q6=[K,b1,T6,E6,P6,B6,I6,V6,O6,R6,H6,U6,$6,W6,j6,G6,q6,X6,Y6],xl=(a3={},M(M(M(M(M(M(M(M(M(M(a3,K,h5),b1,v5),T6,g5),E6,z5),P6,M5),B6,b5),I6,L5),V6,C5),O6,y5),R6,x5),M(M(M(M(M(M(M(M(M(a3,H6,S5),U6,N5),$6,w5),W6,k5),j6,A5),G6,D5),q6,_5),X6,F5),Y6,T5)),E5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},P5={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},B5=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),I5={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},K6=["fak","fa-kit","fakd","fa-kit-duotone"],e6={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},V5=["kit"],O5="kit",R5="kit-duotone",H5="Kit",U5="Kit Duotone",Sl=M(M({},O5,H5),R5,U5),$5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},W5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},j5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},a6={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},c3,r4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],q5="classic",X5="duotone",Y5="sharp",Q5="sharp-duotone",K5="chisel",Z5="etch",J5="graphite",e7="jelly",a7="jelly-duo",c7="jelly-fill",t7="notdog",l7="notdog-duo",n7="slab",i7="slab-press",r7="thumbprint",o7="utility",s7="utility-duo",f7="utility-fill",d7="whiteboard",u7="Classic",m7="Duotone",p7="Sharp",h7="Sharp Duotone",v7="Chisel",g7="Etch",z7="Graphite",M7="Jelly",b7="Jelly Duo",L7="Jelly Fill",C7="Notdog",y7="Notdog Duo",x7="Slab",S7="Slab Press",N7="Thumbprint",w7="Utility",k7="Utility Duo",A7="Utility Fill",D7="Whiteboard",Nl=(c3={},M(M(M(M(M(M(M(M(M(M(c3,q5,u7),X5,m7),Y5,p7),Q5,h7),K5,v7),Z5,g7),J5,z7),e7,M7),a7,b7),c7,L7),M(M(M(M(M(M(M(M(M(c3,t7,C7),l7,y7),n7,x7),i7,S7),r7,N7),o7,w7),s7,k7),f7,A7),d7,D7)),_7="kit",F7="kit-duotone",T7="Kit",E7="Kit Duotone",wl=M(M({},_7,T7),F7,E7),P7={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},B7={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},s3={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},I7=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Z6=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(G5,I7),V7=["solid","regular","light","thin","duotone","brands","semibold"],J6=[1,2,3,4,5,6,7,8,9,10],O7=J6.concat([11,12,13,14,15,16,17,18,19,20]),R7=["aw","fw","pull-left","pull-right"],H7=[].concat(m2(Object.keys(B7)),V7,R7,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",r4.GROUP,r4.SWAP_OPACITY,r4.PRIMARY,r4.SECONDARY]).concat(J6.map(function(a){return"".concat(a,"x")})).concat(O7.map(function(a){return"w-".concat(a)})),U7={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L2="___FONT_AWESOME___",f3=16,e8="fa",a8="svg-inline--fa",V2="data-fa-i2svg",d3="data-fa-pseudo-element",$7="data-fa-pseudo-element-pending",S3="data-prefix",N3="data-icon",c6="fontawesome-i2svg",W7="async",j7=["HTML","HEAD","STYLE","SCRIPT"],c8=["::before","::after",":before",":after"],t8=(function(){try{return!0}catch{return!1}})();function L1(a){return new Proxy(a,{get:function(e,t){return t in e?e[t]:e[K]}})}var l8=u({},_6);l8[K]=u(u(u(u({},{"fa-duotone":"duotone"}),_6[K]),e6.kit),e6["kit-duotone"]);var G7=L1(l8),u3=u({},I5);u3[K]=u(u(u(u({},{duotone:"fad"}),u3[K]),a6.kit),a6["kit-duotone"]);var t6=L1(u3),m3=u({},s3);m3[K]=u(u({},m3[K]),j5.kit);var w3=L1(m3),p3=u({},P7);p3[K]=u(u({},p3[K]),$5.kit);var kl=L1(p3),q7=u5,n8="fa-layers-text",X7=m5,Y7=u({},E5),Al=L1(Y7),Q7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],t3=p5,K7=[].concat(m2(V5),m2(H7)),g1=k2.FontAwesomeConfig||{};function Z7(a){var c=F.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function J7(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}F&&typeof F.querySelector=="function"&&(l6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],l6.forEach(function(a){var c=p4(a,2),e=c[0],t=c[1],l=J7(Z7(e));l!=null&&(g1[t]=l)}));var l6,i8={styleDefault:"solid",familyDefault:K,cssPrefix:e8,replacementClass:a8,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g1.familyPrefix&&(g1.cssPrefix=g1.familyPrefix);var Z2=u(u({},i8),g1);Z2.autoReplaceSvg||(Z2.observeMutations=!1);var z={};Object.keys(i8).forEach(function(a){Object.defineProperty(z,a,{enumerable:!0,set:function(e){Z2[a]=e,z1.forEach(function(t){return t(z)})},get:function(){return Z2[a]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){Z2.cssPrefix=c,z1.forEach(function(e){return e(z)})},get:function(){return Z2.cssPrefix}});k2.FontAwesomeConfig=z;var z1=[];function ea(a){return z1.push(a),function(){z1.splice(z1.indexOf(a),1)}}var w2=f3,v2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aa(a){if(!(!a||!y2)){var c=F.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var e=F.head.childNodes,t=null,l=e.length-1;l>-1;l--){var n=e[l],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(t=n)}return F.head.insertBefore(c,t),a}}var ca="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n6(){for(var a=12,c="";a-- >0;)c+=ca[Math.random()*62|0];return c}function J2(a){for(var c=[],e=(a||[]).length>>>0;e--;)c[e]=a[e];return c}function k3(a){return a.classList?J2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function r8(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ta(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(r8(a[e]),'" ')},"").trim()}function h4(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(a[e].trim(),";")},"")}function A3(a){return a.size!==v2.size||a.x!==v2.x||a.y!==v2.y||a.rotate!==v2.rotate||a.flipX||a.flipY}function la(a){var c=a.transform,e=a.containerWidth,t=a.iconWidth,l={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),r="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(r)},s={transform:"translate(".concat(t/2*-1," -256)")};return{outer:l,inner:o,path:s}}function na(a){var c=a.transform,e=a.width,t=e===void 0?f3:e,l=a.height,n=l===void 0?f3:l,i=a.startCentered,r=i===void 0?!1:i,o="";return r&&D6?o+="translate(".concat(c.x/w2-t/2,"em, ").concat(c.y/w2-n/2,"em) "):r?o+="translate(calc(-50% + ".concat(c.x/w2,"em), calc(-50% + ").concat(c.y/w2,"em)) "):o+="translate(".concat(c.x/w2,"em, ").concat(c.y/w2,"em) "),o+="scale(".concat(c.size/w2*(c.flipX?-1:1),", ").concat(c.size/w2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var ia=`:root, :host {
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
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
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
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
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

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
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
}`;function o8(){var a=e8,c=a8,e=z.cssPrefix,t=z.replacementClass,l=ia;if(e!==a||t!==c){var n=new RegExp("\\.".concat(a,"\\-"),"g"),i=new RegExp("\\--".concat(a,"\\-"),"g"),r=new RegExp("\\.".concat(c),"g");l=l.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(r,".".concat(t))}return l}var i6=!1;function l3(){z.autoAddCss&&!i6&&(aa(o8()),i6=!0)}var ra={mixout:function(){return{dom:{css:o8,insertCss:l3}}},hooks:function(){return{beforeDOMElementCreation:function(){l3()},beforeI2svg:function(){l3()}}}},C2=k2||{};C2[L2]||(C2[L2]={});C2[L2].styles||(C2[L2].styles={});C2[L2].hooks||(C2[L2].hooks={});C2[L2].shims||(C2[L2].shims=[]);var u2=C2[L2],s8=[],f8=function(){F.removeEventListener("DOMContentLoaded",f8),u4=1,s8.map(function(c){return c()})},u4=!1;y2&&(u4=(F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState),u4||F.addEventListener("DOMContentLoaded",f8));function oa(a){y2&&(u4?setTimeout(a,0):s8.push(a))}function C1(a){var c=a.tag,e=a.attributes,t=e===void 0?{}:e,l=a.children,n=l===void 0?[]:l;return typeof a=="string"?r8(a):"<".concat(c," ").concat(ta(t),">").concat(n.map(C1).join(""),"</").concat(c,">")}function r6(a,c,e){if(a&&a[c]&&a[c][e])return{prefix:c,iconName:e,icon:a[c][e]}}var sa=function(c,e){return function(t,l,n,i){return c.call(e,t,l,n,i)}},n3=function(c,e,t,l){var n=Object.keys(c),i=n.length,r=l!==void 0?sa(e,l):e,o,s,f;for(t===void 0?(o=1,f=c[n[0]]):(o=0,f=t);o<i;o++)s=n[o],f=r(f,c[s],s,c);return f};function d8(a){return m2(a).length!==1?null:a.codePointAt(0).toString(16)}function o6(a){return Object.keys(a).reduce(function(c,e){var t=a[e],l=!!t.icon;return l?c[t.iconName]=t.icon:c[e]=t,c},{})}function h3(a,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.skipHooks,l=t===void 0?!1:t,n=o6(c);typeof u2.hooks.addPack=="function"&&!l?u2.hooks.addPack(a,o6(c)):u2.styles[a]=u(u({},u2.styles[a]||{}),n),a==="fas"&&h3("fa",c)}var M1=u2.styles,fa=u2.shims,u8=Object.keys(w3),da=u8.reduce(function(a,c){return a[c]=Object.keys(w3[c]),a},{}),D3=null,m8={},p8={},h8={},v8={},g8={};function ua(a){return~K7.indexOf(a)}function ma(a,c){var e=c.split("-"),t=e[0],l=e.slice(1).join("-");return t===a&&l!==""&&!ua(l)?l:null}var z8=function(){var c=function(n){return n3(M1,function(i,r,o){return i[o]=n3(r,n,{}),i},{})};m8=c(function(l,n,i){if(n[3]&&(l[n[3]]=i),n[2]){var r=n[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){l[o.toString(16)]=i})}return l}),p8=c(function(l,n,i){if(l[i]=i,n[2]){var r=n[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){l[o]=i})}return l}),g8=c(function(l,n,i){var r=n[2];return l[i]=i,r.forEach(function(o){l[o]=i}),l});var e="far"in M1||z.autoFetchSvg,t=n3(fa,function(l,n){var i=n[0],r=n[1],o=n[2];return r==="far"&&!e&&(r="fas"),typeof i=="string"&&(l.names[i]={prefix:r,iconName:o}),typeof i=="number"&&(l.unicodes[i.toString(16)]={prefix:r,iconName:o}),l},{names:{},unicodes:{}});h8=t.names,v8=t.unicodes,D3=v4(z.styleDefault,{family:z.familyDefault})};ea(function(a){D3=v4(a.styleDefault,{family:z.familyDefault})});z8();function _3(a,c){return(m8[a]||{})[c]}function pa(a,c){return(p8[a]||{})[c]}function I2(a,c){return(g8[a]||{})[c]}function M8(a){return h8[a]||{prefix:null,iconName:null}}function ha(a){var c=v8[a],e=_3("fas",a);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function A2(){return D3}var b8=function(){return{prefix:null,iconName:null,rest:[]}};function va(a){var c=K,e=u8.reduce(function(t,l){return t[l]="".concat(z.cssPrefix,"-").concat(l),t},{});return Q6.forEach(function(t){(a.includes(e[t])||a.some(function(l){return da[t].includes(l)}))&&(c=t)}),c}function v4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,t=e===void 0?K:e,l=G7[t][a];if(t===b1&&!a)return"fad";var n=t6[t][a]||t6[t][l],i=a in u2.styles?a:null,r=n||i||null;return r}function ga(a){var c=[],e=null;return a.forEach(function(t){var l=ma(z.cssPrefix,t);l?e=l:t&&c.push(t)}),{iconName:e,rest:c}}function s6(a){return a.sort().filter(function(c,e,t){return t.indexOf(c)===e})}var f6=Z6.concat(K6);function g4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.skipLookups,t=e===void 0?!1:e,l=null,n=s6(a.filter(function(p){return f6.includes(p)})),i=s6(a.filter(function(p){return!f6.includes(p)})),r=n.filter(function(p){return l=p,!F6.includes(p)}),o=p4(r,1),s=o[0],f=s===void 0?null:s,d=va(n),h=u(u({},ga(i)),{},{prefix:v4(f,{family:d})});return u(u(u({},h),La({values:a,family:d,styles:M1,config:z,canonical:h,givenPrefix:l})),za(t,l,h))}function za(a,c,e){var t=e.prefix,l=e.iconName;if(a||!t||!l)return{prefix:t,iconName:l};var n=c==="fa"?M8(l):{},i=I2(t,l);return l=n.iconName||i||l,t=n.prefix||t,t==="far"&&!M1.far&&M1.fas&&!z.autoFetchSvg&&(t="fas"),{prefix:t,iconName:l}}var Ma=Q6.filter(function(a){return a!==K||a!==b1}),ba=Object.keys(s3).filter(function(a){return a!==K}).map(function(a){return Object.keys(s3[a])}).flat();function La(a){var c=a.values,e=a.family,t=a.canonical,l=a.givenPrefix,n=l===void 0?"":l,i=a.styles,r=i===void 0?{}:i,o=a.config,s=o===void 0?{}:o,f=e===b1,d=c.includes("fa-duotone")||c.includes("fad"),h=s.familyDefault==="duotone",p=t.prefix==="fad"||t.prefix==="fa-duotone";if(!f&&(d||h||p)&&(t.prefix="fad"),(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),!t.prefix&&Ma.includes(e)){var y=Object.keys(r).find(function(B){return ba.includes(B)});if(y||s.autoFetchSvg){var b=B5.get(e).defaultShortPrefixId;t.prefix=b,t.iconName=I2(t.prefix,t.iconName)||t.iconName}}return(t.prefix==="fa"||n==="fa")&&(t.prefix=A2()||"fas"),t}var Ca=(function(){function a(){l5(this,a),this.definitions={}}return n5(a,[{key:"add",value:function(){for(var e=this,t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];var i=l.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(r){e.definitions[r]=u(u({},e.definitions[r]||{}),i[r]),h3(r,i[r]);var o=w3[K][r];o&&h3(o,i[r]),z8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var l=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(l).map(function(n){var i=l[n],r=i.prefix,o=i.iconName,s=i.icon,f=s[2];e[r]||(e[r]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(e[r][d]=s)}),e[r][o]=s}),e}}])})(),d6=[],Q2={},K2={},ya=Object.keys(K2);function xa(a,c){var e=c.mixoutsTo;return d6=a,Q2={},Object.keys(K2).forEach(function(t){ya.indexOf(t)===-1&&delete K2[t]}),d6.forEach(function(t){var l=t.mixout?t.mixout():{};if(Object.keys(l).forEach(function(i){typeof l[i]=="function"&&(e[i]=l[i]),d4(l[i])==="object"&&Object.keys(l[i]).forEach(function(r){e[i]||(e[i]={}),e[i][r]=l[i][r]})}),t.hooks){var n=t.hooks();Object.keys(n).forEach(function(i){Q2[i]||(Q2[i]=[]),Q2[i].push(n[i])})}t.provides&&t.provides(K2)}),e}function v3(a,c){for(var e=arguments.length,t=new Array(e>2?e-2:0),l=2;l<e;l++)t[l-2]=arguments[l];var n=Q2[a]||[];return n.forEach(function(i){c=i.apply(null,[c].concat(t))}),c}function O2(a){for(var c=arguments.length,e=new Array(c>1?c-1:0),t=1;t<c;t++)e[t-1]=arguments[t];var l=Q2[a]||[];l.forEach(function(n){n.apply(null,e)})}function D2(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return K2[a]?K2[a].apply(null,c):void 0}function g3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,e=a.prefix||A2();if(c)return c=I2(e,c)||c,r6(L8.definitions,e,c)||r6(u2.styles,e,c)}var L8=new Ca,Sa=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,O2("noAuto")},Na={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return y2?(O2("beforeI2svg",c),D2("pseudoElements2svg",c),D2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,oa(function(){ka({autoReplaceSvgRoot:e}),O2("watch",c)})}},wa={icon:function(c){if(c===null)return null;if(d4(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:I2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],t=v4(c[0]);return{prefix:t,iconName:I2(t,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(q7))){var l=g4(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||A2(),iconName:I2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){var n=A2();return{prefix:n,iconName:I2(n,c)||c}}}},i2={noAuto:Sa,config:z,dom:Na,parse:wa,library:L8,findIconDefinition:g3,toHtml:C1},ka=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,t=e===void 0?F:e;(Object.keys(u2.styles).length>0||z.autoFetchSvg)&&y2&&z.autoReplaceSvg&&i2.dom.i2svg({node:t})};function z4(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(t){return C1(t)})}}),Object.defineProperty(a,"node",{get:function(){if(y2){var t=F.createElement("div");return t.innerHTML=a.html,t.children}}}),a}function Aa(a){var c=a.children,e=a.main,t=a.mask,l=a.attributes,n=a.styles,i=a.transform;if(A3(i)&&e.found&&!t.found){var r=e.width,o=e.height,s={x:r/o/2,y:.5};l.style=h4(u(u({},n),{},{"transform-origin":"".concat(s.x+i.x/16,"em ").concat(s.y+i.y/16,"em")}))}return[{tag:"svg",attributes:l,children:c}]}function Da(a){var c=a.prefix,e=a.iconName,t=a.children,l=a.attributes,n=a.symbol,i=n===!0?"".concat(c,"-").concat(z.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},l),{},{id:i}),children:t}]}]}function _a(a){var c=["aria-label","aria-labelledby","title","role"];return c.some(function(e){return e in a})}function F3(a){var c=a.icons,e=c.main,t=c.mask,l=a.prefix,n=a.iconName,i=a.transform,r=a.symbol,o=a.maskId,s=a.extra,f=a.watchable,d=f===void 0?!1:f,h=t.found?t:e,p=h.width,y=h.height,b=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(function(r2){return s.classes.indexOf(r2)===-1}).filter(function(r2){return r2!==""||!!r2}).concat(s.classes).join(" "),B={children:[],attributes:u(u({},s.attributes),{},{"data-prefix":l,"data-icon":n,class:b,role:s.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(y)})};!_a(s.attributes)&&!s.attributes["aria-hidden"]&&(B.attributes["aria-hidden"]="true"),d&&(B.attributes[V2]="");var I=u(u({},B),{},{prefix:l,iconName:n,main:e,mask:t,maskId:o,transform:i,symbol:r,styles:u({},s.styles)}),G=t.found&&e.found?D2("generateAbstractMask",I)||{children:[],attributes:{}}:D2("generateAbstractIcon",I)||{children:[],attributes:{}},O=G.children,x2=G.attributes;return I.children=O,I.attributes=x2,r?Da(I):Aa(I)}function u6(a){var c=a.content,e=a.width,t=a.height,l=a.transform,n=a.extra,i=a.watchable,r=i===void 0?!1:i,o=u(u({},n.attributes),{},{class:n.classes.join(" ")});r&&(o[V2]="");var s=u({},n.styles);A3(l)&&(s.transform=na({transform:l,startCentered:!0,width:e,height:t}),s["-webkit-transform"]=s.transform);var f=h4(s);f.length>0&&(o.style=f);var d=[];return d.push({tag:"span",attributes:o,children:[c]}),d}function Fa(a){var c=a.content,e=a.extra,t=u(u({},e.attributes),{},{class:e.classes.join(" ")}),l=h4(e.styles);l.length>0&&(t.style=l);var n=[];return n.push({tag:"span",attributes:t,children:[c]}),n}var i3=u2.styles;function z3(a){var c=a[0],e=a[1],t=a.slice(4),l=p4(t,1),n=l[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(t3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(t3.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(t3.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:e,icon:i}}var Ta={found:!1,width:512,height:512};function Ea(a,c){!t8&&!z.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function M3(a,c){var e=c;return c==="fa"&&z.styleDefault!==null&&(c=A2()),new Promise(function(t,l){if(e==="fa"){var n=M8(a)||{};a=n.iconName||a,c=n.prefix||c}if(a&&c&&i3[c]&&i3[c][a]){var i=i3[c][a];return t(z3(i))}Ea(a,c),t(u(u({},Ta),{},{icon:z.showMissingIcons&&a?D2("missingIconAbstract")||{}:{}}))})}var m6=function(){},b3=z.measurePerformance&&i4&&i4.mark&&i4.measure?i4:{mark:m6,measure:m6},v1='FA "7.2.0"',Pa=function(c){return b3.mark("".concat(v1," ").concat(c," begins")),function(){return C8(c)}},C8=function(c){b3.mark("".concat(v1," ").concat(c," ends")),b3.measure("".concat(v1," ").concat(c),"".concat(v1," ").concat(c," begins"),"".concat(v1," ").concat(c," ends"))},T3={begin:Pa,end:C8},s4=function(){};function p6(a){var c=a.getAttribute?a.getAttribute(V2):null;return typeof c=="string"}function Ba(a){var c=a.getAttribute?a.getAttribute(S3):null,e=a.getAttribute?a.getAttribute(N3):null;return c&&e}function Ia(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(z.replacementClass)}function Va(){if(z.autoReplaceSvg===!0)return f4.replace;var a=f4[z.autoReplaceSvg];return a||f4.replace}function Oa(a){return F.createElementNS("http://www.w3.org/2000/svg",a)}function Ra(a){return F.createElement(a)}function y8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,t=e===void 0?a.tag==="svg"?Oa:Ra:e;if(typeof a=="string")return F.createTextNode(a);var l=t(a.tag);Object.keys(a.attributes||[]).forEach(function(i){l.setAttribute(i,a.attributes[i])});var n=a.children||[];return n.forEach(function(i){l.appendChild(y8(i,{ceFn:t}))}),l}function Ha(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var f4={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(l){e.parentNode.insertBefore(y8(l),e)}),e.getAttribute(V2)===null&&z.keepOriginalSource){var t=F.createComment(Ha(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(c){var e=c[0],t=c[1];if(~k3(e).indexOf(z.replacementClass))return f4.replace(c);var l=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var n=t[0].attributes.class.split(" ").reduce(function(r,o){return o===z.replacementClass||o.match(l)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});t[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=t.map(function(r){return C1(r)}).join(`
`);e.setAttribute(V2,""),e.innerHTML=i}};function h6(a){a()}function x8(a,c){var e=typeof c=="function"?c:s4;if(a.length===0)e();else{var t=h6;z.mutateApproach===W7&&(t=k2.requestAnimationFrame||h6),t(function(){var l=Va(),n=T3.begin("mutate");a.map(l),n(),e()})}}var E3=!1;function S8(){E3=!0}function L3(){E3=!1}var m4=null;function v6(a){if(J0&&z.observeMutations){var c=a.treeCallback,e=c===void 0?s4:c,t=a.nodeCallback,l=t===void 0?s4:t,n=a.pseudoElementsCallback,i=n===void 0?s4:n,r=a.observeMutationsRoot,o=r===void 0?F:r;m4=new J0(function(s){if(!E3){var f=A2();J2(s).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!p6(d.addedNodes[0])&&(z.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&p6(d.target)&&~Q7.indexOf(d.attributeName))if(d.attributeName==="class"&&Ba(d.target)){var h=g4(k3(d.target)),p=h.prefix,y=h.iconName;d.target.setAttribute(S3,p||f),y&&d.target.setAttribute(N3,y)}else Ia(d.target)&&l(d.target)})}}),y2&&m4.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ua(){m4&&m4.disconnect()}function $a(a){var c=a.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(t,l){var n=l.split(":"),i=n[0],r=n.slice(1);return i&&r.length>0&&(t[i]=r.join(":").trim()),t},{})),e}function Wa(a){var c=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),t=a.innerText!==void 0?a.innerText.trim():"",l=g4(k3(a));return l.prefix||(l.prefix=A2()),c&&e&&(l.prefix=c,l.iconName=e),l.iconName&&l.prefix||(l.prefix&&t.length>0&&(l.iconName=pa(l.prefix,a.innerText)||_3(l.prefix,d8(a.innerText))),!l.iconName&&z.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=a.firstChild.data)),l}function ja(a){var c=J2(a.attributes).reduce(function(e,t){return e.name!=="class"&&e.name!=="style"&&(e[t.name]=t.value),e},{});return c}function Ga(){return{iconName:null,prefix:null,transform:v2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Wa(a),t=e.iconName,l=e.prefix,n=e.rest,i=ja(a),r=v3("parseNodeAttributes",{},a),o=c.styleParser?$a(a):[];return u({iconName:t,prefix:l,transform:v2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},r)}var qa=u2.styles;function N8(a){var c=z.autoReplaceSvg==="nest"?g6(a,{styleParser:!1}):g6(a);return~c.extra.classes.indexOf(n8)?D2("generateLayersText",a,c):D2("generateSvgReplacementMutation",a,c)}function Xa(){return[].concat(m2(K6),m2(Z6))}function z6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y2)return Promise.resolve();var e=F.documentElement.classList,t=function(d){return e.add("".concat(c6,"-").concat(d))},l=function(d){return e.remove("".concat(c6,"-").concat(d))},n=z.autoFetchSvg?Xa():F6.concat(Object.keys(qa));n.includes("fa")||n.push("fa");var i=[".".concat(n8,":not([").concat(V2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(V2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var r=[];try{r=J2(a.querySelectorAll(i))}catch{}if(r.length>0)t("pending"),l("complete");else return Promise.resolve();var o=T3.begin("onTree"),s=r.reduce(function(f,d){try{var h=N8(d);h&&f.push(h)}catch(p){t8||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,d){Promise.all(s).then(function(h){x8(h,function(){t("active"),t("complete"),l("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(h){o(),d(h)})})}function Ya(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N8(a).then(function(e){e&&x8([e],c)})}function Qa(a){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(c||{}).icon?c:g3(c||{}),l=e.mask;return l&&(l=(l||{}).icon?l:g3(l||{})),a(t,u(u({},e),{},{mask:l}))}}var Ka=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.transform,l=t===void 0?v2:t,n=e.symbol,i=n===void 0?!1:n,r=e.mask,o=r===void 0?null:r,s=e.maskId,f=s===void 0?null:s,d=e.classes,h=d===void 0?[]:d,p=e.attributes,y=p===void 0?{}:p,b=e.styles,B=b===void 0?{}:b;if(c){var I=c.prefix,G=c.iconName,O=c.icon;return z4(u({type:"icon"},c),function(){return O2("beforeDOMElementCreation",{iconDefinition:c,params:e}),F3({icons:{main:z3(O),mask:o?z3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:G,transform:u(u({},v2),l),symbol:i,maskId:f,extra:{attributes:y,styles:B,classes:h}})})}},Za={mixout:function(){return{icon:Qa(Ka)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=z6,e.nodeCallback=Ya,e}}},provides:function(c){c.i2svg=function(e){var t=e.node,l=t===void 0?F:t,n=e.callback,i=n===void 0?function(){}:n;return z6(l,i)},c.generateSvgReplacementMutation=function(e,t){var l=t.iconName,n=t.prefix,i=t.transform,r=t.symbol,o=t.mask,s=t.maskId,f=t.extra;return new Promise(function(d,h){Promise.all([M3(l,n),o.iconName?M3(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var y=p4(p,2),b=y[0],B=y[1];d([e,F3({icons:{main:b,mask:B},prefix:n,iconName:l,transform:i,symbol:r,maskId:s,extra:f,watchable:!0})])}).catch(h)})},c.generateAbstractIcon=function(e){var t=e.children,l=e.attributes,n=e.main,i=e.transform,r=e.styles,o=h4(r);o.length>0&&(l.style=o);var s;return A3(i)&&(s=D2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),t.push(s||n.icon),{children:t,attributes:l}}}},Ja={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.classes,n=l===void 0?[]:l;return z4({type:"layer"},function(){O2("beforeDOMElementCreation",{assembler:e,params:t});var i=[];return e(function(r){Array.isArray(r)?r.map(function(o){i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(m2(n)).join(" ")},children:i}]})}}}},ec={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.title,n=l===void 0?null:l,i=t.classes,r=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,f=t.styles,d=f===void 0?{}:f;return z4({type:"counter",content:e},function(){return O2("beforeDOMElementCreation",{content:e,params:t}),Fa({content:e.toString(),title:n,extra:{attributes:s,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(m2(r))}})})}}}},ac={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.transform,n=l===void 0?v2:l,i=t.classes,r=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,f=t.styles,d=f===void 0?{}:f;return z4({type:"text",content:e},function(){return O2("beforeDOMElementCreation",{content:e,params:t}),u6({content:e,transform:u(u({},v2),n),extra:{attributes:s,styles:d,classes:["".concat(z.cssPrefix,"-layers-text")].concat(m2(r))}})})}}},provides:function(c){c.generateLayersText=function(e,t){var l=t.transform,n=t.extra,i=null,r=null;if(D6){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,r=s.height/o}return Promise.resolve([e,u6({content:e.innerHTML,width:i,height:r,transform:l,extra:n,watchable:!0})])}}},w8=new RegExp('"',"ug"),M6=[1105920,1112319],b6=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),P5),U7),W5),C3=Object.keys(b6).reduce(function(a,c){return a[c.toLowerCase()]=b6[c],a},{}),cc=Object.keys(C3).reduce(function(a,c){var e=C3[c];return a[c]=e[900]||m2(Object.entries(e))[0][1],a},{});function tc(a){var c=a.replace(w8,"");return d8(m2(c)[0]||"")}function lc(a){var c=a.getPropertyValue("font-feature-settings").includes("ss01"),e=a.getPropertyValue("content"),t=e.replace(w8,""),l=t.codePointAt(0),n=l>=M6[0]&&l<=M6[1],i=t.length===2?t[0]===t[1]:!1;return n||i||c}function nc(a,c){var e=a.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(c),l=isNaN(t)?"normal":t;return(C3[e]||{})[l]||cc[e]}function L6(a,c){var e="".concat($7).concat(c.replace(":","-"));return new Promise(function(t,l){if(a.getAttribute(e)!==null)return t();var n=J2(a.children),i=n.filter(function(a1){return a1.getAttribute(d3)===c})[0],r=k2.getComputedStyle(a,c),o=r.getPropertyValue("font-family"),s=o.match(X7),f=r.getPropertyValue("font-weight"),d=r.getPropertyValue("content");if(i&&!s)return a.removeChild(i),t();if(s&&d!=="none"&&d!==""){var h=r.getPropertyValue("content"),p=nc(o,f),y=tc(h),b=s[0].startsWith("FontAwesome"),B=lc(r),I=_3(p,y),G=I;if(b){var O=ha(y);O.iconName&&O.prefix&&(I=O.iconName,p=O.prefix)}if(I&&!B&&(!i||i.getAttribute(S3)!==p||i.getAttribute(N3)!==G)){a.setAttribute(e,G),i&&a.removeChild(i);var x2=Ga(),r2=x2.extra;r2.attributes[d3]=c,M3(I,p).then(function(a1){var be=F3(u(u({},x2),{},{icons:{main:a1,mask:b8()},prefix:p,iconName:G,extra:r2,watchable:!0})),k4=F.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(k4,a.firstChild):a.appendChild(k4),k4.outerHTML=be.map(function(Le){return C1(Le)}).join(`
`),a.removeAttribute(e),t()}).catch(l)}else t()}else t()})}function ic(a){return Promise.all([L6(a,"::before"),L6(a,"::after")])}function rc(a){return a.parentNode!==document.head&&!~j7.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(d3)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var oc=function(c){return!!c&&c8.some(function(e){return c.includes(e)})},sc=function(c){if(!c)return[];var e=new Set,t=c.split(/,(?![^()]*\))/).map(function(o){return o.trim()});t=t.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(s){return s.trim()})});var l=o4(t),n;try{for(l.s();!(n=l.n()).done;){var i=n.value;if(oc(i)){var r=c8.reduce(function(o,s){return o.replace(s,"")},i);r!==""&&r!=="*"&&e.add(r)}}}catch(o){l.e(o)}finally{l.f()}return e};function C6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(y2){var e;if(c)e=a;else if(z.searchPseudoElementsFullScan)e=a.querySelectorAll("*");else{var t=new Set,l=o4(document.styleSheets),n;try{for(l.s();!(n=l.n()).done;){var i=n.value;try{var r=o4(i.cssRules),o;try{for(r.s();!(o=r.n()).done;){var s=o.value,f=sc(s.selectorText),d=o4(f),h;try{for(d.s();!(h=d.n()).done;){var p=h.value;t.add(p)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){r.e(b)}finally{r.f()}}catch(b){z.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){l.e(b)}finally{l.f()}if(!t.size)return;var y=Array.from(t).join(", ");try{e=a.querySelectorAll(y)}catch{}}return new Promise(function(b,B){var I=J2(e).filter(rc).map(ic),G=T3.begin("searchPseudoElements");S8(),Promise.all(I).then(function(){G(),L3(),b()}).catch(function(){G(),L3(),B()})})}}var fc={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=C6,e}}},provides:function(c){c.pseudoElements2svg=function(e){var t=e.node,l=t===void 0?F:t;z.searchPseudoElements&&C6(l)}}},y6=!1,dc={mixout:function(){return{dom:{unwatch:function(){S8(),y6=!0}}}},hooks:function(){return{bootstrap:function(){v6(v3("mutationObserverCallbacks",{}))},noAuto:function(){Ua()},watch:function(e){var t=e.observeMutationsRoot;y6?L3():v6(v3("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},x6=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(t,l){var n=l.toLowerCase().split("-"),i=n[0],r=n.slice(1).join("-");if(i&&r==="h")return t.flipX=!0,t;if(i&&r==="v")return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(i){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r;break}return t},e)},uc={mixout:function(){return{parse:{transform:function(e){return x6(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var l=t.getAttribute("data-fa-transform");return l&&(e.transform=x6(l)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var t=e.main,l=e.transform,n=e.containerWidth,i=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(l.x*32,", ").concat(l.y*32,") "),s="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),d={transform:"".concat(o," ").concat(s," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:r,inner:d,path:h};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:u(u({},t.icon.attributes),p.path)}]}]}}}},r3={x:0,y:0,width:"100%",height:"100%"};function S6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function mc(a){return a.tag==="g"?a.children:[a]}var pc={hooks:function(){return{parseNodeAttributes:function(e,t){var l=t.getAttribute("data-fa-mask"),n=l?g4(l.split(" ").map(function(i){return i.trim()})):b8();return n.prefix||(n.prefix=A2()),e.mask=n,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var t=e.children,l=e.attributes,n=e.main,i=e.mask,r=e.maskId,o=e.transform,s=n.width,f=n.icon,d=i.width,h=i.icon,p=la({transform:o,containerWidth:d,iconWidth:s}),y={tag:"rect",attributes:u(u({},r3),{},{fill:"white"})},b=f.children?{children:f.children.map(S6)}:{},B={tag:"g",attributes:u({},p.inner),children:[S6(u({tag:f.tag,attributes:u(u({},f.attributes),p.path)},b))]},I={tag:"g",attributes:u({},p.outer),children:[B]},G="mask-".concat(r||n6()),O="clip-".concat(r||n6()),x2={tag:"mask",attributes:u(u({},r3),{},{id:G,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,I]},r2={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:mc(h)},x2]};return t.push(r2,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(G,")")},r3)}),{children:t,attributes:l}}}},hc={provides:function(c){var e=!1;k2.matchMedia&&(e=k2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var t=[],l={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:u(u({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},n),{},{attributeName:"opacity"}),r={tag:"circle",attributes:u(u({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||r.children.push({tag:"animate",attributes:u(u({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(r),t.push({tag:"path",attributes:u(u({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:u(u({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},vc={hooks:function(){return{parseNodeAttributes:function(e,t){var l=t.getAttribute("data-fa-symbol"),n=l===null?!1:l===""?!0:l;return e.symbol=n,e}}}},gc=[ra,Za,Ja,ec,ac,fc,dc,uc,pc,hc,vc];xa(gc,{mixoutsTo:i2});var Dl=i2.noAuto,k8=i2.config,_l=i2.library,A8=i2.dom,D8=i2.parse,Fl=i2.findIconDefinition,Tl=i2.toHtml,_8=i2.icon,El=i2.layer,zc=i2.text,Mc=i2.counter;var bc=["*"],Lc=(()=>{class a{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(e){k8.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(t){return new(t||a)};static \u0275prov=T({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Cc=(()=>{class a{definitions={};addIcons(...e){for(let t of e){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let l of t.icon[2])typeof l=="string"&&(this.definitions[t.prefix][l]=t)}}addIconPacks(...e){for(let t of e){let l=Object.keys(t).map(n=>t[n]);this.addIcons(...l)}}getIconDefinition(e,t){return e in this.definitions&&t in this.definitions[e]?this.definitions[e][t]:null}static \u0275fac=function(t){return new(t||a)};static \u0275prov=T({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),yc=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},xc=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},T8=a=>a!=null&&(a===90||a===180||a===270||a==="90"||a==="180"||a==="270"),Sc=a=>{let c=T8(a.rotate),e={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:c,"fa-rotate-by":a.rotate!=null&&!c,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(e).map(t=>e[t]?t:null).filter(t=>t!=null)},P3=new WeakSet,F8="fa-auto-css";function Nc(a,c){if(!c.autoAddCss||P3.has(a))return;if(a.getElementById(F8)!=null){c.autoAddCss=!1,P3.add(a);return}let e=a.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",F8),e.innerHTML=A8.css();let t=a.head.childNodes,l=null;for(let n=t.length-1;n>-1;n--){let i=t[n],r=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(l=i)}a.head.insertBefore(e,l),c.autoAddCss=!1,P3.add(a)}var wc=a=>a.prefix!==void 0&&a.iconName!==void 0,kc=(a,c)=>wc(a)?a:Array.isArray(a)&&a.length===2?{prefix:a[0],iconName:a[1]}:{prefix:c,iconName:a},Ac=(()=>{class a{stackItemSize=m("1x");size=m();_effect=X(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(t){return new(t||a)};static \u0275dir=x({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return a})(),Dc=(()=>{class a{size=m();classes=S(()=>{let e=this.size(),t=e?{[`fa-${e}`]:!0}:{};return Z(g({},t),{"fa-stack":!0})});static \u0275fac=function(t){return new(t||a)};static \u0275cmp=$({type:a,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(t,l){t&2&&_(l.classes())},inputs:{size:[1,"size"]},ngContentSelectors:bc,decls:1,vars:0,template:function(t,l){t&1&&(l2(),a2(0))},encapsulation:2,changeDetection:0})}return a})(),Wl=(()=>{class a{icon=c2();title=c2();animation=c2();mask=c2();flip=c2();size=c2();pull=c2();border=c2();inverse=c2();symbol=c2();rotate=c2();fixedWidth=c2();transform=c2();a11yRole=c2();renderedIconHTML=S(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return xc(),"";let t=this.findIconDefinition(e);if(!t)return"";let l=this.buildParams();Nc(this.document,this.config);let n=_8(t,l);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=v(W2);sanitizer=v(a0);config=v(Lc);iconLibrary=v(Cc);stackItem=v(Ac,{optional:!0});stack=v(Dc,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(e){let t=kc(e,this.config.defaultPrefix);if("icon"in t)return t;let l=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return l??(yc(t),null)}buildParams(){let e=this.fixedWidth(),t={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e=="boolean"?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},l=this.transform(),n=typeof l=="string"?D8.transform(l):l,i=this.mask(),r=i!=null?this.findIconDefinition(i):null,o={},s=this.a11yRole();s!=null&&(o.role=s);let f={};return t.rotate!=null&&!T8(t.rotate)&&(f["--fa-rotate-angle"]=`${t.rotate}`),{title:this.title(),transform:n,classes:Sc(t),mask:r??void 0,symbol:this.symbol(),attributes:o,styles:f}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=$({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,l){t&2&&(T1("innerHTML",l.renderedIconHTML(),q3),e2("title",l.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(t,l){},encapsulation:2,changeDetection:0})}return a})();var jl=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({})}return a})();var _c={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]};var Xl=_c;var Yl={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]};var Ql={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M345 273c9.4-9.4 9.4-24.6 0-33.9L201 95c-6.9-6.9-17.2-8.9-26.2-5.2S160 102.3 160 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L345 273zm7 143c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0z"]};var Fc={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Kl=Fc;var Zl={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]};var Jl={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var e9={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]};function _2(...a){if(a){let c=[];for(let e=0;e<a.length;e++){let t=a[e];if(!t)continue;let l=typeof t;if(l==="string"||l==="number")c.push(t);else if(l==="object"){let n=Array.isArray(t)?[_2(...t)]:Object.entries(t).map(([i,r])=>r?i:void 0);c=n.length?c.concat(n.filter(i=>!!i)):c}}return c.join(" ").trim()}}var Tc=Object.defineProperty,E8=Object.getOwnPropertySymbols,Ec=Object.prototype.hasOwnProperty,Pc=Object.prototype.propertyIsEnumerable,P8=(a,c,e)=>c in a?Tc(a,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[c]=e,B8=(a,c)=>{for(var e in c||(c={}))Ec.call(c,e)&&P8(a,e,c[e]);if(E8)for(var e of E8(c))Pc.call(c,e)&&P8(a,e,c[e]);return a};function I8(...a){if(a){let c=[];for(let e=0;e<a.length;e++){let t=a[e];if(!t)continue;let l=typeof t;if(l==="string"||l==="number")c.push(t);else if(l==="object"){let n=Array.isArray(t)?[I8(...t)]:Object.entries(t).map(([i,r])=>r?i:void 0);c=n.length?c.concat(n.filter(i=>!!i)):c}}return c.join(" ").trim()}}function Bc(a){return typeof a=="function"&&"call"in a&&"apply"in a}function Ic({skipUndefined:a=!1},...c){return c?.reduce((e,t={})=>{for(let l in t){let n=t[l];if(!(a&&n===void 0))if(l==="style")e.style=B8(B8({},e.style),t.style);else if(l==="class"||l==="className")e[l]=I8(e[l],t[l]);else if(Bc(n)){let i=e[l];e[l]=i?(...r)=>{i(...r),n(...r)}:n}else e[l]=n}return e},{})}function B3(...a){return Ic({skipUndefined:!1},...a)}var M4={};function y1(a="pui_id_"){return Object.hasOwn(M4,a)||(M4[a]=0),M4[a]++,`${a}${M4[a]}`}var V8=(()=>{class a extends U{name="common";static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),J=new E("PARENT_INSTANCE"),W=(()=>{class a{document=v(W2);platformId=v(k1);el=v(M2);injector=v(A4);cd=v(R1);renderer=v(F2);config=v(M0);$parentInstance=v(J,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=v(V8);baseStyle=v(U);scopedStyleEl;parent=this.$params.parent;cn=_2;_themeScopedListener;themeChangeListenerMap=new Map;dt=m();unstyled=m();pt=m();ptOptions=m();$attrSelector=y1("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=q(void 0);directiveUnstyled=q(void 0);$unstyled=S(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=S(()=>$1(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>$1(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||$1(e,this.$params))}get $style(){return g(g({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){X(e=>{this.document&&!P4(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),X(e=>{this.document&&!P4(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...t){return t0(e)?e(...t):B3(...t)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,t="",l={}){return n0(e,t,l)}_hook(e,...t){if(!this.$hostName){let l=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),n=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);l?.(...t),n?.(...t)}}_load(){G2.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),G2.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);P2(e)&&this.baseStyle.load(e,g({name:"global"},this.$styleOptions))}_loadCoreStyles(){!G2.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),G2.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!B2.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:l,style:n}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,g({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(t?.css,g({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(l?.css,g({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(g({name:"global-style"},this.$styleOptions),n),B2.setLoadedStyleName("common")}if(!B2.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:t}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,g({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(g({name:`${this.$style?.name}-style`},this.$styleOptions),t),B2.setLoadedStyleName(this.$style?.name)}if(!B2.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,g({name:"layer-order",first:!0},this.$styleOptions)),B2.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:t}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},l=this.$style?.load(t,g({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=l?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,t=()=>{}){this._offThemeChangeListener(e),G2.clearLoadedStyleNames();let l=t.bind(this);this.themeChangeListenerMap.set(e,l),$4.on("theme:change",l)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&($4.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},t="",l={},n=!0){let i=/./g.test(t)&&!!l[t.split(".")[0]],{mergeSections:r=!0,mergeProps:o=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},s=n?i?this._useGlobalPT(this._getPTClassValue,t,l):this._useDefaultPT(this._getPTClassValue,t,l):void 0,f=i?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,t,Z(g({},l),{global:s||{}})),d=this._getPTDatasets(t);return r||!r&&f?o?this._mergeProps(o,s,f,d):g(g(g({},s),f),d):g(g({},f),d)}_getPTDatasets(e=""){let t="data-pc-",l=e==="root"&&P2(this.$pt()?.["data-pc-section"]);return e!=="transition"&&Z(g({},e==="root"&&Z(g({[`${t}name`]:j2(l?this.$pt()?.["data-pc-section"]:this.$name)},l&&{[`${t}extend`]:j2(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${t}section`]:j2(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,t,l){let n=this._getOptionValue(e,t,l);return W1(n)||i0(n)?{class:n}:n}_getPT(e,t="",l){let n=(i,r=!1)=>{let o=l?l(i):i,s=j2(t),f=j2(this.$hostName||this.$name);return(r?s!==f?o?.[s]:void 0:o?.[s])??o};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:n(e.originalValue),value:n(e.value)}:n(e,!0)}_usePT(e,t,l,n){let i=r=>t?.call(this,r,l,n);if(e?.hasOwnProperty("_usept")){let{mergeSections:r=!0,mergeProps:o=!1}=e._usept||this.config?.ptOptions()||{},s=i(e.originalValue),f=i(e.value);return s===void 0&&f===void 0?void 0:W1(f)?f:W1(s)?s:r||!r&&f?o?this._mergeProps(o,s,f):g(g({},s),f):f}return i(e)}_useGlobalPT(e,t,l){return this._usePT(this.$globalPT,e,t,l)}_useDefaultPT(e,t,l){return this._usePT(this.$defaultPT,e,t,l)}ptm(e="",t={}){return this._getPTValue(this.$pt(),e,g(g({},this.$params),t))}ptms(e,t={}){return e.reduce((l,n)=>(l=B3(l,this.ptm(n,t))||{},l),{})}ptmo(e={},t="",l={}){return this._getPTValue(e,t,g({instance:this},l),!1)}cx(e,t={}){return this.$unstyled()?void 0:_2(this._getOptionValue(this.$style.classes,e,g(g({},this.$params),t)))}sx(e="",t=!0,l={}){if(t){let n=this._getOptionValue(this.$style.inlineStyles,e,g(g({},this.$params),l)),i=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,g(g({},this.$params),l));return g(g({},i),n)}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=x({type:a,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[A([V8,U]),t1]})}return a})();var N=(()=>{class a{el;renderer;pBind=m(void 0);_attrs=q(void 0);attrs=S(()=>this._attrs()||this.pBind());styles=S(()=>this.attrs()?.style);classes=S(()=>_2(this.attrs()?.class));listeners=[];constructor(e,t){this.el=e,this.renderer=t,X(()=>{let r=this.attrs()||{},{style:l,class:n}=r,i=U3(r,["style","class"]);for(let[o,s]of Object.entries(i))if(o.startsWith("on")&&typeof s=="function"){let f=o.slice(2).toLowerCase();if(!this.listeners.some(d=>d.eventName===f)){let d=this.renderer.listen(this.el.nativeElement,f,s);this.listeners.push({eventName:f,unlisten:d})}}else s==null?this.renderer.removeAttribute(this.el.nativeElement,o):(this.renderer.setAttribute(this.el.nativeElement,o,s.toString()),o in this.el.nativeElement&&(this.el.nativeElement[o]=s))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){l0(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(t){return new(t||a)(w(M2),w(F2))};static \u0275dir=x({type:a,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(t,l){t&2&&(B1(l.styles()),_(l.classes()))},inputs:{pBind:[1,"pBind"]}})}return a})(),e1=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({})}return a})();var Vc=["*"],Oc={root:"p-fluid"},O8=(()=>{class a extends U{name="fluid";classes=Oc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})();var R8=new E("FLUID_INSTANCE"),H2=(()=>{class a extends W{componentName="Fluid";$pcFluid=v(R8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=v(O8);static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=$({type:a,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(t,l){t&2&&_(l.cx("root"))},features:[A([O8,{provide:R8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),C],ngContentSelectors:Vc,decls:1,vars:0,template:function(t,l){t&1&&(l2(),a2(0))},dependencies:[n2],encapsulation:2,changeDetection:0})}return a})(),D9=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[H2]})}return a})();var I3=(()=>{class a{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let l=t.trim().split(" ");for(let n=0;n<l.length;n++)e.classList.add(l[n])}else{let l=t.split(" ");for(let n=0;n<l.length;n++)e.className+=" "+l[n]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(l=>l.split(" ").forEach(n=>this.removeClass(e,n)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,l=0;for(var n=0;n<t.length;n++){if(t[n]==e)return l;t[n].nodeType==1&&l++}return-1}static indexWithinGroup(e,t){let l=e.parentNode?e.parentNode.childNodes:[],n=0;for(var i=0;i<l.length;i++){if(l[i]==e)return n;l[i].attributes&&l[i].attributes[t]&&l[i].nodeType==1&&n++}return-1}static appendOverlay(e,t,l="self"){l!=="self"&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,l="self",n=!0){e&&t&&(n&&(e.style.minWidth=`${a.getOuterWidth(t)}px`),l==="self"?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,l=!0){let n=O=>{if(O)return getComputedStyle(O).getPropertyValue("position")==="relative"?O:n(O.parentElement)},i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,o=t.getBoundingClientRect(),s=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),d=this.getViewport(),p=n(e)?.getBoundingClientRect()||{top:-1*s,left:-1*f},y,b,B="top";o.top+r+i.height>d.height?(y=o.top-p.top-i.height,B="bottom",o.top+y<0&&(y=-1*o.top)):(y=r+o.top-p.top,B="top");let I=o.left+i.width-d.width,G=o.left-p.left;if(i.width>d.width?b=(o.left-p.left)*-1:I>0?b=G-I:b=o.left-p.left,e.style.top=y+"px",e.style.left=b+"px",e.style.transformOrigin=B,l){let O=s0(/-anchor-gutter$/)?.value;e.style.marginTop=B==="bottom"?`calc(${O??"2px"} * -1)`:O??""}}static absolutePosition(e,t,l=!0){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=n.height,r=n.width,o=t.offsetHeight,s=t.offsetWidth,f=t.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),y,b;f.top+o+i>p.height?(y=f.top+d-i,e.style.transformOrigin="bottom",y<0&&(y=d)):(y=o+f.top+d,e.style.transformOrigin="top"),f.left+r>p.width?b=Math.max(0,f.left+h+s-r):b=f.left+h,e.style.top=y+"px",e.style.left=b+"px",l&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let l=this.getParents(e),n=/(auto|scroll)/,i=r=>{let o=window.getComputedStyle(r,null);return n.test(o.getPropertyValue("overflow"))||n.test(o.getPropertyValue("overflowX"))||n.test(o.getPropertyValue("overflowY"))};for(let r of l){let o=r.nodeType===1&&r.dataset.scrollselectors;if(o){let s=o.split(",");for(let f of s){let d=this.findSingle(r,f);d&&i(d)&&t.push(d)}}r.nodeType!==9&&i(r)&&t.push(r)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let l=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=l?parseFloat(l):0,i=getComputedStyle(e).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,o=e.getBoundingClientRect(),f=t.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-n-r,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(t);f<0?e.scrollTop=d+f:f+p>h&&(e.scrollTop=d+f-h+p)}static fadeIn(e,t){e.style.opacity=0;let l=+new Date,n=0,i=function(){n=+e.style.opacity.replace(",",".")+(new Date().getTime()-l)/t,e.style.opacity=n,l=+new Date,+n<1&&(window.requestAnimationFrame?window.requestAnimationFrame(i):setTimeout(i,16))};i()}static fadeOut(e,t){var l=1,n=50,i=t,r=n/i;let o=setInterval(()=>{l=l-r,l<=0&&(l=0,clearInterval(o)),e.style.opacity=l},n)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var l=Element.prototype,n=l.matches||l.webkitMatchesSelector||l.mozMatchesSelector||l.msMatchesSelector||function(i){return[].indexOf.call(document.querySelectorAll(i),this)!==-1};return n.call(e,t)}static getOuterWidth(e,t){let l=e.offsetWidth;if(t){let n=getComputedStyle(e);l+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return l}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,l=getComputedStyle(e);return t+=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight),t}static width(e){let t=e.offsetWidth,l=getComputedStyle(e);return t-=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,l=getComputedStyle(e);return t+=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),t}static getOuterHeight(e,t){let l=e.offsetHeight;if(t){let n=getComputedStyle(e);l+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return l}static getHeight(e){let t=e.offsetHeight,l=getComputedStyle(e);return t-=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)+parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,l=getComputedStyle(e);return t-=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)+parseFloat(l.borderLeftWidth)+parseFloat(l.borderRightWidth),t}static getViewport(){let e=window,t=document,l=t.documentElement,n=t.getElementsByTagName("body")[0],i=e.innerWidth||l.clientWidth||n.clientWidth,r=e.innerHeight||l.clientHeight||n.clientHeight;return{width:i,height:r}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let l=e.parentNode;if(!l)throw"Can't replace element";return l.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var l=e.indexOf("Trident/");if(l>0){var n=e.indexOf("rv:");return!0}var i=e.indexOf("Edge/");return i>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw"Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let l=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=l,l}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,l){e[t].apply(e,l)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=""){let l=this.find(e,this.getFocusableSelectorString(t)),n=[];for(let i of l){let r=getComputedStyle(i);this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden"&&n.push(i)}return n}static getFocusableElement(e,t=""){let l=this.findSingle(e,this.getFocusableSelectorString(t));if(l){let n=getComputedStyle(l);if(this.isVisible(l)&&n.display!="none"&&n.visibility!="hidden")return l}return null}static getFirstFocusableElement(e,t=""){let l=this.getFocusableElements(e,t);return l.length>0?l[0]:null}static getLastFocusableElement(e,t){let l=this.getFocusableElements(e,t);return l.length>0?l[l.length-1]:null}static getNextFocusableElement(e,t=!1){let l=a.getFocusableElements(e),n=0;if(l&&l.length>0){let i=l.indexOf(l[0].ownerDocument.activeElement);t?i==-1||i===0?n=l.length-1:n=i-1:i!=-1&&i!==l.length-1&&(n=i+1)}return l[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return t?.nextElementSibling;case"@prev":return t?.previousElementSibling;case"@parent":return t?.parentElement;case"@grandparent":return t?.parentElement?.parentElement;default:let l=typeof e;if(l==="string")return document.querySelector(e);if(l==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let i=(r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e;return i&&i.nodeType===9||this.isExist(i)?i:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let l=e.getAttribute(t);return isNaN(l)?l==="true"||l==="false"?l==="true":l:+l}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,t={},...l){if(e){let n=document.createElement(e);return this.setAttributes(n,t),n.append(...l),n}}static setAttribute(e,t="",l){this.isElement(e)&&l!==null&&l!==void 0&&e.setAttribute(t,l)}static setAttributes(e,t={}){if(this.isElement(e)){let l=(n,i)=>{let r=e?.$attrs?.[n]?[e?.$attrs?.[n]]:[];return[i].flat().reduce((o,s)=>{if(s!=null){let f=typeof s;if(f==="string"||f==="number")o.push(s);else if(f==="object"){let d=Array.isArray(s)?l(n,s):Object.entries(s).map(([h,p])=>n==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);o=d.length?o.concat(d.filter(h=>!!h)):o}}return o},r)};Object.entries(t).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),i):n==="pBind"?this.setAttributes(e,i):(i=n==="class"?[...new Set(l("class",i))].join(" ").trim():n==="style"?l("style",i).join(";").trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=i),e.setAttribute(n,i))}})}}static isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}}return a})();function B9(){r0({variableName:W4("scrollbar.width").name})}function I9(){o0({variableName:W4("scrollbar.width").name})}var b4=class{element;listener;scrollableParents;constructor(c,e=()=>{}){this.element=c,this.listener=e}bindScrollListener(){this.scrollableParents=I3.getScrollableParents(this.element);for(let c=0;c<this.scrollableParents.length;c++)this.scrollableParents[c].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let c=0;c<this.scrollableParents.length;c++)this.scrollableParents[c].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var H8=(()=>{class a extends W{autofocus=!1;focused=!1;platformId=v(k1);document=v(W2);host=v(M2);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){E2(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=I3.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[C]})}return a})();var U8=`
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
`;var Rc=`
    ${U8}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Hc={root:({instance:a})=>{let c=typeof a.value=="function"?a.value():a.value,e=typeof a.size=="function"?a.size():a.size,t=typeof a.badgeSize=="function"?a.badgeSize():a.badgeSize,l=typeof a.severity=="function"?a.severity():a.severity;return["p-badge p-component",{"p-badge-circle":P2(c)&&String(c).length===1,"p-badge-dot":c0(c),"p-badge-sm":e==="small"||t==="small","p-badge-lg":e==="large"||t==="large","p-badge-xl":e==="xlarge"||t==="xlarge","p-badge-info":l==="info","p-badge-success":l==="success","p-badge-warn":l==="warn","p-badge-danger":l==="danger","p-badge-secondary":l==="secondary","p-badge-contrast":l==="contrast"}]}},$8=(()=>{class a extends U{name="badge";style=Rc;classes=Hc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})();var W8=new E("BADGE_INSTANCE");var V3=(()=>{class a extends W{componentName="Badge";$pcBadge=v(W8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=m();badgeSize=m();size=m();severity=m();value=m();badgeDisabled=m(!1,{transform:D});_componentStyle=v($8);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=$({type:a,selectors:[["p-badge"]],hostVars:5,hostBindings:function(t,l){t&2&&(e2("data-p",l.dataP),_(l.cn(l.cx("root"),l.styleClass())),K3("display",l.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[A([$8,{provide:W8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),C],decls:1,vars:1,template:function(t,l){t&1&&I1(0),t&2&&V1(l.value())},dependencies:[n2,o2,e1],encapsulation:2,changeDetection:0})}return a})(),j8=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[V3,o2,o2]})}return a})();var $c=["*"],Wc=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,G8=(()=>{class a extends U{name="baseicon";css=Wc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var L4=(()=>{class a extends W{spin=!1;_componentStyle=v(G8);getClassNames(){return _2("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=$({type:a,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(t,l){t&2&&_(l.getClassNames())},inputs:{spin:[2,"spin","spin",D]},features:[A([G8]),C],ngContentSelectors:$c,decls:1,vars:0,template:function(t,l){t&1&&(l2(),a2(0))},encapsulation:2,changeDetection:0})}return a})();var jc=["data-p-icon","spinner"],q8=(()=>{class a extends L4{pathId;onInit(){this.pathId="url(#"+y1()+")"}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=$({type:a,selectors:[["","data-p-icon","spinner"]],features:[C],attrs:jc,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,l){t&1&&($2(),D4(0,"g"),i1(1,"path",0),_4(),D4(2,"defs")(3,"clipPath",1),i1(4,"rect",2),_4()()),t&2&&(e2("clip-path",l.pathId),j(3),T1("id",l.pathId))},encapsulation:2})}return a})();var Gc=["data-p-icon","times"],Nn=(()=>{class a extends L4{static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=$({type:a,selectors:[["","data-p-icon","times"]],features:[C],attrs:Gc,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(t,l){t&1&&($2(),i1(0,"path",0))},encapsulation:2})}return a})();var X8=`
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
`;var qc=`
    ${X8}

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
`,Xc={root:"p-ink"},Y8=(()=>{class a extends U{name="ripple";style=qc;classes=Xc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})();var Q8=(()=>{class a extends W{componentName="Ripple";zone=v(w1);_componentStyle=v(Y8);animationListener;mouseDownListener;timeout;constructor(){super(),X(()=>{E2(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(!this.$unstyled()&&S2(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"),!V4(t)&&!O4(t)){let r=Math.max(j1(this.el.nativeElement),p0(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let l=m0(this.el.nativeElement),n=e.pageX-l.left+this.document.body.scrollTop-O4(t)/2,i=e.pageY-l.top+this.document.body.scrollLeft-V4(t)/2;this.renderer.setStyle(t,"top",i+"px"),this.renderer.setStyle(t,"left",n+"px"),!this.$unstyled()&&o1(t,"p-ink-active"),t.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&(!this.$unstyled()&&S2(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&S2(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&S2(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,h0(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=x({type:a,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[A([Y8]),C]})}return a})();var K8=`
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
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
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
`;var Qc=["content"],Kc=["loadingicon"],Zc=["icon"],Jc=["*"],ee=(a,c)=>({class:a,pt:c});function et(a,c){a&1&&r1(0)}function at(a,c){if(a&1&&n1(0,"span",7),a&2){let e=V(3);_(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),k("pBind",e.ptm("loadingIcon")),e2("aria-hidden",!0)}}function ct(a,c){if(a&1&&($2(),n1(0,"svg",8)),a&2){let e=V(3);_(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),k("pBind",e.ptm("loadingIcon"))("spin",!0),e2("aria-hidden",!0)}}function tt(a,c){if(a&1&&(_1(0),s2(1,at,1,4,"span",3)(2,ct,1,5,"svg",6),F1()),a&2){let e=V(2);j(),k("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),j(),k("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function lt(a,c){}function nt(a,c){if(a&1&&s2(0,lt,0,0,"ng-template",9),a&2){let e=V(2);k("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function it(a,c){if(a&1&&(_1(0),s2(1,tt,3,2,"ng-container",2)(2,nt,1,1,null,5),F1()),a&2){let e=V();j(),k("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),j(),k("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",F4(3,ee,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function rt(a,c){if(a&1&&n1(0,"span",7),a&2){let e=V(2);_(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),k("pBind",e.ptm("icon")),e2("data-p",e.dataIconP)}}function ot(a,c){}function st(a,c){if(a&1&&s2(0,ot,0,0,"ng-template",9),a&2){let e=V(2);k("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function ft(a,c){if(a&1&&(_1(0),s2(1,rt,1,4,"span",3)(2,st,1,1,null,5),F1()),a&2){let e=V();j(),k("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),j(),k("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",F4(3,ee,e.cx("icon"),e.ptm("icon")))}}function dt(a,c){if(a&1&&(T2(0,"span",7),I1(1),l1()),a&2){let e=V();_(e.cx("label")),k("pBind",e.ptm("label")),e2("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),j(),V1(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function ut(a,c){if(a&1&&n1(0,"p-badge",10),a&2){let e=V();k("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var mt={root:({instance:a})=>["p-button p-component",{"p-button-icon-only":a.hasIcon&&!a.label&&!a.buttonProps?.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-button-loading":a.loading||a.buttonProps?.loading,"p-button-link":a.link||a.buttonProps?.link,[`p-button-${a.severity||a.buttonProps?.severity}`]:a.severity||a.buttonProps?.severity,"p-button-raised":a.raised||a.buttonProps?.raised,"p-button-rounded":a.rounded||a.buttonProps?.rounded,"p-button-text":a.text||a.variant==="text"||a.buttonProps?.text||a.buttonProps?.variant==="text","p-button-outlined":a.outlined||a.variant==="outlined"||a.buttonProps?.outlined||a.buttonProps?.variant==="outlined","p-button-sm":a.size==="small"||a.buttonProps?.size==="small","p-button-lg":a.size==="large"||a.buttonProps?.size==="large","p-button-plain":a.plain||a.buttonProps?.plain,"p-button-fluid":a.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:a})=>["p-button-icon",{[`p-button-icon-${a.iconPos||a.buttonProps?.iconPos}`]:a.label||a.buttonProps?.label,"p-button-icon-left":(a.iconPos==="left"||a.buttonProps?.iconPos==="left")&&a.label||a.buttonProps?.label,"p-button-icon-right":(a.iconPos==="right"||a.buttonProps?.iconPos==="right")&&a.label||a.buttonProps?.label,"p-button-icon-top":(a.iconPos==="top"||a.buttonProps?.iconPos==="top")&&a.label||a.buttonProps?.label,"p-button-icon-bottom":(a.iconPos==="bottom"||a.buttonProps?.iconPos==="bottom")&&a.label||a.buttonProps?.label},a.icon,a.buttonProps?.icon],spinnerIcon:({instance:a})=>Object.entries(a.cx("icon")).filter(([,c])=>!!c).reduce((c,[e])=>c+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Z8=(()=>{class a extends U{name="button";style=K8;classes=mt;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})();var J8=new E("BUTTON_INSTANCE");var pt=(()=>{class a extends W{componentName="Button";hostName="";$pcButton=v(J8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});_componentStyle=v(Z8);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=m(void 0,{transform:D});onClick=new P;onFocus=new P;onBlur=new P;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=v(H2,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=$({type:a,selectors:[["p-button"]],contentQueries:function(t,l,n){if(t&1&&E1(n,Qc,5)(n,Kc,5)(n,Zc,5)(n,q1,4),t&2){let i;p2(i=h2())&&(l.contentTemplate=i.first),p2(i=h2())&&(l.loadingIconTemplate=i.first),p2(i=h2())&&(l.iconTemplate=i.first),p2(i=h2())&&(l.templates=i)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",D],raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],plain:[2,"plain","plain",D],outlined:[2,"outlined","outlined",D],link:[2,"link","link",D],tabindex:[2,"tabindex","tabindex",J3],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",D],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",D],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([Z8,{provide:J8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),C],ngContentSelectors:Jc,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(t,l){t&1&&(l2(),T2(0,"button",0),f2("click",function(i){return l.onClick.emit(i)})("focus",function(i){return l.onFocus.emit(i)})("blur",function(i){return l.onBlur.emit(i)}),a2(1),s2(2,et,1,0,"ng-container",1)(3,it,3,6,"ng-container",2)(4,ft,3,6,"ng-container",2)(5,dt,2,6,"span",3)(6,ut,1,4,"p-badge",4),l1()),t&2&&(_(l.cn(l.cx("root"),l.styleClass,l.buttonProps==null?null:l.buttonProps.styleClass)),k("ngStyle",l.style||(l.buttonProps==null?null:l.buttonProps.style))("disabled",l.disabled||l.loading||(l.buttonProps==null?null:l.buttonProps.disabled))("pAutoFocus",l.autofocus||(l.buttonProps==null?null:l.buttonProps.autofocus))("pBind",l.ptm("root")),e2("type",l.type||(l.buttonProps==null?null:l.buttonProps.type))("aria-label",l.ariaLabel||(l.buttonProps==null?null:l.buttonProps.ariaLabel))("tabindex",l.tabindex||(l.buttonProps==null?null:l.buttonProps.tabindex))("data-p",l.dataP)("data-p-disabled",l.disabled||l.loading||(l.buttonProps==null?null:l.buttonProps.disabled))("data-p-severity",l.severity||(l.buttonProps==null?null:l.buttonProps.severity)),j(2),k("ngTemplateOutlet",l.contentTemplate||l._contentTemplate),j(),k("ngIf",l.loading||(l.buttonProps==null?null:l.buttonProps.loading)),j(),k("ngIf",!(l.loading||l.buttonProps!=null&&l.buttonProps.loading)),j(),k("ngIf",!l.contentTemplate&&!l._contentTemplate&&(l.label||(l.buttonProps==null?null:l.buttonProps.label))),j(),k("ngIf",!l.contentTemplate&&!l._contentTemplate&&(l.badge||(l.buttonProps==null?null:l.buttonProps.badge))))},dependencies:[n2,H1,U1,e0,Q8,H8,q8,j8,V3,o2,N],encapsulation:2,changeDetection:0})}return a})(),di=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[n2,pt,o2,o2]})}return a})();var C4=(()=>{class a extends W{modelValue=q(void 0);$filled=S(()=>P2(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,features:[C]})}return a})();var ae=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
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
`;var ht=`
    ${ae}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,vt={root:({instance:a})=>["p-inputtext p-component",{"p-filled":a.$filled(),"p-inputtext-sm":a.pSize==="small","p-inputtext-lg":a.pSize==="large","p-invalid":a.invalid(),"p-variant-filled":a.$variant()==="filled","p-inputtext-fluid":a.hasFluid}]},ce=(()=>{class a extends U{name="inputtext";style=ht;classes=vt;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})();var te=new E("INPUTTEXT_INSTANCE"),Ti=(()=>{class a extends C4{componentName="InputText";hostName="";ptInputText=m();pInputTextPT=m();pInputTextUnstyled=m();bindDirectiveInstance=v(N,{self:!0});$pcInputText=v(te,{optional:!0,skipSelf:!0})??void 0;ngControl=v(b2,{optional:!0,self:!0});pcFluid=v(H2,{optional:!0,host:!0,skipSelf:!0});pSize;variant=m();fluid=m(void 0,{transform:D});invalid=m(void 0,{transform:D});$variant=S(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=v(ce);constructor(){super(),X(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),X(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=x({type:a,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(t,l){t&1&&f2("input",function(){return l.onInput()}),t&2&&(e2("data-p",l.dataP),_(l.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[A([ce,{provide:te,useExisting:a},{provide:J,useExisting:a}]),t2([N]),C]})}return a})(),Ei=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({})}return a})();var le=`
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
`;var gt=["*"],zt=`
    ${le}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,Mt={root:({instance:a})=>["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]},ne=(()=>{class a extends U{name="floatlabel";style=zt;classes=Mt;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})();var ie=new E("FLOATLABEL_INSTANCE"),Qi=(()=>{class a extends W{componentName="FloatLabel";_componentStyle=v(ne);$pcFloatLabel=v(ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=$({type:a,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(t,l){t&2&&_(l.cx("root"))},inputs:{variant:"variant"},features:[A([ne,{provide:ie,useExisting:a},{provide:J,useExisting:a}]),t2([N]),C],ngContentSelectors:gt,decls:1,vars:0,template:function(t,l){t&1&&(l2(),a2(0))},dependencies:[n2,o2,e1],encapsulation:2,changeDetection:0})}return a})();var re=(()=>{class a extends C4{required=m(void 0,{transform:D});invalid=m(void 0,{transform:D});disabled=m(void 0,{transform:D});name=m();_disabled=q(!1);$disabled=S(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,t){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[C]})}return a})();var ir=(()=>{class a extends re{pcFluid=v(H2,{optional:!0,host:!0,skipSelf:!0});fluid=m(void 0,{transform:D});variant=m();size=m();inputSize=m();pattern=m();min=m();max=m();step=m();minlength=m();maxlength=m();$variant=S(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[C]})}return a})();var bt=Object.defineProperty,oe=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,se=(a,c,e)=>c in a?bt(a,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[c]=e,fe=(a,c)=>{for(var e in c||(c={}))Lt.call(c,e)&&se(a,e,c[e]);if(oe)for(var e of oe(c))Ct.call(c,e)&&se(a,e,c[e]);return a},yt=(a,c,e)=>new Promise((t,l)=>{var n=o=>{try{r(e.next(o))}catch(s){l(s)}},i=o=>{try{r(e.throw(o))}catch(s){l(s)}},r=o=>o.done?t(o.value):Promise.resolve(o.value).then(n,i);r((e=e.apply(a,c)).next())}),y4="animation",x1="transition";function xt(a){return a?a.disabled||!!(a.safe&&z0()):!1}function St(a,c){return a?fe(fe({},a),Object.entries(c).reduce((e,[t,l])=>{var n;return e[t]=(n=a[t])!=null?n:l,e},{})):c}function Nt(a){let{name:c,enterClass:e,leaveClass:t}=a||{};return{enter:{from:e?.from||`${c}-enter-from`,to:e?.to||`${c}-enter-to`,active:e?.active||`${c}-enter-active`},leave:{from:t?.from||`${c}-leave-from`,to:t?.to||`${c}-leave-to`,active:t?.active||`${c}-leave-active`}}}function wt(a){return{enter:{onBefore:a?.onBeforeEnter,onStart:a?.onEnter,onAfter:a?.onAfterEnter,onCancelled:a?.onEnterCancelled},leave:{onBefore:a?.onBeforeLeave,onStart:a?.onLeave,onAfter:a?.onAfterLeave,onCancelled:a?.onLeaveCancelled}}}function kt(a,c){let e=window.getComputedStyle(a),t=p=>{let y=e[`${p}Delay`],b=e[`${p}Duration`];return[y.split(", ").map(R4),b.split(", ").map(R4)]},[l,n]=t(x1),[i,r]=t(y4),o=Math.max(...n.map((p,y)=>p+l[y])),s=Math.max(...r.map((p,y)=>p+i[y])),f,d=0,h=0;return c===x1?o>0&&(f=x1,d=o,h=n.length):c===y4?s>0&&(f=y4,d=s,h=r.length):(d=Math.max(o,s),f=d>0?o>s?x1:y4:void 0,h=f?f===x1?n.length:r.length:0),{type:f,timeout:d,count:h}}function x4(a,c){return typeof a=="number"?a:typeof a=="object"&&a[c]!=null?a[c]:null}function At(a,c=!0,e=!1){if(!c&&!e)return;let t=g0(a);c&&U4(a,"--pui-motion-height",t.height+"px"),e&&U4(a,"--pui-motion-width",t.width+"px")}var Dt={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function O3(a,c){if(!a)throw new Error("Element is required.");let e={},t=!1,l={},n=null,i={},r=f=>{if(Object.assign(e,St(f,Dt)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");i=wt(e),t=xt(e),l=Nt(e),n=null},o=f=>yt(null,null,function*(){n?.();let{onBefore:d,onStart:h,onAfter:p,onCancelled:y}=i[f]||{},b={element:a};if(t){d?.(b),h?.(b),p?.(b);return}let{from:B,active:I,to:G}=l[f]||{};return At(a,e.autoHeight,e.autoWidth),d?.(b),X1(a,B),X1(a,I),a.offsetHeight,H4(a,B),X1(a,G),h?.(b),new Promise(O=>{let x2=x4(e.duration,f),r2=()=>{H4(a,[G,I]),n=null},a1=()=>{r2(),p?.(b),O()};n=()=>{r2(),y?.(b),O()},Ft(a,e.type,x2,a1)})});r(c);let s={enter:()=>e.enter?o("enter"):Promise.resolve(),leave:()=>e.leave?o("leave"):Promise.resolve(),cancel:()=>{n?.(),n=null},update:(f,d)=>{if(!f)throw new Error("Element is required.");a=f,s.cancel(),r(d)}};return e.appear&&s.enter(),s}var _t=0;function Ft(a,c,e,t){let l=a._motionEndId=++_t,n=()=>{l===a._motionEndId&&t()};if(e!=null)return setTimeout(n,e);let{type:i,timeout:r,count:o}=kt(a,c);if(!i){t();return}let s=i+"end",f=0,d=()=>{a.removeEventListener(s,h,!0),n()},h=p=>{p.target===a&&++f>=o&&d()};a.addEventListener(s,h,{capture:!0,once:!0}),setTimeout(()=>{f<o&&d()},r+1)}var Tt=["*"];function Et(a,c){a&1&&a2(0)}var S4=new WeakMap;function S1(a,c){if(a)switch(S4.has(a)||S4.set(a,{display:a.style.display,visibility:a.style.visibility,maxHeight:a.style.maxHeight,overflow:a.style.overflow}),c){case"display":a.style.display="none";break;case"visibility":a.style.visibility="hidden",a.style.maxHeight="0",a.style.overflow="hidden";break}}function N4(a,c){if(!a)return;let e=S4.get(a)??a.style;switch(c){case"display":a.style.display=e?.display||"";break;case"visibility":a.style.visibility=e?.visibility||"",a.style.maxHeight=e?.maxHeight||"",a.style.overflow=e?.overflow||"";break}S4.delete(a)}var Pt=`
    .p-motion {
        display: block;
    }
`,Bt={root:"p-motion"},R3=(()=>{class a extends U{name="motion";style=Pt;classes=Bt;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})();var de=new E("MOTION_INSTANCE"),H3=(()=>{class a extends W{$pcMotion=v(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){let t=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(g(g({},this.ptms(["host","root"])),t))}_componentStyle=v(R3);visible=m(!1);mountOnEnter=m(!0);unmountOnLeave=m(!0);name=m(void 0);type=m(void 0);safe=m(void 0);disabled=m(!1);appear=m(!1);enter=m(!0);leave=m(!0);duration=m(void 0);hideStrategy=m("display");enterFromClass=m(void 0);enterToClass=m(void 0);enterActiveClass=m(void 0);leaveFromClass=m(void 0);leaveToClass=m(void 0);leaveActiveClass=m(void 0);options=m({});onBeforeEnter=Q();onEnter=Q();onAfterEnter=Q();onEnterCancelled=Q();onBeforeLeave=Q();onLeave=Q();onAfterLeave=Q();onLeaveCancelled=Q();motionOptions=S(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=q(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),X(()=>{let e=this.hideStrategy();this.isInitialMount?(S1(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(S1(this.$el,e),this.rendered.set(!0))}),X(()=>{this.motion||(this.motion=O3(this.$el,this.motionOptions()))}),T4(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),t=this.hideStrategy();this.visible()?(await G1(),N4(this.$el,t),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(await G1(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(S1(this.$el,t),this.unmountOnLeave()&&(await G1(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let t=d2(this.motionOptions),l=x4(t.duration,e);if(l==null||!this.$el)return;let n=this.$el,i=`${l}ms`;t.type==="transition"?n.style.transitionDuration=i:n.style.animationDuration=i}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,N4(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=$({type:a,selectors:[["p-motion"]],hostVars:2,hostBindings:function(t,l){t&2&&_(l.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[A([R3,{provide:de,useExisting:a},{provide:J,useExisting:a}]),t2([N]),C],ngContentSelectors:Tt,decls:1,vars:1,template:function(t,l){t&1&&(l2(),A1(0,Et,1,0)),t&2&&D1(l.rendered()?0:-1)},dependencies:[n2,e1],encapsulation:2})}return a})(),ue=new E("MOTION_DIRECTIVE_INSTANCE"),Cr=(()=>{class a extends W{$pcMotionDirective=v(ue,{optional:!0,skipSelf:!0})??void 0;visible=m(!1,{alias:"pMotion"});name=m(void 0,{alias:"pMotionName"});type=m(void 0,{alias:"pMotionType"});safe=m(void 0,{alias:"pMotionSafe"});disabled=m(!1,{alias:"pMotionDisabled"});appear=m(!1,{alias:"pMotionAppear"});enter=m(!0,{alias:"pMotionEnter"});leave=m(!0,{alias:"pMotionLeave"});duration=m(void 0,{alias:"pMotionDuration"});hideStrategy=m("display",{alias:"pMotionHideStrategy"});enterFromClass=m(void 0,{alias:"pMotionEnterFromClass"});enterToClass=m(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=m(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=m(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=m(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=m(void 0,{alias:"pMotionLeaveActiveClass"});options=m({},{alias:"pMotionOptions"});onBeforeEnter=Q({alias:"pMotionOnBeforeEnter"});onEnter=Q({alias:"pMotionOnEnter"});onAfterEnter=Q({alias:"pMotionOnAfterEnter"});onEnterCancelled=Q({alias:"pMotionOnEnterCancelled"});onBeforeLeave=Q({alias:"pMotionOnBeforeLeave"});onLeave=Q({alias:"pMotionOnLeave"});onAfterLeave=Q({alias:"pMotionOnAfterLeave"});onLeaveCancelled=Q({alias:"pMotionOnLeaveCancelled"});motionOptions=S(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),X(()=>{this.motion||(this.motion=O3(this.$el,this.motionOptions()))}),T4(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),t=this.hideStrategy();this.visible()?(N4(this.$el,t),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount?S1(this.$el,t):(this.applyMotionDuration("leave"),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&S1(this.$el,t)})),this.isInitialMount=!1})}applyMotionDuration(e){let t=d2(this.motionOptions),l=x4(t.duration,e);if(l==null||!this.$el)return;let n=this.$el,i=`${l}ms`;t.type==="transition"?n.style.transitionDuration=i:n.style.animationDuration=i}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,N4(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(t){return new(t||a)};static \u0275dir=x({type:a,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[A([R3,{provide:ue,useExisting:a},{provide:J,useExisting:a}]),C]})}return a})(),me=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[H3]})}return a})();var U2=class a{static isArray(c,e=!0){return Array.isArray(c)&&(e||c.length!==0)}static isObject(c,e=!0){return typeof c=="object"&&!Array.isArray(c)&&c!=null&&(e||Object.keys(c).length!==0)}static equals(c,e,t){return t?this.resolveFieldData(c,t)===this.resolveFieldData(e,t):this.equalsByValue(c,e)}static equalsByValue(c,e){if(c===e)return!0;if(c&&e&&typeof c=="object"&&typeof e=="object"){var t=Array.isArray(c),l=Array.isArray(e),n,i,r;if(t&&l){if(i=c.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!this.equalsByValue(c[n],e[n]))return!1;return!0}if(t!=l)return!1;var o=this.isDate(c),s=this.isDate(e);if(o!=s)return!1;if(o&&s)return c.getTime()==e.getTime();var f=c instanceof RegExp,d=e instanceof RegExp;if(f!=d)return!1;if(f&&d)return c.toString()==e.toString();var h=Object.keys(c);if(i=h.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[n]))return!1;for(n=i;n--!==0;)if(r=h[n],!this.equalsByValue(c[r],e[r]))return!1;return!0}return c!==c&&e!==e}static resolveFieldData(c,e){if(c&&e){if(this.isFunction(e))return e(c);if(e.indexOf(".")==-1)return c[e];{let t=e.split("."),l=c;for(let n=0,i=t.length;n<i;++n){if(l==null)return null;l=l[t[n]]}return l}}else return null}static isFunction(c){return!!(c&&c.constructor&&c.call&&c.apply)}static reorderArray(c,e,t){let l;c&&e!==t&&(t>=c.length&&(t%=c.length,e%=c.length),c.splice(t,0,c.splice(e,1)[0]))}static insertIntoOrderedArray(c,e,t,l){if(t.length>0){let n=!1;for(let i=0;i<t.length;i++)if(this.findIndexInList(t[i],l)>e){t.splice(i,0,c),n=!0;break}n||t.push(c)}else t.push(c)}static findIndexInList(c,e){let t=-1;if(e){for(let l=0;l<e.length;l++)if(e[l]==c){t=l;break}}return t}static contains(c,e){if(c!=null&&e&&e.length){for(let t of e)if(this.equals(c,t))return!0}return!1}static removeAccents(c){return c&&(c=c.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),c}static isDate(c){return Object.prototype.toString.call(c)==="[object Date]"}static isEmpty(c){return c==null||c===""||Array.isArray(c)&&c.length===0||!this.isDate(c)&&typeof c=="object"&&Object.keys(c).length===0}static isNotEmpty(c){return!this.isEmpty(c)}static compare(c,e,t,l=1){let n=-1,i=this.isEmpty(c),r=this.isEmpty(e);return i&&r?n=0:i?n=l:r?n=-l:typeof c=="string"&&typeof e=="string"?n=c.localeCompare(e,t,{numeric:!0}):n=c<e?-1:c>e?1:0,n}static sort(c,e,t=1,l,n=1){let i=a.compare(c,e,l,t),r=t;return(a.isEmpty(c)||a.isEmpty(e))&&(r=n===1?t:n),r*i}static merge(c,e){if(!(c==null&&e==null)){{if((c==null||typeof c=="object")&&(e==null||typeof e=="object"))return g(g({},c||{}),e||{});if((c==null||typeof c=="string")&&(e==null||typeof e=="string"))return[c||"",e||""].join(" ")}return e||c}}static isPrintableCharacter(c=""){return this.isNotEmpty(c)&&c.length===1&&c.match(/\S| /)}static getItemValue(c,...e){return this.isFunction(c)?c(...e):c}static findLastIndex(c,e){let t=-1;if(this.isNotEmpty(c))try{t=c.findLastIndex(e)}catch{t=c.lastIndexOf([...c].reverse().find(e))}return t}static findLast(c,e){let t;if(this.isNotEmpty(c))try{t=c.findLast(e)}catch{t=[...c].reverse().find(e)}return t}static deepEquals(c,e){if(c===e)return!0;if(c&&e&&typeof c=="object"&&typeof e=="object"){var t=Array.isArray(c),l=Array.isArray(e),n,i,r;if(t&&l){if(i=c.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!this.deepEquals(c[n],e[n]))return!1;return!0}if(t!=l)return!1;var o=c instanceof Date,s=e instanceof Date;if(o!=s)return!1;if(o&&s)return c.getTime()==e.getTime();var f=c instanceof RegExp,d=e instanceof RegExp;if(f!=d)return!1;if(f&&d)return c.toString()==e.toString();var h=Object.keys(c);if(i=h.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[n]))return!1;for(n=i;n--!==0;)if(r=h[n],!this.deepEquals(c[r],e[r]))return!1;return!0}return c!==c&&e!==e}static minifyCSS(c){return c&&c.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(c){return this.isString(c)?c.replace(/(-|_)/g,"").toLowerCase():c}static isString(c,e=!0){return typeof c=="string"&&(e||c!=="")}},pe=0;function xr(a="pn_id_"){return pe++,`${a}${pe}`}function Vt(){let a=[],c=(n,i)=>{let r=a.length>0?a[a.length-1]:{key:n,value:i},o=r.value+(r.key===n?0:i)+2;return a.push({key:n,value:o}),o},e=n=>{a=a.filter(i=>i.value!==n)},t=()=>a.length>0?a[a.length-1].value:0,l=n=>n&&parseInt(n.style.zIndex,10)||0;return{get:l,set:(n,i,r)=>{i&&(i.style.zIndex=String(c(n,r)))},clear:n=>{n&&(e(l(n)),n.style.zIndex="")},getCurrent:()=>t(),generateZIndex:c,revertZIndex:e}}var w4=Vt();var he=["content"],Ot=["overlay"],ve=["*","*"],Rt=()=>({mode:null}),Me=a=>({$implicit:a}),Ht=a=>({mode:a});function Ut(a,c){a&1&&r1(0)}function $t(a,c){if(a&1&&(a2(0),s2(1,Ut,1,0,"ng-container",3)),a&2){let e=V();j(),k("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",O1(3,Me,Z3(2,Rt)))}}function Wt(a,c){a&1&&r1(0)}function jt(a,c){if(a&1){let e=Y3();T2(0,"div",5,0),f2("click",function(){g2(e);let l=V(2);return z2(l.onOverlayClick())}),T2(2,"p-motion",6),f2("onBeforeEnter",function(l){g2(e);let n=V(2);return z2(n.onOverlayBeforeEnter(l))})("onEnter",function(l){g2(e);let n=V(2);return z2(n.onOverlayEnter(l))})("onAfterEnter",function(l){g2(e);let n=V(2);return z2(n.onOverlayAfterEnter(l))})("onBeforeLeave",function(l){g2(e);let n=V(2);return z2(n.onOverlayBeforeLeave(l))})("onLeave",function(l){g2(e);let n=V(2);return z2(n.onOverlayLeave(l))})("onAfterLeave",function(l){g2(e);let n=V(2);return z2(n.onOverlayAfterLeave(l))}),T2(3,"div",5,1),f2("click",function(l){g2(e);let n=V(2);return z2(n.onOverlayContentClick(l))}),a2(5,1),s2(6,Wt,1,0,"ng-container",3),l1()()()}if(a&2){let e=V(2);B1(e.sx("root")),_(e.cn(e.cx("root"),e.styleClass)),k("pBind",e.ptm("root")),j(2),k("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),j(),_(e.cn(e.cx("content"),e.contentStyleClass)),k("pBind",e.ptm("content")),j(3),k("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",O1(15,Me,O1(13,Ht,e.overlayMode)))}}function Gt(a,c){if(a&1&&s2(0,jt,7,17,"div",4),a&2){let e=V();k("ngIf",e.modalVisible)}}var qt={root:()=>({position:"absolute",top:"0"})},Xt=`
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
`,Yt={host:"p-overlay-host",root:({instance:a})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":a.modal,"p-overlay-center":a.modal&&a.overlayResponsiveDirection==="center","p-overlay-top":a.modal&&a.overlayResponsiveDirection==="top","p-overlay-top-start":a.modal&&a.overlayResponsiveDirection==="top-start","p-overlay-top-end":a.modal&&a.overlayResponsiveDirection==="top-end","p-overlay-bottom":a.modal&&a.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":a.modal&&a.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":a.modal&&a.overlayResponsiveDirection==="bottom-end","p-overlay-left":a.modal&&a.overlayResponsiveDirection==="left","p-overlay-left-start":a.modal&&a.overlayResponsiveDirection==="left-start","p-overlay-left-end":a.modal&&a.overlayResponsiveDirection==="left-end","p-overlay-right":a.modal&&a.overlayResponsiveDirection==="right","p-overlay-right-start":a.modal&&a.overlayResponsiveDirection==="right-start","p-overlay-right-end":a.modal&&a.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},ge=(()=>{class a extends U{name="overlay";style=Xt;classes=Yt;inlineStyles=qt;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=T({token:a,factory:a.\u0275fac})}return a})(),ze=new E("OVERLAY_INSTANCE"),Xr=(()=>{class a extends W{overlayService;zone;componentName="Overlay";$pcOverlay=v(ze,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return U2.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return U2.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return U2.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return U2.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=m(void 0);inline=m(!1);motionOptions=m(void 0);computedMotionOptions=S(()=>g(g({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new P;onBeforeShow=new P;onShow=new P;onBeforeHide=new P;onHide=new P;onAnimationStart=new P;onAnimationDone=new P;onBeforeEnter=new P;onEnter=new P;onAfterEnter=new P;onBeforeLeave=new P;onLeave=new P;onAfterLeave=new P;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=m();$appendTo=S(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=v(ge);bindDirectiveInstance=v(N,{self:!0});documentKeyboardListener;parentDragSubscription=null;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(E2(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return g(g({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return g(g({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return u0(this.target,this.el?.nativeElement)}constructor(e,t){super(),this.overlayService=e,this.zone=t}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,t=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),t&&I4(this.targetEl),this.modal&&o1(this.document?.body,"p-overflow-hidden")}hide(e,t=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),t&&I4(this.targetEl),this.modal&&S2(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=q(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),w4.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,t){this[e].emit(t),this.options&&this.options[e]&&this.options[e](t),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](t)}setZIndex(){this.autoZIndex&&w4.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?B4(this.document.body,this.overlayEl):B4(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=j1(this.targetEl)+"px",this.$appendTo()==="self"?d0(this.overlayEl,this.targetEl):f0(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!=="self"&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl)&&this.hide(this.overlayEl,!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new b4(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let l=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&l}):l)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!s1()}):!s1())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!s1()}):!s1())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),w4.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(t){return new(t||a)(w(v0),w(w1))};static \u0275cmp=$({type:a,selectors:[["p-overlay"]],contentQueries:function(t,l,n){if(t&1&&E1(n,he,4)(n,q1,4),t&2){let i;p2(i=h2())&&(l.contentTemplate=i.first),p2(i=h2())&&(l.templates=i)}},viewQuery:function(t,l){if(t&1&&Q3(Ot,5)(he,5),t&2){let n;p2(n=h2())&&(l.overlayViewChild=n.first),p2(n=h2())&&(l.contentViewChild=n.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[A([ge,{provide:ze,useExisting:a},{provide:J,useExisting:a}]),t2([N]),C],ngContentSelectors:ve,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(t,l){t&1&&(l2(ve),A1(0,$t,2,5)(1,Gt,1,1,"div",2)),t&2&&D1(l.inline()?0:1)},dependencies:[n2,H1,U1,o2,N,me,H3],encapsulation:2,changeDetection:0})}return a})();export{q4 as a,A0 as b,b0 as c,b2 as d,hl as e,vl as f,c4 as g,Qe as h,Ke as i,Je as j,zl as k,a5 as l,Ml as m,bl as n,Wl as o,jl as p,Xl as q,Yl as r,Ql as s,Kl as t,Zl as u,Jl as v,e9 as w,y1 as x,J as y,W as z,I3 as A,B9 as B,I9 as C,b4 as D,H8 as E,N as F,e1 as G,V3 as H,j8 as I,D9 as J,L4 as K,q8 as L,Nn as M,Q8 as N,pt as O,di as P,re as Q,ir as R,Ti as S,Ei as T,H3 as U,Cr as V,me as W,U2 as X,xr as Y,w4 as Z,Xr as _,Qi as $};
