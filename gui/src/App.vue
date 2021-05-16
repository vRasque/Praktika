<template>
  <div id="app">
    <tmpheader></tmpheader>
    <router-view/>
    <tmpfooter></tmpfooter>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$store.getters.getToken) this.$store.dispatch('getUserName');
  },
}
</script>

<style lang="sass">
  @import "./sass/reset.sass"
  @import "./sass/master.sass"
  @import "./sass/fonts.sass"
</style>
