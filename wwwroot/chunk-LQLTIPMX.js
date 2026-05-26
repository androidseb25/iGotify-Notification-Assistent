import{Aa as I1,B as q,Bb as U1,C as X,Cb as $1,Cc as G1,D as N1,Db as j2,Dc as o2,E as L,Eb as Z3,F as M2,Fb as J3,Fc as I4,G as w1,Gc as q1,H as R3,Ha as D,Hc as V4,Ia as j3,Ic as f0,J as j,Ja as V1,Jb as i1,Jc as d0,K as _2,Ka as A4,Kb as e0,Kc as O4,L as I,Lb as x2,Lc as R4,Mb as a0,Mc as H4,N as U,Nb as c0,Nc as P2,O as $,Oc as G2,P as x,Pc as R,Qc as u0,R as t2,Ra as d2,Rb as t0,S as y,Sa as S,T as s2,Ta as Q,Tb as W1,U as H3,Ua as m,Ub as l0,V as e2,Va as c2,Wa as O1,Wb as n0,Xa as k,Xb as T4,Y as k1,Ya as G3,Z as A1,Za as D4,_a as _4,a as g,aa as w,ac as E4,b as Z,ba as F2,bb as R1,c as P3,ca as c1,cb as q3,d as B3,da as t1,db as H1,e as I3,ea as w4,ec as P4,fa as k4,fb as n2,g as V3,ga as l1,gb as T2,h as O3,ha as D1,hb as F4,hc as i0,ia as _1,ic as r0,ja as n1,ka as U3,kc as B4,la as F1,ma as f2,mb as X3,n as y1,na as V,nc as r1,o as x1,oa as l2,oc as j1,p as F,pa as a2,pc as o0,q as H,qa as T1,r as P,ra as $3,s as v,sa as p2,t as g2,ta as h2,tb as Y3,u as z2,v as $2,va as W3,vb as Q3,w as N4,wa as E1,wb as E2,x as W2,xa as P1,y as B,ya as A,yb as K3,z as S1,za as B1,zc as s0}from"./chunk-RSUHHN62.js";var b0=(()=>{class a{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,c){this._renderer=e,this._elementRef=c}setProperty(e,c){this._renderer.setProperty(this._elementRef.nativeElement,e,c)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(c){return new(c||a)(I(_2),I(M2))};static \u0275dir=x({type:a})}return a})(),se=(()=>{class a extends b0{static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,features:[y]})}return a})(),L0=new P("");var fe={provide:L0,useExisting:x1(()=>C0),multi:!0};function de(){let a=_4()?_4().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var ue=new P(""),C0=(()=>{class a extends b0{_compositionMode;_composing=!1;constructor(e,c,l){super(e,c),this._compositionMode=l,this._compositionMode==null&&(this._compositionMode=!de())}writeValue(e){let c=e??"";this.setProperty("value",c)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(c){return new(c||a)(I(_2),I(M2),I(ue,8))};static \u0275dir=x({type:a,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(c,l){c&1&&f2("input",function(i){return l._handleInput(i.target.value)})("blur",function(){return l.onTouched()})("compositionstart",function(){return l._compositionStart()})("compositionend",function(i){return l._compositionEnd(i.target.value)})},standalone:!1,features:[D([fe]),y]})}return a})();var y0=new P(""),x0=new P("");function S0(a){return a!=null}function N0(a){return H3(a)?I3(a):a}function w0(a){let t={};return a.forEach(e=>{t=e!=null?g(g({},t),e):t}),Object.keys(t).length===0?null:t}function k0(a,t){return t.map(e=>e(a))}function me(a){return!a.validate}function A0(a){return a.map(t=>me(t)?t:e=>t.validate(e))}function pe(a){if(!a)return null;let t=a.filter(S0);return t.length==0?null:function(e){return w0(k0(e,t))}}function W4(a){return a!=null?pe(A0(a)):null}function he(a){if(!a)return null;let t=a.filter(S0);return t.length==0?null:function(e){let c=k0(e,t).map(N0);return O3(c).pipe(V3(w0))}}function j4(a){return a!=null?he(A0(a)):null}function m0(a,t){return a===null?[t]:Array.isArray(a)?[...a,t]:[a,t]}function ve(a){return a._rawValidators}function ge(a){return a._rawAsyncValidators}function U4(a){return a?Array.isArray(a)?a:[a]:[]}function Y1(a,t){return Array.isArray(a)?a.includes(t):a===t}function p0(a,t){let e=U4(t);return U4(a).forEach(l=>{Y1(e,l)||e.push(l)}),e}function h0(a,t){return U4(t).filter(e=>!Y1(a,e))}var Q1=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=W4(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j4(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},Y2=class extends Q1{name;get formDirective(){return null}get path(){return null}},B2=class extends Q1{_parent=null;name=null;valueAccessor=null},K1=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Qt=(()=>{class a extends K1{constructor(e){super(e)}static \u0275fac=function(c){return new(c||a)(I(B2,2))};static \u0275dir=x({type:a,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(c,l){c&2&&E1("ng-untouched",l.isUntouched)("ng-touched",l.isTouched)("ng-pristine",l.isPristine)("ng-dirty",l.isDirty)("ng-valid",l.isValid)("ng-invalid",l.isInvalid)("ng-pending",l.isPending)},standalone:!1,features:[y]})}return a})(),Kt=(()=>{class a extends K1{constructor(e){super(e)}static \u0275fac=function(c){return new(c||a)(I(Y2,10))};static \u0275dir=x({type:a,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(c,l){c&2&&E1("ng-untouched",l.isUntouched)("ng-touched",l.isTouched)("ng-pristine",l.isPristine)("ng-dirty",l.isDirty)("ng-valid",l.isValid)("ng-invalid",l.isInvalid)("ng-pending",l.isPending)("ng-submitted",l.isSubmitted)},standalone:!1,features:[y]})}return a})();var o1="VALID",X1="INVALID",q2="PENDING",s1="DISABLED",S2=class{},Z1=class extends S2{value;source;constructor(t,e){super(),this.value=t,this.source=e}},d1=class extends S2{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},u1=class extends S2{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},X2=class extends S2{status;source;constructor(t,e){super(),this.status=t,this.source=e}},$4=class extends S2{source;constructor(t){super(),this.source=t}},J1=class extends S2{source;constructor(t){super(),this.source=t}};function D0(a){return(c4(a)?a.validators:a)||null}function ze(a){return Array.isArray(a)?W4(a):a||null}function _0(a,t){return(c4(t)?t.asyncValidators:a)||null}function Me(a){return Array.isArray(a)?j4(a):a||null}function c4(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function be(a,t,e){let c=a.controls;if(!(t?Object.keys(c):c).length)throw new y1(1e3,"");if(!c[e])throw new y1(1001,"")}function Le(a,t,e){a._forEachChild((c,l)=>{if(e[l]===void 0)throw new y1(-1002,"")})}var e4=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return d2(this.statusReactive)}set status(t){d2(()=>this.statusReactive.set(t))}_status=S(()=>this.statusReactive());statusReactive=q(void 0);get valid(){return this.status===o1}get invalid(){return this.status===X1}get pending(){return this.status===q2}get disabled(){return this.status===s1}get enabled(){return this.status!==s1}errors;get pristine(){return d2(this.pristineReactive)}set pristine(t){d2(()=>this.pristineReactive.set(t))}_pristine=S(()=>this.pristineReactive());pristineReactive=q(!0);get dirty(){return!this.pristine}get touched(){return d2(this.touchedReactive)}set touched(t){d2(()=>this.touchedReactive.set(t))}_touched=S(()=>this.touchedReactive());touchedReactive=q(!1);get untouched(){return!this.touched}_events=new B3;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(p0(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(p0(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(h0(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(h0(t,this._rawAsyncValidators))}hasValidator(t){return Y1(this._rawValidators,t)}hasAsyncValidator(t){return Y1(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let c=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(Z(g({},t),{sourceControl:c})),e&&t.emitEvent!==!1&&this._events.next(new u1(!0,c))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let c=t.sourceControl??this;this._forEachChild(l=>{l.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:c})}),t.onlySelf||this._parent?._updateTouched(t,c),e&&t.emitEvent!==!1&&this._events.next(new u1(!1,c))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let c=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(Z(g({},t),{sourceControl:c})),e&&t.emitEvent!==!1&&this._events.next(new d1(!1,c))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let c=t.sourceControl??this;this._forEachChild(l=>{l.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,c),e&&t.emitEvent!==!1&&this._events.next(new d1(!0,c))}markAsPending(t={}){this.status=q2;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new X2(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(Z(g({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=s1,this.errors=null,this._forEachChild(l=>{l.disable(Z(g({},t),{onlySelf:!0}))}),this._updateValue();let c=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Z1(this.value,c)),this._events.next(new X2(this.status,c)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Z(g({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(l=>l(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=o1,this._forEachChild(c=>{c.enable(Z(g({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Z(g({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(c=>c(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let c=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===o1||this.status===q2)&&this._runAsyncValidator(c,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Z1(this.value,e)),this._events.next(new X2(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(Z(g({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?s1:o1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=q2,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let c=N0(this.asyncValidator(this));this._asyncValidationSubscription=c.subscribe(l=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(l,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((c,l)=>c&&c._find(l),this)}getError(t,e){let c=e?this.get(e):this;return c?.errors?c.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,c){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||c)&&this._events.next(new X2(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,c)}_initObservables(){this.valueChanges=new B,this.statusChanges=new B}_calculateStatus(){return this._allControlsDisabled()?s1:this.errors?X1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(q2)?q2:this._anyControlsHaveStatus(X1)?X1:o1}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let c=!this._anyControlsDirty(),l=this.pristine!==c;this.pristine=c,t.onlySelf||this._parent?._updatePristine(t,e),l&&this._events.next(new d1(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new u1(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){c4(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ze(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Me(this._rawAsyncValidators)}},a4=class extends e4{constructor(t,e,c){super(D0(e),_0(c,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,c={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:c.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,c={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:c.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Le(this,!0,t),Object.keys(t).forEach(c=>{be(this,!0,c),this.controls[c].setValue(t[c],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(c=>{let l=this.controls[c];l&&l.patchValue(t[c],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((c,l)=>{c.reset(t?t[l]:null,Z(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new J1(this))}getRawValue(){return this._reduceChildren({},(t,e,c)=>(t[c]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,c)=>c._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let c=this.controls[e];c&&t(c,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,c]of Object.entries(this.controls))if(this.contains(e)&&t(c))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,c,l)=>((c.enabled||this.disabled)&&(e[l]=c.value),e))}_reduceChildren(t,e){let c=t;return this._forEachChild((l,n)=>{c=e(c,l,n)}),c}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var G4=new P("",{factory:()=>q4}),q4="always";function Ce(a,t){return[...t.path,a]}function F0(a,t,e=q4){T0(a,t),t.valueAccessor.writeValue(a.value),(a.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(a.disabled),xe(a,t),Ne(a,t),Se(a,t),ye(a,t)}function v0(a,t){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ye(a,t){if(t.valueAccessor.setDisabledState){let e=c=>{t.valueAccessor.setDisabledState(c)};a.registerOnDisabledChange(e),t._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function T0(a,t){let e=ve(a);t.validator!==null?a.setValidators(m0(e,t.validator)):typeof e=="function"&&a.setValidators([e]);let c=ge(a);t.asyncValidator!==null?a.setAsyncValidators(m0(c,t.asyncValidator)):typeof c=="function"&&a.setAsyncValidators([c]);let l=()=>a.updateValueAndValidity();v0(t._rawValidators,l),v0(t._rawAsyncValidators,l)}function xe(a,t){t.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&E0(a,t)})}function Se(a,t){t.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&E0(a,t),a.updateOn!=="submit"&&a.markAsTouched()})}function E0(a,t){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function Ne(a,t){let e=(c,l)=>{t.valueAccessor.writeValue(c),l&&t.viewToModelUpdate(c)};a.registerOnChange(e),t._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function we(a,t){a==null,T0(a,t)}function ke(a,t){if(!a.hasOwnProperty("model"))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Ae(a){return Object.getPrototypeOf(a.constructor)===se}function De(a,t){a._syncPendingControls(),t.forEach(e=>{let c=e.control;c.updateOn==="submit"&&c._pendingChange&&(e.viewToModelUpdate(c._pendingValue),c._pendingChange=!1)})}function _e(a,t){if(!t)return null;Array.isArray(t);let e,c,l;return t.forEach(n=>{n.constructor===C0?e=n:Ae(n)?c=n:l=n}),l||c||e||null}var Fe={provide:Y2,useExisting:x1(()=>Te)},f1=Promise.resolve(),Te=(()=>{class a extends Y2{callSetDisabledState;get submitted(){return d2(this.submittedReactive)}_submitted=S(()=>this.submittedReactive());submittedReactive=q(!1);_directives=new Set;form;ngSubmit=new B;options;constructor(e,c,l){super(),this.callSetDisabledState=l,this.form=new a4({},W4(e),j4(c))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){f1.then(()=>{let c=this._findContainer(e.path);e.control=c.registerControl(e.name,e.control),F0(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){f1.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){f1.then(()=>{let c=this._findContainer(e.path),l=new a4({});we(l,e),c.registerControl(e.name,l),l.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){f1.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,c){f1.then(()=>{this.form.get(e.path).setValue(c)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),De(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new $4(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(c){return new(c||a)(I(y0,10),I(x0,10),I(G4,8))};static \u0275dir=x({type:a,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(c,l){c&1&&f2("submit",function(i){return l.onSubmit(i)})("reset",function(){return l.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[D([Fe]),y]})}return a})();function g0(a,t){let e=a.indexOf(t);e>-1&&a.splice(e,1)}function z0(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var Ee=class extends e4{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,c){super(D0(e),_0(c,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),c4(e)&&(e.nonNullable||e.initialValueIsDefault)&&(z0(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(c=>c(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new J1(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){g0(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){g0(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){z0(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Pe={provide:B2,useExisting:x1(()=>Be)},M0=Promise.resolve(),Be=(()=>{class a extends B2{_changeDetectorRef;callSetDisabledState;control=new Ee;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new B;constructor(e,c,l,n,i,r){super(),this._changeDetectorRef=i,this.callSetDisabledState=r,this._parent=e,this._setValidators(c),this._setAsyncValidators(l),this.valueAccessor=_e(this,n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let c=e.name.previousValue;this.formDirective.removeControl({name:c,path:this._getPath(c)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ke(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){F0(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){M0.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let c=e.isDisabled.currentValue,l=c!==0&&k(c);M0.then(()=>{l&&!this.control.disabled?this.control.disable():!l&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Ce(e,this._parent):[e]}static \u0275fac=function(c){return new(c||a)(I(Y2,9),I(y0,10),I(x0,10),I(L0,10),I(O1,8),I(G4,8))};static \u0275dir=x({type:a,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[D([Pe]),y,N1]})}return a})();var Jt=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275dir=x({type:a,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return a})();var Ie=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({})}return a})();var el=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:G4,useValue:e.callSetDisabledState??q4}]}}static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({imports:[Ie]})}return a})();function a3(a,t){(t==null||t>a.length)&&(t=a.length);for(var e=0,c=Array(t);e<t;e++)c[e]=a[e];return c}function Ve(a){if(Array.isArray(a))return a}function Oe(a){if(Array.isArray(a))return a3(a)}function Re(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function P0(a,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,m6(c.key),c)}}function He(a,t,e){return t&&P0(a.prototype,t),e&&P0(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function n4(a,t){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=v3(a))||t&&a&&typeof a.length=="number"){e&&(a=e);var c=0,l=function(){};return{s:l,n:function(){return c>=a.length?{done:!0}:{done:!1,value:a[c++]}},e:function(o){throw o},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n,i=!0,r=!1;return{s:function(){e=e.call(a)},n:function(){var o=e.next();return i=o.done,o},e:function(o){r=!0,n=o},f:function(){try{i||e.return==null||e.return()}finally{if(r)throw n}}}}function M(a,t,e){return(t=m6(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function Ue(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function $e(a,t){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var c,l,n,i,r=[],o=!0,s=!1;try{if(n=(e=e.call(a)).next,t===0){if(Object(e)!==e)return;o=!1}else for(;!(o=(c=n.call(e)).done)&&(r.push(c.value),r.length!==t);o=!0);}catch(f){s=!0,l=f}finally{try{if(!o&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(s)throw l}}return r}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B0(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);t&&(c=c.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),e.push.apply(e,c)}return e}function u(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?B0(Object(e),!0).forEach(function(c){M(a,c,e[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):B0(Object(e)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(e,c))})}return a}function d4(a,t){return Ve(a)||$e(a,t)||v3(a,t)||We()}function m2(a){return Oe(a)||Ue(a)||v3(a)||je()}function Ge(a,t){if(typeof a!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var c=e.call(a,t||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function m6(a){var t=Ge(a,"string");return typeof t=="symbol"?t:t+""}function o4(a){"@babel/helpers - typeof";return o4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o4(a)}function v3(a,t){if(a){if(typeof a=="string")return a3(a,t);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a3(a,t):void 0}}var I0=function(){},g3={},p6={},h6=null,v6={mark:I0,measure:I0};try{typeof window<"u"&&(g3=window),typeof document<"u"&&(p6=document),typeof MutationObserver<"u"&&(h6=MutationObserver),typeof performance<"u"&&(v6=performance)}catch{}var qe=g3.navigator||{},V0=qe.userAgent,O0=V0===void 0?"":V0,w2=g3,_=p6,R0=h6,t4=v6,tl=!!w2.document,C2=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",g6=~O0.indexOf("MSIE")||~O0.indexOf("Trident/"),X4,Xe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ye=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,z6={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Qe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},M6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],K="classic",g1="duotone",b6="sharp",L6="sharp-duotone",C6="chisel",y6="etch",x6="graphite",S6="jelly",N6="jelly-duo",w6="jelly-fill",k6="notdog",A6="notdog-duo",D6="slab",_6="slab-press",F6="thumbprint",T6="utility",E6="utility-duo",P6="utility-fill",B6="whiteboard",Ke="Classic",Ze="Duotone",Je="Sharp",e5="Sharp Duotone",a5="Chisel",c5="Etch",t5="Graphite",l5="Jelly",n5="Jelly Duo",i5="Jelly Fill",r5="Notdog",o5="Notdog Duo",s5="Slab",f5="Slab Press",d5="Thumbprint",u5="Utility",m5="Utility Duo",p5="Utility Fill",h5="Whiteboard",I6=[K,g1,b6,L6,C6,y6,x6,S6,N6,w6,k6,A6,D6,_6,F6,T6,E6,P6,B6],ll=(X4={},M(M(M(M(M(M(M(M(M(M(X4,K,Ke),g1,Ze),b6,Je),L6,e5),C6,a5),y6,c5),x6,t5),S6,l5),N6,n5),w6,i5),M(M(M(M(M(M(M(M(M(X4,k6,r5),A6,o5),D6,s5),_6,f5),F6,d5),T6,u5),E6,m5),P6,p5),B6,h5)),v5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},g5={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},z5=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),M5={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},V6=["fak","fa-kit","fakd","fa-kit-duotone"],H0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},b5=["kit"],L5="kit",C5="kit-duotone",y5="Kit",x5="Kit Duotone",nl=M(M({},L5,y5),C5,x5),S5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},N5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},w5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},U0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Y4,l4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},k5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],A5="classic",D5="duotone",_5="sharp",F5="sharp-duotone",T5="chisel",E5="etch",P5="graphite",B5="jelly",I5="jelly-duo",V5="jelly-fill",O5="notdog",R5="notdog-duo",H5="slab",U5="slab-press",$5="thumbprint",W5="utility",j5="utility-duo",G5="utility-fill",q5="whiteboard",X5="Classic",Y5="Duotone",Q5="Sharp",K5="Sharp Duotone",Z5="Chisel",J5="Etch",e7="Graphite",a7="Jelly",c7="Jelly Duo",t7="Jelly Fill",l7="Notdog",n7="Notdog Duo",i7="Slab",r7="Slab Press",o7="Thumbprint",s7="Utility",f7="Utility Duo",d7="Utility Fill",u7="Whiteboard",il=(Y4={},M(M(M(M(M(M(M(M(M(M(Y4,A5,X5),D5,Y5),_5,Q5),F5,K5),T5,Z5),E5,J5),P5,e7),B5,a7),I5,c7),V5,t7),M(M(M(M(M(M(M(M(M(Y4,O5,l7),R5,n7),H5,i7),U5,r7),$5,o7),W5,s7),j5,f7),G5,d7),q5,u7)),m7="kit",p7="kit-duotone",h7="Kit",v7="Kit Duotone",rl=M(M({},m7,h7),p7,v7),g7={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},z7={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},c3={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},M7=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],O6=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(k5,M7),b7=["solid","regular","light","thin","duotone","brands","semibold"],R6=[1,2,3,4,5,6,7,8,9,10],L7=R6.concat([11,12,13,14,15,16,17,18,19,20]),C7=["aw","fw","pull-left","pull-right"],y7=[].concat(m2(Object.keys(z7)),b7,C7,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",l4.GROUP,l4.SWAP_OPACITY,l4.PRIMARY,l4.SECONDARY]).concat(R6.map(function(a){return"".concat(a,"x")})).concat(L7.map(function(a){return"w-".concat(a)})),x7={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},b2="___FONT_AWESOME___",t3=16,H6="fa",U6="svg-inline--fa",V2="data-fa-i2svg",l3="data-fa-pseudo-element",S7="data-fa-pseudo-element-pending",z3="data-prefix",M3="data-icon",$0="fontawesome-i2svg",N7="async",w7=["HTML","HEAD","STYLE","SCRIPT"],$6=["::before","::after",":before",":after"],W6=(function(){try{return!0}catch{return!1}})();function z1(a){return new Proxy(a,{get:function(e,c){return c in e?e[c]:e[K]}})}var j6=u({},z6);j6[K]=u(u(u(u({},{"fa-duotone":"duotone"}),z6[K]),H0.kit),H0["kit-duotone"]);var k7=z1(j6),n3=u({},M5);n3[K]=u(u(u(u({},{duotone:"fad"}),n3[K]),U0.kit),U0["kit-duotone"]);var W0=z1(n3),i3=u({},c3);i3[K]=u(u({},i3[K]),w5.kit);var b3=z1(i3),r3=u({},g7);r3[K]=u(u({},r3[K]),S5.kit);var ol=z1(r3),A7=Xe,G6="fa-layers-text",D7=Ye,_7=u({},v5),sl=z1(_7),F7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q4=Qe,T7=[].concat(m2(b5),m2(y7)),p1=w2.FontAwesomeConfig||{};function E7(a){var t=_.querySelector("script["+a+"]");if(t)return t.getAttribute(a)}function P7(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}_&&typeof _.querySelector=="function"&&(j0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],j0.forEach(function(a){var t=d4(a,2),e=t[0],c=t[1],l=P7(E7(e));l!=null&&(p1[c]=l)}));var j0,q6={styleDefault:"solid",familyDefault:K,cssPrefix:H6,replacementClass:U6,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p1.familyPrefix&&(p1.cssPrefix=p1.familyPrefix);var Z2=u(u({},q6),p1);Z2.autoReplaceSvg||(Z2.observeMutations=!1);var z={};Object.keys(q6).forEach(function(a){Object.defineProperty(z,a,{enumerable:!0,set:function(e){Z2[a]=e,h1.forEach(function(c){return c(z)})},get:function(){return Z2[a]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){Z2.cssPrefix=t,h1.forEach(function(e){return e(z)})},get:function(){return Z2.cssPrefix}});w2.FontAwesomeConfig=z;var h1=[];function B7(a){return h1.push(a),function(){h1.splice(h1.indexOf(a),1)}}var N2=t3,v2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function I7(a){if(!(!a||!C2)){var t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=a;for(var e=_.head.childNodes,c=null,l=e.length-1;l>-1;l--){var n=e[l],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(c=n)}return _.head.insertBefore(t,c),a}}var V7="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function G0(){for(var a=12,t="";a-- >0;)t+=V7[Math.random()*62|0];return t}function J2(a){for(var t=[],e=(a||[]).length>>>0;e--;)t[e]=a[e];return t}function L3(a){return a.classList?J2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(t){return t})}function X6(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O7(a){return Object.keys(a||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(X6(a[e]),'" ')},"").trim()}function u4(a){return Object.keys(a||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(a[e].trim(),";")},"")}function C3(a){return a.size!==v2.size||a.x!==v2.x||a.y!==v2.y||a.rotate!==v2.rotate||a.flipX||a.flipY}function R7(a){var t=a.transform,e=a.containerWidth,c=a.iconWidth,l={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),r="rotate(".concat(t.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(r)},s={transform:"translate(".concat(c/2*-1," -256)")};return{outer:l,inner:o,path:s}}function H7(a){var t=a.transform,e=a.width,c=e===void 0?t3:e,l=a.height,n=l===void 0?t3:l,i=a.startCentered,r=i===void 0?!1:i,o="";return r&&g6?o+="translate(".concat(t.x/N2-c/2,"em, ").concat(t.y/N2-n/2,"em) "):r?o+="translate(calc(-50% + ".concat(t.x/N2,"em), calc(-50% + ").concat(t.y/N2,"em)) "):o+="translate(".concat(t.x/N2,"em, ").concat(t.y/N2,"em) "),o+="scale(".concat(t.size/N2*(t.flipX?-1:1),", ").concat(t.size/N2*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var U7=`:root, :host {
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
}`;function Y6(){var a=H6,t=U6,e=z.cssPrefix,c=z.replacementClass,l=U7;if(e!==a||c!==t){var n=new RegExp("\\.".concat(a,"\\-"),"g"),i=new RegExp("\\--".concat(a,"\\-"),"g"),r=new RegExp("\\.".concat(t),"g");l=l.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(r,".".concat(c))}return l}var q0=!1;function K4(){z.autoAddCss&&!q0&&(I7(Y6()),q0=!0)}var $7={mixout:function(){return{dom:{css:Y6,insertCss:K4}}},hooks:function(){return{beforeDOMElementCreation:function(){K4()},beforeI2svg:function(){K4()}}}},L2=w2||{};L2[b2]||(L2[b2]={});L2[b2].styles||(L2[b2].styles={});L2[b2].hooks||(L2[b2].hooks={});L2[b2].shims||(L2[b2].shims=[]);var u2=L2[b2],Q6=[],K6=function(){_.removeEventListener("DOMContentLoaded",K6),s4=1,Q6.map(function(t){return t()})},s4=!1;C2&&(s4=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),s4||_.addEventListener("DOMContentLoaded",K6));function W7(a){C2&&(s4?setTimeout(a,0):Q6.push(a))}function M1(a){var t=a.tag,e=a.attributes,c=e===void 0?{}:e,l=a.children,n=l===void 0?[]:l;return typeof a=="string"?X6(a):"<".concat(t," ").concat(O7(c),">").concat(n.map(M1).join(""),"</").concat(t,">")}function X0(a,t,e){if(a&&a[t]&&a[t][e])return{prefix:t,iconName:e,icon:a[t][e]}}var j7=function(t,e){return function(c,l,n,i){return t.call(e,c,l,n,i)}},Z4=function(t,e,c,l){var n=Object.keys(t),i=n.length,r=l!==void 0?j7(e,l):e,o,s,f;for(c===void 0?(o=1,f=t[n[0]]):(o=0,f=c);o<i;o++)s=n[o],f=r(f,t[s],s,t);return f};function Z6(a){return m2(a).length!==1?null:a.codePointAt(0).toString(16)}function Y0(a){return Object.keys(a).reduce(function(t,e){var c=a[e],l=!!c.icon;return l?t[c.iconName]=c.icon:t[e]=c,t},{})}function o3(a,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=e.skipHooks,l=c===void 0?!1:c,n=Y0(t);typeof u2.hooks.addPack=="function"&&!l?u2.hooks.addPack(a,Y0(t)):u2.styles[a]=u(u({},u2.styles[a]||{}),n),a==="fas"&&o3("fa",t)}var v1=u2.styles,G7=u2.shims,J6=Object.keys(b3),q7=J6.reduce(function(a,t){return a[t]=Object.keys(b3[t]),a},{}),y3=null,e8={},a8={},c8={},t8={},l8={};function X7(a){return~T7.indexOf(a)}function Y7(a,t){var e=t.split("-"),c=e[0],l=e.slice(1).join("-");return c===a&&l!==""&&!X7(l)?l:null}var n8=function(){var t=function(n){return Z4(v1,function(i,r,o){return i[o]=Z4(r,n,{}),i},{})};e8=t(function(l,n,i){if(n[3]&&(l[n[3]]=i),n[2]){var r=n[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){l[o.toString(16)]=i})}return l}),a8=t(function(l,n,i){if(l[i]=i,n[2]){var r=n[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){l[o]=i})}return l}),l8=t(function(l,n,i){var r=n[2];return l[i]=i,r.forEach(function(o){l[o]=i}),l});var e="far"in v1||z.autoFetchSvg,c=Z4(G7,function(l,n){var i=n[0],r=n[1],o=n[2];return r==="far"&&!e&&(r="fas"),typeof i=="string"&&(l.names[i]={prefix:r,iconName:o}),typeof i=="number"&&(l.unicodes[i.toString(16)]={prefix:r,iconName:o}),l},{names:{},unicodes:{}});c8=c.names,t8=c.unicodes,y3=m4(z.styleDefault,{family:z.familyDefault})};B7(function(a){y3=m4(a.styleDefault,{family:z.familyDefault})});n8();function x3(a,t){return(e8[a]||{})[t]}function Q7(a,t){return(a8[a]||{})[t]}function I2(a,t){return(l8[a]||{})[t]}function i8(a){return c8[a]||{prefix:null,iconName:null}}function K7(a){var t=t8[a],e=x3("fas",a);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function k2(){return y3}var r8=function(){return{prefix:null,iconName:null,rest:[]}};function Z7(a){var t=K,e=J6.reduce(function(c,l){return c[l]="".concat(z.cssPrefix,"-").concat(l),c},{});return I6.forEach(function(c){(a.includes(e[c])||a.some(function(l){return q7[c].includes(l)}))&&(t=c)}),t}function m4(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.family,c=e===void 0?K:e,l=k7[c][a];if(c===g1&&!a)return"fad";var n=W0[c][a]||W0[c][l],i=a in u2.styles?a:null,r=n||i||null;return r}function J7(a){var t=[],e=null;return a.forEach(function(c){var l=Y7(z.cssPrefix,c);l?e=l:c&&t.push(c)}),{iconName:e,rest:t}}function Q0(a){return a.sort().filter(function(t,e,c){return c.indexOf(t)===e})}var K0=O6.concat(V6);function p4(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,c=e===void 0?!1:e,l=null,n=Q0(a.filter(function(p){return K0.includes(p)})),i=Q0(a.filter(function(p){return!K0.includes(p)})),r=n.filter(function(p){return l=p,!M6.includes(p)}),o=d4(r,1),s=o[0],f=s===void 0?null:s,d=Z7(n),h=u(u({},J7(i)),{},{prefix:m4(f,{family:d})});return u(u(u({},h),ta({values:a,family:d,styles:v1,config:z,canonical:h,givenPrefix:l})),ea(c,l,h))}function ea(a,t,e){var c=e.prefix,l=e.iconName;if(a||!c||!l)return{prefix:c,iconName:l};var n=t==="fa"?i8(l):{},i=I2(c,l);return l=n.iconName||i||l,c=n.prefix||c,c==="far"&&!v1.far&&v1.fas&&!z.autoFetchSvg&&(c="fas"),{prefix:c,iconName:l}}var aa=I6.filter(function(a){return a!==K||a!==g1}),ca=Object.keys(c3).filter(function(a){return a!==K}).map(function(a){return Object.keys(c3[a])}).flat();function ta(a){var t=a.values,e=a.family,c=a.canonical,l=a.givenPrefix,n=l===void 0?"":l,i=a.styles,r=i===void 0?{}:i,o=a.config,s=o===void 0?{}:o,f=e===g1,d=t.includes("fa-duotone")||t.includes("fad"),h=s.familyDefault==="duotone",p=c.prefix==="fad"||c.prefix==="fa-duotone";if(!f&&(d||h||p)&&(c.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),!c.prefix&&aa.includes(e)){var C=Object.keys(r).find(function(T){return ca.includes(T)});if(C||s.autoFetchSvg){var b=z5.get(e).defaultShortPrefixId;c.prefix=b,c.iconName=I2(c.prefix,c.iconName)||c.iconName}}return(c.prefix==="fa"||n==="fa")&&(c.prefix=k2()||"fas"),c}var la=(function(){function a(){Re(this,a),this.definitions={}}return He(a,[{key:"add",value:function(){for(var e=this,c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];var i=l.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(r){e.definitions[r]=u(u({},e.definitions[r]||{}),i[r]),o3(r,i[r]);var o=b3[K][r];o&&o3(o,i[r]),n8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,c){var l=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(l).map(function(n){var i=l[n],r=i.prefix,o=i.iconName,s=i.icon,f=s[2];e[r]||(e[r]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(e[r][d]=s)}),e[r][o]=s}),e}}])})(),Z0=[],Q2={},K2={},na=Object.keys(K2);function ia(a,t){var e=t.mixoutsTo;return Z0=a,Q2={},Object.keys(K2).forEach(function(c){na.indexOf(c)===-1&&delete K2[c]}),Z0.forEach(function(c){var l=c.mixout?c.mixout():{};if(Object.keys(l).forEach(function(i){typeof l[i]=="function"&&(e[i]=l[i]),o4(l[i])==="object"&&Object.keys(l[i]).forEach(function(r){e[i]||(e[i]={}),e[i][r]=l[i][r]})}),c.hooks){var n=c.hooks();Object.keys(n).forEach(function(i){Q2[i]||(Q2[i]=[]),Q2[i].push(n[i])})}c.provides&&c.provides(K2)}),e}function s3(a,t){for(var e=arguments.length,c=new Array(e>2?e-2:0),l=2;l<e;l++)c[l-2]=arguments[l];var n=Q2[a]||[];return n.forEach(function(i){t=i.apply(null,[t].concat(c))}),t}function O2(a){for(var t=arguments.length,e=new Array(t>1?t-1:0),c=1;c<t;c++)e[c-1]=arguments[c];var l=Q2[a]||[];l.forEach(function(n){n.apply(null,e)})}function A2(){var a=arguments[0],t=Array.prototype.slice.call(arguments,1);return K2[a]?K2[a].apply(null,t):void 0}function f3(a){a.prefix==="fa"&&(a.prefix="fas");var t=a.iconName,e=a.prefix||k2();if(t)return t=I2(e,t)||t,X0(o8.definitions,e,t)||X0(u2.styles,e,t)}var o8=new la,ra=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,O2("noAuto")},oa={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return C2?(O2("beforeI2svg",t),A2("pseudoElements2svg",t),A2("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,W7(function(){fa({autoReplaceSvgRoot:e}),O2("watch",t)})}},sa={icon:function(t){if(t===null)return null;if(o4(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:I2(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],c=m4(t[0]);return{prefix:c,iconName:I2(c,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(A7))){var l=p4(t.split(" "),{skipLookups:!0});return{prefix:l.prefix||k2(),iconName:I2(l.prefix,l.iconName)||l.iconName}}if(typeof t=="string"){var n=k2();return{prefix:n,iconName:I2(n,t)||t}}}},i2={noAuto:ra,config:z,dom:oa,parse:sa,library:o8,findIconDefinition:f3,toHtml:M1},fa=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,c=e===void 0?_:e;(Object.keys(u2.styles).length>0||z.autoFetchSvg)&&C2&&z.autoReplaceSvg&&i2.dom.i2svg({node:c})};function h4(a,t){return Object.defineProperty(a,"abstract",{get:t}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(c){return M1(c)})}}),Object.defineProperty(a,"node",{get:function(){if(C2){var c=_.createElement("div");return c.innerHTML=a.html,c.children}}}),a}function da(a){var t=a.children,e=a.main,c=a.mask,l=a.attributes,n=a.styles,i=a.transform;if(C3(i)&&e.found&&!c.found){var r=e.width,o=e.height,s={x:r/o/2,y:.5};l.style=u4(u(u({},n),{},{"transform-origin":"".concat(s.x+i.x/16,"em ").concat(s.y+i.y/16,"em")}))}return[{tag:"svg",attributes:l,children:t}]}function ua(a){var t=a.prefix,e=a.iconName,c=a.children,l=a.attributes,n=a.symbol,i=n===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},l),{},{id:i}),children:c}]}]}function ma(a){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(e){return e in a})}function S3(a){var t=a.icons,e=t.main,c=t.mask,l=a.prefix,n=a.iconName,i=a.transform,r=a.symbol,o=a.maskId,s=a.extra,f=a.watchable,d=f===void 0?!1:f,h=c.found?c:e,p=h.width,C=h.height,b=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(function(r2){return s.classes.indexOf(r2)===-1}).filter(function(r2){return r2!==""||!!r2}).concat(s.classes).join(" "),T={children:[],attributes:u(u({},s.attributes),{},{"data-prefix":l,"data-icon":n,class:b,role:s.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(C)})};!ma(s.attributes)&&!s.attributes["aria-hidden"]&&(T.attributes["aria-hidden"]="true"),d&&(T.attributes[V2]="");var E=u(u({},T),{},{prefix:l,iconName:n,main:e,mask:c,maskId:o,transform:i,symbol:r,styles:u({},s.styles)}),G=c.found&&e.found?A2("generateAbstractMask",E)||{children:[],attributes:{}}:A2("generateAbstractIcon",E)||{children:[],attributes:{}},O=G.children,y2=G.attributes;return E.children=O,E.attributes=y2,r?ua(E):da(E)}function J0(a){var t=a.content,e=a.width,c=a.height,l=a.transform,n=a.extra,i=a.watchable,r=i===void 0?!1:i,o=u(u({},n.attributes),{},{class:n.classes.join(" ")});r&&(o[V2]="");var s=u({},n.styles);C3(l)&&(s.transform=H7({transform:l,startCentered:!0,width:e,height:c}),s["-webkit-transform"]=s.transform);var f=u4(s);f.length>0&&(o.style=f);var d=[];return d.push({tag:"span",attributes:o,children:[t]}),d}function pa(a){var t=a.content,e=a.extra,c=u(u({},e.attributes),{},{class:e.classes.join(" ")}),l=u4(e.styles);l.length>0&&(c.style=l);var n=[];return n.push({tag:"span",attributes:c,children:[t]}),n}var J4=u2.styles;function d3(a){var t=a[0],e=a[1],c=a.slice(4),l=d4(c,1),n=l[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Q4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Q4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Q4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:t,height:e,icon:i}}var ha={found:!1,width:512,height:512};function va(a,t){!W6&&!z.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(t,'" is missing.'))}function u3(a,t){var e=t;return t==="fa"&&z.styleDefault!==null&&(t=k2()),new Promise(function(c,l){if(e==="fa"){var n=i8(a)||{};a=n.iconName||a,t=n.prefix||t}if(a&&t&&J4[t]&&J4[t][a]){var i=J4[t][a];return c(d3(i))}va(a,t),c(u(u({},ha),{},{icon:z.showMissingIcons&&a?A2("missingIconAbstract")||{}:{}}))})}var e6=function(){},m3=z.measurePerformance&&t4&&t4.mark&&t4.measure?t4:{mark:e6,measure:e6},m1='FA "7.2.0"',ga=function(t){return m3.mark("".concat(m1," ").concat(t," begins")),function(){return s8(t)}},s8=function(t){m3.mark("".concat(m1," ").concat(t," ends")),m3.measure("".concat(m1," ").concat(t),"".concat(m1," ").concat(t," begins"),"".concat(m1," ").concat(t," ends"))},N3={begin:ga,end:s8},i4=function(){};function a6(a){var t=a.getAttribute?a.getAttribute(V2):null;return typeof t=="string"}function za(a){var t=a.getAttribute?a.getAttribute(z3):null,e=a.getAttribute?a.getAttribute(M3):null;return t&&e}function Ma(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(z.replacementClass)}function ba(){if(z.autoReplaceSvg===!0)return r4.replace;var a=r4[z.autoReplaceSvg];return a||r4.replace}function La(a){return _.createElementNS("http://www.w3.org/2000/svg",a)}function Ca(a){return _.createElement(a)}function f8(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.ceFn,c=e===void 0?a.tag==="svg"?La:Ca:e;if(typeof a=="string")return _.createTextNode(a);var l=c(a.tag);Object.keys(a.attributes||[]).forEach(function(i){l.setAttribute(i,a.attributes[i])});var n=a.children||[];return n.forEach(function(i){l.appendChild(f8(i,{ceFn:c}))}),l}function ya(a){var t=" ".concat(a.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var r4={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(l){e.parentNode.insertBefore(f8(l),e)}),e.getAttribute(V2)===null&&z.keepOriginalSource){var c=_.createComment(ya(e));e.parentNode.replaceChild(c,e)}else e.remove()},nest:function(t){var e=t[0],c=t[1];if(~L3(e).indexOf(z.replacementClass))return r4.replace(t);var l=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){var n=c[0].attributes.class.split(" ").reduce(function(r,o){return o===z.replacementClass||o.match(l)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});c[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=c.map(function(r){return M1(r)}).join(`
`);e.setAttribute(V2,""),e.innerHTML=i}};function c6(a){a()}function d8(a,t){var e=typeof t=="function"?t:i4;if(a.length===0)e();else{var c=c6;z.mutateApproach===N7&&(c=w2.requestAnimationFrame||c6),c(function(){var l=ba(),n=N3.begin("mutate");a.map(l),n(),e()})}}var w3=!1;function u8(){w3=!0}function p3(){w3=!1}var f4=null;function t6(a){if(R0&&z.observeMutations){var t=a.treeCallback,e=t===void 0?i4:t,c=a.nodeCallback,l=c===void 0?i4:c,n=a.pseudoElementsCallback,i=n===void 0?i4:n,r=a.observeMutationsRoot,o=r===void 0?_:r;f4=new R0(function(s){if(!w3){var f=k2();J2(s).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!a6(d.addedNodes[0])&&(z.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&a6(d.target)&&~F7.indexOf(d.attributeName))if(d.attributeName==="class"&&za(d.target)){var h=p4(L3(d.target)),p=h.prefix,C=h.iconName;d.target.setAttribute(z3,p||f),C&&d.target.setAttribute(M3,C)}else Ma(d.target)&&l(d.target)})}}),C2&&f4.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xa(){f4&&f4.disconnect()}function Sa(a){var t=a.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce(function(c,l){var n=l.split(":"),i=n[0],r=n.slice(1);return i&&r.length>0&&(c[i]=r.join(":").trim()),c},{})),e}function Na(a){var t=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),c=a.innerText!==void 0?a.innerText.trim():"",l=p4(L3(a));return l.prefix||(l.prefix=k2()),t&&e&&(l.prefix=t,l.iconName=e),l.iconName&&l.prefix||(l.prefix&&c.length>0&&(l.iconName=Q7(l.prefix,a.innerText)||x3(l.prefix,Z6(a.innerText))),!l.iconName&&z.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=a.firstChild.data)),l}function wa(a){var t=J2(a.attributes).reduce(function(e,c){return e.name!=="class"&&e.name!=="style"&&(e[c.name]=c.value),e},{});return t}function ka(){return{iconName:null,prefix:null,transform:v2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function l6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Na(a),c=e.iconName,l=e.prefix,n=e.rest,i=wa(a),r=s3("parseNodeAttributes",{},a),o=t.styleParser?Sa(a):[];return u({iconName:c,prefix:l,transform:v2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},r)}var Aa=u2.styles;function m8(a){var t=z.autoReplaceSvg==="nest"?l6(a,{styleParser:!1}):l6(a);return~t.extra.classes.indexOf(G6)?A2("generateLayersText",a,t):A2("generateSvgReplacementMutation",a,t)}function Da(){return[].concat(m2(V6),m2(O6))}function n6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!C2)return Promise.resolve();var e=_.documentElement.classList,c=function(d){return e.add("".concat($0,"-").concat(d))},l=function(d){return e.remove("".concat($0,"-").concat(d))},n=z.autoFetchSvg?Da():M6.concat(Object.keys(Aa));n.includes("fa")||n.push("fa");var i=[".".concat(G6,":not([").concat(V2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(V2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var r=[];try{r=J2(a.querySelectorAll(i))}catch{}if(r.length>0)c("pending"),l("complete");else return Promise.resolve();var o=N3.begin("onTree"),s=r.reduce(function(f,d){try{var h=m8(d);h&&f.push(h)}catch(p){W6||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,d){Promise.all(s).then(function(h){d8(h,function(){c("active"),c("complete"),l("pending"),typeof t=="function"&&t(),o(),f()})}).catch(function(h){o(),d(h)})})}function _a(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;m8(a).then(function(e){e&&d8([e],t)})}function Fa(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(t||{}).icon?t:f3(t||{}),l=e.mask;return l&&(l=(l||{}).icon?l:f3(l||{})),a(c,u(u({},e),{},{mask:l}))}}var Ta=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.transform,l=c===void 0?v2:c,n=e.symbol,i=n===void 0?!1:n,r=e.mask,o=r===void 0?null:r,s=e.maskId,f=s===void 0?null:s,d=e.classes,h=d===void 0?[]:d,p=e.attributes,C=p===void 0?{}:p,b=e.styles,T=b===void 0?{}:b;if(t){var E=t.prefix,G=t.iconName,O=t.icon;return h4(u({type:"icon"},t),function(){return O2("beforeDOMElementCreation",{iconDefinition:t,params:e}),S3({icons:{main:d3(O),mask:o?d3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:G,transform:u(u({},v2),l),symbol:i,maskId:f,extra:{attributes:C,styles:T,classes:h}})})}},Ea={mixout:function(){return{icon:Fa(Ta)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=n6,e.nodeCallback=_a,e}}},provides:function(t){t.i2svg=function(e){var c=e.node,l=c===void 0?_:c,n=e.callback,i=n===void 0?function(){}:n;return n6(l,i)},t.generateSvgReplacementMutation=function(e,c){var l=c.iconName,n=c.prefix,i=c.transform,r=c.symbol,o=c.mask,s=c.maskId,f=c.extra;return new Promise(function(d,h){Promise.all([u3(l,n),o.iconName?u3(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var C=d4(p,2),b=C[0],T=C[1];d([e,S3({icons:{main:b,mask:T},prefix:n,iconName:l,transform:i,symbol:r,maskId:s,extra:f,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){var c=e.children,l=e.attributes,n=e.main,i=e.transform,r=e.styles,o=u4(r);o.length>0&&(l.style=o);var s;return C3(i)&&(s=A2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),c.push(s||n.icon),{children:c,attributes:l}}}},Pa={mixout:function(){return{layer:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=c.classes,n=l===void 0?[]:l;return h4({type:"layer"},function(){O2("beforeDOMElementCreation",{assembler:e,params:c});var i=[];return e(function(r){Array.isArray(r)?r.map(function(o){i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(m2(n)).join(" ")},children:i}]})}}}},Ba={mixout:function(){return{counter:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=c.title,n=l===void 0?null:l,i=c.classes,r=i===void 0?[]:i,o=c.attributes,s=o===void 0?{}:o,f=c.styles,d=f===void 0?{}:f;return h4({type:"counter",content:e},function(){return O2("beforeDOMElementCreation",{content:e,params:c}),pa({content:e.toString(),title:n,extra:{attributes:s,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(m2(r))}})})}}}},Ia={mixout:function(){return{text:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=c.transform,n=l===void 0?v2:l,i=c.classes,r=i===void 0?[]:i,o=c.attributes,s=o===void 0?{}:o,f=c.styles,d=f===void 0?{}:f;return h4({type:"text",content:e},function(){return O2("beforeDOMElementCreation",{content:e,params:c}),J0({content:e,transform:u(u({},v2),n),extra:{attributes:s,styles:d,classes:["".concat(z.cssPrefix,"-layers-text")].concat(m2(r))}})})}}},provides:function(t){t.generateLayersText=function(e,c){var l=c.transform,n=c.extra,i=null,r=null;if(g6){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,r=s.height/o}return Promise.resolve([e,J0({content:e.innerHTML,width:i,height:r,transform:l,extra:n,watchable:!0})])}}},p8=new RegExp('"',"ug"),i6=[1105920,1112319],r6=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),g5),x7),N5),h3=Object.keys(r6).reduce(function(a,t){return a[t.toLowerCase()]=r6[t],a},{}),Va=Object.keys(h3).reduce(function(a,t){var e=h3[t];return a[t]=e[900]||m2(Object.entries(e))[0][1],a},{});function Oa(a){var t=a.replace(p8,"");return Z6(m2(t)[0]||"")}function Ra(a){var t=a.getPropertyValue("font-feature-settings").includes("ss01"),e=a.getPropertyValue("content"),c=e.replace(p8,""),l=c.codePointAt(0),n=l>=i6[0]&&l<=i6[1],i=c.length===2?c[0]===c[1]:!1;return n||i||t}function Ha(a,t){var e=a.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(t),l=isNaN(c)?"normal":c;return(h3[e]||{})[l]||Va[e]}function o6(a,t){var e="".concat(S7).concat(t.replace(":","-"));return new Promise(function(c,l){if(a.getAttribute(e)!==null)return c();var n=J2(a.children),i=n.filter(function(a1){return a1.getAttribute(l3)===t})[0],r=w2.getComputedStyle(a,t),o=r.getPropertyValue("font-family"),s=o.match(D7),f=r.getPropertyValue("font-weight"),d=r.getPropertyValue("content");if(i&&!s)return a.removeChild(i),c();if(s&&d!=="none"&&d!==""){var h=r.getPropertyValue("content"),p=Ha(o,f),C=Oa(h),b=s[0].startsWith("FontAwesome"),T=Ra(r),E=x3(p,C),G=E;if(b){var O=K7(C);O.iconName&&O.prefix&&(E=O.iconName,p=O.prefix)}if(E&&!T&&(!i||i.getAttribute(z3)!==p||i.getAttribute(M3)!==G)){a.setAttribute(e,G),i&&a.removeChild(i);var y2=ka(),r2=y2.extra;r2.attributes[l3]=t,u3(E,p).then(function(a1){var re=S3(u(u({},y2),{},{icons:{main:a1,mask:r8()},prefix:p,iconName:G,extra:r2,watchable:!0})),S4=_.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?a.insertBefore(S4,a.firstChild):a.appendChild(S4),S4.outerHTML=re.map(function(oe){return M1(oe)}).join(`
`),a.removeAttribute(e),c()}).catch(l)}else c()}else c()})}function Ua(a){return Promise.all([o6(a,"::before"),o6(a,"::after")])}function $a(a){return a.parentNode!==document.head&&!~w7.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(l3)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Wa=function(t){return!!t&&$6.some(function(e){return t.includes(e)})},ja=function(t){if(!t)return[];var e=new Set,c=t.split(/,(?![^()]*\))/).map(function(o){return o.trim()});c=c.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(s){return s.trim()})});var l=n4(c),n;try{for(l.s();!(n=l.n()).done;){var i=n.value;if(Wa(i)){var r=$6.reduce(function(o,s){return o.replace(s,"")},i);r!==""&&r!=="*"&&e.add(r)}}}catch(o){l.e(o)}finally{l.f()}return e};function s6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(C2){var e;if(t)e=a;else if(z.searchPseudoElementsFullScan)e=a.querySelectorAll("*");else{var c=new Set,l=n4(document.styleSheets),n;try{for(l.s();!(n=l.n()).done;){var i=n.value;try{var r=n4(i.cssRules),o;try{for(r.s();!(o=r.n()).done;){var s=o.value,f=ja(s.selectorText),d=n4(f),h;try{for(d.s();!(h=d.n()).done;){var p=h.value;c.add(p)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){r.e(b)}finally{r.f()}}catch(b){z.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){l.e(b)}finally{l.f()}if(!c.size)return;var C=Array.from(c).join(", ");try{e=a.querySelectorAll(C)}catch{}}return new Promise(function(b,T){var E=J2(e).filter($a).map(Ua),G=N3.begin("searchPseudoElements");u8(),Promise.all(E).then(function(){G(),p3(),b()}).catch(function(){G(),p3(),T()})})}}var Ga={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=s6,e}}},provides:function(t){t.pseudoElements2svg=function(e){var c=e.node,l=c===void 0?_:c;z.searchPseudoElements&&s6(l)}}},f6=!1,qa={mixout:function(){return{dom:{unwatch:function(){u8(),f6=!0}}}},hooks:function(){return{bootstrap:function(){t6(s3("mutationObserverCallbacks",{}))},noAuto:function(){xa()},watch:function(e){var c=e.observeMutationsRoot;f6?p3():t6(s3("mutationObserverCallbacks",{observeMutationsRoot:c}))}}}},d6=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(c,l){var n=l.toLowerCase().split("-"),i=n[0],r=n.slice(1).join("-");if(i&&r==="h")return c.flipX=!0,c;if(i&&r==="v")return c.flipY=!0,c;if(r=parseFloat(r),isNaN(r))return c;switch(i){case"grow":c.size=c.size+r;break;case"shrink":c.size=c.size-r;break;case"left":c.x=c.x-r;break;case"right":c.x=c.x+r;break;case"up":c.y=c.y-r;break;case"down":c.y=c.y+r;break;case"rotate":c.rotate=c.rotate+r;break}return c},e)},Xa={mixout:function(){return{parse:{transform:function(e){return d6(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,c){var l=c.getAttribute("data-fa-transform");return l&&(e.transform=d6(l)),e}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var c=e.main,l=e.transform,n=e.containerWidth,i=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(l.x*32,", ").concat(l.y*32,") "),s="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),d={transform:"".concat(o," ").concat(s," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:r,inner:d,path:h};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:u(u({},c.icon.attributes),p.path)}]}]}}}},e3={x:0,y:0,width:"100%",height:"100%"};function u6(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||t)&&(a.attributes.fill="black"),a}function Ya(a){return a.tag==="g"?a.children:[a]}var Qa={hooks:function(){return{parseNodeAttributes:function(e,c){var l=c.getAttribute("data-fa-mask"),n=l?p4(l.split(" ").map(function(i){return i.trim()})):r8();return n.prefix||(n.prefix=k2()),e.mask=n,e.maskId=c.getAttribute("data-fa-mask-id"),e}}},provides:function(t){t.generateAbstractMask=function(e){var c=e.children,l=e.attributes,n=e.main,i=e.mask,r=e.maskId,o=e.transform,s=n.width,f=n.icon,d=i.width,h=i.icon,p=R7({transform:o,containerWidth:d,iconWidth:s}),C={tag:"rect",attributes:u(u({},e3),{},{fill:"white"})},b=f.children?{children:f.children.map(u6)}:{},T={tag:"g",attributes:u({},p.inner),children:[u6(u({tag:f.tag,attributes:u(u({},f.attributes),p.path)},b))]},E={tag:"g",attributes:u({},p.outer),children:[T]},G="mask-".concat(r||G0()),O="clip-".concat(r||G0()),y2={tag:"mask",attributes:u(u({},e3),{},{id:G,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,E]},r2={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Ya(h)},y2]};return c.push(r2,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(G,")")},e3)}),{children:c,attributes:l}}}},Ka={provides:function(t){var e=!1;w2.matchMedia&&(e=w2.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var c=[],l={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c.push({tag:"path",attributes:u(u({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},n),{},{attributeName:"opacity"}),r={tag:"circle",attributes:u(u({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||r.children.push({tag:"animate",attributes:u(u({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),c.push(r),c.push({tag:"path",attributes:u(u({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||c.push({tag:"path",attributes:u(u({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:c}}}},Za={hooks:function(){return{parseNodeAttributes:function(e,c){var l=c.getAttribute("data-fa-symbol"),n=l===null?!1:l===""?!0:l;return e.symbol=n,e}}}},Ja=[$7,Ea,Pa,Ba,Ia,Ga,qa,Xa,Qa,Ka,Za];ia(Ja,{mixoutsTo:i2});var fl=i2.noAuto,h8=i2.config,dl=i2.library,v8=i2.dom,g8=i2.parse,ul=i2.findIconDefinition,ml=i2.toHtml,z8=i2.icon,pl=i2.layer,ec=i2.text,ac=i2.counter;var cc=["*"],tc=(()=>{class a{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(e){h8.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(c){return new(c||a)};static \u0275prov=F({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),lc=(()=>{class a{definitions={};addIcons(...e){for(let c of e){c.prefix in this.definitions||(this.definitions[c.prefix]={}),this.definitions[c.prefix][c.iconName]=c;for(let l of c.icon[2])typeof l=="string"&&(this.definitions[c.prefix][l]=c)}}addIconPacks(...e){for(let c of e){let l=Object.keys(c).map(n=>c[n]);this.addIcons(...l)}}getIconDefinition(e,c){return e in this.definitions&&c in this.definitions[e]?this.definitions[e][c]:null}static \u0275fac=function(c){return new(c||a)};static \u0275prov=F({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),nc=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},ic=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},b8=a=>a!=null&&(a===90||a===180||a===270||a==="90"||a==="180"||a==="270"),rc=a=>{let t=b8(a.rotate),e={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:t,"fa-rotate-by":a.rotate!=null&&!t,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(e).map(c=>e[c]?c:null).filter(c=>c!=null)},k3=new WeakSet,M8="fa-auto-css";function oc(a,t){if(!t.autoAddCss||k3.has(a))return;if(a.getElementById(M8)!=null){t.autoAddCss=!1,k3.add(a);return}let e=a.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",M8),e.innerHTML=v8.css();let c=a.head.childNodes,l=null;for(let n=c.length-1;n>-1;n--){let i=c[n],r=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(l=i)}a.head.insertBefore(e,l),t.autoAddCss=!1,k3.add(a)}var sc=a=>a.prefix!==void 0&&a.iconName!==void 0,fc=(a,t)=>sc(a)?a:Array.isArray(a)&&a.length===2?{prefix:a[0],iconName:a[1]}:{prefix:t,iconName:a},dc=(()=>{class a{stackItemSize=m("1x");size=m();_effect=X(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(c){return new(c||a)};static \u0275dir=x({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return a})(),uc=(()=>{class a{size=m();classes=S(()=>{let e=this.size(),c=e?{[`fa-${e}`]:!0}:{};return Z(g({},c),{"fa-stack":!0})});static \u0275fac=function(c){return new(c||a)};static \u0275cmp=U({type:a,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(c,l){c&2&&A(l.classes())},inputs:{size:[1,"size"]},ngContentSelectors:cc,decls:1,vars:0,template:function(c,l){c&1&&(l2(),a2(0))},encapsulation:2,changeDetection:0})}return a})(),xl=(()=>{class a{icon=c2();title=c2();animation=c2();mask=c2();flip=c2();size=c2();pull=c2();border=c2();inverse=c2();symbol=c2();rotate=c2();fixedWidth=c2();transform=c2();a11yRole=c2();renderedIconHTML=S(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return ic(),"";let c=this.findIconDefinition(e);if(!c)return"";let l=this.buildParams();oc(this.document,this.config);let n=z8(c,l);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=v(W2);sanitizer=v(X3);config=v(tc);iconLibrary=v(lc);stackItem=v(dc,{optional:!0});stack=v(uc,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(e){let c=fc(e,this.config.defaultPrefix);if("icon"in c)return c;let l=this.iconLibrary.getIconDefinition(c.prefix,c.iconName);return l??(nc(c),null)}buildParams(){let e=this.fixedWidth(),c={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e=="boolean"?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},l=this.transform(),n=typeof l=="string"?g8.transform(l):l,i=this.mask(),r=i!=null?this.findIconDefinition(i):null,o={},s=this.a11yRole();s!=null&&(o.role=s);let f={};return c.rotate!=null&&!b8(c.rotate)&&(f["--fa-rotate-angle"]=`${c.rotate}`),{title:this.title(),transform:n,classes:rc(c),mask:r??void 0,symbol:this.symbol(),attributes:o,styles:f}}static \u0275fac=function(c){return new(c||a)};static \u0275cmp=U({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(c,l){c&2&&(F1("innerHTML",l.renderedIconHTML(),R3),e2("title",l.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(c,l){},encapsulation:2,changeDetection:0})}return a})();var Sl=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({})}return a})();var kl={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]};var Al={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M345 273c9.4-9.4 9.4-24.6 0-33.9L201 95c-6.9-6.9-17.2-8.9-26.2-5.2S160 102.3 160 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L345 273zm7 143c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0z"]};var mc={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Dl=mc;var _l={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]};var Fl={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]};var Tl={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var El={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]};function D2(...a){if(a){let t=[];for(let e=0;e<a.length;e++){let c=a[e];if(!c)continue;let l=typeof c;if(l==="string"||l==="number")t.push(c);else if(l==="object"){let n=Array.isArray(c)?[D2(...c)]:Object.entries(c).map(([i,r])=>r?i:void 0);t=n.length?t.concat(n.filter(i=>!!i)):t}}return t.join(" ").trim()}}var pc=Object.defineProperty,L8=Object.getOwnPropertySymbols,hc=Object.prototype.hasOwnProperty,vc=Object.prototype.propertyIsEnumerable,C8=(a,t,e)=>t in a?pc(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,y8=(a,t)=>{for(var e in t||(t={}))hc.call(t,e)&&C8(a,e,t[e]);if(L8)for(var e of L8(t))vc.call(t,e)&&C8(a,e,t[e]);return a};function x8(...a){if(a){let t=[];for(let e=0;e<a.length;e++){let c=a[e];if(!c)continue;let l=typeof c;if(l==="string"||l==="number")t.push(c);else if(l==="object"){let n=Array.isArray(c)?[x8(...c)]:Object.entries(c).map(([i,r])=>r?i:void 0);t=n.length?t.concat(n.filter(i=>!!i)):t}}return t.join(" ").trim()}}function gc(a){return typeof a=="function"&&"call"in a&&"apply"in a}function zc({skipUndefined:a=!1},...t){return t?.reduce((e,c={})=>{for(let l in c){let n=c[l];if(!(a&&n===void 0))if(l==="style")e.style=y8(y8({},e.style),c.style);else if(l==="class"||l==="className")e[l]=x8(e[l],c[l]);else if(gc(n)){let i=e[l];e[l]=i?(...r)=>{i(...r),n(...r)}:n}else e[l]=n}return e},{})}function A3(...a){return zc({skipUndefined:!1},...a)}var v4={};function b1(a="pui_id_"){return Object.hasOwn(v4,a)||(v4[a]=0),v4[a]++,`${a}${v4[a]}`}var S8=(()=>{class a extends R{name="common";static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),J=new P("PARENT_INSTANCE"),W=(()=>{class a{document=v(W2);platformId=v(w1);el=v(M2);injector=v(N4);cd=v(O1);renderer=v(_2);config=v(u0);$parentInstance=v(J,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=v(S8);baseStyle=v(R);scopedStyleEl;parent=this.$params.parent;cn=D2;_themeScopedListener;themeChangeListenerMap=new Map;dt=m();unstyled=m();pt=m();ptOptions=m();$attrSelector=b1("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=q(void 0);directiveUnstyled=q(void 0);$unstyled=S(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=S(()=>U1(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>U1(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||U1(e,this.$params))}get $style(){return g(g({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){X(e=>{this.document&&!F4(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),X(e=>{this.document&&!F4(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...c){return Q3(e)?e(...c):A3(...c)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,c="",l={}){return Z3(e,c,l)}_hook(e,...c){if(!this.$hostName){let l=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),n=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);l?.(...c),n?.(...c)}}_load(){G2.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),G2.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);E2(e)&&this.baseStyle.load(e,g({name:"global"},this.$styleOptions))}_loadCoreStyles(){!G2.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),G2.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!P2.isStyleNameLoaded("common")){let{primitive:e,semantic:c,global:l,style:n}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,g({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(c?.css,g({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(l?.css,g({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(g({name:"global-style"},this.$styleOptions),n),P2.setLoadedStyleName("common")}if(!P2.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:c}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,g({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(g({name:`${this.$style?.name}-style`},this.$styleOptions),c),P2.setLoadedStyleName(this.$style?.name)}if(!P2.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,g({name:"layer-order",first:!0},this.$styleOptions)),P2.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:c}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},l=this.$style?.load(c,g({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=l?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,c=()=>{}){this._offThemeChangeListener(e),G2.clearLoadedStyleNames();let l=c.bind(this);this.themeChangeListenerMap.set(e,l),R4.on("theme:change",l)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(R4.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},c="",l={},n=!0){let i=/./g.test(c)&&!!l[c.split(".")[0]],{mergeSections:r=!0,mergeProps:o=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},s=n?i?this._useGlobalPT(this._getPTClassValue,c,l):this._useDefaultPT(this._getPTClassValue,c,l):void 0,f=i?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,c,Z(g({},l),{global:s||{}})),d=this._getPTDatasets(c);return r||!r&&f?o?this._mergeProps(o,s,f,d):g(g(g({},s),f),d):g(g({},f),d)}_getPTDatasets(e=""){let c="data-pc-",l=e==="root"&&E2(this.$pt()?.["data-pc-section"]);return e!=="transition"&&Z(g({},e==="root"&&Z(g({[`${c}name`]:j2(l?this.$pt()?.["data-pc-section"]:this.$name)},l&&{[`${c}extend`]:j2(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${c}section`]:j2(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,c,l){let n=this._getOptionValue(e,c,l);return $1(n)||J3(n)?{class:n}:n}_getPT(e,c="",l){let n=(i,r=!1)=>{let o=l?l(i):i,s=j2(c),f=j2(this.$hostName||this.$name);return(r?s!==f?o?.[s]:void 0:o?.[s])??o};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:n(e.originalValue),value:n(e.value)}:n(e,!0)}_usePT(e,c,l,n){let i=r=>c?.call(this,r,l,n);if(e?.hasOwnProperty("_usept")){let{mergeSections:r=!0,mergeProps:o=!1}=e._usept||this.config?.ptOptions()||{},s=i(e.originalValue),f=i(e.value);return s===void 0&&f===void 0?void 0:$1(f)?f:$1(s)?s:r||!r&&f?o?this._mergeProps(o,s,f):g(g({},s),f):f}return i(e)}_useGlobalPT(e,c,l){return this._usePT(this.$globalPT,e,c,l)}_useDefaultPT(e,c,l){return this._usePT(this.$defaultPT,e,c,l)}ptm(e="",c={}){return this._getPTValue(this.$pt(),e,g(g({},this.$params),c))}ptms(e,c={}){return e.reduce((l,n)=>(l=A3(l,this.ptm(n,c))||{},l),{})}ptmo(e={},c="",l={}){return this._getPTValue(e,c,g({instance:this},l),!1)}cx(e,c={}){return this.$unstyled()?void 0:D2(this._getOptionValue(this.$style.classes,e,g(g({},this.$params),c)))}sx(e="",c=!0,l={}){if(c){let n=this._getOptionValue(this.$style.inlineStyles,e,g(g({},this.$params),l)),i=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,g(g({},this.$params),l));return g(g({},i),n)}}static \u0275fac=function(c){return new(c||a)};static \u0275dir=x({type:a,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[D([S8,R]),N1]})}return a})();var N=(()=>{class a{el;renderer;pBind=m(void 0);_attrs=q(void 0);attrs=S(()=>this._attrs()||this.pBind());styles=S(()=>this.attrs()?.style);classes=S(()=>D2(this.attrs()?.class));listeners=[];constructor(e,c){this.el=e,this.renderer=c,X(()=>{let r=this.attrs()||{},{style:l,class:n}=r,i=P3(r,["style","class"]);for(let[o,s]of Object.entries(i))if(o.startsWith("on")&&typeof s=="function"){let f=o.slice(2).toLowerCase();if(!this.listeners.some(d=>d.eventName===f)){let d=this.renderer.listen(this.el.nativeElement,f,s);this.listeners.push({eventName:f,unlisten:d})}}else s==null?this.renderer.removeAttribute(this.el.nativeElement,o):(this.renderer.setAttribute(this.el.nativeElement,o,s.toString()),o in this.el.nativeElement&&(this.el.nativeElement[o]=s))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){K3(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(c){return new(c||a)(I(M2),I(_2))};static \u0275dir=x({type:a,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(c,l){c&2&&(P1(l.styles()),A(l.classes()))},inputs:{pBind:[1,"pBind"]}})}return a})(),e1=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({})}return a})();var Mc=["*"],bc={root:"p-fluid"},N8=(()=>{class a extends R{name="fluid";classes=bc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})();var w8=new P("FLUID_INSTANCE"),H2=(()=>{class a extends W{componentName="Fluid";$pcFluid=v(w8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=v(N8);static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=U({type:a,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(c,l){c&2&&A(l.cx("root"))},features:[D([N8,{provide:w8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),y],ngContentSelectors:Mc,decls:1,vars:0,template:function(c,l){c&1&&(l2(),a2(0))},dependencies:[n2],encapsulation:2,changeDetection:0})}return a})(),f9=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({imports:[H2]})}return a})();var D3=(()=>{class a{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,c){e&&c&&(e.classList?e.classList.add(c):e.className+=" "+c)}static addMultipleClasses(e,c){if(e&&c)if(e.classList){let l=c.trim().split(" ");for(let n=0;n<l.length;n++)e.classList.add(l[n])}else{let l=c.split(" ");for(let n=0;n<l.length;n++)e.className+=" "+l[n]}}static removeClass(e,c){e&&c&&(e.classList?e.classList.remove(c):e.className=e.className.replace(new RegExp("(^|\\b)"+c.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,c){e&&c&&[c].flat().filter(Boolean).forEach(l=>l.split(" ").forEach(n=>this.removeClass(e,n)))}static hasClass(e,c){return e&&c?e.classList?e.classList.contains(c):new RegExp("(^| )"+c+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(c){return c!==e})}static find(e,c){return Array.from(e.querySelectorAll(c))}static findSingle(e,c){return this.isElement(e)?e.querySelector(c):null}static index(e){let c=e.parentNode.childNodes,l=0;for(var n=0;n<c.length;n++){if(c[n]==e)return l;c[n].nodeType==1&&l++}return-1}static indexWithinGroup(e,c){let l=e.parentNode?e.parentNode.childNodes:[],n=0;for(var i=0;i<l.length;i++){if(l[i]==e)return n;l[i].attributes&&l[i].attributes[c]&&l[i].nodeType==1&&n++}return-1}static appendOverlay(e,c,l="self"){l!=="self"&&e&&c&&this.appendChild(e,c)}static alignOverlay(e,c,l="self",n=!0){e&&c&&(n&&(e.style.minWidth=`${a.getOuterWidth(c)}px`),l==="self"?this.relativePosition(e,c):this.absolutePosition(e,c))}static relativePosition(e,c,l=!0){let n=O=>{if(O)return getComputedStyle(O).getPropertyValue("position")==="relative"?O:n(O.parentElement)},i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=c.offsetHeight,o=c.getBoundingClientRect(),s=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),d=this.getViewport(),p=n(e)?.getBoundingClientRect()||{top:-1*s,left:-1*f},C,b,T="top";o.top+r+i.height>d.height?(C=o.top-p.top-i.height,T="bottom",o.top+C<0&&(C=-1*o.top)):(C=r+o.top-p.top,T="top");let E=o.left+i.width-d.width,G=o.left-p.left;if(i.width>d.width?b=(o.left-p.left)*-1:E>0?b=G-E:b=o.left-p.left,e.style.top=C+"px",e.style.left=b+"px",e.style.transformOrigin=T,l){let O=c0(/-anchor-gutter$/)?.value;e.style.marginTop=T==="bottom"?`calc(${O??"2px"} * -1)`:O??""}}static absolutePosition(e,c,l=!0){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=n.height,r=n.width,o=c.offsetHeight,s=c.offsetWidth,f=c.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),C,b;f.top+o+i>p.height?(C=f.top+d-i,e.style.transformOrigin="bottom",C<0&&(C=d)):(C=o+f.top+d,e.style.transformOrigin="top"),f.left+r>p.width?b=Math.max(0,f.left+h+s-r):b=f.left+h,e.style.top=C+"px",e.style.left=b+"px",l&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,c=[]){return e.parentNode===null?c:this.getParents(e.parentNode,c.concat([e.parentNode]))}static getScrollableParents(e){let c=[];if(e){let l=this.getParents(e),n=/(auto|scroll)/,i=r=>{let o=window.getComputedStyle(r,null);return n.test(o.getPropertyValue("overflow"))||n.test(o.getPropertyValue("overflowX"))||n.test(o.getPropertyValue("overflowY"))};for(let r of l){let o=r.nodeType===1&&r.dataset.scrollselectors;if(o){let s=o.split(",");for(let f of s){let d=this.findSingle(r,f);d&&i(d)&&c.push(d)}}r.nodeType!==9&&i(r)&&c.push(r)}}return c}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let c=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",c}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let c=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",c}static getHiddenElementDimensions(e){let c={};return e.style.visibility="hidden",e.style.display="block",c.width=e.offsetWidth,c.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",c}static scrollInView(e,c){let l=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=l?parseFloat(l):0,i=getComputedStyle(e).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,o=e.getBoundingClientRect(),f=c.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-n-r,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(c);f<0?e.scrollTop=d+f:f+p>h&&(e.scrollTop=d+f-h+p)}static fadeIn(e,c){e.style.opacity=0;let l=+new Date,n=0,i=function(){n=+e.style.opacity.replace(",",".")+(new Date().getTime()-l)/c,e.style.opacity=n,l=+new Date,+n<1&&(window.requestAnimationFrame?window.requestAnimationFrame(i):setTimeout(i,16))};i()}static fadeOut(e,c){var l=1,n=50,i=c,r=n/i;let o=setInterval(()=>{l=l-r,l<=0&&(l=0,clearInterval(o)),e.style.opacity=l},n)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,c){var l=Element.prototype,n=l.matches||l.webkitMatchesSelector||l.mozMatchesSelector||l.msMatchesSelector||function(i){return[].indexOf.call(document.querySelectorAll(i),this)!==-1};return n.call(e,c)}static getOuterWidth(e,c){let l=e.offsetWidth;if(c){let n=getComputedStyle(e);l+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return l}static getHorizontalPadding(e){let c=getComputedStyle(e);return parseFloat(c.paddingLeft)+parseFloat(c.paddingRight)}static getHorizontalMargin(e){let c=getComputedStyle(e);return parseFloat(c.marginLeft)+parseFloat(c.marginRight)}static innerWidth(e){let c=e.offsetWidth,l=getComputedStyle(e);return c+=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight),c}static width(e){let c=e.offsetWidth,l=getComputedStyle(e);return c-=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight),c}static getInnerHeight(e){let c=e.offsetHeight,l=getComputedStyle(e);return c+=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),c}static getOuterHeight(e,c){let l=e.offsetHeight;if(c){let n=getComputedStyle(e);l+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return l}static getHeight(e){let c=e.offsetHeight,l=getComputedStyle(e);return c-=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)+parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),c}static getWidth(e){let c=e.offsetWidth,l=getComputedStyle(e);return c-=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)+parseFloat(l.borderLeftWidth)+parseFloat(l.borderRightWidth),c}static getViewport(){let e=window,c=document,l=c.documentElement,n=c.getElementsByTagName("body")[0],i=e.innerWidth||l.clientWidth||n.clientWidth,r=e.innerHeight||l.clientHeight||n.clientHeight;return{width:i,height:r}}static getOffset(e){var c=e.getBoundingClientRect();return{top:c.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:c.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,c){let l=e.parentNode;if(!l)throw"Can't replace element";return l.replaceChild(c,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,c=e.indexOf("MSIE ");if(c>0)return!0;var l=e.indexOf("Trident/");if(l>0){var n=e.indexOf("rv:");return!0}var i=e.indexOf("Edge/");return i>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,c){if(this.isElement(c))c.appendChild(e);else if(c&&c.el&&c.el.nativeElement)c.el.nativeElement.appendChild(e);else throw"Cannot append "+c+" to "+e}static removeChild(e,c){if(this.isElement(c))c.removeChild(e);else if(c.el&&c.el.nativeElement)c.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+c}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let c=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(c.borderLeftWidth)-parseFloat(c.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let c=document.createElement("div");c.className="p-scrollbar-measure",document.body.appendChild(c);let l=c.offsetWidth-c.clientWidth;return document.body.removeChild(c),this.calculatedScrollbarWidth=l,l}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let c=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=c,c}static invokeElementMethod(e,c,l){e[c].apply(e,l)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),c=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:c[1]||"",version:c[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,c){e&&document.activeElement!==e&&e.focus(c)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,c=""){let l=this.find(e,this.getFocusableSelectorString(c)),n=[];for(let i of l){let r=getComputedStyle(i);this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden"&&n.push(i)}return n}static getFocusableElement(e,c=""){let l=this.findSingle(e,this.getFocusableSelectorString(c));if(l){let n=getComputedStyle(l);if(this.isVisible(l)&&n.display!="none"&&n.visibility!="hidden")return l}return null}static getFirstFocusableElement(e,c=""){let l=this.getFocusableElements(e,c);return l.length>0?l[0]:null}static getLastFocusableElement(e,c){let l=this.getFocusableElements(e,c);return l.length>0?l[l.length-1]:null}static getNextFocusableElement(e,c=!1){let l=a.getFocusableElements(e),n=0;if(l&&l.length>0){let i=l.indexOf(l[0].ownerDocument.activeElement);c?i==-1||i===0?n=l.length-1:n=i-1:i!=-1&&i!==l.length-1&&(n=i+1)}return l[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,c){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return c?.nextElementSibling;case"@prev":return c?.previousElementSibling;case"@parent":return c?.parentElement;case"@grandparent":return c?.parentElement?.parentElement;default:let l=typeof e;if(l==="string")return document.querySelector(e);if(l==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let i=(r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e;return i&&i.nodeType===9||this.isExist(i)?i:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,c){if(e){let l=e.getAttribute(c);return isNaN(l)?l==="true"||l==="false"?l==="true":l:+l}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,c={},...l){if(e){let n=document.createElement(e);return this.setAttributes(n,c),n.append(...l),n}}static setAttribute(e,c="",l){this.isElement(e)&&l!==null&&l!==void 0&&e.setAttribute(c,l)}static setAttributes(e,c={}){if(this.isElement(e)){let l=(n,i)=>{let r=e?.$attrs?.[n]?[e?.$attrs?.[n]]:[];return[i].flat().reduce((o,s)=>{if(s!=null){let f=typeof s;if(f==="string"||f==="number")o.push(s);else if(f==="object"){let d=Array.isArray(s)?l(n,s):Object.entries(s).map(([h,p])=>n==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);o=d.length?o.concat(d.filter(h=>!!h)):o}}return o},r)};Object.entries(c).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),i):n==="pBind"?this.setAttributes(e,i):(i=n==="class"?[...new Set(l("class",i))].join(" ").trim():n==="style"?l("style",i).join(";").trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=i),e.setAttribute(n,i))}})}}static isFocusableElement(e,c=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${c}`):!1}}return a})();function v9(){e0({variableName:H4("scrollbar.width").name})}function g9(){a0({variableName:H4("scrollbar.width").name})}var g4=class{element;listener;scrollableParents;constructor(t,e=()=>{}){this.element=t,this.listener=e}bindScrollListener(){this.scrollableParents=D3.getScrollableParents(this.element);for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var k8=(()=>{class a extends W{autofocus=!1;focused=!1;platformId=v(w1);document=v(W2);host=v(M2);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){T2(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=D3.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[y]})}return a})();var A8=`
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
`;var Lc=`
    ${A8}

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
`,Cc={root:({instance:a})=>{let t=typeof a.value=="function"?a.value():a.value,e=typeof a.size=="function"?a.size():a.size,c=typeof a.badgeSize=="function"?a.badgeSize():a.badgeSize,l=typeof a.severity=="function"?a.severity():a.severity;return["p-badge p-component",{"p-badge-circle":E2(t)&&String(t).length===1,"p-badge-dot":Y3(t),"p-badge-sm":e==="small"||c==="small","p-badge-lg":e==="large"||c==="large","p-badge-xl":e==="xlarge"||c==="xlarge","p-badge-info":l==="info","p-badge-success":l==="success","p-badge-warn":l==="warn","p-badge-danger":l==="danger","p-badge-secondary":l==="secondary","p-badge-contrast":l==="contrast"}]}},D8=(()=>{class a extends R{name="badge";style=Lc;classes=Cc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})();var _8=new P("BADGE_INSTANCE");var _3=(()=>{class a extends W{componentName="Badge";$pcBadge=v(_8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=m();badgeSize=m();size=m();severity=m();value=m();badgeDisabled=m(!1,{transform:k});_componentStyle=v(D8);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=U({type:a,selectors:[["p-badge"]],hostVars:5,hostBindings:function(c,l){c&2&&(e2("data-p",l.dataP),A(l.cn(l.cx("root"),l.styleClass())),W3("display",l.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[D([D8,{provide:_8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),y],decls:1,vars:1,template:function(c,l){c&1&&B1(0),c&2&&I1(l.value())},dependencies:[n2,o2,e1],encapsulation:2,changeDetection:0})}return a})(),F8=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({imports:[_3,o2,o2]})}return a})();var xc=["*"],Sc=`
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
`,T8=(()=>{class a extends R{name="baseicon";css=Sc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var z4=(()=>{class a extends W{spin=!1;_componentStyle=v(T8);getClassNames(){return D2("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=U({type:a,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(c,l){c&2&&A(l.getClassNames())},inputs:{spin:[2,"spin","spin",k]},features:[D([T8]),y],ngContentSelectors:xc,decls:1,vars:0,template:function(c,l){c&1&&(l2(),a2(0))},encapsulation:2,changeDetection:0})}return a})();var Nc=["data-p-icon","spinner"],E8=(()=>{class a extends z4{pathId;onInit(){this.pathId="url(#"+b1()+")"}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=U({type:a,selectors:[["","data-p-icon","spinner"]],features:[y],attrs:Nc,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(c,l){c&1&&($2(),w4(0,"g"),l1(1,"path",0),k4(),w4(2,"defs")(3,"clipPath",1),l1(4,"rect",2),k4()()),c&2&&(e2("clip-path",l.pathId),j(3),F1("id",l.pathId))},encapsulation:2})}return a})();var wc=["data-p-icon","times"],nn=(()=>{class a extends z4{static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=U({type:a,selectors:[["","data-p-icon","times"]],features:[y],attrs:wc,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(c,l){c&1&&($2(),l1(0,"path",0))},encapsulation:2})}return a})();var P8=`
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
`;var kc=`
    ${P8}

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
`,Ac={root:"p-ink"},B8=(()=>{class a extends R{name="ripple";style=kc;classes=Ac;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})();var I8=(()=>{class a extends W{componentName="Ripple";zone=v(S1);_componentStyle=v(B8);animationListener;mouseDownListener;timeout;constructor(){super(),X(()=>{T2(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let c=this.getInk();if(!c||this.document.defaultView?.getComputedStyle(c,null).display==="none")return;if(!this.$unstyled()&&x2(c,"p-ink-active"),c.setAttribute("data-p-ink-active","false"),!P4(c)&&!B4(c)){let r=Math.max(W1(this.el.nativeElement),r0(this.el.nativeElement));c.style.height=r+"px",c.style.width=r+"px"}let l=i0(this.el.nativeElement),n=e.pageX-l.left+this.document.body.scrollTop-B4(c)/2,i=e.pageY-l.top+this.document.body.scrollLeft-P4(c)/2;this.renderer.setStyle(c,"top",i+"px"),this.renderer.setStyle(c,"left",n+"px"),!this.$unstyled()&&i1(c,"p-ink-active"),c.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&(!this.$unstyled()&&x2(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let c=0;c<e.length;c++)if(typeof e[c].className=="string"&&e[c].className.indexOf("p-ink")!==-1)return e[c];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&x2(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&x2(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,o0(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(c){return new(c||a)};static \u0275dir=x({type:a,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[D([B8]),y]})}return a})();var V8=`
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
`;var _c=["content"],Fc=["loadingicon"],Tc=["icon"],Ec=["*"],H8=(a,t)=>({class:a,pt:t});function Pc(a,t){a&1&&n1(0)}function Bc(a,t){if(a&1&&t1(0,"span",7),a&2){let e=V(3);A(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),w("pBind",e.ptm("loadingIcon")),e2("aria-hidden",!0)}}function Ic(a,t){if(a&1&&($2(),t1(0,"svg",8)),a&2){let e=V(3);A(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),w("pBind",e.ptm("loadingIcon"))("spin",!0),e2("aria-hidden",!0)}}function Vc(a,t){if(a&1&&(D1(0),s2(1,Bc,1,4,"span",3)(2,Ic,1,5,"svg",6),_1()),a&2){let e=V(2);j(),w("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),j(),w("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function Oc(a,t){}function Rc(a,t){if(a&1&&s2(0,Oc,0,0,"ng-template",9),a&2){let e=V(2);w("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Hc(a,t){if(a&1&&(D1(0),s2(1,Vc,3,2,"ng-container",2)(2,Rc,1,1,null,5),_1()),a&2){let e=V();j(),w("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),j(),w("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",A4(3,H8,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Uc(a,t){if(a&1&&t1(0,"span",7),a&2){let e=V(2);A(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),w("pBind",e.ptm("icon")),e2("data-p",e.dataIconP)}}function $c(a,t){}function Wc(a,t){if(a&1&&s2(0,$c,0,0,"ng-template",9),a&2){let e=V(2);w("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function jc(a,t){if(a&1&&(D1(0),s2(1,Uc,1,4,"span",3)(2,Wc,1,1,null,5),_1()),a&2){let e=V();j(),w("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),j(),w("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",A4(3,H8,e.cx("icon"),e.ptm("icon")))}}function Gc(a,t){if(a&1&&(F2(0,"span",7),B1(1),c1()),a&2){let e=V();A(e.cx("label")),w("pBind",e.ptm("label")),e2("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),j(),I1(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function qc(a,t){if(a&1&&t1(0,"p-badge",10),a&2){let e=V();w("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Xc={root:({instance:a})=>["p-button p-component",{"p-button-icon-only":a.hasIcon&&!a.label&&!a.buttonProps?.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-button-loading":a.loading||a.buttonProps?.loading,"p-button-link":a.link||a.buttonProps?.link,[`p-button-${a.severity||a.buttonProps?.severity}`]:a.severity||a.buttonProps?.severity,"p-button-raised":a.raised||a.buttonProps?.raised,"p-button-rounded":a.rounded||a.buttonProps?.rounded,"p-button-text":a.text||a.variant==="text"||a.buttonProps?.text||a.buttonProps?.variant==="text","p-button-outlined":a.outlined||a.variant==="outlined"||a.buttonProps?.outlined||a.buttonProps?.variant==="outlined","p-button-sm":a.size==="small"||a.buttonProps?.size==="small","p-button-lg":a.size==="large"||a.buttonProps?.size==="large","p-button-plain":a.plain||a.buttonProps?.plain,"p-button-fluid":a.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:a})=>["p-button-icon",{[`p-button-icon-${a.iconPos||a.buttonProps?.iconPos}`]:a.label||a.buttonProps?.label,"p-button-icon-left":(a.iconPos==="left"||a.buttonProps?.iconPos==="left")&&a.label||a.buttonProps?.label,"p-button-icon-right":(a.iconPos==="right"||a.buttonProps?.iconPos==="right")&&a.label||a.buttonProps?.label,"p-button-icon-top":(a.iconPos==="top"||a.buttonProps?.iconPos==="top")&&a.label||a.buttonProps?.label,"p-button-icon-bottom":(a.iconPos==="bottom"||a.buttonProps?.iconPos==="bottom")&&a.label||a.buttonProps?.label},a.icon,a.buttonProps?.icon],spinnerIcon:({instance:a})=>Object.entries(a.cx("icon")).filter(([,t])=>!!t).reduce((t,[e])=>t+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},O8=(()=>{class a extends R{name="button";style=V8;classes=Xc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})();var R8=new P("BUTTON_INSTANCE");var Yc=(()=>{class a extends W{componentName="Button";hostName="";$pcButton=v(R8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});_componentStyle=v(O8);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=m(void 0,{transform:k});onClick=new B;onFocus=new B;onBlur=new B;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=v(H2,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=U({type:a,selectors:[["p-button"]],contentQueries:function(c,l,n){if(c&1&&T1(n,_c,5)(n,Fc,5)(n,Tc,5)(n,G1,4),c&2){let i;p2(i=h2())&&(l.contentTemplate=i.first),p2(i=h2())&&(l.loadingIconTemplate=i.first),p2(i=h2())&&(l.iconTemplate=i.first),p2(i=h2())&&(l.templates=i)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",k],raised:[2,"raised","raised",k],rounded:[2,"rounded","rounded",k],text:[2,"text","text",k],plain:[2,"plain","plain",k],outlined:[2,"outlined","outlined",k],link:[2,"link","link",k],tabindex:[2,"tabindex","tabindex",G3],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",k],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",k],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[D([O8,{provide:R8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),y],ngContentSelectors:Ec,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(c,l){c&1&&(l2(),F2(0,"button",0),f2("click",function(i){return l.onClick.emit(i)})("focus",function(i){return l.onFocus.emit(i)})("blur",function(i){return l.onBlur.emit(i)}),a2(1),s2(2,Pc,1,0,"ng-container",1)(3,Hc,3,6,"ng-container",2)(4,jc,3,6,"ng-container",2)(5,Gc,2,6,"span",3)(6,qc,1,4,"p-badge",4),c1()),c&2&&(A(l.cn(l.cx("root"),l.styleClass,l.buttonProps==null?null:l.buttonProps.styleClass)),w("ngStyle",l.style||(l.buttonProps==null?null:l.buttonProps.style))("disabled",l.disabled||l.loading||(l.buttonProps==null?null:l.buttonProps.disabled))("pAutoFocus",l.autofocus||(l.buttonProps==null?null:l.buttonProps.autofocus))("pBind",l.ptm("root")),e2("type",l.type||(l.buttonProps==null?null:l.buttonProps.type))("aria-label",l.ariaLabel||(l.buttonProps==null?null:l.buttonProps.ariaLabel))("tabindex",l.tabindex||(l.buttonProps==null?null:l.buttonProps.tabindex))("data-p",l.dataP)("data-p-disabled",l.disabled||l.loading||(l.buttonProps==null?null:l.buttonProps.disabled))("data-p-severity",l.severity||(l.buttonProps==null?null:l.buttonProps.severity)),j(2),w("ngTemplateOutlet",l.contentTemplate||l._contentTemplate),j(),w("ngIf",l.loading||(l.buttonProps==null?null:l.buttonProps.loading)),j(),w("ngIf",!(l.loading||l.buttonProps!=null&&l.buttonProps.loading)),j(),w("ngIf",!l.contentTemplate&&!l._contentTemplate&&(l.label||(l.buttonProps==null?null:l.buttonProps.label))),j(),w("ngIf",!l.contentTemplate&&!l._contentTemplate&&(l.badge||(l.buttonProps==null?null:l.buttonProps.badge))))},dependencies:[n2,R1,H1,q3,I8,k8,E8,F8,_3,o2,N],encapsulation:2,changeDetection:0})}return a})(),jn=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({imports:[n2,Yc,o2,o2]})}return a})();var M4=(()=>{class a extends W{modelValue=q(void 0);$filled=S(()=>E2(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,features:[y]})}return a})();var U8=`
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
`;var Qc=`
    ${U8}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Kc={root:({instance:a})=>["p-inputtext p-component",{"p-filled":a.$filled(),"p-inputtext-sm":a.pSize==="small","p-inputtext-lg":a.pSize==="large","p-invalid":a.invalid(),"p-variant-filled":a.$variant()==="filled","p-inputtext-fluid":a.hasFluid}]},$8=(()=>{class a extends R{name="inputtext";style=Qc;classes=Kc;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})();var W8=new P("INPUTTEXT_INSTANCE"),mi=(()=>{class a extends M4{componentName="InputText";hostName="";ptInputText=m();pInputTextPT=m();pInputTextUnstyled=m();bindDirectiveInstance=v(N,{self:!0});$pcInputText=v(W8,{optional:!0,skipSelf:!0})??void 0;ngControl=v(B2,{optional:!0,self:!0});pcFluid=v(H2,{optional:!0,host:!0,skipSelf:!0});pSize;variant=m();fluid=m(void 0,{transform:k});invalid=m(void 0,{transform:k});$variant=S(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=v($8);constructor(){super(),X(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),X(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(c){return new(c||a)};static \u0275dir=x({type:a,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(c,l){c&1&&f2("input",function(){return l.onInput()}),c&2&&(e2("data-p",l.dataP),A(l.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[D([$8,{provide:W8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),y]})}return a})(),pi=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({})}return a})();var j8=`
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
`;var Zc=["*"],Jc=`
    ${j8}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,et={root:({instance:a})=>["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]},G8=(()=>{class a extends R{name="floatlabel";style=Jc;classes=et;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})();var q8=new P("FLOATLABEL_INSTANCE"),Di=(()=>{class a extends W{componentName="FloatLabel";_componentStyle=v(G8);$pcFloatLabel=v(q8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275cmp=U({type:a,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(c,l){c&2&&A(l.cx("root"))},inputs:{variant:"variant"},features:[D([G8,{provide:q8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),y],ngContentSelectors:Zc,decls:1,vars:0,template:function(c,l){c&1&&(l2(),a2(0))},dependencies:[n2,o2,e1],encapsulation:2,changeDetection:0})}return a})();var X8=(()=>{class a extends M4{required=m(void 0,{transform:k});invalid=m(void 0,{transform:k});disabled=m(void 0,{transform:k});name=m();_disabled=q(!1);$disabled=S(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,c){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[y]})}return a})();var Ri=(()=>{class a extends X8{pcFluid=v(H2,{optional:!0,host:!0,skipSelf:!0});fluid=m(void 0,{transform:k});variant=m();size=m();inputSize=m();pattern=m();min=m();max=m();step=m();minlength=m();maxlength=m();$variant=S(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275dir=x({type:a,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[y]})}return a})();var at=Object.defineProperty,Y8=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,Q8=(a,t,e)=>t in a?at(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,K8=(a,t)=>{for(var e in t||(t={}))ct.call(t,e)&&Q8(a,e,t[e]);if(Y8)for(var e of Y8(t))tt.call(t,e)&&Q8(a,e,t[e]);return a},lt=(a,t,e)=>new Promise((c,l)=>{var n=o=>{try{r(e.next(o))}catch(s){l(s)}},i=o=>{try{r(e.throw(o))}catch(s){l(s)}},r=o=>o.done?c(o.value):Promise.resolve(o.value).then(n,i);r((e=e.apply(a,t)).next())}),b4="animation",L1="transition";function nt(a){return a?a.disabled||!!(a.safe&&d0()):!1}function it(a,t){return a?K8(K8({},a),Object.entries(t).reduce((e,[c,l])=>{var n;return e[c]=(n=a[c])!=null?n:l,e},{})):t}function rt(a){let{name:t,enterClass:e,leaveClass:c}=a||{};return{enter:{from:e?.from||`${t}-enter-from`,to:e?.to||`${t}-enter-to`,active:e?.active||`${t}-enter-active`},leave:{from:c?.from||`${t}-leave-from`,to:c?.to||`${t}-leave-to`,active:c?.active||`${t}-leave-active`}}}function ot(a){return{enter:{onBefore:a?.onBeforeEnter,onStart:a?.onEnter,onAfter:a?.onAfterEnter,onCancelled:a?.onEnterCancelled},leave:{onBefore:a?.onBeforeLeave,onStart:a?.onLeave,onAfter:a?.onAfterLeave,onCancelled:a?.onLeaveCancelled}}}function st(a,t){let e=window.getComputedStyle(a),c=p=>{let C=e[`${p}Delay`],b=e[`${p}Duration`];return[C.split(", ").map(I4),b.split(", ").map(I4)]},[l,n]=c(L1),[i,r]=c(b4),o=Math.max(...n.map((p,C)=>p+l[C])),s=Math.max(...r.map((p,C)=>p+i[C])),f,d=0,h=0;return t===L1?o>0&&(f=L1,d=o,h=n.length):t===b4?s>0&&(f=b4,d=s,h=r.length):(d=Math.max(o,s),f=d>0?o>s?L1:b4:void 0,h=f?f===L1?n.length:r.length:0),{type:f,timeout:d,count:h}}function L4(a,t){return typeof a=="number"?a:typeof a=="object"&&a[t]!=null?a[t]:null}function ft(a,t=!0,e=!1){if(!t&&!e)return;let c=f0(a);t&&O4(a,"--pui-motion-height",c.height+"px"),e&&O4(a,"--pui-motion-width",c.width+"px")}var dt={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function F3(a,t){if(!a)throw new Error("Element is required.");let e={},c=!1,l={},n=null,i={},r=f=>{if(Object.assign(e,it(f,dt)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");i=ot(e),c=nt(e),l=rt(e),n=null},o=f=>lt(null,null,function*(){n?.();let{onBefore:d,onStart:h,onAfter:p,onCancelled:C}=i[f]||{},b={element:a};if(c){d?.(b),h?.(b),p?.(b);return}let{from:T,active:E,to:G}=l[f]||{};return ft(a,e.autoHeight,e.autoWidth),d?.(b),q1(a,T),q1(a,E),a.offsetHeight,V4(a,T),q1(a,G),h?.(b),new Promise(O=>{let y2=L4(e.duration,f),r2=()=>{V4(a,[G,E]),n=null},a1=()=>{r2(),p?.(b),O()};n=()=>{r2(),C?.(b),O()},mt(a,e.type,y2,a1)})});r(t);let s={enter:()=>e.enter?o("enter"):Promise.resolve(),leave:()=>e.leave?o("leave"):Promise.resolve(),cancel:()=>{n?.(),n=null},update:(f,d)=>{if(!f)throw new Error("Element is required.");a=f,s.cancel(),r(d)}};return e.appear&&s.enter(),s}var ut=0;function mt(a,t,e,c){let l=a._motionEndId=++ut,n=()=>{l===a._motionEndId&&c()};if(e!=null)return setTimeout(n,e);let{type:i,timeout:r,count:o}=st(a,t);if(!i){c();return}let s=i+"end",f=0,d=()=>{a.removeEventListener(s,h,!0),n()},h=p=>{p.target===a&&++f>=o&&d()};a.addEventListener(s,h,{capture:!0,once:!0}),setTimeout(()=>{f<o&&d()},r+1)}var pt=["*"];function ht(a,t){a&1&&a2(0)}var C4=new WeakMap;function C1(a,t){if(a)switch(C4.has(a)||C4.set(a,{display:a.style.display,visibility:a.style.visibility,maxHeight:a.style.maxHeight,overflow:a.style.overflow}),t){case"display":a.style.display="none";break;case"visibility":a.style.visibility="hidden",a.style.maxHeight="0",a.style.overflow="hidden";break}}function y4(a,t){if(!a)return;let e=C4.get(a)??a.style;switch(t){case"display":a.style.display=e?.display||"";break;case"visibility":a.style.visibility=e?.visibility||"",a.style.maxHeight=e?.maxHeight||"",a.style.overflow=e?.overflow||"";break}C4.delete(a)}var vt=`
    .p-motion {
        display: block;
    }
`,gt={root:"p-motion"},T3=(()=>{class a extends R{name="motion";style=vt;classes=gt;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})();var Z8=new P("MOTION_INSTANCE"),E3=(()=>{class a extends W{$pcMotion=v(Z8,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(N,{self:!0});onAfterViewChecked(){let c=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(g(g({},this.ptms(["host","root"])),c))}_componentStyle=v(T3);visible=m(!1);mountOnEnter=m(!0);unmountOnLeave=m(!0);name=m(void 0);type=m(void 0);safe=m(void 0);disabled=m(!1);appear=m(!1);enter=m(!0);leave=m(!0);duration=m(void 0);hideStrategy=m("display");enterFromClass=m(void 0);enterToClass=m(void 0);enterActiveClass=m(void 0);leaveFromClass=m(void 0);leaveToClass=m(void 0);leaveActiveClass=m(void 0);options=m({});onBeforeEnter=Q();onEnter=Q();onAfterEnter=Q();onEnterCancelled=Q();onBeforeLeave=Q();onLeave=Q();onAfterLeave=Q();onLeaveCancelled=Q();motionOptions=S(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=q(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),X(()=>{let e=this.hideStrategy();this.isInitialMount?(C1(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(C1(this.$el,e),this.rendered.set(!0))}),X(()=>{this.motion||(this.motion=F3(this.$el,this.motionOptions()))}),D4(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),c=this.hideStrategy();this.visible()?(await j1(),y4(this.$el,c),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(await j1(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(C1(this.$el,c),this.unmountOnLeave()&&(await j1(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let c=d2(this.motionOptions),l=L4(c.duration,e);if(l==null||!this.$el)return;let n=this.$el,i=`${l}ms`;c.type==="transition"?n.style.transitionDuration=i:n.style.animationDuration=i}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,y4(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(c){return new(c||a)};static \u0275cmp=U({type:a,selectors:[["p-motion"]],hostVars:2,hostBindings:function(c,l){c&2&&A(l.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[D([T3,{provide:Z8,useExisting:a},{provide:J,useExisting:a}]),t2([N]),y],ngContentSelectors:pt,decls:1,vars:1,template:function(c,l){c&1&&(l2(),k1(0,ht,1,0)),c&2&&A1(l.rendered()?0:-1)},dependencies:[n2,e1],encapsulation:2})}return a})(),J8=new P("MOTION_DIRECTIVE_INSTANCE"),cr=(()=>{class a extends W{$pcMotionDirective=v(J8,{optional:!0,skipSelf:!0})??void 0;visible=m(!1,{alias:"pMotion"});name=m(void 0,{alias:"pMotionName"});type=m(void 0,{alias:"pMotionType"});safe=m(void 0,{alias:"pMotionSafe"});disabled=m(!1,{alias:"pMotionDisabled"});appear=m(!1,{alias:"pMotionAppear"});enter=m(!0,{alias:"pMotionEnter"});leave=m(!0,{alias:"pMotionLeave"});duration=m(void 0,{alias:"pMotionDuration"});hideStrategy=m("display",{alias:"pMotionHideStrategy"});enterFromClass=m(void 0,{alias:"pMotionEnterFromClass"});enterToClass=m(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=m(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=m(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=m(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=m(void 0,{alias:"pMotionLeaveActiveClass"});options=m({},{alias:"pMotionOptions"});onBeforeEnter=Q({alias:"pMotionOnBeforeEnter"});onEnter=Q({alias:"pMotionOnEnter"});onAfterEnter=Q({alias:"pMotionOnAfterEnter"});onEnterCancelled=Q({alias:"pMotionOnEnterCancelled"});onBeforeLeave=Q({alias:"pMotionOnBeforeLeave"});onLeave=Q({alias:"pMotionOnLeave"});onAfterLeave=Q({alias:"pMotionOnAfterLeave"});onLeaveCancelled=Q({alias:"pMotionOnLeaveCancelled"});motionOptions=S(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),X(()=>{this.motion||(this.motion=F3(this.$el,this.motionOptions()))}),D4(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),c=this.hideStrategy();this.visible()?(y4(this.$el,c),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount?C1(this.$el,c):(this.applyMotionDuration("leave"),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&C1(this.$el,c)})),this.isInitialMount=!1})}applyMotionDuration(e){let c=d2(this.motionOptions),l=L4(c.duration,e);if(l==null||!this.$el)return;let n=this.$el,i=`${l}ms`;c.type==="transition"?n.style.transitionDuration=i:n.style.animationDuration=i}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,y4(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(c){return new(c||a)};static \u0275dir=x({type:a,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[D([T3,{provide:J8,useExisting:a},{provide:J,useExisting:a}]),y]})}return a})(),ee=(()=>{class a{static \u0275fac=function(c){return new(c||a)};static \u0275mod=$({type:a});static \u0275inj=H({imports:[E3]})}return a})();var U2=class a{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,c){return c?this.resolveFieldData(t,c)===this.resolveFieldData(e,c):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var c=Array.isArray(t),l=Array.isArray(e),n,i,r;if(c&&l){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!this.equalsByValue(t[n],e[n]))return!1;return!0}if(c!=l)return!1;var o=this.isDate(t),s=this.isDate(e);if(o!=s)return!1;if(o&&s)return t.getTime()==e.getTime();var f=t instanceof RegExp,d=e instanceof RegExp;if(f!=d)return!1;if(f&&d)return t.toString()==e.toString();var h=Object.keys(t);if(i=h.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[n]))return!1;for(n=i;n--!==0;)if(r=h[n],!this.equalsByValue(t[r],e[r]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let c=e.split("."),l=t;for(let n=0,i=c.length;n<i;++n){if(l==null)return null;l=l[c[n]]}return l}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,c){let l;t&&e!==c&&(c>=t.length&&(c%=t.length,e%=t.length),t.splice(c,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,c,l){if(c.length>0){let n=!1;for(let i=0;i<c.length;i++)if(this.findIndexInList(c[i],l)>e){c.splice(i,0,t),n=!0;break}n||c.push(t)}else c.push(t)}static findIndexInList(t,e){let c=-1;if(e){for(let l=0;l<e.length;l++)if(e[l]==t){c=l;break}}return c}static contains(t,e){if(t!=null&&e&&e.length){for(let c of e)if(this.equals(t,c))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,c,l=1){let n=-1,i=this.isEmpty(t),r=this.isEmpty(e);return i&&r?n=0:i?n=l:r?n=-l:typeof t=="string"&&typeof e=="string"?n=t.localeCompare(e,c,{numeric:!0}):n=t<e?-1:t>e?1:0,n}static sort(t,e,c=1,l,n=1){let i=a.compare(t,e,l,c),r=c;return(a.isEmpty(t)||a.isEmpty(e))&&(r=n===1?c:n),r*i}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return g(g({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let c=-1;if(this.isNotEmpty(t))try{c=t.findLastIndex(e)}catch{c=t.lastIndexOf([...t].reverse().find(e))}return c}static findLast(t,e){let c;if(this.isNotEmpty(t))try{c=t.findLast(e)}catch{c=[...t].reverse().find(e)}return c}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var c=Array.isArray(t),l=Array.isArray(e),n,i,r;if(c&&l){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!this.deepEquals(t[n],e[n]))return!1;return!0}if(c!=l)return!1;var o=t instanceof Date,s=e instanceof Date;if(o!=s)return!1;if(o&&s)return t.getTime()==e.getTime();var f=t instanceof RegExp,d=e instanceof RegExp;if(f!=d)return!1;if(f&&d)return t.toString()==e.toString();var h=Object.keys(t);if(i=h.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[n]))return!1;for(n=i;n--!==0;)if(r=h[n],!this.deepEquals(t[r],e[r]))return!1;return!0}return t!==t&&e!==e}static minifyCSS(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}static isString(t,e=!0){return typeof t=="string"&&(e||t!=="")}},ae=0;function lr(a="pn_id_"){return ae++,`${a}${ae}`}function Mt(){let a=[],t=(n,i)=>{let r=a.length>0?a[a.length-1]:{key:n,value:i},o=r.value+(r.key===n?0:i)+2;return a.push({key:n,value:o}),o},e=n=>{a=a.filter(i=>i.value!==n)},c=()=>a.length>0?a[a.length-1].value:0,l=n=>n&&parseInt(n.style.zIndex,10)||0;return{get:l,set:(n,i,r)=>{i&&(i.style.zIndex=String(t(n,r)))},clear:n=>{n&&(e(l(n)),n.style.zIndex="")},getCurrent:()=>c(),generateZIndex:t,revertZIndex:e}}var x4=Mt();var ce=["content"],bt=["overlay"],te=["*","*"],Lt=()=>({mode:null}),ie=a=>({$implicit:a}),Ct=a=>({mode:a});function yt(a,t){a&1&&n1(0)}function xt(a,t){if(a&1&&(a2(0),s2(1,yt,1,0,"ng-container",3)),a&2){let e=V();j(),w("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",V1(3,ie,j3(2,Lt)))}}function St(a,t){a&1&&n1(0)}function Nt(a,t){if(a&1){let e=U3();F2(0,"div",5,0),f2("click",function(){g2(e);let l=V(2);return z2(l.onOverlayClick())}),F2(2,"p-motion",6),f2("onBeforeEnter",function(l){g2(e);let n=V(2);return z2(n.onOverlayBeforeEnter(l))})("onEnter",function(l){g2(e);let n=V(2);return z2(n.onOverlayEnter(l))})("onAfterEnter",function(l){g2(e);let n=V(2);return z2(n.onOverlayAfterEnter(l))})("onBeforeLeave",function(l){g2(e);let n=V(2);return z2(n.onOverlayBeforeLeave(l))})("onLeave",function(l){g2(e);let n=V(2);return z2(n.onOverlayLeave(l))})("onAfterLeave",function(l){g2(e);let n=V(2);return z2(n.onOverlayAfterLeave(l))}),F2(3,"div",5,1),f2("click",function(l){g2(e);let n=V(2);return z2(n.onOverlayContentClick(l))}),a2(5,1),s2(6,St,1,0,"ng-container",3),c1()()()}if(a&2){let e=V(2);P1(e.sx("root")),A(e.cn(e.cx("root"),e.styleClass)),w("pBind",e.ptm("root")),j(2),w("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),j(),A(e.cn(e.cx("content"),e.contentStyleClass)),w("pBind",e.ptm("content")),j(3),w("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",V1(15,ie,V1(13,Ct,e.overlayMode)))}}function wt(a,t){if(a&1&&s2(0,Nt,7,17,"div",4),a&2){let e=V();w("ngIf",e.modalVisible)}}var kt={root:()=>({position:"absolute",top:"0"})},At=`
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
`,Dt={host:"p-overlay-host",root:({instance:a})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":a.modal,"p-overlay-center":a.modal&&a.overlayResponsiveDirection==="center","p-overlay-top":a.modal&&a.overlayResponsiveDirection==="top","p-overlay-top-start":a.modal&&a.overlayResponsiveDirection==="top-start","p-overlay-top-end":a.modal&&a.overlayResponsiveDirection==="top-end","p-overlay-bottom":a.modal&&a.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":a.modal&&a.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":a.modal&&a.overlayResponsiveDirection==="bottom-end","p-overlay-left":a.modal&&a.overlayResponsiveDirection==="left","p-overlay-left-start":a.modal&&a.overlayResponsiveDirection==="left-start","p-overlay-left-end":a.modal&&a.overlayResponsiveDirection==="left-end","p-overlay-right":a.modal&&a.overlayResponsiveDirection==="right","p-overlay-right-start":a.modal&&a.overlayResponsiveDirection==="right-start","p-overlay-right-end":a.modal&&a.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},le=(()=>{class a extends R{name="overlay";style=At;classes=Dt;inlineStyles=kt;static \u0275fac=(()=>{let e;return function(l){return(e||(e=L(a)))(l||a)}})();static \u0275prov=F({token:a,factory:a.\u0275fac})}return a})(),ne=new P("OVERLAY_INSTANCE"),kr=(()=>{class a extends W{overlayService;zone;componentName="Overlay";$pcOverlay=v(ne,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return U2.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return U2.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return U2.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return U2.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=m(void 0);inline=m(!1);motionOptions=m(void 0);computedMotionOptions=S(()=>g(g({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new B;onBeforeShow=new B;onShow=new B;onBeforeHide=new B;onHide=new B;onAnimationStart=new B;onAnimationDone=new B;onBeforeEnter=new B;onEnter=new B;onAfterEnter=new B;onBeforeLeave=new B;onLeave=new B;onAfterLeave=new B;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=m();$appendTo=S(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=v(le);bindDirectiveInstance=v(N,{self:!0});documentKeyboardListener;parentDragSubscription=null;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(T2(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return g(g({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return g(g({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return n0(this.target,this.el?.nativeElement)}constructor(e,c){super(),this.overlayService=e,this.zone=c}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,c=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),c&&E4(this.targetEl),this.modal&&i1(this.document?.body,"p-overflow-hidden")}hide(e,c=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),c&&E4(this.targetEl),this.modal&&x2(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=q(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),x4.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,c){this[e].emit(c),this.options&&this.options[e]&&this.options[e](c),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](c)}setZIndex(){this.autoZIndex&&x4.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?T4(this.document.body,this.overlayEl):T4(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=W1(this.targetEl)+"px",this.$appendTo()==="self"?l0(this.overlayEl,this.targetEl):t0(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!=="self"&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl)&&this.hide(this.overlayEl,!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new g4(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let l=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&l}):l)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!r1()}):!r1())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!r1()}):!r1())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),x4.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(c){return new(c||a)(I(s0),I(S1))};static \u0275cmp=U({type:a,selectors:[["p-overlay"]],contentQueries:function(c,l,n){if(c&1&&T1(n,ce,4)(n,G1,4),c&2){let i;p2(i=h2())&&(l.contentTemplate=i.first),p2(i=h2())&&(l.templates=i)}},viewQuery:function(c,l){if(c&1&&$3(bt,5)(ce,5),c&2){let n;p2(n=h2())&&(l.overlayViewChild=n.first),p2(n=h2())&&(l.contentViewChild=n.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[D([le,{provide:ne,useExisting:a},{provide:J,useExisting:a}]),t2([N]),y],ngContentSelectors:te,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(c,l){c&1&&(l2(te),k1(0,xt,2,5)(1,wt,1,1,"div",2)),c&2&&A1(l.inline()?0:1)},dependencies:[n2,R1,H1,o2,N,ee,E3],encapsulation:2,changeDetection:0})}return a})();export{L0 as a,C0 as b,B2 as c,Qt as d,Kt as e,Te as f,Be as g,Jt as h,el as i,xl as j,Sl as k,kl as l,Al as m,Dl as n,_l as o,Fl as p,Tl as q,El as r,b1 as s,J as t,W as u,D3 as v,v9 as w,g9 as x,g4 as y,k8 as z,N as A,e1 as B,_3 as C,F8 as D,f9 as E,z4 as F,E8 as G,nn as H,I8 as I,Yc as J,jn as K,X8 as L,Ri as M,mi as N,pi as O,E3 as P,cr as Q,ee as R,U2 as S,lr as T,x4 as U,kr as V,Di as W};
