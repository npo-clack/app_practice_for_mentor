# htmlのフォームのパターンを理解する。

## フォームタグ
```html
<form></form>
```

インプット要素を入れる
```html
<form>
    <input>
</form>
```

## ラベリング
```html
<form>
    <label>
        これはラベルだよ。クリックするとインプットタグがフォーカスされるよ。
        <input>
    </label>
</form>
```

```html
<form>
    <label for="inputタグのid">これはラベルだよ。クリックするとインプットタグがフォーカスされるよ。</label>
    <input id="inputタグのid">
</form>
```

## 送信 submit
デフォルトの挙動。基本的にはjsなしで動く。
```html
    <form action="https://example.com" method="POST">
        <label for="inputタグのid">これはラベルだよ。クリックするとインプットタグがフォーカスされるよ。</label>
        <input id="inputタグのid" name="inputの名前">
    
        <button type="submit">送信</button> 
    </form>
```

jsで値を取得したい。試み1。失敗する。
```html
    <form onsubmit="submit">
        <label for="inputタグのid">これはラベルだよ。クリックするとインプットタグがフォーカスされるよ。</label>
        <input id="inputタグのid" name="inputの名前">
    
        <button type="submit">送信</button> 
    </form>
    <script>
        function submit (event) {
        console.log(event)
        // イベントを停止する
        // うまく動かない><
        event.preventDefault();
  
        // なんかの処理
        console.log('form submitted ✅');

        return false;
        }
    </script>
```

jsで値を取得したい。試み2。失敗する。
```html
    <form id="formのid">
        <label for="inputタグのid">これはラベルだよ。クリックするとインプットタグがフォーカスされるよ。</label>
        <input id="inputタグのid" name="inputの名前">
    
        <button type="submit">送信</button> 
    </form>
    <script>
        const form = document.getElementById("formのid");

        form.addEventListener('submit', event => {
            // イベントを停止する
            event.preventDefault();
        
            // なんかの処理
            console.log('form submitted ✅');
            
            console.log(event.target[0].value);
            console.log(event.target.elements["inputの名前"].value);
            console.log(event.target["inputの名前"].value);
 
        });
    </script>
```