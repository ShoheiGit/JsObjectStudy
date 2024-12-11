# JS講習会: 配列・オブジェクトをマスターしよう！


## 概要

お客様管理アプリを作り、配列とオブジェクトについて実践形式で身に着けよう！

## デモ

!['完成画面'](img/image.png)


## 主な機能

- 一覧表示
- 詳細表示
- 検索

## 必要知識
### オブジェクト
オブジェクトは、JavaScriptで最も基本的かつ重要なデータ型の一つです。キー（プロパティ名）と値のペアを格納するデータ構造で、複雑なデータを管理するのに役立ちます。
```
const person = {
    name: "John",
    age: 30,
    isStudent: false
};

person.name      = "John";
person.age       = 30;
person.isStudent = false;

```

補足の知識について以下に記述します。

### テンプレートリテラル
JavaScriptの文字列を扱うための新しい表記方法です。
バッククォート（ ` ）を使い、変数と文字を同時に扱います。
```
const name = "太郎";
const age = 25;
const message = `私の名前は ${name} で、年齢は ${age} 歳です。`;
console.log(message);

// 私の名前は 太郎 で、年齢は 25 歳です。
```

### forEach
forEach は、配列や配列に似たオブジェクトの要素を繰り返し処理するためのメソッドです。各要素に対して指定された関数を順番に実行します。
```
「構文」
array.forEach(function(element) {
    // 繰り返し処理の内容
});
```
```
「例」
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});
// 出力: 1, 2, 3, 4, 5
```
- element（必須）:
配列の現在処理中の要素。

## 補足知識
### innerHTML
innerHTML は、HTML要素の中身のHTMLコンテンツを取得したり、設定するためのプロパティです。
innerHTML後の文字列がHTMLとして指定した箇所に記述されます。

### find
find は、JavaScriptの配列メソッドの1つで、指定した条件に一致する要素を見つけて返すために使用されます。条件に一致する最初の要素だけを返し、見つからなければ undefined を返します。
```
const users = [
    { id: 1, name: "太郎" },
    { id: 2, name: "花子" },
    { id: 3, name: "次郎" }
];

// 名前が "花子" のユーザーを探す
const user = users.find(user => user.name === "花子");
console.log(user); // { id: 2, name: "花子" }
```
### textContent
要素内のテキストコンテンツを取得または設定するために使用されます。
```
// テキストの取得
element.textContent;

// テキストの設定
element.textContent = "新しいテキスト";
```

### filter
条件に一致する要素を新しい配列として返すために使用されます。元の配列は変更されません。
```
array.filter(function (element) {
    条件式
});
```
- element（必須）:
配列の現在処理中の要素。