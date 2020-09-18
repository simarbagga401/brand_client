<template>
	<transition name="left" mode="in-out">
			<div class="CarouselSlider" v-show="visibleSlide === index">
				<slot></slot>
			</div>		
	</transition>

</template>

<script>
	export default{
props:["index","visibleSlide"],
		data(){
			return{

			}
		}
	}
</script>

<style scoped>

.left-enter-active{
	animation:leftInAnimation 0.1s ease-out;
}
.left-leave-active{
	animation:leftOutAnimation 0.1s ease-out;
}
@keyframes leftInAnimation {
	0%{ transform: translateX(100%); opacity:0;}
	100%{ transform: translateX(-100%);opacity:0; }
}
@keyframes leftOutAnimation {
	0%{ transform: translateX(0);opacity:0; }
	100%{ transform: translateX(-100%); opacity:0;}
}

</style>