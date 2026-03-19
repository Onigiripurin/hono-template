---
name: issue
description: GitHub Issueを作成する。タイトルと本文を自動生成してghコマンドで作成。/issue または「Issueを作って」「Issue作成」などでトリガー。
argument-hint: [<説明>]
allowed-tools: Bash, AskUserQuestion
---

# issue — GitHub Issue作成

ユーザーの意図からIssueのタイトルと本文を生成し、`gh issue create` で作成する。

## 引数の解析

`$ARGUMENTS` を以下のルールで解析する:

1. **空の場合**: `AskUserQuestion` で何のIssueを作るか確認する
2. **テキストがある場合**: そのテキストをIssueの説明として使う

## 手順

1. Issueの内容（何をするか・なぜするか）を把握する。不明な場合は `AskUserQuestion` で確認
2. タイトルと本文を生成する
3. `AskUserQuestion` でユーザーに確認を取る（タイトルと本文を見せて「この内容で作成しますか？」）
4. 承認されたら `gh issue create` で作成する
5. 作成されたIssueのURLをユーザーに伝える

## Issue本文の形式

```markdown
## 概要

<何をするか・なぜするか（1〜3文）>

## 詳細

<必要に応じて詳細を記述。不要なら省略>

## 受け入れ条件

- [ ] <条件1>
- [ ] <条件2>
```

## 実行コマンド

```bash
gh issue create --title "タイトル" --body "$(cat <<'EOF'
本文
EOF
)"
```

## 注意事項

- タイトルは簡潔に（50文字以内を目安）
- 受け入れ条件は具体的・検証可能にする
- ラベルやアサインは指定がなければ省略する
