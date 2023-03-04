// VID 152.
// this is the menu array
// in the menu array i have a bunch of objects
// normally i wouls get the data externally not locally like i have down below.

// i get the data
// iterate over the data and decide what i want to display
// decide what kind of functionaility

// but the intial setup will be alittle diffrent once i learn AJAX.
// I WILL BE ABLE TO SETUP DATA REQUESTS AND GET DATA.

// I HAVE NOT COVERED THAT YET

// FIRST I NEED TO LEARN HOW TO DISPLAY ITEMS ON A SCREEN BECAUSE IT IS IMPORTANT IN JAVASCRIPT

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//  i start by selecting the section-center(parent element) 
// because the DOMContentLoaded was one of the events that
// i already used in the previous project(reviews js) where i had window add event listener
// (WHEN MY PAGE LOADS) then i had a callback function 

const sectionCenter = document.querySelector(".section-center")// i am accessing the section-center element

window.addEventListener("DOMContentLoaded",function (){// in the browser window i want my content to load right away.(DOMContentLoaded)
// let displayMenu = menuItems.map(function(item){
  displayMenuItems(menu)// passing in my menu array
// return `        <article class="menu-item">
// <img src=${item.img} class="photo" alt=${item.title} />
// <div class="item-info">
//   <header>
//     <h4>${item.title}</h4>
//     <h4 class="price">$${item.price}</h4>
//   </header>
//   <p class="item-text">${item.desc}</p>
// </div>
// </article>`;
// i created the html to return everything i have in my single item(menu-item)
// i modified what was in the array
// return item
/**looped over the array (iterated) then just said ok return the same item  */
})
// displayMenu = displayMenu.join("");
// sectionCenter.innerHTML = displayMenu;
//i am using the let variable which means i can OVERIDE IT(CHANGE) the displayMenu 
// I ADD .join method to turn the array in the console INTO A STRING(12:34)
// console.log(displayMenu)
// (13:02) since i have my big giant string i now add as my DATA.(LINE 116) by using innerHTML property
// });
// i setup map method and i need to iterate over the items and add html and place the array of objects
// in the html.
// MAP METHOD lets me MODIFY MY ARRAY


// (10:10) FROM LINE 100 TO 109 I AM returning the whole hardcoded <article>

// what do i need to do now?

// I NEED TO MAKE IT (DYNAMIC)
// HOW DO I DO THAT?

// i start accessing the variables and properties in my object


// review of everything above

// i have some kind of items(array of objects)

// i have to iterate over items

// decide what i want to return (what kind of info)

// for example the section-center specific html (line 100-109)

// then i joined everything together.join("")

// then placed it in the parent element 
// (section-center)

// the i used innerHTML property (line 116)

// then i assigned it to whatever i got back once i ran the 
// join method on my array.
// = displayMenu





// ==================================================================================



// VID.153 refactoring what is above
// i am setting up filtering to not REPEAT MYSELF i would just need to place 
// all of the functionaility in a function in order to setup filtering
// it would make sense if i set up the functionaility in a function.
// so i don't have to retype what is above

// as a parameter in a function ill pass in the array(menuItems).

// then grab everything that is inside the callback function(line 99 to line 116)



function displayMenuItems(menuItems) {
  let displayMenu = menu.map(function(item){
    return `        <article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

// next on line 99 i want to change instead of iterating over the menu array.

//  I want to iterate over the array that will pass in the function.

// (that means on line 99) i add the word Items to the menu.map array
// so its now menuItems.map array

// then i call my function in the DOMContentLoaded event listener
// displayMenuItems(menu)(line 100)
// i still pass in my menu array.

// MY FUNCTIONAILITY STILL WORKS WHICH MEANS EVERYTHING STAYS THE SAME.
// THE DIFFERENCE IS I CAN SETUP FILTERING AND BY REFACTORING AND ADDING THE FUNCTION
// IT WILL BE EASIER.

// BECAUSE I WILL HAVE MY FUNCTION AND DEPENDING ON THE SITUATION
// I WILL CALL MY FUNCTION AND I WILL NOT HAVE TO RETYPE WHAT IS IN MY
// displayMenu function.

// it will be a faster setup.

// for references in basic.js is the previous code from vid 152.
// incase i get confused also just rewatch the vids



// ==============================================================================================

// vid 155. FILTERING BUTTONS JS
// NOW I NEED TO SETUP THE FUNCTIONAILITY WHEN I CLICK ON THE BUTTONS 
// I DISPLAY SPECIFIC ITEMS.

// i need to select my filter buttons.

const filterBtns = document.querySelectorAll('.filter-btn')

/**i want to listen for the event for the buttons
 * THEN iterate over them for each and every one
 */

filterBtns.forEach(function(btn){// i am iterating over each and every button.
  btn.addEventListener('click',function(e){
    const category = e.currentTarget.dataset.id;
    // current target means the button i am clicking on.
    // the way the dataset property works is on the element we can add 
    // a attribute with a data prefix. 
    // example: line 27 in index.html. data i can call it whatever i want (id)
  const menuCategory = menu.filter(function(menuItem){
    // console.log(menuItem.category);
    if(menuItem.category === category) {
      return menuItem
    }
    // return if the item matches whatever i have in the category
  })
  // console.log(menuCategory);
  if(category === "all"){
    displayMenuItems(menu)
  }
  else{
    displayMenuItems(menuCategory)
  }
  })
})


// once i have assigned the id of the dataset to each label i put each 
// and every button in a variable.


// (6:34) now i use the filter array where i can filter out what 
// items are going to be left in the new array.
// i can filter out the array depending on what the value for my category is.
// create a new array LINE 248


