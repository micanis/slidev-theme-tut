---
theme: ./
layout: cover
---

::title::
slidev-theme-tut サンプル

::date::
<SlideDate date="20260607" format="ja" />

::default::
X9999999 Sample Name

---
layout: toc
---

::title::
目次

---
layout: section
---

# 基本レイアウト

---
layout: default
---

::title::
default : 本文のみ

::default::
このレイアウトは、タイトル領域と本文領域で構成されます。
本文領域には通常の Markdown をそのまま配置できます。

- 箇条書き
- **強調**
- `inline code`
- 表や画像などの Slidev 標準要素

---
layout: default
---

::title::
default : 本文 + まとめ

::default::
`::conc::` スロットを追加すると、本文の下にまとめ欄が表示されます。
本文領域は残りの高さに収まるように配置されます。

| 項目 | 内容 |
| --- | --- |
| title | スライド上部のタイトル |
| default | メイン本文 |
| conc | 下部のまとめ |

::conc::
まとめ欄は結論や次のアクションを短く示す場所です。

---
layout: two-cols
---

::title::
two-cols : 左右 2 分割

::left::
**left スロット**

- 比較対象 A
- 前提条件
- メリット
- 注意点

::right::
**right スロット**

- 比較対象 B
- 実装案
- デメリット
- 判断材料

::conc::
左右比較の結論は `conc` にまとめると読みやすくなります。

---
layout: three-cols
---

::title::
three-cols : 3 分割

::left::
**left**

- 課題
- 背景
- 現状

::center::
**center**

- 方針
- 手順
- 判断基準

::right::
**right**

- 結果
- 効果
- 次の課題

::conc::
3 つの観点を並べて説明するスライドに向いています。

---
layout: two-rows
---

::title::
two-rows : 上下 2 分割

::top::
**top スロット**

上段には概要、前提、図解、全体像などを置くと見通しがよくなります。

::bottom::
**bottom スロット**

下段には詳細、補足、比較表、手順などを置けます。縦方向に話の流れを作りたい場合に使います。

::conc::
上下の関係性をまとめ欄で補足できます。

---
layout: section
---

# Bento レイアウト

---
layout: bento
cols: 3
rows: 2
sizeA: w2 h2
---

::title::
bento : メイン + サイド

::a::
<div class="w-full h-full bg-blue-100 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center gap-3 text-blue-950">
  <div class="text-3xl font-bold">slot a</div>
  <div class="text-xl">sizeA: w2 h2</div>
</div>

::b::
<div class="w-full h-full bg-green-100 border-2 border-green-400 rounded-lg flex items-center justify-center text-2xl font-bold text-green-950">slot b</div>

::c::
<div class="w-full h-full bg-emerald-100 border-2 border-emerald-400 rounded-lg flex items-center justify-center text-2xl font-bold text-emerald-950">slot c</div>

---
layout: bento
cols: 3
rows: 2
sizeA: w3 h1
---

::title::
bento : 見出し + 3 項目

::a::
<div class="w-full h-full bg-purple-100 border-2 border-purple-400 rounded-lg flex items-center justify-center text-3xl font-bold text-purple-950">slot a / sizeA: w3 h1</div>

::b::
<div class="w-full h-full bg-orange-100 border-2 border-orange-400 rounded-lg flex items-center justify-center text-2xl font-bold text-orange-950">slot b</div>

::c::
<div class="w-full h-full bg-amber-100 border-2 border-amber-400 rounded-lg flex items-center justify-center text-2xl font-bold text-amber-950">slot c</div>

::d::
<div class="w-full h-full bg-yellow-100 border-2 border-yellow-400 rounded-lg flex items-center justify-center text-2xl font-bold text-yellow-950">slot d</div>

---
layout: bento
cols: 4
rows: 2
sizeA: w1 h2
sizeB: w2 h1
sizeD: w2 h1
---

::title::
bento : 複雑な配置

::a::
<div class="w-full h-full bg-rose-100 border-2 border-rose-400 rounded-lg flex items-center justify-center text-2xl font-bold text-rose-950">a<br>w1 h2</div>

::b::
<div class="w-full h-full bg-sky-100 border-2 border-sky-400 rounded-lg flex items-center justify-center text-2xl font-bold text-sky-950">b / w2 h1</div>

::c::
<div class="w-full h-full bg-cyan-100 border-2 border-cyan-400 rounded-lg flex items-center justify-center text-2xl font-bold text-cyan-950">c</div>

::d::
<div class="w-full h-full bg-lime-100 border-2 border-lime-400 rounded-lg flex items-center justify-center text-2xl font-bold text-lime-950">d / w2 h1</div>

::e::
<div class="w-full h-full bg-zinc-100 border-2 border-zinc-400 rounded-lg flex items-center justify-center text-2xl font-bold text-zinc-950">e</div>

---
layout: section
---

# コンポーネントと自動調整

---
layout: default
---

::title::
components : SlideDate / SlideNumber

::default::
`SlideNumber` は各レイアウトの右下に自動表示されます。

`SlideDate` は任意の場所で利用できます。

