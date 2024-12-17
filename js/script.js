// function toggleMenu() {
//     const navMenu = document.getElementById('nav-menu');
//     navMenu.classList.toggle('active');
//   }

function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  // ナビゲーションメニューの表示/非表示切り替え
  navMenu.classList.toggle('active');

  // ハンバーガーメニューアイコンの「×」アニメーション切り替え
  hamburgerMenu.classList.toggle('active');
}
document.querySelectorAll('#nav-menu a').forEach(navMenu => {
  navMenu.addEventListener('click', function() {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('active'); // メニューを閉じる
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const pageTopButton = document.getElementById("page_top");
  const faqSection = document.getElementById("interviews");

  // FAQセクションの終わり位置を計算
  const faqPosition = faqSection.offsetTop + faqSection.offsetHeight;

  window.addEventListener("scroll", function () {
    // 現在のスクロール位置を取得
    const scrollY = window.scrollY;

    if (scrollY > faqPosition) {
      // FAQの終わりを超えたらボタンを表示
      pageTopButton.style.display = "block";
    } else {
      // それまでは非表示
      pageTopButton.style.display = "none";
    }
  });

  // ボタンをクリックでページトップにスムーズに戻る
  pageTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
});
