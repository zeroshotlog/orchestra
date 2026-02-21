# Troubleshooting

## Gatekeeper blocks the app

Since Orchestra is not signed with an Apple Developer certificate, macOS Gatekeeper may block it.

**Solution:** Use either method:

1. **System Settings**: Open **System Settings → Privacy & Security**, scroll down and click **"Open Anyway"** next to the blocked app message.
2. **Terminal**: Run the following command:

```bash
xattr -cr /Applications/Orchestra.app
```

## Hook events not appearing

Sessions don't show up in the Orchestra dashboard.

**Check your hook configuration:**

1. Open `~/.claude/settings.json`
2. Verify the `hooks` section contains all required events (PreToolUse, PostToolUse, Stop, Notification, SubagentStop, SessionEnd)
3. Ensure the curl command points to `http://localhost:3008/api/ingest/hook`

**Verify Orchestra is running:**

```bash
# Check if port 3008 is listening
lsof -i :3008
```

If nothing is listening, make sure Orchestra is launched and running.

## Port 3008 already in use

Another application is using port 3008, preventing Orchestra from starting.

**Solution:**

```bash
# Find what's using port 3008
lsof -i :3008

# Kill the process if needed
kill -9 <PID>
```

Then restart Orchestra.

## Sessions not updating

Sessions appear but don't update in real-time.

**Possible causes:**

1. **Claude Code restarted** — Restart Orchestra to refresh the connection
2. **Hook configuration changed** — Verify hooks are still in `~/.claude/settings.json`
3. **Network issue** — Ensure `localhost:3008` is accessible

## App crashes on startup

**Check logs:**

1. Open `Console.app`
2. Filter for "Orchestra"
3. Look for crash reports or error messages

**Common fixes:**

- Delete the app and re-install from a fresh DMG
- Ensure macOS is updated to 11.0+
- Check for conflicting applications on port 3008

## Jump button doesn't work

The Jump button appears but clicking it doesn't switch to the session.

**Possible causes:**

1. **tmux not installed** — Install with `brew install tmux`
2. **Session not in tmux** — The Claude Code session must be running inside a tmux session
3. **iTerm2 not running** — For full focus support, use iTerm2 as your terminal
