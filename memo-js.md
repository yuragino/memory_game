```js
// 配列を複製して結合させる
配列.concat(配列)

// 配列をシャッフルさせる FisherYatesアルゴリズム
let i = array.length - 1: 最後のインデックスから始める
👉 ループのたびに i を1つずつ減らしていくことで、入れ替えた要素が次のループで対象にならないようにする

i > 0: 最後の 1 要素まで繰り返す（i = 0 のときは入れ替え不要）
👉 i = 0, j = 0 → array[0] と array[0] を入れ替えるだけで、実質的に「なにも起きない」ので、その1回の処理は意味がない。

Math.floor(): 小数を切り捨てて整数にする。
Math.random(): 0以上1未満 のランダムな小数を返す。
Math.random() * (i + 1): 0以上i以下の範囲の小数を作る。
👉 (i + 1) にしないと、i自身が選ばれない可能性がある

分割代入 : [array[i], array[j]] = [array[j], array[i]];

// DOM要素の動的生成 Fragmentを使う
const fragment = new DocumentFragment();でfragmentを用意
fragment.appendChild(要素);
場所.appendChild(fragment);

// e.targetとe.currentTargetの違い
e.target → 実際にクリックされた要素（イベントが発生した一番深い要素）
e.currentTarget → イベントリスナーが登録された要素

<div class="outer">
  <button class="inner">Click</button>
</div>

document.querySelector(".outer").addEventListener("click", (e) => {
  console.log(e.target); // 例: button.inner
  console.log(e.currentTarget); // div.outer
});

// classListプロパティのメソッド一覧
element.classList.add("クラス名")
クラスを追加

element.classList.remove("クラス名")
クラスを削除

element.classList.toggle("クラス名")
クラスのON/OFFを切り替える（存在すれば削除、なければ追加）

element.classList.contains("クラス名")
クラスが付いているかをtrue/falseで判定

// setTimeoutの使い方
setTimeout(() => {
  // 指定時間後に実行される処理
}, 1000); // 1000ミリ秒（＝1秒）

// データ属性（data-属性）の使い方
<div class="card" data-symbol="🍎"></div>
const symbol = element.dataset.symbol; // "🍎"

// document.createElementの使い方
const div = document.createElement("div");
div.classList.add("card");
div.textContent = "🍎";
container.appendChild(div);

// テンプレートタグを使う
<template id="card-template">
  <div class="card">
    <div class="card-inner">
      <div class="card-face card-front"></div>
      <div class="card-face card-back"></div>
    </div>
  </div>
</template>

const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".card-front").textContent = symbol;
container.appendChild(clone);

