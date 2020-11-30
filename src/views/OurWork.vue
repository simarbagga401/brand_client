<template>
  <section id="OurWork">
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
        <h3 class="Heading">Our Work</h3>
      </nav>
       <hamburgerContent :hamburgerOpen="HamburgerOpen" />
        <main v-show="!HamburgerOpen">
            <section class="WorkSection WorkSection1" v-for="AppContent in AppContents" :key="AppContent._id">
                <div class="WorkContainer" :style="AppContent.ContainerColor">
                    <div class="Work Work1" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image1" alt="Image1" type="image/svg+xml" draggable="false"  ondragstart="return false;">
                    </div>
                    <div class="Work Work2" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image2" alt="Image2" type="image/svg+xml" draggable="false"  ondragstart="return false;">
                    </div>
                    <div class="Work Work3" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image3" alt="Image3" type="image/svg+xml" draggable="false"  ondragstart="return false;">
                    </div>
                    <div class="Work Work4" :class="{Mobile:AppContent.Mobile,Desktop:AppContent.Desktop}">
                        <img :src="AppContent.Image4" alt="Image4" type="image/svg+xml" draggable="false"  ondragstart="return false;">
                    </div>
                    <div class="WorkContent" :style="AppContent.BoxColor">
                        <h1 :style="AppContent.TextColor">{{AppContent.Heading}}</h1>
                        <p :style="AppContent.TextColor">{{AppContent.Description}}</p>
                    </div>
                      <button class="btn">
                          Visit
                      </button>
                </div>
            </section>
        </main>
  </section>
</template>


