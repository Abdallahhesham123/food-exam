/*home*/
let img_container = document.getElementById("img-container");

let homeMeals = document.getElementById("home-meals");
let API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
getdata();
async function getdata() {
  let response = await fetch(API);
  let data = await response.json();
  // console.log(data.meals)
  let result = data.meals;

  showmeals(result);
}

async function showmeals(data) {
  //   console.log(data);
  $("*").removeClass("d-none");
  $(".home").siblings(":not(.all)").addClass("d-none");
  $(".all .loading-screen").fadeOut(500);

  let array_content = "";
  data.forEach((meal ,i) => {
    // console.log(meal);
    if (i < 20) {
  
    array_content += `
                             <div class="col-lg-3">
                        <div class="box-container" onclick="dataofmeal(${meal.idMeal})" >

                                <div class="box">
                                    <img src="${meal.strMealThumb}" alt="">
                                    <div class="content">
                                        <h3>${meal.strMeal}</h3>

                                    </div>
                                </div>

                        </div>

                </div>
            `;
      
}

  });

  homeMeals.innerHTML = array_content;
}

/* search*/

function Searchpage() {
  $("*").removeClass("d-none");
  $(".search").siblings(":not(.all)").addClass("d-none");

  $("#searchName").keyup(async function () {


    setTimeout(async() => {
  
    let searchResult = $("#searchName").val();
    let response = await fetch(API + `${searchResult}`);
    let data = await response.json();
    // console.log(data.meals)
    let result = data.meals;
    if (result) {
      $(".all .loading-screen").fadeIn(100);
      await showContainer(result);
      $(".all .loading-screen").fadeOut(500);
    } else {
      console.log("error");
      $(".all .loading-screen").fadeOut(500);
    }
  
}, 2000);


  });
   setTimeout(async () => {
     $("#searchFirstLetter").keyup(async function () {
       let searchResult = $("#searchFirstLetter").val();
      //  console.log(searchResult.split("")[0]);
      //  let finalResultFirstLetter = searchResult.toLowerCase().split("")[0];
       let response = await fetch(
         "https://www.themealdb.com/api/json/v1/1/search.php?f=" + searchResult
       );
       let data = await response.json();
       // console.log(data.meals)
       let result = data.meals;
        $(".all .loading-screen").fadeIn(100);
       if (result) {
         await showContainer(result);
         $(".all .loading-screen").fadeOut(500);
       } else {
         console.log("error");
            $(".all .loading-screen").fadeIn(100);
       }
     });
   }, 2000);
}

async function showContainer(data) {
  let search_container = document.getElementById("search-container");
  let array_content = "";
  // console.log(data)
  data.forEach((meal, i) => {
    // console.log(meal);
    if (i < 20) {
      array_content += `
                             <div class="col-lg-3">
                        <div class="box-container" onclick="spacificdatasearch(${meal.idMeal})">

                                <div class="box">
                                    <img src="${meal.strMealThumb}" alt="">
                                    <div class="content">
                                        <h3>${meal.strMeal}</h3>

                                    </div>
                                </div>

                        </div>

                </div>
            `;
    }
  });

  search_container.innerHTML = array_content;
}



