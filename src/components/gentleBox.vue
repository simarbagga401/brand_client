<template>
    <section id="gentleBox">
        <div class="container">
            <h2><img src="../assets/icons/tick.svg" alt="image">{{heading}}</h2>
            <div class="textContainer">
                <p>{{description}}</p>
            </div>
            <div class="btn">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props:["heading","description"],
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
.container{
     height: 150px;
     padding:5px 20px 20px 20px;
     background: #fff;
     box-shadow:
     3px 2px 20px 0px rgba(0,0,0,0.1),
     -3px 0px 20px 0px rgba(0,0,0,0.1);
     border-radius: 10px;   
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     align-items:space-evenly;
     position: relative;
}
    .container:hover,.container:active{
        outline:.1px solid #FF5252;
    }
img{
    width:20px;
    margin-right:10px;
}
h2{
    font-size:18px;
    font-weight: 600;
}
p{
    font-size:14px;
    color:#212121;
}
.textContainer{
    width:70%;
}
.btn{
    position:absolute;
    bottom:10px;
    right:10px;
}
</style>