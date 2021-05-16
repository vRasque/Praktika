<template>
  <main>
    <h1>Главная страница</h1>
    {{Boolean($store.getters.getToken)}}
  </main>
</template>
