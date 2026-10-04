const maxNumberInput = document.getElementById("maxNumber");
const createButton = document.getElementById("createButton");
const regenerateButton = document.getElementById("regenerateButton");
const bingo = document.getElementById("bingo");

// 「ビンゴ表を作成」ボタン
createButton.addEventListener("click", createBingo);

// 「再生成」ボタン
regenerateButton.addEventListener("click", createBingo);


// ビンゴ表を作成する関数
function createBingo() {

    // 最大値を取得
    const maxNumber = Number(maxNumberInput.value);

    // 入力チェック
    if (!maxNumber) {
        alert("最大値を入力してください");
        return;
    }

    // 数字を作成
    const numbers = [];

    for (let i = maxNumber - 7; i <= maxNumber; i++) {
        numbers.push(i);
        numbers.push(i);
    }

    // シャッフル
    numbers.sort(() => Math.random() - 0.5);

    // 現在のビンゴ表を削除
    bingo.innerHTML = "";

    // 16マスを作成
    numbers.forEach(number => {

        const cell = document.createElement("div");

        // マス用のクラス
        cell.classList.add("cell");

        // 数字を表示
        cell.textContent = number;

        // マスをクリックしたとき
        cell.addEventListener("click", () => {

            // selectedクラスを付け外しする
            cell.classList.toggle("selected");

        });

        // ビンゴ表に追加
        bingo.appendChild(cell);
    });
}