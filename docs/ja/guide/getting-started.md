# はじめに

## 必要な環境

- **macOS 11.0+**（Big Sur以降）
- **Apple Silicon**（M1/M2/M3/M4）
- **tmux**（`brew install tmux`でインストール）
- **Claude Code**（インストール済み）

## インストール

### DMGダウンロード

1. [Releasesページ](https://github.com/user/orchestra-desktop/releases)から最新の`.dmg`をダウンロード
2. DMGを開き**Orchestra**を`/Applications`にドラッグ
3. Apple Developer署名がないため、以下のいずれかの方法でアプリを開く:
   - **システム設定**: **システム設定 → プライバシーとセキュリティ** を開き、下にスクロールしてブロックされたアプリの横にある **「このまま開く」** をクリック
   - **ターミナル**: 以下のコマンドを実行:

```bash
xattr -cr /Applications/Orchestra.app
```

4. ApplicationsからOrchestraを起動

### ソースからビルド

```bash
git clone https://github.com/user/orchestra-desktop.git
cd orchestra-desktop
npm --prefix desktop install
cargo tauri build
```

## Claude Code Hooksの設定

OrchestraはClaude Codeの[Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks)を通じてイベントを受信します。`~/.claude/settings.json`に以下を追加してください:

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
既にhooksの設定がある場合は、Orchestraのhooksを既存の設定にマージしてください。
:::

## 初回起動

1. ApplicationsからOrchestraを起動
2. 任意のターミナルでClaude Codeセッションを開始
3. セッションがOrchestraのダッシュボードに自動的に表示されます

セッションが表示されない場合は[トラブルシューティング](/ja/reference/troubleshooting)を確認してください。
