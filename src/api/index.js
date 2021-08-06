import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}
// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}
// 학습 노트 데이터 조회 API
function fetchPosts() {
  return instance.get('posts');
}
// 학습 노트 데이터 생성 API
function createPosts(postData) {
  return instance.post('posts', postData);
}
export { registerUser, loginUser, fetchPosts, createPosts };
