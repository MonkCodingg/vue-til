import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('id는 이메일 형식이어야 함.', () => {
    const wrapper = shallowMount(LoginForm);
    const idInput = wrapper.find('#username');
    console.log(idInput.html());
  });
});
