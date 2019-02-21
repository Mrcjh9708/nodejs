<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>

    <button @click="goCity">城市选择页面</button>
    <ul>
      <router-link tag="li" to="/detail/100">今夜在浪漫剧场</router-link>
      <router-link tag="li" to="/detail/200">阿丽塔</router-link>
      <router-link tag="li" to="/detail/300">朝花夕誓</router-link>
      <router-link tag="li" to="/detail/400">一吻定情</router-link>
    </ul>
  </div>
</template>

<script>
import MzBanner from '../components/MzBanner/Index';
import MzTabs from '../components/MzTabs/Index';
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
