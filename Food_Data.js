fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function(res){
    return res.json();
}).then(function(data) {
       data.forEach(showProduct)
});

function showProduct(meal){
    console.log(meal)
    //2 clone template
    const template = document.querySelector("template").content;
    const myCopy = template.cloneNode(true);
    //3 change data
    myCopy.querySelector("h4").textContent = meal.name;
    console.log(meal.name)
    myCopy.querySelector("h2").textContent = meal.text;
    console.log(meal.shortdescription)
   /* myCopy.querySelector(".Profimaage").textContent = tweet.user.profile_image_url;
    console.log(tweet.text.user.profile_image_url)*/

    //4 append */
    const parentElement = document.querySelector("template");
    parentElement.appendChild(myCopy);
}


//make it work

//Look at the data

//can i navigate?

//can you get something in a template

//1Loop
/*
[] means for each
{} means .
*/
