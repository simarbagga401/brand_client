<template>
    <div class="btnContainer" >
            <router-link :to="link" class="btn"><span>Build Now!</span></router-link>
    </div>
</template>

<script>
    export default {
        props:["link"]
    }
</script>

<style scoped>
    .btn{
        width:120px;
        height:40px;
        border:2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom:15px;
        right:15px;
        color: white;
        font-size:15px;
        overflow: hidden;
        border-radius:5px;
    } 
    .btn::before{
        content: '';
        width:100%;
        height:100%;
        bottom:0;
        left:-110%;
        position:absolute;
        background: #41FF98;
        transition: all .5s ease-in-out;
        z-index: 5;
    }
    .btn:hover::before,.btn:active::before{
        left:0;
    }
    span{
        color:white;
        transition: all .5s ease-in-out;
        z-index:6;
    }
    a:hover span{
        color:rgb(0, 0, 0);
        font-size:16px;
    }
</style>