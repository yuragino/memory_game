カード回転
.card ← 外枠・視点
│
└── .cardinner ← ぐるっと回転する中身
    │
    ├── .cardfront（表の絵文字）
    └── .cardback（裏の色）
    
## 3D回転を作る
（実際に回転する要素の親要素への設定）
`perspective: 1000px;`
  → 視点距離は、数値が小さいほど立体感が強く(近くで見てるから)、大きいほど平面的になる。

（実際に回転する要素への設定）
`transformstyle: preserve3d;`
`transition: transform 0.6s;`

## 2つの要素を重ねて表裏にする
`position: absolute;`で表裏要素を親要素に重ねる。
`backfacevisibility: hidden;`で裏面の要素が見えないようにする。自動判定

## transform: rotateY(180deg);をつける場所
 表面、裏面のいずれか(片方しか見えないに決まってるので) ＆ flippedクラスがついた時のinner

## カードデザイン
 `border: 2px solid grey;`　枠線をつける
 `boxshadow: 水平 垂直 ぼかし(拡がり) 色` 影をつける

##　グラデーション
1. 線形グラデーション（linear-gradient）
`background: linear-gradient(方向, 色1, 色2, ...);`
→ 方向は角度（例：45deg）かキーワード（例：to right）で指定
→ 色は複数OK

3. 最も簡潔な線形グラデーション例
`background: linear-gradient(red, blue);`
→ 上から下に赤→青にグラデーション

2. 放射状グラデーション（radial-gradient）
`background: radial-gradient(形状 サイズ at 位置, 色1, 色2, ...);`
形状: circle（円形）やellipse（楕円形）
サイズ: closest-sideなど
位置: at centerなど

4. 応用
`background: linear-gradient(to bottom right, #ff7e5f, #feb47b);`
→ 右下に向かってオレンジ系のグラデーション

## 文字をピッタリ中央に配置したい
　`display: flex;`
  `justifycontent: center;`→ 左右の真ん中
  `alignitems: center;` → 上下の真ん中




