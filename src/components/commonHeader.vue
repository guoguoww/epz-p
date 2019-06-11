<template>
  <div class="headWrap">
    <p class="top"></p>
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.headWrap {
  .top {
    height: 7px;
    background: #DCB26F;
    width: 100%;
  }
}
</style>
