<template>
  <div>
    <!--头部导航栏区域 -->
    <bread-crumb :head-data="headData"></bread-crumb>
  </div>
</template>

<script>
import breadCrumb from "../breadCrumb";

export default {
  data() {
    return {}
  },
  components: {
    breadCrumb
  },
  computed: {
    headData() {
      return this.$route.path.split('/').slice(1)
    }
  }
}
</script>

<style scoped>

</style>