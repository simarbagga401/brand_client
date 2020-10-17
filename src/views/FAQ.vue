<template>
  <section id="FAQSection">
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
            <h1><router-link to="/howItWorks" exact>{{HamburgerContent2}}</router-link></h1>
            <hr >
            <h1><router-link to="/ourWork" exact>{{HamburgerContent3}}</router-link></h1>
            <hr >
            <h1><router-link to="/login" exact>{{HamburgerContent4}}</router-link>
                <router-link to="/signUp" exact>{{HamburgerContent5}}</router-link>
            </h1>
            <hr >
            <h1><router-link to="/fAQ" exact>{{HamburgerContent6}}</router-link></h1>
        </section>
        <main v-show="!HamburgerOpen">
        <template v-for="FAQ in FAQs" >
            <div class="FAQ" :key="FAQ._id">
                <h4 class="QuestionHeading"><span class="QuestionSpan">Q.</span>{{FAQ.Question}}</h4>
                <h4 class="AnswerHeading" :class="{NotAnswered:FAQ.NotAnswered}"><span class="AnswerSpan">A.</span>{{FAQ.Answer}}</h4>
            </div>
        </template>
          <div class="InputContainer">
              <h3 class="InputHeading">{{ Questions }}</h3>
              <textarea  :placeholder="placeholder" id="TextArea"></textarea>
              <button id="Btn" @click="GenerateFAQ()">Send</button>
          </div>
        </main>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
        HamburgerOpen:false,
        HamburgerContent1:"HOME",
        HamburgerContent2:"HOW IT WORKS ?",
        HamburgerContent3:"OUR WORK",
        HamburgerContent4:"LOG IN / ",
        HamburgerContent5:"SIGN UP",
        HamburgerContent6:"FAQ SECTION",
        Heading:'FAQ Section',
        Questions:'Got Any Questions? You Can Write It Here!',
        placeholder:'for eg. Is there any money back guarantee',
        QuestionHeading:'Is there Anytype of shecdule provided? So I could Know how much work is pending',
        AnswerHeading:'Yes, Our team provides you a proper Shecdule Which includes specific ‘Checkpoints’.',
        FAQs:[{
            NotAnswered:true,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi.",
            Answer:"This Question Will be Answered Soon"
        },
        {
            NotAnswered:false,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque veniam culpa explicabo animi ullam aspernatur ipsam iusto voluptatum facere excepturi a, porro libero amet perspiciatis minus molestias. Quo, itaque.",
            Answer:"This Question Will be Answered Soon"
        },
        {
            NotAnswered:true,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi.",
            Answer:"This Question Will be Answered Soon"
        },  
        {
            NotAnswered:false,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque veniam culpa explicabo animi ullam aspernatur ipsam iusto voluptatum facere excepturi a, porro libero amet perspiciatis minus molestias. Quo, itaque.",
            Answer:"This Question Will be Answered Soon"
        },
        {
            NotAnswered:true,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi.",
            Answer:"This Question Will be Answered Soon"
        },
        {
            NotAnswered:false,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque veniam culpa explicabo animi ullam aspernatur ipsam iusto voluptatum facere excepturi a, porro libero amet perspiciatis minus molestias. Quo, itaque.",
            Answer:"This Question Will be Answered Soon"
        },
        {
            NotAnswered:true,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi.",
            Answer:"This Question Will be Answered Soon"
        },  
        {
            NotAnswered:false,
            Question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque veniam culpa explicabo animi ullam aspernatur ipsam iusto voluptatum facere excepturi a, porro libero amet perspiciatis minus molestias. Quo, itaque.",
            Answer:"This Question Will be Answered Soon"
        },
        ]

    }
  },
  components: {
   
  },
    computed:{
    BurgerFunction:function(){
        return{
            open:this.HamburgerOpen
        }
    }
  },
  methods:{
     GenerateFAQ: async function(){
      var TextArea  = document.getElementById('TextArea').value;
      if(TextArea === '' || TextArea === undefined || TextArea === null){
          return alert('Please Write Your Question In The Input Box');
      }
     const data = {
     NotAnswered:true,
     Question:TextArea,
     Answer:'This Question Will Be Answered Soon'
     }
      try {
          const SaveData = await axios.post('http://localhost:5000/FAQ',data); 
          if(SaveData) console.log('Faq Posted')
      } catch (err) {
          if(err) console.log(err);
      }
          document.getElementById('TextArea').value = '';
          location.reload();
   }
  },
  mounted(){
    //   const ShowFAQ = async () =>{
    //        const GetFAQ = await axios('http://localhost:5000/FAQ');
    //       try {
    //             GetFAQ.data.filter((Object)=>{
    //             const FAQ = {
    //                 NotAnswered:Object.Answered,
    //                 Answer:Object.Answer,
    //                 Question:Object.Question
    //             }
    //             this.FAQs.unshift(FAQ);
    //             });
    //       } catch (err) {
    //        if(err) console.log(err);
    //       }
    //   }
    //   ShowFAQ();
      let Disappear = () =>{
          let InputContainer = document.querySelector('.InputContainer');
          InputContainer.style.display = "block";
          window.addEventListener('scroll',()=>{
              if(window.scrollY == window.scrollMaxY){
                  InputContainer.style.display = "none";
              }else{
                  InputContainer.style.display = "block";
              }  
          });
      }
      Disappear();
      }  
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:poppins;
}

.something{
    background-color:crimson;
    width:300px;
    height:300px;
}
nav{
    width:100%;
    height:8vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
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
.InputContainer{
    width:90vw;
    max-width:800px;
    height:140px;
    position:fixed;
    bottom:10px;
    left:20px;
    z-index:5;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding:15px;
    border-radius:10px;
    background:rgb(255, 255, 255);
    box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.2);
}
.InputContainer h3{
    color:black;
    font-size:20px;
}
.InputContainer textarea{
    width:95%;
    height:40px;
    padding:10px;
    border:none;
    background-color:#DCFFD7;
    border-radius:5px;
    resize:none;
    transition:all .5s ease-out;
    position: absolute;
    bottom:10px;
    left:10px;
}
.InputContainer button{
    background-color:#41FF98;
    cursor:pointer;
    width:50px;
    height:25px;
    outline:none;
    border:none;
    position:absolute;
    bottom:13%;
    right:6%;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
}
.InputContainer button:focus, .InputContainer textarea:focus{
    outline:none;
    border:none;
}
.InputContainer button:focus{
    background-color:#39C87A;
}
.InputContainer textarea:focus{
    height:100px;
}
.FAQ{
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
.AnswerHeading.NotAnswered{
    color:#3F3F3F;
    font-style: italic;
}
.AnswerHeading{
    margin:5px;
}
.QuestionSpan{
    color:#FF7777;
    font-weight:500;
}
.AnswerSpan{
    color:#41FF98;
    font-weight:500;
}
h4{
    font-weight:400;
}
    .InputContainer textarea::placeholder{
        font-size:15px;
        font-style:italic;
    }
@media screen and (max-width:500px){
    .InputContainer h3{
        font-size:15px;
    }
    .InputContainer button{
        bottom:5px;
        right:5px;
    }

}
</style>
       