import{c as v,F as h,D as x,o as C,g as a,h as s,i as r,I as f,G as k,H as m,r as w,n as $,j as g,u as c,k as B,l as D,J as E,m as P}from"./vendor.3ad19a93.js";import{o as F,p as H,P as N}from"./index.b072e5a1.js";import{_ as V}from"./CoverPlay.2552e913.js";import"./el-image-viewer.7af7ebc0.js";import"./IconPark.a6d87f82.js";import"./PlayOne.13d62539.js";const q={class:"grid grid-flow-row grid-cols-8 2xl:grid-cols-12 gap-2.5"},T=["onClick"],A=v({emits:["catChange"],setup(b,{emit:i}){const u=d=>{i("catChange",d)};h();const t=x();return C(async()=>{t.value=await F()}),(d,o)=>(a(),s("div",q,[r("div",{class:"button-dc",onClick:o[0]||(o[0]=n=>u("\u5168\u90E8"))},"\u5168\u90E8"),(a(!0),s(f,null,k(t.value,n=>(a(),s("div",{key:n.id,class:"button-dc",onClick:l=>u(n.name)},m(n.name),9,T))),128))]))}}),I={class:"py-5 text-xl"},M={class:"gap-5 grid grid-flow-row grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7"},j=["onClick"],z={class:"mt-2 text-xs text-main leading-5"},G={class:"mt-2 text-xs text-main truncate text-dc"},J={key:0,class:"py-10"},L=P("\u52A0\u8F7D\u66F4\u591A"),X=v({setup(b){const i=x(),u=h(),t=w({init:!1,loading:!1,limit:35,before:0,more:!1,cat:"\u5168\u90E8"}),d=l=>{t.cat=l,t.before=0,t.more=!1,o()},o=async()=>{var l;t.loading=!0;try{const{playlists:_,lasttime:p,more:e}=await H({limit:t.limit,before:t.before,cat:t.cat});t.before<=0?i.value=_:(l=i.value)==null||l.push(..._),t.init=!0,t.loading=!1,t.before=p,t.more=e}catch{}},n=()=>{o()};return C(o),(l,_)=>{const p=$;return a(),s(f,null,[g(A,{onCatChange:d}),r("div",I,m(c(t).cat)+"\u6B4C\u5355",1),r("div",M,[(a(!0),s(f,null,k(i.value,(e,y)=>(a(),s("div",{key:y,class:E({"item-1":y===0}),onClick:R=>c(u).push({name:c(N).playlist,query:{id:e.id}})},[g(V,{name:e.name,"pic-url":e.coverImgUrl,"play-count":e.playCount,"show-play-count":""},null,8,["name","pic-url","play-count"]),r("div",z,m(e.name),1),r("div",G,m(e.creator.nickname),1)],10,j))),128))]),c(t).more?(a(),s("div",J,[g(p,{type:"text",class:"text-center w-full",onClick:n,loading:c(t).loading},{default:B(()=>[L]),_:1},8,["loading"])])):D("",!0)],64)}}});export{X as default};
