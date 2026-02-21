# トラブルシューティング

## Gatekeeperがアプリをブロックする

OrchestraはApple Developer証明書で署名されていないため、macOS Gatekeeperがブロックする場合があります。

**解決策:** インストール後に以下のコマンドを実行してください:

```bash
xattr -cr /Applications/Orchestra.app
```

## Hookイベントが表示されない

セッションがOrchestraのダッシュボードに表示されない場合。

**Hook設定を確認:**

1. `~/.claude/settings.json`を開く
2. `hooks`セクションに必要な全イベント（PreToolUse, PostToolUse, Stop, Notification, SubagentStop, SessionEnd）が含まれているか確認
3. curlコマンドが`http://localhost:3008/api/ingest/hook`を指していることを確認

**Orchestraが実行中か確認:**

```bash
# ポート3008がリッスンしているか確認
lsof -i :3008
```

何もリッスンしていない場合、Orchestraが起動されていることを確認してください。

## ポート3008が使用中

別のアプリケーションがポート3008を使用しており、Orchestraが起動できない場合。

**解決策:**

```bash
# ポート3008を使用しているプロセスを確認
lsof -i :3008

# 必要に応じてプロセスをkill
kill -9 <PID>
```

その後、Orchestraを再起動してください。

## セッションが更新されない

セッションは表示されるがリアルタイムで更新されない場合。

**考えられる原因:**

1. **Claude Codeが再起動された** — Orchestraを再起動して接続をリフレッシュ
2. **Hook設定が変更された** — `~/.claude/settings.json`のhooksを確認
3. **ネットワークの問題** — `localhost:3008`にアクセス可能か確認

## アプリが起動時にクラッシュする

**ログを確認:**

1. `Console.app`を開く
2. "Orchestra"でフィルタ
3. クラッシュレポートやエラーメッセージを確認

**一般的な解決策:**

- アプリを削除し、新しいDMGから再インストール
- macOSが11.0以上に更新されていることを確認
- ポート3008で競合するアプリケーションがないか確認

## Jumpボタンが動作しない

Jumpボタンは表示されるがクリックしてもセッションに切り替わらない場合。

**考えられる原因:**

1. **tmuxがインストールされていない** — `brew install tmux`でインストール
2. **セッションがtmux内にない** — Claude Codeセッションはtmuxセッション内で実行する必要があります
3. **iTerm2が実行されていない** — フルフォーカスサポートにはiTerm2を使用してください
