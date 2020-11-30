<template>
    <section>
        <main>
            <h3 id="stageHeading">Design / Moqup</h3>
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
                    <div id="fileContainer">
                        <h3 class="lightHeading">Select Colors</h3>
                        <div class="colorBox">
                            <header>
                                <div class="colorPickerContainer">
                                    <p>{{color}}</p>
                                    <div class="coloredBox"></div>
                                </div>
                                <button class="addColorBtn" @click="addColor()">
                                    Add Color
                                </button>
                            </header>
                            <footer>
                                <h4>Selected Colors:-</h4>
                            <div class="selectedColorContainer">
                                <div class="selectedColor selectedColor1" ></div>
                                <div class="selectedColor selectedColor2" ></div>
                                <div class="selectedColor selectedColor3" ></div>
                                <div class="selectedColor selectedColor4" ></div>
                                <div class="selectedColor selectedColor5" ></div>
                            </div> 
                            </footer>
                        </div>
                    </div>
                </template>
                <template slot="iconBtn">
                    <gentleIconBtn :image="doneIcon">Do it For Me </gentleIconBtn>
                </template>     
    </stageChild>
    <stageChild :showFontInfo="true" :heading="headings[2]" :description="descriptions[2]">
            <template slot="setContent">
                <div id="fileContainer">
                        <h3 class="lightHeading">Select Font</h3>
                 <div class="colorBox">
                        <header>
                            <div class="selectBoxContainer">
                                <select name="selectBox" id="selectBox" v-model="fontModel">
                                    <option v-for="(font,i) in fonts"  :key="i">{{font}}</option>
                                </select>
                                    <img src="../../assets/icons/arrow_new_back.svg" alt="←" draggable="false" ondragstart="return false;" class="selectImage">
                            </div>
                                <button class="addColorBtn" @click="addFont()">
                                    Add Font
                                </button>
                        </header>
                            <footer>
                            <div class="selectedFontContainer">
                                <p v-for="(selectedFont,i) in selectedFonts" :key="i">{{selectedFont}}</p>
                            </div>
                            </footer>
                        </div>
                    </div>
            </template>
            <template slot="iconBtn">
                <gentleIconBtn :image="doneIcon">Do it For Me </gentleIconBtn>
            </template>     
