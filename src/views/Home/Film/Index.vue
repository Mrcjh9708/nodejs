<template>
  <div class="home-film">

    <router-link tag="div" to="/city" class="city-fixed">
      <span>{{ curCityName }}</span>
      <i class="iconfont icon-xiala" style="font-size: 10px;"></i>
    </router-link>

    <MzBanner></MzBanner>
    <MzTabs></MzTabs>

    <button @click="goCity">城市选择页面</button>

    <div style="height: 2000px"></div>
  </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/Index';
import MzTabs from '@/components/MzTabs/Index';
export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs
  },

  methods: {
    goCity () {
      this.$router.push('/city');

      // 字符跳转
      // this.$router.push('/city');
      // 对象方式
      // this.$router.push({
      //   根据定义的 path
      //   path: '/city',
      //   路由传参
      //   params: {
      //     id: 10
      //   },
      //   查询字符串传参， url ?
      //   query: {
      //     id: 10
      //   },
      //   命名路由
      //   name: 'lose'
      // })
    }
  }
}
</script>
<style lang="less">
.home-film {
  .city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
  }
}
</style>
