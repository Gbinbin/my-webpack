<template>
<div class="list">
    <ul class="list_user" ref="list_user" @touchmove="bMove=true">
        <li v-for="(item,index) in userData" :key="index">
            <p>{{ item.index }}</p>
            <ul>
                <li @touchend="showTel(user.tel)" v-for="(user,index) in item.users" :key="index">{{ user.name }}</li>
            </ul>
        </li>
    </ul>
    <ul class="list_index" ref="list_index">
        <li v-for="(item,index) in userIndex" :key="index" @touchstart="setScroll">{{ item }}</li>
    </ul>
</div>
</template>

<script>
import myAlert from './Alert.js'

 export default {
    name: 'my-list',
    data() {
        return {
            bMove : false
        }
    },
    props : {
        'userData' : {
            type : Array,
            default : function(){
                return [];
            }
        }
    },
    computed : {
        userIndex : function(){
            return this.filterIndex(this.userData);
        },
    },
    methods : {
        filterIndex : function(data){
            var result = [];
            for( var i=0;i<data.length;i++ ){
                if( data[i].index ){
                    result.push(data[i].index)
                }
            }
            return result;
        },
        setIndexTop : function(){
            var iH = this.$refs.list_index.offsetHeight;
            this.$refs.list_index.style.marginTop = -iH / 2 + 'px';
        },
        setScroll : function(ev){
            var ap = this.$refs.list_user.getElementsByTagName('p');
            for( var i=0;i<ap.length;i++ ){
                if( ap[i].innerHTML == ev.target.innerHTML ){
                    document.documentElement.scrollTop = ap[i].offsetTop;
                }
            }
        },
        showTel(tel){
            if( !this.bMove ){
                //console.log(tel);  获取点击的电话号码
                //busVM.$emit('changeEvents',tel);
                myAlert({
                    title : '呼叫',
                    body : tel,
                    confirmBtn : function(){
                        alert('确定按钮被触发了。')
                    },
                    cancelBtn : function(){
                        alert('取消按钮被触发了。');
                        document.body.removeChild(document.getElementById('alert'))
                    }
                })
            }else{
                this.bMove = false;
            }
            
        }
    },
    mounted(){
        this.setIndexTop();
    }
 }
</script>

<style scoped>
.list {
            position: relative;
            top: 40px;
            left: 0;
        }
        .list_user p {
            width: 100%;
            height: 40px;
            background: #ccc;
            color: #fff;
            padding-left: 10px;
            line-height: 40px;
        }
        .list_user ul li {
            height: 30px;
            line-height: 30px;
            color: #fff;
            padding-left: 15px;
            background: #ddd;
        }
        .list_index {
            position: fixed;
            top: 50%;
            right: 10px;
        }
        .list_index li {
            margin: 5px 0;

        }
 
</style>
