<template>
  <main>
    <h1>Авторизация</h1>
    <div class="form">
      <input type="text" v-model="user_data.username">
      <input type="password" v-model="user_data.pass">
    </div>
    <p class="error_msg" v-if="auth_error">{{auth_error}}</p>
    <a class="standart" v-on:click="auth()">Отправить</a>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        user_data: {
          username: '',
          pass: '',
        },
        auth_error: '',
      }
    },
    methods: {
      auth (){
        fetch('http://localhost:3000/auth', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(this.user_data)
        })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);
          if (json.status == false) {
            this.auth_error = json.message;
          } else {
            this.$store.commit("setToken", json.token);
            this.$router.push('/');
          }
        });
        }
    },
  };
</script>