</stageChild>
    <stageChild :heading="headings[3]" :description="descriptions[3]">
                <template slot="setContent">
                    <textarea placeholder="for eg. I Want A Minimilistic Design">
                    </textarea>
                </template>
                <template slot="iconBtn">
                    <gentleIconBtn :image="doneIcon" @click.native="webStage1Done()">Done</gentleIconBtn>
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
import axios from 'axios'
// importing pickr
import '@simonwep/pickr/dist/themes/monolith.min.css';  
import Pickr from '@simonwep/pickr';
    export default {
        props:["stage1Open"],
        data(){
            return{
                normalArrow:require("../../assets/icons/arrow_back.svg"),
                stylishArrow:require("../../assets/icons/arrow_new_back.svg"),
                fileIcon:require("../../assets/icons/file-upload.svg"),
                doneIcon:require("../../assets/icons/tick.svg"),
                color:'#42445a',
                style:'background-color:ffffff',
                fontModel:'Roboto',
                selectedFonts:[],
                totalFileSize:null,
                fonts:[],
                m:0,
                n:1,
                files:[
                    "Homepage.svg"
                    ],
                headings:["Design / Moqup","Colors","Font","Describe"],
                descriptions:["Choose UI Design For Your Website / Web App","Choose Colors You'd Like To Include","Choose Font You'd Like To Include","Describe Whatever You Want"]
            }
        },
        components:{
            stageChild,
            backBtn,
            gentleIconBtn,
        },
        methods:{
            goBack(){
                let stage1Open = this.stage1Open;
                stage1Open = false
                this.$emit('stage1Closed',stage1Open)
            },
            addColor(){
                // var db = firebase.firestore();
                // db.collection('test').add({
                //     message:'this is just for testing'
                // }).then((e)=>{
                //     console.log(e)
                // })
                let div = document.querySelector(`.selectedColor${this.n}`).style.backgroundColor;
                if(this.n === 5) this.n = 0 
                if(div !== 'rgb(255, 255, 255)'){
                        document.querySelector(`.selectedColor${this.n+1}`).style.backgroundColor = this.color
                        this.n++ 
                }else{
                    document.querySelector(`.selectedColor${this.n}`).style.backgroundColor = this.color
                }
                console.log(this.selectedFont)
            },
            addFont(){
                if(this.selectedFonts.length < 5){
                    this.selectedFonts.push(this.fontModel);
                }else{
                    if(this.m >= 5) this.m = 0;
                    this.selectedFonts.splice(this.m,1,this.fontModel)
                    this.m++
                }
            },
           async getGoogleFonts(){
               let fonts = await  axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDRKHq-w4HxNBIrjpxNXQI9rEnSG4MjgOg&sort=popularity');
                fonts.data.items.forEach((obj)=>{
                    this.fonts.push(obj.family)
                })
                    // console.log(document.querySelector('select').style.fontFamily = 'Ubuntu')
            },
            fileSelected(e){
                e.target.files.forEach(file=>{          
                    this.files.unshift(file.name)
                    this.totalFileSize += file.size    
                });
                console.log(this.totalFileSize)
            },
            webStage1Done(){
                this.goBack()
            }
        },
        mounted(){
            this.getGoogleFonts()
            const div = document.querySelector('.selectedColor');
                div.style.backgroundColor = '#ffffff';
            const pickr = Pickr.create({
                el: '.coloredBox',
                theme: 'monolith',
                padding:0,

                swatches: [
                    'rgba(244, 67, 54, 1)',
                    'rgba(233, 30, 99, 0.95)',
                    'rgba(156, 39, 176, 0.9)',
                    'rgba(103, 58, 183, 0.85)',
                    'rgba(63, 81, 181, 0.8)',
                    'rgba(33, 150, 243, 0.75)',
                    'rgba(3, 169, 244, 0.7)',
                    'rgba(0, 188, 212, 0.7)',
                    'rgba(0, 150, 136, 0.75)',
                    'rgba(76, 175, 80, 0.8)',
                    'rgba(139, 195, 74, 0.85)',
                    'rgba(205, 220, 57, 0.9)',
                    'rgba(255, 235, 59, 0.95)',
                    'rgba(255, 193, 7, 1)'
                ],

                components: {

                    // Main components
                    preview: true,
                    opacity: true,
                    hue: true,

                    // Input / output Options
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: false,
                        hsva: false,
                        cmyk: false,
                        input: true,
                        clear: false,
                        save: false
                    }
                }
});
pickr.on('change',instance=>{
    let color = instance.toHEXA()
    if(color[3]){
        this.color = `#${color[0]}${color[1]}${color[2]}${color[3]}`
    }else{
        this.color = `#${color[0]}${color[1]}${color[2]}`
    }
});
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
.colorBox{
    height:120px;
    width:450px;
    padding:10px;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
}
.colorBox header{
    width:100%;
    height:30%;
    display:flex;
    justify-content:flex-start;
    position: relative;
}
.colorBox footer{
    width:100%;
    height:20%;
    display:flex;
    justify-content:space-evenly;
}
.colorPickerContainer{
    width:115px;
    height:25px;
    border-radius:5px;
    background: #F2F2F2;
    box-shadow: inset 0px 3px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
footer .selectedColorContainer{
    width:250px;
    height:30px;
    display:grid;
    grid-template-columns:repeat(5,1fr);
    padding:2px;
    box-shadow: inset 0px 1px 5px rgba(0, 0, 0, 0.25);
}
h4{
    font-weight:500;
    font-size:15px;
}
.selectedColorContainer .selectedColor{
    background: #ffffff;
    box-shadow: inset 0px 1px 5px rgba(0, 0, 0, 0.25);
}
.addColorBtn{
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgb(65, 255, 152);
    box-shadow: 0px 0px 4px 0px rgb(65, 255, 152),
                -3px 3px 7px rgba(0,0,0,0.3);
    border-radius:5px;
    width:100px;
    height:25px;
    font-weight:500;
    font-size:13px;
    cursor:pointer;
    border:none;
    outline:none;
}
.addColorBtn:active{
    background-color:#39C87A;
    color:black;
    border:none;
    outline:none;
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