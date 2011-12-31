<template>
  <section id="FAQSection">
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
      </nav>
       <hamburgerContent :hamburgerOpen="HamburgerOpen" />
        <main v-show="!HamburgerOpen && !stage1Open && !stage2Open && !stage3Open">
        <section class="stageContainer">
            <template v-for="(stage,i) in stages">
                <div class="stage" :key="stage.id">
                    <h1 class="stageHeading">{{stage.id}}.</h1>
                    <gentleBox class="gentleBox" :heading="stage.heading" :description="stage.description">
                        <gentleBtn @click.native="showStage(i)">
                            Open
                        </gentleBtn>
                    </gentleBox>
                </div>
            </template>
            <div class="advanceContainer">
                <backBtn class="backBtn" :advance="advance" :image="stylishArrow" @click.native="advance = !advance"></backBtn>
                <div class="advanceContainerColumn">
                    <h1 class="imageHeading" >Advance (Choose Technology)</h1>
                    <hr class="imageHr" :class="{grow:this.advance}" > 
                </div>
            </div>
            <template v-for="options in optionArray">    
                 <techBox v-show="advance" :options="options.options" :default="options.default" :key="options.default"></techBox>
            </template>
           
        </section>
            <div class="imageContainer">
                <img src="../../assets/illustration/checkBox.svg" alt="Image" class="illustration" ondragstart="return false;">
                <div class="headingContainer">
                    <h1 class="imageHeading">3 Steps And You Are <span>Done.</span></h1>
                </div>
            </div>
            <p>To Request Any Technology Or Feature You Can <router-link to="/contactUs" exact> Contact Us.</router-link></p>
        </main>
         <main v-show="!HamburgerOpen && stage1Open && !stage2Open && !stage3Open">
            <webStage1 :stage1Open="stage1Open" @stage1Closed="closeWebStage1"/>
        </main>
        <main v-show="!HamburgerOpen && stage2Open && !stage1Open && !stage3Open">
            <webStage2 :stage2Open="stage2Open" @stage2Closed="closeWebStage2"/>
        </main>
        <main v-show="!HamburgerOpen && stage3Open && !stage1Open && !stage2Open">
            <webStage3 :stage3Open="stage3Open" @stage3Closed="closeWebStage3" />
            <h2>stage 3</h2>
        </main>
  </section>
</template>

<script>
import gentleBox from '../../components/gentleBox.vue';
import techBox from '../../components/techBox.vue';
import backBtn from '../../components/back_btn';
import gentleBtn from '../../components/gentleBtn.vue';
import hamburger from '../../components/hamburger.vue';
import hamburgerContent from '../../components/hamburgerContent.vue';
import webStage1 from '../../components/nestedComponents/WebStage1.vue'
import webStage2 from '../../components/nestedComponents/WebStage2.vue'
import webStage3 from '../../components/nestedComponents/WebStage3.vue'

    export default {
        data(){
            return{
                Heading:'Web Development',
                HamburgerOpen:false,
                advance:false,
                stage1Open:false,
                stage2Open:false,
                stage3Open:false,
                normalArrow:require("../../assets/icons/arrow_back.svg"),
                stylishArrow:require("../../assets/icons/arrow_new_back.svg"),
                fileIcon:require("../../assets/icons/file-upload.svg"),
                doneIcon:require("../../assets/icons/tick.svg"),
                stages:[{
                    id:1,
                    heading:'Design / Moqup',
                    description:'Choose UI Design , Colors , Font etc For Your Website Or Web app.',
                },
                {
                    id:2,
                    heading:'Add Content',
                    description:'Add Illustrations , Text , Photos , SVG etc That You Want To Include',
                },
                 {
                    id:3,
                    heading:'Choose Features',
                    description:'Choose Features That You’d Like To add for eg. Login facility , Admin Panel etc.',
                }],
                optionArray:[
                    {
                        default:"Vue",
                        options:["Vue","React"],
                    },
                    {
                        default:"Express",
                        options:["Express","GraphQL","Firebase"],
                    },
                    {
                        default:"Firestore",
                        options:["Firestore","MongoDB"],
                    },                
                ]

            }
        },
    methods:{
        showStage(num){
          if(num === 0){
              this.stage1Open = true
          }
          if(num === 1){
              this.stage2Open = true
          }
          if(num === 2){
              this.stage3Open = true
          }
        },
        closeWebStage1(value){
            this.stage1Open = value
        },
        closeWebStage2(value){
            this.stage2Open = value
        },
        closeWebStage3(value){
            this.stage3Open = value
        }
    },
            components:{
            gentleBox,
            backBtn,
            techBox,
            gentleBtn,
            hamburger,
            hamburgerContent,
            webStage1,
            webStage2,
            webStage3,
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
.lightHeading{
    font-weight:400;
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