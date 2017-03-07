<template>
    <div class="index">
        <loading :loading="loading"></loading>
        <div class="wrapper" v-show="!loading">
            <section class="section1">
                <header class="title">
                    <h2>影院热映</h2>
                    <a>更多</a>
                </header>
                <div id="in_theaters" v-el:intheaters>
                    <ul>
                        <li v-for="(index,item) in in_theaters.subjects" v-show="index<8">
                            <img :src="item.images.medium" alt="">
                            <p>{{item.title}}</p>
                            <star :size="24" :score="item.rating.average"></star>
                        </li>
                        <li v-show="!loading"><span>全部</span>{{in_theaters.count}}部</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll';
    import axios from 'axios';
    import loading from '../loading/loading.vue'
    import star from '../star/star.vue'
    export default {
        data() {
            return {
                in_theaters: [],
                loading: true
            }
        },
        filters: {

        },
        created() {

            axios.get('/api/movie/in_theaters').then((res, req) => {
                if (res.status === 200) {
                    this.in_theaters = res.data;
                    this.loading = false;
                };
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$els.intheaters, {
                            scrollX: true,
                            click: true
                        });
                    } else {
                        this.scroll.refresh();
                    }
                });
            });
        },
        methods: {
        },
        ready() {

        },
        components: {
            loading,
            star
        }

    }

</script>
<style lang="less">
    .wrapper {
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #EAEAEA;
        .section1 {
            background: #fff;
            margin:10px 0 30px 0;
            .title {
                padding: 0 1.12rem;
                // line-height: 1.5rem;
                h2 {
                    line-height: 3.6rem;
                    display: inline-block;
                    min-width: 4em;
                    margin-bottom: 0;
                    font-size: 1.5rem;
                    color: #111;
                    padding-left: 0;
                    padding-bottom: 0;
                }
                a {
                    float: right;
                    font-size: 1.3rem;
                    line-height: 3.6rem;
                    color: #00b600;
                }
            }
            #in_theaters {
                margin-bottom: -1.12rem;
                ul {
                    display: inline-flex;
                    border-bottom: 1px solid #F2F2F2;
                    padding: 0 0 43px 0;
                    li {
                        display: inline-block;
                        width: 100px;
                        flex: 1 1 100px;
                        &:last-child {
                            height: 143px;
                            background: #EAEAEA;
                            color: #999;
                            text-align: center;
                            line-height: 143px;
                            margin-right: 9px;
                        }
                        margin-left: 9px;
                        p {
                            max-width: 100px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            -o-text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        img {
                            height: 143px;
                        }
                    }
                }
            }
        }
    }
</style>