import Home from './views/Homepage.vue'





export default[
{
	path:'/',
	name:'Home',
	component:Home
},
{
	path:'/login',
	name:'Login',
	component: () => import(/*webpackChunkName:"login" */'./views/Login.vue')
},
{
	path:'/signUP',
	name:'SignUP',
	component: () => import(/*webpackChunkName:"signup" */'./views/SignUp.vue')

},
{
	path:'/forgotPassword',
	name:'ForgotPassword',
	component: () => import(/*webpackChunkName:"forgotpassword" */'./views/ForgotPassword.vue')

},
{
	path:'/ourWork',
	name:'OurWork',
	component: () => import(/*webpackChunkName:"ourwork" */'./views/OurWork.vue')

},
{
	path:'/fAQ',
	name:'FAQ',
	component: () => import(/*webpackChunkName:"faq" */'./views/FAQ.vue')

},
{
	path:'/howItWorks',
	name:'HowItWorks',
	component: () => import(/*webpackChunkName:"howitworks" */'./views/HowItWorks.vue')

},
{
	path:'/contactUs',
	name:'ContactUs',
	component: () => import(/*webpackChunkName:"contactus" */'./views/ContactUs.vue')

},
{
	path:'/orders',
	name:'Orders',
	component: () => import(/*webpackChunkName:"orders" */'./views/Orders.vue')

},
{
	path:'/admin',
	name:'Admin',
	component: () => import(/*webpackChunkName:"admin" */'./views/Admin.vue')

},
{
	path:'/services',
	name:'Services',
	component: () => import(/*webpackChunkName:"services" */'./views/Services.vue')

},
{
	path:'/services/webDevelopment',
	name:'WebDevelopment',
	component: () => import(/*webpackChunkName:"webdevelopment" */'./views/WebDevelopment.vue')

},
{
	path:'/services/desktopAppDevelopment',
	name:'DesktopAppDevelopment',
	component: () => import(/*webpackChunkName:"desktopappdevelopment" */'./views/DesktopAppDevelopment.vue')

},
{
	path:'/services/mobileAppDevelopment',
	name:'MobileAppDevelopment',
	component: () => import(/*webpackChunkName:"mobileappdevelopment" */'./views/MobileAppDevelopment.vue')

},
{
	path:'/services/uiDesign',
	name:'UiDesign',
	component: () => import(/*webpackChunkName:"uidesign" */'./views/UiDesign.vue')

},

];

