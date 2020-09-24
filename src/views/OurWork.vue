<template>
  <section id="OurWork">
<nav>
        <div class="HamburgerContainer" :class="BurgerFunction" @click="HamburgerOpen = !HamburgerOpen">
    <div class="Hamburger">
    </div>
        </div>   
          <h1 class="Heading">{{Heading}}</h1> 
</nav>    
            <section class="HamburgerContent" v-show="HamburgerOpen">
            <h1><router-link to="/" exact>{{HamburgerContent1}}</router-link></h1>
            <hr >
            <h1><router-link to="/HowItWorks" exact>{{HamburgerContent2}}</router-link></h1>
            <hr >
            <h1><router-link to="/OurWork" exact>{{HamburgerContent3}}</router-link></h1>
            <hr >
            <h1><router-link to="/Login" exact>{{HamburgerContent4}}</router-link>
                <router-link to="/SignUp" exact>{{HamburgerContent5}}</router-link>
            </h1>
            <hr >
            <h1><router-link to="/FAQ" exact>{{HamburgerContent6}}</router-link></h1>
        </section>
        <main v-show="!HamburgerOpen">
            <section class="WorkSection WorkSection1" v-for="AppContent in AppContents" :key="AppContent._id">
                <div class="WorkContainer" :style="AppContent.ContainerColor">
                    <div class="Work Work1" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image1" alt="Image1" type="image/svg+xml" draggable="false">
                    </div>
                    <div class="Work Work2" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image2" alt="Image2" type="image/svg+xml" draggable="false">
                    </div>
                    <div class="Work Work3" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image3" alt="Image3" type="image/svg+xml" draggable="false">
                    </div>
                    <div class="Work Work4" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image4" alt="Image4" type="image/svg+xml" draggable="false">
                    </div>
                    <div class="WorkContent" :style="AppContent.BoxColor">
                        <h1 :style="AppContent.TextColor">{{AppContent.Heading}}</h1>
                        <p :style="AppContent.TextColor">{{AppContent.Description}}</p>
                    </div>
                      <button class="btn">
                          Visit
                      </button>
                </div>
            </section>
        </main>
  </section>
</template>


