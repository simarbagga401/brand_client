<template>
  <div id="app">
    <transition name="Router-Transition" mode="out-in"> 
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style scoped>
.Router-Transition-enter-active{
  animation:EnterAnimation .5s ease;
}
.Router-Transition-leave-active{
  animation:LeaveAnimation .5s ease;
}
@keyframes LeaveAnimation{
    0%{transform:translateX(0px)}
    100%{transform:translateX(-5px)}
}
@keyframes EnterAnimation{
    0%{transform:translateX(-5px)}
    100%{transform:translateX(0px)}
}
</style>
<style>
   *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        -webkit-font-smoothing: auto;
        -moz-osx-font-smoothing:auto;
        font-smooth:2em;
         user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
       a{
        text-decoration:none;
      }
      li{
        list-style-type: none;
      }
      @media screen and (max-width:400px) {
          #heading{
            font-size:24px;
          }
      }
      @media screen and (max-width:320px) {
          #heading{
            font-size:21px;
          }
      }
</style>