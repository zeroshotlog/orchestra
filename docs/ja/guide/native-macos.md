# ネイティブmacOS

Orchestraは[Tauri](https://v2.tauri.app/)で構築されており、最小限のリソース使用量でネイティブなmacOS体験を提供します。

## アーキテクチャ

```
Hook (curl) → Rust (axum, port 3008) → Store → Tauri Event → React UI
                                              → tmux (Command)
                                              → Notification
                                              → Sound
```

- **バックエンド**: Rust + axum HTTPサーバー（hook取り込み用）
- **フロントエンド**: React + Tailwind CSS
- **通信**: Tauriイベント（WebSocket不要）

## リソース使用量

Electronベースの代替手段と異なり、TauriアプリはシステムWebViewを使用するため:

- **小さなバイナリサイズ** — 約10MB DMG
- **低メモリ使用量** — 通常50MB RAM未満
- **高速起動** — ネイティブRustバックエンドが即座に起動

## システム統合

- **通知** — `tauri-plugin-notification`でネイティブmacOS通知
- **サウンド** — `afplay`でシステムサウンド（`Glass.aiff`）を再生
- **メニューバー** — 標準macOSメニューバー統合
- **オーバーレイタイトルバー** — クリーンでネイティブなタイトルバーデザイン

## 技術スタック

| コンポーネント | 技術 |
|-------------|------|
| バックエンド | Rust + axum |
| フロントエンド | React + Tailwind CSS 4 |
| デスクトップ | Tauri v2 |
| 状態管理 | `Arc<RwLock<Store>>` |
| 通知 | tauri-plugin-notification |
