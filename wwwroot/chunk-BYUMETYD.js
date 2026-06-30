import {V as Vn,M as M5,$ as $4,B as Bn,U as Un,P as Pi$1,E as Ei$1,L as L9,F as Fn,_ as _n,r as rn,l as ln,T as T0,a as an,c as cn,y as y5,v as vr,n as nn,z as z5,k as kr,H as Hr,o as o1,I,b as L,W,Q as Qr,d as ar,Z as Z8,e as co,O as Oo,q as q4,f as M4}from'./chunk-DIc0UlHL.js';import {g,F as Ft$1,U as Uo,V as VG,B as Bc,a as au,b as bp,Y as YM,c as cu,m as mD,z as z_,r as rM,n as n_,d as gD,e as zE,W as W_,o as oM,f as mn,$ as $t$1,i as iq,I as I$1,h as mu,u as uz,j as rq,k as oq,l as gs,p as Vc,q as cA,s as BE,t as uu,v as lu,w as VE,x as jM,y as nN,A as j0,Q as QE,C as IM,D as az,E as xt$1,G as su,H as EM,J as WI,K as b,L as yn,M as Bp,N as sz,O as cz,P as U,R as nq,S as sq,T as PM,X as XE,Z as qE,_ as aM,a0 as cM,a1 as hM,a2 as Ha,a3 as fu,a4 as fD,a5 as Gm,a6 as GE,a7 as Rm,a8 as xm,a9 as pN,aa as QM,ab as xp}from'./main-ILRVANDG.js';import {eye as C$1}from'./chunk-DqmIZI_F.js';import {eyeSlash as C}from'./chunk-BYlnnID-.js';var it=`
    .p-card {
        display: block;
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
        font-size: dt('card.subtitle.font.size');
        font-weight: dt('card.subtitle.font.weight');
    }
`;var ht=["header"],_t=["title"],yt=["subtitle"],vt=["content"],bt=["footer"],wt=["*",[["p-header"]],[["p-footer"]]],xt=["*","p-header","p-footer"];function Ct(t,o){t&1&&qE(0);}function Tt(t,o){if(t&1&&(Bc(0,"div",1),lu(1,1),VE(2,Ct,1,0,"ng-container",2),bp()),t&2){let e=EM();jM(e.cx("header")),zE("pBind",e.ptm("header")),n_(2),zE("ngTemplateOutlet",e.headerTemplate());}}function kt(t,o){if(t&1&&YM(0),t&2){let e=EM(2);xp(" ",e.header()," ");}}function Mt(t,o){t&1&&qE(0);}function St(t,o){if(t&1&&(Bc(0,"div",1),rM(1,kt,1,1),VE(2,Mt,1,0,"ng-container",2),bp()),t&2){let e=EM();jM(e.cx("title")),zE("pBind",e.ptm("title")),n_(),oM(e.showHeaderText()?1:-1),n_(),zE("ngTemplateOutlet",e.titleTemplate());}}function Dt(t,o){if(t&1&&YM(0),t&2){let e=EM(2);xp(" ",e.subheader()," ");}}function It(t,o){t&1&&qE(0);}function Et(t,o){if(t&1&&(Bc(0,"div",1),rM(1,Dt,1,1),VE(2,It,1,0,"ng-container",2),bp()),t&2){let e=EM();jM(e.cx("subtitle")),zE("pBind",e.ptm("subtitle")),n_(),oM(e.showSubheaderText()?1:-1),n_(),zE("ngTemplateOutlet",e.subtitleTemplate());}}function Nt(t,o){t&1&&qE(0);}function Pt(t,o){t&1&&qE(0);}function Ft(t,o){if(t&1&&(Bc(0,"div",1),lu(1,2),VE(2,Pt,1,0,"ng-container",2),bp()),t&2){let e=EM();jM(e.cx("footer")),zE("pBind",e.ptm("footer")),n_(2),zE("ngTemplateOutlet",e.footerTemplate());}}var Lt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},nt=(()=>{class t extends WI{name="card";style=it;classes=Lt;static \u0275fac=(()=>{let e;return function(i){return (e||(e=Vc(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ot=new I$1("CARD_INSTANCE"),ce=(()=>{class t extends I{componentName="Card";$pcCard=g(ot,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=g(L,{self:true});_componentStyle=g(nt);header=mu();subheader=mu();headerFacet=uz(rq,{descendants:false});footerFacet=uz(oq,{descendants:false});headerTemplate=uz("header",{descendants:false});titleTemplate=uz("title",{descendants:false});subtitleTemplate=uz("subtitle",{descendants:false});contentTemplate=uz("content",{descendants:false});footerTemplate=uz("footer",{descendants:false});hasHeader=gs(()=>!!(this.headerFacet()||this.headerTemplate()));hasTitle=gs(()=>!!(this.header()||this.titleTemplate()));hasSubtitle=gs(()=>!!(this.subheader()||this.subtitleTemplate()));hasFooter=gs(()=>!!(this.footerFacet()||this.footerTemplate()));showHeaderText=gs(()=>this.header()&&!this.titleTemplate());showSubheaderText=gs(()=>this.subheader()&&!this.subtitleTemplate());onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}getBlockableElement(){return this.el.nativeElement}static \u0275fac=(()=>{let e;return function(i){return (e||(e=Vc(t)))(i||t)}})();static \u0275cmp=Uo({type:t,selectors:[["p-card"]],contentQueries:function(n,i,c){n&1&&QE(c,i.headerFacet,rq,4)(c,i.footerFacet,oq,4)(c,i.headerTemplate,ht,4)(c,i.titleTemplate,_t,4)(c,i.subtitleTemplate,yt,4)(c,i.contentTemplate,vt,4)(c,i.footerTemplate,bt,4),n&2&&IM(7);},hostVars:2,hostBindings:function(n,i){n&2&&jM(i.cx("root"));},inputs:{header:[1,"header"],subheader:[1,"subheader"]},features:[nN([nt,{provide:ot,useExisting:t},{provide:W,useExisting:t}]),j0([L]),BE],ngContentSelectors:xt,decls:8,vars:11,consts:[[3,"pBind","class"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(n,i){n&1&&(uu(wt),rM(0,Tt,3,4,"div",0),Bc(1,"div",1),rM(2,St,3,5,"div",0),rM(3,Et,3,5,"div",0),Bc(4,"div",1),lu(5),VE(6,Nt,1,0,"ng-container",2),bp(),rM(7,Ft,3,4,"div",0),bp()),n&2&&(oM(i.hasHeader()?0:-1),n_(),jM(i.cx("body")),zE("pBind",i.ptm("body")),n_(),oM(i.hasTitle()?2:-1),n_(),oM(i.hasSubtitle()?3:-1),n_(),jM(i.cx("content")),zE("pBind",i.ptm("content")),n_(2),zE("ngTemplateOutlet",i.contentTemplate()),n_(),oM(i.hasFooter()?7:-1));},dependencies:[cA,iq,o1,L],encapsulation:2})}return t})(),at=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=mn({type:t});static \u0275inj=$t$1({imports:[ce,iq,o1,iq,o1]})}return t})();var Ot=(t,o)=>o[1].key||t;function Vt(t,o){if(t&1&&(Gm(),GE(0,"path")),t&2){let e=EM().$implicit;su("d",e[1].d)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("fill-rule",e[1].fillRule)("clip-rule",e[1].clipRule)("stroke",e[1].stroke)("stroke-width",e[1].strokeWidth)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity);}}function At(t,o){if(t&1&&(Gm(),GE(0,"circle")),t&2){let e=EM().$implicit;su("cx",e[1].cx)("cy",e[1].cy)("r",e[1].r)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function zt(t,o){if(t&1&&(Gm(),GE(0,"rect")),t&2){let e=EM().$implicit;su("x",e[1].x)("y",e[1].y)("width",e[1].width)("height",e[1].height)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Rt(t,o){if(t&1&&(Gm(),GE(0,"line")),t&2){let e=EM().$implicit;su("x1",e[1].x1)("y1",e[1].y1)("x2",e[1].x2)("y2",e[1].y2)("stroke",e[1].stroke)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity);}}function $t(t,o){if(t&1&&(Gm(),GE(0,"polyline")),t&2){let e=EM().$implicit;su("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Ht(t,o){if(t&1&&(Gm(),GE(0,"polygon")),t&2){let e=EM().$implicit;su("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function jt(t,o){if(t&1&&(Gm(),GE(0,"ellipse")),t&2){let e=EM().$implicit;su("cx",e[1].cx)("cy",e[1].cy)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Gt(t,o){if(t&1&&rM(0,Vt,1,9,":svg:path")(1,At,1,6,":svg:circle")(2,zt,1,9,":svg:rect")(3,Rt,1,7,":svg:line")(4,$t,1,4,":svg:polyline")(5,Ht,1,4,":svg:polygon")(6,jt,1,7,":svg:ellipse"),t&2){let e,n=o.$implicit;oM((e=n[0])==="path"?0:e==="circle"?1:e==="rect"?2:e==="line"?3:e==="polyline"?4:e==="polygon"?5:e==="ellipse"?6:-1);}}var rt=(()=>{class t extends M4{constructor(){super(),this._icon=C$1;}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Uo({type:t,selectors:[["svg","data-p-icon","eye"]],features:[BE],decls:2,vars:0,template:function(n,i){n&1&&aM(0,Gt,7,1,null,null,Ot),n&2&&cM(i.iconNodes());},encapsulation:2,changeDetection:1})}return t})();var Ut=(t,o)=>o[1].key||t;function Wt(t,o){if(t&1&&(Gm(),GE(0,"path")),t&2){let e=EM().$implicit;su("d",e[1].d)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("fill-rule",e[1].fillRule)("clip-rule",e[1].clipRule)("stroke",e[1].stroke)("stroke-width",e[1].strokeWidth)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity);}}function qt(t,o){if(t&1&&(Gm(),GE(0,"circle")),t&2){let e=EM().$implicit;su("cx",e[1].cx)("cy",e[1].cy)("r",e[1].r)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Qt(t,o){if(t&1&&(Gm(),GE(0,"rect")),t&2){let e=EM().$implicit;su("x",e[1].x)("y",e[1].y)("width",e[1].width)("height",e[1].height)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Kt(t,o){if(t&1&&(Gm(),GE(0,"line")),t&2){let e=EM().$implicit;su("x1",e[1].x1)("y1",e[1].y1)("x2",e[1].x2)("y2",e[1].y2)("stroke",e[1].stroke)("stroke-opacity",e[1].strokeOpacity)("opacity",e[1].opacity);}}function Zt(t,o){if(t&1&&(Gm(),GE(0,"polyline")),t&2){let e=EM().$implicit;su("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Yt(t,o){if(t&1&&(Gm(),GE(0,"polygon")),t&2){let e=EM().$implicit;su("points",e[1].points)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Jt(t,o){if(t&1&&(Gm(),GE(0,"ellipse")),t&2){let e=EM().$implicit;su("cx",e[1].cx)("cy",e[1].cy)("rx",e[1].rx)("ry",e[1].ry)("fill",e[1].fill)("fill-opacity",e[1].fillOpacity)("opacity",e[1].opacity);}}function Xt(t,o){if(t&1&&rM(0,Wt,1,9,":svg:path")(1,qt,1,6,":svg:circle")(2,Qt,1,9,":svg:rect")(3,Kt,1,7,":svg:line")(4,Zt,1,4,":svg:polyline")(5,Yt,1,4,":svg:polygon")(6,Jt,1,7,":svg:ellipse"),t&2){let e,n=o.$implicit;oM((e=n[0])==="path"?0:e==="circle"?1:e==="rect"?2:e==="line"?3:e==="polyline"?4:e==="polygon"?5:e==="ellipse"?6:-1);}}var st=(()=>{class t extends M4{constructor(){super(),this._icon=C;}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Uo({type:t,selectors:[["svg","data-p-icon","eye-slash"]],features:[BE],decls:2,vars:0,template:function(n,i){n&1&&aM(0,Xt,7,1,null,null,Ut),n&2&&cM(i.iconNodes());},encapsulation:2,changeDetection:1})}return t})();var oe=`
    .p-password {
        display: inline-flex;
        position: relative;
    }

    .p-password .p-password-overlay {
        min-width: 100%;
    }

    .p-password-meter {
        height: dt('password.meter.height');
        background: dt('password.meter.background');
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-label {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-weak {
        background: dt('password.strength.weak.background');
    }

    .p-password-meter-medium {
        background: dt('password.strength.medium.background');
    }

    .p-password-meter-strong {
        background: dt('password.strength.strong.background');
    }

    .p-password-meter-text {
        font-weight: dt('password.meter.text.font.weight');
        font-size: dt('password.meter.text.font.size');
    }

    .p-password-fluid {
        display: flex;
    }

    .p-password-fluid .p-password-input {
        width: 100%;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }

    .p-password-overlay {
        padding: dt('password.overlay.padding');
        background: dt('password.overlay.background');
        color: dt('password.overlay.color');
        border: 1px solid dt('password.overlay.border.color');
        box-shadow: dt('password.overlay.shadow');
        border-radius: dt('password.overlay.border.radius');
    }

    .p-password-content {
        display: flex;
        flex-direction: column;
        gap: dt('password.content.gap');
    }

    .p-password-toggle-mask-icon {
        inset-inline-end: dt('form.field.padding.x');
        color: dt('password.icon.color');
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * calc(dt('icon.size') / 2));
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-password-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * dt('icon.size') / 2);
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon {
        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-clear-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-clear-icon):has(.p-password-toggle-mask-icon)  .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));
    }

`;var ei=["content"],ti=["footer"],ii=["header"],ni=["clearicon"],oi=["hideicon"],ai=["showicon"],ri=["overlay"],si=["input"];function li(t,o){if(t&1){let e=hM();Gm(),Bc(0,"svg",8),cu("click",function(){Rm(e);let i=EM(2);return xm(i.clear())}),bp();}if(t&2){let e=EM(2);jM(e.cx("clearIcon")),zE("pBind",e.ptm("clearIcon"));}}function di(t,o){t&1&&qE(0);}function pi(t,o){if(t&1){let e=hM();rM(0,li,1,3,":svg:svg",5),Bc(1,"span",6),cu("click",function(){Rm(e);let i=EM();return xm(i.clear())}),VE(2,di,1,0,"ng-container",7),bp();}if(t&2){let e=EM();oM(e.clearIconTemplate()?-1:0),n_(),jM(e.cx("clearIcon")),zE("pBind",e.ptm("clearIcon")),n_(),zE("ngTemplateOutlet",e.clearIconTemplate());}}function ci(t,o){if(t&1){let e=hM();Gm(),Bc(0,"svg",11),cu("click",function(){Rm(e);let i=EM(3);return xm(i.onMaskToggle())}),bp();}if(t&2){let e=EM(3);jM(e.cx("maskIcon")),zE("pBind",e.ptm("maskIcon"));}}function mi(t,o){t&1&&qE(0);}function ui(t,o){if(t&1){let e=hM();Bc(0,"span",6),cu("click",function(){Rm(e);let i=EM(3);return xm(i.onMaskToggle())}),VE(1,mi,1,0,"ng-container",12),bp();}if(t&2){let e=EM(3);zE("pBind",e.ptm("maskIcon")),n_(),zE("ngTemplateOutlet",e.hideIconTemplate())("ngTemplateOutletContext",e.maskIconContext);}}function fi(t,o){if(t&1&&rM(0,ci,1,3,":svg:svg",9)(1,ui,2,3,"span",10),t&2){let e=EM(2);oM(e.hideIconTemplate()?1:0);}}function gi(t,o){if(t&1){let e=hM();Gm(),Bc(0,"svg",14),cu("click",function(){Rm(e);let i=EM(3);return xm(i.onMaskToggle())}),bp();}if(t&2){let e=EM(3);jM(e.cx("unmaskIcon")),zE("pBind",e.ptm("unmaskIcon"));}}function hi(t,o){t&1&&qE(0);}function _i(t,o){if(t&1){let e=hM();Bc(0,"span",6),cu("click",function(){Rm(e);let i=EM(3);return xm(i.onMaskToggle())}),VE(1,hi,1,0,"ng-container",12),bp();}if(t&2){let e=EM(3);zE("pBind",e.ptm("unmaskIcon")),n_(),zE("ngTemplateOutlet",e.showIconTemplate())("ngTemplateOutletContext",e.unmaskIconContext);}}function yi(t,o){if(t&1&&rM(0,gi,1,3,":svg:svg",13)(1,_i,2,3,"span",10),t&2){let e=EM(2);oM(e.showIconTemplate()?1:0);}}function vi(t,o){if(t&1&&rM(0,fi,2,1)(1,yi,2,1),t&2){let e=EM();oM(e.unmasked()?0:1);}}function bi(t,o){t&1&&qE(0);}function wi(t,o){t&1&&qE(0);}function xi(t,o){if(t&1&&VE(0,wi,1,0,"ng-container",7),t&2){let e=EM(2);zE("ngTemplateOutlet",e.contentTemplate());}}function Ci(t,o){if(t&1&&(Bc(0,"div",10)(1,"div",10),au(2,"div",10),bp(),Bc(3,"div",10),YM(4),bp()()),t&2){let e=EM(2);jM(e.cx("content")),zE("pBind",e.ptm("content")),n_(),jM(e.cx("meter")),zE("pBind",e.ptm("meter")),n_(),jM(e.cx("meterLabel")),fu("width",e.meter?e.meter.width:""),zE("pBind",e.ptm("meterLabel")),su("data-p",e.meterDataP),n_(),jM(e.cx("meterText")),zE("pBind",e.ptm("meterText")),n_(),fD(e.infoText);}}function Ti(t,o){t&1&&qE(0);}function ki(t,o){if(t&1){let e=hM();Bc(0,"div",6),cu("click",function(i){Rm(e);let c=EM();return xm(c.onOverlayClick(i))}),VE(1,bi,1,0,"ng-container",7),rM(2,xi,1,1,"ng-container")(3,Ci,5,16,"div",15),VE(4,Ti,1,0,"ng-container",7),bp();}if(t&2){let e=EM();PM(e.sx("overlay")),jM(e.cx("overlay")),zE("pBind",e.ptm("overlay")),su("data-p",e.overlayDataP),n_(),zE("ngTemplateOutlet",e.headerTemplate()),n_(),oM(e.contentTemplate()?2:3),n_(2),zE("ngTemplateOutlet",e.footerTemplate());}}var Mi=`
${oe}

/* For PrimeNG */
.p-password-overlay {
    min-width: 100%;
}

p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: dt('inputtext.invalid.border.color');
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: dt('inputtext.focus.border.color');
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: dt('inputtext.invalid.placeholder.color');
}

.p-password-fluid-directive {
    width: 100%;
}

/* Animations */
.p-password-enter {
    animation: p-animate-password-enter 300ms cubic-bezier(.19,1,.22,1);
}

.p-password-leave {
    animation: p-animate-password-leave 300ms cubic-bezier(.19,1,.22,1);
}

@keyframes p-animate-password-enter {
    from {
        opacity: 0;
        transform: scale(0.93);
    }
}

@keyframes p-animate-password-leave {
    to {
        opacity: 0;
        transform: scale(0.93);
    }
}
`,Si={root:({instance:t})=>({position:t.$appendTo()==="self"?"relative":void 0}),overlay:{position:"absolute"}},Di={root:({instance:t})=>["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()==="filled","p-inputwrapper-focus":t.focused,"p-password-fluid":t.hasFluid}],rootDirective:({instance:t})=>["p-password p-inputtext p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()==="filled","p-password-fluid-directive":t.hasFluid}],pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:t})=>`p-password-meter-label ${t.meter?"p-password-meter-"+t.meter.strength:""}`,meterText:"p-password-meter-text",clearIcon:"p-password-clear-icon"},lt=(()=>{class t extends WI{name="password";style=Mi;classes=Di;inlineStyles=Si;static \u0275fac=(()=>{let e;return function(i){return (e||(e=Vc(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var dt=new I$1("PASSWORD_INSTANCE");var Ii={provide:q4,useExisting:Ha(()=>pt),multi:true},pt=(()=>{class t extends Qr{componentName="Password";bindDirectiveInstance=g(L,{self:true});$pcPassword=g(dt,{optional:true,skipSelf:true})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}ariaLabel=mu();ariaLabelledBy=mu();label=mu();promptLabel=mu();mediumRegex=mu("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");strongRegex=mu("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");weakLabel=mu();mediumLabel=mu();strongLabel=mu();inputId=mu();feedback=mu(true,{transform:yn});toggleMask=mu(void 0,{transform:yn});inputStyleClass=mu();inputStyle=mu();autocomplete=mu();placeholder=mu();showClear=mu(false,{transform:yn});autofocus=mu(void 0,{transform:yn});tabindex=mu(void 0,{transform:Bp});appendTo=mu("self");motionOptions=mu();overlayOptions=mu();onFocus=sz();onBlur=sz();onClear=sz();overlayViewChild=cz("overlay");inputViewChild=cz("input");contentTemplate=uz("content",{descendants:false});footerTemplate=uz("footer",{descendants:false});headerTemplate=uz("header",{descendants:false});clearIconTemplate=uz("clearicon",{descendants:false});hideIconTemplate=uz("hideicon",{descendants:false});showIconTemplate=uz("showicon",{descendants:false});$appendTo=gs(()=>this.appendTo()||this.config.overlayAppendTo());overlayVisible=U(false);meter;infoText;focused=false;unmasked=U(false);requiredAttr=gs(()=>this.required()?"":void 0);disabledAttr=gs(()=>this.$disabled()?"":void 0);inputType=gs(()=>this.unmasked()?"text":"password");get showClearIcon(){return this.showClear()&&this.value!=null}get maskIconContext(){return {class:this.cx("maskIcon")??""}}get unmaskIconContext(){return {class:this.cx("unmaskIcon")??""}}mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;value=null;translationSubscription;_componentStyle=g(lt);overlayService=g(nq);onInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex()),this.strongCheckRegExp=new RegExp(this.strongRegex()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"");});}onInput(e){this.value=e.target.value,this.onModelChange(this.value);}onInputFocus(e){this.focused=true,this.feedback()&&this.overlayVisible.set(true),this.onFocus.emit(e);}onInputBlur(e){this.focused=false,this.feedback()&&this.overlayVisible.set(false),this.onModelTouched(),this.onBlur.emit(e);}onKeyUp(e){if(this.feedback()){let n=e.target.value;if(this.updateUI(n),e.code==="Escape"){this.overlayVisible()&&this.overlayVisible.set(false);return}this.overlayVisible()||this.overlayVisible.set(true);}}updateUI(e){let n=null,i=null;switch(this.testStrength(e)){case 1:n=this.weakText(),i={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText(),i={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText(),i={strength:"strong",width:"100%"};break;default:n=this.promptText(),i=null;break}this.meter=i,this.infoText=n;}onMaskToggle(){this.unmasked.update(e=>!e);}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement});}testStrength(e){let n=0;return this.strongCheckRegExp?.test(e)?n=3:this.mediumCheckRegExp?.test(e)?n=2:e.length&&(n=1),n}promptText(){return this.promptLabel()||this.translate(sq.PASSWORD_PROMPT)}weakText(){return this.weakLabel()||this.translate(sq.WEAK)}mediumText(){return this.mediumLabel()||this.translate(sq.MEDIUM)}strongText(){return this.strongLabel()||this.translate(sq.STRONG)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit();}writeControlValue(e,n){e===void 0?this.value=null:this.value=e,this.feedback()&&this.updateUI(this.value||""),n(this.value);}onDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe();}get containerDataP(){return this.cn({fluid:this.hasFluid})}get meterDataP(){return this.cn({[this.meter?.strength]:this.meter?.strength})}get overlayDataP(){return this.cn({["overlay-"+this.$appendTo()]:"overlay-"+this.$appendTo()})}static \u0275fac=(()=>{let e;return function(i){return (e||(e=Vc(t)))(i||t)}})();static \u0275cmp=Uo({type:t,selectors:[["p-password"]],contentQueries:function(n,i,c){n&1&&QE(c,i.contentTemplate,ei,4)(c,i.footerTemplate,ti,4)(c,i.headerTemplate,ii,4)(c,i.clearIconTemplate,ni,4)(c,i.hideIconTemplate,oi,4)(c,i.showIconTemplate,ai,4),n&2&&IM(6);},viewQuery:function(n,i){n&1&&XE(i.overlayViewChild,ri,5)(i.inputViewChild,si,5),n&2&&IM(2);},hostVars:5,hostBindings:function(n,i){n&2&&(su("data-p",i.containerDataP),PM(i.sx("root")),jM(i.cx("root")));},inputs:{ariaLabel:[1,"ariaLabel"],ariaLabelledBy:[1,"ariaLabelledBy"],label:[1,"label"],promptLabel:[1,"promptLabel"],mediumRegex:[1,"mediumRegex"],strongRegex:[1,"strongRegex"],weakLabel:[1,"weakLabel"],mediumLabel:[1,"mediumLabel"],strongLabel:[1,"strongLabel"],inputId:[1,"inputId"],feedback:[1,"feedback"],toggleMask:[1,"toggleMask"],inputStyleClass:[1,"inputStyleClass"],inputStyle:[1,"inputStyle"],autocomplete:[1,"autocomplete"],placeholder:[1,"placeholder"],showClear:[1,"showClear"],autofocus:[1,"autofocus"],tabindex:[1,"tabindex"],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],overlayOptions:[1,"overlayOptions"]},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[nN([Ii,lt,{provide:dt,useExisting:t},{provide:W,useExisting:t}]),j0([L]),BE],decls:8,vars:34,consts:[["input",""],["overlay",""],["content",""],["pInputText","",3,"input","focus","blur","keyup","pSize","value","variant","invalid","pAutoFocus","pt","unstyled"],[3,"visibleChange","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["data-p-icon","times",3,"class","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["data-p-icon","times",3,"click","pBind"],["data-p-icon","eye-slash",3,"class","pBind"],[3,"pBind"],["data-p-icon","eye-slash",3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","eye",3,"class","pBind"],["data-p-icon","eye",3,"click","pBind"],[3,"class","pBind"]],template:function(n,i){n&1&&(Bc(0,"input",3,0),cu("input",function(D){return i.onInput(D)})("focus",function(D){return i.onInputFocus(D)})("blur",function(D){return i.onInputBlur(D)})("keyup",function(D){return i.onKeyUp(D)}),bp(),rM(2,pi,3,5),rM(3,vi,2,1),Bc(4,"p-overlay",4,1),cu("visibleChange",function(D){return i.overlayVisible.set(D)}),VE(6,ki,5,9,"ng-template",null,2,pN),bp()),n&2&&(PM(i.inputStyle()),jM(i.cn(i.cx("pcInputText"),i.inputStyleClass())),zE("pSize",i.size())("value",i.value)("variant",i.$variant())("invalid",i.invalid())("pAutoFocus",i.autofocus())("pt",i.ptm("pcInputText"))("unstyled",i.unstyled()),su("label",i.label())("aria-label",i.ariaLabel())("aria-labelledBy",i.ariaLabelledBy())("id",i.inputId())("tabindex",i.tabindex())("type",i.inputType())("placeholder",i.placeholder())("autocomplete",i.autocomplete())("name",i.name())("maxlength",i.maxlength())("minlength",i.minlength())("required",i.requiredAttr())("disabled",i.disabledAttr()),n_(2),oM(i.showClearIcon?2:-1),n_(),oM(i.toggleMask()?3:-1),n_(),zE("hostAttrSelector",i.$attrSelector)("visible",i.overlayVisible())("options",i.overlayOptions())("target","@parent")("appendTo",i.$appendTo())("unstyled",i.unstyled())("pt",i.ptm("pcOverlay"))("motionOptions",i.motionOptions()));},dependencies:[cA,ar,Z8,co,st,rt,Oo,iq,o1,L],encapsulation:2})}return t})(),ct=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=mn({type:t});static \u0275inj=$t$1({imports:[pt,iq,o1,iq,o1]})}return t})();var Ei={root:"p-password p-component"},mt=(()=>{class t extends WI{name="password";style=oe;classes=Ei;static \u0275fac=(()=>{let e;return function(i){return (e||(e=Vc(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ut=(()=>{class t extends I{componentName="InputPassword";mask=az(true);_componentStyle=g(mt);toggleMask(){this.mask.set(!this.mask());}get inputType(){return this.mask()?"password":"text"}static \u0275fac=(()=>{let e;return function(i){return (e||(e=Vc(t)))(i||t)}})();static \u0275dir=xt$1({type:t,selectors:[["","pInputPassword",""]],hostVars:3,hostBindings:function(n,i){n&2&&(su("type",i.inputType),jM(i.cx("root")));},inputs:{mask:[1,"mask"]},outputs:{mask:"maskChange"},features:[nN([mt,{provide:W,useExisting:t}]),j0([{directive:ar,inputs:["invalid","invalid","variant","variant","fluid","fluid","pSize","pSize","pInputTextPT","pInputTextPT","pInputTextUnstyled","pInputTextUnstyled","hostName","hostName"]}]),BE]})}return t})();function Ni(t,o){if(t&1&&au(0,"fa-icon",10),t&2){let e=EM();zE("icon",e.faEye);}}function Pi(t,o){if(t&1&&au(0,"fa-icon",10),t&2){let e=EM();zE("icon",e.faEyeSlash);}}var ft=class t{signInIcon=Vn;mask=true;password=new M5("",{nonNullable:true,validators:[$4.required]});faEye=Bn;faEyeSlash=Un;router=g(Ft$1);login(){let o=this.password.value.trim();o&&(localStorage.setItem("APIKEY",o),this.router.navigateByUrl("/dashboard"));}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Uo({type:t,selectors:[["app-login"]],decls:24,vars:7,consts:[[1,"login-page"],[1,"login-panel"],[1,"brand"],[1,"brand-mark"],["alt","logo","height","42","ngSrc","/gotify-logo.svg","priority","","width","42"],[1,"eyebrow"],[1,"login-form",3,"ngSubmit"],["variant","in"],["autocomplete","current-password","id","password","pInputPassword","",3,"maskChange","mask","fluid","formControl"],[2,"cursor","pointer",3,"click"],[3,"icon"],["for","password"],["aria-label","Anmelden","pButton","","type","submit",3,"disabled","fluid"]],template:function(e,n){e&1&&(Bc(0,"main",0)(1,"section",1)(2,"p-card")(3,"div",2)(4,"span",3),au(5,"img",4),bp(),Bc(6,"div")(7,"p",5),YM(8,"iGotify Assistent UI"),bp(),Bc(9,"h1"),YM(10,"Login"),bp()()(),Bc(11,"form",6),cu("ngSubmit",function(){return n.login()}),Bc(12,"p-floatlabel",7)(13,"p-iconfield")(14,"input",8),mD("maskChange",function(c){return QM(n.mask,c)||(n.mask=c),c}),bp(),z_(),Bc(15,"p-inputicon",9),cu("click",function(){return n.mask=!n.mask}),rM(16,Ni,1,1,"fa-icon",10)(17,Pi,1,1,"fa-icon",10),bp()(),Bc(18,"label",11),YM(19,"Password"),bp()(),Bc(20,"button",12),au(21,"fa-icon",10),Bc(22,"span"),YM(23,"Sign In"),bp()()()()()()),e&2&&(n_(14),gD("mask",n.mask),zE("fluid",true)("formControl",n.password),W_(),n_(2),oM(n.mask?16:17),n_(4),zE("disabled",n.password.invalid)("fluid",true),n_(),zE("icon",n.signInIcon));},dependencies:[Pi$1,Ei$1,at,ce,L9,Fn,_n,rn,ln,T0,an,cn,y5,ct,vr,VG,nn,z5,ut,kr,Hr],styles:["[_nghost-%COMP%]{display:block;min-height:100dvh}.login-page[_ngcontent-%COMP%]{align-items:center;background:linear-gradient(135deg,color-mix(in srgb,var(--p-primary-color) 16%,transparent),transparent 38%),linear-gradient(315deg,color-mix(in srgb,transparent 42%,transparent),transparent 34%),transparent;display:flex;justify-content:center;min-height:100dvh;padding:2rem}.login-panel[_ngcontent-%COMP%]{max-width:28rem;width:100%}.brand[_ngcontent-%COMP%]{align-items:center;display:flex;gap:1rem;margin-bottom:1.5rem}.brand-mark[_ngcontent-%COMP%]{align-items:center;display:inline-flex;font-weight:700;height:3rem;justify-content:center;width:3rem}.eyebrow[_ngcontent-%COMP%]{color:var(--p-text-muted-color);font-size:.875rem;margin:0 0 .2rem}h1[_ngcontent-%COMP%]{color:var(--p-text-color);font-size:1.5rem;line-height:1.1;margin:0}.login-form[_ngcontent-%COMP%]{display:grid;gap:1rem}"]})};export{ft as Login};