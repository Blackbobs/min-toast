import{jsxs as e,jsx as s}from"react/jsx-runtime";import{createContext as t,useState as r,useContext as o}from"react";import{MdClose as i}from"react-icons/md";import{IoCheckmarkCircle as a,IoInformation as n,IoCloseCircleSharp as c}from"react-icons/io5";import{IoIosWarning as l}from"react-icons/io";const m=({type:t,message:r,description:o})=>e("div",Object.assign({className:"w-[358px] md:w-[452px] h-[90px] rounded-lg bg-white p-5 my-3 mx-auto border border-[#E4E4E4] shadow shadow-[#0000001A] flex items-center gap-5"},{children:[(()=>{switch(t){case"success":default:return s(a,{size:25});case"error":return s(c,{size:25,color:"#ff0000"});case"info":return s(n,{size:25,color:"#0000ff"});case"warning":return s(l,{size:25,color:"#FFEB3B"})}})(),e("div",Object.assign({className:"flex-1 flex flex-col items-start gap-1"},{children:[s("h2",Object.assign({className:"text-nowrap font-semibold text-gray-950 leading-5 text-[14px]"},{children:r})),s("p",Object.assign({className:"font-normal leading-4 text-[12px] text-nowrap text-gray-700"},{children:o}))]})),s(i,{size:25,color:"#73737F"})]})),d=t(void 0),p=({children:t})=>{const[o,i]=r(null);return e(d.Provider,Object.assign({value:{showToast:(e,s,t)=>{i({type:e,message:s,description:t}),setTimeout((()=>{i(null)}),5e3)}}},{children:[t,o&&s("div",Object.assign({className:"absolute top-0 flex items-center justify-center w-full z-50"},{children:s(m,{type:o.type,message:o.message,description:o.description})}))]}))},u=()=>{const{showToast:e}=(()=>{const e=o(d);if(!e)throw new Error("useToast must be used within a ToastProvider");return e})();return{showToast:e}};export{m as Toast,p as ToastProvider,u as useToastNotifications};
//# sourceMappingURL=index.mjs.map