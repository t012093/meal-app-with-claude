# Webブラウザでのプレビュー起動方法

このプロジェクトをWebブラウザでプレビューするには、以下のコマンドを実行してください。

```bash
npm run preview
```

このコマンドを実行すると、開発サーバーが起動し、Webブラウザでアプリケーションをプレビューできます。通常、`http://localhost:9876` でアクセス可能です。

## Android 開発を行う場合

Android プラットフォームでの開発を行う場合は、以下の手順に従って Android SDK の設定を行ってください。

1. **`ANDROID_HOME` 環境変数の設定:**
   - Android SDK のインストールディレクトリを指す `ANDROID_HOME` 環境変数を設定する必要があります。
   - `.bash_profile` や `.bashrc` などの設定ファイルに以下を追記し、`<Android SDK のインストールパス>` を実際のパスに置き換えてください。
     ```bash
     export ANDROID_HOME=<Android SDK のインストールパス>
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```
   - 設定後、設定ファイルを再読み込みするか、ターミナルを再起動してください。

2. **Android SDK および Build-tools のインストール:**
   - Android SDK および必要な Build-tools を Android Studio の SDK Manager を使用してインストールしてください。
   - 特に、エラーメッセージに表示されている必要な Android SDK Platform と Build-tools のバージョンがインストールされていることを確認してください。

3. **`sdkmanager` コマンドの利用:**
   - コマンドラインから SDK コンポーネントを管理するために、`sdkmanager` コマンドを利用できます。
   - 例：必要な Build-tools をインストールするには、以下のコマンドを実行します。
     ```bash
     sdkmanager "build-tools;バージョン"
     ```
     `<バージョン>` は、インストールしたい Build-tools のバージョンに置き換えてください。

設定後、再度 `npm run dev` または `ns run android` を実行して、Android アプリケーションのビルドと実行を試してください。
