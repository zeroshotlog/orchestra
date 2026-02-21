# One-click Jump

Orchestra integrates with tmux and iTerm2 to let you jump to any session with a single click.

## How It Works

1. Orchestra detects which tmux session/window/pane each Claude Code session is running in
2. When you click "Jump", Orchestra sends commands to:
   - Select the correct tmux window
   - Focus the iTerm2 window via AppleScript

## tmux Detection

Orchestra detects tmux targets in two ways:

1. **Direct tmux session** — If the hook payload includes a `tmux_session` field
2. **Working directory match** — Orchestra scans all tmux panes and matches the working directory (`cwd`) from the hook payload

## Supported Terminals

| Terminal | Support |
|----------|---------|
| iTerm2 | Full support (tmux + AppleScript focus) |
| Terminal.app | tmux select-window only |
| Warp | tmux select-window only |
| VS Code Terminal | tmux select-window only |

## Setup

No additional setup is required beyond having tmux installed. Orchestra automatically detects your tmux sessions.

```bash
# Install tmux if you haven't already
brew install tmux
```

::: tip
For the best experience, run your Claude Code sessions inside tmux. This enables the full Jump functionality including window focus.
:::
