// loader js
$(window).on("load", function () {
  $(".loader-container").delay(300).fadeOut(1000);
});

// SideBar
$(".side-open").on("click", function () {
  $(".links").addClass("active");
  $(".overlay-m").fadeIn(500);
});

// SideBar
$(".overlay-m").on("click", function () {
  $(".links").removeClass("active");
  $(".overlay-m").fadeOut(500);
});

let isRtl = $('html[lang="ar"]').length > 0;

// Active Link
$(".nav_bar li .link").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

/******************* Select *******************/
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});

/******************* Counter *******************/
if ($(".num").length > 0) {
  $(".num").countUp();
}

/******************* wow js *******************/
new WOW().init();

/******************* About Tabs *******************/
$('.tabs-show:not(:first)').hide();

$('.tabs-m').on('click', function (e) {
  e.preventDefault();

  // FadeOut All Content
  $('.tabs-show').fadeOut(0);
  let item = $(this).attr('data-show');

  // Show Current Content
  $(`.${item}`).fadeIn();

  // Active Class In Tabs
  $('.tabs-m').removeClass('active');
  $(this).addClass('active');

});

$('.about-open').click(function (e) {
  e.preventDefault()
  if ($(this).parent('.about-collapse').hasClass('active')) {
    $(this).next(".about-content-tab").slideUp();
    $(this).parent('.about-collapse').removeClass('active');
    $(this).removeClass('active');
  } else {
    $('.about-collapse').removeClass('active');
    $('.about-content-tab').slideUp();
    $(this).parent('.about-collapse').addClass('active');
    $(this).next('.about-content-tab').slideDown();
    $(this).addClass('active');
  }
});

$(document).ready(function () {
    "use strict";
    $(".close-open-nav").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".nav_bar").addClass("active");

        } else {
            $(".nav_bar").removeClass("active");
        }
    });

    $("body").on("click", function () {
        $(".close-open-nav.active").click();
    });
    /*
        $(".nav_bar a").each(
            function () {
                if (window.location.href.includes($(this).attr('href'))) {
                    $(this).parent('li').addClass("active");
                    $(this).parent().parent('.sub-menu').slideDown("");
                }
            }
        );
        */


    var owl_index = $(".owl_index .item").outerHeight();
    var header = $("header").outerHeight();

    $(window).scroll(function () {
        if ($(this).scrollTop() > owl_index + header) {
            $(".back-to-top").addClass("active");
            $("header").addClass("fixed");
        } else {
            $(".back-to-top").removeClass("active");
            $("header").removeClass("fixed");
        }
    });

    $(".back-to-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });


    $(".foot_wol button").on("click", function () {
        $("html, body").animate({
            scrollTop: owl_index + header
        }, 500);

    });
});

/******************* All Sliders *******************/
$(document).ready(function () {

  $('.owl_index').owlCarousel({
        animateOut: 'slideOutUp',
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

  /************ services Carousel ***********/
  let isRtl = $('html[lang="ar"]').length > 0;
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    animateOut: "fadeOut",
    rtl: isRtl,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
  });

  /************ services Carousel ***********/
  $(".services-slider").owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
    responsive: {
      991: {
        items: 3,
      },
      560: {
        items: 2,
      },
    },
  });

  /************ team Carousel ***********/
  $(".team-slider").owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: false,
    dots: false,
    nav: true,
    autoplay: true,
    rewind: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
    responsive: {
      1200: {
        items: 4,
      },
      991: {
        items: 3,
      },
      560: {
        items: 2,
      },
    },
  });

  /************ Clients Carousel ***********/
  const owlclients = $(".clients-slider");

  owlclients.on("changed.owl.carousel", function (event) {
    setTimeout(() => {
      owlclients.find(".owl-stage-outer").addClass("py-3");
    }, 0.1);
  });
  owlclients.owlCarousel({
    items: 2,
    loop: true,
    rtl: isRtl,
    margin: 35,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 2800,
    autoplaySpeed: 2800,
    autoplayHoverPause: true,
    responsive: {
      1000: {
        items: 6,
      },
      800: {
        items: 4,
      },
      400: {
        items: 3,
        margin: 20,
      },
    },
  });

  const owlfields = $(".fields-slider");

  owlfields.on("changed.owl.carousel", function (event) {
    setTimeout(() => {
      owlfields.find(".owl-stage-outer").addClass("py-3");
    }, 0.1);
  });
  owlfields.owlCarousel({
    items: 2,
    loop: true,
    rtl: isRtl,
    margin: 35,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 2800,
    autoplaySpeed: 2800,
    autoplayHoverPause: true,
    responsive: {
      1000: {
        items: 6,
      },
      800: {
        items: 4,
      },
      400: {
        items: 3,
        margin: 20,
      },
    },
  });

  /************ customers Carousel ***********/
  const owlCustomers = $(".customers-slider");

  owlCustomers.owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
  });
});

