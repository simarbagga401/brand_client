<template>
  <section id="AdminConsole">
    <nav>
      <div
        class="HamburgerContainer"
        :class="BurgerFunction"
        @click="HamburgerOpen = !HamburgerOpen"
      >
        <div class="Hamburger"></div>
      </div>
      <h1 class="Heading">{{Heading}}</h1>
    </nav>
    <section class="HamburgerContent" v-show="HamburgerOpen">
      <h1>
        <router-link to="/" exact>{{HamburgerContent1}}</router-link>
      </h1>
      <hr />
      <h1>
        <router-link to="/howItWorks" exact>{{HamburgerContent2}}</router-link>
      </h1>
      <hr />
      <h1>
        <router-link to="/ourWork" exact>{{HamburgerContent3}}</router-link>
      </h1>
      <hr />
      <h1>
        <router-link to="/login" exact>{{HamburgerContent4}}</router-link>
        <router-link to="/signUp" exact>{{HamburgerContent5}}</router-link>
      </h1>
      <hr />
      <h1>
        <router-link to="/fAQ" exact>{{HamburgerContent6}}</router-link>
      </h1>
</section>
      <main v-show="!HamburgerOpen">
        <div class="div1">
     <div class="Container FaqContainer">
        <input type="text" class="FaqId" v-model="ModifyFaq._id"/>
        <button class="DeleteFaq" @click="DeleteFaq()">Delete A FAQ</button>
        <button class="ModifyFaq" @click="ModifyFaqInfo = !ModifyFaqInfo">Modify A FAQ</button>
      </div>
        <div class="Container ModifyFaqInfo" v-show="ModifyFaqInfo">
            <h3>Modify Faq</h3>
          <label for="Answered">Modify Answered</label>
          <input type="text" id="Answered" v-model="ModifyFaq.Answered"/>
          <label for="Answer">Modify Answer</label>
          <input type="text" id="Answer" v-model="ModifyFaq.Answer"/>
        </div>

      <div class="Container OrderContainer">
        <input type="text" class="OrderId" v-model="ModifyOrder._id"/>
        <button class="DeleteOrder" @click="DeleteOrder()">Delete A Order</button>
        <button class="ModifyOrder" @click="ModifyOrderInfo = !ModifyOrderInfo">Modify A Order</button>
        <h3>{{ModifyOrder._id}}</h3>
      </div>
        <div class="Container ModifyOrderInfo" v-show="ModifyOrderInfo">
            <h3>Modify Order</h3>
          <label for="Completed">Modify Completed</label>
          <input type="text" id="Completed" v-model="ModifyOrder.Completed"/>
          <label for="Heading">Modify Heading</label>
          <input type="text" id="Heading" v-model="ModifyOrder.Heading"/>
          <label for="Details">Modify Details</label>
          <input type="text" id="Details" v-model="ModifyOrder.Details"/>
          <label for="Image">Modify Image</label>
          <input type="text" id="Image" v-model="ModifyOrder.Image"/>
        </div>

      <div class="Container OurWorkContainer">
        <input type="text" class="OurWorkId" v-model="GenerateOurWork._id"/>
        <button class="DeleteOurWork" @click="DeleteOurWork()">Delete A OurWork</button>
        <button class="ModiyOurWork" @click="ModifyOurWorkInfo = !ModifyOurWorkInfo">Modify A OurWork</button>
        <button
          class="GenerateOurWork"
          @click="GenerateOurWorkInfo = !GenerateOurWorkInfo"
        >GenerateOurWork</button>
      </div>
        <div class="Container ModifyOurWorkInfo" v-show="ModifyOurWorkInfo">
            <h3>Modify Ourwork</h3>
          <label for="Mobile">Select Mobile</label>
          <input type="text" id="Mobile" v-model="ModifyOurWork.Mobile"/>
          <label for="Desktop">Select Desktop</label>
          <input type="text" id="Desktop" v-model="ModifyOurWork.Desktop" />
          <label for="Image1">Select Image1</label>
          <input type="text" id="Image1" v-model="ModifyOurWork.Image1"/>
          <label for="Image2">Select Image2</label>
          <input type="text" id="Image2" v-model="ModifyOurWork.Image2"/>
          <label for="Image3">Select Image3</label>
          <input type="text" id="Image3" v-model="ModifyOurWork.Image3"/>
          <label for="Image4">Select Image4</label>
          <input type="text" id="Image4" v-model="ModifyOurWork.Image4"/>
          <label for="Heading">Select Heading</label>
          <input type="text" id="Heading" v-model="ModifyOurWork.Heading"/>
          <label for="Description">Select Description</label>
          <input type="text" id="Description" v-model="ModifyOurWork.Description"/>
          <label for="ContainerColor">Select ContainerColor</label>
          <input type="text" id="ContainerColor" v-model="ModifyOurWork.ContainerColor"/>
          <label for="BoxColor">Select BoxColor</label>
          <input type="text" id="BoxColor" v-model="ModifyOurWork.BoxColor"/>
        </div> 
     <div class="Container GenerateOurWorkInfo" v-show="GenerateOurWorkInfo">
            <h3>Generate Ourwork</h3>
          <label for="Mobile">Select Mobile</label>
          <input type="text" id="Mobile" v-model="GenerateOurWork.Mobile"/>
          <label for="Desktop">Select Desktop</label>
          <input type="text" id="Desktop" v-model="GenerateOurWork.Desktop" />
          <label for="Image1">Select Image1</label>
          <input type="text" id="Image1" v-model="GenerateOurWork.Image1"/>
          <label for="Image2">Select Image2</label>
          <input type="text" id="Image2" v-model="GenerateOurWork.Image2"/>
          <label for="Image3">Select Image3</label>
          <input type="text" id="Image3" v-model="GenerateOurWork.Image3"/>
          <label for="Image4">Select Image4</label>
          <input type="text" id="Image4" v-model="GenerateOurWork.Image4"/>
          <label for="Heading">Select Heading</label>
          <input type="text" id="Heading" v-model="GenerateOurWork.Heading"/>
          <label for="Description">Select Description</label>
          <input type="text" id="Description" v-model="GenerateOurWork.Description"/>
          <label for="ContainerColor">Select ContainerColor</label>
          <input type="text" id="ContainerColor" v-model="GenerateOurWork.ContainerColor"/>
          <label for="BoxColor">Select BoxColor</label>
          <input type="text" id="BoxColor" v-model="GenerateOurWork.BoxColor"/>
        </div>
        </div>
        <div class="ContactUs">
            <h2 @click="Switch = !Switch">{{toggle}}</h2>
          <template v-for="Message in Messages" >
            <div :key="Message._id" class="Message" v-show="Switch">
               <span class="NameSpan">
              Name:
            </span>
              <h4 class="NameHeading">{{Message.Name}}</h4>
            <span class="NameSpan">
              Email:
            </span>
              <h4 class="NameHeading">{{Message.Email}}</h4>
            <span class="MessageSpan">
              Message:
            </span>
              <p class="MessageHeading">{{Message.Message}}</p>
            </div>
          </template>
           <template v-for="Order in Orders" >
            <div :key="Order._id" class="Message" v-show="!Switch">
               <!-- <span class="NameSpan">
              Name:
            </span>
              <h4 class="NameHeading">{{Message.Name}}</h4>
            <span class="NameSpan">
              Email:
            </span>
              <h4 class="NameHeading">{{Message.Email}}</h4>
            <span class="MessageSpan">
              Message:
            </span>
              <p class="MessageHeading">{{Message.Message}}</p> -->
            </div>
          </template>
        </div>
    </main> 
  </section>
