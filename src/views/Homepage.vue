<template>
  <section class="APPLICATION" :class="BurgerFunction">
<nav>
        <div class="HamburgerContainer" :class="BurgerFunction" @click="HamburgerOpen = !HamburgerOpen">
    <div class="Hamburger">
    </div>
        </div>    
    <h3 class="BrandName">{{BrandName}}</h3>
    <ul>
        <li class="List1"><router-link to="/signUp" exact>SIGN UP</router-link ></li>
        <li class="List2"><router-link to="/login" exact> LOG IN</router-link ></li>
    </ul>
        <div class="CartContainer">
          <router-link to="/orders" > <img src="../assets/icons/cart.svg" alt="Cart" type="image/svg+xml"  draggable="false">  </router-link>
        </div>
</nav>  
        <!-- NAVBAR OVER  -->
        <section class="HamburgerContent" v-show="HamburgerOpen">
            <h1><router-link to="/" exact>{{HamburgerContent1}}</router-link></h1>
            <hr >
            <h1><router-link to="/howItWorks" exact>{{HamburgerContent2}}</router-link></h1>
            <hr >
            <h1><router-link to="/ourWork" exact>{{HamburgerContent3}}</router-link></h1>
            <hr >
            <h1>
                <router-link to="/login" exact>{{HamburgerContent4}}</router-link>
                <router-link to="/signUp" exact>{{HamburgerContent5}}</router-link>
            </h1>
            <hr >
            <h1><router-link to="/fAQ" exact>{{HamburgerContent6}}</router-link></h1>
        </section>
        <main v-show='!HamburgerOpen'>
     <section class="Image" >       
            <Carousel  >
                <CarouselSlider v-for="(image,index) in ImageArray" :key="image.image" :index="index" :visibleSlide="visibleSlide" :direction="direction">
                    <img :src="image.image" alt="Image"  draggable="false"/>
                </CarouselSlider>
            </Carousel>
    </section> 
           <section class="Content">
                 <Carousel >
                    <CarouselSlider v-for="(heading,index) in Heading" :key="heading" :visibleSlide ="visibleSlide" :index="index" :direction="direction">
                        <section class="HeadingBox">
                           <h1 class="Heading">{{heading}}</h1>
                        </section>
                    </CarouselSlider>
                </Carousel> 

            <div class="DescriptionContainer">
               <Carousel >
                    <CarouselSlider v-for="(description,index) in Description" :key="description" :visibleSlide ="visibleSlide" :index="index">
                         <section class="DescriptionBox">
                             <h3 class="Description">{{description}}</h3>
                         </section>   
                    </CarouselSlider>
                </Carousel>
            </div>

                        <router-link to="/Services" exact  class="cta" action="/Services">Get Started</router-link>
            </section>
             </main>
       <div class="btns">
    <div class="btn btn1" :class="GlowClass1" @click="Glow1=true,Glow2=false,Glow3=false,Glow4=false,visibleSlide = 0,SliderFunction1()"></div>
    <div class="btn btn2" :class="GlowClass2" @click="Glow1=false,Glow2=true,Glow3=false,Glow4=false,visibleSlide = 1,SliderFunction2()"></div>
    <div class="btn btn3" :class="GlowClass3" @click="Glow1=false,Glow2=false,Glow3=true,Glow4=false,visibleSlide = 2,SliderFunction3()"></div>
    <div class="btn btn4" :class="GlowClass4" @click="Glow1=false,Glow2=false,Glow3=false,Glow4=true,visibleSlide = 3,SliderFunction4()"></div>
        </div>

  </section>
</template>
<script>
import Carousel from '../components/Carousel.vue'
import CarouselSlider from '../components/CarouselSlider.vue'
// import CarouselSlider2 from '../components/CarouselSliderTwo.vue'