| format | 表示 |
| --- | --- |
| ja | <SlideDate date="20260607" format="ja" /> |
| slash | <SlideDate date="20260607" format="slash" /> |
| dot | <SlideDate date="20260607" format="dot" /> |
| hyphen | <SlideDate date="20260607" format="hyphen" /> |

::conc::
印刷時は `date` prop、通常表示時は今日の日付を表示します。

---
layout: default
---

::title::
v-fit : はみ出し時の文字サイズ調整

::default::
このスライドは、本文量が多い場合に文字サイズが自動で下がることを確認するためのサンプルです。

- 1. 長い文章や箇条書きが増えると、本文領域の高さを超えることがあります。
- 2. `v-fit` はレイアウト領域に収まるように文字サイズを調整します。
- 3. `text-xl` のようなクラスが付いた要素も調整対象です。
- 4. 表示サイズの変更や内容変更に追従します。
- 5. まとめ欄がある場合は、本文とまとめ欄を含む領域全体で収まりを判定します。
- 6. 文字サイズには下限があるため、極端に長い内容は最終的に非表示領域が残る場合があります。
- 7. スライドとして読みやすい分量に保つための補助機能として使います。
- 8. 実際の発表資料では、重要な語句を短く配置すると見やすくなります。
- 9. 図や表を組み合わせる場合も、領域内に収まるか確認できます。
- 10. このサンプルで縮小の挙動を確認できます。

::conc::
領域からはみ出す場合は、文字サイズを自動調整します。

---
layout: two-cols
---

::title::
v-fit : two-cols の確認

::left::
**left スロット**

- 1. カラム内の本文量が多い場合の確認です。
- 2. 左カラムだけが長くても、レイアウト全体で文字サイズが調整されます。
- 3. カラム要素には `overflow-hidden` が付いています。
- 4. その内側のはみ出しも検出できる必要があります。
- 5. 箇条書きが続くケースを想定しています。
- 6. 説明文が長い場合でも、読み切れるサイズまで自動で縮小します。
- 7. 左右の文字サイズは同じ倍率で揃います。
- 8. 片側だけ極端に小さくなる見た目を避けます。
- 9. さらに文章を追加して、通常サイズでは確実にカラム高さを超える状態にします。
- 10. カラム内で折り返しが増えるほど、実際の本文高さも増えていきます。
- 11. 右カラムが短い場合でも、左カラムのはみ出しを基準に全体を縮小します。
- 12. この行まで表示されていれば、隠れていた内容が縮小で見えるようになっています。

::right::
**right スロット**

- 右側は短めの内容です。
- 比較対象や補足情報を置きます。
- 左右比較の見た目も確認できます。

::conc::
two-cols でもカラム内のはみ出しを検出します。

---
layout: two-cols
---

::title::
v-fit : two-cols の確認（conc なし）

::left::
**left スロット**

- 1. カラム内の本文量が多い場合の確認です。
- 2. 左カラムだけが長くても、レイアウト全体で文字サイズが調整されます。
- 3. カラム要素には `overflow-hidden` が付いています。
- 4. その内側のはみ出しも検出できる必要があります。
- 5. 箇条書きが続くケースを想定しています。
- 6. 説明文が長い場合でも、読み切れるサイズまで自動で縮小します。
- 7. 左右の文字サイズは同じ倍率で揃います。
- 8. 片側だけ極端に小さくなる見た目を避けます。
- 9. さらに文章を追加して、通常サイズでは確実にカラム高さを超える状態にします。
- 10. カラム内で折り返しが増えるほど、実際の本文高さも増えていきます。
- 11. 右カラムが短い場合でも、左カラムのはみ出しを基準に全体を縮小します。
- 12. この行まで表示されていれば、隠れていた内容が縮小で見えるようになっています。

::right::
**right スロット**

- 右側は短めの内容です。
- 比較対象や補足情報を置きます。
- 左右比較の見た目も確認できます。

---
layout: three-cols
---

::title::
v-fit : three-cols の確認

::left::
**left**

- 1. 3 カラムでは各カラムの幅が狭くなります。
- 2. 折り返しが増えるため、高さ方向にはみ出しやすくなります。
- 3. このカラムを長めにして検出を確認します。
- 4. `scrollHeight` が各カラムで増えるケースです。
- 5. 子孫要素単位の判定が効いていれば縮小されます。
- 6. 長い文章を含む箇条書きでも収まるか確認します。
- 7. three-cols は 1 カラムあたりの幅が狭いため、文章がすぐ複数行になります。
- 8. さらに行を増やして、通常サイズでは下部が隠れる条件を作ります。
- 9. 左カラムだけが長い場合でも、3 カラム全体を同じ倍率で縮小します。
- 10. この最後の行が見えていれば、カラム内のはみ出し検出が動いています。

::center::
**center**

- 比較軸
- 評価方法
- 補足

::right::
**right**

- 結果
- 注意点
- 次の作業

::conc::
three-cols でも狭いカラム内の折り返しを含めて確認します。

---
layout: two-rows
---

::title::
v-fit : two-rows の確認

::top::
**top スロット**

