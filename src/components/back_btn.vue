<template>
    <div class="btnContainer" >
        <button class="btn" @click="changeAdvance()" :class="{rotate:this.advance}">
            <img :src="image" alt="BACK">
        </button>
    </div>
</template>

<script>
    export default {
        props:["advance","image"],
        data(){
            return{

            }
        },
        methods:{
            changeAdvance(){
                let advance = this.advance;
                advance = !advance;
                this.$emit('updatedAdvance',advance);
            }
        }
    }
</script>

<style scoped>

.btn{
    width:50px;
    height:50px;
    background: rgb(255, 255, 255);
    border-radius:50%;
    padding:9px;
    transition: all .5s ease;
    outline:none;
    border:none;
    box-shadow: 0px 0px 34px rgba(0, 0, 0, 0.25);
}
.btn:hover,.btn:active{
    background: #41FF98;
    box-shadow:0px 0px 1px 0px #41FF98;
    width:50px;
    height:50px;
}
.btn:focus,.btn:active{
    outline:none;
    border:none;
}
.btn img{
    width:22px;
}
.btn.rotate{
    transform: rotateZ(180deg);
}
</style>