"use strict";

/*home*/
var img_container = document.getElementById("img-container");
var homeMeals = document.getElementById("home-meals");
var API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
getdata();

function getdata() {
  var response, data, result;
  return regeneratorRuntime.async(function getdata$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(API));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          // console.log(data.meals)
          result = data.meals;
          showmeals(result);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showmeals(data) {
  var array_content;
  return regeneratorRuntime.async(function showmeals$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //   console.log(data);
          $("*").removeClass("d-none");
          $(".home").siblings(":not(.all)").addClass("d-none");
          $(".all .loading-screen").fadeOut(500);
          array_content = "";
          data.forEach(function (meal, i) {
            // console.log(meal);
            if (i < 20) {
              array_content += "\n                             <div class=\"col-lg-3\">\n                        <div class=\"box-container\" onclick=\"dataofmeal(".concat(meal.idMeal, ")\" >\n\n                                <div class=\"box\">\n                                    <img src=\"").concat(meal.strMealThumb, "\" alt=\"\">\n                                    <div class=\"content\">\n                                        <h3>").concat(meal.strMeal, "</h3>\n\n                                    </div>\n                                </div>\n\n                        </div>\n\n                </div>\n            ");
            }
          });
          homeMeals.innerHTML = array_content;

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}
/* search*/


function Searchpage() {
  $("*").removeClass("d-none");
  $(".search").siblings(":not(.all)").addClass("d-none");
  $("#searchName").keyup(function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            setTimeout(function _callee() {
              var searchResult, response, data, result;
              return regeneratorRuntime.async(function _callee$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      searchResult = $("#searchName").val();
                      _context3.next = 3;
                      return regeneratorRuntime.awrap(fetch(API + "".concat(searchResult)));

                    case 3:
                      response = _context3.sent;
                      _context3.next = 6;
                      return regeneratorRuntime.awrap(response.json());

                    case 6:
                      data = _context3.sent;
                      // console.log(data.meals)
                      result = data.meals;

                      if (!result) {
                        _context3.next = 15;
                        break;
                      }

                      $(".all .loading-screen").fadeIn(100);
                      _context3.next = 12;
                      return regeneratorRuntime.awrap(showContainer(result));

                    case 12:
                      $(".all .loading-screen").fadeOut(500);
                      _context3.next = 17;
                      break;

                    case 15:
                      console.log("error");
                      $(".all .loading-screen").fadeOut(500);

                    case 17:
                    case "end":
                      return _context3.stop();
                  }
                }
              });
            }, 2000);

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  setTimeout(function _callee4() {
    return regeneratorRuntime.async(function _callee4$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            $("#searchFirstLetter").keyup(function _callee3() {
              var searchResult, response, data, result;
              return regeneratorRuntime.async(function _callee3$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      searchResult = $("#searchFirstLetter").val(); //  console.log(searchResult.split("")[0]);
                      //  let finalResultFirstLetter = searchResult.toLowerCase().split("")[0];

                      _context5.next = 3;
                      return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + searchResult));

                    case 3:
                      response = _context5.sent;
                      _context5.next = 6;
                      return regeneratorRuntime.awrap(response.json());

                    case 6:
                      data = _context5.sent;
                      // console.log(data.meals)
                      result = data.meals;
                      $(".all .loading-screen").fadeIn(100);

                      if (!result) {
                        _context5.next = 15;
                        break;
                      }

                      _context5.next = 12;
                      return regeneratorRuntime.awrap(showContainer(result));

                    case 12:
                      $(".all .loading-screen").fadeOut(500);
                      _context5.next = 17;
                      break;

                    case 15:
                      console.log("error");
                      $(".all .loading-screen").fadeIn(100);

                    case 17:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            });

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    });
  }, 2000);
}

