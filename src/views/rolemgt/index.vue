<template>
  <div>
      Role management
  </div>
</template>

<script>
export default {
  name:'RoleManagement',
  beforeDestroy() {
    console.log('马上要销毁RoleManagement')
  },
  mounted() {
    console.log('RoleManagement挂载了')
  }
}
</script>

<style>

</style>