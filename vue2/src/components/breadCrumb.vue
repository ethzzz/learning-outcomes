<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item of headData" :key="item"> {{ item }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    headData: Array,
  },
  data() {
    return {}
  },
  created() {
    // this.dataSplit()
  },
  methods: {}
}
</script>

<style scoped>

</style>