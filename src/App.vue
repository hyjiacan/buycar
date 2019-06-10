<template>
    <div id="app">
        <div class="header">
            <div class="btn-back" v-if="isResultPage" @click="$router.back()">
                &lt;&lt; 返回
            </div>
            <div class="title" v-else>
                验车助手
            </div>
            <div class="info">
                通过 {{pass.length}} 项, 有问题 {{fail.length}} 项 , 剩下 {{option.length - pass.length - fail.length}} 项 / 共 {{option.length}} 项
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
import option from '@/assets/option.json'
import {mapState} from "vuex";

export default {
    name: "App",
    data() {
        return {
            option
        }
    },
    computed: {
        ...mapState({
            pass: state => state.pass,
            fail: state => state.fail
        }),
        isResultPage() {
            return this.$route.path === '/result'
        }
    }
}

</script>

<style lang="less" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
}

.header {
    background-color: #2c3e50;
    position: absolute;
    top: 0;
    left: 0;;
    right: 0;
    height: 40px;
    z-index: 2;

    &:after {
        content: ' ';
        display: block;
        clear: both;
    }
}

.btn-back {
    float: left;
    width: 60px;
    height: 40px;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    border-right: 1px solid #b0b0b3;
    color: #f8f6fa;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: 5px;
    cursor: pointer;
}

.title {
    font-size: 18px;
    float: left;
    color: #FFF;
    margin-right: 10px;
    padding: 8px;
}

.info {
    float: right;
    color: #fdffc6;
    font-size: 12px;
    padding: 10px 5px 10px 0;
}
</style>
