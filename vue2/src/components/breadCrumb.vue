<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in headData" :key="index"> {{ item }}</el-breadcrumb-item>
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
.el-breadcrumb {
  text-align: center;
  align-items: center;
}

</style>