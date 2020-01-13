# Django 環境の構築

環境管理として pipenv を利用した Django 環境を構築します。

## pipenv のインストール(Mac)

参照元：<https://github.com/pypa/pipenv#installation>

```bash
brew install pipenv
```

## pipenv で仮想 Python 環境の構築

### 適当な作業ディレクトリを作成・移動

```bash
mkdir workspace
cd workspace
```

### Django のインストール

pipenv でインストールすることで仮想 Python 環境を作成した上で、その環境にパッケージ（この場合 Django）がインストールされます。
また、特に Python バージョンを指定していないため、３系の環境が作成されます。

```bash
pipenv install django
```

上記を実行すると`Pipfile`と`Pipfile.lock`が作成されます。

### 環境変数の読み込み

環境変数を読み込むことでこの仮想 Python 環境における Python や今回インストールした Django のツールへのパスが通ります。
プロンプトにも環境名が付与されます。

```bash
pipenv shell
```

## Django プロジェクトの作成

プロジェクト（ここでは`mysite`）を作成。
参照元：<https://docs.djangoproject.com/ja/3.0/intro/tutorial01/>

```bash
django-admin startprojet mysite
```

プロジェクト名`mysite`のディレクトリが作成され、配下に開発に必要なファイル群が生成されます。

## Django 開発用サーバーの起動

Django に組み込まれている開発用サーバーを起動して動作確認をします。

```bash
cd mysite
python manage.py runserver
```

開発用サーバ（デフォルトで`http://127.0.0.1:8000`にブラウザでアクセスして、Django のページ（ロケットのようなもの）が表示されれば問題ないです。
この際、migration が適応されていない旨のメッセージがでますが環境構築確認においては問題ないです。
