<template>
    <section>
        <main>
            <h3 id="stageHeading">Add Content</h3>
    <stageChild :showWarning="true" :totalFileSize="totalFileSize" :heading="headings[0]" :description="descriptions[0]">
                <backBtn :image="normalArrow" class="normalArrowBackBtn" @click.native="goBack()" slot="btn"></backBtn>
                <template slot="setContent">
                    <div id="fileContainer">
                        <h3 class="lightHeading">Uploaded Files :-</h3>
                    <div id="fileBox">
                        <template  v-for="(file,i) in files" >
                            <p :key="i" id="file">{{file}}</p>
                        </template>
                    </div>
                    </div>
                </template>
                <template slot="iconBtn">
                            <input type="file" style="display:none" ref="fileInput" @change="fileSelected">
                            <gentleIconBtn :image="fileIcon" @click.native="$refs.fileInput.click()">Upload Files</gentleIconBtn>
                </template>
                <template slot="iconBtn">
                    <gentleIconBtn :image="doneIcon">Do it For Me </gentleIconBtn>
                </template>     
    </stageChild>
    <stageChild :heading="headings[1]" :description="descriptions[1]">
                <template slot="setContent">
                    <textarea placeholder="for eg. I Want A Minimilistic Design">
                    </textarea>
                </template>
                <template slot="iconBtn">
                    <gentleIconBtn :image="doneIcon" @click.native="webStage2Done()">Done</gentleIconBtn>
                </template>     
    </stageChild>
        </main>
    </section>
</template>

<script>
import stageChild from '../../components/stageChild.vue';
import gentleIconBtn from '../../components/gentleIconBtn.vue';
import backBtn from '../../components/back_btn.vue';
// import firebase from 'firebase'

    export default {
        props:["stage2Open"],
        data(){
            return{
                normalArrow:require("../../assets/icons/arrow_back.svg"),
                fileIcon:require("../../assets/icons/file-upload.svg"),
                doneIcon:require("../../assets/icons/tick.svg"),
                totalFileSize:null,
                files:[
                    "Homepage.svg"
                    ],
                headings:["Add Content","Describe"],
                descriptions:["Choose Photo , illustration , txt file ,SVG's You'd Like To Add.","Describe Whatever You Want"]
            }
        },
        components:{
            stageChild,
            backBtn,
            gentleIconBtn,
        },
        methods:{
            goBack(){
                let stage2Open = this.stage2Open;
                stage2Open = false
                this.$emit('stage2Closed',stage2Open)
            },
            fileSelected(e){
                e.target.files.forEach(file=>{          
                    this.files.unshift(file.name)
                    this.totalFileSize += file.size    
                });
                console.log(this.totalFileSize)
            },
            webStage2Done(){
                this.goBack()
            }
        },
        mounted(){
        }
    }
</script>

<style  scoped>
#fileBox{
    grid-gap:10px;
    height:100px;
    width:350px;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(3,1fr);
    overflow:scroll;
    padding:5px;
    margin-top:15px;
    scrollbar-width: none;
}
#stageHeading{
    position: absolute;
    top:-10px;
    left:90px;
    color:#212121;
    font-weight:500;
}
#file{
    font-weight:500;
    color:black;
}
h4{
    font-weight:500;
    font-size:15px;
}
.selectContainer{
    display: flex;
    width:80%;
    justify-content:space-between;
    position: relative; 
}
.selectBoxContainer{
    position: relative;
}
.selectImage{
    width:16px;
    pointer-events: none;
    position:absolute;
    bottom:12px;
    right:7px;
    margin:0;
}
select{
    width:200px;
    padding:5px;
    font-size:14px;
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
.selectedFontContainer{
    height:100px;
    width:100%;
}
 textarea{
    font-family:poppins,sans-serif;
    width:90%;
    height:90%;
    padding:10px;
    border:1px solid black;
    background-color:#ffffff;
    border-radius:5px;
    resize:none;
    color:black;
    font-size:15px;;
}
 textarea::placeholder{
        font-size:15px;
        font-style:italic;
    }

</style>