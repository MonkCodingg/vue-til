import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// axios 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
const posts = createInstanceWithAuth('posts');

// 학습 노트 데이터 조회 API
function fetchPosts() {
  return instance.get('posts');
}
// 학습 노트 데이터 생성 API
function createPosts(postData) {
  return instance.post('posts', postData);
}

CREATE - post;

export { registerUser, loginUser, fetchPosts, createPosts };
