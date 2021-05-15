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
    </nav>
    <div class="hdr_user_control">
      <router-link to="/auth" class="standart">Авторизация</router-link>
      <router-link to="/regist" class="standart">Регистрация</router-link>
    </div>
  </header>
</template>
