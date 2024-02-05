const sidebar = {
  '/': [
    {
      text: '内容提要',
      link: '/'
    },
    {
      text: '第三章 从增强已有的CSS属性开始',
      children: [
        { text: '3.3 在CSS边框上做文章', link: '/articles/border-image' },
        { text: '3.4 position属性的增强', link: '/articles/position' }
      ]
    },
    {
      text: '第5章 更强的视觉表现',
      children: [{ text: '5.4 CSS动画', link: '/articles/animation' }]
    },
    {
      text: '第7章 不同设备的适配与响应',
      children: [
        { text: '7.1 @media规则', link: '/articles/media' },
        { text: '7.2 环境变量函数env()', link: '/articles/env' },
        { text: '7.3 rem和vw单位与移动端适配最佳实践', link: '/articles/rem' },
        { text: '7.4 使用touch-action属性控制设备的触摸行为', link: '/articles/touch-action' },
        { text: '7.5 image-set()函数与多倍图设置', link: '/articles/image-set' }
      ]
    }
  ]
};

export default sidebar;
