<template>
  <div class="contents">
    <div class="form-wrapper">
      <h1 class="page-header">Create Post</h1>
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="3" v-model="contents" />
        </div>
        <button type="submit" class="btn">생성</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createPosts } from '@/api/index';

export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    async submitForm() {
      const response = await createPosts({
        title: this.title,
        contents: this.contents,
      });

      console.log(response);
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