function showContainer(data) {
  var search_container, array_content;
  return regeneratorRuntime.async(function showContainer$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          search_container = document.getElementById("search-container");
          array_content = ""; // console.log(data)

          data.forEach(function (meal, i) {
            // console.log(meal);
            if (i < 20) {
              array_content += "\n                             <div class=\"col-lg-3\">\n                        <div class=\"box-container\" onclick=\"spacificdatasearch(".concat(meal.idMeal, ")\">\n\n                                <div class=\"box\">\n                                    <img src=\"").concat(meal.strMealThumb, "\" alt=\"\">\n                                    <div class=\"content\">\n                                        <h3>").concat(meal.strMeal, "</h3>\n\n                                    </div>\n                                </div>\n\n                        </div>\n\n                </div>\n            ");
            }
          });
          search_container.innerHTML = array_content;

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function spacificdatasearch(id) {
  var response, data, result;
  return regeneratorRuntime.async(function spacificdatasearch$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          // console.log(mealdatasearch);
          $("*").removeClass("d-none");
          $(".meal").siblings(":not(.all)").addClass("d-none");
          _context8.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(id)));

        case 4:
          response = _context8.sent;
          _context8.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context8.sent;
          // console.log(data.meals)
          result = data.meals;

          if (!result) {
            _context8.next = 16;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context8.next = 13;
          return regeneratorRuntime.awrap(showspacificmeal(result));

        case 13:
          $(".all .loading-screen").fadeOut(500);
          _context8.next = 18;
          break;

        case 16:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 18:
        case "end":
          return _context8.stop();
      }
    }
  });
}
/*eend search*/

/* categorypage*/


function CategoryPage() {
  var response, data, result;
  return regeneratorRuntime.async(function CategoryPage$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          $("*").removeClass("d-none");
          $(".category").siblings(":not(.all)").addClass("d-none");
          _context9.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/categories.php"));

        case 4:
          response = _context9.sent;
          _context9.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context9.sent;
          // console.log(data.meals)
          result = data.categories;

          if (!result) {
            _context9.next = 16;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context9.next = 13;
          return regeneratorRuntime.awrap(showCatContainer(result));

        case 13:
          $(".all .loading-screen").fadeOut(500);
          _context9.next = 18;
          break;

        case 16:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 18:
        case "end":
          return _context9.stop();
      }
    }
  });
}

function showCatContainer(data) {
  var catContainer, array_content;
  return regeneratorRuntime.async(function showCatContainer$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          catContainer = document.getElementById("catContainer");
          array_content = "";
          data.forEach(function (cat) {
            // console.log(meal);
            var strDescriptioncat = cat.strCategoryDescription || "";
            array_content += "\n                             <div class=\"col-lg-3\" >\n                        <div class=\"cat-container\" onclick=\"getCatRef('".concat(cat.strCategory, "')\">\n\n                                <div class=\"box\">\n                                    <img src=\"").concat(cat.strCategoryThumb, "\" alt=\"\">\n                                    <div class=\"content\" >\n                                        <h3>").concat(cat.strCategory, "</h3>\n                                        <p>").concat(strDescriptioncat.split(" ").splice(0, 8).join(" "), " <span style=\"color:red\"> more infomation </span></p>\n                                    \n\n                                    </div>\n                                </div>\n\n                        </div>\n\n                </div>\n            ");
          });
          catContainer.innerHTML = array_content;

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
}

function getCatRef(catname) {
  var response, data, result;
  return regeneratorRuntime.async(function getCatRef$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          $("*").removeClass("d-none");
          $(".home").siblings(":not(.all)").addClass("d-none");
          _context11.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(catname)));

        case 4:
          response = _context11.sent;
          _context11.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context11.sent;
          // console.log(data.meals)
          result = data.meals;

          if (!result) {
            _context11.next = 16;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context11.next = 13;
          return regeneratorRuntime.awrap(showmeals(result));

        case 13:
          $(".all .loading-screen").fadeOut(500);
          _context11.next = 18;
          break;

        case 16:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 18:
        case "end":
          return _context11.stop();
      }
    }
  });
}

