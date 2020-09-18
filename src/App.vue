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
