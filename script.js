 // カードの柄の配列、1種類ずつ
    const symbols = ["🍎", "🍋", "🍏", "🍇", "🍊", "🍉"];

    // concatで配列をくっつけて2枚組にする
    const cards = symbols.concat(symbols);

    shuffle(cards);
    createCard();

    // シャッフルの関数
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // ボードに表示
    function createCard() {
      const board = document.getElementById("board");
      board.innerHTML = ""
      // 作ったカードはfragmentに入れていく
      const fragment = new DocumentFragment();

      // カードからシンボルを取り出してカードのhtmlを作る
      cards.forEach(symbol => {
        // カードの外枠を作る
        const card = document.createElement("div");
        card.classList.add("card");
        // カードの中身を作る
        card.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">${symbol}</div>
        <div class="card-face card-back"></div>
      </div>
`;
        // カードにイベントリスナーを追加
        card.addEventListener("click", flip);
        fragment.appendChild(card);
      });
      board.appendChild(fragment);
    }

    // めくったカードを格納する配列
    let flippedCards = [];

    // カードをめくる関数
    function flip(e) {
      // イベントリスナーが設定された要素(.card)を返す
      const card = e.currentTarget;

      if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
        card.classList.add("flipped");
        flippedCards.push(card);
      }
      if (flippedCards.length == 2) {
        checkForMatch();
      }
    }

    // あってるかチェックする
    function checkForMatch() {
      // flippedCardsからカードを取り出して1と2に分ける
      const [card1, card2] = flippedCards;

      // カードからシンボルを取り出す
      const symbol1 = card1.querySelector('.card-front').textContent;
      const symbol2 = card2.querySelector('.card-front').textContent;

      // シンボルを比較する
      if (symbol1 !== symbol2) {
        setTimeout(() => {
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
        }, 1000);
      }
      // flippedCardsを初期化する
      flippedCards = [];
    }