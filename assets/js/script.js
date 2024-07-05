/* Author: */
// Slick slider for arrival section images-------------------------------------------
$(document).ready(function () {
    const initializeSlick = (selector) => {
      $(selector).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  arrows: true,
                  infinite: true
              }
          },
          {
              breakpoint: 995,
              settings: {
                  arrows: true,
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },
          {
              breakpoint: 776,
              settings: {
                  arrows: true,
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 640,
              settings: {
                  arrows: true,
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  arrows: true,
              }
          },
          {
              breakpoint: 375,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  arrows: true,
              }
          }
      ]
      });
    };

    initializeSlick(".slide-area");
});

// Ontoggle hamburger function starts here------------------------------------
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
// Ontoggle hamburger function ends here-----------------------------------

// modal function--------------------------------------------------------------------------
var images = document.querySelectorAll('.open-modal-btn');

// Get modal and modal image elements
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');

// Function to open modal with clicked image
function openModal(imgSrc) {
  modalImg.src = imgSrc; // Set the source of modal image
  modal.classList.remove('hide'); // Display the modal
}

// Function to close modal
function closeModal() {
  modal.classList.add('hide');
}

// Attach click event to each image
images.forEach(function(img) {
  img.addEventListener('click', function() {
    var imgSrc = this.src; 
    openModal(imgSrc);
  });
});

// Attach click event to close button in modal
var closeBtn = document.querySelector('.close-modal-btn');
closeBtn.addEventListener('click', function() {
  closeModal();
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});


// Dropdown function-----------------------------------------------
  var dropBtn1 = document.querySelector(".dropbtn");
  dropBtn1.addEventListener("click", function myFunction() {
    var dropbtn = document.querySelector(".dropdown-content").classList.toggle("show");
    // Close the dropdown if the user clicks outside of it
  dropbtn.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var dropdownContent = document.querySelector(".dropdown-content");
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  };
  });


// form validation-----------------------------------------------------------
// let fname = document.querySelector("#fname");
// let lname = document.querySelector("#lname");
// let email = document.querySelector("#email");
// let textarea = document.querySelector("#message");
// let fname_div = document.querySelector(".firstname");
// let lname_div = document.querySelector(".lastname");
// let email_div = document.querySelector(".email-id");
// let textarea_div = document.querySelector(".form-message");
// let form = document.querySelector("form");
// let button = document.querySelector(".send");
// form.addEventListener("submit", (e) => {
//   let regx_name = /^[a-zA-Z]{2,20}$/;
//   let regx_email = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   span_content_name = "min-2 max-20 charachters with A-Z";
//   span_content_email = "please enter valid email";
//   //For first name
//   if (fname_div.children.length == 1) {
//     let span_fname = document.createElement("span");
//     span_fname.classList.toggle("div-span");
//     fname_div.appendChild(span_fname);
//     addSpan(span_fname, fname, e, regx_name, span_content_name);
//   } else {
//     let span_fname = fname_div.children[1];
//     addSpan(span_fname, fname, e, regx_name, span_content_name);
//   }
//   //For last name
//   if (lname_div.children.length == 1) {
//     let span_lname = document.createElement("span");
//     span_lname.classList.toggle("div-span");
//     lname_div.appendChild(span_lname);
//     addSpan(span_lname, lname, e, regx_name, span_content_name);
//   } else {
//     let span_lname = lname_div.children[1];
//     addSpan(span_lname, lname, e, regx_name, span_content_name);
//   }
//   // For email
//   if (email_div.children.length == 1) {
//     let span_email = document.createElement("span");
//     span_email.classList.toggle("div-span");
//     email_div.appendChild(span_email);
//     addSpan(span_email, email, e, regx_email, span_content_email);
//   } else {
//     let span_email = email_div.children[1];
//     addSpan(span_email, email, e, regx_email, span_content_email);
//   }
//   //For textarea
//   if (textarea_div.children.length == 1) {
//     let span_textarea = document.createElement("span");
//     span_textarea.classList.toggle("div-span");
//     textarea_div.appendChild(span_textarea);
//     addSpanForTextarea(span_textarea, textarea, e);
//   } else {
//     let span_textarea = textarea_div.children[1];
//     addSpanForTextarea(span_textarea, textarea, e);
//   }
//   // For validation
//   function addSpan(span, input, e, regx, spanContent) {
//     if (input.value === "") {
//       span.innerHTML = "*This field is required";
//       input.classList.add("input-border");
//       e.preventDefault();
//     } else if (regx.test(input.value)) {
//       span.innerHTML = "";
//       input.classList.remove("input-border");
//     } else {
//       span.innerHTML = spanContent;
//       input.classList.add("input-border");
//       e.preventDefault();
//     }
//   }
// });
// function addSpanForTextarea(span, input, e) {
//   if (input.value == "") {
//     span.innerHTML = "This field is required";
//     input.classList.add("input-border");
//     e.preventDefault();
//   } else {
//     span.innerHTML = "";
//     input.classList.remove("input-border");
//   }
// }


// Function to perform search based on 'model' keyword-------------------------------
// function searchByModel(keyword) {
//   var searchTerm = keyword.toLowerCase();
//   var productItems = document.querySelectorAll('.accessory-list');
//   productItems.forEach(function(item) {
//       var h4 = item.querySelector('h4');
//       if (h4) {
//           var modelText = h4.textContent.toLowerCase();
//           if (modelText.includes(searchTerm)) {
//               item.style.display = 'block';
//           } else {
//               item.style.display = 'none';
//           }
//       }
//   });
// }
//  var searchInput = document.querySelector('.search');
//  var buttonSubmit = document.querySelector('.submit-arrow');
// buttonSubmit.addEventListener("click",()=>{
//   searchByModel(searchInput.value);
// })
// ---------------------------------------------------------------------------------------



// filter according to price-------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//   let inputMin = document.querySelector(".min");
//   let inputMax = document.querySelector(".max");
//   let main = document.querySelector("main");
//   let shoes_list = document.querySelectorAll(".accessory-list");

//   document.querySelectorAll('.input').forEach(function (input) {
//       input.addEventListener('mousemove', function () {
//           document.querySelector(".low").textContent = inputMin.value;
//           document.querySelector(".high").textContent = inputMax.value;
//           if (parseInt(inputMin.value) + 15 > parseInt(inputMax.value)) {
//               input.disabled = true;
//           } else {
//               input.disabled = false;
//           }
//       });
//   });

//   document.querySelector('.apply').addEventListener('click', function () {

//       let minVal = parseInt(inputMin.value);
//       let maxVal = parseInt(inputMax.value);
//       let foundResult = false;

//       shoes_list.forEach(function (element) {
//           element.style.display = 'none'; 
//           let price_string_inner_html= element.children[0].children[1].children[3].innerHTML;
//           let price_string = price_string_inner_html.split("-");
          
//           let price = Math.round(price_string[0].slice(1))
//           let price2 = Math.round(price_string[1].slice(2))
//           


//           if (price <= minVal && price2 >= maxVal) {
//               element.style.display = 'block';
//               foundResult = true;
//           }
//       });

//       if (!foundResult) {
//           let Div = document.createElement("div");
//           Div.classList.add("no-result");
//           Div.textContent = "No Result Found";
//           main.appendChild(Div);
//       }
//   });
// });