export default {
    computed:{
    BurgerFunction:function(){
        return{
            open:this.HamburgerOpen
        }
    },
    GlowClass1:function(){
        return{
            glow:this.Glow1
        }
    },
        GlowClass2:function(){
        return{
            glow:this.Glow2
        }
    },    GlowClass3:function(){
        return{
            glow:this.Glow3
        }
    },    GlowClass4:function(){
        return{
            glow:this.Glow4
        }
    },

    },


data(){
    return{
        BrandName:'Bruh',
        Heading:['WEB DEVELOPMENT','MOBILE-APP DEVELOPMENT','UI DESIGNS','DESKTOP-APP DEVELOPMENT'],
        Description:
["Bruh offers ResponsiveMoblie-friendly layouts for your Website and Makes Modern Webpages at Best Price.","Bruh offers Beautiful and Responsive , Cross-platform  Mobile-App Development at  Best price",
"Bruh also offers you beautiful and responsive UI Designfor your Website , Moblie and Desktop Appication",
"Bruh offers ResponsiveDesktop-Application With Great User-Interface Which will Amaze your Users"
],
        ImageArray:[{image:require("../assets/illustration/website.svg")},
                    {image:require("../assets/illustration/mobile.svg")},
                    {image:require("../assets/illustration/uiDesign.svg")},
                    {image:require("../assets/illustration/desktop.svg")},
                  ],
        HamburgerOpen:false,
        Glow1:true,
        Glow2:false,
        Glow3:false,
        Glow4:false,
        HamburgerContent1:"HOME",
        HamburgerContent2:"HOW IT WORKS ?",
        HamburgerContent3:"OUR WORK",
        HamburgerContent4:"LOG IN / ",
        HamburgerContent5:"SIGN UP",
        HamburgerContent6:"FAQ SECTION",
        visibleSlide:0,
        direction:'left',
        visited:0
}
},
components:{
    Carousel,
    CarouselSlider,
    // CarouselSlider2

},
mounted(){
    setInterval(()=>{
      if(this.visibleSlide <= 3){
        this.visibleSlide++
      }if(this.visibleSlide > 3){
        this.visibleSlide = 0
      }
     if(this.visibleSlide ===0){
        this.Glow1 = true;
        this.Glow2 = false;
        this.Glow3 = false;
        this.Glow4 = false;
        this.visited = 0;
      }
     if(this.visibleSlide ===1){
        this.Glow1 = false;
        this.Glow2 = true;
        this.Glow3 = false;
        this.Glow4 = false;
        this.visited = 1;
      }
     if(this.visibleSlide ===2){
        this.Glow1 = false;
        this.Glow2 = false;
        this.Glow3 = true;
        this.Glow4 = false;
        this.visited = 2;
      }
     if(this.visibleSlide ===3){
        this.Glow1 = false;
        this.Glow2 = false;
        this.Glow3 = false;
        this.Glow4 = true;
        this.visited = 3;
      }
    },8000)
      setInterval(() =>{
      // console.log(this.visited+'  '+this.visibleSlide)
      },1000)
},
methods:{
    SliderFunction1(){
       if(this.visited > 0){
            this.direction = 'right'
       }else{
        this.direction = 'left'
       }
    },
        SliderFunction2(){
       if(this.visited > 1){
            this.direction = 'right'
       }else{
        this.direction = 'left'
       }
    },
        SliderFunction3(){
       if(this.visited > 2){
            this.direction = 'right'
       }else{
        this.direction = 'left'
       }
    },
        SliderFunction4(){
       if(this.visited === 3){
            this.direction = 'left'
       }else{
         this.visited = 3
       }
    }
}
}

</script>

<style scoped >
*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif,arial,verdana,helvetica;
    user-select:none;
}

nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
ul{
    position:absolute;
    right:40px;
}
ul li{
    display:inline-block;
    list-style:none;
    border-radius:5px;
    padding:3px;
}   
.List1:hover,.List2:hover{ 
    background-color:#41FF98;
    box-shadow: 0px 0px 4px 0px rgb(65, 255, 152);
}
ul li a {
    text-decoration:none;
    color:black;
    margin:7px;
    font-size:14px;
}
.router-link-exact-active.router-link-active{
    color:#41FF98;
}
.BrandName{
    position:absolute;
    margin-left:60px;
    font-weight:600;
}
.CartContainer{
    margin:4px 4px 0px 0px;
    height:35px;
    padding:10px 2px 2px 2px;
    display:flex;
    align-items:center;
    border-radius:5px;
    cursor:pointer;
}

