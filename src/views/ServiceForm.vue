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
              SendOrder:async function(){
           const data={
           Completed:true,
           Heading:'Your Mobile app',
           Details:'View Your Files',
           Image:"../assets/illustration/Mobile.svg"
      }
    try {
    const SaveData = await axios.post('http://localhost:3000/Orders',data); 
    console.log(SaveData)
        
    } catch (error) {
        if(error) console.log(error)
    }
  }
        }
    }
</script>

<style scoped>


</style>
