<template>
    <div class="check-item" :class="{'pass': status === 1, 'fail': status === -1}">
        <div class="index">{{index}}</div>
        <div class="info">
            <div class="name">{{data.key}}</div>
            <div class="remark">{{data.remark}}</div>
        </div>
        <div class="buttons">
            <button class="btn-pass" @click="changeStatus(1)">通过</button>
            <button class="btn-fail" @click="changeStatus(-1)">有问题</button>
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

.index {
    float: left;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f0ecf1;
    color: #717171;
    padding: 5px;
    margin-right: 5px;
}

.info {
    float: left;
    padding: 5px 0;
}

.buttons {
    float: right;
    padding: 5px 0;

    button {
        border: none;
        width: 60px;
        height: 40px;
        color: #FFF;
    }
}

.name {
    font-size: 16px;
    padding: 2px;
    font-weight: bold;
}

.remark {
    font-size: 12px;
}

.btn-pass {
    background-color: #b0b0b3;
}

.btn-fail {
    background-color: #b30000;
}
</style>
