<template>
  <section id="FAQSection">
<nav>
        <div class="HamburgerContainer" :class="BurgerFunction" @click="HamburgerOpen = !HamburgerOpen">
    <div class="Hamburger">
    </div>
        </div>   
          <h1 class="Heading">{{Heading}}</h1> 
</nav>  
        <section class="HamburgerContent" v-show="HamburgerOpen">
            <h1><router-link to="/" exact>{{HamburgerContent1}}</router-link></h1>
            <hr >
            <h1><router-link to="/howItWorks" exact>{{HamburgerContent2}}</router-link></h1>
            <hr >
            <h1><router-link to="/ourWork" exact>{{HamburgerContent3}}</router-link></h1>
            <hr >
            <h1><router-link to="/login" exact>{{HamburgerContent4}}</router-link>
                <router-link to="/signUp" exact>{{HamburgerContent5}}</router-link>
            </h1>
            <hr >
            <h1><router-link to="/fAQ" exact>{{HamburgerContent6}}</router-link></h1>
        </section>
        <main v-show="!HamburgerOpen && !stageOpen">
        <section class="stageContainer">
            <template v-for="stage in stages">
                <div class="stage" :key="stage.id">
                    <h1 class="stageHeading">{{stage.id}}.</h1>
                    <gentleBox class="gentleBox" :heading="stage.heading" :description="stage.description">
                        <gentleBtn @click.native="stageOpen = !stageOpen">Open</gentleBtn>
                    </gentleBox>
                </div>
            </template>
            <div class="advanceContainer">
                <backBtn class="backBtn" :advance="advance" :image="stylishArrow" @updatedAdvance="updateAdvance"></backBtn>
                <div class="advanceContainerColumn">
                    <h1 class="imageHeading" >Advance (Choose Technology)</h1>
                    <hr class="imageHr" :class="{grow:this.advance}" > 
                </div>
            </div>
            <template v-for="options in optionArray">    
                 <techBox v-show="advance" :options="options.options" :third="options.third" :default="options.default" :key="options.default"></techBox>
            </template>
           
        </section>
            <div class="imageContainer">
                <img src="../assets/illustration/checkBox.svg" alt="Image" class="illustration" ondragstart="return false;">
                <div class="headingContainer">
                    <h1 class="imageHeading">3 Steps And You Are <span>Done.</span></h1>
                </div>
            </div>
            <p>To Request Any Technology Or Feature You Can <router-link to="/contactUs" exact> Contact Us.</router-link></p>
        </main>
        <main v-show="!HamburgerOpen && stageOpen">
            <stageChild :showWarning="true">
                <backBtn :image="normalArrow" class="normalArrowBackBtn" @click.native="stageOpen = false" slot="btn"></backBtn>
                <template slot="setContent">
                    <h1>lorem ipusun deoru ramen.</h1>
                </template>
                <template slot="iconBtn">
                    <gentleIconBtn :image="fileIcon">Upload Files</gentleIconBtn>
                </template>
                <template slot="iconBtn">
                    <gentleIconBtn :image="doneIcon">Do it For Me </gentleIconBtn>
                </template>     
            </stageChild>
        </main>
  </section>
</template>

