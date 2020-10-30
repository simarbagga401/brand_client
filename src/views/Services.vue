<template>
  <section id="ContactUs">
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
            <h1><router-link to="/howItWorks" exact>{{HamburgerContent2}}</router-link></h1>
            <hr >
            <h1><router-link to="/ourWork" exact>{{HamburgerContent3}}</router-link></h1>
            <hr >
            <h1><router-link to="/login" exact>{{HamburgerContent4}}</router-link>
                <router-link to="/signUp" exact>{{HamburgerContent5}}</router-link>
            </h1>
            <hr >
            <h1><router-link to="/fAQ" exact>{{HamburgerContent6}}</router-link></h1>
            </section>
    <main v-show="!HamburgerOpen">
        <section class="ContentSection" id="Section">
         <div class="ContentBox ContentBox1" @mousedown="fullScreen(1,2,3,4)">
                    <img src="../assets/illustration/tabs.svg" alt="Image" draggable="false" :class="{fullscreen:fullscreenImage}"  ondragstart="return false;">
                     <div class="ContentContainer">
                         <h3>Web Development</h3>
                         <p>Build Powerful And Beautiful Responise WebApps And Website</p>
                     </div>
            <ctaBtn v-show="ctaBtnVisible" :link="link[0]">
            </ctaBtn>
        <button class="btn" v-show="backBtnVisible" @click="smallScreen(1,4,2,3)">
            <img src="../assets/icons/arrow_back.svg" alt="BACK">
        </button>
         </div>
     <div class="ContentBox ContentBox2" @mousedown="fullScreen(2,1,3,4)">
                    <img src="../assets/illustration/mobile.svg" alt="Image" draggable="false" :class="{fullscreen:fullscreenImage}"  ondragstart="return false;">
                     <div class="ContentContainer">
                         <h3>Mobile App Development</h3>
                         <p>Build Powerful And Beautiful Cross-Platorm Mobile Apps</p>
                     </div>
            <ctaBtn v-show="ctaBtnVisible"  :link="link[1]">           
            </ctaBtn>
        <button class="btn" v-show="backBtnVisible" @click="smallScreen(2,1,4,3)">
            <img src="../assets/icons/arrow_back.svg" alt="BACK">
        </button>
    </div>
    <div class="ContentBox ContentBox3" @mousedown="fullScreen(3,2,1,4)">
                    <img src="../assets/illustration/desktop2.svg" alt="Image" draggable="false" :class="{fullscreen:fullscreenImage}"  ondragstart="return false;">
                     <div class="ContentContainer">
                         <h3>Desktop App Development</h3>
                         <p>Build Powerful And Beautiful Desktop App With The Power Of Electron.js</p>
                     </div>
            <ctaBtn v-show="ctaBtnVisible"  :link="link[2]">
            </ctaBtn>
        <button class="btn" v-show="backBtnVisible" @click="smallScreen(3,1,2,4)">
            <img src="../assets/icons/arrow_back.svg" alt="BACK">
        </button>
     </div>
    <div class="ContentBox ContentBox4" @mousedown="fullScreen(4,2,3,1)">
                    <img src="../assets/illustration/uiDesign.svg" alt="Image" draggable="false" :class="{fullscreen:fullscreenImage}"  ondragstart="return false;">
                     <div class="ContentContainer">
                         <h3>UI Designs</h3>
                         <p>Build Powerful And Beautiful Cross-Platorm Mobile Apps</p>
                     </div>
            <ctaBtn v-show="ctaBtnVisible"  :link="link[3]"></ctaBtn>
        <button class="btn" v-show="backBtnVisible" @click="smallScreen(4,1,2,3)">
            <img src="../assets/icons/arrow_back.svg" alt="BACK">
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
.btn{
    width:45px;
    height:45px;
    background: rgb(255, 255, 255);
    border-radius:50%;
    position:absolute;
    top:20px;
    left:20px;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: all .5s ease;
    outline:none;
    border:none;
    box-shadow: 0px 0px 34px rgba(0, 0, 0, 0.25);
}
.btn:hover,.btn:active{
    background: #41FF98;
    box-shadow:0px 0px 1px 0px #41FF98;
    width:55px;
    height:55px;
}
.btn:focus,.btn:active{
    outline:none;
    border:none;
}
.btn img{
    width:30px;
}
.ContentSection{
    background-color:#f2f2f2;
    max-width:1200px;
    width:90vw;
    height:80vh;
    position:relative;
    border-radius:10px;
    padding:10px;
    box-shadow:
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
    display: grid;
    grid-template-columns:repeat(2,minmax(250px,1fr));
    grid-template-rows:repeat(2,minmax(100px,1fr));
    grid-gap:10px;
    overflow: scroll;
}
.ContentBox{
    background: rgb(82, 82, 82);
    border-radius:10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
    transition: all .2s ease-in-out;
    position: relative;
}

