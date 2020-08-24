<template>
    <div>
        <div class="swip_banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    methods:{
    }
}
</script>
<style lang="css" scoped>
.swip_banner{
    height: 200px;
}
.swip_banner .mint-swipe-item:nth-child(1){
    background-color: red;
}
.swip_banner .mint-swipe-item:nth-child(2){
    background-color: blue;
}
.swip_banner .mint-swipe-item:nth-child(3){
    background-color: green;
}
</style>