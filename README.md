# vue-filters
いつかどこかでみたようなフィルター郡

## Installation
node で 追加してください。

### NPM

#### npm
`npm install https://github.com/shimoning/vue-filters`

#### yarn
`yarn add https://github.com/shimoning/vue-filters`

### Load
Vue の設定等をしているファイルなどで以下のように記述すると使えるようになります。

```js
import VueFilters from '@shimoning/vue-filters'
Vue.use(VueFilters)
```

## Usage
### nl2br
文字列に含まれた改行コードを br タグに置換する。
PHP にあるのと大体同じ。
普通にフィルタとして使うとタグがエンコードされてしまうので、 `v-html` などを利用する。


### lowercase
アルファベットを全て小文字にするだけ。
js の `toLowerCase()` を実行するのと同じ。

```js
{{ 'ABC' | lowercase }}  // abc
```


### uppercase
アルファベットを全て大文字にするだけ。
js の `toUpperCase()` を実行するのと同じ。

```js
{{ 'abc' | uppercase }}  // ABC
```


### capitalize
アルファベットの頭文字を大文字にし、それ以外を小文字にするだけ。
文章構造とかを判断しない。
スペースがあっても改行があっても、最初の1文字が大文字になり、他はすべて小文字になる。

```js
{{ 'abc' | capitalize }}  // Abc
{{ 'eFg' | capitalize }}  // Efg
```

-----

### number_format
数字をカンマ区切りにする。
PHP にあるのと大体同じ。
js の `toLocaleString()` を実行するのと同じ。
locale 設定次第では挙動が違うかも。

```js
{{ '12345' | number_format }}  // 12,345
```


### remove_comma
カンマを取り除く。
文字列からも取り除けるが、数字だった場合は Number 型に変換して返す。

```js
{{ '12,345' | remove_comma }}  // 12345
```


### toFixed
小数点の桁数を指定する。
js の `toFixed()` を実行するのと同じ。

```js
{{ '12.345' | toFixed(2) }}  // 12.34
```


### zero_padding
ゼロ埋めする。

```js
{{ '12' | zero_padding(3) }}  // 012
{{ '1234' | zero_padding(3) }}  // 1234
```

-----

### number2clock
数字を時計形式にする。
分でも秒でも `n:nn` 形式にする。
現在は `nn:nn:nn` にはならない。

```js
{{ '123' | number2clock }}  // 2:03
{{ '6503' | number2clock }}  // 108:23
```

#### Options
* padding: boolean (default = false)

通常 `:` より前の数字はゼロ埋めされないが、true を引数に与えると 0 で埋めるようになる。
ただし、2桁以上の場合は何もしない。

```js
{{ '123' | number2clock(true) }}  // 02:03
```


### clock2number
時計形式の文字列を数字にする。
`時:分` もしくは `分:秒` を受け入れる。
現在は `時:分:秒` には対応していない。

```js
{{ '2:03' | clock2number }}  // 123
```


### date2ymd
時間をYMD(年月日)にフォーマットする。

#### Argument
* string
* Date object
* Dayjs object

引数には `文字列` , 標準の `Date オブジェクト` , もしくはライブラリを利用した `dayjs オブジェクト` を引き受ける。
なお、当フィルタの日付フォーマットは、内部で dayjs を利用している。

```js
{{ '2020-01-30' | date2ymd }}  // 2020-1-30
{{ new Date('2020-01-30') | date2ymd }}  // 2020-1-30
{{ dayjs('2020-01-30') | date2ymd }}  // 2020-1-30
```

#### Options
* padding: boolean (default = false)
* separator: string (default = '-')

月/日 については通常0埋めをせず、1桁の場合もそのまま表示する。
また区切り文字はデフォルトでは - (ハイフン) を利用するが、任意のものを利用することが可能。

```js
{{ '2020-01-30' | date2ymd(true) }}  // 2020-01-30
{{ '2020-01-30' | date2ymd(false, '/') }}  // 2020/1/30
```


### date2y
時間をY(年)にフォーマットする。

#### Argument
[date2ymd の Argument](#date2ymd) を参照

```js
{{ '2020-01-30' | date2y }}  // 2020
{{ new Date('2020-01-30') | date2y }}  // 2020
{{ dayjs('2020-01-30') | date2y }}  // 2020
```


### date2m
時間をM(月)にフォーマットする。

#### Argument
[date2ymd の Argument](#date2ymd) を参照

```js
{{ '2020-01-30' | date2m }}  // 1
{{ new Date('2020-01-30') | date2m }}  // 1
{{ dayjs('2020-01-30') | date2m }}  // 1
```

#### Options
* padding: boolean (default = false)

通常0埋めをせず、1桁の場合もそのまま表示する。

```js
{{ '2020-01-30' | date2m(true) }}  // 01
```


### date2d
時間をD(日)にフォーマットする。

#### Argument
[date2ymd の Argument](#date2ymd) を参照

```js
{{ '2020-01-03' | date2d }}  // 3
{{ new Date('2020-01-03') | date2d }}  // 3
{{ dayjs('2020-01-03') | date2d }}  // 3
```

#### Options
* padding: boolean (default = false)

通常0埋めをせず、1桁の場合もそのまま表示する。

```js
{{ '2020-01-03' | date2d(true) }}  // 03
```


### date2w
時間を曜日にフォーマットする。
現状は日本語のみ対応。

#### Argument
[date2ymd の Argument](#date2ymd) を参照

```js
{{ '2020-01-03' | date2w }}  // 金
{{ new Date('2020-01-03') | date2w }}  // 金
{{ dayjs('2020-01-03') | date2w }}  // 金
```


### date2his
時間をHIS(時分秒)にフォーマットする。

#### Argument
[date2ymd の Argument](#date2ymd) を参照

```js
{{ '2020-01-30 06:07:08' | date2his }}  // 6:7:8
{{ new Date('2020-01-30 06:07:08') | date2his }}  // 6:7:8
{{ dayjs('2020-01-30 06:07:08') | date2his }}  // 6:7:8
```

#### Options
* padding: boolean (default = false)

通常0埋めをせず、1桁の場合もそのまま表示する。

```js
{{ '2020-01-30 06:07:08' | date2his(true) }}  // 06:07:08
```


### date2hi
時間をHI(時分)にフォーマットする。

#### Argument
[date2ymd の Argument](#date2ymd) を参照

```js
{{ '2020-01-30 06:07:08' | date2hi }}  // 6:7
{{ new Date('2020-01-30 06:07:08') | date2hi }}  // 6:7
{{ dayjs('2020-01-30 06:07:08') | date2hi }}  // 6:7
```

#### Options
* padding: boolean (default = false)

通常0埋めをせず、1桁の場合もそのまま表示する。

```js
{{ '2020-01-30 06:07:08' | date2hi(true) }}  // 06:07
```


### shortenTime
HIS を HI に変換する。
`:` で文字列を分割して、先頭2つ(時分)を `:` つけて返す。

#### Argument
文字列限定

```js
{{ '06:07:08' | shortenTime }}  // 06:07
```
