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
        <div class="Select" v-if="nothing">
            <div class="Choice Choice1" :class="{active:Development}" @click="Development = true, Design= false"><p>Development</p></div>
            <div class="Choice Choice2" :class="{active:Design}" @click="Development = false, Design= true"><p>Design</p></div>
        </div>
        <section class="ContentSection">
                <img src="../assets/illustration/desktop2.svg" alt="Image1" draggable="false" class="Image1">
            <div class="ContentContainer ContentContainer1">
                    <h3>Desktop-App Development</h3>
                    <p>Build Powerful And Beautiful Desktop App With The Power Of Electron.js</p>
            </div>
                <img src="../assets/illustration/tabs.svg" alt="Image2" draggable="false" class="Image2">
            <div class="ContentContainer ContentContainer2">
                    <h3>Web Development</h3>
                    <p>Build Powerful And Beautiful Responise WebApps And Website</p>
            </div>
                <img src="../assets/illustration/mobile.svg" alt="Image3" draggable="false" class="Image3">
            <div class="ContentContainer ContentContainer3">
                    <h3>Mobile-App Development</h3>
                    <p>Build Powerful And Beautiful Cross-Platorm Mobile Apps</p>
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

.ContentSection{
    background-color:#f2f2f2;
    width:90vw;
    height:80vh;
    position:relative;
    border-radius:10px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
}
.ContentContainer{
    border-radius:10px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    width:200px;
    height:300px;
    padding:30px;
    background:#525252;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
}
h3,p,.ContentContainer{
    color:white;
    cursor: pointer;
}
.ContentContainer1{
    left:250px;
    bottom:20px;
}
 img{
    width:200px;
    position:absolute;
}
.Image1{
    left:250px;
    top:20px;
    z-index:5;
}
.Image2{
    left:500px;
    top:20px;
    z-index:5;
}
.Image3{
    left:780px;
    top:30px;
    z-index:5;
}
.ContentContainer2{
    background-color:#4A4347;
    width:270px;
    height:350px;
    padding:100px 20px;
    left:480px;
    bottom:40px;
}
.ContentContainer2 h3{
    align-self:flex-start;
}
.ContentContainer3{
    left:780px;
    bottom:60px;
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
</style>
<script>
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
     }
 },
  computed:{
    BurgerFunction:function(){
        return{
            open:this.HamburgerOpen
        }
    },
  }
 }
</script>