</template>
<style scoped>
.NameHeading{
    margin:5px;
}
.MessageSpan{
    color:#FF7777;
    font-weight:500;
}
.NameSpan{
    color:#41FF98;
    font-weight:500;
}
.Message{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    background-color:#DCFFD7;
    border-radius:5px;
    padding:20px;
    box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.2);
    margin:20px 15px 0px 15px;
    max-width:650px;
}
span{
    margin:5px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: poppins;
}
.div1{
   display: flex;
  flex-direction: column;
  align-items:flex-start;
}
.ContactUs{
  width:70vw;
  min-width:600px;
  min-height:600px;
  height:90vh;
  background: rgb(255, 255, 255);
  margin-right:10px;
}
nav {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
main {
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items:flex-start;
}
h4{
  font-weight: 500;
}
.Container{
    flex-basis:200px;
    flex-shrink:1;
    display:flex;
    flex-direction:column;;
    align-content:center;
    justify-content:space-around;
    padding:10px;
    background-color:#41FF98;
    margin:20px;
    border-radius:10px;
    box-shadow:0px 0px 10px rgba(0,0,0,0.3);
}
input{
    padding:7px;
    border:none;
    background-color:#DCFFD7;
    border-radius:5px;
}
button{
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#41FF98;
    box-shadow: -3px 4px 6px 0px rgba(0, 0, 0, 0.25);
    border-radius:5px;
    width:135px;
    height:45px;
    font-weight:400;
    cursor:pointer;
    border:none;
    outline:none;
}
.Heading {
  font-weight: 700;
  font-size: 30px;
  margin-left: 30px;
  user-select: none;
}
.HamburgerContainer {
  width: 35px;
  height: 30px;
  margin-left: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.Hamburger {
  width: 25px;
  height: 3px;
  background: black;
  border-radius: 20%;
  transition: all 0.2s ease-in-out;
}
.Hamburger::before,
.Hamburger::after {
  position: absolute;
  content: "";
  width: 25px;
  height: 3px;
  background: black;
  border-radius: 20%;
  transition: all 0.5s ease-in-out;
}
.Hamburger::before {
  transform: translateY(-7px);
}
.Hamburger::after {
  transform: translateY(7px);
}
.HamburgerContainer.open .Hamburger {
  transform: translateX(-5px);
  background: none;
}
.HamburgerContainer.open .Hamburger::before {
  transform: rotate(45deg);
}
.HamburgerContainer.open .Hamburger::after {
  transform: rotate(-45deg);
}
.HamburgerContent {
  height: 30vh;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 60px;
  user-select: none;
}
.HamburgerContent h1 {
  font-weight: 400;
  margin-left: 20px;
  animation: HamburgerAnimation 0.7s ease-out;
}
@keyframes HamburgerAnimation {
  0% {
    margin-left: 0px;
  }
  50% {
    margin-left: 25px;
  }
  100% {
    margin-left: 20px;
  }
}
.HamburgerContent h1 a {
  text-decoration: none;
  font-family: "poppins", sans-serif, helvetica, arial;
  color: black;
  cursor: pointer;
}
hr {
  width: 90vw;
  border: 1.5px solid #41ff98;
}
.router-link-exact-active.router-link-active {
  color: #41ff98;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Heading: "Admin Page",
      HamburgerOpen: false,
      HamburgerContent1: "HOME",
      HamburgerContent2: "HOW IT WORKS ?",
      HamburgerContent3: "OUR WORK",
      HamburgerContent4: "LOG IN / ",
      HamburgerContent5: "SIGN UP",
      HamburgerContent6: "FAQ SECTION",
      ModifyOurWorkInfo: false,
      ModifyOrderInfo: false,
      ModifyFaqInfo: false,
      GenerateOurWorkInfo: false,
      Switch:false,
      ModifyFaq:{
          _id:"",
          Answered:"",
          Answer:""
      },
      ModifyOrder:{
          _id:"",
          Completed:"",
          Heading:"",
          Details:"",
          Image:""
      },
      GenerateOurWork:{
          _id:"",
          Mobile:"",
           Desktop:"",
           Image1:"",
           Image2:"",
           Image3:"",
           Image4:"",
           Heading:"",
           Description:"",
           ContainerColor:"",
           BoxColor:""
      },
      ModifyOurWork:{
          _id:"",
           Mobile:"",
           Desktop:"",
           Image1:"",
           Image2:"",
           Image3:"",
           Image4:"",
           Heading:"",
           Description:"",
           ContainerColor:"",
           BoxColor:""
      },
      Orders:[],
      Messages:[
        { 
          _id:'1',
          Name:'john doe',
          Email:'john@gmail.com',
          Message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?'
        },
        { 
          _id:'2',
          Name:'john doe',
          Email:'john@gmail.com',
          Message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?'
        },
        { 
          _id:'1',
          Name:'john doe',
          Email:'john@gmail.com',
          Message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?'
        },
        { 
          _id:'1',
          Name:'john doe',
          Email:'john@gmail.com',
          Message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?'
        },
        { 
          _id:'1',
          Name:'john doe',
          Email:'john@gmail.com',
          Message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?'
        },
        { 
          _id:'1',
          Name:'john doe',
          Email:'john@gmail.com',
          Message:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique corrupti, est sint quidem corporis?'
        },
      ]
    };
  },
  methods: {
    async DeleteOrder(){
        const DeletedOrder = await axios.delete(`http:localhost:5000/Admin/Orders/${this.ModifyOrder._id}`);
        try {
            console.log(DeletedOrder);
        } catch (err) {
            if(err) console.log(err);
        }
    },
        async DeleteFaq(){
        const DeletedFaq = await axios.delete(`http:localhost:5000/Admin/FAQ/${this.ModifyFaq._id}`);
        try {
            console.log(DeletedFaq);
        } catch (err) {
            if(err) console.log(err);
        }
    },
        async DeleteOurWork(){
        const DeletedOurWork = await axios.delete(`http:localhost:5000/Admin/Orders/${this.ModifyOurWork._id}`);
        try {
            console.log(DeletedOurWork);
        } catch (err) {
            if(err) console.log(err);
        }
    }
  },
  computed: {
    BurgerFunction: function () {
      return {
        open: this.HamburgerOpen,
      };
    },
    toggle:function(){ 
        if(this.Switch){
          return 'Messages';
        }else{
          return 'Orders'
        }
    }
  }
};
</script>