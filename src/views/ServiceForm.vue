<template>
    <div class="SectionForm">
        <h1>This is sectionform</h1>
        <button @click="SendOrder">send data</button>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
    methods:{
     SendOrder: async function(){
     const data = {
        Completed:false,
        Details: "view schedule and files",
        Heading: "Your Desktop app",
        Image: require("../assets/illustration/desktop.svg")
     }
      try {
          const SaveData = await axios.post('http://localhost:3000/Orders',data); 
          if(SaveData) console.log('Faq Posted')
      } catch (err) {
          if(err) console.log(err);
      }
   }
    }
    }
</script>

<style scoped>


</style>
