<template>
  <div>
    <p>welcome</p>
    <p ref="p">a:{{a}},b:{{b}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 1,
        b: 2
      }
    },
    created() {
      setTimeout(() => {
        this.$nextTick(() => {
          console.log(this.$refs['p'].innerText);
        })
        this.a = 100
        this.b = 200
      }, 1000);
    }
  }
</script>

<style scoped>

</style>