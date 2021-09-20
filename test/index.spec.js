/**
 * @jest-environment jsdom
 */
import './globals/firebaseTest.js';
import { Signup } from '../src/components/signup.js';

window.alert = jest.fn();

describe('Signup', () => {
  const component = Signup();
  it('should render signup view', () => {
    expect(component.outerHTML).toMatchSnapshot();
  });
  it('should register the user when the submit button is clicked', async () => {
    window.alert.mockClear();

    const mockSignUp = jest.fn();
    mockSignUp.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      createUserWithEmailAndPassword: mockSignUp,
    }));

    const email = 'user@example.com';
    const password = '123456';

    component.querySelector('#emailUser').value = email;
    component.querySelector('#passwordUser').value = password;
    const submitBTN = component.querySelector('#submitBTN');
    submitBTN.click();
    await Promise.resolve();
    expect(mockSignUp).toHaveBeenCalled();
  });
  it('should show password and replace button img by an slash-eye', () => {
    // const displayPassword = component.querySelector('#displayPassword');
    const togglePassword = component.querySelector('#togglePassword');
    togglePassword.click();
    expect(togglePassword).toMatchSnapshot();
  });
});