function dataofmeal(id) {
  var response, data, result;
  return regeneratorRuntime.async(function dataofmeal$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          $("*").removeClass("d-none");
          $(".meal").siblings(":not(.all)").addClass("d-none");
          _context12.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(id)));

        case 4:
          response = _context12.sent;
          _context12.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context12.sent;
          // console.log(data.meals)
          result = data.meals;

          if (!result) {
            _context12.next = 16;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context12.next = 13;
          return regeneratorRuntime.awrap(showspacificmeal(result));

        case 13:
          $(".all .loading-screen").fadeOut(500);
          _context12.next = 18;
          break;

        case 16:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 18:
        case "end":
          return _context12.stop();
      }
    }
  });
}

function showspacificmeal(data) {
  var recipes, i, tagsDom, tags, _i, str;

  return regeneratorRuntime.async(function showspacificmeal$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          console.log(data);
          recipes = "";

          for (i = 1; i <= 20; i++) {
            if (data[0]["strIngredient".concat(i)]) {
              recipes += " <div class=\"recipe\">".concat(data[0]["strIngredient".concat(i)], "</div>");
            }
          } // let tagsDom = "";
          // for (let i = 1; i <= 20; i++) {
          //   if (data[0][`strMeasure${i}`]) {
          //     tagsDom += ` <div class="tag">${data[0][`strMeasure${i}`]}</div>`;
          //   }
          // }

          /*
          
          
          
          
          
          
          
          
            console.log(data[0].strTags);
            if (data[0].strTags == null) {
            let tagsDom = "";
            for (let i = 1; i <= 20; i++) {
              if (data[0][`strMeasure${i}`]) {
                tagsDom += ` <div class="tag">${data[0][`strMeasure${i}`]}</div>`;
              }
              }
            console.log(tagsDom);
          } else {
            let tags = data[0].strTags.split(",");
            let tagsDom = "";
            for (let i = 0; i < tags.length; i++) {
              tagsDom += `<div class="tag">${tags[i]}</div>`;
            }
             console.log(tagsDom);
          }
          
          
          
          
          
          
          
          
          
          
          */


          tagsDom = "";

          if (data[0].strTags === null) {
            tagsDom = " <div class=\"tag\">There is no Tags in this meal</div>";
          } else {
            tags = data[0].strTags.split(",");

            for (_i = 0; _i < tags.length; _i++) {
              tagsDom += "<div class=\"tag\">".concat(tags[_i], "</div>");
            }
          }

          str = "\n                     <div class=\"container\">\n        <div class=\"row justify-content-between \">\n          <div class=\"col-lg-4\" >\n            <div class=\"img-container\">\n              <img src=\"".concat(data[0].strMealThumb, "\" alt=\"\" srcset=\"\" />\n              <h3>").concat(data[0].strMeal, "</h3>\n            </div>\n          </div>\n          <div class=\"col-lg-8\">\n            <div class=\"meal-cap\">\n            <h2>Instructions</h2>\n            <p>\n             ").concat(data[0].strInstructions, "\n            </p>\n            <p><span>Area :</span>").concat(data[0].strArea, "</p>\n            <p><span>Category :").concat(data[0].strCategory, "</p>\n            <div class=\"recipes\">\n              <p>Recipes :</p>\n              <div id=\"recipes\">\n  \n              </div>\n            </div>\n\n            <div class=\"tags\">\n              <p>Tags :</p>\n              <div id=\"tags\">\n\n              </div>\n            </div>\n            <div class=\"button\">\n                 \t<a class=\"btn btn-success\" href=\"").concat(data[0].strSource, "\">Source</a>\n\t\t\t\t\t<a class=\"btn btn-danger\" href=\"").concat(data[0].strYoutube, "\">Youtub</a>\n            </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n                \n                \n                ");
          document.getElementById("meal").innerHTML = str;
          document.getElementById("recipes").innerHTML = recipes;
          document.getElementById("tags").innerHTML = tagsDom;

        case 9:
        case "end":
          return _context13.stop();
      }
    }
  });
}
/* end categorypage*/

