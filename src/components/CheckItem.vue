<template>
    <div class="check-item" :class="{'pass': itemStatus === 1, 'fail': itemStatus === -1}">
        <div class="index">{{index}}</div>
        <div class="info">
            <div class="name">{{data.key}}</div>
            <div class="remark">{{data.remark}}</div>
        </div>
        <div class="buttons">
            <button class="btn-fail" @click="changeStatus(-1)">有问题</button>
            <button class="btn-pass" @click="changeStatus(1)">通过</button>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "CheckItem",
    props: {
        index: {
            type: Number
        },
        data: {
            type: Object
        }
    },
    methods: {
        changeStatus(status) {
            let index = this.index - 1
            if (status === 1) {
                this.$store.commit('passItem', index)
            } else if (status === -1) {
                this.$store.commit('failItem', index)
            }
        }
    },
    computed: {
        ...mapState({
            pass: state => state.pass,
            fail: state => state.fail
        }),
        // 0: 未标记
        // 1: 通过
        // -1: 未通过
        itemStatus() {
            if (this.pass.indexOf(this.index - 1) !== -1) {
                return 1
            }

            if (this.fail.indexOf(this.index - 1) !== -1) {
                return -1
            }
            return 0
        }
    }
}
</script>

<style lang="less" scoped>
.check-item {
    margin: 5px;
    border-bottom: 1px solid #e9ecf5;
    padding: 5px;

    &:after {
        content: ' ';
        display: block;
        clear: both;
    }
}

.pass {
    color: rgba(81, 179, 102, 0.86);
}

.fail {
    color: #b30000;

    .name {
        text-decoration: line-through;
    }
}

.pass, .fail {
    .btn-fail {
        background-color: rgba(191, 32, 30, 0.37);
    }
}

.index {
    float: left;
    width: 30px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: #f0ecf1;
    color: #717171;
    box-sizing: border-box;
}

.info {
    margin-left: 35px;
    box-sizing: border-box;
}

.buttons {
    float: right;
    padding: 5px 0;
    font-size: 12px;

    button {
        border: none;
        width: 56px;
        height: 32px;
        color: #FFF;
    }
}

.name {
    font-size: 14px;
    padding: 0 2px 3px 2px;
    font-weight: bold;
}

.remark {
    font-size: 12px;
    color: #828390;
}

.btn-pass {
    background-color: #b0b0b3;
}

.btn-fail {
    background-color: #b30000;
}
</style>
