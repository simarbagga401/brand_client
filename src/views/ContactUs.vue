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
        <div class="Notice">
            <h3>If You Have Any Problem Or Suggestion , You Can Always :-</h3>
            <p>Mail Us By Clicking Here </p><a href="#">www.bruh.gmail.com</a>
            <h3>OR</h3>
            <p>Post A FAQ By Clicking Here </p><router-link to="/FAQ" exact>Vist FAQ Page</router-link>
        </div>
            <h2>Reach Us On Social Media Too!</h2>
        <div class="SocialMedias">
            <div class="SocialMedia Instagram"></div>
            <div class="SocialMedia Facebook"></div>
            <div class="SocialMedia Twitter"></div>
            <div class="SocialMedia Youtube"></div>
        </div>
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
    height:92vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.SocialMedia{
    height:70px;
    width:70px;
    border-radius:10px;
    cursor: pointer;
}
.Instagram{
    height:60px;
    width:60px;
    background:url(../assets/icons/instagram.svg);
}
.Facebook{
    height:60px;
    width:60px;
    background:url(../assets/icons/facebook.svg);
}
.Twitter{
    background:url(../assets/icons/twitter.svg);
}
.Youtube{
    background:url(../assets/icons/youtube.svg);
}
.SocialMedias{
    height:120px;
    width:400px;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
}
.Notice{
    border-radius:8px;
    height:200px;
    background:#DCFFD7;
    padding:20px;
    width:80vw;
    margin-bottom:50px;
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
        Heading:'Contact Us',
        HamburgerOpen:false,
        HamburgerContent1:"HOME",
        HamburgerContent2:"HOW IT WORKS ?",
        HamburgerContent3:"OUR WORK",
        HamburgerContent4:"LOG IN / ",
        HamburgerContent5:"SIGN UP",
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