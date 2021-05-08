<template>
  <div>
    <el-header>
      <!--头部面包屑区域-->
      <bread-crumb :head-data="headerData"></bread-crumb>
    </el-header>
    <el-main>
      <ul>
        <li v-for="item in data" :key="item.sid">
          <span>
            <img :src="item.header" alt="" />
          </span>
        </li>
      </ul>
    </el-main>
  </div>
</template>

<script>
import breadCrumb from "../breadCrumb";

export default {
  data() {
    return {
      data: [], // 存放获取的笑话数据
      searchParams: [], // 查找的参数
      headerData: [],
    };
  },
  components: {
    breadCrumb,
  },
  created() {
    this.getJokesData();
    // console.log(this.$route.path)
    this.splitPath();
  },
  methods: {
    async getJokesData() {
      const { data: res } = await this.$http.get(
        "https://api.apiopen.top/getJoke"
      );
      console.log(res.result);
      this.data = res.result;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    splitPath() {
      this.headerData = this.$route.path.split("/").slice(1); // 分割path路径为数组
      // console.log(this.headerData)
    },
  },
};
</script>

<style lang="less" scoped>
.el-main ul li {
  list-style-type: none;
}
</style>