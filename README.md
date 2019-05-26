# bgsyncerrr

Background Syncを試してみるアプリです

## 構成
vue-cli + @vue/cli-plugin-pwa

**（注）最新のworkboxを使用するためビルド後にversionを変更しています。**

## 使い方

1. ページを表示します
2. 開発者ツールを開きます
3. オフライン状態にして「POSTを実行する」ボタンを押します
4. リクエスト自体は失敗しますが開発者ツールでIndexedDBにリクエストが保存されていることが確認できます
5. オンライン状態にしてしばらく待つと（通信が安定していれば）syncイベントが起こり、4のリクエストが再度送信されます

## 関連資料

https://www.slideshare.net/hiratatomoko/lets-try-to-use-background-sync
