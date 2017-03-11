<template>
    <section class="section">
        <header class="title">
            <h2>影院热映</h2>
            <a>更多</a>
        </header>
    <div class="item-wrapper" v-el:intheaters>
    <ul>
    <li v-for="(index,item) in intheaters.subjects" v-show="index<getMovie" v-link="{name:'movieMsg', params: {id: item.id}}">
    <img :src="item.images.medium" alt="">
    <p>{{item.title}}</p>
    <star :size="24" :score="item.rating.average"></star>
    <span>{{item.rating.average}}</span>
    </li>
    <li v-show="!loading&&getMovie<=20" class="last"><span>全部</span>{{intheaters.count}}部</li>
    </ul>
    </div>
    </section>
</template>
<script>
    export default{
        prop:{
            title:{
                type:String,
                require:true
            },
        }
    }
</script>
<style lang="">
    
</style>