- 1. 上段に長い内容を入れた場合の確認です。
- 2. two-rows は縦方向に領域が分かれるため、各段の高さが小さくなります。
- 3. そのため default よりも本文がはみ出しやすくなります。
- 4. 上段の `overflow-hidden` で隠れる前に、子要素のはみ出しを検出します。
- 5. 自動縮小が効けば、下段とまとめ欄を含めて収まります。
- 6. 文章量が増えたスライドの確認に使えます。

::bottom::
**bottom スロット**

- 下段は短めの補足です。
- 上段が長いときにも全体の文字サイズが揃うか確認します。

::conc::
two-rows でも段内のはみ出しを検出します。

---
layout: default
---

::title::
v-fit : コードブロックの確認

::default::
通常サイズでは縦方向に長すぎるコードブロックを配置し、`pre` / `code` の文字サイズも縮小されるか確認します。

```ts
type FitTarget = {
  id: string
  clientWidth: number
  clientHeight: number
  scrollWidth: number
  scrollHeight: number
}

const elementFits = (target: FitTarget) => {
  const heightFits =
    !target.clientHeight ||
    target.scrollHeight <= target.clientHeight + 1

  const widthFits =
    !target.clientWidth ||
    target.scrollWidth <= target.clientWidth + 1

  return heightFits && widthFits
}

const targets: FitTarget[] = [
  { id: 'wrapper', clientWidth: 960, clientHeight: 500, scrollWidth: 960, scrollHeight: 520 },
  { id: 'pre', clientWidth: 880, clientHeight: 360, scrollWidth: 910, scrollHeight: 420 },
  { id: 'code', clientWidth: 880, clientHeight: 360, scrollWidth: 910, scrollHeight: 420 },
]

for (const target of targets) {
  console.log(target.id, elementFits(target) ? 'fits' : 'overflow')
}
```

::conc::
コードブロックの縦方向のはみ出しを確認します。

---
layout: default
---

::title::
v-fit : 長いコード行の確認

::default::
横方向に長い行を含むコードブロックを配置し、`scrollWidth` の超過に反応して縮小されるか確認します。

```ts
const readableConfig = createPresentationConfig({ theme: 'slidev-theme-tut', layout: 'default', contentArea: { left: '3.23%', top: '18.06%', width: '93.75%', height: '69.44%' }, fitting: { minScale: 0.35, observes: ['wrapper', 'inner', 'pre', 'code', 'table', 'custom-elements'] } })

const longMessage = 'This line is intentionally long so the code block becomes wider than the available slide content area before v-fit has a chance to reduce the font size.'

export const result = readableConfig.fitting.observes.map((target) => ({
  target,
  shouldFitInsideSlide: true,
  message: longMessage,
}))
```

- 長い 1 行が右端で欠けずに見えるか確認します。
- コードブロックの上下余白を含めて本文領域に収まるか確認します。

::conc::
コードブロックの横方向のはみ出しを確認します。

---
layout: two-cols
---

::title::
v-fit : two-cols のコード確認

::left::
**left スロット**

```ts
const slides = [
  { layout: 'default', checks: ['body', 'summary', 'code-block'] },
  { layout: 'two-cols', checks: ['left', 'right', 'code-block'] },
  { layout: 'three-cols', checks: ['left', 'center', 'right'] },
  { layout: 'two-rows', checks: ['top', 'bottom', 'code-block'] },
]

const activeChecks = slides.flatMap((slide) =>
  slide.checks.map((check) => `${slide.layout}:${check}`)
)

console.log(activeChecks.join('\n'))
```

::right::
**right スロット**

- 左カラムのコード量が多い場合の確認です。
- 右カラムは通常の Markdown を置きます。
- コードブロックだけが大きい場合でも、左右の文字サイズが同じ倍率で揃うか確認します。
- まとめ欄込みで全体が収まるか確認します。

::conc::
分割レイアウト内のコードブロックも縮小対象です。

---
layout: two-rows
---

::title::
v-fit : two-rows のコード確認

::top::
**top スロット**

```ts
const update = () => {
  resetKnownFontSizes()
  applyScale(1)

  if (fits()) return

  let low = 0.35
  let high = 1

  for (let i = 0; i < 12; i += 1) {
    const scale = (low + high) / 2
    applyScale(scale)

    if (fits()) {
      low = scale
    } else {
      high = scale
    }
  }

  applyScale(low)
}
```

::bottom::
**bottom スロット**

- 上段にコードブロックを置いた場合の確認です。
- 段の高さが小さいため、通常の本文よりもはみ出しやすい条件になります。
- 下段の本文とまとめ欄も同じ縮小倍率で表示されるか確認します。

::conc::
上下分割でもコードブロックの高さを含めて判定します。

---
layout: section
---

# まとめ

---
layout: default
---

::title::
まとめ

::default::
<div class="w-full h-full flex flex-col justify-center items-center gap-6 text-center">
  <p class="text-3xl font-bold text-neutral-900">
    レイアウトはスロット単位で使い分けます。
  </p>
  <p class="text-xl text-neutral-700">
    default / two-cols / three-cols / two-rows / bento を用途に合わせて選択してください。
  </p>
</div>
