import{$t as Z4,Br as zW,Cr as v_,Dr as wN,Dt as SD,E as DN,Er as wD,H as In,Ht as WW,It as Tl,Jn as nh,K as JN,Lt as UN,N as Ft$1,O as EA,P as GW,Pn as il,Pt as TD,R as IN,St as RD,Tt as S,U as Ix,V as Il,Vn as m,Vt as Vt$1,W as Iy,X as KD,Y as K4,Yn as oc,Yt as Y4,Zt as Yt$1,a as AA,at as Ms,b as Cl,br as uy,bt as QD,c as B,dr as tA,dt as Nz,er as q4,et as MD,fr as tN,ft as OD,h as CD,hn as cM,in as _l,jr as xN,jt as Sl,kn as hA,kt as SN,l as BC,lr as sM,mt as Ol,p as C,r as $W,rr as qW,sr as rl,tn as Zp,tr as qD,ut as Nl,vn as dA,vt as PN,x as Cn,xt as Qo,yn as dy,yr as uh}from"./main-YAQMBZ25.js";import{$ as wl,B as is,D as Y4$1,E as Xr,F as f1,H as k5,N as ci$1,O as Zl,P as er,S as Sl$1,V as j4,W as ni$1,X as si$1,Y as ro,Z as t8,a as Br,at as yl,d as Hi,et as x,f as I,g as Nl$1,it as y5,j as ar,l as F0,m as Lr,nt as xo,o as C4,ot as zo,s as Cl$1,tt as x5,w as W,y as Ql}from"./chunk-CepYqzPO.js";var et=`
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
`;var ht=[`header`];var _t=[`title`];var yt=[`subtitle`];var vt=[`content`];var Ct=[`footer`];var bt=[`*`,[[`p-header`]],[[`p-footer`]]];var wt=[`*`,`p-header`,`p-footer`];function xt(t,o){t&1&&MD(0)}function Tt(t,o){if(t&1&&(rl(0,`div`,1),_l(1,1),CD(2,xt,1,0,`ng-container`,2),Zp()),t&2){let e=PN();tA(e.cx(`header`)),SD(`pBind`,e.ptm(`header`)),v_(2),SD(`ngTemplateOutlet`,e.headerTemplate())}}function kt(t,o){if(t&1&&dA(0),t&2)nh(` `,PN(2).header(),` `)}function Mt(t,o){t&1&&MD(0)}function St(t,o){if(t&1&&(rl(0,`div`,1),DN(1,kt,1,1),CD(2,Mt,1,0,`ng-container`,2),Zp()),t&2){let e=PN();tA(e.cx(`title`)),SD(`pBind`,e.ptm(`title`)),v_(),wN(e.showHeaderText()?1:-1),v_(),SD(`ngTemplateOutlet`,e.titleTemplate())}}function Dt(t,o){if(t&1&&dA(0),t&2)nh(` `,PN(2).subheader(),` `)}function It(t,o){t&1&&MD(0)}function Et(t,o){if(t&1&&(rl(0,`div`,1),DN(1,Dt,1,1),CD(2,It,1,0,`ng-container`,2),Zp()),t&2){let e=PN();tA(e.cx(`subtitle`)),SD(`pBind`,e.ptm(`subtitle`)),v_(),wN(e.showSubheaderText()?1:-1),v_(),SD(`ngTemplateOutlet`,e.subtitleTemplate())}}function Nt(t,o){t&1&&MD(0)}function Lt(t,o){t&1&&MD(0)}function Pt(t,o){if(t&1&&(rl(0,`div`,1),_l(1,2),CD(2,Lt,1,0,`ng-container`,2),Zp()),t&2){let e=PN();tA(e.cx(`footer`)),SD(`pBind`,e.ptm(`footer`)),v_(2),SD(`ngTemplateOutlet`,e.footerTemplate())}}var Ft={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var tt=(()=>{class t extends BC{name=`card`;style=et;classes=Ft;static ɵfac=(()=>{let e;return function(i){return(e||(e=il(t)))(i||t)}})();static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var it=new C(`CARD_INSTANCE`);var ce=(()=>{class t extends I{componentName=`Card`;$pcCard=m(it,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(x,{self:!0});_componentStyle=m(tt);header=Ol();subheader=Ol();headerFacet=K4(zW,{descendants:!1});footerFacet=K4(GW,{descendants:!1});headerTemplate=K4(`header`,{descendants:!1});titleTemplate=K4(`title`,{descendants:!1});subtitleTemplate=K4(`subtitle`,{descendants:!1});contentTemplate=K4(`content`,{descendants:!1});footerTemplate=K4(`footer`,{descendants:!1});hasHeader=Ms(()=>!!(this.headerFacet()||this.headerTemplate()));hasTitle=Ms(()=>!!(this.header()||this.titleTemplate()));hasSubtitle=Ms(()=>!!(this.subheader()||this.subtitleTemplate()));hasFooter=Ms(()=>!!(this.footerFacet()||this.footerTemplate()));showHeaderText=Ms(()=>this.header()&&!this.titleTemplate());showSubheaderText=Ms(()=>this.subheader()&&!this.subtitleTemplate());onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getBlockableElement(){return this.el.nativeElement}static ɵfac=(()=>{let e;return function(i){return(e||(e=il(t)))(i||t)}})();static ɵcmp=Qo({type:t,selectors:[[`p-card`]],contentQueries:function(n,i,c){n&1&&RD(c,i.headerFacet,zW,4)(c,i.footerFacet,GW,4)(c,i.headerTemplate,ht,4)(c,i.titleTemplate,_t,4)(c,i.subtitleTemplate,yt,4)(c,i.contentTemplate,vt,4)(c,i.footerTemplate,Ct,4),n&2&&UN(7)},hostVars:2,hostBindings:function(n,i){n&2&&tA(i.cx(`root`))},inputs:{header:[1,`header`],subheader:[1,`subheader`]},features:[EA([tt,{provide:it,useExisting:t},{provide:W,useExisting:t}]),tN([x]),wD],ngContentSelectors:wt,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,i){n&1&&(Tl(bt),DN(0,Tt,3,4,`div`,0),rl(1,`div`,1),DN(2,St,3,5,`div`,0),DN(3,Et,3,5,`div`,0),rl(4,`div`,1),_l(5),CD(6,Nt,1,0,`ng-container`,2),Zp(),DN(7,Pt,3,4,`div`,0),Zp()),n&2&&(wN(i.hasHeader()?0:-1),v_(),tA(i.cx(`body`)),SD(`pBind`,i.ptm(`body`)),v_(),wN(i.hasTitle()?2:-1),v_(),wN(i.hasSubtitle()?3:-1),v_(),tA(i.cx(`content`)),SD(`pBind`,i.ptm(`content`)),v_(2),SD(`ngTemplateOutlet`,i.contentTemplate()),v_(),wN(i.hasFooter()?7:-1))},dependencies:[Ix,WW,f1,x],encapsulation:2})}return t})();var nt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Cn({type:t});static ɵinj=Yt$1({imports:[ce,WW,f1,WW,f1]})}return t})();var ot={name:`eye`,meta:{tags:[`eye`,`view`,`see`,`look`,`watch`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10 3.25C13.0062 3.25008 15.1939 4.92099 16.5908 6.50391C17.2931 7.2997 17.8141 8.09259 18.1592 8.68555C18.3321 8.98266 18.462 9.2321 18.5498 9.40918C18.5937 9.49765 18.6274 9.56828 18.6504 9.61816C18.6619 9.64298 18.6714 9.66258 18.6778 9.67676C18.6809 9.68379 18.6827 9.69008 18.6846 9.69434C18.6855 9.69632 18.6869 9.69786 18.6875 9.69922L18.6885 9.70117V9.70215C18.6885 9.7025 18.6793 9.70678 18 10C18.6793 10.2932 18.6885 10.2975 18.6885 10.2979V10.2988L18.6875 10.3008C18.6869 10.3021 18.6855 10.3037 18.6846 10.3057C18.6827 10.3099 18.6809 10.3162 18.6778 10.3232C18.6714 10.3374 18.6619 10.357 18.6504 10.3818C18.6274 10.4317 18.5937 10.5024 18.5498 10.5908C18.462 10.7679 18.3321 11.0173 18.1592 11.3145C17.8141 11.9074 17.2931 12.7003 16.5908 13.4961C15.1939 15.079 13.0062 16.7499 10 16.75C6.99381 16.75 4.80615 15.079 3.40917 13.4961C2.70689 12.7003 2.18589 11.9074 1.84081 11.3145C1.66792 11.0173 1.53804 10.7679 1.45019 10.5908C1.40631 10.5024 1.37264 10.4317 1.3496 10.3818C1.33814 10.357 1.32859 10.3374 1.32226 10.3232C1.31912 10.3162 1.31728 10.3099 1.31542 10.3057C1.31455 10.3037 1.31311 10.3021 1.31249 10.3008L1.31151 10.2988V10.2979C1.31398 10.2965 1.35491 10.2785 1.99999 10C1.35491 9.72154 1.31398 9.70354 1.31151 9.70215V9.70117L1.31249 9.69922C1.31311 9.69786 1.31455 9.69632 1.31542 9.69434C1.31728 9.69007 1.31912 9.68378 1.32226 9.67676C1.32859 9.66257 1.33814 9.64297 1.3496 9.61816C1.37264 9.56827 1.40631 9.49764 1.45019 9.40918C1.53804 9.23209 1.66792 8.98265 1.84081 8.68555C2.18589 8.09258 2.70689 7.2997 3.40917 6.50391C4.80615 4.92098 6.99381 3.25 10 3.25ZM10 4.75C7.59635 4.75 5.78373 6.0791 4.5332 7.49609C3.91198 8.20004 3.44728 8.90751 3.13769 9.43945C3.00747 9.66322 2.90566 9.85501 2.83202 10C2.90566 10.145 3.00747 10.3368 3.13769 10.5605C3.44728 11.0925 3.91198 11.8 4.5332 12.5039C5.78373 13.9209 7.59635 15.25 10 15.25C12.4036 15.2499 14.2163 13.9209 15.4668 12.5039C16.088 11.7999 16.5527 11.0925 16.8623 10.5605C16.9924 10.337 17.0934 10.1449 17.167 10C17.0934 9.85507 16.9924 9.66302 16.8623 9.43945C16.5527 8.90752 16.088 8.20005 15.4668 7.49609C14.2163 6.0791 12.4036 4.75008 10 4.75ZM10 6.75C11.7948 6.75012 13.25 8.20515 13.25 10C13.25 11.7949 11.7948 13.2499 10 13.25C8.20508 13.25 6.75 11.7949 6.75 10C6.75 8.20507 8.20508 6.75 10 6.75ZM10 8.25C9.03351 8.25 8.25 9.0335 8.25 10C8.25 10.9665 9.03351 11.75 10 11.75C10.9664 11.7499 11.75 10.9664 11.75 10C11.75 9.03358 10.9664 8.25012 10 8.25ZM1.99999 10L1.31151 10.2969C1.22978 10.1073 1.22978 9.89267 1.31151 9.70312L1.99999 10ZM18.6885 9.70312C18.7702 9.89262 18.7702 10.1074 18.6885 10.2969L18 10L18.6885 9.70312Z`,fill:`currentColor`,key:`buowgx`}]]};var Vt=(t,o)=>o[1].key||t;function Ot(t,o){if(t&1&&(Iy(),TD(0,`path`)),t&2){let e=PN().$implicit;Cl(`d`,e[1].d)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`fill-rule`,e[1].fillRule)(`clip-rule`,e[1].clipRule)(`stroke`,e[1].stroke)(`stroke-width`,e[1].strokeWidth)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function At(t,o){if(t&1&&(Iy(),TD(0,`circle`)),t&2){let e=PN().$implicit;Cl(`cx`,e[1].cx)(`cy`,e[1].cy)(`r`,e[1].r)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function zt(t,o){if(t&1&&(Iy(),TD(0,`rect`)),t&2){let e=PN().$implicit;Cl(`x`,e[1].x)(`y`,e[1].y)(`width`,e[1].width)(`height`,e[1].height)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Rt(t,o){if(t&1&&(Iy(),TD(0,`line`)),t&2){let e=PN().$implicit;Cl(`x1`,e[1].x1)(`y1`,e[1].y1)(`x2`,e[1].x2)(`y2`,e[1].y2)(`stroke`,e[1].stroke)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function $t(t,o){if(t&1&&(Iy(),TD(0,`polyline`)),t&2){let e=PN().$implicit;Cl(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Ht(t,o){if(t&1&&(Iy(),TD(0,`polygon`)),t&2){let e=PN().$implicit;Cl(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function jt(t,o){if(t&1&&(Iy(),TD(0,`ellipse`)),t&2){let e=PN().$implicit;Cl(`cx`,e[1].cx)(`cy`,e[1].cy)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Gt(t,o){if(t&1&&DN(0,Ot,1,9,`:svg:path`)(1,At,1,6,`:svg:circle`)(2,zt,1,9,`:svg:rect`)(3,Rt,1,7,`:svg:line`)(4,$t,1,4,`:svg:polyline`)(5,Ht,1,4,`:svg:polygon`)(6,jt,1,7,`:svg:ellipse`),t&2){let e,n=o.$implicit;wN((e=n[0])===`path`?0:e===`circle`?1:e===`rect`?2:e===`line`?3:e===`polyline`?4:e===`polygon`?5:e===`ellipse`?6:-1)}}var at=(()=>{class t extends C4{constructor(){super(),this._icon=ot}static ɵfac=function(n){return new(n||t)};static ɵcmp=Qo({type:t,selectors:[[`svg`,`data-p-icon`,`eye`]],features:[wD],decls:2,vars:0,template:function(n,i){n&1&&IN(0,Gt,7,1,null,null,Vt),n&2&&SN(i.iconNodes())},encapsulation:2,changeDetection:1})}return t})();var rt={name:`eye-slash`,meta:{tags:[`eye-slash`,`hide`,`private`,`unseen`,`invisible`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M3.46999 3.46973C3.76289 3.17696 4.23769 3.17688 4.53054 3.46973L16.5306 15.4697C16.8233 15.7626 16.8233 16.2374 16.5306 16.5303C16.2377 16.8231 15.7629 16.823 15.47 16.5303L14.4124 15.4727C13.1972 16.2508 11.7234 16.7499 10.0003 16.75C6.99409 16.75 4.80642 15.079 3.40944 13.4961C2.70716 12.7003 2.18616 11.9074 1.84108 11.3145C1.66819 11.0174 1.5383 10.7679 1.45045 10.5908C1.40658 10.5024 1.37291 10.4317 1.34987 10.3818C1.33842 10.357 1.32886 10.3374 1.32252 10.3232C1.31939 10.3162 1.31755 10.3099 1.31569 10.3057C1.31482 10.3037 1.31338 10.3021 1.31276 10.3008L1.31178 10.2988V10.2979C1.31454 10.2963 1.35767 10.2774 2.00026 10L1.31178 10.2969C1.23111 10.1098 1.23009 9.89788 1.30885 9.70996V9.70801C1.30923 9.70724 1.31035 9.70614 1.3108 9.70508C1.31174 9.70289 1.31329 9.69961 1.31471 9.69629C1.3177 9.68931 1.32131 9.67964 1.32643 9.66797C1.33705 9.64374 1.35256 9.60942 1.37233 9.56641C1.4119 9.48031 1.47048 9.35783 1.54713 9.20703C1.70032 8.90569 1.92898 8.48733 2.23463 8.01172C2.73213 7.23767 3.44493 6.29106 4.38601 5.44629L3.46999 4.53027C3.1771 4.23738 3.1771 3.76262 3.46999 3.46973ZM5.45046 6.51074C4.61173 7.25038 3.95951 8.10258 3.49636 8.82324C3.22238 9.24956 3.01835 9.62252 2.88405 9.88672C2.86458 9.92502 2.84684 9.96165 2.83034 9.99512C2.90415 10.1407 3.00634 10.3344 3.13796 10.5605C3.44755 11.0925 3.91225 11.8 4.53347 12.5039C5.784 13.9209 7.59663 15.25 10.0003 15.25C11.2833 15.25 12.3869 14.9161 13.3206 14.3809L11.7083 12.7686C10.4536 13.5457 8.7907 13.3904 7.70047 12.3008C6.61016 11.2105 6.45322 9.5459 7.23074 8.29102L5.45046 6.51074ZM10.0003 3.25C13.0064 3.2501 15.1942 4.921 16.5911 6.50391C17.2934 7.2997 17.8144 8.0926 18.1595 8.68555C18.3324 8.98265 18.4623 9.23211 18.5501 9.40918C18.594 9.49764 18.6277 9.56829 18.6507 9.61816C18.6621 9.64297 18.6717 9.66258 18.678 9.67676C18.6812 9.68379 18.683 9.69008 18.6849 9.69434C18.6858 9.69631 18.6872 9.69786 18.6878 9.69922L18.6888 9.70117V9.70215C18.6888 9.7025 18.6795 9.7068 18.0003 10L18.6888 10.2969L18.6858 10.3027C18.6844 10.3061 18.6824 10.3109 18.68 10.3164C18.675 10.3276 18.6683 10.3439 18.6595 10.3633C18.6417 10.4022 18.6158 10.4575 18.5823 10.5264C18.5151 10.6647 18.4162 10.8603 18.2845 11.0967C18.0212 11.569 17.6251 12.2106 17.0911 12.8926C16.8359 13.2186 16.3645 13.2755 16.0384 13.0205C15.7123 12.7652 15.6543 12.2939 15.9095 11.9678C16.3854 11.36 16.7397 10.7863 16.9739 10.3662C17.0526 10.225 17.1162 10.1008 17.1673 10C17.0937 9.85507 16.9927 9.66301 16.8626 9.43945C16.553 8.90753 16.0883 8.20004 15.4671 7.49609C14.2166 6.07911 12.4039 4.7501 10.0003 4.75C9.52755 4.75 9.07986 4.80351 8.65652 4.89355C8.25151 4.97973 7.85325 4.72132 7.76687 4.31641C7.68069 3.91134 7.93901 3.51306 8.34402 3.42676C8.86049 3.31689 9.41325 3.25 10.0003 3.25ZM8.34891 9.40918C8.12692 10.0272 8.26402 10.7432 8.76102 11.2402C9.25783 11.7366 9.9724 11.8719 10.5901 11.6504L8.34891 9.40918ZM18.6888 9.70312C18.7703 9.89221 18.7709 10.1067 18.6898 10.2959L18.0003 10L18.6888 9.70312Z`,fill:`currentColor`,key:`4j9v21`}]]};var Ut=(t,o)=>o[1].key||t;function Wt(t,o){if(t&1&&(Iy(),TD(0,`path`)),t&2){let e=PN().$implicit;Cl(`d`,e[1].d)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`fill-rule`,e[1].fillRule)(`clip-rule`,e[1].clipRule)(`stroke`,e[1].stroke)(`stroke-width`,e[1].strokeWidth)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function Zt(t,o){if(t&1&&(Iy(),TD(0,`circle`)),t&2){let e=PN().$implicit;Cl(`cx`,e[1].cx)(`cy`,e[1].cy)(`r`,e[1].r)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function qt(t,o){if(t&1&&(Iy(),TD(0,`rect`)),t&2){let e=PN().$implicit;Cl(`x`,e[1].x)(`y`,e[1].y)(`width`,e[1].width)(`height`,e[1].height)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Qt(t,o){if(t&1&&(Iy(),TD(0,`line`)),t&2){let e=PN().$implicit;Cl(`x1`,e[1].x1)(`y1`,e[1].y1)(`x2`,e[1].x2)(`y2`,e[1].y2)(`stroke`,e[1].stroke)(`stroke-opacity`,e[1].strokeOpacity)(`opacity`,e[1].opacity)}}function Kt(t,o){if(t&1&&(Iy(),TD(0,`polyline`)),t&2){let e=PN().$implicit;Cl(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Yt(t,o){if(t&1&&(Iy(),TD(0,`polygon`)),t&2){let e=PN().$implicit;Cl(`points`,e[1].points)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Jt(t,o){if(t&1&&(Iy(),TD(0,`ellipse`)),t&2){let e=PN().$implicit;Cl(`cx`,e[1].cx)(`cy`,e[1].cy)(`rx`,e[1].rx)(`ry`,e[1].ry)(`fill`,e[1].fill)(`fill-opacity`,e[1].fillOpacity)(`opacity`,e[1].opacity)}}function Xt(t,o){if(t&1&&DN(0,Wt,1,9,`:svg:path`)(1,Zt,1,6,`:svg:circle`)(2,qt,1,9,`:svg:rect`)(3,Qt,1,7,`:svg:line`)(4,Kt,1,4,`:svg:polyline`)(5,Yt,1,4,`:svg:polygon`)(6,Jt,1,7,`:svg:ellipse`),t&2){let e,n=o.$implicit;wN((e=n[0])===`path`?0:e===`circle`?1:e===`rect`?2:e===`line`?3:e===`polyline`?4:e===`polygon`?5:e===`ellipse`?6:-1)}}var st=(()=>{class t extends C4{constructor(){super(),this._icon=rt}static ɵfac=function(n){return new(n||t)};static ɵcmp=Qo({type:t,selectors:[[`svg`,`data-p-icon`,`eye-slash`]],features:[wD],decls:2,vars:0,template:function(n,i){n&1&&IN(0,Xt,7,1,null,null,Ut),n&2&&SN(i.iconNodes())},encapsulation:2,changeDetection:1})}return t})();var oe=`
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

`;var ei=[`content`];var ti=[`footer`];var ii=[`header`];var ni=[`clearicon`];var oi=[`hideicon`];var ai=[`showicon`];var ri=[`overlay`];var si=[`input`];function li(t,o){if(t&1){let e=xN();Iy(),rl(0,`svg`,8),Sl(`click`,function(){uy(e);return dy(PN(2).clear())}),Zp()}if(t&2){let e=PN(2);tA(e.cx(`clearIcon`)),SD(`pBind`,e.ptm(`clearIcon`))}}function di(t,o){t&1&&MD(0)}function pi(t,o){if(t&1){let e=xN();DN(0,li,1,3,`:svg:svg`,5),rl(1,`span`,6),Sl(`click`,function(){uy(e);return dy(PN().clear())}),CD(2,di,1,0,`ng-container`,7),Zp()}if(t&2){let e=PN();wN(e.clearIconTemplate()?-1:0),v_(),tA(e.cx(`clearIcon`)),SD(`pBind`,e.ptm(`clearIcon`)),v_(),SD(`ngTemplateOutlet`,e.clearIconTemplate())}}function ci(t,o){if(t&1){let e=xN();Iy(),rl(0,`svg`,11),Sl(`click`,function(){uy(e);return dy(PN(3).onMaskToggle())}),Zp()}if(t&2){let e=PN(3);tA(e.cx(`maskIcon`)),SD(`pBind`,e.ptm(`maskIcon`))}}function mi(t,o){t&1&&MD(0)}function ui(t,o){if(t&1){let e=xN();rl(0,`span`,6),Sl(`click`,function(){uy(e);return dy(PN(3).onMaskToggle())}),CD(1,mi,1,0,`ng-container`,12),Zp()}if(t&2){let e=PN(3);SD(`pBind`,e.ptm(`maskIcon`)),v_(),SD(`ngTemplateOutlet`,e.hideIconTemplate())(`ngTemplateOutletContext`,e.maskIconContext)}}function fi(t,o){if(t&1&&DN(0,ci,1,3,`:svg:svg`,9)(1,ui,2,3,`span`,10),t&2)wN(PN(2).hideIconTemplate()?1:0)}function gi(t,o){if(t&1){let e=xN();Iy(),rl(0,`svg`,14),Sl(`click`,function(){uy(e);return dy(PN(3).onMaskToggle())}),Zp()}if(t&2){let e=PN(3);tA(e.cx(`unmaskIcon`)),SD(`pBind`,e.ptm(`unmaskIcon`))}}function hi(t,o){t&1&&MD(0)}function _i(t,o){if(t&1){let e=xN();rl(0,`span`,6),Sl(`click`,function(){uy(e);return dy(PN(3).onMaskToggle())}),CD(1,hi,1,0,`ng-container`,12),Zp()}if(t&2){let e=PN(3);SD(`pBind`,e.ptm(`unmaskIcon`)),v_(),SD(`ngTemplateOutlet`,e.showIconTemplate())(`ngTemplateOutletContext`,e.unmaskIconContext)}}function yi(t,o){if(t&1&&DN(0,gi,1,3,`:svg:svg`,13)(1,_i,2,3,`span`,10),t&2)wN(PN(2).showIconTemplate()?1:0)}function vi(t,o){if(t&1&&DN(0,fi,2,1)(1,yi,2,1),t&2)wN(PN().unmasked()?0:1)}function Ci(t,o){t&1&&MD(0)}function bi(t,o){t&1&&MD(0)}function wi(t,o){if(t&1&&CD(0,bi,1,0,`ng-container`,7),t&2)SD(`ngTemplateOutlet`,PN(2).contentTemplate())}function xi(t,o){if(t&1&&(rl(0,`div`,10)(1,`div`,10),Il(2,`div`,10),Zp(),rl(3,`div`,10),dA(4),Zp()()),t&2){let e=PN(2);tA(e.cx(`content`)),SD(`pBind`,e.ptm(`content`)),v_(),tA(e.cx(`meter`)),SD(`pBind`,e.ptm(`meter`)),v_(),tA(e.cx(`meterLabel`)),Nl(`width`,e.meter?e.meter.width:``),SD(`pBind`,e.ptm(`meterLabel`)),Cl(`data-p`,e.meterDataP),v_(),tA(e.cx(`meterText`)),SD(`pBind`,e.ptm(`meterText`)),v_(),qD(e.infoText)}}function Ti(t,o){t&1&&MD(0)}function ki(t,o){if(t&1){let e=xN();rl(0,`div`,6),Sl(`click`,function(i){uy(e);return dy(PN().onOverlayClick(i))}),CD(1,Ci,1,0,`ng-container`,7),DN(2,wi,1,1,`ng-container`)(3,xi,5,16,`div`,15),CD(4,Ti,1,0,`ng-container`,7),Zp()}if(t&2){let e=PN();JN(e.sx(`overlay`)),tA(e.cx(`overlay`)),SD(`pBind`,e.ptm(`overlay`)),Cl(`data-p`,e.overlayDataP),v_(),SD(`ngTemplateOutlet`,e.headerTemplate()),v_(),wN(e.contentTemplate()?2:3),v_(2),SD(`ngTemplateOutlet`,e.footerTemplate())}}var Mi=`
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
`;var Si={root:({instance:t})=>({position:t.$appendTo()===`self`?`relative`:void 0}),overlay:{position:`absolute`}};var Di={root:({instance:t})=>[`p-password p-component p-inputwrapper`,{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()===`filled`,"p-inputwrapper-focus":t.focused,"p-password-fluid":t.hasFluid}],rootDirective:({instance:t})=>[`p-password p-inputtext p-component p-inputwrapper`,{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()===`filled`,"p-password-fluid-directive":t.hasFluid}],pcInputText:`p-password-input`,maskIcon:`p-password-toggle-mask-icon p-password-mask-icon`,unmaskIcon:`p-password-toggle-mask-icon p-password-unmask-icon`,overlay:`p-password-overlay p-component`,content:`p-password-content`,meter:`p-password-meter`,meterLabel:({instance:t})=>`p-password-meter-label ${t.meter?`p-password-meter-`+t.meter.strength:``}`,meterText:`p-password-meter-text`,clearIcon:`p-password-clear-icon`};var lt=(()=>{class t extends BC{name=`password`;style=Mi;classes=Di;inlineStyles=Si;static ɵfac=(()=>{let e;return function(i){return(e||(e=il(t)))(i||t)}})();static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var dt=new C(`PASSWORD_INSTANCE`);var Ii={provide:Y4$1,useExisting:oc(()=>pt),multi:!0};var pt=(()=>{class t extends zo{componentName=`Password`;bindDirectiveInstance=m(x,{self:!0});$pcPassword=m(dt,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}ariaLabel=Ol();ariaLabelledBy=Ol();label=Ol();promptLabel=Ol();mediumRegex=Ol(`^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})`);strongRegex=Ol(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})`);weakLabel=Ol();mediumLabel=Ol();strongLabel=Ol();inputId=Ol();feedback=Ol(!0,{transform:In});toggleMask=Ol(void 0,{transform:In});inputStyleClass=Ol();inputStyle=Ol();autocomplete=Ol();placeholder=Ol();showClear=Ol(!1,{transform:In});autofocus=Ol(void 0,{transform:In});tabindex=Ol(void 0,{transform:uh});appendTo=Ol(`self`);motionOptions=Ol();overlayOptions=Ol();onFocus=q4();onBlur=q4();onClear=q4();overlayViewChild=Z4(`overlay`);inputViewChild=Z4(`input`);contentTemplate=K4(`content`,{descendants:!1});footerTemplate=K4(`footer`,{descendants:!1});headerTemplate=K4(`header`,{descendants:!1});clearIconTemplate=K4(`clearicon`,{descendants:!1});hideIconTemplate=K4(`hideicon`,{descendants:!1});showIconTemplate=K4(`showicon`,{descendants:!1});$appendTo=Ms(()=>this.appendTo()||this.config.overlayAppendTo());overlayVisible=B(!1);meter;infoText;focused=!1;unmasked=B(!1);requiredAttr=Ms(()=>this.required()?``:void 0);disabledAttr=Ms(()=>this.$disabled()?``:void 0);inputType=Ms(()=>this.unmasked()?`text`:`password`);get showClearIcon(){return this.showClear()&&this.value!=null}get maskIconContext(){return{class:this.cx(`maskIcon`)??``}}get unmaskIconContext(){return{class:this.cx(`unmaskIcon`)??``}}mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;value=null;translationSubscription;_componentStyle=m(lt);overlayService=m($W);onInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex()),this.strongCheckRegExp=new RegExp(this.strongRegex()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||``)})}onInput(e){this.value=e.target.value,this.onModelChange(this.value)}onInputFocus(e){this.focused=!0,this.feedback()&&this.overlayVisible.set(!0),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.feedback()&&this.overlayVisible.set(!1),this.onModelTouched(),this.onBlur.emit(e)}onKeyUp(e){if(this.feedback()){let n=e.target.value;if(this.updateUI(n),e.code===`Escape`){this.overlayVisible()&&this.overlayVisible.set(!1);return}this.overlayVisible()||this.overlayVisible.set(!0)}}updateUI(e){let n=null,i=null;switch(this.testStrength(e)){case 1:n=this.weakText(),i={strength:`weak`,width:`33.33%`};break;case 2:n=this.mediumText(),i={strength:`medium`,width:`66.66%`};break;case 3:n=this.strongText(),i={strength:`strong`,width:`100%`};break;default:n=this.promptText(),i=null;break}this.meter=i,this.infoText=n}onMaskToggle(){this.unmasked.update(e=>!e)}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}testStrength(e){let n=0;return this.strongCheckRegExp?.test(e)?n=3:this.mediumCheckRegExp?.test(e)?n=2:e.length&&(n=1),n}promptText(){return this.promptLabel()||this.translate(qW.PASSWORD_PROMPT)}weakText(){return this.weakLabel()||this.translate(qW.WEAK)}mediumText(){return this.mediumLabel()||this.translate(qW.MEDIUM)}strongText(){return this.strongLabel()||this.translate(qW.STRONG)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}writeControlValue(e,n){e===void 0?this.value=null:this.value=e,this.feedback()&&this.updateUI(this.value||``),n(this.value)}onDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe()}get containerDataP(){return this.cn({fluid:this.hasFluid})}get meterDataP(){return this.cn({[this.meter?.strength]:this.meter?.strength})}get overlayDataP(){return this.cn({[`overlay-`+this.$appendTo()]:`overlay-`+this.$appendTo()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=il(t)))(i||t)}})();static ɵcmp=Qo({type:t,selectors:[[`p-password`]],contentQueries:function(n,i,c){n&1&&RD(c,i.contentTemplate,ei,4)(c,i.footerTemplate,ti,4)(c,i.headerTemplate,ii,4)(c,i.clearIconTemplate,ni,4)(c,i.hideIconTemplate,oi,4)(c,i.showIconTemplate,ai,4),n&2&&UN(6)},viewQuery:function(n,i){n&1&&OD(i.overlayViewChild,ri,5)(i.inputViewChild,si,5),n&2&&UN(2)},hostVars:5,hostBindings:function(n,i){n&2&&(Cl(`data-p`,i.containerDataP),JN(i.sx(`root`)),tA(i.cx(`root`)))},inputs:{ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],label:[1,`label`],promptLabel:[1,`promptLabel`],mediumRegex:[1,`mediumRegex`],strongRegex:[1,`strongRegex`],weakLabel:[1,`weakLabel`],mediumLabel:[1,`mediumLabel`],strongLabel:[1,`strongLabel`],inputId:[1,`inputId`],feedback:[1,`feedback`],toggleMask:[1,`toggleMask`],inputStyleClass:[1,`inputStyleClass`],inputStyle:[1,`inputStyle`],autocomplete:[1,`autocomplete`],placeholder:[1,`placeholder`],showClear:[1,`showClear`],autofocus:[1,`autofocus`],tabindex:[1,`tabindex`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`],overlayOptions:[1,`overlayOptions`]},outputs:{onFocus:`onFocus`,onBlur:`onBlur`,onClear:`onClear`},features:[EA([Ii,lt,{provide:dt,useExisting:t},{provide:W,useExisting:t}]),tN([x]),wD],decls:8,vars:34,consts:[[`input`,``],[`overlay`,``],[`content`,``],[`pInputText`,``,3,`input`,`focus`,`blur`,`keyup`,`pSize`,`value`,`variant`,`invalid`,`pAutoFocus`,`pt`,`unstyled`],[3,`visibleChange`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[`data-p-icon`,`times`,3,`class`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`],[`data-p-icon`,`times`,3,`click`,`pBind`],[`data-p-icon`,`eye-slash`,3,`class`,`pBind`],[3,`pBind`],[`data-p-icon`,`eye-slash`,3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`eye`,3,`class`,`pBind`],[`data-p-icon`,`eye`,3,`click`,`pBind`],[3,`class`,`pBind`]],template:function(n,i){n&1&&(rl(0,`input`,3,0),Sl(`input`,function(D){return i.onInput(D)})(`focus`,function(D){return i.onInputFocus(D)})(`blur`,function(D){return i.onInputBlur(D)})(`keyup`,function(D){return i.onKeyUp(D)}),Zp(),DN(2,pi,3,5),DN(3,vi,2,1),rl(4,`p-overlay`,4,1),Sl(`visibleChange`,function(D){return i.overlayVisible.set(D)}),CD(6,ki,5,9,`ng-template`,null,2,AA),Zp()),n&2&&(JN(i.inputStyle()),tA(i.cn(i.cx(`pcInputText`),i.inputStyleClass())),SD(`pSize`,i.size())(`value`,i.value)(`variant`,i.$variant())(`invalid`,i.invalid())(`pAutoFocus`,i.autofocus())(`pt`,i.ptm(`pcInputText`))(`unstyled`,i.unstyled()),Cl(`label`,i.label())(`aria-label`,i.ariaLabel())(`aria-labelledBy`,i.ariaLabelledBy())(`id`,i.inputId())(`tabindex`,i.tabindex())(`type`,i.inputType())(`placeholder`,i.placeholder())(`autocomplete`,i.autocomplete())(`name`,i.name())(`maxlength`,i.maxlength())(`minlength`,i.minlength())(`required`,i.requiredAttr())(`disabled`,i.disabledAttr()),v_(2),wN(i.showClearIcon?2:-1),v_(),wN(i.toggleMask()?3:-1),v_(),SD(`hostAttrSelector`,i.$attrSelector)(`visible`,i.overlayVisible())(`options`,i.overlayOptions())(`target`,`@parent`)(`appendTo`,i.$appendTo())(`unstyled`,i.unstyled())(`pt`,i.ptm(`pcOverlay`))(`motionOptions`,i.motionOptions()))},dependencies:[Ix,Lr,t8,xo,st,at,is,WW,f1,x],encapsulation:2})}return t})();var ct=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Cn({type:t});static ɵinj=Yt$1({imports:[pt,WW,f1,WW,f1]})}return t})();var Ei={root:`p-password p-component`};var mt=(()=>{class t extends BC{name=`password`;style=oe;classes=Ei;static ɵfac=(()=>{let e;return function(i){return(e||(e=il(t)))(i||t)}})();static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var ut=(()=>{class t extends I{componentName=`InputPassword`;mask=Y4(!0);_componentStyle=m(mt);toggleMask(){this.mask.set(!this.mask())}get inputType(){return this.mask()?`password`:`text`}static ɵfac=(()=>{let e;return function(i){return(e||(e=il(t)))(i||t)}})();static ɵdir=Ft$1({type:t,selectors:[[``,`pInputPassword`,``]],hostVars:3,hostBindings:function(n,i){n&2&&(Cl(`type`,i.inputType),tA(i.cx(`root`)))},inputs:{mask:[1,`mask`]},outputs:{mask:`maskChange`},features:[EA([mt,{provide:W,useExisting:t}]),tN([{directive:Lr,inputs:[`invalid`,`invalid`,`variant`,`variant`,`fluid`,`fluid`,`pSize`,`pSize`,`pInputTextPT`,`pInputTextPT`,`pInputTextUnstyled`,`pInputTextUnstyled`,`hostName`,`hostName`]}]),wD]})}return t})();function Ni(t,o){if(t&1&&Il(0,`fa-icon`,10),t&2)SD(`icon`,PN().faEye)}function Li(t,o){if(t&1&&Il(0,`fa-icon`,10),t&2)SD(`icon`,PN().faEyeSlash)}var ft=class t{signInIcon=ni$1;mask=!0;password=new x5(``,{nonNullable:!0,validators:[j4.required]});faEye=ci$1;faEyeSlash=si$1;router=m(Vt$1);login(){let o=this.password.value.trim();o&&(localStorage.setItem(`APIKEY`,o),this.router.navigateByUrl(`/dashboard`))}static ɵfac=function(e){return new(e||t)};static ɵcmp=Qo({type:t,selectors:[[`app-login`]],decls:24,vars:7,consts:[[1,`login-page`],[1,`login-panel`],[1,`brand`],[1,`brand-mark`],[`alt`,`logo`,`height`,`42`,`ngSrc`,`/gotify-logo.svg`,`priority`,``,`width`,`42`],[1,`eyebrow`],[1,`login-form`,3,`ngSubmit`],[`variant`,`in`],[`autocomplete`,`current-password`,`id`,`password`,`pInputPassword`,``,3,`maskChange`,`mask`,`fluid`,`formControl`],[2,`cursor`,`pointer`,3,`click`],[3,`icon`],[`for`,`password`],[`aria-label`,`Anmelden`,`pButton`,``,`type`,`submit`,3,`disabled`,`fluid`]],template:function(e,n){e&1&&(rl(0,`main`,0)(1,`section`,1)(2,`p-card`)(3,`div`,2)(4,`span`,3),Il(5,`img`,4),Zp(),rl(6,`div`)(7,`p`,5),dA(8,`iGotify Assistent UI`),Zp(),rl(9,`h1`),dA(10,`Login`),Zp()()(),rl(11,`form`,6),Sl(`ngSubmit`,function(){return n.login()}),rl(12,`p-floatlabel`,7)(13,`p-iconfield`)(14,`input`,8),QD(`maskChange`,function(c){return hA(n.mask,c)||(n.mask=c),c}),Zp(),sM(),rl(15,`p-inputicon`,9),Sl(`click`,function(){return n.mask=!n.mask}),DN(16,Ni,1,1,`fa-icon`,10)(17,Li,1,1,`fa-icon`,10),Zp()(),rl(18,`label`,11),dA(19,`Password`),Zp()(),rl(20,`button`,12),Il(21,`fa-icon`,10),rl(22,`span`),dA(23,`Sign In`),Zp()()()()()()),e&2&&(v_(14),KD(`mask`,n.mask),SD(`fluid`,!0)(`formControl`,n.password),cM(),v_(2),wN(n.mask?16:17),v_(4),SD(`disabled`,n.password.invalid)(`fluid`,!0),v_(),SD(`icon`,n.signInIcon))},dependencies:[ar,er,nt,ce,Hi,Zl,Ql,wl,Sl$1,F0,Cl$1,yl,k5,ct,Br,Nz,Nl$1,y5,ut,Xr,ro],styles:[`[_nghost-%COMP%]{display:block;min-height:100dvh}.login-page[_ngcontent-%COMP%]{align-items:center;background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%p-primary-color) 16%,transparent),transparent 38%),linear-gradient(315deg,color-mix(in srgb,transparent 42%,transparent),transparent 34%),transparent;display:flex;justify-content:center;min-height:100dvh;padding:2rem}.login-panel[_ngcontent-%COMP%]{max-width:28rem;width:100%}.brand[_ngcontent-%COMP%]{align-items:center;display:flex;gap:1rem;margin-bottom:1.5rem}.brand-mark[_ngcontent-%COMP%]{align-items:center;display:inline-flex;font-weight:700;height:3rem;justify-content:center;width:3rem}.eyebrow[_ngcontent-%COMP%]{color:var(--%NS%p-text-muted-color);font-size:.875rem;margin:0 0 .2rem}h1[_ngcontent-%COMP%]{color:var(--%NS%p-text-color);font-size:1.5rem;line-height:1.1;margin:0}.login-form[_ngcontent-%COMP%]{display:grid;gap:1rem}`]})};export{ft as Login};