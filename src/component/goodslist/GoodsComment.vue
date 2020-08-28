<template>
    <div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from '../subcomponent/Comment.vue';
export default {
    data(){
        return {
            id: this.$route.params.id,
        }
    },
    methods:{
    },
    components: {
        comment,
    }
}
</script>
<style lang="css" scoped>
</style>