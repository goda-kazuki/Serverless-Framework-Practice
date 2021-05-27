# Serverless-Framework-Practice

https://qiita.com/sugo/items/c9de09421fe8d78f5fbd

```
serverlessインストール
npm install serverless

プロジェクト作成(ディレクトリも作成)
npx serverless create --template aws-nodejs --name Serverless-Framework-Practice --path practice-directory

cd practice-directory

全部デプロイ
npx sls deploy -y

個別デプロイ
npx sls deploy function -f hello

AWSで実行
npx sls invoke -f hello -p ./event.json     


ローカルで実行
npx sls invoke local -f hello -p ./event.json     


npm install serverless-appsync-plugin 

```
