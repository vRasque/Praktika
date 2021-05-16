<template>
  <main>
    <div class="edu_page">
      <h2>Студент: {{ $store.getters.getUserName }}</h2>
      <div class="edu_results">
        <div class="edu_results_item" v-for="item in $store.getters.getEduResults">
          <p>{{item.name}}</p>
          <p>{{item.type}}</p>
          <p>{{item.result}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('eduAction');
  },
  metaInfo: {
    title: "Успеваемость",
  }
};
</script>
