<template>
  <section id="hamburgerContainer">  
        <section class="HamburgerContent" v-show="hamburgerOpen">
            <h1><router-link to="/" exact>{{HamburgerContent1}}</router-link></h1>
            <hr >
            <h1><router-link to="/howItWorks" exact>{{HamburgerContent2}}</router-link></h1>
            <hr >
            <h1><router-link to="/ourWork" exact>{{HamburgerContent3}}</router-link></h1>
            <hr >
            <h1>
                    <router-link to="/login" exact  v-if="!signInBool">{{HamburgerContent4}}</router-link>
                    <router-link to="/signUp" exact  v-if="!signInBool">{{HamburgerContent5}}</router-link>
                    <p v-if="signInBool" @click="signOut()">Sign Out</p>
            </h1>
            <hr >
            <h1><router-link to="/fAQ" exact>{{HamburgerContent6}}</router-link></h1>
        </section>
  </section>
</template>

<script>
import firebase from 'firebase';
import 'firebase/auth'
    export default {
        props:["hamburgerOpen"],
        data(){
            return{
                HamburgerContent1:"Home",
                HamburgerContent2:"How It Works ?",
                HamburgerContent3:"Our Work",
                HamburgerContent4:"Log In / ",
                HamburgerContent5:"Sign Up",
                HamburgerContent6:"FAQ Section",
                signInBool:this.$store.getters.getSignInBool,
            }
        },
        methods:{
             signOut(){
                firebase.auth().signOut().then(() => console.log('successful signout')).catch(err => console.log(err))
            }
        }
    }
</script>

<style  scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins;
}
.HamburgerContent{
    height:250px;
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