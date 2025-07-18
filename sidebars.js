/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  sidebar: [
    {
      type: 'category',
      label: '開始使用',
      collapsed: false,
      items: ['intro', 'installation', 'bot-command'],
    },
    {
      type: 'category',
      label: '配置設定',
      collapsed: false,
      items: ['configuration', 'task-format', 'kktix-format', 'proxy', 'session', 'discord-webhook-url'],
    },
    {
      type: 'doc',
      id: 'faq',
      label: '常見問題FAQ',
    },
    {
      type: 'doc',
      id: 'terms',
      label: '使用條款',
    },
    {
      type: 'doc',
      id: 'support',
      label: '聯絡我們 / 支援',
    },
    {
      type: 'doc',
      id: 'disclaimer', // 這樣獨立顯示免責聲明在底部
      label: '免責聲明',
    },
  ],
};
