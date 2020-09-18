<template>
	<transition :name="direction" mode="in-out">
			<div class="CarouselSlider" v-show="visibleSlide === index">
				<slot></slot>
			</div>		
	</transition>

</template>


<style scoped>

.left-enter-active{
	animation:leftInAnimation 0.5s ease-out;
}
.left-leave-active{
	animation:leftOutAnimation 0.5s ease-out;
}
@keyframes leftInAnimation {
	0%{ transform: translateX(100%); }
	100%{ transform: translateX(-100%); }
}
@keyframes leftOutAnimation {
	0%{ transform: translateX(0); }
	100%{ transform: translateX(-100%); }
}

.right-enter-active{
	animation:rightInAnimation 0.5s ease-out;
}
.right-leave-active{
	animation:rightOutAnimation 0.5s ease-out;
}
@keyframes rightInAnimation {
	0%{ transform: translateX(-100%); }
	100%{ transform: translateX(0%); }
}
@keyframes rightOutAnimation {
	0%{ transform: translateX(0%); }
	100%{ transform: translateX(200%); }
}
</style>

<script>
	export default{
props:["index","visibleSlide","direction"],
		data(){
			return{

			}
		}
	}
</script>