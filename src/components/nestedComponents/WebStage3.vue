<template>
    <section>
        <main>
            <h3 id="stageHeading"> Add Features</h3>
            <section class="stageChild">
                <backBtn :image="normalArrow" @click.native="goBack()" id="backBtn"></backBtn>
                <gentleIconBtn :image="doneIcon" id="doneBtn">Done</gentleIconBtn>
                    <header>

                    </header>
                    <footer>
                        <section class="featureContainer">
                            <div class="feature"></div>
                            <div class="feature"></div>
                            <div class="feature"></div>
                            <div class="feature"></div>
                            <div class="feature"></div>
                            <div class="feature"></div>
                             <div class="feature"></div>
                            <div class="feature"></div>
                            <div class="feature"></div>
                        </section>
                    </footer>
            </section>
        </main>
    </section>
</template>

<script>
import backBtn from '../../components/back_btn.vue';
import gentleIconBtn from '../gentleIconBtn.vue';
    export default {
        props:["stage3Open"],
        data(){
            return{
                 normalArrow:require("../../assets/icons/arrow_back.svg"),
                 doneIcon:require("../../assets/icons/tick.svg"),
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
        },
        components:{
            backBtn,
            gentleIconBtn
        }
    }
</script>

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
    background: rgb(161, 244, 250);
}
footer{
    background: rgb(161, 174, 250);
    display:grid;
    place-items:center
    
}
.featureContainer{
    display:grid;
    grid-template-columns:repeat(3,200px);
    grid-template-rows:repeat(2,220px);
    grid-gap:10px 25px;
    overflow:scroll;
    padding:10px;
    background: rgba(168, 100, 138, 0.767);
    /* scrollbar-width: none; */
}
.feature{
    background: rgb(255, 84, 135);
    border-radius:7px;
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
</style>