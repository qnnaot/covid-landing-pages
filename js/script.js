//Smooth scroll Safari
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("safari") != -1) {
  if (ua.indexOf("chrome") > -1) {
    // console.log("Chrome");
  } else {
    // console.log("Safari");
    $(document).ready(function () {
      $(".navbar a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            500,
            function () {
              window.location.hash = hash;
            }
          );
        }
      });
    });
  }
}
// Animated toggle navbar
var hamburgerBTN = document.querySelector(".navbar-toggler-icon");

hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("rotate");
});

// const navContainer = document.querySelector(".nav-container");
// const navCollapse = document.querySelector(".navbar-collapse");
// navContainer.addEventListener(
//   "blur",
//   () => {
//     let toggle = document.querySelector(".navbar-toggler");
//     if (!toggle.classList.contains("collapsed")) {
//       toggle.classList.remove("colappsed");
//       navCollapse.classList.remove("show");
//       hamburgerBTN.classList.toggle("rotate");
//     }
//   },
//   true
// );

//Navbar scroll
const navBar = document.querySelector(".navbar");
const navBarBrand = document.querySelector(".navbar-brand");
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY >= 100) {
    navBar.classList.add("nav-minimize");
    navBar.style.height = "60px";
    navBarBrand.style.height = "60px";
    navBarBrand.style.width = "130px";
  } else {
    navBar.classList.remove("nav-minimize");
    navBar.style.height = "90px";
    navBarBrand.style.height = "90px";
    navBarBrand.style.width = "200px";
  }
});

//Language toogle event
const languageBtn = document.querySelector(".global-icon");
languageBtn.addEventListener("click", changeLanguage);

const unameInput = document.querySelector("#uname");
const phoneInput = document.querySelector("#phone");
const commentInput = document.querySelector("#comment");

function changeLanguage(e) {
  const vietnamese = document.querySelectorAll(".vietnamese");
  const english = document.querySelectorAll(".english");
  // console.log(e.target.nextElementSibling.classList.contains("active"));
  if (e.target.nextElementSibling.classList.contains("active")) {
    e.target.nextElementSibling.classList.remove("active");
    e.target.nextElementSibling.nextElementSibling.classList.add("active");
    vietnamese.forEach((element) => {
      element.style.display = "none";
      unameInput.setAttribute("placeholder", "Họ tên");
      phoneInput.setAttribute("placeholder", "Số điện thoại");
      commentInput.setAttribute("placeholder", "Nội dung");
    });
    english.forEach((element) => {
      element.style.display = "block";
      unameInput.setAttribute("placeholder", "Name");
      commentInput.setAttribute("placeholder", "Comment");
      phoneInput.setAttribute("placeholder", "Phone number");
    });
    document.title = "Fight against Covid-19";
  } else {
    e.target.nextElementSibling.classList.add("active");
    e.target.nextElementSibling.nextElementSibling.classList.remove("active");
    vietnamese.forEach((element) => {
      element.style.display = "block";
      unameInput.setAttribute("placeholder", "Name");
      commentInput.setAttribute("placeholder", "Comment");
      phoneInput.setAttribute("placeholder", "Phone number");
    });
    english.forEach((element) => {
      element.style.display = "none";
      unameInput.setAttribute("placeholder", "Họ tên");
      commentInput.setAttribute("placeholder", "Nội dung");
      phoneInput.setAttribute("placeholder", "Số điện thoại");
    });
    document.title = "Chống dịch Covid-19";
  }
}
// particlesJS statistical background animated
particlesJS.load("particles-js", "./assets/particles.json", function () {
  // console.log("callback - particles.js config loaded");
});

// Statistical number animated
function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  let currentNumber = startNumber;
  const interval = window.setInterval(updateNumber, 17);
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17));
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber;
        clearInterval(interval);
      } else {
        currentNumber += inc;
      }
      callback(currentNumber);
    }
  }
}
function numberAnimate() {
  animateNumber(1158186, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("new-case-count").innerText = formattedNumber;
  });

  animateNumber(466472159, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("total-case-count").innerText = formattedNumber;
  });

  animateNumber(397879055, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("recovered-case-count").innerText = formattedNumber;
  });

  animateNumber(6087899, 2000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("death-case-count").innerText = formattedNumber;
  });
}
document.addEventListener("DOMContentLoaded", function () {
  numberAnimate();
});
const statisticalNav = document.getElementById("statistical-nav");
statisticalNav.addEventListener("click", function () {
  numberAnimate();
});

// Validation form
// Validate name
const validMarkUname = document.querySelector(".valid-mark-uname");
const invalidMarkUname = document.querySelector(".invalid-mark-uname");
const unameMess = document.querySelector(".uname-mess");
let validUname = 0;
function validateUname() {
  if (unameInput.value == "") {
    validMarkUname.style.display = "none";
    invalidMarkUname.style.display = "block";
    unameInput.classList.add("invalid-input");
    unameInput.classList.remove("valid-input");
    unameMess.classList.add("invalid-mess");
    unameMess.innerHTML = `
    <span class="vietnamese">Hãy nhập tên của bạn.</span>
    <span class="english">Please input your name.</span>
    `;
    unameMess.style.display = "block";
  } else {
    validMarkUname.style.display = "block";
    invalidMarkUname.style.display = "none";
    unameInput.classList.add("valid-input");
    unameInput.classList.remove("invalid-input");
    unameMess.style.display = "none";
    validUname = 1;
    return validUname;
  }
}
unameInput.addEventListener("blur", function () {
  validateUname();
});
unameInput.addEventListener("focus", function () {
  validMarkUname.style.display = "none";
  invalidMarkUname.style.display = "none";
});

