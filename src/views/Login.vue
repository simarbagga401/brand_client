<template>
  <section id="Login">
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
      </nav>
       <hamburgerContentWhite :hamburgerOpen="HamburgerOpen" />
        <main v-show="!HamburgerOpen">
            <div class="ImageContainer"><img src="../assets/illustration/log.svg" alt="ILLUSTRATION_IMAGE" draggable="false"></div>
            <h1 class="Heading">{{HeadingContent}}</h1>
            <form >
                <div class="InputContainer UsernameContainer"><img src="../assets/icons/person.svg" alt="" draggable="false"  ondragstart="return false;"><input type="text"     placeholder="Username" required="true"></div>
                <div class="InputContainer PasswordContainer"><img src="../assets/icons/pin.svg" alt="" draggable="false"  ondragstart="return false;"><input type="password"    placeholder="Password" required="true"></div>
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
               <router-link to="/forgotPassword" exact>Forgot Password?</router-link>
            </form>

        </main>
  </section>
</template>

<script>
import hamburger from '../components/hamburger.vue';
import hamburgerContentWhite from '../components/hamburgerContentWhite.vue';
export default {
    
data(){
    return{
    HamburgerOpen:false,
    HeadingContent:"Login"
    }
},
        components:{
            hamburger,
            hamburgerContentWhite
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
nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
}
.Heading{
    position:absolute;
    right:10vw;
    top:15vh;
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
    position:absolute;
    top:25vh;
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
    box-shadow:-3px 3px 7px rgba(0,0,0,0.3);
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
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    margin-top:10px;
}
.sign_up_btn:focus{
    background:#39C87A;
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

