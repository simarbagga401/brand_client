<template>
    <div>
        <div class="container">
            <img :src="image" draggable="false" ondragstart="return false;">
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props:["image"],
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style  scoped> 
.container{
     height:30px;
     width:110px;
     padding:3px 5px;
     margin:5px;
     background: #fff;
     box-shadow:
     3px 2px 20px 0px rgba(0,0,0,0.1),
     -3px 0px 20px 0px rgba(0,0,0,0.1);
     border-radius: 5px;   
     display:flex;
     justify-content:space-evenly;
     align-items: center;
     transition: all .5s ease;
     cursor: pointer;
}
img{
    width:14px;
}
p{
    font-size:11px;
    font-weight: 600;
}
</style>