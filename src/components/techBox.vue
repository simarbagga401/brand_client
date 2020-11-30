<template>
    <section id="techBox">
        <div class="container">
            <div class="selectContainer">
                <h1 class="selectHeading">{{field}}</h1>
                <select name="selectBox" v-model="techModel">
                    <option v-for="option in options.options" :key="option">{{option}}</option>
                </select>
                    <img src="../assets/icons/arrow_new_back.svg" alt="←" draggable="false" ondragstart="return false;" class="selectImage">
            </div>
            <div class="textContainer">
                <p>{{description}}</p>
                <div class="imageContainer">
                    <img :src="image" draggable="false" ondragstart="return false;" :style="style"> 
                    <span v-if="extraImage1Bool">+</span>
                     <img :src="extraImage1Src" v-if="extraImage1Bool"  :style="extraImage1Style"   draggable="false" ondragstart="return false;">
                      <span v-if="extraImage2Bool">+</span>
                       <img :src="extraImage2Src" v-if="extraImage2Bool" :style="extraImage2Style" draggable="false" ondragstart="return false;">
                </div>
            </div>
        </div>  
    </section>
</template>

<script>
    export default {
        props:["options","field"],
        name:'techBox',
        data(){
            return{
                techModel:this.options.default,
                description:'',
                image:'',
                extraImage1Bool:false,
                extraImage2Bool:false,
                extraImage1Src:"",
                extraImage2Src:"",
                extraImage1Style:"",
                extraImage2Style:"",
                style:'',
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
                         this.image = require('../assets/logo/vue.svg')       
                         this.description = 'A Progressive JS Framwork'      
                         this.extraImage1Bool = true,
                         this.extraImage2Bool = true,
                         this.extraImage1Src = require("../assets/logo/typescript.svg"),
                         this.extraImage2Src = require("../assets/logo/sass.svg")
                        break;
                    case 'React':   
                         this.image = require('../assets/logo/react.svg')       
                         this.description = 'An Awesome JS Framwork'  
                         this.extraImage1Bool = true,
                         this.extraImage2Bool = true,
                         this.extraImage1Src = require("../assets/logo/typescript.svg"),
                         this.extraImage2Src = require("../assets/logo/sass.svg")
                        break;
                    case 'Node.js':   
                         this.image = require('../assets/logo/express.svg')       
                         this.description = 'A awesome Node.js Framwork'     
                         this.extraImage1Bool = true,
                         this.extraImage2Bool = false,
                         this.extraImage1Src = require("../assets/logo/typescript.svg"),
                         this.extraImage2Src = "",
                         this.style = "width:80px"
                        break;
                    case 'GraphQL': 
                         this.image = require('../assets/logo/graphql.svg')       
                         this.description = 'A Query Language For Your Api'     
                         this.extraImage1Bool = false,
                         this.extraImage2Bool = false,
                         this.extraImage1Src = "",
                         this.extraImage2Src = ""
                        break;
                    case 'REST': 
                         this.image = require('../assets/logo/rest.png')       
                         this.description = 'A Query Language For Your Api'     
                         this.extraImage1Bool = false,
                         this.extraImage2Bool = false,
                         this.extraImage1Src = "",
                         this.extraImage2Src = ""
                        break;
                    case 'Firebase':  
                         this.image = require('../assets/logo/firebase.svg')       
                         this.description = 'Backend As A Service'  
                         this.extraImage1Bool = false,
                         this.extraImage2Bool = false,
                         this.extraImage1Src = "",
                         this.extraImage2Src = "",
                         this.style = "width:30px"
                        //  this.changeDefaultTech({id:14,newDefault:"Firestore"})
                        break;   
                    case 'Firestore':
                         this.image = require('../assets/logo/firestore.svg')       
                         this.description = 'NoSql Database by Firebase'  
                         this.style = "width:55px"
                         this.extraImage1Bool = false,
                         this.extraImage2Bool = false,
                         this.extraImage1Src = "",
                         this.extraImage2Src = ""
                        break;       
                    case 'MongoDB + AWS': 
                         this.image = require('../assets/logo/mongodb.svg')       
                         this.description = 'NoSql DataBase Like JSON'   
                         this.style = "width:80px" 
                         this.extraImage1Bool = true,
                         this.extraImage2Bool = false,
                         this.extraImage1Src = require("../assets/logo/aws.svg"),
                         this.extraImage1Style = "width:80px",
                         this.extraImage2Src = ""
                        break;      
                }
                // console.log(this.techModel)
            },
            // changeDefaultTech(obj){
            //     this.$emit('changeDefaultTech',obj)
            // }
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