## データの保存の仕方

### データ保存の歴史
システムの歴史は、分散と統合の繰り返し。

サーバーサイド
- 昔は各アプリケーションごとにファイルを作成していた。
- ある時、データを一箇所に集めて、利便性を高めるため、データベース(データの基地)が作られた。データベースの歴史的には20世紀後半。以外と若い。
- 初期のデータベースはデータベースサーバーの前に座ってモニタで直接データのやり取りをしていた。
- 次第に、リモートから複数のユーザーで使いたくなった。ネットワークを通してアクセスできるように進化した。
- そこに、データの加工と表示が専用のニーズがアプリケーションとして独立して、インターネットを通して、一般ユーザーにデータを提供できるように進化した。
以上でサーバーサイドのデータ保存が現在の形になった。

クライアントサイド
- 端末のスペックが貧弱だった時は、サーバーにデータを保存することが当たり前だった。
- 端末のスペックが上がり、端末にデータを保存することが増えた。
- クラウド型のサービスが流行し、またサーバーにデータを同期することが流行り出している。

### フロント独立型のデータの保存の仕方

- 変数に保持。メモリ。よりデータベースっぽく使うには変数をオブジェクトとしてルート部分に保持し、グローバルに各関数内からアクセスして利用。クロージャーと呼ばれる。
- ローカルストレージというWebブラウザのDB機能を利用する
- URLにクエリとして保持

### フロントとサーバー型のデータの保存の仕方

- テキストデータはデータベースサーバーに保存
- 画像データはストレージサーバーに保存
- ファイルとしてサーバー上に保持
- ログデータとしてサーバー常にテキストファイルで保持

