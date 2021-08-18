import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('id가 이메일 형식이 아니면 경고 메시지가 출력됨.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    //console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });

  test('id와 pw가 입력되지 않으면 로그인 버튼이 비활성화 됨', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'a@a.com',
          password: '1234',
        };
      },
    });
    const button = wrapper.find('button');
    // button.element.disabled
    expect(button.element.disabled).toBeTruthy();
  });
});
