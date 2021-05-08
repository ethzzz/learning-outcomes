<template>
  <div>
    <el-header>
      <!--头部面包屑区域-->
      <bread-crumb :head-data="dataSplit"></bread-crumb>
    </el-header>
    <el-main></el-main>
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
  created() {
  },
  computed: {
    dataSplit() {
      return this.$route.path.split('/').slice(1)
    }
  }
}
</script>

<style scoped>

</style>