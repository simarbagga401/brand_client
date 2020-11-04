<template>
  <section>
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
      </nav>
       <hamburgerContent :hamburgerOpen="HamburgerOpen" />
        <main>

        </main>
  </section>
</template>

<script>
import hamburger from '../../components/hamburger.vue';
import hamburgerContent from '../../components/hamburgerContent.vue';

    export default {
        data(){
            return{
                Heading:'Ui Design',
                HamburgerOpen:false,
            }
        },
        components:{
            hamburger, 
            hamburgerContent
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
.Heading{
    font-weight:700;
    font-size:30px;
    margin-left:30px;
    user-select:none;
}

</style>