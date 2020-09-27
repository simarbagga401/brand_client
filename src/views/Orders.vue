<template>
  <section id="FAQ">
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
            <h1><router-link to="/HowItWorks" exact>{{HamburgerContent2}}</router-link></h1>
            <hr >
            <h1><router-link to="/OurWork" exact>{{HamburgerContent3}}</router-link></h1>
            <hr >
            <h1><router-link to="/Login" exact>{{HamburgerContent4}}</router-link>
                <router-link to="/SignUp" exact>{{HamburgerContent5}}</router-link>
            </h1>
            <hr >
            <h1><router-link to="/FAQ" exact>{{HamburgerContent6}}</router-link></h1>
            </section>
    <main v-show="!HamburgerOpen">
        <template v-for="Order in OrderArray" >
            <div class="Order" :class="{Completed:Order.Completed}"  :key="Order._id">
                <h3 class="OrderHeading">{{Order.Heading}}</h3>
                <router-link to="/Orders/Order" class="OrderDetails">{{Order.Details}}</router-link>
                <img :src="Order.Image" class="AppImage" alt="Image" draggable="false">
            </div>
        </template>
    </main>
</section>
</template>
<style scoped>
    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins;
    user-select: none;
}
p{  
    cursor: pointer;
    color:#028B41;
}
p:hover{
    text-decoration:underline;
}
nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
}
.Order{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    background-color:#DCFFD7;
    border-radius:5px;
    padding:10px;
    margin:20px;
    width:1000px;
    position: relative;
    height:100px;
}
.Order.Completed{
    background-color:#E6E6E6;
}
h3{
    font-weight:500;
    color:#484848;
}
.AppImage{
    position:absolute;
    right:0px;
    top:-10px;
    height:125%;
}
main{
    height:92vh;
    width:100vw;
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
.router-link-exact-active.router-link-active{
    color:#41FF98;
}
</style>
<script>
import axios from 'axios'
  export default {
    data(){
     return{
        Heading:'Orders',
        HamburgerOpen:false,
        HamburgerContent1:"HOME",
        HamburgerContent2:"HOW IT WORKS ?",
        HamburgerContent3:"OUR WORK",
        HamburgerContent4:"LOG IN / ",
        HamburgerContent5:"SIGN UP",
        HamburgerContent6:"FAQ SECTION",
        QuestionHeading:'Is there Anytype of shecdule provided? So I could Know how much work is pending',
        AnswerHeading:'Yes, Our team provides you a proper Shecdule Which includes specific ‘Checkpoints’.',
        OrderArray:[],

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

    },
    mounted(){
     const ShowOrder = async() =>{
          const GetOrder = await axios('http://localhost:5000/Orders');
          try {
                GetOrder.data.filter((Object)=>{
                const Orders = {
                    Completed:Object.Completed,
                    Heading:Object.Heading,
                    Details:Object.Details,
                    Image:Object.Image
                }
                this.OrderArray.push(Orders);
                });
                console.log(this.OrderArray);
        } catch (err) {
            if (err) console.log(err)
        }
      }
      ShowOrder();
    }
  }


 
</script>