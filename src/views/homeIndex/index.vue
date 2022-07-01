<template>
  <div class="home-index">
    111
  </div>
</template>

<script>
import { listCpaData } from '@/api/views/homeIndex'
export default {
  name: 'HomeIndex',
  data() {
    return {

    }
  },
  created() {
    this.listCpaData()
  },
  mounted() {

  },
  methods: {
    async listCpaData() {
      const data = await listCpaData()
      console.log('data----------', data)
    }
  }
}
</script>

<style lang="less" scoped>
.home-index {

}
</style>
