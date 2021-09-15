/**
 * @jest-environment jsdom
 */
import './globals/firebaseTest.js';
import { Signup } from '../src/components/signup.js';

describe('Signup', () => {
  // const root = document.createElement('div');
  it('should render', () => {
    const component = Signup();
    console.log(component.outerHTML);
  });
});
