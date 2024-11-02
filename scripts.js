let isPopupShown = false; // ポップアップが表示済みかどうかを確認するフラグ
let linkClicked = false; // 特定のリンクがクリックされたかどうかを確認するフラグ

// 特定のリンクのクリックを検知
document.querySelector('a[href="https://yujinkai.pos-s.net/reserve/"]').addEventListener('click', function () {
  linkClicked = true;
});

// 履歴スタックに現在のページの状態を追加
history.pushState(null, document.title, location.href);

// beforeunload イベントでページ離脱を検知
window.addEventListener('beforeunload', function (e) {
  if (!isPopupShown && !linkClicked) {
    e.preventDefault();
    showPopup();
    isPopupShown = true;
    e.returnValue = ''; // 確認ダイアログを表示（ユーザーの確認を要求）
  }
});

// popstate イベントでブラウザバックを検知
window.addEventListener('popstate', function () {
  if (!isPopupShown) {
    showPopup();
    isPopupShown = true;
    // もとの状態を戻して再度ブラウザバックをできないようにする
    history.pushState(null, document.title, location.href);
  }
});

// ポップアップを表示する関数
function showPopup() {
  const popup = document.getElementById('exitPopup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.opacity = '1'; // ふわっと表示
  }, 10);
}

// ポップアップを非表示にする関数
function hidePopup() {
  const popup = document.getElementById('exitPopup');
  popup.style.opacity = '0'; // ふわっと消える
  setTimeout(() => {
    popup.style.display = 'none'; // 完全に非表示
  }, 500); // transitionの時間と同じ500msに設定
}

// `.exitPopup__mask`をクリックするとポップアップがふわっと消える
document.querySelector('.exitPopup__mask').addEventListener('click', hidePopup);

// `.exitPopup__close`をクリックしてもポップアップがふわっと消える
document.querySelector('.exitPopup__close').addEventListener('click', hidePopup);
