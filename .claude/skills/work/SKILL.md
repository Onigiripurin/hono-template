---
name: work
description: GitHub Issueを取得して実装する。Issue番号を受け取り、実装方針を作成してworktreeで実装・lintまで行う。/work <番号> または「#12を実装して」「Issue 12に取り掛かる」などでトリガー。
argument-hint: <Issue番号>
allowed-tools: Bash, Read, Edit, Write, Glob, Grep, AskUserQuestion
---

# work — Issue実装

指定されたIssueを取得し、実装方針を立て、worktreeで実装してlintを実行する。

## 引数の解析

`$ARGUMENTS` からIssue番号を取得する。

- 数字のみ: そのまま使用（例: `12`）
- `#数字`: `#` を除いて使用（例: `#12` → `12`）
- 空の場合: `AskUserQuestion` でIssue番号を確認する

## 手順

### 1. Issue内容の取得

```bash
gh issue view <番号>
```

取得した内容（タイトル・本文・ラベル）を確認する。

### 2. 実装方針の作成

Issue内容をもとに実装方針を以下の形式でユーザーに提示し、承認を得る:

```
## 実装方針 (Issue #<番号>: <タイトル>)

### 変更内容
- <変更点1>
- <変更点2>

### 影響範囲
- <影響するファイル・モジュール>
```

`AskUserQuestion` で「この方針で進めますか？」と確認する。

### 3. worktreeの作成

ブランチ名はIssue番号とタイトルから生成する:
- 形式: `<番号>-<short-description>`
- 例: Issue #12「ユーザー認証を追加する」→ `12-add-user-auth`
- short-descriptionは英語のkebab-caseで5単語以内

```bash
scripts/bin/wth add <branch-name>
```

成功したらworktreeのパスを確認する。

### 4. 実装

作成されたworktree内で実装を行う。worktreeのパスは `wth add` の出力から取得する。

- ファイルの読み書きはworktreeパス配下で行う
- mainブランチには直接変更を加えない

### 5. lintの実行

```bash
cd <worktree-path> && bun run lint
```

lintエラーがある場合は修正してから次のステップへ進む。

### 6. コミット

変更をコミットする:

```bash
cd <worktree-path> && git add -p && git commit -m "feat: <内容> (#<Issue番号>)"
```

コミットメッセージの形式:
- `feat:` — 新機能
- `fix:` — バグ修正
- `refactor:` — リファクタリング
- `chore:` — その他の変更

末尾に `(#<Issue番号>)` を付ける。

## 注意事項

- **実装前に必ずユーザーの承認を得る**（方針確認のステップを省略しない）
- lintが通らない状態でコミットしない
- worktree作成は `scripts/bin/wth` を使い、`git worktree` を直接実行しない
