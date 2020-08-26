<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120个字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="submitComment">发票评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in commentList" :key="i">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户: {{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
import NetworkTools from '../../js/NetworkTools.js';
export default {
    data(){
        return {
            commentList: [],
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
        loadMore(){
            NetworkTools.getRequestData('',() => {
                this.pageIndex++;
                var list = [
                    {user_name: "小3", add_time: new Date(), content: "锄禾日当午,扮猪吃老虎!!!!!"},
                    {user_name: "小3", add_time: new Date(), content: "锄禾日当午,扮猪吃老虎!!!!!"}
                ];
                this.commentList = this.commentList.concat(list);
            });
        },
        // 提交评论
        submitComment(){
        },
        //获取评论列表
        getCommentList(){
            NetworkTools.getRequestData("api/getcomments/"+this.id+"?pageindex="+this.id,() => {
                this.commentList = [
                    {user_name: "小二", add_time: new Date(), content: "锄禾日当午,扮猪吃老虎!!!!!"},
                    {user_name: "小二", add_time: new Date(), content: "锄禾日当午,扮猪吃老虎!!!!!"},
                    {user_name: "小二", add_time: new Date(), content: "锄禾日当午,扮猪吃老虎!!!!!"},
                    {user_name: "小二", add_time: new Date(), content: "锄禾日当午,扮猪吃老虎!!!!!"},
                    {user_name: "小二", add_time: new Date(), content: "锄禾日当午,扮猪吃老虎!!!!!"}
                ];
            });
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