<template>
    <div class="newsinfo">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间: {{ newsinfo.add_date | dateFormat }}</span>
            <span>点击: {{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content">
            {{ newsinfo.content }}
        </div>
        <!-- 评论 -->
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import comment from '../subcomponent/Comment.vue';

export default {
    data(){
        return {
            id: this.$route.params.id,
            newsinfo: {
                title: "小二",
                add_date: new Date(),
                click: 5,
                content: "今天七夕，来一波七夕搞笑段子 七夕段子 搞笑段子 历史总是惊人的相似，前年七夕我是单身，去年七夕我是单身，今年七夕还是单身。 七夕我直接吃七个西瓜 因为 七西快乐 单身的朋友不要怕，情人节只有一天 而单身是每一天 和彭于晏约会中…勿扰。 你们99 我八十一难 我对象说给我一百万 象说 滚 我要在今天玩一整天的消消乐，消一对是一对 物各有主 我希望你能做我的公主 虐待动物犯法，小心我告你们哦 激动的心，颤抖的手，孤独的人，在扣99 终于结束了大半年的单身开始剩下小半年的了 七夕交换礼物吗 你给我精美礼物 我给你详细地址 今天有点烦不知道怎么形容我暂且称它为单身公主的烦恼 我对象说七夕陪我玩一天，象说动物园管的太严了，不让出来。 科普一下辣的级别 微辣 中辣 超辣 变态辣 你又是一个人过七夕辣 七夕了 不知道送什么 不如就在王者峡谷送几个人头吧 老有人问我对象怎么样，我对象很好，对羊也很好，对猪也不错。我很善良，谢谢 这一秒有60万人在亲嘴 有20万人在拥抱 而你却在看我这个文案 你好惨。"
            }
        }
    },
    created(){
        console.log(this.$route.params.id)
    },
    components: {
        comment
    },
    methods:{
    }
}
</script>
<style lang="css" scoped>
.newsinfo{
    padding: 0px 4px;
}
.newsinfo .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0px;
    color: red;
}
.newsinfo .subtitle{
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
.newsinfo .content{
    color: rgb(87, 79, 79);
}
</style>