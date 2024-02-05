import sidebar from './config/sidebar';

const config = {
  title: 'CSS3新世界',
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    }
  }
};

export default config;
