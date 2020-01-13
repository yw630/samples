# 環境構築

```
yarn init
mkdir public
mkdir sass
```

```package.json
...,
  "scripts": {
    "compile-sass": "node-sass scss/main.scss public/style.css -w"
  },
```

## node のインストール

以下参照
<https://github.com/yw630/samples/tree/master/react>

## node-sass のインストール

ここではグローバルにインストールします。

```bash
yarn global add node-sass
```

## プロジェクトディレクトリの作成

各プロジェクトごとに以下構築しておくと便利。
ワークスペースとして`workspace`ディレクトリを作成します。

```bash
mkdir workspace
cd workspace
yarn init
```

作成された`package.json`に以下を追記します。

```package.json
...
  "scripts": {
    "compile-sass": "node-sass --include-path sass sass/main.scss public/style.css -w"
  },
```

この設定により、以下のコマンドを実行することで`sass/main.scss`の変更をモニタリングして、自動的に`public/style.css`が更新されます。

```bash
yarn compile-sass
```