.CartContainer:hover{
    background-color:#41FF98;
    box-shadow: 0px 0px 4px 0px rgb(65, 255, 152);
}
.HamburgerContainer{
    width:35px;
    height:30px;
    margin-left:20px;
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
   color:black;
   cursor:pointer;
}
hr{
    width:90vw;
    border:1.5px solid #41FF98;
}
.cta{
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgb(65, 255, 152);
    box-shadow: 0px 0px 4px 0px rgb(65, 255, 152),
                -3px 3px 7px rgba(0,0,0,0.3);
    border-radius:5px;
    width:135px;
    height:45px;
    font-weight:400;
    cursor:pointer;
}
.cta:focus{
    background-color:#39C87A;
    color:black;
}
.btns{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:100px;
    height:30px;
    position:absolute;
    top:90%;
    left:45vw;
    cursor:pointer;
}
.btn{
    width:20px;
    height:20px;
    background:#D7D7D7;
    border-radius:50%;
}
.btn1.glow,.btn2.glow,.btn3.glow,.btn4.glow{
    background-color:#41FF98;
    box-shadow: 0px 0px 4px 0px rgb(65, 255, 152);
}

.Heading{
    font-size:35px;
    font-weight:700;
}
.Description{
    font-size:25;
    font-weight:500;
    color:#3F3F3F;
}
.HeadingBox{
    width:520px;
    display:flex;
}
.DescriptionContainer{
    background-color:none;
    width:80%;
    overflow:hidden;
}
.DescriptionBox{
    width:100%;
    height:150px;
    display:flex;
    justify-content:center;
    background:none;
    padding:5px;
}
.Image{
    position:relative;
    top:10vh;
    width:35vw;
    height:400px;
    display:flex;
    order:2;
    overflow:hidden;
}
.Image img{
    width:35vw;
    margin-right:100px;
}

.Content{ 
    width:520px;
    height:280px;
    display:inline-block;
    background-color:none;
    order:1;
    display:flex;
    flex-direction:column;
    overflow:hidden;
    position:relative;
}

main{
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100vw;
    height:80vh;
}


@media screen and (max-width:820px){
    main{
        flex-direction:column;
    }
    .DescriptionContainer{
        width:100%;
        background-color:none;
        display: flex;
    }
    .Content{
        order:2;
        width:75vw;
        align-items:center;
        align-self:center;
        background-color:none;
    }
    .Image{
        order:1;
        width:300px;
    }
    .Image img{
        width:300px;
    }
    .HeadingBox{
        background-color:none;
        width:75vw;
        height:70px;
    }
    .btns{
        left:40vw;
    }

}
@media screen and (max-width:530px) and (min-width:370px){
    .Content{
        order:2;
    }
    .Heading{
        font-size:30px;
    }
    .Image{
        order:1;
        width:300px;
    }
    .Image img{
        width:300px;
    }

}
@media screen and (max-width:450px){
    .Heading{
        font-size:25px;
    }
        .Description{
        font-size:16px;
    }
}
@media screen and (max-width:320px){
     ul li a{
        font-size:13px;
        margin:2px;
    }
    .CartContainer{
        margin:2px 2px 0px 0px;
        padding:0px;
    }
}
@media screen and (max-width:370px){
    .Content{
        width:80vw;
    }
    .DescriptionBox{
        width:80vw;
    }
    .Heading{
        font-size:25px;
    }
    .Description{
        font-size:16px;
    }
    .btns{
        left:35vw;
    }
}


@media screen and (max-width:311px) {
    .Heading{
        font-size:21px;
}
.Description{
    font-size:15px;
}
.Image{
    width:80vw;
}
.Image img{
    width:80vw;
}

}
@media screen and (max-width:260px){
        .Heading{
        font-size:20px;
} 
        .BackgroundVector{
            display:none;
        }
        .List1{
            display:none;
        }
}
@media screen and (max-height:540px){
   .Image{
    display:none;
   }
   .Image img{
    display:none;
   }
   .HamburgerContent{
    margin-top:20vh;
    height:210px;
   }
}
@media screen and (min-width:950px){
   .Image{
    width:350px;
   }
   .Image img{
    width:350px;
   }
}

</style>