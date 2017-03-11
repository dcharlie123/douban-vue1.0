<template>
<div class="movieMsg">
    <p>{{$route.params|json}}</p>
    {{intheaters}}
   
</div>
</template>
<script>
import bus from '../bus.js'
    export default{
        data(){
            return{
                intheaters:''
            }
        },
        ready(){
        }
    }
</script>
<style lang="less" scoped>
    .movieMsg{
        width: 100%;
        background: #fff;
    }
</style>
