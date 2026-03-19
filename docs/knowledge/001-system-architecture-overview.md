---
id: 1
tags: [architecture, monorepo, turborepo, ddd, hono, react]
title: システム全体のアーキテクチャ概要
created_at: 2026-03-19T00:00:00+09:00
updated_at: 2026-03-19T00:00:00+09:00
related_to: []
---

# システム全体のアーキテクチャ概要

Turborepoによるモノレポ構成。フロントエンド（Vite + React）とバックエンド（Hono + Bun）の2アプリ、サーバーサイドはDDDレイヤー分離のパッケージ群で構成される。

## アプリ構成

- `apps/api` — バックエンドAPI（Hono + Bun）
- `apps/web` — フロントエンド（Vite + React + React Router）

## サーバーサイドパッケージ（DDD）

- `packages/ts-server-domain` — ドメインエンティティ
- `packages/ts-server-application` — ユースケース層
- `packages/ts-server-infrastructure` — リポジトリインターフェース
- `packages/ts-server-prisma-adapter` — Prismaアダプター（インフラ実装）

## 共有パッケージ

- `packages/ui` — 共有UIコンポーネント
- `packages/typescript-config` — 共有TypeScript設定

## 依存関係の方向

```
api → ts-server-application → ts-server-domain
api → ts-server-prisma-adapter → ts-server-infrastructure
```
