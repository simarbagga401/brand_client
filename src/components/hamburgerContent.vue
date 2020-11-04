<template>
  <section id="hamburgerContainer">  
        <section class="HamburgerContent" v-show="hamburgerOpen">
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
  </section>
</template>

<script>
    export default {
        props:["hamburgerOpen"],
        data(){
            return{
                HamburgerContent1:"HOME",
                HamburgerContent2:"HOW IT WORKS ?",
                HamburgerContent3:"OUR WORK",
                HamburgerContent4:"LOG IN / ",
                HamburgerContent5:"SIGN UP",
                HamburgerContent6:"FAQ SECTION",
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