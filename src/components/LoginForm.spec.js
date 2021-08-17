import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('id는 이메일 형식이어야 함.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@abc.com',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log('인풋 박스의 값 ', idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });
});