<script>
import gentleBox from '../components/gentleBox.vue';
import techBox from '../components/techBox.vue';
import backBtn from '../components/back_btn';
import gentleBtn from '../components/gentleBtn.vue';
import stageChild from '../components/stageChild1.vue';
import gentleIconBtn from '../components/gentleIconBtn.vue';
    export default {
        data(){
            return{
                Heading:'Web Development',
                HamburgerOpen:false,
                HamburgerContent1:"HOME",
                HamburgerContent2:"HOW IT WORKS ?",
                HamburgerContent3:"OUR WORK",
                HamburgerContent4:"LOG IN / ",
                HamburgerContent5:"SIGN UP",
                HamburgerContent6:"FAQ SECTION",
                advance:false,
                stageOpen:false,
                normalArrow:require("../assets/icons/arrow_back.svg"),
                stylishArrow:require("../assets/icons/arrow_new_back.svg"),
                fileIcon:require("../assets/icons/file-upload.svg"),
                doneIcon:require("../assets/icons/tick.svg"),
                stages:[{
                    id:1,
                    heading:'Design / Moqup',
                    description:'Choose UI Design , Colors , Font etc For Your Website Or Web app.'
                },
                {
                    id:2,
                    heading:'Add Content',
                    description:'Add Illustrations , Text , Photos , SVG etc That You Want To Include'
                },
                 {
                    id:3,
                    heading:'Choose Features',
                    description:'Choose Features That You’d Like To add for eg. Login facility , Admin Panel etc.'
                }],
                optionArray:[
                    {
                        default:"Vue",
                        options:["Vue","React"],
                        third:false
                    },
                    {
                        default:"Express",
                        options:["Express","GraphQL","Firebase"],
                        third:true
                    },
                    {
                        default:"Firestore",
                        options:["Firestore","MongoDB"],
                        third:false
                    },                
                ]

            }
        },
        computed:{
            BurgerFunction:function(){
            return{
                open:this.HamburgerOpen
            }
        },
    },
    methods:{
        updateAdvance(value){
            this.advance = value;

        }
    },
            components:{
            gentleBox,
            backBtn,
            techBox,
            gentleBtn,
            stageChild,
            gentleIconBtn
        }
    }
</script>

<style scoped>
.FAQSection{
    background: rgb(233, 233, 233);
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins;
}
p{
    position:fixed;
    bottom:20px;
    right:20px;
}
.stage{
    height:150px;
    display: flex;
    margin:20px;
    justify-content:space-between;
    width:70vw;
    max-width:550px;
}
.stageHeading{
    font-size:34px;
}
.gentleBox{
    width:92%;
}
.mainContainer{
    display: flex;
    flex-direction: column;

}
.illustration{
    width:250px;
}
.imageHeading{
    font-weight: 400;
    margin-top:20px;
}
.headingContainer{
    width:180px;
}
.advanceContainer{
    display: flex;
    width:400px;
    justify-content:space-around;
    margin:10px;
}
.advanceContainerColumn{
    display: flex;
    flex-direction: column;
    height:60px;
    justify-content:space-between;
}

.imageHr{
    color:black;
    width:320px;
    border:3px solid #41FF98;
    transition: all .5s ease;
}
.imageHr.grow{
    width:400px;
}
.backBtn{
    margin:13px 13px 0px 0px;
}
.normalArrowBackBtn{
    z-index:10;
}
span{
    color: #FF5252;
}
nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
}
main{
    height:92vh;
    width:100vw;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:space-around;
    padding:40px;
    position: relative;
}
.Heading{
    font-weight:700;
    font-size:30px;
    margin-left:30px;
    user-select:none;
}
.HamburgerContainer{
    width:35px;
    height:30px;
    margin-left:1vw;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
}
.Hamburger{
    width:25px;
    height:3px;
    background:black;
    border-radius:20%;
    transition:all 0.2s ease-in-out;
}
.Hamburger::before,.Hamburger::after{
    position:absolute;
    content:'';
    width:25px;
    height:3px;
    background:black;
    border-radius:20%;
    transition:all 0.5s ease-in-out;
}
.Hamburger::before{
    transform:translateY(-7px);
}
.Hamburger::after{
    transform:translateY(7px);
}
.HamburgerContainer.open .Hamburger{
    transform:translateX(-5px);
    background:none;
}
.HamburgerContainer.open .Hamburger::before{
    transform:rotate(45deg);
}
.HamburgerContainer.open .Hamburger::after{
    transform:rotate(-45deg);
}
.HamburgerContent{
    height:30vh;
    background-color:none;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    position:absolute;
    top:60px;
    user-select:none;
}
.HamburgerContent h1{
    font-weight:400;
    margin-left:20px;
    animation:HamburgerAnimation 0.7s ease-out;
}
@keyframes HamburgerAnimation{
    0%{
        margin-left:0px;
    }
    50%{
        margin-left:25px;
    }
    100%{
        margin-left:20px;
    }
}
.HamburgerContent h1 a{
   text-decoration:none;
   font-family:'poppins',sans-serif,helvetica,arial;
   color:black;
   cursor:pointer;
}
hr{
    width:90vw;
    border:1.5px solid #41FF98;
}
@media screen and (max-width:920px){
    .imageContainer{
        display:none;
    }
}
</style>