# Real-time Monitoring

Orchestra monitors all your Claude Code sessions through a single dashboard with live status updates.

## How It Works

When Claude Code runs, it fires hook events at key moments (tool use, completion, errors). Orchestra receives these events via HTTP and updates the dashboard in real-time.

## Session States

Each session card shows the current state:

| Status | Meaning |
|--------|---------|
| **Running** | Claude is actively working (reading, writing, executing) |
| **Thinking** | Claude is processing between tool calls |
| **Waiting Input** | Claude has stopped and is waiting for your input |
| **Waiting Permission** | Claude needs permission to proceed |
| **Done** | Session has ended |

## Activity Types

The dashboard also shows what Claude is currently doing:

- **Reading** — Reading files (Read, Glob, Grep tools)
- **Writing** — Editing or creating files (Edit, Write tools)
- **Running** — Executing commands (Bash tool)
- **Coding** — Using other development tools
- **Idle** — No active tool use

## Session Cards

Each session card displays:

- **Title** — Derived from the working directory name
- **Status badge** — Current session state with color coding
- **Last activity** — Most recent tool or command output
- **Jump button** — One-click navigation to the terminal session
