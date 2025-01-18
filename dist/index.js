"use strict";var s=require("react/jsx-runtime"),e=require("react"),t=require("react-icons/md"),o=require("react-icons/io5"),r=require("react-icons/io");const a=new class{constructor(){this.toast=null,this.toastTimeout=null}showToast(s,e,t){this.toastTimeout&&clearTimeout(this.toastTimeout),this.toast={type:s,message:e,description:t},this.toastTimeout=setTimeout((()=>{this.hideToast()}),5e3)}hideToast(){this.toast=null}getToast(){return this.toast}},i=({type:e,message:a,description:i})=>s.jsxs("div",Object.assign({className:"w-[358px] md:w-[452px] h-[90px] rounded-lg bg-white p-5 my-3 mx-auto border border-[#E4E4E4] shadow shadow-[#0000001A] flex items-center gap-5"},{children:[(()=>{switch(e){case"success":default:return s.jsx(o.IoCheckmarkCircle,{size:25,color:"#00ff00"});case"error":return s.jsx(o.IoCloseCircleSharp,{size:25,color:"#ff0000"});case"info":return s.jsx(o.IoInformation,{size:25,color:"#0000ff"});case"warning":return s.jsx(r.IoIosWarning,{size:25,color:"#FFEB3B"})}})(),s.jsxs("div",Object.assign({className:"flex-1 flex flex-col items-start gap-1"},{children:[s.jsx("h2",Object.assign({className:"text-nowrap font-semibold text-gray-950 leading-5 text-[14px]"},{children:a})),i&&s.jsx("p",Object.assign({className:"font-normal leading-4 text-[12px] text-nowrap text-gray-700"},{children:i}))]})),s.jsx(t.MdClose,{size:25,color:"#73737F",role:"button","aria-label":"Close toast"})]}));exports.ToastProvider=({children:t})=>{const[o,r]=e.useState(null);return e.useEffect((()=>{const s=setInterval((()=>{const s=a.getToast();s&&s!==o&&r(s)}),100);return()=>clearInterval(s)}),[o]),s.jsxs("div",{children:[o&&s.jsx("div",Object.assign({className:"absolute top-0 flex items-center justify-center w-full z-50"},{children:s.jsx(i,{type:o.type,message:o.message,description:o.description})})),t]})},exports.errorToast=(s,e)=>{a.showToast("error",s,e)},exports.infoToast=(s,e)=>{a.showToast("info",s,e)},exports.successToast=(s,e)=>{a.showToast("success",s,e)},exports.warningToast=(s,e)=>{a.showToast("warning",s,e)};
//# sourceMappingURL=index.js.map
