<template>
     <div class="header" :style="{ 'position' : customFixed ? 'fixed' : 'static' }">
        <slot name="left"></slot>
        {{ title }}
        <slot name="right"></slot>
    </div>
</template>

<script>
 export default {
    name: 'my-header',
    props : {
        'title' : {
            type : String,
            drfault : '标题'
        },
        'customFixed' : {
            type : Boolean,
            default : false
        }
    }
 }
</script>

<style scoped>
.header {
            height: 40px;
            width: 100%;
            line-height: 40px;
            background: pink;
            color: #fff;
            text-align: center;
            z-index: 11;
        }
        .header button {
            height: 40px;
            background: #ccc;
        }
        .header button:nth-of-type(1){
            float: left;
        }
        .header button:nth-of-type(2){
            float: right;
        }
 
</style>
