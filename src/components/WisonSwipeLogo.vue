<template>
    <view>
        <u-swiper mode="rect" :img-mode="heightFix" height="350" effect3d="true" :list="list"/>
    </view>
</template>

<script>
    export default {
        name: "swipeLogo",
        data() {
            return {
                list: [{
                    image: 'https://wpos.wison.com/WisonWebApp/Wison.WebApp.Forms/img/wx/huisheng.jpg'
                }, {
                    image: 'https://wpos.wison.com/WisonWebApp/Wison.WebApp.Forms/img/wx/gongcheng.jpg'
                }, {
                    image: 'https://wpos.wison.com/WisonWebApp/Wison.WebApp.Forms/img/wx/haigong.jpg'
                }, {
                    image: 'https://wpos.wison.com/WisonWebApp/Wison.WebApp.Forms/img/wx/xincailiao.jpg'
                }]
            }
        }
    }
</script>