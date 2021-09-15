/**
 * @jest-environment jsdom
 */
import './globals/firebaseTest.js';
import { Signup } from '../src/components/signup.js';

describe('Signup', () => {
  const root = document.createElement('div');
  it('should render', () => {
    const component = Signup();
    // root.appendChild(component);
    console.log(root);
    console.log(component.outerHTML);
  });
});
