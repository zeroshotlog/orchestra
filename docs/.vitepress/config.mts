import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Orchestra',
  description: 'A macOS desktop app that monitors AI coding agent sessions in real-time.',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'Reference', link: '/reference/faq' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is Orchestra?', link: '/guide/what-is-orchestra' },
              { text: 'Getting Started', link: '/guide/getting-started' },
            ],
          },
          {
            text: 'Features',
            items: [
              { text: 'Real-time Monitoring', link: '/guide/real-time-monitoring' },
              { text: 'Smart Cue System', link: '/guide/smart-cue-system' },
              { text: 'One-click Jump', link: '/guide/one-click-jump' },
              { text: 'Native macOS', link: '/guide/native-macos' },
            ],
          },
          {
            text: 'Reference',
            items: [
              { text: 'FAQ', link: '/reference/faq' },
              { text: 'Troubleshooting', link: '/reference/troubleshooting' },
            ],
          },
        ],
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/getting-started' },
          { text: 'リファレンス', link: '/ja/reference/faq' },
        ],
        sidebar: [
          {
            text: 'はじめに',
            items: [
              { text: 'Orchestraとは', link: '/ja/guide/what-is-orchestra' },
              { text: 'はじめに', link: '/ja/guide/getting-started' },
            ],
          },
          {
            text: '機能',
            items: [
              { text: 'リアルタイム監視', link: '/ja/guide/real-time-monitoring' },
              { text: 'スマートキューシステム', link: '/ja/guide/smart-cue-system' },
              { text: 'ワンクリックジャンプ', link: '/ja/guide/one-click-jump' },
              { text: 'ネイティブmacOS', link: '/ja/guide/native-macos' },
            ],
          },
          {
            text: 'リファレンス',
            items: [
              { text: 'よくある質問', link: '/ja/reference/faq' },
              { text: 'トラブルシューティング', link: '/ja/reference/troubleshooting' },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    logo: '/icon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/user/orchestra-desktop' },
    ],
    footer: {
      message: 'Released under the MIT License.',
    },
  },
})
