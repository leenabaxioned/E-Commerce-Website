/* Author: */
//Ontoggle hamburger function starts here------------------------------------
var menu = document.querySelector(".nav-menu");
var menuItems = document.querySelectorAll(".nav-link");
var hamburger = document.querySelector(".hamburger");
var closeIcon = document.querySelector(".closeIcon");
var menuIcon = document.querySelector(".menuIcon");

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
//Ontoggle hamburger function ends here-----------------------------------------

var initializeSlick = (selector) => {
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
          infinite: true,
        },
      },
      {
        breakpoint: 995,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
        },
      },
    ],
  });
};

initializeSlick(".slide-area");
//Slick slider for arrival section images ends here-------------------------------------------

  
    //modal function starts here--------------------------------------------------------------------------
    var images = document.querySelectorAll(".open-modal-btn");
    // Get modal and modal image elements
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");

    // Function to open modal with clicked image
    function openModal(imgSrc) {
      modalImg.src = imgSrc; // Set the source of modal image
      modal.classList.remove("hide");
    }

    // Function to close modal
    function closeModal() {
      modal.classList.add("hide");
    }

    // Attach click event to each image
    images.forEach(function (img) {
      img.addEventListener("click", function () {
        var imgSrc = this.src;
        openModal(imgSrc);
      });
    });

    // Attach click event to close button in modal
    var closeBtn = document.querySelector(".close-modal-btn");
    closeBtn.addEventListener("click", function () {
      closeModal();
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
    //modal function ends here-----------------------------------------------------

$(document).ready(function () {
  var url = document.URL.split("/");
  var page = url[url.length - 1];

  //Slick slider for arrival section images starts here-------------------------------------------
  if (page === "index.html") {
    // index page functionalities

  } else if (page === "accessory.html") {
    //accessory page functionalities

    // Dropdown function starts here-----------------------------------------------
    var dropBtn1 = document.querySelector(".dropbtn");
    dropBtn1.addEventListener("click", function myFunction() {
      var dropbtn = document
        .querySelector(".dropdown-content")
        .classList.toggle("show");
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
    //Dropdown function ends here-----------------------------------------------

    //Filter price range according to accessories prices starts here-------------
    var inputMin = document.querySelector(".min");
    var inputMax = document.querySelector(".max");
    var main = document.querySelector("main");
    var products = document.querySelector(".filter-content");
    var accessory_list = document.querySelectorAll(".accessory-list");

    // Update the displayed min and max values as the user adjusts the range sliders
    document.querySelectorAll(".input").forEach(function (input) {
      input.addEventListener("mousemove", function () {
        document.querySelector(".low").textContent =
          "$" + inputMin.value + ".00";
        document.querySelector(".high").textContent =
          "$" + inputMax.value + ".00";
      });
    });

    // Apply button click event listener
    document.querySelector(".apply").addEventListener("click", function () {
      var minVal = parseInt(inputMin.value);
      var maxVal = parseInt(inputMax.value);
      var foundResult = false;

      // Loop through each accessory item
      accessory_list.forEach(function (element) {
        // Get the price range from the item's HTML
        var price_string_inner_html =
          element.querySelector(".accessories").innerHTML;
        var price_string = price_string_inner_html.split("-");

        // Parse and round the prices
        var price = parseInt(price_string[0].slice(1));
        var price2 = parseInt(price_string[1].slice(2));

        // Check if the item's price falls within the selected range
        if (price >= minVal && price2 <= maxVal) {
          element.style.display = "block";
          foundResult = true;
        } else {
          element.style.display = "none";
        }
      });

      // If no items are found within the selected range, display a message
      if (!foundResult) {
        var noResultDiv = document.createElement("div");
        noResultDiv.classList.add("no-result");
        noResultDiv.textContent = "No Accessories Found in this price range";

        // Remove any existing no-result message before appending
        var existingNoResult = main.querySelector(".no-result");
        if (existingNoResult) {
          products.removeChild(existingNoResult);
        }

        products.appendChild(noResultDiv);
      } else {
        // Remove any existing no-result message if results are found
        var existingNoResult = main.querySelector(".no-result");
        if (existingNoResult) {
          products.removeChild(existingNoResult);
        }
      }
    });
    // Filter price range according to accessories prices ends here---------------------

    // search based on 'gloves','helmet' keyword starts here-------------------------------
    function searchByModel(keyword) {
      var searchTerm = keyword.toLowerCase();
      var productItems = document.querySelectorAll(".accessory-list");

      productItems.forEach(function (item) {
        var h4 = item.querySelector("h4");
        if (h4) {
          var modelText = h4.textContent.toLowerCase();
          if (modelText.includes(searchTerm)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    }
    var searchInput = document.querySelector(".search");
    var buttonSubmit = document.querySelector(".submit-arrow");
    buttonSubmit.addEventListener("click", () => {
      searchByModel(searchInput.value);
    });
    // search based on 'gloves','helmet' keyword ends here-------------------------------
  } else if (page === "bicycle.html") {
    // bicycle page functionality

    // Dropdown function starts here-----------------------------------------------
    var dropBtn1 = document.querySelector(".dropbtn");
    dropBtn1.addEventListener("click", function myFunction() {
      var dropbtn = document
        .querySelector(".dropdown-content")
        .classList.toggle("show");
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
    // dropdown function ends here-------------------------------------------

    //search based on 'model a to z' keyword on bicycle page starts here------------------
    function searchByModel(keyword) {
      var searchTerm = keyword.toLowerCase();
      var productItems = document.querySelectorAll(".bicycle-list");

      productItems.forEach(function (item) {
        var h4 = item.querySelector("h4");
        if (h4) {
          var modelText = h4.textContent.toLowerCase();
          if (modelText.includes(searchTerm)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    }
    var searchInput = document.querySelector(".search");
    var buttonSubmit = document.querySelector(".submit-arrow");
    buttonSubmit.addEventListener("click", () => {
      searchByModel(searchInput.value);
    });
    //search based on 'model a to z' keyword on bicycle page ends here---------------------

    //bicycle filter price range function starts here--------------------------------------
    var inputMin = document.querySelector(".min");
    var inputMax = document.querySelector(".max");
    var main = document.querySelector("main");
    var products = document.querySelector(".filter-content");
    var bicycle_list = document.querySelectorAll(".bicycle-list");

    // Update the displayed min and max values as the user adjusts the range sliders
    document.querySelectorAll(".input").forEach(function (input) {
      input.addEventListener("input", function () {
        document.querySelector(".low").textContent =
          "$" + inputMin.value + ".00";
        document.querySelector(".high").textContent =
          "$" + inputMax.value + ".00";
      });
    });

    // Apply button click event listener
    document.querySelector(".apply").addEventListener("click", function () {
      var minVal = parseInt(inputMin.value);
      var maxVal = parseInt(inputMax.value);
      var foundResult = false;

      // Loop through each bicycle item
      bicycle_list.forEach(function (element) {
        var price_string_inner_html =
          element.querySelector(".bicycle-price").textContent;
        var price = parseFloat(price_string_inner_html.slice(1));

        // Check if the item's price falls within the selected range
        if (price >= minVal && price <= maxVal) {
          element.style.display = "block";
          foundResult = true;
        } else {
          element.style.display = "none";
        }
      });

      // If no items are found within the selected range, display a message
      if (!foundResult) {
        var noResultDiv = document.createElement("div");
        noResultDiv.classList.add("no-result");
        noResultDiv.textContent = "No Bicycles Found in this Price Range";

        // Remove any existing no-result message before appending
        var existingNoResult = main.querySelector(".no-result");
        if (existingNoResult) {
          products.removeChild(existingNoResult);
        }

        products.appendChild(noResultDiv);
      } else {
        // Remove any existing no-result message if results are found
        var existingNoResult = main.querySelector(".no-result");
        if (existingNoResult) {
          products.removeChild(existingNoResult);
        }
      }
    });
    //bicycle filter price range function ends here--------------------------------------
  } else if (page === "contact.html") {
    //contact page functionality

    // form validation starts here-------------------------------------------------------
    var fname = document.querySelector("#fname");
    var lname = document.querySelector("#lname");
    var email = document.querySelector("#email");
    var textarea = document.querySelector("#message");
    var fname_div = document.querySelector(".firstname");
    var lname_div = document.querySelector(".lastname");
    var email_div = document.querySelector(".email-id");
    var textarea_div = document.querySelector(".form-message");
    var form = document.querySelector("form");
    var button = document.querySelector(".send");
    var isAnyError = false;

    fname.addEventListener("keyup", (e) => {
      var fnameChild = document.querySelector(".firstname .errorMessage");
      fname_div.removeChild(fnameChild);
    });
    lname.addEventListener("keyup", (e) => {
      var lnameChild = document.querySelector(".lastname .errorMessage");
      lname_div.removeChild(lnameChild);
    });
    email.addEventListener("keyup", (e) => {
      var emailChild = document.querySelector(".email-id .errorMessage");
      email_div.removeChild(emailChild);
    });
    textarea.addEventListener("keyup", (e) => {
      var textAreaChild = document.querySelector(".form-message .errorMessage");
      textarea_div.removeChild(textAreaChild);
    });

    form.addEventListener("submit", (e) => {
      var regx_name = /^[a-zA-Z]{2,20}$/;
      var regx_email = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      span_content_name = "min-2 max-20 charachters with A-Z";
      span_content_email = "please enter valid email";
      //For first name
      if (fname_div.children.length == 1) {
        var span_fname = document.createElement("span");
        span_fname.classList.toggle("errorMessage");
        fname_div.appendChild(span_fname);
        addSpan(span_fname, fname, e, regx_name, span_content_name);
      } else {
        var span_fname = fname_div.children[1];
        addSpan(span_fname, fname, e, regx_name, span_content_name);
      }
      //For last name
      if (lname_div.children.length == 1) {
        var span_lname = document.createElement("span");
        span_lname.classList.toggle("errorMessage");
        lname_div.appendChild(span_lname);
        addSpan(span_lname, lname, e, regx_name, span_content_name);
      } else {
        var span_lname = lname_div.children[1];
        addSpan(span_lname, lname, e, regx_name, span_content_name);
      }
      // For email
      if (email_div.children.length == 1) {
        var span_email = document.createElement("span");
        span_email.classList.toggle("errorMessage");
        email_div.appendChild(span_email);
        addSpan(span_email, email, e, regx_email, span_content_email);
      } else {
        var span_email = email_div.children[1];
        addSpan(span_email, email, e, regx_email, span_content_email);
      }
      //For message
      if (textarea_div.children.length == 1) {
        var span_textarea = document.createElement("span");
        span_textarea.classList.toggle("errorMessage");
        textarea_div.appendChild(span_textarea);
        addSpanForTextarea(span_textarea, textarea, e);
      } else {
        var span_textarea = textarea_div.children[1];
        addSpanForTextarea(span_textarea, textarea, e);
      }
      // For validation
      function addSpan(span, input, e, regx, spanContent) {
        if (input.value === "") {
          span.innerHTML = "*This field is required";
          input.classList.add("input-border");
          isAnyError = true;
          e.preventDefault();
        } else if (regx.test(input.value)) {
          span.innerHTML = "";
          isAnyError = false;
          input.classList.remove("input-border");
        } else {
          span.innerHTML = spanContent;
          isAnyError = true;
          input.classList.add("input-border");
          e.preventDefault();
        }
      }

      if (!isAnyError) {
        fname.value = "";
        lname.value = "";
        email.value = "";
        textarea.value = "";
      }
    });

    function addSpanForTextarea(span, input, e) {
      if (input.value == "") {
        span.innerHTML = "This field is required";
        input.classList.add("input-border");
        e.preventDefault();
      } else {
        span.innerHTML = "";
        input.classList.remove("input-border");
      }
    }
    // form validation ends here-------------------------------------------------------
  }
});