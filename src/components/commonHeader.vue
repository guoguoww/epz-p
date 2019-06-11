<template>
  <div class="headWrap">
    <p class="top"></p>
    <div class="container">
      <div class="w1200">
        <div><img src="../assets/imgs/logo2.png" alt=""></div>
        <ul>
          <li>4577</li>
          <li>4577</li>
          <li>4577</li>
          <li>4577</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  data() {
    return {

    }
  },
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
  > div {
    background: #17161D;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      ul {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          color: #DCB26F;
        }
      }
    }
  }

}
</style>
