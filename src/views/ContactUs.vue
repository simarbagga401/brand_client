<template>
  <section id="ContactUs">
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
        <h3 class="Heading" id="heading">Contact Us</h3>
      </nav>
       <hamburgerContent :hamburgerOpen="HamburgerOpen" />
    <main v-show="!HamburgerOpen">
        <div class="Notice"> 
             <form >
                <div class="InputContainer UsernameContainer"><img src="../assets/icons/person.svg" alt="" draggable="false"><input type="text"     placeholder="Name" required="true"></div>
                <div class="InputContainer EmailContainer"><img src="../assets/icons/email.svg" alt="" draggable="false"><input type="email"        placeholder="Email" required="true"></div>
                <label for="textarea">Message:</label><textarea  id="textarea"  placeholder="Enter Message Or Suggestions!" required="true"></textarea>
                <button class="btn sign_up_btn">
                    <h3>Send</h3>
                </button>
            </form>
            <div class="Other">
            <h3>If You Have Any Problem Or Suggestion , You Can Always :-</h3>
            <p>Mail Us By Clicking Here </p><a href="#">www.bruh.gmail.com</a>
            <h3>OR</h3>
            <p>Post A FAQ By Clicking Here </p><router-link to="/fAQ" exact>Vist FAQ Page</router-link>
            </div>  
        </div>
            <h2>Reach Us On Social Media Too!</h2>
        <div class="SocialMedias">
            <div class="div1">
            <div class="SocialMedia Instagram"></div>
            <div class="SocialMedia Facebook"></div>
            </div>
            <div class="div2">
            <div class="SocialMedia Twitter"></div>
            <div class="SocialMedia Youtube"></div>
            </div>
        </div>
        <img src="../assets/illustration/Contact.svg" class="contact_us_svg" draggable="false"  ondragstart="return false;">
    </main>
</section>
</template>
<style scoped>
.Other{
    box-sizing:border-box;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    background:#fff;
    margin-left:20px;
    padding:35px;
    box-shadow:-3px 3px 7px rgba(0,0,0,0.3);
    border-radius:10px;
}
label{
    align-self: flex-start;
    font-size:15px;
}
textarea{
    resize:none;
    width:90%;
    height:100px;
}
textarea::placeholder{
    font-size:15px;
}
form{
    min-height:300px;
    height:350px;
    width:330px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:30px;
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
    margin-top:10px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
}
.sign_up_btn:focus{
    background:#39C87A;
}
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

.contact_us_svg{
    width:50vmax;
    max-width:600px;
    position: absolute;
    bottom:0;
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
.div1,.div2{
    display:flex;
    flex-direction:row;
    width:50%;
    justify-content:space-around;
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
h2{
    margin:10px;
}
.SocialMedias{
    height:140px;
    width:400px;
    display: flex;
    align-items:center;
    justify-content:space-evenly;
}
.Notice{
    border-radius:8px;
    min-height:300px;
    background:#DCFFD7;
    padding:20px;
    width:80vw;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    margin-bottom:50px;
    box-shadow:-3px 3px 7px rgba(0,0,0,0.3);
}
.Heading{
    font-weight:700;
    font-size:30px;
    margin-left:30px;
    user-select:none;
}
@media screen and (max-width:900px) {
    .Notice{
        flex-direction:row;
    }
}
@media screen and (max-width:470px){
    .contact_us_svg{
        width:85vw;
    }
    .SocialMedias{
        flex-direction: column;
        height:200px;
    }
}
@media screen and (max-height:890px){
    .contact_us_svg{
        display: none;
    }
}
</style>
<script>
import hamburger from '../components/hamburger.vue';
import hamburgerContent from '../components/hamburgerContent.vue';
  export default {
    data(){
     return{
        Heading:'Contact Us',
        HamburgerOpen:false,
     }
 },
 components:{
     hamburger,
     hamburgerContent
 }
 }
</script>