<template>
    <div id="fileBox">
        <p>{{file}}</p>
    </div>
</template>

<script>
    export default {
        props:["file"]
    }
</script>

<style scoped>
#fileBox{
    background: rgb(255, 200, 200);
    display:flex;
}
</style>