/* start areapage*/


function AreaPage() {
  var response, data, result;
  return regeneratorRuntime.async(function AreaPage$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          $("*").removeClass("d-none");
          $(".area").siblings(":not(.all)").addClass("d-none");
          _context14.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list"));

        case 4:
          response = _context14.sent;
          _context14.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context14.sent;
          // console.log(data.meals)
          result = data.meals;

          if (!result) {
            _context14.next = 16;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context14.next = 13;
          return regeneratorRuntime.awrap(showArea(result));

        case 13:
          $(".all .loading-screen").fadeOut(500);
          _context14.next = 18;
          break;

        case 16:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 18:
        case "end":
          return _context14.stop();
      }
    }
  });
}

function showArea(data) {
  var area_container, array_content;
  return regeneratorRuntime.async(function showArea$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          area_container = document.getElementById("area-container");
          array_content = "";
          data.forEach(function (area) {
            // console.log(meal);
            array_content += "\n\n                    <div class=\"col-lg-3\">\n                    <div class=\"area-container\" onclick=\"areaSpacificFood('".concat(area.strArea, "')\">\n                       <i class=\"fa-solid fa-city\"></i>\n                       <h3>").concat(area.strArea, "</h3>\n                    </div>\n                </div>\n\n            ");
          });
          area_container.innerHTML = array_content;

        case 4:
        case "end":
          return _context15.stop();
      }
    }
  });
}

function areaSpacificFood(dataArea) {
  var response, data, result;
  return regeneratorRuntime.async(function areaSpacificFood$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=".concat(dataArea)));

        case 2:
          response = _context16.sent;
          _context16.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context16.sent;
          console.log(data.meals);
          result = data.meals;

          if (!result) {
            _context16.next = 15;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context16.next = 12;
          return regeneratorRuntime.awrap(showmeals(result));

        case 12:
          $(".all .loading-screen").fadeOut(500);
          _context16.next = 17;
          break;

        case 15:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 17:
        case "end":
          return _context16.stop();
      }
    }
  });
}
/* end  areapage*/

/* Ingredientspage*/


function IngredientsPage() {
  var response, data, result;
  return regeneratorRuntime.async(function IngredientsPage$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          $("*").removeClass("d-none");
          $(".gradient").siblings(":not(.all)").addClass("d-none");
          _context17.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list"));

        case 4:
          response = _context17.sent;
          _context17.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context17.sent;
          // console.log(data.meals)
          result = data.meals;

          if (!result) {
            _context17.next = 16;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context17.next = 13;
          return regeneratorRuntime.awrap(showIngradient(result));

        case 13:
          $(".all .loading-screen").fadeOut(500);
          _context17.next = 18;
          break;

        case 16:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 18:
        case "end":
          return _context17.stop();
      }
    }
  });
}

function showIngradient(data) {
  var ingradient, array_content;
  return regeneratorRuntime.async(function showIngradient$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          ingradient = document.getElementById("meal-ingradient");
          array_content = "";
          data.forEach(function (ingrad, i) {
            // console.log(meal);
            var strDescription = ingrad.strDescription || "";

            if (i < 20) {
              array_content += "\n\n                <div class=\"col-lg-3\">\n                    <div class=\"gradient-container\" onclick=\"IngradientSpacificFood('".concat(ingrad.strIngredient, "')\">\n                    <i class=\"fa-solid fa-utensils\"></i>\n                        <h3>").concat(ingrad.strIngredient, "</h3>\n                        <p>").concat(strDescription.split(" ").splice(0, 14).join(" "), "</p>\n                    </div>\n                </div>\n\n            ");
            }
          });
          ingradient.innerHTML = array_content;

        case 4:
        case "end":
          return _context18.stop();
      }
    }
  });
}

