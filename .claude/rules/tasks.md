## タスク実行

プロジェクトのコマンド実行にはルートの `bun run` を使うこと。Turborepo 経由のタスクはパッケージを絞って実行したい場合 `--filter` を使うこと。

### ルートスクリプト

- `bun run dev` — 開発サーバーを起動（turbo 経由で api / web を並列起動）
- `bun run build` — 全パッケージをビルド
- `bun run lint` — Biome による lint・format（自動修正付き）+ 全パッケージの型チェック
- `bun run lint:ci` — CI 用の lint + 型チェック（修正なし、チェックのみ）
- `bun run prisma:migrate` — Prisma マイグレーションを実行
- `bun run prisma:migrate:reset` — Prisma マイグレーションをリセット
- `bun install` — 依存関係をインストール