.ContentBox:hover{
    background: #5f5f5f;
    box-shadow: 
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
}
.ContentContainer{
    width:30%;
    height:30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
h3{
    font-size:18px;
}
p{
    font-size:13px;
}
h3,p{
    color:white;
}
 img{
    width:150px;
}
main{
    height:92vh;
    width:100vw;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
}
.Select{
    border-radius:20px;
    width:300px;
    height:50px;
    background-color:white;
    border:2px solid grey;
    display:flex;
}
.Choice{
      border-radius:20px;
      width:50%;
      height:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      cursor: pointer;
}
.Choice1.active,
.Choice2.active{
    background-color:#41FF98;
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
img.fullscreen{
    width:250px;
    /* align-self: flex-start; */
}
@media screen and (max-width:960px){
    .ContentSection{
        grid-template-columns:1fr;
        grid-template-rows:repeat(4,300px);
    }
}
@media screen and (max-width:490px){
    .ContentSection{
        grid-template-columns:1fr;
        grid-template-rows:repeat(4,400px);
    }
    .ContentBox{
        flex-direction:column;
    }
    .ContentContainer{
        width:60%;
    }
}
</style>
<script>
import ctaBtn from '../components/cta_btn.vue';

  export default {
    data(){
     return{
        Heading:'Our Services',
        HamburgerOpen:false,
        HamburgerContent1:"HOME",
        HamburgerContent2:"HOW IT WORKS ?",
        HamburgerContent3:"OUR WORK",
        HamburgerContent4:"LOG IN / ",
        HamburgerContent5:"SIGN UP",
        Design:false,
        Development:true,
        HamburgerContent6:"FAQ SECTION",
        fullscreenImage:false,
        ctaBtnVisible:false,
        backBtnVisible:false,
        link:['/services/webDevelopment','/services/mobileAppDevelopment','/services/desktopAppDevelopment','/services/uiDesign']
     }
 },
  computed:{
    BurgerFunction:function(){
        return{
            open:this.HamburgerOpen
        }
    },
  },
  components:{
      ctaBtn
  },
  methods:{
      fullScreen(main,one,two,three){
                    var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
        document.querySelector(`.ContentBox${one}`).style.display  = 'none';
        document.querySelector(`.ContentBox${two}`).style.display = 'none';
        document.querySelector(`.ContentBox${three}`).style.display = 'none';
        if(w < 1350){
            document.querySelector(`.ContentBox${main}`).style.height = '76vh';
           document.querySelector(`.ContentBox${main}`).style.width = '87vw';
        }else{
            document.querySelector(`.ContentBox${main}`).style.height = '76vh';
           document.querySelector(`.ContentBox${main}`).style.width = '1170px';
        }
        this.fullscreenImage = true;
        this.ctaBtnVisible = true;
        this.backBtnVisible = true;
      },
      smallScreen(main,one,two,three){
        this.fullscreenImage = false;
        this.ctaBtnVisible = false;
        this.backBtnVisible = false;
        
        document.querySelector(`.ContentBox${one}`).style.display  = 'flex';
        document.querySelector(`.ContentBox${two}`).style.display = 'flex';
        document.querySelector(`.ContentBox${three}`).style.display = 'flex';
        document.querySelector(`.ContentBox${main}`).style.width = document.querySelector(`.ContentBox${one}`).style.width;
        document.querySelector(`.ContentBox${main}`).style.height = document.querySelector(`.ContentBox${one}`).style.width;
      }
  }
 }
</script>