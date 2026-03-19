---
name: pr
description: Pull Requestを作成してGitHub Issueに紐付ける。現在のブランチの変更を要約してghコマンドでPRを作成。/pr または「PRを作って」「プルリクを出す」などでトリガー。
argument-hint: [<Issue番号>]
allowed-tools: Bash, AskUserQuestion
---

# pr — Pull Request作成

現在のブランチの変更を要約し、対応するIssueに紐付けたPRを作成する。

## 引数の解析

`$ARGUMENTS` を以下のルールで解析する:

1. **数字がある場合**: そのIssue番号を使用（例: `12` または `#12`）
2. **空の場合**: ブランチ名からIssue番号を推定する（例: `12-add-user-auth` → `#12`）

## 手順

### 1. 現在のブランチと変更内容の確認

```bash
git branch --show-current
git log main..HEAD --oneline
git diff main..HEAD --stat
```

### 2. Issue番号の特定

- 引数で指定された場合: そのまま使用
- ブランチ名が `<数字>-*` の形式: 先頭の数字をIssue番号とする
- それ以外: `AskUserQuestion` で確認する

Issue番号が特定できたら `gh issue view <番号>` でIssue内容を確認する。

### 3. PRタイトルと本文の生成

コミット内容とIssue内容をもとに生成する。

**PR本文の形式:**

```markdown
## 変更内容

<変更の要約（1〜3文）>

## 変更の詳細

- <詳細1>
- <詳細2>

Closes #<Issue番号>
```

### 4. ユーザーへの確認

`AskUserQuestion` でPRのタイトルと本文を見せて確認を取る。

### 5. PRの作成

```bash
gh pr create --title "タイトル" --body "$(cat <<'EOF'
本文（Closes #<番号> を含む）
EOF
)"
```

作成後、PRのURLをユーザーに伝える。

## 注意事項

- **自動マージは行わない**（PRを作成するだけ）
- **必ず `Closes #<番号>` をPR本文に含める**（IssueとPRの紐付けは必須）
- ドラフトPRにはしない（レビュー可能な状態で作成）
- コミットが1件もない場合はPRを作成せず、ユーザーに伝える
