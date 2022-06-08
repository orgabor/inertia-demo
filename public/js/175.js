"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[175],{5175:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(821),a=r(9038),l=(0,n.createElementVNode)("h1",{class:"text-3xl"},"Create New User",-1),o={class:"mb-6"},s=(0,n.createElementVNode)("label",{class:"block mb-2 uppercase font-bold text-xs text-gray-700",for:"name"}," Name ",-1),d=["textContent"],m={class:"mb-6"},c=(0,n.createElementVNode)("label",{class:"block mb-2 uppercase font-bold text-xs text-gray-700",for:"email"}," Email ",-1),u=["textContent"],i={class:"mb-6"},p=(0,n.createElementVNode)("label",{class:"block mb-2 uppercase font-bold text-xs text-gray-700",for:"password"}," Password ",-1),f=["textContent"],b={class:"mb-6"},x=["disabled"];const w={__name:"Create",setup:function(e){var t=(0,a.cI)({name:"",email:"",password:""}),r=function(){t.post("/users")};return function(e,a){var w=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(w,{title:"Create User"}),l,(0,n.createElementVNode)("form",{onSubmit:a[3]||(a[3]=(0,n.withModifiers)((function(){return(0,n.unref)(r)&&(0,n.unref)(r).apply(void 0,arguments)}),["prevent"])),class:"max-w-md mx-auto mt-8"},[(0,n.createElementVNode)("div",o,[s,(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":a[0]||(a[0]=function(e){return(0,n.unref)(t).name=e}),class:"border border-gray-400 p-2 w-full",type:"text",name:"name",id:"name",required:""},null,512),[[n.vModelText,(0,n.unref)(t).name]]),(0,n.unref)(t).errors.name?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(t).errors.name),class:"text-red-500 text-xs mt-1"},null,8,d)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",m,[c,(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":a[1]||(a[1]=function(e){return(0,n.unref)(t).email=e}),class:"border border-gray-400 p-2 w-full",type:"email",name:"email",id:"email",required:""},null,512),[[n.vModelText,(0,n.unref)(t).email]]),(0,n.unref)(t).errors.email?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(t).errors.email),class:"text-red-500 text-xs mt-1"},null,8,u)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",i,[p,(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":a[2]||(a[2]=function(e){return(0,n.unref)(t).password=e}),class:"border border-gray-400 p-2 w-full",type:"password",name:"password",id:"password"},null,512),[[n.vModelText,(0,n.unref)(t).password]]),(0,n.unref)(t).errors.password?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,textContent:(0,n.toDisplayString)((0,n.unref)(t).errors.password),class:"text-red-500 text-xs mt-1"},null,8,f)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",b,[(0,n.createElementVNode)("button",{type:"submit",class:"bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500",disabled:(0,n.unref)(t).processing},"Submit",8,x)])],32)],64)}}}}}]);