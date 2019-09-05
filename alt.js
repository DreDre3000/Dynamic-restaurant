fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (res) {
        return res.json()
    }).then(function (data) {
        data.forEach(showProduct)
    })

function showProduct(meal) {
    console.log(meal)
    //2 clone template
    const template = document.querySelector("template").content;
    const myCopy = template.cloneNode(true);

    //3 change data
    //FoodName working :)
    myCopy.querySelector(".foodname").textContent = meal.name;
    console.log(meal.name)

    //Fooddesc working :)
    myCopy.querySelector(".fooddesc").textContent = meal.shortdescription;
    console.log(meal.shortdescription)

    //SoldOut option working :)
    myCopy.querySelector(".soldOut").textContent = meal.soldout;
    console.log(meal.soldout)

    //Food image not working :/
    myCopy.querySelector(".Long_description").textContent = meal.Longdescription;
    console.log(meal.Longdescription)

    //Food image working :)//Food image working :)
    myCopy.querySelector(".Food_img_data").textContent = meal.image;
    console.log(meal.image)

    //vegan working :)
    myCopy.querySelector(".veganOrNot").textContent = meal.vegetarian;
    console.log(meal.vegetarian)

    //Food price working :)
    myCopy.querySelector("h4").textContent = meal.price;
    console.log(meal.price)

    if (meal.discount) {
        myCopy.querySelector("h4").classList.add("discount_price");

        //Now I will calculate the price

        myCopy.querySelector(".discount_price").textContent =
            Math.round(meal.price - meal.discount / 100 * meal.price)
    } else {
        myCopy.querySelector(".discount_price").remove();
    }


    //Trying to add image to vegan image
    /*if (meal.vegetarian == true) {
        let imger = document.createElement('IMG');
        imger.setAttribute("src", "Icons/icons8-vegan-symbol-500.png")
        clone.appendChild(imger);
    }*/


    //Showing imgage after click
function showImage() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  document.body.appendChild(x);
}


    //4 append */
    const parentElement = document.querySelector("body");
    parentElement.appendChild(myCopy);
}





//REAL END!!!!



//make it work

//Look at the data

//can i navigate?

//can you get something in a template

//1Loop
/*
[] means for each
{} means .
*/
