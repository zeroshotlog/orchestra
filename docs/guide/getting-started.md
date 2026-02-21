# Getting Started

## Requirements

- **macOS 11.0+** (Big Sur or later)
- **Apple Silicon** (M1/M2/M3/M4)
- **tmux** installed (`brew install tmux`)
- **Claude Code** installed and configured

## Installation

### Download DMG

1. Download the latest `.dmg` from the [Releases page](https://github.com/user/orchestra-desktop/releases)
2. Open the DMG and drag **Orchestra** to `/Applications`
3. Since the app is not signed with an Apple Developer certificate, remove the quarantine flag:

```bash
xattr -cr /Applications/Orchestra.app
```

4. Launch Orchestra from Applications

### Build from Source

```bash
git clone https://github.com/user/orchestra-desktop.git
cd orchestra-desktop
npm --prefix desktop install
cargo tauri build
```

## Configure Claude Code Hooks

Orchestra receives events from Claude Code via [Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks). Add the following to your `~/.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST http://localhost:3008/api/ingest/hook -H 'Content-Type: application/json' -d \"$(cat)\""
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST http://localhost:3008/api/ingest/hook -H 'Content-Type: application/json' -d \"$(cat)\""
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST http://localhost:3008/api/ingest/hook -H 'Content-Type: application/json' -d \"$(cat)\""
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST http://localhost:3008/api/ingest/hook -H 'Content-Type: application/json' -d \"$(cat)\""
          }
        ]
      }
    ],
    "SubagentStop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST http://localhost:3008/api/ingest/hook -H 'Content-Type: application/json' -d \"$(cat)\""
          }
        ]
      }
    ],
    "SessionEnd": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST http://localhost:3008/api/ingest/hook -H 'Content-Type: application/json' -d \"$(cat)\""
          }
        ]
      }
    ]
  }
}
```

::: tip
If you already have other hooks configured, merge the Orchestra hooks into your existing configuration.
:::

## First Launch

1. Launch Orchestra from Applications
2. Start a Claude Code session in any terminal
3. The session should appear in Orchestra's dashboard automatically

If sessions don't appear, check the [Troubleshooting](/reference/troubleshooting) guide.
