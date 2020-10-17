import Home from './views/Homepage.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import OurWork from './views/OurWork.vue'
import FAQ from './views/FAQ.vue'
import HowItWorks from './views/HowItWorks.vue'
import ContactUs from './views/ContactUs.vue'
import Orders from './views/Orders.vue'
import Admin from './views/Admin.vue'
import Services from './views/Services.vue'
import ServiceForm from './views/ServiceForm.vue'





export default[
{
	path:'/',
	name:'Home',
	component:Home
},
{
	path:'/login',
	name:'Login',
	component:Login
},
{
	path:'/signUP',
	name:'SignUP',
	component:SignUp
},
{
	path:'/forgotPassword',
	name:'ForgotPassword',
	component:ForgotPassword
},
{
	path:'/ourWork',
	name:'OurWork',
	component:OurWork
},
{
	path:'/fAQ',
	name:'FAQ',
	component:FAQ
},
{
	path:'/howItWorks',
	name:'HowItWorks',
	component:HowItWorks
},
{
	path:'/contactUs',
	name:'ContactUs',
	component:ContactUs
},
{
	path:'/orders',
	name:'Orders',
	component:Orders
},
{
	path:'/admin',
	name:'Admin',
	component:Admin
},
{
	path:'/services',
	name:'Services',
	component:Services
},
{
	path:'/serviceForm',
	name:'ServiceForm',
	component:ServiceForm
}
];

