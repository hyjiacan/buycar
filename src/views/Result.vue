<template>
    <div class="result">
        <h3>有问题项 ({{fail.length}}/{{option.length}})</h3>
        <ul v-if="fail.length" class="fail-list">
            <li v-for="idx in fail" :key="idx">{{option[idx].key}}</li>
        </ul>
        <div class="empty" v-else>无</div>
        <h3>通过项 ({{pass.length}}/{{option.length}})</h3>
        <ul v-if="pass.length" class="pass-list">
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
import option from '../assets/option.js'
import {mapState} from "vuex";

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
                temp[i] = item
            })

            this.pass.forEach(i => {
                delete temp[i]
            })

            this.fail.forEach(i => {
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

.fail-list {
    color: #b30000;
}

.pass-list {
    color: #006e00;
}
</style>
