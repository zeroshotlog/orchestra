# ワンクリックジャンプ

Orchestraはtmuxとi Term2と連携して、ワンクリックで任意のセッションにジャンプできます。

## 仕組み

1. Orchestraが各Claude Codeセッションが実行されているtmuxセッション/ウィンドウ/ペインを検出
2. 「Jump」をクリックすると、Orchestraが以下のコマンドを送信:
   - 正しいtmuxウィンドウを選択
   - AppleScriptでiTerm2ウィンドウをフォーカス

## tmux検出

Orchestraは2つの方法でtmuxターゲットを検出します:

1. **直接tmuxセッション** — hookペイロードに`tmux_session`フィールドが含まれている場合
2. **作業ディレクトリマッチ** — 全てのtmuxペインをスキャンし、hookペイロードの作業ディレクトリ(`cwd`)とマッチ

## 対応ターミナル

| ターミナル | サポート |
|-----------|---------|
| iTerm2 | フルサポート（tmux + AppleScriptフォーカス） |
| Terminal.app | tmux select-windowのみ |
| Warp | tmux select-windowのみ |
| VS Code Terminal | tmux select-windowのみ |

## セットアップ

tmuxがインストールされていれば追加の設定は不要です。Orchestraが自動的にtmuxセッションを検出します。

```bash
# tmuxがまだインストールされていない場合
brew install tmux
```

::: tip
最良の体験のために、Claude Codeセッションをtmux内で実行してください。これによりウィンドウフォーカスを含むフルJump機能が有効になります。
:::
