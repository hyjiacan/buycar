<template>
    <div class="home">
        <check-item :data="item" v-for="(item, i) in option" :key="item.key" :index="i + 1"></check-item>
        <div class="footer">
            <button class="btn-reset" @click="onReset">清除状态</button>
            <button class="btn-submit" @click="onComplete">完成</button>
        </div>
    </div>
</template>

<script>
import CheckItem from '../components/CheckItem.vue'
import option from '../assets/option.js'

export default {
    name: 'home',
    components: {
        CheckItem
    },
    data() {
        return {
            option
        }
    },
    methods: {
        onReset() {
            if (!window.confirm('此操作不可恢复，确定要清除检查状态吗？')) {
                return
            }
            this.$store.commit('reset')
        },
        onComplete() {
            this.$router.push('result')
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 1;
}

.footer {
    padding: 10px;
    text-align: center;

    button {
        margin: 0 2px;
        border: none;
        color: #FFF;
        width: 150px;
        height: 40px;
    }

    .btn-submit {
        background-color: #008d00;

        &:hover, &:active {
            background-color: #006e00;
        }
    }

    .btn-reset {
        background-color: #c92b10;

        &:hover, &:active {
            background-color: #a7240d;
        }
    }
}
</style>
