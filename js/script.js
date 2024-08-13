$(function () {
  // l_menu

  $(".top_menu .l_menu li").click(function () {
    $(".top_menu .l_menu li").removeClass("on");
    $(this).addClass("on");
  });

  // gnb

  $("header .sub, #gnb_box").hide();

  $("header .gnb>li, .gnb_box").hover(function () {
    $(".sub, #gnb_box").stop().slideToggle(200);
  });

  // top menu

  let lastScrollTop = 0;
  const hdMn = document.querySelector(".top_menu");
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");
  const gnb = document.querySelector(".gnb");
  const gnbBox = document.querySelector(".gnb_box");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const windowWidth = window.innerWidth; // 현재 창의 너비

    if (currentScroll > lastScrollTop) {
      // 아래로 스크롤할 때
      hdMn.style.visibility = "hidden"; // 보이지 않게
      if (windowWidth < 1200) {
        header.style.marginTop = "-30px"; // 1200px 미만
      } else {
        header.style.marginTop = "-50px"; // 1200px 이상
      }
    } else {
      // 위로 스크롤할 때
      if (currentScroll === 0) {
        hdMn.style.visibility = "visible"; // 보이게
        header.style.marginTop = "0"; // 헤더 높이 원래대로
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 스크롤 위치 업데이트
  });

  // slider_1

  setInterval(function () {
    $(".slider").animate(
      {
        marginLeft: "-1920px",
      },
      1000,
      function () {
        $(".slider li:first").appendTo(".slider");
        $(".slider").css("margin-left", "0");
      }
    );
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".m_gnb > li > span");

  items.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      var subMenu = this.nextElementSibling;

      if (subMenu && subMenu.classList.contains("m_sub")) {
        var isOpen = subMenu.classList.contains("open");

        document.querySelectorAll(".m_sub").forEach(function (menu) {
          menu.classList.remove("open");
        });

        if (!isOpen) {
          subMenu.classList.add("open");
        }
      }
    });
  });
});

// jQuery 코드로 클릭 이벤트 설정
$(".m_arow").click(function () {
  // 모든 .m_arow 요소에서 .live 클래스를 제거
  $(".m_arow").removeClass("live");

  // 클릭된 요소에만 .live 클래스를 추가
  $(this).addClass("live");
});

const cs = document.querySelector(".nav_close a");
const mGnbModal = document.querySelector("#m_gnb_on_modal");
const navBtn = document.querySelector(".nav_btn");

cs.addEventListener("click", () => {
  mGnbModal.style.display = "none";
});

navBtn.addEventListener("click", () => {
  mGnbModal.style.display = "block";
});
