<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js';
export default {
  data() {
    return {
    };
  },
  watch:{
      max: function (newValue, oldValue,) {
        mui(".mui-numbox").numbox().setoption('max', newValue)
      }
  },
  props:[
    "max"
  ],
  methods: {
    countChanged(el){
      if (el.target.value === 0){
        this.$emit('getCount', 1)
      }else{
        this.$emit('getCount', parseInt(el.target.value))
      }
    }
  },
  mounted(){
      mui(".mui-numbox").numbox()
  }
};
</script>
<style lang="css" scoped>
</style>