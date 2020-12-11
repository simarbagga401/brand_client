<template>
  <section class="APPLICATION">
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
        <h3 class="BrandName">Bruh.</h3>
        <ul>
            <li><router-link to="/login" exact  class="List2">Login</router-link></li>
            <li><router-link to="/signUp" exact  class="List2">Sign Up</router-link></li>
            <li @mouseleave="showDropdownFunction(false)" @mouseover="showDropdownFunction(true)" @click="showDropdownFunction('toogle')" @blur="showDropdownFunction(false)"><router-link  to="" exact class="List1 More">More &#709;</router-link></li>
        </ul>
        <div class="CartContainer">
            <router-link to="/orders" exact>
                <img src="../assets/icons/cart.svg" alt="">
            </router-link>
        </div>
      </nav>
      <!-- dropdown -->
                    <div class="dropdown" :class="{hide:!showDropdown}"  @mouseover="showDropdownFunction(true)" @mouseleave="showDropdownFunction(false)">
                        <router-link to="/contactUs" exact>Contact Us</router-link>
                        <hr >
                        <a>Contribute</a>
                    </div>
      <!-- dropdown -->
       <hamburgerContent :hamburgerOpen="HamburgerOpen" />
        <main v-show='!HamburgerOpen'>
     <section class="Image" >       
            <Carousel  >
                <CarouselSlider v-for="(image,index) in ImageArray" :key="image.image" :index="index" :visibleSlide="visibleSlide" :direction="direction">
                    <img :src="image.image" alt="Image"  draggable="false"  ondragstart="return false;"/>
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

                        <router-link to="/services" exact  class="cta">Get Started</router-link>
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
import hamburger from '../components/hamburger.vue';
import hamburgerContent from '../components/hamburgerContent.vue';



export default {
    name:'Homepage',
    computed:{
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
        showDropdown:false,
        Glow1:true,
        Glow2:false,
        Glow3:false,
        Glow4:false,
        visibleSlide:0,
        direction:'left',
        visited:0,
}
},
components:{
    Carousel,
    CarouselSlider,
    hamburger, 
     hamburgerContent

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
    },8000);
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
    },
    showDropdownFunction(arg){
        if(arg || !arg){
            this.showDropdown = arg
        }
        else{
            this.showDropdown = !this.showDropdown;
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
}   
.List1:hover,.List2:hover,.dropdown a:hover{ 
    color:#4d9b70;
}
ul li a {
    text-decoration:none;
    color:black;
    margin:7px;
    font-size:14px;
    padding:3px;
    border-radius:5px;
    cursor: pointer;
}
.dropdown a{
    text-decoration:none;
    color:black;
    margin:7px;
    cursor: pointer;
    font-size:14px;
}
hr{
    width:70%;
    color:black;
    border:1px solid black;
}
 .dropdown{
    position:absolute;
    top:50px;
    right:50px;
    /* clip-path: polygon(70% 5%, 80% 15%, 100% 15%, 100% 70%, 100% 100%, 0 100%, 0 15%, 60% 15%); */
    width:150px;
    height:100px;
    /* background: rgb(126, 83, 83); */
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.25);
    display:flex;
    transition:all .5s ease-in-out;
    z-index:10;
} 
.dropdown.hide{
    opacity:0;
    top:70px;
}
.dropdown.hide a{
    pointer-events: none;
    cursor: pointer;
}
.BrandName{
    position:absolute;
    margin-left:60px;
    font-weight:600;
}
.CartContainer{
    position:relative;
    margin:0px 10px 0px 10px;
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
.cta{
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#41ff98;
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
    font-size:32px;
    font-weight:700;
}
.Description{
    font-size:25;
    font-weight:500;
    color:#3F3F3F;
}
.HeadingBox{
    width:500px;
    display:flex;
    margin:0;
    /* background: chartreuse; */
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
    padding:12px 5px 5px 5px;
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
    width:80%;
    max-width:600px;
    min-height:280px;
    display:inline-block;
    order:1;
    display:flex;
    flex-direction:column;
    overflow:hidden;
    position:relative;
    padding:5px;
    /* background: #3F3F3F; */
}

main{
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100vw;
    height:80vh;
    padding:20px;
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
    .cta{
        align-self: center;
    }
    .Image{
        order:1;
        width:250px;
    }
    .Image img{
        width:250px;
    }
    .HeadingBox{
        background-color:none;
        width:75vw;
        height:70px;
    }
    .Heading{
        font-size:26px;
    }
    .Description{
        font-size:17px;
    }
    .btns{
        display:none;
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
    .More{
        display:none;
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
@media screen and (max-height:580px) and  (max-width:1000px){
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
@media screen and (max-height:760px) and  (max-width:1000px){
   .Image{
    width:22vh;
   }
   .Image img{
    width:22vh;
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