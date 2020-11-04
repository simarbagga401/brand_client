<template>
    <section id="techBox">
        <div class="container">
            <div class="selectContainer">
                <h1 class="selectHeading">{{heading}}</h1>
                <select name="selectBox" id="selectBox" v-model="techModel">
                    <option v-for="option in options" :key="option">{{option}}</option>
                </select>
                    <img src="../assets/icons/arrow_new_back.svg" alt="←" draggable="false" ondragstart="return false;" class="selectImage">
            </div>
            <div class="textContainer">
                <p>{{description}}</p>
                <div class="imageContainer">
                    <img :src="image" :class="{smallImage:this.smallImage}" draggable="false" ondragstart="return false;" :style="style"> <span v-if="showSass">+</span> <img src="../assets/logo/sass.svg" v-if="showSass" draggable="false" ondragstart="return false;"> <span v-if="showTypescript">+</span> <img src="../assets/logo/typescript.svg" v-if="showTypescript" draggable="false" ondragstart="return false;">
                </div>
            </div>
        </div>  
    </section>
</template>

<script>
    export default {
        props:["options","default"],
        data(){
            return{
                techModel:this.default,
                heading:'',
                description:'',
                image:'',
                smallImage:false,
                showSass:false,
                showTypescript:false,
                style:''
            }
        },
        watch:{
            techModel(){
                    this.updateContent();
            }
        },
        methods:{
            updateContent:function(){
                switch (this.techModel) {
                    case 'Vue':
                         this.heading = 'Front-End'    
                         this.image = require('../assets/logo/vue.svg')       
                         this.description = 'A Progressive JS Framwork'      
                         this.smallImage = false,
                         this.showSass = true,
                         this.showTypescript = true
                        break;
                    case 'React':
                         this.heading = 'Front-End'    
                         this.image = require('../assets/logo/react.svg')       
                         this.description = 'An Awesome JS Framwork'  
                         this.smallImage = false,
                         this.showSass = true,
                         this.showTypescript = true
                        break;
                    case 'Express':
                         this.heading = 'Rest Api'    
                         this.image = require('../assets/logo/express.svg')       
                         this.description = 'A awesome Node.js Framwork'     
                         this.smallImage = true,
                         this.showTypescript = true
                        break;
                    case 'GraphQL':
                         this.heading = 'GraphQL'    
                         this.image = require('../assets/logo/graphql.svg')       
                         this.description = 'A Query Language For Your Api'     
                         this.smallImage = false,
                         this.showTypescript = false
                        break;
                    case 'Firebase':
                         this.heading = 'Backend As A Service'    
                         this.image = require('../assets/logo/firebase.svg')       
                         this.description = 'Backend As A Service'  
                         this.smallImage = false
                        break;   
                    case 'Firestore':
                         this.heading = 'DataBase'    
                         this.image = require('../assets/logo/firestore.svg')       
                         this.description = 'NoSql Database by Firebase'  
                         this.smallImage = true,
                         this.style = "width:55px"
                        break;       
                    case 'MongoDB':
                         this.heading = 'DataBase'    
                         this.image = require('../assets/logo/mongodb.svg')       
                         this.description = 'NoSql DataBase Like JSON'   
                         this.smallImage = true,
                         this.style = "width:85px" 
                        break;            
                }
                // console.log(this.techModel)
            },
        },
        mounted(){
            this.updateContent();
        }
    }
</script>

<style scoped>
.container{
     height: 150px;
     width:64vw;
     max-width:550px;
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
     margin:20px 0px;
}
.selectContainer{
    display: flex;
    width:80%;
    justify-content:space-between;
    position: relative; 
}
.selectImage{
    width:16px;
    pointer-events: none;
    position:absolute;
    bottom:10px;
    right:5px;
    margin:0;
}
img{
    width:35px;
    margin:10px;
}
.smallImage{
    width:80px;
}
h1{
    font-size:18px;
    font-weight:600;
}
p{
    font-size:14px;
    color:#212121;
}
select{
    width:150px;
    padding:6px;
    font-size:15px;
    background:#fff;
    border:none;
    outline:none;
    border-radius:5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.27);
    appearance: none;
    cursor: pointer;
}
select:hover,select:active,select:focus{
    outline: none;
    border:none;
    background: rgb(250, 250, 250);
}
.textContainer{
    width:90%;
    display: flex;
    justify-content:space-between;
}
.imageContainer{
    display: flex;
}
span{
    align-self: center;
    font-size:18px;
    font-weight:500;
}
</style>