"use strict";(self["webpackChunkbestbyte"]=self["webpackChunkbestbyte"]||[]).push([[205],{6205:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var o=s(3673),a=s(8880);const l={class:"row justify-center align-center",style:{height:"55vh"}},i=(0,o._)("div",{class:"div-row row full-width justify-center"},[(0,o._)("div",{class:"row fit items-end justify-center text-bold text-center text-h5"},[(0,o.Uk)(" Best "),(0,o._)("span",{class:"text-primary"},"Byte"),(0,o.Uk)("  Admin ")])],-1),n={class:"col-xs-12 col-md-6 q-px-xl self-center"};function d(e,t,s,d,m,r){const c=(0,o.up)("q-icon"),u=(0,o.up)("q-input"),p=(0,o.up)("q-btn"),w=(0,o.up)("q-form"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{class:"bg-secondary q-pa-xl"},{default:(0,o.w5)((()=>[(0,o._)("div",l,[i,(0,o._)("div",n,[(0,o.Wm)(w,{onSubmit:(0,a.iM)(r.login,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:m.formData.email,"onUpdate:modelValue":t[0]||(t[0]=e=>m.formData.email=e),standout:"bg-accent text-white",class:"q-mb-md",type:"email","bottom-slots":"",label:"Email",dense:"",clearable:"",rules:[e=>!!e||"Field is required!"]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(c,{round:"",dense:"",flat:"",name:"mdi-account"})])),_:1},8,["modelValue","rules"]),(0,o.Wm)(u,{modelValue:m.formData.password,"onUpdate:modelValue":t[2]||(t[2]=e=>m.formData.password=e),standout:"bg-accent text-white",class:"q-mb-md","bottom-slots":"",label:"Password",type:m.isPwd?"password":"text",clearable:"",dense:"",rules:[e=>!!e||"Field is required!"]},{append:(0,o.w5)((()=>[(0,o.Wm)(c,{name:m.isPwd?"mdi-eye":"mdi-eye-off",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>m.isPwd=!m.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,o.Wm)(p,{color:"primary",class:"full-width q-mb-md","icon-right":"mdi-login",label:"Login",type:"submit",size:"1em"})])),_:1},8,["onSubmit"])])])])),_:1})}var m=s(1959),r=s(52),c=s.n(r);const u={name:"Admin",components:{},data(){return{formData:{email:(0,m.iH)(""),password:(0,m.iH)("")},text:(0,m.iH)(""),isPwd:(0,m.iH)(!0),showPass:[],showId:[]}},methods:{async addLogin(){try{await c().post("http://localhost:5000/adminlogin",{login_email:this.formData.email,login_pw:this.formData.password})}catch(e){console.log(e)}},async show_admin(){try{const e=await c().get("http://localhost:5000/admin/"+this.formData.email);this.showPass=e.data.admin_password,this.showPass==this.formData.password?(console.log("Login Successfully"),window.open("http://localhost:3000/"),this.addLogin()):void 0==this.showPass?console.log("Invalid email"):console.log("Invalid password")}catch(e){console.log(e)}},async login(){this.show_admin()},onSubmit(){$q.notify({color:"green-4",textColor:"white",icon:"mdi-account",message:"Welcome!"}),this.$router.push("/home")}}};var p=s(4260),w=s(4379),h=s(5269),f=s(4842),g=s(4554),b=s(2165),y=s(7518),_=s.n(y);const q=(0,p.Z)(u,[["render",d]]),v=q;_()(u,"components",{QPage:w.Z,QForm:h.Z,QInput:f.Z,QIcon:g.Z,QBtn:b.Z})}}]);