/************ faq Collapse ***********/
$(document).ready(function () {
  $('.faq-open').click(function (e) {
    e.preventDefault()
    if ($(this).parent('.faq-collapse').hasClass('active')) {
      $(this).next(".faq-content").slideUp();
      $(this).parent('.faq-collapse').removeClass('active');
    } else {
      $('.faq-collapse').removeClass('active');
      $('.faq-content').slideUp();
      $(this).parent('.faq-collapse').addClass('active');
      $(this).next('.faq-content').slideDown();
    }
  })
});




/************* Upload Files Or Img *************/
let loginInputs = document.querySelectorAll(".img-upload-input");

loginInputs.forEach((input) => {
  if (input.classList.contains("profile")) {
    let img = input.parentElement.querySelector(".profile-img .img");
    let imageSrc = img.getAttribute("src");
    input.onchange = function () {
      let reader = new FileReader();
      if (input.files[0]) {
        reader.readAsDataURL(input.files[0]);
      } else {
        img.setAttribute("src", imageSrc);
        img.classList.remove("wid");
      }

      reader.onload = () => {
        img.setAttribute("src", reader.result);
        img.classList.add("wid");
      };
    };
  } else {
    input.addEventListener("change", function () {
      imgPreview(input);
    });
  }
});


// ImgPreview Function
function imgPreview(input) {
  var file = input.files[0];
  var mixedfile = file["type"].split("/");
  var filetype = mixedfile[0];
  let photoContainer = $(input).closest(".upload-con").find(".photo-con");

  const multiple = $(input).attr("multiple");

  if (multiple) {
    if (filetype == "image") {
      uploadMultiImgs(input, photoContainer);
    } else if (filetype == "application") {
      uploadFile(input, photoContainer);
    }
  } else {
    if (filetype == "image") {
      uploadImg(input, photoContainer);
    } else if (filetype == "application") {
      photoContainer.empty();
      uploadFile(input, photoContainer);
    } else {
      alert("Invalid file type");
    }
  }
}

// uploadMultiImgs
function uploadMultiImgs(input, photoContainer) {
  for (file of input.files) {
    let reader = new FileReader();
    reader.onload = () => {
      let img = `
          <div class="hidden-img">
              <input type='hidden' value='${reader.result}' />
              <a class="fancybox" data-fancybox="gallery" href="${reader.result}">
                  <img class="img" src="${reader.result}" />
              </a>

              <button type='button' class='remove-img'>
                  <i class="fa-solid fa-xmark"></i>
              </button>

          </div>
      `;

      photoContainer.append(img);
      removeIcon();
    };
    reader.readAsDataURL(file);
  }
}

// Upload Image
function uploadImg(input, photoContainer) {
  var reader = new FileReader();
  reader.onload = function (e) {
    photoContainer.empty();
    let img = `
        <div class="hidden-img">

            <a class="fancybox" data-fancybox="gallery" href="${e.target.result}">
                <img class="img" src="${e.target.result}" />
            </a>

            <button type='button' class='remove-img'>
                <i class="fa-solid fa-xmark"></i>
            </button>

        </div>
    `;

    photoContainer.append(img);
    removeIcon();
  };
  reader.readAsDataURL(input.files[0]);
}

// uploadFiles
function uploadFile(input, photoContainer) {
  Object.values(input.files).forEach(function (file) {
    var name = file.name;

    let myFile = `
          <div class="upload-label">
              <input type='hidden' value='${name}' />
              <i class="fa-solid fa-file"></i>
              <span>${name}</span>
              <button type='button' class='remove-img'>
                <i class="fa-solid fa-xmark"></i>
              </button>
          </div>
        `;

    photoContainer.append(myFile);
    removeIcon();
  });
}

let background = $(".text-sec").attr("data-background");
$(".text-sec").css("background-image", `url(${background})`);

// Remove Icon
function removeIcon() {
  $(".remove-img").on("click", function (e) {
    if (e.target.closest(".hidden-img")) {
      e.target.closest(".hidden-img").remove();
    } else if (e.target.closest(".upload-label")) {
      e.target.closest(".upload-label").remove();
    }
  });
}

removeIcon();