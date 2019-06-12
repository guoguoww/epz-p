<template>
  <div class="headWrap">
    <p class="top"></p>
    <div class="container">
      <div class="w1200">
        <div><img src="../assets/imgs/logo2.png" alt=""></div>
        <div>
          <ul>
            <router-link :to="item.to" v-for="(item,k) of headTit" :key="k" tag="li" :class="$route.path ==item.to?'active':''">
              {{item.tit}}
              <i class="arrowDown" v-show="item.to=='/account'"></i>
            </router-link>
          </ul>
          <p>
            <router-link tag="span" to="/login">登入</router-link>
            |
            <router-link tag="span" to="/reg">注册</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  data() {
    return {
      headTit: [
        {tit: '首页',to:'/'},
        {tit: '配资计划',to: '/plan'},
        {tit: '在线交易',to: '/trading'},
        {tit: '关于我们',to: '/aboutUs'},
        {tit: '我的账户',to: '/account'},
      ],
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
      > div:nth-of-type(2) {
        display: flex;
        justify-content: space-between;
        width: 60%;
        ul {
          width: 80%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            color: #DCB26F;
            font-size: 14px;
            position: relative;
            cursor: pointer;
            i.arrowDown {
              display: inline-block;
              width: 7px;
              height: 7px;
              border-left: 1px solid #DCB26F;
              border-bottom: 1px solid #DCB26F;
              transform: rotate(-45deg);
              vertical-align: middle;
              margin-left: 3px;
              margin-bottom: 7px;
            }
            &.active:after {
              position: absolute;
              content: '';
              width: 100%;
              height: 4px;
              background: #DCB26F;
              display: block;
              top: 51px;
            }
          }
        }
        p {
          font-size: 14px;
          color: #DCB26F;
          cursor: pointer;
        }
      }
    }
  }

}
</style>
