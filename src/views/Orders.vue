<template>
  <section id="FAQ">
      <nav>
        <hamburger @click.native="HamburgerOpen = !HamburgerOpen" :hamburgerOpen="HamburgerOpen"/>
        <h3 class="Heading" id="heading">Your Orders</h3>
      </nav>
       <hamburgerContent :hamburgerOpen="HamburgerOpen" />
    <main v-show="!HamburgerOpen">
        <template v-for="Order in OrderArray" >
            <div class="Order" :class="{Completed:Order.Completed}"  :key="Order._id">
                <img :src="Order.Image" class="AppImage" alt="Image" draggable="false"  ondragstart="return false;">
                <div class="div1">
                <h3 class="OrderHeading">{{Order.Heading}}</h3>
                <router-link to="/orders/order" class="OrderDetails">{{Order.Details}}</router-link>
                </div>
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
.OrderDetails{  
    cursor: pointer;
    color:#028B41;
}
.OrderDetails:hover{
    text-decoration:underline;
}
nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
}
.div1{
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:flex-start;
    margin:10px;
}
.Order{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-content: center;
    background-color:#C5FFE2;
    padding:10px;
    margin:20px;
    max-width:1000px;
    box-shadow: 
    3px 2px 20px 0px rgba(0,0,0,0.1),
    -3px 0px 20px 0px rgba(0,0,0,0.1);
}
.Order.Completed{
    background-color:#bebebe;
}
h3{
    font-weight:500;
    color:black;
}
.AppImage{
    height:120px;
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
@media screen and (max-width:550px){
    .Order{
        flex-direction:column;
    }
}
</style>
<script>
import hamburger from '../components/hamburger.vue';
import hamburgerContent from '../components/hamburgerContent.vue';
import axios from 'axios'
  export default {
    data(){
     return{
        Heading:'Orders',
        HamburgerOpen:false,
        QuestionHeading:'Is there Anytype of shecdule provided? So I could Know how much work is pending',
        AnswerHeading:'Yes, Our team provides you a proper Shecdule Which includes specific ‘Checkpoints’.',
        OrderArray:[{
            Completed:false,
            Heading:"Mobile App (IN PROGRESS) 1/5 Completed",
            Details:"View Details And Schedule",
            Image:require("../assets/illustration/mobile.svg")
        },
        {
            Completed:false,
            Heading:"Desktop App (IN PROGRESS) 3/5 Completed",
            Details:"View Details And Schedule",
            Image:require("../assets/illustration/desktop2.svg")
        },
        {
            Completed:false,
            Heading:"Web App (Completed And Delivered On 19/04/20)",
            Details:"View Details And Schedule",
            Image:require("../assets/illustration/window.svg")
        },
        {
            Completed:false,
            Heading:"UI DESIGN For Web App (IN PROGRESS) 1/5 Completed",
            Details:"View Details And Schedule",
            Image:require("../assets/illustration/uiDesign.svg")
        },
        {
            Completed:false,
            Heading:"UI DESIGN For Web App (IN PROGRESS) 1/5 Completed",
            Details:"View Details And Schedule",
            Image:require("../assets/illustration/uiDesign.svg")
        },
        {
            Completed:false,
            Heading:"UI DESIGN For Web App (IN PROGRESS) 1/5 Completed",
            Details:"View Details And Schedule",
            Image:require("../assets/illustration/uiDesign.svg")
        },
        {
            Completed:false,
            Heading:"UI DESIGN For Web App (IN PROGRESS) 1/5 Completed",
            Details:"View Details And Schedule",
            Image:require("../assets/illustration/uiDesign.svg")
        }],

     }
 },
        components:{
            hamburger, 
            hamburgerContent
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