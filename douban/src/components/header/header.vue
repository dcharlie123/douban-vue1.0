<template>
    <div class="search-wrap">
        <div class="back" v-show="$route.name!=='index'" @click="back"><i class="iconfont icon-back"></i></div>
        <h1>豆瓣</h1>
    </div>
</template>
<script>
    export default {
        methods:{
            back(){
                window.history.go(-1);
            }
        }
    }

</script>
<style lang="less">
    .search-wrap {
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        background: #fff;
        line-height: 50px;
        z-index: 9999;
        text-align: center;
        border-bottom: 1px solid #dbdbdd;
        .back{
            font-size: 20px;
            color:#00b600;
            float: left;
            padding-left: 15px;
        }
        h1 {
            margin: 0;
            padding: 0;
            color: #00b600;
            font-size: 0;
            background: url(../../assets/豆瓣.png) no-repeat;
            background-size: cover;
            height: 22px;
            width: 46px;
            display: inline-block;
            vertical-align: middle;
        }
    }
</style>