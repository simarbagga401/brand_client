<template>
    <section id="container">
        <header>
            <div class="contentBox">
                <h3>{{heading}}</h3>
                <p>{{description}}</p>
            </div>
            <main>
                <slot name="setContent"></slot>
            </main>
        </header>
                <footer>
                    <slot name="iconBtn"></slot>
                </footer>
                <div class="slotDiv">
                    <slot name="btn"></slot>
                </div>
                <div class="warningContainer" v-if="warning">
                    <p><span>NOTE : </span>File size shall not exceed 218kb.</p>    
                    <p><span>Total Size : </span>{{fileSize}}</p>        
                </div>
    </section>
</template>

<script>

    export default {
        props:["showWarning","totalSize"],
        data(){
            return{
                heading:"Design / Moqup",
                description:"Choose UI Design Or We Will Do it For You.",
                warning:this.showWarning,
                fileSize:1.2+'mb',
            }
        },
        components:{

        }
    }
</script>

<style scoped>
.slotDiv{
    position:absolute;
    left:-20px;
    top:-20px;
}
span{
    color:#FF5252;
}
.warningContainer{
    position:absolute;
    bottom:0px;
    left:20px; 
    display: flex;
    align-content: center;
    justify-content: space-between;
    width:60%;
    min-width:350px;
}
#container{ 
     height:20vh;
     width:90vw;
     max-width:1200px;
     padding:10px;
     background: #C5FFE2;
     position:relative;
     box-shadow:
     3px 2px 20px 0px rgba(0,0,0,0.1),
     -3px 0px 20px 0px rgba(0,0,0,0.1);
     border-radius:5px;   
     display:grid;
     grid-template-rows:80% 20%;
     margin:40px 10px;
}
header{   
    display:grid;
    grid-template-columns:35% 65%;
    grid-gap:10px;
}
.contentBox{
     height:100px;
     padding:5px 20px 20px 20px;
     box-shadow:
     3px 2px 20px 0px rgba(0,0,0,0.1),
     -3px 0px 20px 0px rgba(0,0,0,0.1);
     border-radius:5px;   
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     align-items:space-evenly;
     position: relative;
     background:#fff;
}
main{
    padding:10px;
}
footer{
    display: flex;
    justify-content:flex-end;
    align-items: center;
}
h3{
    font-size:16px;
    font-weight: 600;
}
p{
    font-size:12px;
    color:#212121;
    font-weight: 500;
}
@media screen and (max-width:750px){
    #container{
        height:400px;
    }
    header{
        grid-template-columns:1fr;
        grid-template-rows:1fr 3fr;
    }
}
@media screen and (max-width:500px){
    .warningContainer{
        min-width:300px;
    }
    .warningContainer p{
        font-size:10px;
    }
}
@media screen and (max-width:360px){
    .warningContainer{
        flex-direction:column;
    }
}
</style>