function IngradientSpacificFood(ingradientName) {
  var response, data, result;
  return regeneratorRuntime.async(function IngradientSpacificFood$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(ingradientName)));

        case 2:
          response = _context19.sent;
          _context19.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context19.sent;
          console.log(data.meals);
          result = data.meals;

          if (!result) {
            _context19.next = 15;
            break;
          }

          $(".all .loading-screen").fadeIn(100);
          _context19.next = 12;
          return regeneratorRuntime.awrap(showmeals(result));

        case 12:
          $(".all .loading-screen").fadeOut(500);
          _context19.next = 17;
          break;

        case 15:
          console.log("error");
          $(".all .loading-screen").fadeOut(500);

        case 17:
        case "end":
          return _context19.stop();
      }
    }
  });
}
/* ContactsPage*/


function ContactsPage() {
  $("*").removeClass("d-none");
  $(".contacts").siblings(":not(.all)").addClass("d-none");
  $("input").next().addClass("d-none");
  var Name_valid, Email_valid, Age_valid, Phone_valid, Password_valid, RePass_valid;
  $("#contact_name").keyup(function () {
    $("#contact_name").next().removeClass("d-none");
    var Namematches = $("#contact_name").val().match(/^[a-zA-Z\s]{1,}$/gm);

    if (Namematches && $("#contact_name").val() !== 0) {
      // console.log("true");
      $("#contact_name").addClass("is-valid");
      $("#contact_name").removeClass("is-invalid");
      $("#contact_name").next().hide();
      Name_valid = "ok";
    } else {
      // console.log("e");
      $("#contact_name").addClass("is-invalid");
      $("#contact_name").removeClass("is-valid");
      $("#contact_name").next().show();
      $("#contact_name").next().text("Special Characters and Numbers not allowed");
    }
  });
  $("#contact_email").keyup(function () {
    $("#contact_email").next().removeClass("d-none");
    var Emailmatches = $("#contact_email").val().match(/^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.[^\W_]{2,4})$/gm);

    if (Emailmatches && $("#contact_email").val() !== 0) {
      // console.log("true");
      $("#contact_email").addClass("is-valid");
      $("#contact_email").removeClass("is-invalid");
      $("#contact_email").next().hide();
      Email_valid = "ok";
    } else {
      // console.log("e");
      $("#contact_email").addClass("is-invalid");
      $("#contact_email").removeClass("is-valid");
      $("#contact_email").next().show();
      $("#contact_email").next().text("Enter valid email. *Ex: xxx@yyy.zzz ");
    }
  });
  $("#contact_phone").keyup(function () {
    $("#contact_phone").next().removeClass("d-none");
    var Phonematches = $("#contact_phone").val().match(/^[0-9]{11,}$/gm);

    if (Phonematches && $("#contact_phone").val() !== 0) {
      // console.log("true");
      $("#contact_phone").addClass("is-valid");
      $("#contact_phone").removeClass("is-invalid");
      $("#contact_phone").next().hide();
      Phone_valid = "ok";
    } else {
      // console.log("e");
      $("#contact_phone").addClass("is-invalid");
      $("#contact_phone").removeClass("is-valid");
      $("#contact_phone").next().show();
      $("#contact_phone").next().text("Enter valid Phone. *Ex:01062821903");
    }
  });
  $("#contact_age").keyup(function () {
    $("#contact_age").next().removeClass("d-none");
    var Agematches = $("#contact_age").val().match(/^[0-9]{1,2}$/gm);

    if (Agematches && $("#contact_age").val() !== 0) {
      // console.log("true");
      $("#contact_age").addClass("is-valid");
      $("#contact_age").removeClass("is-invalid");
      $("#contact_age").next().hide();
      Age_valid = "ok";
    } else {
      // console.log("e");
      $("#contact_age").addClass("is-invalid");
      $("#contact_age").removeClass("is-valid");
      $("#contact_age").next().show();
      $("#contact_age").next().text("Enter valid age. *35");
    }
  });
  $("#contact_password").keyup(function () {
    $("#contact_password").next().removeClass("d-none");
    var passmatches = $("#contact_password").val().match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm);

    if (passmatches && $("#contact_password").val() !== 0) {
      // console.log("true");
      $("#contact_password").addClass("is-valid");
      $("#contact_password").removeClass("is-invalid");
      $("#contact_password").next().hide();
      Password_valid = "ok"; // console.log("e");}else{}
    } else {
      $("#contact_password").addClass("is-invalid");
      $("#contact_password").removeClass("is-valid");
      $("#contact_password").next().show();
      $("#contact_password").next().text("Minimum eight characters, at least one letter, one number and one special character:");
    }
  });
  $("#contact_repassword").keyup(function () {
    $("#contact_repassword").next().removeClass("d-none");
    var repassmatches = $("#contact_password").val() === $("#contact_repassword").val();

    if (repassmatches && $("#contact_repassword").val() !== 0) {
      // console.log("true");
      $("#contact_repassword").addClass("is-valid");
      $("#contact_repassword").removeClass("is-invalid");
      $("#contact_repassword").next().hide();
      RePass_valid = "ok";
    } else {
      // console.log("e");
      $("#contact_repassword").addClass("is-invalid");
      $("#contact_repassword").removeClass("is-valid");
      $("#contact_repassword").next().show();
      $("#contact_repassword").next().text("Password Not Matched Please Try Again");
    }
  });
  $("#abdallah").click(function () {
    var contactName = document.getElementById("contact_name");
    var contactEmail = document.getElementById("contact_email");
    var contactPassword = document.getElementById("contact_password");
    var contactphone = document.getElementById("contact_phone");
    var contactsage = document.getElementById("contact_age");

    if (!(Name_valid === "ok" && Email_valid === "ok" && Password_valid === "ok" && Age_valid === "ok" && Phone_valid === "ok" && RePass_valid === "ok")) {
      // console.log("e");
      $("#submit").prop("disabled", true);
      $("#submit").val("disabled");
      $("#submit").css({
        backgroundColor: "#9E403A",
        color: "White",
        transition: "all 1s"
      });
    } else {
      // console.log("true");
      // $("#submit").removeAttr('disabled');
      $("#submit").prop("disabled", false);
      $("#submit").val("Submit");
      $("#submit").css({
        backgroundColor: "#6E9E3A",
        color: "White",
        cursor: "pointer",
        transition: "all 1s"
      });
      var formdata = JSON.parse(localStorage.getItem("formdata")) || [];
      var emails_data = "";

      for (var index = 0; index < formdata.length; index++) {
        emails_data += formdata[index].emails + "-";
      }

      console.log(emails_data.split("-"));
      var emails_arr = emails_data.split("-") || [];

      if (emails_arr.includes(contactEmail.value)) {
        contactEmail.value = "";
        alert('you must change email ,email you wrote is exist');
      } else {
        formdata.push({
          names: contactName.value,
          emails: contactEmail.value,
          password: contactPassword.value,
          phone: contactphone.value,
          age: contactsage.value
        });
        localStorage.setItem("formdata", JSON.stringify(formdata));
        restForm();
        setTimeout(function () {
          window.location = "index.html";
        }, 2000);
      } // console.log("true");

    }
  });
}

function restForm() {
  $("#contact_password").val("");
  $("#contact_repassword").val("");
  $("#contact_age").val("");
  $("#contact_phone").val("");
  $("#contact_name").val("");
  $("#contact_email").val("");
  $("#contact_repassword").removeClass("is-valid");
  $("#contact_password").removeClass("is-valid");
  $("#contact_age").removeClass("is-valid");
  $("#contact_phone").removeClass("is-valid");
  $("#contact_name").removeClass("is-valid");
  $("#contact_email").removeClass("is-valid");
}
/*to prevent user to make another character in field of search*/


function validate(input) {
  input.value = input.value.replace(/\W|\d/g, "").substr(0, 1).toUpperCase();
}