module.exports = {
  title: '后台管理系统',

  /**
   * @type {boolean} true | false
   * @description 页面右侧的 可伸缩面板
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description 页面标签 是否在 主页面中显示（侧边栏右侧的主页面）
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description 头部 header 是否固定显示 （侧边栏右侧的主页面的上方）
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 侧边栏顶部 logo 是否显示
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   * 默认显示错误日志的环境
   */
  errorLog: 'production'
}
