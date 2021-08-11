<template>
  <div class="contents">
    <div class="form-wrapper">
      <h1 class="page-header">Edit Post</h1>
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="3" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            글자 수 200 초과
          </p>
        </div>
        <button type="submit" class="btn">수정</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    submit() {},
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
