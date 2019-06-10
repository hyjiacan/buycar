<template>
    <div class="home">
        <check-item :data="item" v-for="(item, i) in option" :key="item.key" :index="i + 1"></check-item>

        <div class="footer">
            <button @click="onComplete">完成</button>
        </div>
    </div>
</template>

<script>
import CheckItem from '@/components/CheckItem.vue'
import option from '@/assets/option.json'

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
        onComplete() {
            // 保存结果
            localStorage.setItem('result', JSON.stringify({
                pass: this.$store.state.pass,
                fail: this.$store.state.fail
            }))
            this.$router.push('result')
        }
    },
    mounted() {
        let cache = localStorage.getItem('result')
        if (!cache) {
            return
        }
        try {
            cache = JSON.parse(cache)
        } catch (e) {
            return
        }
        cache.pass.forEach((item, i) => {
            this.$store.commit('passItem', i)
        })
        cache.fail.forEach((item, i) => {
            this.$store.commit('failItem', i)
        })
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
        border: none;
        background-color: darkgreen;
        color: #FFF;
        width: 120px;
        height: 40px;

        &:hover, &:active {
            background-color: #00a700;
        }
    }

}
</style>
