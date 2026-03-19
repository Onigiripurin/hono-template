# hono-template
個人用のVite+HonoテンプレートRepo

## システム構成

Turborepoによるモノレポ構成。フロントエンド（Vite + React）とバックエンド（Hono + Bun）の2アプリ、およびDDDレイヤー分離のサーバーサイドパッケージ群で構成。


## ディレクトリ構成

```
workspace/
├── apps/
│   ├── api/          # API
│   └── web/          # Webアプリ
├── packages/
│   ├── ts-server-domain/         # ドメインエンティティ
│   ├── ts-server-application/    # ユースケース
│   ├── ts-server-infrastructure/ # リポジトリのインターフェース
│   ├── ts-server-prisma-adapter/ # Prismaアダプター
│   ├── ui/                       # 共有UIコンポーネント
│   └── typescript-config/        # 共有TS設定
├── package.json
├── .gitignore
├── turbo.json
├── .env.example
└── README 
```

### パッケージの命名ルール



TBD

## 開発

### ブランチ規則
- `feature/#<issueNo>-<description>`
- `fix/#<issueNo>-<description>`
- `refactor/#<issueNo>-<description>`
- `docs/#<issueNo>-<description>`
- `chore/#<issueNo>-<description>`

### コメントprefix

- `feat` - 機能追加
- `fix` - バグ修正
- `docs` - ドキュメント
- `style` - linter, formatterによる変更
- `refactor` - リファクタリング
- `perf` - パフォーマンス改善
- `test` - テストのみ変更
- `build` - ビルド・CIの変更
- `ci` - CI設定の変更
- `chore` - その他
