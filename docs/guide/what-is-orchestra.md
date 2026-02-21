# What is Orchestra?

Orchestra is a macOS desktop application that monitors AI coding agent sessions in real-time. It integrates with [Claude Code](https://claude.ai/code) via Hooks to provide a unified dashboard for all your active coding sessions.

## The Problem

When running multiple Claude Code sessions across different projects, it's hard to know:

- Which sessions are waiting for your input
- Which sessions need permission approval
- Which sessions have completed their tasks

You end up constantly switching between terminal windows to check status.

## The Solution

Orchestra sits in the background and watches all your Claude Code sessions through a single dashboard. When a session needs your attention, you get a notification with a one-click jump to that session.

## Key Features

- **Real-time Monitoring** — See all sessions at a glance with live status updates
- **Smart Cue System** — Automatic alerts when sessions need input, permission, or have errors
- **One-click Jump** — Switch to any session via tmux + iTerm2 integration
- **Native macOS** — Lightweight Tauri app with system notifications and sounds

## How It Works

```
Claude Code Hook → HTTP POST → Orchestra (port 3008) → Desktop UI
                                                      → System Notification
                                                      → Sound Alert
```

1. Claude Code fires hook events (PreToolUse, PostToolUse, Stop, etc.)
2. Each event is sent via `curl` to Orchestra's local HTTP server on port 3008
3. Orchestra updates the session state and displays it in the desktop UI
4. When a session needs attention, a cue notification appears with a Jump button
