<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id:</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">pw:</label>
        <input id="password" type="text" v-model="password" />
      </div>
      <button type="submint">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    submitForm() {
      axios.post();
    },
  },
};
</script>

<style></style>
