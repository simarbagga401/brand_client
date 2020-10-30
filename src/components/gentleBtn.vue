<template>
    <div>
        <div class="container">
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style  scoped> 
.container{
     height:27px;
     width:67px;
     padding:3px 5px;
     background: #fff;
     box-shadow:
     3px 2px 20px 0px rgba(0,0,0,0.1),
     -3px 0px 20px 0px rgba(0,0,0,0.1);
     border-radius: 10px;   
     display: grid;
     place-items: center;
     transition: all .5s ease;
     cursor: pointer;
}
p{
    font-size:13px;
    color:#FF5252;
    font-weight: 500;
}
</style>