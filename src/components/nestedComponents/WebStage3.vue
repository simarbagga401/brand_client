<template>
    <div>
        <backBtn :image="normalArrow" @click.native="goBack()" ></backBtn>
        <backBtn :image="normalArrow" @click.native="getData()" style="background-color:crimson;"></backBtn>
        <backBtn :image="normalArrow" @click.native="changeData()" style="background-color:lightgreen;"></backBtn>
        <h2>{{Description}}</h2>
    </div>
</template>

<script>
import backBtn from '../../components/back_btn.vue';
// import { mapGetters } from 'vuex';
    export default {
        props:["stage3Open"],
        data(){
            return{
                 normalArrow:require("../../assets/icons/arrow_back.svg"),
                 postArray:[],
                 Description:""
            }
        },
        methods:{
            // ...mapGetters(["getWebInfo"]),
            getData(){
            //   this.Description = this.getWebInfo.description;
            let description = this.$store.getters.getWebInfo.description
              console.log(description)  
              this.Description = description
            },
            goBack(){
                let stage3Open = this.stage3Open;
                stage3Open = false
                this.$emit('stage3Closed',stage3Open)
            },
            webStage2Done(){
                this.goBack()
            },
            changeData(){
               let data =  this.$store.mutations;
               console.log(data)
            }
        },
        components:{
            backBtn
        }
    }
</script>

<style scoped>

</style>