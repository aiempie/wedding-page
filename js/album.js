const data = [
  {
    dataTitle:
      "Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn",
    imageLink: "img/album/001-002.jpg",
  },
  {
    dataTitle:
      "Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh",
    imageLink: "img/album/003-004.jpg",
  },
  {
    dataTitle:
      "Vì vậy, để được ai đó nhìn thấy đầy đủ và được yêu mến dù thế nào đi nữa — đây là một sự dâng hiến của con người có thể là điều kỳ diệu",
    imageLink: "img/album/005-006.jpg",
  },
  {
    dataTitle:
      "Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá",
    imageLink: "img/album/007-008.jpg",
  },
  {
    dataTitle:
      "Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng",
    imageLink: "img/album/009-010.jpg",
  },
  {
    dataTitle:
      "Tôi có thể chinh phục thế giới bằng một tay miễn là bạn đang nắm tay kia",
    imageLink: "img/album/011-012.jpg",
  },
  {
    dataTitle:
      "Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ",
    imageLink: "img/album/013-014.jpg",
  },
  {
    dataTitle:
      "Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí",
    imageLink: "img/album/015-016.jpg",
  },
  {
    dataTitle:
      "Đối với thế giới, bạn có thể là một người, nhưng với một người, bạn là cả thế giới",
    imageLink: "img/album/017-018.jpg",
  },
  {
    dataTitle:
      "Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu",
    imageLink: "img/album/019-020.jpg",
  },
  {
    dataTitle:
      "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó",
    imageLink: "img/album/3V7A9228.jpg",
  },
  {
    dataTitle:
      "Tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng",
    imageLink: "img/album/3V7A9441.jpg",
  },
];

const dataDiv = document.getElementById("album-image");
//tạo html comment
data.forEach((item) => {
  let htmlStr = `
  <div
  class="item gallery-fancybox"
  data-title="${item.dataTitle}"
>
  <a
    href="${item.imageLink}"
    title="${item.dataTitle}"
    class="fancybox"
    data-fancybox-group="gall-1"
  >
    <img
      data-img-src="${item.imageLink}"
    />
  </a>
</div>`;

  dataDiv.innerHTML += htmlStr;
});

const setShareButton = document.getElementById("share-button");

setShareButton.innerHTML = `
<a
    target="_blank"
    href="http://www.facebook.com/share.php?u=https%3A%2F%2Fcuoi.nonchat.vn%2Falbum.html"
    >
    <img src="img/facebook.svg" />
    </a>
`;
