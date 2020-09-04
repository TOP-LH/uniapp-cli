<script>
    export default {
        onLaunch: function () {
            console.log('App Launch')
        },
        onShow: function () {
            console.log('App Show')
        },
        onHide: function () {
            console.log('App Hide')
        }
    }
</script>

<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import 'uview-ui/index.scss';
    /*设置背景颜色*/
    page {
        background-color: $u-bg-color;
    }
</style>

<style lang="less">
    @import 'vant-weapp-convert-uniapp/components/common/index.less';
</style>
