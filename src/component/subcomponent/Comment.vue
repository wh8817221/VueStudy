<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120个字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发票评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in commentList" :key="i">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户: {{item.user_name}}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            commentList: null,
            pageIndex: 1, //默认展示第一页
        }
    },
    created(){
        this.getCommentList()
    },
    props:[
        "id"
    ],
    methods:{
        getCommentList(){
            this.commentList = [
                {user_name: "小二", add_time: new Date(), content: "锄禾日当午,这是几个人呢,俺老孙来也!!!!!"},
                {user_name: "小二", add_time: new Date(), content: "锄禾日当午,这是几个人呢俺老孙来也!!!!!"},
                {user_name: "小二", add_time: new Date(), content: "锄禾日当午,这是几个人呢俺老孙来也!!!!!"},
                {user_name: "小二", add_time: new Date(), content: "锄禾日当午,这是几个人呢俺老孙来也!!!!!"},
                {user_name: "小二", add_time: new Date(), content: "锄禾日当午,这是几个人呢俺老孙来也!!!!!"},
                {user_name: "小二", add_time: new Date(), content: "锄禾日当午,这是几个人呢俺老孙来也!!!!!"}
            ]
            // this.$http.get("api/getcomments/"+this.id+"?pageindex="+thi.id).then(result=>{
            //     if (result.body.status === 0) {

            //     } else {
            //         Toast("获取数据失败")
            //     }

            // })
        }
    }
}
</script>
<style lang="css" scoped>
.cmt-container h3 {
    font-size: 18px;
}
.cmt-container textarea {
    font-size: 14px;
    height: 85px;
    margin: 0px;
}
.cmt-container .cmt-list{
    margin: 5px 0px;
}
.cmt-container .cmt-list .cmt-title {
   background-color: #cccccc;
   font-size: 13px;
   line-height: 35px;
}
.cmt-container .cmt-list .cmt-body {
   line-height: 35px;
   text-indent: 2em;
}
</style>