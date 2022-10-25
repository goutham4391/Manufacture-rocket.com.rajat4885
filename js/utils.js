//Add 'on' class to selected nav li

window.onload = function () {
  //find all a tags within navb
  let aTags = document.getElementsByName("nav");
  //loop through those, add class to parent
  aTags.forEach((tag) => {
    let parent = tag.parentElement;
    let str = "/" + tag.getAttribute("href");
    let trailingStr = str + "/";
    if (
      str === window.location.pathname ||
      trailingStr === window.location.pathname
    ) {
      parent.classList.add("on");
    } else {
      parent.classList.remove("on");
    }
  });
};

//rocket animation on scroll
document.addEventListener("scroll", function () {
  var el = document.getElementById("masthead");
  el.classList.add("rocket-launch");
  window.setTimeout(() => el.classList.remove("rocket-launch"), 1000);
  addSection();
});

function addSection() {
  //when the masthead reaches the height of a section, add section class to masthead.
  //Only applies to home.template.njk, don't need this running on other pages.
  if (window.location.pathname != "/" || "") {
    return;
  }
  let mast = document.getElementById("masthead");
  let sectionHeight = document.querySelector("section").scrollHeight;

  // current window scroll height
  let windowHeight = window.scrollY;
  if (windowHeight - 350 >= sectionHeight) {
    mast.classList.add("section");
  }
  //remove if you scroll back up past a section
  if (
    mast.classList.contains("section") &&
    windowHeight - 350 < sectionHeight
  ) {
    mast.classList.remove("section");
  }
}

function playVideo() {
  let playButton = document.getElementsByClassName(
    "video-player__play-button"
  )[0];
  var posterFrame = document.getElementsByClassName("video-player")[0];
  var youtube = document.getElementsByClassName("youtube-player")[0];

  youtube.src += "&autoplay=1";
  posterFrame.classList.add("video-player--playing");
  playButton.style.display = "none";
}

function showMobileMenu(e) {
  let mobileMenuHamburger = document.getElementById("mobile-menu-hamburger");
  let ul = document.getElementById("mobile-menu");
  let div = document.getElementById("mobile-menu-div");
  if (div === e) {
    div.classList.add("hide-nav");
    mobileMenuHamburger.classList.remove("hide-nav");
  }
  if (e.classList.contains("hide-nav")) {
    e.classList.remove("hide-nav");
    ul.classList.add("hide-nav");

    div.classList.add("hide-nav");
    return false;
  } else {
    e.classList.add("hide-nav");
    ul.classList.remove("hide-nav");
    div.classList.remove("hide-nav");
    return true;
  }
}

function scrollToTop() {
  // window.scrollTo({top: 0, behavior: 'smooth'});
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    750
  );
}
