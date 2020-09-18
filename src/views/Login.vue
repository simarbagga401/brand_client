<template>
  <section id="Login">
        <div class="HamburgerContainer" :class="BurgerFunction" @click="HamburgerOpen = !HamburgerOpen">
    <div class="Hamburger"></div>
        </div>   
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
            <div class="ImageContainer"><img src="../assets/illustration/log.svg" alt="ILLUSTRATION_IMAGE" draggable="false"></div>
            <h1 class="Heading">{{HeadingContent}}</h1>
            <form >
                <div class="InputContainer UsernameContainer"><img src="../assets/icons/person.svg" alt="" draggable="false"><input type="text"     placeholder="Username" required="true"></div>
                <div class="InputContainer PasswordContainer"><img src="../assets/icons/pin.svg" alt="" draggable="false"><input type="password"    placeholder="Password" required="true"></div>
                <button class="btn sign_up_btn">
                    <h3>Login</h3>
                </button>
                <h1 class="OR">OR</h1>
                <button class="btn google_btn">
                    <h3>Login With Google</h3>
                </button>
                <button class="btn instagram_btn">
                    <h3>Login With Instagram</h3>
                </button>
               <router-link to="/ForgotPassword" exact>Forgot Password?</router-link>
            </form>

        </main>
  </section>
</template>

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
        HeadingContent:'Login'
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

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins;
}
.Heading{
    position:absolute;
    right:10vw;
    top:30px;
    font-size:40px;
    color:white;
}
#Login{
    width:100vw;
    height:100vh;
    background: url(../assets/illustration/background.svg) #254433;
    background-size:650px;
    background-repeat:no-repeat;
}
.HamburgerContainer{
    width:35px;
    height:30px;
    margin-left:1vw;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    position:relative;
    top:15px;
    left:10px;
}
.Hamburger{
    width:25px;
    height:3px;
    background:white;
    border-radius:20%;
    transition:all 0.2s ease-in-out;
}
.Hamburger::before,.Hamburger::after{
    position:absolute;
    content:'';
    width:25px;
    height:3px;
    background:white;
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
    border:1px solid #f2f2f2;
}
.router-link-exact-active.router-link-active{
    color:white;
}
main{
    background-color:none;
    width:100vw;
    height:90vh;
}
.ImageContainer{
    width:400px;
    height:400px;
    position:absolute;
    top:150px;
    left:50px;
}
form{
    background-color:crimson;
    position:absolute;
    top:100px;
    right:10vw;
    height:480px;
    width:330px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:35px;
    background-color:#fff;
}
.InputContainer{
    background-color:none;
    display:flex;
    width:100%;
    border-bottom:3px solid black;
}
.InputContainer input{
    width:100%;
    border-radius:0;
    border:none;
    padding:7px;
    font-family:'poppins',arial,helvetica,verdana,sans-serif;
    background-color:none;
    font-size:16px;
    }
.InputContainer input:focus{
    outline:none;
    border:none;
} 
.InputContainer img{
    width:30px;
}
.btn{
    width:100%;
    padding:10px;
    border-radius:10px;
    outline:0;
    border:0;
}
.btn h3{
    font-weight:500;
    font-size:15px;
}
.sign_up_btn{
    background:#41FF98;
    font-family:'poppins',arial,helvetica,verdana,sans-serif;
    color:white;
    margin-top:10px;
}
.google_btn,.instagram_btn{
    background:none;
    border:3px solid black;
}
.instagram_btn:hover{
    background:purple;
    color:white;
}
.google_btn:hover{
    background:darkblue;
    color:white;
}

.btn:focus{
    outline:0;
}
.OR{
    font-weight:500;
}
@media screen and (max-width:860px){
    #SignUp{
        background-size:contain;
    }
    .ImageContainer{
        width:300px;
    }
}
@media screen and (max-width:750px){
    .ImageContainer{
        width:250px;
    }
}
@media screen and (max-width:715px){
    .ImageContainer{
        display:none;
    }
     form{
       position:absolute;
       top:50%;
       left:50%;
       transform: translate(-50%, -40%);
    }
    main{
        align-items:center;
        justify-content:center;
    }
    .Heading{
       position:absolute;
       top:22%;
       left:30%;
       transform: translate(-10%, -100%);
    }

}
@media screen and (max-width:360px){
    form{
        width:300px;
    }
}
@media screen and (max-width:310px){
    form{
        width:260px;

    }
}
@media screen and (max-height:665px) and (max-width:715px){
    .Heading{
        display:none;
    }
}
</style>

