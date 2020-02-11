<template>
    <div id="alert" ref="alert">
        <div class="alert_content">
            <div class="alert_title">{{ alert_title }}</div>
            <div class="alert_body">{{ customBody }}</div>
            <div class="alert_btn">
                <button v-if="confirmBtn" @touchstart="confirmBtn">确认</button>
                <button v-if="cancelBtn" @touchstart="cancelBtn">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
  
 }
</script>

<style scoped>
#alert {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    display: flex;
}
.alert_content {
    width: 200px;
    height: 150px;
    background: white;
    border-radius: 5px;
    margin: auto;
    position: relative;
}
.alert_title {
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
.alert_body {
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.alert_btn {
    position: absolute;
    bottom: 0;
    right: 0;
}
.alert_btn button {
    margin: 10px;
    padding: 5px;
    border: 1px solid #000;
    background: #fff;
    border-radius: 5px;
    outline: none;
}
 
</style>
