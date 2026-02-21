# Smart Cue System

The Cue System is Orchestra's notification mechanism. When a session needs your attention, a cue appears at the top of the dashboard.

## What Triggers a Cue?

| Trigger | Cue Type | Description |
|---------|----------|-------------|
| Claude stops responding | WAITING_INPUT | Session needs your input to continue |
| Permission requested | WAITING_PERMISSION | Claude needs approval for a tool use |
| Session error | ERROR | Something went wrong |
| Stale session | WAITING_INPUT | No activity for the configured timeout period |

## Cue Lane

Cues appear in a dedicated lane at the top of the dashboard. Each cue shows:

- **Session name** — Which session needs attention
- **Reason** — Why the cue was created
- **Description** — Last log message for context
- **Jump button** — Navigate directly to the session
- **Dismiss button** — Remove the cue without jumping

## Auto-Resolution

Cues are automatically resolved when:

- The session starts running again (new tool use detected)
- The session ends
- You manually dismiss the cue

## Sound Notifications

When a new cue appears, Orchestra plays a system sound (Glass) to alert you. This works even when the app is in the background.

## Stale Session Detection

If a running session hasn't received any hook events for a configurable timeout period, Orchestra automatically creates a WAITING_INPUT cue. This catches cases where Claude Code has stopped but the Stop hook didn't fire.
