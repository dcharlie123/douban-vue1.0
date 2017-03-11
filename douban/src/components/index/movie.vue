<template>
  <div class="index">
    <div class="wrapper">
      <section class="section1">
        <header class="title">
          <h2>影院热映</h2>
          <a>更多</a>
        </header>
        <div class="in_theaters" v-el:goods>
          <ul>
            <li v-for="(index,item) in goods.subjects">
              <img :src="item.images.medium" alt="">
              <p>{{item.title}}</p>
              <star :size="24" :scroe="item.rating.average"></star>
            </li>
          </ul>
        </div>
      </section>
      <section class="section1">
        <header class="title">
          <h2>影院热映</h2>
          <a>更多</a>
        </header>
        <div class="in_theaters" v-el:good>
          <ul>
            <li v-for="(index,item) in seller.subjects">
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
  import BScroll from "better-scroll";
  import axios from 'axios'
  import star from '../star/star.vue'
  export default {
    data() {
      return {
        goods: [],
        seller: {}
      }
    },
    created() {
      let urls = ['/api/movie/in_theaters'];
      let requests = urls.map(makeRequest);
      var _this = this;
      function makeRequest(url) {
        return axios.get(url);
      };
      axios.all(requests).then(axios.spread(function (...res) {
        if (res[0].status === 200) {
          _this.goods = res[0].data;
        //   _this.seller = res[1].data;
        };
        _this.$nextTick(() => {
          _this.initAscroll();
        //   _this.initBscroll();
        });
      }));
    },
    methods: {
      initAscroll() {
        if (!this.Ascroll) {
          this.Ascroll = new BScroll(this.$els.goods, {
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
    components:{
        "star":star
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
  }
  
  ul {
    display: inline-flex;
    border-bottom: 1px solid #F2F2F2;
    padding: 0 0 43px 0;
  }
  
  li {
    display: inline-block;
    width: 100px;
    flex: 1 1 100px;
  }
</style>




<template>
    <div class="index">
        <loading :loading="loading"></loading>
        <div class="wrapper" v-show="!loading">
            <section class="section">
                <header class="title">
                    <h2>影院热映</h2>
                    <a>更多</a>
                </header>
                <div class="in_theaters" v-el:intheaters>
                    <ul>
                        <li v-for="(index,item) in in_theaters.data[0].foods" v-show="index<getMovie">
                            <img :src="item.icon" alt="">
                            <p>{{item.title}}</p>
                            <star :size="24" :score="item.rating.average"></star>
                        </li>
                        <li v-show="!loading&&getMovie<=20"><span>全部</span>{{in_theaters.count}}部</li>
                    </ul>
                </div>
            </section>
            <section class="section">
                <header class="title">
                    <h2>影院热映</h2>
                    <a>更多</a>
                </header>
                <div class="in_theaters" v-el:comingsoon>
                    <ul>
                        <li v-for="(index,item) in coming_soon.subjects" v-show="index<getMovie">
                            <img :src="item.images.medium" alt="">
                            <p>{{item.title}}</p>
                            <star :size="24" :score="item.rating.average"></star>
                        </li>
                        <li v-show="!loading&&getMovie<=20"><span>全部</span>{{coming_soon.count}}部</li>
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
                coming_soon: [],
                loading: true
            }
        },
        filters: {

        },
        created() {
            let urls = ['/api/goods', '/api/seller'];
            let requests = urls.map(makeRequest);
            var _this = this;
            function makeRequest(url) {
                return axios.get(url);
            };
            axios.all(requests).then(axios.spread(function (...res) {
                if (res[0].status === 200) {
                    _this.in_theaters = res[0].data;
                    _this.coming_soon = res[1].data;
                };
                _this.$nextTick(() => {
                    _this.loading=false;
                    _this.initAscroll();
                    _this.initBscroll();
                });
            }));
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
                    this.Bscroll = new BScroll(this.$els.comingsoon, {
                        scrollX: true,
                        click: true
                    });
                } else {
                    this.Bscroll.refresh();
                }
            }
        },
        computed: {
            getMovie: function () {
                var w = document.body.offsetWidth;
                var n = Math.floor(3 * w / 109);
                return n;
            }
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
        .section {
            background: #fff;
            margin: 10px 0 30px 0;
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
            .in_theaters {
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