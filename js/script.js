toggleSideBar();
 function toggleSideBar() {
  $(" .all .bar-container .open-close").click(function () {
    let boxWidth = $(" .all .content").outerWidth();
    let position = $(" .all .content").offset().left;

    // console.log(position);
    //  console.log(boxWidth);
    if (position == 20) {
      $(" .all").css({
        left: `-${boxWidth + 40}px`,
        transition: "all 1s",
      });
      $("#theme-open").css({
        display: `block`,
        transition: "all 1s",
      });
      $("#theme-close").css({
        display: `none`,
        transition: "all 1s",
      });

      $(".content .content-info ul li:first-child").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(2)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(3)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(4)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(5)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
    } else {
      $(" .all").css({
        left: 0,
        transition: "all 1s",
      });

      $("#theme-open").css({
        display: `none`,
        transition: "all 1s",
      });
      $("#theme-close").css({
        display: `block`,
        transition: "all 1s",
      });

      $(".content .content-info ul li:first-child").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(2)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(3)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(4)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(5)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
    }
  });
   
   
  $(".all ul li a").click(function () {
    let boxWidth = $(" .all .content").outerWidth();
    let position = $(" .all .content").offset().left;

    // console.log(position);
    //  console.log(boxWidth);
    if (position == 20) {
      $(" .all").css({
        left: `-${boxWidth + 40}px`,
        transition: "all 1s",
      });
      $("#theme-open").css({
        display: `block`,
        transition: "all 1s",
      });
      $("#theme-close").css({
        display: `none`,
        transition: "all 1s",
      });

      $(".content .content-info ul li:first-child").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(2)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(3)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(4)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(5)").animate(
        {
          opacity: "0",
          paddingTop: "200px",
        },
        1000
      );
    } else {
      $(" .all").css({
        left: 0,
        transition: "all 1s",
      });

      $("#theme-open").css({
        display: `none`,
        transition: "all 1s",
      });
      $("#theme-close").css({
        display: `block`,
        transition: "all 1s",
      });

      $(".content .content-info ul li:first-child").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(2)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(3)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(4)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
      $(".content .content-info ul li:nth-child(5)").animate(
        {
          opacity: "1",
          paddingTop: "20px",
        },
        1000
      );
    }
  });
   
  
}
