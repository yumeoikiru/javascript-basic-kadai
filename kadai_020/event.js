// ボタンとテキスト要素を取得します
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理を設定します
button.addEventListener('click', function() {
    text.textContent = 'ボタンをクリックしました'; // h2の内容を変更します
});