<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins;
}
nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
}
main{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.WorkSection{
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.Heading{
    font-weight:700;
    font-size:30px;
    margin-left:30px;
    user-select:none;
}
.HamburgerContainer{
    width:35px;
    height:30px;
    margin-left:1vw;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
}
.Hamburger{
    width:25px;
    height:3px;
    background:black;
    border-radius:20%;
    transition:all 0.2s ease-in-out;
}
.Hamburger::before,.Hamburger::after{
    position:absolute;
    content:'';
    width:25px;
    height:3px;
    background:black;
    border-radius:20%;
    transition:all 0.5s ease-in-out;
}
.Hamburger::before{
    transform:translateY(-7px);
}
.Hamburger::after{
    transform:translateY(7px);
}
.HamburgerContainer.open .Hamburger{
    transform:translateX(-5px);
    background:none;
}
.HamburgerContainer.open .Hamburger::before{
    transform:rotate(45deg);
}
.HamburgerContainer.open .Hamburger::after{
    transform:rotate(-45deg);
}
.HamburgerContent{
    height:30vh;
    background-color:none;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    position:absolute;
    top:60px;
    user-select:none;
}
.HamburgerContent h1{
    font-weight:400;
    margin-left:20px;
    animation:HamburgerAnimation 0.7s ease-out;
}
@keyframes HamburgerAnimation{
    0%{
        margin-left:0px;
    }
    50%{
        margin-left:25px;
    }
    100%{
        margin-left:20px;
    }
}
.HamburgerContent h1 a{
   text-decoration:none;
   font-family:'poppins',sans-serif,helvetica,arial;
   color:black;
   cursor:pointer;
}
hr{
    width:90vw;
    border:1.5px solid #41FF98;
}
.router-link-exact-active.router-link-active{
    color:#41FF98;
}
.WorkContainer{
    background-color:#C5FFE2;
    width:90vw;
    height:80vh;
    position:relative;
    border-radius:10px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
}
.Work1{
    width:380px;
    height:270px;
    top:-5%;
    right:-2%;
}
.Work1.Mobile{
    width:190px;
    height:410px;
    left:35%;
    background-color:lightgreen;
}
.Work2.Mobile{
    left:-3%;
    top:30%;
    width:169px;
    height:364px;
}
.Work3.Mobile,.Work4.Mobile{
    width:150px;
    height:325px;
}
.Work3.Mobile{
    bottom:40%;
}
.Work4.Mobile{
    bottom:20%;
    left:60%;
}
.Work2.Desktop{
    left:-3%;
}
.Work1.Desktop{
    left:30%;
}
.Work3.Desktop{
    width:350px;
    height:249px;
    left:20%;
    bottom:-10%;
}
.Work4.Desktop{
    display:none;
}
.Work2{
    width:350px;
    height:249px;
    top:7%;
    left:5%;
}
.Work3{
    width:127px;
    height:275px;
    bottom:-5%;
    left:15%;
}
.Work4{
    width:127px;
    height:275px;
    bottom:-5%;
    left:30%;
}  
.Work{
    position:absolute;
    border-radius:7px;
    box-shadow:-3px 3px 7px rgba(0,0,0,0.3);
}
.Work img{
    border-radius:7px;
    width:100%;
    height:100%;
}
.WorkContent{
    position:absolute;
    background-color:#fff;
    width:300px;
    height:100px;
    bottom:10px;
    right:10px;
    border-radius:5px;
    padding:10px;
}
.WorkContent h1{
    font-weight:600;
}
.WorkContent p{
    font-size:15px;
}
.btn{
    background-color:#41FF98;
    cursor:pointer;
    width:100px;
    height:40px;
    outline:none;
    border:none;
    border-radius:2px;
    position:absolute;
    bottom:-50px;
    right:0px;
    font-weight:400;
    font-size:16px;
}
.btn:focus{
    background-color:#39C87A;
    outline:none;
    border:none;
}
@media screen and (max-width:750px){
    .Work1,.Work3,.Work4{
        display:none;
    }
    .Work2{
        left:15%;
    }
}
</style>
<script>
    export default {
  data(){
    return{
        HamburgerOpen:false,
        HamburgerContent1:"HOME",
        HamburgerContent2:"HOW IT WORKS ?",
        HamburgerContent3:"OUR WORK",
        HamburgerContent4:"LOG IN / ",
        HamburgerContent5:"SIGN UP",
        HamburgerContent6:"FAQ SECTION",
        Heading:'Our Work',
        AppContents:[
        {   key:1,
            Mobile:false,
            Desktop:false,
            Image1:require("../assets/OurWork/Bruh.web[Homepage].svg",),
            Image2:require("../assets/OurWork/Bruh.web[LogIn].svg"),
            Image3:require("../assets/OurWork/Bruh.web[Phone].svg"),
            Image4:require("../assets/OurWork/Bruh.web[Phone2].svg"),
            Heading:"Bruh (WebApp)",
            Description:"A Wonderful WebApp Which Provides Development and Design Services.",

         },
        {
            Mobile:true,
            Desktop:false,
            Image1:require("../assets/OurWork/Bruh.web[Phone2].svg",),
            Image2:require("../assets/OurWork/Bruh.web[Phone].svg"),
            Image3:require("../assets/OurWork/Bruh.web[Phone].svg"),
            Image4:require("../assets/OurWork/Bruh.web[Phone2].svg"),
            Heading:"Bruh (MobileApp)",
            Description:"A Wonderful WebApp Which Provides Development and Design Services."
         },
       {
            Mobile:false,
            Desktop:true,
            Image1:require("../assets/OurWork/Bruh.web[Homepage].svg",),
            Image2:require("../assets/OurWork/Bruh.web[LogIn].svg"),
            Image3:require("../assets/OurWork/Bruh.web[Homepage].svg"),
            Image4:require("../assets/OurWork/Bruh.web[Phone2].svg"),
            Heading:"Bruh (DesktopApp)",
            Description:"A Wonderful WebApp Which Provides Development and Design Services.",
            ContainerColor:'background-color:lightgreen',
            BoxColor:'background-color:pink'

         }
            ],
    }
  },
  components: {
   
  },
    computed:{
    BurgerFunction:function(){
        return{
            open:this.HamburgerOpen
        }
    }
}
}
</script>
