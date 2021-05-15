<template>
  <main>
    <h1>Регистрация</h1>
    <div class="form">
      <input type="text" v-model="user_data.username">
      <input type="password" v-model="user_data.pass">
    </div>
    <a class="standart" v-on:click="regist()">Отправить</a>
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
      }
    },
    methods: {
      regist (){
        fetch('http://localhost:3000/regist', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(this.user_data)
        })
        .then(function(res) {
          return res.json();
        })
        .then(function(json) {
          console.log(json);
        });
        }
    },
  };
</script>