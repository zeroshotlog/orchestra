# Native macOS

Orchestra is built with [Tauri](https://v2.tauri.app/), providing a native macOS experience with minimal resource usage.

## Architecture

```
Hook (curl) → Rust (axum, port 3008) → Store → Tauri Event → React UI
                                              → tmux (Command)
                                              → Notification
                                              → Sound
```

- **Backend**: Rust with axum HTTP server for hook ingestion
- **Frontend**: React with Tailwind CSS
- **Communication**: Tauri events (no WebSocket needed)

## Resource Usage

Unlike Electron-based alternatives, Tauri apps use the system WebView, resulting in:

- **Small binary size** — ~10MB DMG
- **Low memory usage** — Typically under 50MB RAM
- **Fast startup** — Native Rust backend starts instantly

## System Integration

- **Notifications** — Uses `tauri-plugin-notification` for native macOS notifications
- **Sounds** — Plays system sounds (`Glass.aiff`) via `afplay` for audio alerts
- **Menu bar** — Standard macOS menu bar integration
- **Overlay title bar** — Clean, native-looking title bar design

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Backend | Rust + axum |
| Frontend | React + Tailwind CSS 4 |
| Desktop | Tauri v2 |
| State | `Arc<RwLock<Store>>` |
| Notifications | tauri-plugin-notification |
