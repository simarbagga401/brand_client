<template>
  <section id="FAQ">
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
        <h3 class="Heading" id="heading">How It Works?</h3>
      </nav>
       <hamburgerContent :hamburgerOpen="HamburgerOpen" />
        <main v-show="!HamburgerOpen">

        </main>
  </section>
</template>

<script>
import hamburger from '../components/hamburger.vue';
import hamburgerContent from '../components/hamburgerContent.vue';
export default {
  data(){
    return{
        HamburgerOpen:false,
        Heading:'How It Works?'
    }
  },
        components:{
            hamburger, 
            hamburgerContent
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
main{
    height:92vh;
    width:100vw;

}
.Heading{
    font-weight:700;
    font-size:30px;
    margin-left:30px;
    user-select:none;
}
</style>
