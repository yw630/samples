# React 環境の構築

node のバージョン管理として nvm を導入した上で node を導入、react 開発環境を構築します。

## nvm のインストール

様々なインストール方法がありますが、ここでは git でインストールします。
参照元：<https://github.com/nvm-sh/nvm>

```bash
cd ~/
git clone https://github.com/nvm-sh/nvm.git .nvm
```

Mac では zsh が使われているようなので、以下の環境変数の設定は`.zshrc`に記述します。
すでにファイルが有る場合は最下部に追記すれば問題ないです。

```.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

設定したら読み込んでおきます（もしくはターミナルを再起動します）。

```bash
source .zshrc
```

## node のインストール

nvm で最新版の node をインストールします。

```bash
nvm install node
```

## create-react-app で react プロジェクトの作成

react プロジェクトを構築でよく使われる create-react-app でプロジェクトを作成します。プロジェクト名は何でも構いませんが、ここでは`my-app`とします。
参照元： <https://ja.reactjs.org/docs/create-a-new-react-app.html>

```bash
npx create-react-app my-app
```

## react の開発用のビルドで起動

デフォルトで作られるコードをそのまま開発用ビルドで起動します。

```bash
cd my-app
yarn start
```

`http://locaolhost:3000/`（アドレスはターミナルに表示されます）にアクセスし、react のアイコンが回転しているページが見えれば問題ないです。
