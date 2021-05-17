<template>
  <main>
    <div class="form_page">
      <h1>Регистрация</h1>
      <div class="form">
        <input type="text" v-model="user_data.username" class="standart">
        <input type="password" v-model="user_data.pass" class="standart">
      </div>
      <p class="error_msg" v-if="regist_error">{{regist_error}}</p>
      <a class="standart" v-on:click="regist()">Отправить</a>
    </div>
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
        regist_error: '',
      }
    },
    methods: {
      regist (){
        fetch('https://ppet.divinity.tech:3000/regist', {
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
          if (json.status == false) {
            this.regist_error = json.message;
          } else {
            this.$store.commit('setToken', json.token);
            this.$store.dispatch('getUserName');
            this.$router.push('/');
          }
        });
        }
    },
    metaInfo: {
      title: "Авторизация",
    }
  };
</script>
