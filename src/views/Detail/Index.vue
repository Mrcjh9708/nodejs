<template>
  <div>
    详情页面

    <h1>当前影片是 {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  created () {
    // 根据id请求数据
    console.log(this.$route.params.id);
  }
}
</script>
