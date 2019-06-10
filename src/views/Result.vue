<template>
    <div class="result">
        <h3>有问题项 ({{fail.length}}/{{option.length}})</h3>
        <ul v-if="fail.length">
            <li v-for="idx in fail" :key="idx">{{option[idx].key}}</li>
        </ul>
        <div class="empty" v-else>无</div>
        <h3>通过项 ({{pass.length}}/{{option.length}})</h3>
        <ul v-if="pass.length">
            <li v-for="idx in pass" :key="idx">{{option[idx].key}}</li>
        </ul>
        <div class="empty" v-else>无</div>
        <h3>未检查项 ({{remain.length}}/{{option.length}})</h3>
        <ul v-if="remain.length">
            <li v-for="idx in remain" :key="idx">{{option[idx].key}}</li>
        </ul>
        <div class="empty" v-else>无</div>
    </div>
</template>

<script>
import option from '@/assets/option.json'
import {mapState} from "vuex";
import storage from "../assets/storage";

export default {
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
        remain() {
            let remain = []
            let temp = {}
            option.forEach((item, i) => {
                temp[i] = option[i]
            })

            this.pass.forEach((item, i) => {
                delete temp[i]
            })

            this.fail.forEach((item, i) => {
                delete temp[i]
            })

            for (let i in temp) {
                if (!temp.hasOwnProperty(i)) {
                    continue
                }
                remain.push(i)
            }
            return remain
        }
    },
    mounted() {
        let cache = storage.getItem('result')
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
.result {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 1;
    padding-left: 20px;
}

li {
    font-size: 12px;
    padding: 5px 0;
}

.empty {
    padding-left: 20px;
    color: #AAA;
}
</style>
