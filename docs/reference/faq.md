# FAQ

## Is Orchestra free?

Yes, Orchestra is completely free and open source.

## Does it send my data anywhere?

No. All data stays on your local machine. The hook server runs on `localhost:3008` and only accepts connections from your local Claude Code sessions. No data is sent to any external server.

## Which AI coding agents are supported?

Currently, Orchestra supports **Claude Code** via its Hooks system. Support for additional agents may be added in the future.

## What are the system requirements?

- macOS 11.0+ (Big Sur or later)
- Apple Silicon (M1/M2/M3/M4)
- tmux (for session jumping)
- Claude Code installed

## How do I uninstall Orchestra?

1. Quit Orchestra if it's running
2. Delete `Orchestra.app` from `/Applications`
3. Remove the hook configuration from `~/.claude/settings.json`

## Can I use Orchestra without tmux?

Orchestra will still monitor your sessions without tmux, but the "Jump to session" feature requires tmux to work. Sessions running outside tmux will appear in the dashboard but won't have a Jump button.

## Does Orchestra work with Claude Code teams?

Yes. Orchestra monitors all hook events from any Claude Code session on your machine, including team sessions and subagent activity.
