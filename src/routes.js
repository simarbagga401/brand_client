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




export default[
{
	path:'/',
	name:'Home',
	component:Home
},
{
	path:'/Login',
	name:'Login',
	component:Login
},
{
	path:'/SignUP',
	name:'SignUP',
	component:SignUp
},
{
	path:'/ForgotPassword',
	name:'ForgotPassword',
	component:ForgotPassword
},
{
	path:'/OurWork',
	name:'OurWork',
	component:OurWork
},
{
	path:'/FAQ',
	name:'FAQ',
	component:FAQ
},
{
	path:'/HowItWorks',
	name:'HowItWorks',
	component:HowItWorks
},
{
	path:'/ContactUs',
	name:'ContactUs',
	component:ContactUs
},
{
	path:'/Orders',
	name:'Orders',
	component:Orders
},
{
	path:'/Admin',
	name:'Admin',
	component:Admin
},
{
	path:'/Services',
	name:'Services',
	component:Services
}
];

