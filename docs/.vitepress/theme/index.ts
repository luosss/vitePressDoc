import Theme from 'vitepress/dist/client/theme-default';
import { registerComponents } from './register-components.js';
import AButton from '../components/aButton.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app), app.component('a-button', AButton);
  }
};
