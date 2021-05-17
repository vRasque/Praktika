<template>
  <header>
    <h1>
      <router-link to="/">
        Прокопьевский промышленно-экономический техникум
      </router-link>
    </h1>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О сайте</router-link>
      <router-link to="/edu" v-if="Boolean($store.getters.getToken) == true">Успеваемость</router-link>
    </nav>
    <div class="hdr_user_control" v-if="Boolean($store.getters.getToken) == false">
      <router-link to="/auth" class="standart">Авторизация</router-link>
      <router-link to="/regist" class="standart">Регистрация</router-link>
    </div>
    <div class="hdr_user_control" v-else>
      {{ $store.getters.getUserName }}
      <a class="standart" v-on:click="$store.commit('deleteToken')">Выйти</a>
    </div>
  </header>
</template>
