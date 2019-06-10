<template>
    <div class="check-item" :class="{'pass': status === 1, 'fail': status === -1}">
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
    data() {
        return {
            // 0: 未标记
            // 1: 通过
            // -1: 未通过
            status: 0
        }
    },
    mounted() {
        this.status = this.data.status
    },
    watch: {
        data(v) {
            this.status = v.status
        }
    },
    methods: {
        changeStatus(status) {
            this.status = status
            if (status === 1) {
                this.$store.commit('passItem', this.index - 1)
            } else if (status === -1) {
                this.$store.commit('failItem', this.index - 1)
            }
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
    color: #b0b0b3;
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
    font-size: 16px;
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
