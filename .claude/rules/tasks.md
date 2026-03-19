## タスク実行

プロジェクトのコマンド実行にはルートの `bun run` を使うこと。

### ルートスクリプト

- `bun run dev` — 開発サーバーを起動（turbo 経由で api / web を並列起動）
- `bun run build` — 全パッケージをビルド
- `bun run lint` — Biome による format・lint（自動修正付き）
- `bun run prisma:migrate` — Prisma マイグレーションを実行
- `bun run prisma:migrate:reset` — Prisma マイグレーションをリセット
- `bun install` — 依存関係をインストール