<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins;
}
nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
}
main{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.WorkSection{
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.Heading{
    font-weight:700;
    font-size:30px;
    margin-left:30px;
    user-select:none;
}
.WorkContainer{
    background-color:#C5FFE2;
    width:90vw;
    height:80vh;
    position:relative;
    border-radius:10px;
    box-shadow:
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
}
.Work1{
    width:380px;
    height:270px;
    top:-5%;
    right:-2%;
}
.Work1.Mobile{
    width:190px;
    height:410px;
    left:35%;
    background-color:lightgreen;
}
.Work2.Mobile{
    left:-3%;
    top:30%;
    width:169px;
    height:364px;
}
.Work3.Mobile,.Work4.Mobile{
    width:150px;
    height:325px;
}
.Work3.Mobile{
    bottom:40%;
}
.Work4.Mobile{
    bottom:20%;
    left:60%;
}
.Work2.Desktop{
    left:-3%;
}
.Work1.Desktop{
    left:30%;
}
.Work3.Desktop{
    width:350px;
    height:249px;
    left:20%;
    bottom:-10%;
}
.Work4.Desktop{
    display:none;
}
.Work2{
    width:350px;
    height:249px;
    top:7%;
    left:5%;
}
.Work3{
    width:150px;
    height:325px;
    bottom:-5%;
    left:15%;
}
.Work4{
    width:150px;
    height:325px;
    bottom:-5%;
    left:30%;
}  
.Work{
    position:absolute;
    border-radius:7px;
    box-shadow:-5px 5px 10px rgba(0,0,0,0.3);
}
.Work img{
    border-radius:7px;
    width:100%;
    height:100%;
}
.WorkContent{
    position:absolute;
    background-color:#fff;
    width:300px;
    height:100px;
    bottom:10px;
    right:10px;
    border-radius:5px;
    padding:10px;
    box-shadow:-3px 3px 7px rgba(0,0,0,0.3);
}
.WorkContent h1{
    font-weight:600;
}
.WorkContent p{
    font-size:15px;
}
.btn{
    background-color:#41FF98;
    cursor:pointer;
    width:100px;
    height:40px;
    outline:none;
    border:none;
    border-radius:2px;
    position:absolute;
    bottom:-50px;
    right:0px;
    font-weight:400;
    font-size:16px;
    box-shadow:-3px 3px 7px rgba(0,0,0,0.3);
}
.btn:focus{
    background-color:#39C87A;
    outline:none;
    border:none;
}
@media screen and (max-width:750px){
    .Work1,.Work3{
        display:none;
    }
    .Work2{
        left:1%;
        width:320px;
        height:227px;
    }
    .Work4{
        left:70%;
        bottom:18%;
        width:127px;
        height:274px;
    }
    .Work4.Mobile{
        left:55%;
        bottom:50%;
    }
    .Work3.Desktop{
        display: block;
        width:280px;
        height:200px;
        left:30%;
        bottom:18%;
    }
    @media screen and (max-width:380px){
        .Work1,.Work4{
            display: none;
        }
        .Work3.Desktop{
            display:none;
        }
        .WorkContent{
            height:200px;
            width:230px;
        }
        .Work2{
            width:280px;
            height:200px;
            background: #000;
        }
        .Work2.Mobile{
            top:-2%;
        }
        .WorkContent h1{
            font-size:18px;
        }
        .WorkContent p{
            font-size:15px;
        }
    }
}
</style>
<script>
import axios from 'axios';
import hamburger from '../components/hamburger.vue';
import hamburgerContent from '../components/hamburgerContent.vue';
    export default {
  data(){
    return{
        HamburgerOpen:false,
        Heading:'Our Work',
        AppContents:[
        {   key:1,
            Mobile:false,
            Desktop:false,
            Image1:require("../assets/OurWork/Bruh.web[Homepage].svg",),
            Image2:require("../assets/OurWork/Bruh.web[LogIn].svg"),
            Image3:require("../assets/OurWork/Bruh.web[Phone].svg"),
            Image4:require("../assets/OurWork/Bruh.web[Phone2].svg"),
            Heading:"Bruh (WebApp)",
            Description:"A Wonderful WebApp Which Provides Development and Design Services.",

         },
        {
            Mobile:true,
            Desktop:false,
            Image1:require("../assets/OurWork/Bruh.web[Phone2].svg",),
            Image2:require("../assets/OurWork/Bruh.web[Phone].svg"),
            Image3:require("../assets/OurWork/Bruh.web[Phone].svg"),
            Image4:require("../assets/OurWork/Bruh.web[Phone2].svg"),
            Heading:"Bruh (MobileApp)",
            Description:"A Wonderful WebApp Which Provides Development and Design Services."
         },
       {
            Mobile:false,
            Desktop:true,
            Image1:require("../assets/OurWork/Bruh.web[Homepage].svg",),
            Image2:require("../assets/OurWork/Bruh.web[LogIn].svg"),
            Image3:require("../assets/OurWork/Bruh.web[Homepage].svg"),
            Image4:require("../assets/OurWork/Bruh.web[Phone2].svg"),
            Heading:"Bruh (DesktopApp)",
            Description:"A Wonderful WebApp Which Provides Development and Design Services.",
            ContainerColor:'background-color:lightgreen',
            BoxColor:'background-color:white',
            TextColor:'color:black'

         }
            ],
    }
  },
  components: {
   hamburger,
    hamburgerContent
  },
mounted(){
     const ShowOurWork = async() =>{
          const GetOrder = await axios('http://localhost:5000/OurWork');
          try {
                GetOrder.data.filter((Object)=>{
                const AppContent = {
                    Mobile:Object.Mobile,
                    Desktop:Object.Desktop,
                    Image1:Object.Image1,
                    Image2:Object.Image2,
                    Image3:Object.Image3,
                    Image4:Object.Image4,
                    Heading:Object.Heading,
                    Description:Object.Description,
                    ContainerColor:Object.ContainerColor,
                    BoxColor:Object.BoxColor
                }
                this.AppContents.push(AppContent);
                });
                console.log(this.AppContents);
        } catch (err) {
            if (err) console.log(err)
        }
      }
      ShowOurWork();
}
}
</script>
