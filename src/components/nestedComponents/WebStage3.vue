<template>
    <section>
        <main>
            <h3 id="stageHeading"> Add Features</h3>
            <section class="stageChild">
                <backBtn :image="normalArrow" @click.native="goBack()" id="backBtn"></backBtn>
                <gentleIconBtn :image="doneIcon" id="doneBtn">Done</gentleIconBtn>
                    <header>
                            <div class="ownFeatureContainer">
                                <h5>Add Your Own Features And Describe.</h5>
                                <backBtn :image="plusIcon" :btnWidth="'width:45px;height:45px;'" :iconWidth="'width:13px;'" id="plusBtn"/>
                            </div>
                            <div class="infoDiv">
                                <div class="circle"></div>
                                <h5 class="infoDivHeading">Selected One’s are Marked Green</h5>
                            </div>
                    </header>
                    <footer>
                        <section class="featureContainer">
                            <template v-for="(feature,i) in features">
                                <div class="feature" @click="selectFeature(i)" :key="i">
                                    <h5 class="featureHeading">{{feature.heading}}</h5>
                                    <p class="featureDescription">{{feature.description}}</p>
                                </div>
                            </template>
                        </section>
                    </footer>
            </section>
        </main>
    </section>
</template>

<style scoped>
#stageHeading{
    position: absolute;
    top:-10px;
    left:90px;
    color:#212121;
    font-weight:500;
}
.stageChild{
    width:95vw;
    min-height:600px;
    height:80vh;
    max-width:1200px;
    position:relative;
    box-shadow:
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
    background: #C5FFE2;
    padding:10px;
    border-radius:5px;   
    display:grid;
    grid-template-rows:20% 80%;
}
header{
    display:flex;
    align-items:flex-start;
    justify-content: space-between; 
    padding:20px;
}
footer{
    display:grid;
    place-items:center;
    box-sizing: border-box;
}
.featureContainer{
    height:85%;
    max-width:800px;
    display:grid;
    grid-template-columns:repeat(3,200px);
    grid-template-rows:repeat(10,220px);
    grid-gap:20px 45px;
    overflow-x:scroll;
    padding:30px;
    justify-content:center;
}
.feature{
    background:white;
    border-radius:7px;
    box-shadow:
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
    padding:10px;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
}
.featureHeading{
    font-size:15px;
    font-weight:600;
    margin-bottom:8px;
}
.featureDescription{
    font-size:12px;
    color:#494949;
}
.ownFeatureContainer{
    background:#fff;
    width:200px;
    height:80px;
    padding:20px;
    box-sizing: border-box;
    box-shadow:
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
    border-radius:7px;
    position: relative;
}
.ownFeatureContainer h5, .infoDivHeading{
    font-size:13px;
    font-weight:600;
}
.infoDiv{
    display:flex;
    width:250px;
    justify-content:space-between;
}
.circle{
    width:20px;
    height:20px;
    border-radius:50%;
    background: #41FF98;
    box-shadow:
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
}
#doneBtn{
    position:absolute;
    right:15px;
    bottom:7px;
}
#backBtn{
    position:absolute;
    left:-20px;
    top:-20px;
}
#plusBtn{
    position:absolute;
    bottom:-10px;
    right:-10px;
}
@media screen and (max-width:830px){
    .featureContainer{
        width:80%;
        grid-template-columns:repeat(2,200px);
    }
}
@media screen and (max-width:630px){
    .featureContainer{
        width:80%;
        grid-template-columns:repeat(1,200px);
    }
    .stageChild{
        grid-template-rows:30% 70%;
    }
    header{
        flex-direction: column;
    }
}
</style>

<script>
import backBtn from '../../components/back_btn.vue';
import gentleIconBtn from '../gentleIconBtn.vue';
    export default {
        props:["stage3Open"],
        data(){
            return{
                 normalArrow:require("../../assets/icons/arrow_back.svg"),
                 doneIcon:require("../../assets/icons/tick.svg"),
                 plusIcon:require("../../assets/icons/plus.svg"),
                 features:[
                     {
                         heading:'Admin Console',
                         description:'A Page that can change any required features in website and only admins can acces this page.',
                         selected:false
                     },
                     {
                         heading:'Comment Section',
                         description:'People Can Comment On this Page.',
                         selected:false
                     },
                     {
                         heading:'Authentication',
                         description:'Authentication For Your users..',
                         selected:false
                     },
                     {
                         heading:'Admin Console',
                         description:'A Page that can change any required features in website and only admins can acces this page.',
                         selected:false
                     },
                     {
                         heading:'Comment Section',
                         description:'People Can Comment On this Page.',
                         selected:false
                     },
                     {
                         heading:'Authentication',
                         description:'Authentication For Your users..',
                         selected:false
                     },
                                          {
                         heading:'Admin Console',
                         description:'A Page that can change any required features in website and only admins can acces this page.',
                         selected:false
                     },
                     {
                         heading:'Comment Section',
                         description:'People Can Comment On this Page.',
                         selected:false
                     },
                     {
                         heading:'Authentication',
                         description:'Authentication For Your users..',
                         selected:false
                     },
                 ]
            }
        },
        methods:{
            goBack(){
                let stage3Open = this.stage3Open;
                stage3Open = false
                this.$emit('stage3Closed',stage3Open)
            },
            webStage2Done(){
                this.goBack()
            },
            selectFeature(i){    
                let divList = document.querySelectorAll('.feature');
                if(!this.features[i].selected){
                    this.features[i].selected = true
                    divList[i].style.backgroundColor = '#41FF98';
                }else{
                    this.features[i].selected = true
                    divList[i].style.backgroundColor = '#fff';
                }
            }
        },
        components:{
            backBtn,
            gentleIconBtn
        }
    }
</script>