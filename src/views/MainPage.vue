<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <PostListItem
          v-for="postItem in postItems"
          v-bind:key="postItem._id"
          v-bind:postItem="postItem"
        ></PostListItem>
        <!-- <li v-for="postItem in postItems" v-bind:key="postItem._id">
          <div class="post-title">{{ postItem.title }}</div>
          <div class="post-contents">{{ postItem.contents }}</div>
          <div class="post-time">{{ postItem.createdAt }}</div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';

export default {
  components: { PostListItem },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
