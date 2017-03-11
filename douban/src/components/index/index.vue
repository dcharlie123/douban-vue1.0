<template>
    <div class="index">
        <loading :loading="loading"></loading>
        <div class="wrapper">
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
            <section class="section">
                <header class="title">
                    <h2>即将上映</h2>
                    <a>更多</a>
                </header>
                <div class="item-wrapper" v-el:good>
                    <ul>
                        <li v-for="(index,item) in seller.subjects" v-show="index<getMovie" v-link="{name:'movieMsg', params: {id: item.id}}">
                            <img :src="item.images.medium" alt="">
                            <p>{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import bus from '../bus.js'
    import BScroll from "better-scroll";
    import axios from 'axios'
    import star from '../star/star.vue'
    import loading from '../loading/loading.vue'
    export default {
        data() {
            return {
                intheaters: [],
                seller: {},
                loading: true
            }
        },
        created() {
            let urls = ['/api/movie/in_theaters','/api/movie/coming_soon'];
            let requests = urls.map(makeRequest);
            var _this = this;
            function makeRequest(url) {
                return axios.get(url);
            };
            axios.all(requests).then(axios.spread(function (...res) {
                if (res[0].status === 200) {
                    _this.intheaters = res[0].data;
                      _this.seller = res[1].data;
                };
                _this.$nextTick(() => {
                    _this.loading = false;
                    _this.initAscroll();
                    _this.initBscroll();
                });
            }));
        },
        computed: {
            getMovie: function () {
                var w = document.body.offsetWidth;
                var n = Math.floor(3 * w / 109);
                return n;
            }
        },
        methods: {
            initAscroll() {
                if (!this.Ascroll) {
                    this.Ascroll = new BScroll(this.$els.intheaters, {
                        scrollX: true,
                        click: true
                    });
                } else {
                    this.Ascroll.refresh();
                }
            },
            initBscroll() {
                if (!this.Bscroll) {
                    this.Bscroll = new BScroll(this.$els.good, {
                        scrollX: true,
                        click: true
                    });
                } else {
                    this.Bscroll.refresh();
                }
            }
        },
        components: {
            "star": star,
            "loading": loading
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
        .section {
            background: #fff;
            margin: 10px 0 20px 0;
            .title {
                padding: 0 1.12rem;
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
        }
        .item-wrapper {
            margin-bottom: -1.12rem;
            ul {
                display: inline-flex;
                border-bottom: 1px solid #F2F2F2;
                padding: 0 0 36px 0;
                li {
                    display: inline-block;
                    width: 100px;
                    flex: 1 1 100px;
                    margin-left: 9px;
                    &.last{
                        height: 143px;
                        background: #EAEAEA;
                        color: #999;
                        writing-mode:lr-tb;
                        text-align: center;
                        line-height: 143px;
                        margin-right: 9px;
                    }
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
</style>