// Validate email
const validMarkEmail = document.querySelector(".valid-mark-email");
const invalidMarkEmail = document.querySelector(".invalid-mark-email");
const emailInput = document.querySelector("#email");
const emailMess = document.querySelector(".email-mess");

let validEmail = 0;
function validateEmail() {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value == "") {
    validMarkEmail.style.display = "none";
    invalidMarkEmail.style.display = "block";
    emailInput.classList.add("invalid-input");
    emailInput.classList.remove("valid-input");
    emailMess.classList.add("invalid-mess");
    emailMess.innerHTML = `
    <span class="vietnamese">Hãy nhập email của bạn.</span>
    <span class="english">Please input your email.</span>
    `;
    emailMess.style.display = "block";
  } else if (!re.test(email.value)) {
    validMarkEmail.style.display = "none";
    invalidMarkEmail.style.display = "block";
    emailInput.classList.add("invalid-input");
    emailInput.classList.remove("valid-input");
    emailMess.classList.add("invalid-mess");
    emailMess.innerHTML = `
    <span class="vietnamese">Email không hợp lệ.</span>
    <span class="english">Email is not valid.</span>
    `;
    emailMess.style.display = "block";
  } else {
    validMarkEmail.style.display = "block";
    invalidMarkEmail.style.display = "none";
    emailInput.classList.add("valid-input");
    emailInput.classList.remove("invalid-input");
    emailMess.style.display = "none";
    validEmail = 1;
    return validEmail;
  }
}

emailInput.addEventListener("blur", function () {
  validateEmail();
});
emailInput.addEventListener("focus", function () {
  validMarkEmail.style.display = "none";
  invalidMarkEmail.style.display = "none";
});

// Validate phone number
const validMarkPhone = document.querySelector(".valid-mark-phone");
const invalidMarkPhone = document.querySelector(".invalid-mark-phone");
const phoneMess = document.querySelector(".phone-mess");

let validPhone = 0;
function validatePhone() {
  const re = /^[0-9\+]{1}[0-9]{9,11}$/;
  if (phoneInput.value == "") {
    validMarkPhone.style.display = "none";
    invalidMarkPhone.style.display = "block";
    phoneInput.classList.add("invalid-input");
    phoneInput.classList.remove("valid-input");
    phoneMess.classList.add("invalid-mess");
    phoneMess.innerHTML = `
    <span class="vietnamese">Hãy nhập số điện thoại của bạn.</span>
    <span class="english">Please input your phone.</span>
    `;
    phoneMess.style.display = "block";
  } else if (!re.test(phone.value)) {
    validMarkPhone.style.display = "none";
    invalidMarkPhone.style.display = "block";
    phoneInput.classList.add("invalid-input");
    phoneInput.classList.remove("valid-input");
    phoneMess.classList.add("invalid-mess");
    phoneMess.innerHTML = `
    <span class="vietnamese">Số điện thoại không hợp lệ.</span>
    <span class="english">Phone is not valid.</span>
    `;
    phoneMess.style.display = "block";
  } else {
    validMarkPhone.style.display = "block";
    invalidMarkPhone.style.display = "none";
    phoneInput.classList.add("valid-input");
    phoneInput.classList.remove("invalid-input");
    phoneMess.style.display = "none";
    validPhone = 1;
    return validPhone;
  }
}
phoneInput.addEventListener("blur", function () {
  validatePhone();
});
phoneInput.addEventListener("focus", function () {
  validMarkPhone.style.display = "none";
  invalidMarkPhone.style.display = "none";
});

const submitBtn = document.querySelector(".submit-btn");
const alertMess = document.querySelector(".alert-mess");
const comment = document.querySelector("#comment");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    unameInput.value == "" &&
    emailInput.value == "" &&
    phoneInput.value == ""
  ) {
    validateUname();
    validateEmail();
    validatePhone();
  } else if (!validUname) {
    validateUname();
  } else if (!validEmail) {
    validateEmail();
  } else if (!validPhone) {
    validatePhone();
  }
  if (validEmail && validPhone && validUname) {
    // console.log("ok");
    validEmail = 0;
    validUname = 0;
    validPhone = 0;
    unameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    comment.value = "";
    validMarkUname.style.display = "none";
    validMarkEmail.style.display = "none";
    validMarkPhone.style.display = "none";
    unameInput.classList.remove("valid-input");
    unameInput.classList.remove("invalid-input");
    emailInput.classList.remove("valid-input");
    emailInput.classList.remove("invalid-input");
    phoneInput.classList.remove("valid-input");
    phoneInput.classList.remove("invalid-input");
    alertMess.classList.add("show");
    setTimeout(function () {
      alertMess.classList.remove("show");
    }, 5000);
  }
});

// SUB NAV
$(function () {
  var link = $("#sub-nav a.dot");

  // Move to specific section when click on menu link
  link.on("click", function (e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
    $(".dot").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on("scroll", function () {
    scrNav();
  });
  $(document).ready(function () {
    scrNav();
  });

  // scrNav function
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $(".anchor").each(function () {
      var id = $(this).attr("id"),
        offset = $(this).offset().top - 50,
        height = $(this).height();
      if (sTop >= offset) {
        link.removeClass("active");
        $("#sub-nav")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  }
  scrNav();
});
