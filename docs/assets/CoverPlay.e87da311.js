import{j as l,c,Y as r,g as o,h as a,i as n,u as t,H as u,l as m,J as d}from"./vendor.4a9443dd.js";import{e as h}from"./index.545ff3d6.js";import{I as k,_ as i}from"./IconPark.fa3cc5be.js";import{P as y}from"./PlayOne.0d874165.js";import{P as f}from"./Play.05ddadb0.js";var v=k("headset",!1,function(e){return l("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[l("path",{d:"M42 30V24.4615C42 14.2655 33.9411 6 24 6C14.0589 6 6 14.2655 6 24.4615V30",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),l("path",{d:"M34 32C34 29.7909 35.7909 28 38 28H42V42H38C35.7909 42 34 40.2091 34 38V32Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),l("path",{d:"M42 32H44C45.1046 32 46 32.8954 46 34V36C46 37.1046 45.1046 38 44 38H42V32Z",fill:e.colors[0]},null),l("path",{d:"M6 32H4C2.89543 32 2 32.8954 2 34V36C2 37.1046 2.89543 38 4 38H6V32Z",fill:e.colors[0]},null),l("path",{d:"M6 28H10C12.2091 28 14 29.7909 14 32V38C14 40.2091 12.2091 42 10 42H6V28Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])});const C={class:"mask flex justify-center items-center"},V={key:0,class:"play-count"},B=c({props:{picUrl:null,playCount:null,name:null,showPlayCount:{type:Boolean},onPlay:null,video:{type:Boolean}},setup(e){return(g,w)=>{const s=r;return o(),a("div",{class:d(["cover-play-image",{"aspect-square":!e.video,"aspect-video":e.video}])},[l(s,{src:e.picUrl,alt:e.name,class:"w-full bg-gray-50 object-cover"},null,8,["src","alt"]),n("div",C,[l(i,{icon:t(y),theme:"filled",class:"text-white play-icon opacity-0 transition-opacity hover:text-teal-400",size:50,onClick:e.onPlay},null,8,["icon","onClick"])]),e.showPlayCount?(o(),a("div",V,[l(i,{icon:e.video?t(f):t(v),class:"mr-1",size:12},null,8,["icon"]),n("text",null,u(t(h)(e.playCount||0)),1)])):m("",!0)],2)}}});export{B as _};
