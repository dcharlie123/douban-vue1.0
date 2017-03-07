<template>
    <div id="tabbar">
        <div class="tab-item">
            <a v-link="{path:'/index'}">
                <span class="tab-icon">
                    <i class="iconfont icon-home"></i>
                </span>
                <span class="tab-text">首页电影</span>
            </a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/books'}">
                <span class="tab-icon">
            <i class="iconfont icon-shu"></i>
          </span>
                <span class="tab-text">图书</span>
            </a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/broadcast'}">
                <span class="tab-icon">
            <i class="iconfont icon-guangbo"></i>
          </span>
                <span class="tab-text">广播</span>
            </a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/group'}">
                <span class="tab-icon">
            <i class="iconfont icon-group"></i>
          </span>
                <span class="tab-text">小组</span>
            </a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/user'}">
                <span class="tab-icon">
            <i class="iconfont icon-icon"></i>
          </span>
                <span class="tab-text">我的</span>
            </a>
        </div>
    </div>
</template>
<script>
    export default{}
</script>
<style lang="less">
    #tabbar {
        display: flex;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        height: 50px;
        background: #fff;
        border-top: 1px solid #e4e4e4;
        .tab-item {
            flex: 1;
            text-align: center;
            a.active .tab-text,
            a.active i {
                color: #42bd56;
            }
            .tab-icon {
                display: block;
                padding-top: 2px;
                i {
                    color: #949494;
                    font-size: 20px;
                }
            }
            .tab-text {
                display: block;
                font-size: 10px;
                color: #949494;
            }
        }
    }
</style>