async function spacificdatasearch(id) {
  
  // console.log(mealdatasearch);

    $("*").removeClass("d-none");
  $(".meal").siblings(":not(.all)").addClass("d-none");

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let data = await response.json();
  // console.log(data.meals)
  let result = data.meals;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showspacificmeal(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

/*eend search*/

/* categorypage*/
async function CategoryPage() {
  $("*").removeClass("d-none");
  $(".category").siblings(":not(.all)").addClass("d-none");

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await response.json();
  // console.log(data.meals)
  let result = data.categories;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showCatContainer(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

async function showCatContainer(data) {
  let catContainer = document.getElementById("catContainer");
  let array_content = "";

    
  data.forEach((cat) => {
    // console.log(meal);
  const strDescriptioncat = cat.strCategoryDescription || "";
    array_content += `
                             <div class="col-lg-3" >
                        <div class="cat-container" onclick="getCatRef('${
                          cat.strCategory
                        }')">

                                <div class="box">
                                    <img src="${cat.strCategoryThumb}" alt="">
                                    <div class="content" >
                                        <h3>${cat.strCategory}</h3>
                                        <p>${strDescriptioncat
                                          .split(" ")
                                          .splice(0, 8)
                                          .join(" ")} <span style="color:red"> more infomation </span></p>
                                    

                                    </div>
                                </div>

                        </div>

                </div>
            `;
  });

  catContainer.innerHTML = array_content;
}

async function getCatRef(catname) {
  $("*").removeClass("d-none");
  $(".home").siblings(":not(.all)").addClass("d-none");

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${catname}`
  );
  let data = await response.json();
  // console.log(data.meals)
  let result = data.meals;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showmeals(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

async function dataofmeal(id) {
  $("*").removeClass("d-none");
  $(".meal").siblings(":not(.all)").addClass("d-none");

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let data = await response.json();
  // console.log(data.meals)
  let result = data.meals;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showspacificmeal(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

async function showspacificmeal(data) {
  console.log(data);

  let recipes = "";
  for (let i = 1; i <= 20; i++) {
    if (data[0][`strIngredient${i}`]) {
      recipes += ` <div class="recipe">${data[0][`strIngredient${i}`]}</div>`;
    }
  }


   let tagsDom = "";
  if (data[0].strTags === null) {
   
        tagsDom = ` <div class="tag">There is no Tags in this meal</div>`;

  } else {
    
  let tags = data[0].strTags.split(",");
 
  for (let i = 0; i < tags.length; i++) {
    tagsDom += `<div class="tag">${tags[i]}</div>`;
  }

  }



  let str = `
                     <div class="container">
        <div class="row justify-content-between ">
          <div class="col-lg-4" >
            <div class="img-container">
              <img src="${data[0].strMealThumb}" alt="" srcset="" />
              <h3>${data[0].strMeal}</h3>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="meal-cap">
            <h2>Instructions</h2>
            <p>
             ${data[0].strInstructions}
            </p>
            <p><span>Area :</span>${data[0].strArea}</p>
            <p><span>Category :${data[0].strCategory}</p>
            <div class="recipes">
              <p>Recipes :</p>
              <div id="recipes">
  
              </div>
            </div>

            <div class="tags">
              <p>Tags :</p>
              <div id="tags">

              </div>
            </div>
            <div class="button">
                 	<a class="btn btn-success" href="${data[0].strSource}">Source</a>
					<a class="btn btn-danger" href="${data[0].strYoutube}">Youtub</a>
            </div>
            </div>

          </div>
        </div>
      </div>
                
                
                `;
  document.getElementById("meal").innerHTML = str;
  document.getElementById("recipes").innerHTML = recipes;
  document.getElementById("tags").innerHTML = tagsDom;
}

/* end categorypage*/

/* start areapage*/
async function AreaPage() {
  $("*").removeClass("d-none");
  $(".area").siblings(":not(.all)").addClass("d-none");

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let data = await response.json();
  // console.log(data.meals)
  let result = data.meals;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showArea(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

async function showArea(data) {
  let area_container = document.getElementById("area-container");
  let array_content = "";
  data.forEach((area) => {
    // console.log(meal);

    array_content += `

                    <div class="col-lg-3">
                    <div class="area-container" onclick="areaSpacificFood('${area.strArea}')">
                       <i class="fa-solid fa-city"></i>
                       <h3>${area.strArea}</h3>
                    </div>
                </div>

            `;
  });

  area_container.innerHTML = array_content;
}

async function areaSpacificFood(dataArea) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${dataArea}`
  );
  let data = await response.json();
  console.log(data.meals);
  let result = data.meals;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showmeals(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

/* end  areapage*/

/* Ingredientspage*/
async function IngredientsPage() {
  $("*").removeClass("d-none");
  $(".gradient").siblings(":not(.all)").addClass("d-none");

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let data = await response.json();
  // console.log(data.meals)
  let result = data.meals;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showIngradient(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

async function showIngradient(data) {
  let ingradient = document.getElementById("meal-ingradient");
  let array_content = "";
  data.forEach((ingrad, i) => {
    // console.log(meal);
    const strDescription = ingrad.strDescription || "";

    if (i < 20) {
      array_content += `

                <div class="col-lg-3">
                    <div class="gradient-container" onclick="IngradientSpacificFood('${
                      ingrad.strIngredient
                    }')">
                    <i class="fa-solid fa-utensils"></i>
                        <h3>${ingrad.strIngredient}</h3>
                        <p>${strDescription
                          .split(" ")
                          .splice(0, 14)
                          .join(" ")}</p>
                    </div>
                </div>

            `;
    }
  });

  ingradient.innerHTML = array_content;
}

async function IngradientSpacificFood(ingradientName) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingradientName}`
  );
  let data = await response.json();
  console.log(data.meals);
  let result = data.meals;
  if (result) {
    $(".all .loading-screen").fadeIn(100);
    await showmeals(result);
    $(".all .loading-screen").fadeOut(500);
  } else {
    console.log("error");
    $(".all .loading-screen").fadeOut(500);
  }
}

/* ContactsPage*/
function ContactsPage() {
  $("*").removeClass("d-none");
  $(".contacts").siblings(":not(.all)").addClass("d-none");
  $("input").next().addClass("d-none")

let Name_valid, Email_valid, Age_valid ,Phone_valid ,Password_valid , RePass_valid; 

  $("#contact_name").keyup(function () {
  $("#contact_name").next().removeClass("d-none")
let Namematches = $("#contact_name")
  .val()
  .match(/^[a-zA-Z\s]{1,}$/gm);

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



}) 


  
  
  $("#contact_email").keyup(function () {
        $("#contact_email").next().removeClass("d-none");
      let Emailmatches = $("#contact_email")
        .val()
        .match(/^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.[^\W_]{2,4})$/gm);

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
        let Phonematches = $("#contact_phone")
          .val()
          .match(/^[0-9]{11,}$/gm);

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
          let Agematches = $("#contact_age")
            .val()
            .match(/^[0-9]{1,2}$/gm);

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
            let passmatches = $("#contact_password")
              .val()
              .match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm);

            if (passmatches && $("#contact_password").val() !== 0) {
              // console.log("true");

              $("#contact_password").addClass("is-valid");
              $("#contact_password").removeClass("is-invalid");
              $("#contact_password").next().hide();
              Password_valid = "ok";
              // console.log("e");}else{}
            } else {
              
           
              $("#contact_password").addClass("is-invalid");
              $("#contact_password").removeClass("is-valid");
              $("#contact_password").next().show();
              $("#contact_password")
                .next()
                .text(
                  "Minimum eight characters, at least one letter, one number and one special character:"
                );
            }
          }); 
  
  $("#contact_repassword").keyup(function () {
               $("#contact_repassword").next().removeClass("d-none");
              let repassmatches = $("#contact_password").val()===$("#contact_repassword").val(); 
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
              $("#contact_repassword")
                .next()
                .text(
                  "Password Not Matched Please Try Again"
                );
            }

            }); 
  
  $("#abdallah").click(function () {
  
    let contactName = document.getElementById("contact_name");
    let contactEmail = document.getElementById("contact_email");
    let contactPassword = document.getElementById("contact_password");
        let contactphone = document.getElementById("contact_phone");
        let contactsage = document.getElementById("contact_age");
  if (
    !(
      Name_valid === "ok" &&
      Email_valid === "ok" &&
      Password_valid === "ok" &&
      Age_valid === "ok" &&
      Phone_valid === "ok" &&
      RePass_valid === "ok"
    )
  ) {
    // console.log("e");
    $("#submit").prop("disabled", true);
    $("#submit").val("disabled");
             $("#submit").css({
               backgroundColor: `#9E403A`,
               color :`White`,
               transition: "all 1s",
             });

  } else {
    // console.log("true");
    // $("#submit").removeAttr('disabled');
    $("#submit").prop("disabled", false);
    $("#submit").val("Submit");
                 $("#submit").css({
                   backgroundColor: `#6E9E3A`,
                   color: `White`,
                   cursor:`pointer`,
                   transition: "all 1s",
                 });

    let formdata = JSON.parse(localStorage.getItem("formdata")) || [];

    let emails_data = "";

    for (let index = 0; index < formdata.length; index++) {
      emails_data += formdata[index].emails + "-";
    }

    console.log(emails_data.split("-"));
    let emails_arr = emails_data.split("-") || [];

    if (emails_arr.includes(contactEmail.value)) {
      contactEmail.value = "";

      alert('you must change email ,email you wrote is exist')
    } else {
      formdata.push({
        names: contactName.value,
        emails: contactEmail.value,
        password: contactPassword.value,
        phone: contactphone.value,
        age: contactsage.value,
      });
      localStorage.setItem("formdata", JSON.stringify(formdata));
      restForm();

      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    }
    // console.log("true");
  }

      
});
}

function restForm() {
  
  $("#contact_password").val("")
  $("#contact_repassword").val("")
  $("#contact_age").val("")
  $("#contact_phone").val("")
  $("#contact_name").val("")
  $("#contact_email").val("")
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
