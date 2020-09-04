<template>
    <view>
        <u-button @click="test1">默认按钮</u-button>
    </view>
</template>

<script>

    export default {
        data() {
            return {
                title: 'Hello'
            }
        },
        onLoad() {

        },
        methods: {
            test1() {
                // 调用getSearch接口
                this.$u.api.getSearch().then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style>

</style>
