// VID 152.
// this is the menu array
// in the menu array i have a bunch of objects
// normally i wouls get the data externally not locally like i have down below.

// i get the data
// iterate over the data and decide what i want to display
// decide what kind of functionaility

// but the intial setup will be a little diffrent once i learn AJAX.
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
  {
    id: 10,
    title: "Steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }

];

//  i start by selecting the section-center(parent element) 
// because the DOMContentLoaded was one of the events that
// i already used in the previous project(reviews js) where i had window add event listener
// (WHEN MY PAGE LOADS) then i had a callback function 

const sectionCenter = document.querySelector(".section-center")// i am accessing the section-center element

window.addEventListener("DOMContentLoaded",function (){// in the browser window i want my content to load right away.(DOMContentLoaded)
// let displayMenu = menuItems.map(function(item){
  displayMenuItems(menu)// passing in my menu array
  displayMenuButtons();
  // const categories = menu.reduce(function(values,item){
  //   if(!values.includes(item.category)){
  //     values.push(item.category);
  //   }
  //   return values
  // },['all']
  // );
  // const categoryBtns = categories.map(function(category){
  //   return`<button class="filter-btn" type="button"
  //    data-id=${category}>
  //    ${category}
  //    </button>`
  // })
  // .join("");
  // container.innerHTML = categoryBtns;// ADDED THE BUTTONS
  // const filterBtns = document.querySelectorAll('.filter-btn')
  //    // filtering items
  //    filterBtns.forEach(function(btn){// i am iterating over each and every button.
  //     btn.addEventListener('click',function(e){
  //       const category = e.currentTarget.dataset.id;
  //       // current target means the button i am clicking on.
  //       // the way the dataset property works is on the element we can add 
  //       // a attribute with a data prefix. 
  //       // example: line 27 in index.html. data i can call it whatever i want (id)
  //       const menuCategory = menu.filter(function(menuItem){
  //         // console.log(menuItem.category);
  //         if(menuItem.category === category) {
  //           return menuItem
  //         }
  //         // return if the item matches whatever i have in the category
  //         // once i have assigned the id of the dataset to each label i put each 
  //         // and every button in a variable.
          
          
  //         // (6:34) now i use the filter array where i can filter out what 
  //         // items are going to be left in the new array.
  //         // i can filter out the array depending on what the value for my category is.
  //         // create a new array LINE 248
  //       })
  //       // console.log(menuCategory);
  //       // all button down below
  //       if(category === "all"){
  //         displayMenuItems(menu)//if the category is all i will display my menu items with my MENU array
  //         // (the original array) menu line 17
  //       }
  //       else{
  //         displayMenuItems(menuCategory)//however if the category is not all but
  //         // breakfast,lunch,or shakes then i will run displayMenuItems(menuCategory)
  //         // SINCE THAT IS MY NEW ARRAY.
  //       }
  //     })
  //   })
    // EVERYTHING ENDING WITH ARTICLE IS 
    // BEFORE LINE 158 FIGURE OUT WHAT VID IF I COME BACK TO THIS LATER.
    // =============================================================================
  // console.log(categoryBtns);
  // console.log(categories) --got rid of this vid 158. 
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
  let displayMenu = menuItems.map(function(item){
    return ` <article class="menu-item">
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
    
    
    // const filterBtns = document.querySelectorAll('.filter-btn')--before VID 158. 
    const container = document.querySelector(".btn-container");// this for vid 158.
    // i selected my button container
    
    /**i want to listen for the event for the buttons
     * THEN iterate over them for each and every one
    */
   
   
  //  // filtering items
  //  filterBtns.forEach(function(btn){
  //   // i am iterating over each and every button.
  //   btn.addEventListener('click',function(e){
  //     const category = e.currentTarget.dataset.id;
  //     // current target means the button i am clicking on.
  //     // the way the dataset property works is on the element we can add 
  //     // a attribute with a data prefix. 
  //     // example: line 27 in index.html. data i can call it whatever i want (id)
  //     const menuCategory = menu.filter(function(menuItem){
  //       // console.log(menuItem.category);
  //       if(menuItem.category === category) {
  //         return menuItem
  //       }
  //       // return if the item matches whatever i have in the category
  //       // once i have assigned the id of the dataset to each label i put each 
  //       // and every button in a variable.
        
        
  //       // (6:34) now i use the filter array where i can filter out what 
  //       // items are going to be left in the new array.
  //       // i can filter out the array depending on what the value for my category is.
  //       // create a new array LINE 248
  //     })
  //     // console.log(menuCategory);
  //     // all button down below
  //     if(category === "all"){
  //       displayMenuItems(menu)//if the category is all i will display my menu items with my MENU array
  //       // (the original array) menu line 17
  //     }
  //     else{
  //       displayMenuItems(menuCategory)//however if the category is not all but
  //       // breakfast,lunch,or shakes then i will run displayMenuItems(menuCategory)
  //       // SINCE THAT IS MY NEW ARRAY.
  //     }
  //   })
  // })
  
  
  
  
  // ===================================================================================
  
  // VID 156. Dynamically filter buttons
  
  // COMMENT OUT THE BUTTONS IN index.html.
  // ALSO COMMENTED OUT THE CODE INSIDE THE ARTICLE TAGS BECAUSE THAT IS IN JAVASCRIPT.
  
  // if i add another object to the menu it only shows up in the all category which is not good.
  
  
  // get only unique categories- HARDEST PART
  // iterate over the categories return buttons
  // make sure to select buttons when they are available.
  
  
  
  
  
  
  
  
  
  
  
  
  // ==============================================================================================
  // VID 157. Unique Categories
  
  // I SETUP THE BUTTONS DYNAMICALLY IN THE DOMContentLoaded event listener.
  
  // right after i display the items displayMenuItems(menu)
  // i setup the functionality (line 111)
  
  
  // get only unique categories- HARDEST PART
  
  // display the categories const categories (LINE 111)
  // start by using map-method
  // then  i want to iterate over my menu array 
  // and return only the categories
  // each and every item has that property of categories
  
  // so now i want to store it in the categories array since the map method returns a 
  // NEW ARRAY
  
  
  
  
  // THIS ALL GETS DELETED AND REPLACED WITH REDUCE METHOD(2:45)
  // const categories = menu.map(function(item){ (LINE 111)
  // return item.category
  // })
  // console.log(categories)
  
  
  
  // IN THE CONSOLE I SHOULD HAVE 10 ITEMS IN MY ARRAY BECUASE I HAVE 10 CATEGORIES
  
  // BUT NOW I WANT TO GET UNIQUE CATEGORIES (VERY IMPORTANT)
  
  // OTHERWISE IF DISPLAY MY BUTTONS I ITERATE OVER THE CATEGORIES AND RETURN MY BUTTONS
  // THEN I WILL HAVE 10 BUTTONS
  // WHICH I DO NOT WANT.
  
  //  i only want buttons for UNIQUE CATEGORIES
  
  // HOW DO I DO THAT?
  // I USE .reduce method
  
  
  // const  categories = menu.reduce(function)(){
    
    // },['all])
    
    // the difference with reduce compared to map and filter method is i have
    // 2 PARAMETERS IN MY CALLBACK FUNCTION AND SOME KIND OF INITIAL VALUE[]
    // 'ARRAY'
    
    // the reason i am returning an array and placing the string of 'all' in it
    // because i have a button that references all of the items.(LINE 113)
    
    // i adDdit manually becuase it is not in my categories
    
    // then i have 2 parameters in my reduce 
    // they are referenced as accumulator and current 
    // but  it is a parameter so i can call it whatever i want
    
    // i call the 1st parameter values becuase it references the ARRAY 
    // i am returning ['all']
    
    // the second parameter is item because it references each and every item
    // in the array because i am still iterating over each item(object) in my menu array.
    
    // const  categories = menu.reduce(function)(values,item){
      // return values
      // },['all])
      
      
      // WHEN USING REDUCE METHOD I NEED TO RETURN THE VALUES which is my total
      // if i dont return values the functionaiulity i have been doing will not work.
      
      
      // NOW I WANT TO CHECK if the item category(property with the value) if it is
      // ALREADY IN MY ARRAY.
      
      // values IS MY ARRAY
      
      // const  categories = menu.reduce(function)(values,item){
        // if(!values.includes(item.category)){ //if my values array does not include 
        // item.category(array of objects)
        // values.push(item.category)
        // IF THE IF STATEMENT IS TRUE THEN I WANT TO PUSH THE item.category
  // }

// if the values array DOES include the item.category(array of objects) then
// just return the the array.

  // return values
// },['all])

// IN THE CONSOLE AT THIS POINT (5:45) I AM GETTING ALL MY (OBJECT)ITEM CATEGORIES
// ["all","breakfast","lunch","dinner"]

// ====================================================================================

// VID 158. Dynamic FIlter Buttons Complete.

// iterate over the categories return buttons
// make sure to select buttons when they are available.

//  I WILL NOW ADD THE CATEGORIES AS MY BUTTONS
// --------------=----------------------------

// it will be similar to what i did with menuItems (line 197.)
// where i had an array then iterated over the array grabbed the html
// and DYNAMICALLY PLUGGED THE VALUES

// I NEED TO COME UP WITH A NAME OF WHAT I WILL BE RETURNING.
// - so i delted the console log on line 124.

// const categoryBtns = categories.map(function(category){ 
  // i REFERENCE EACH AND EVERY ITEM AS A CATEGORY.

  // instead of returning a string
  // i wrap my category value in the html.
  // and return a button i use 1 of the html for the button
  // return `<button class="filter-btn" type="button" data-id="breakfast">
  // breakfast</button>`
  // (LINE 118)
// })

// ONCE I HAVE MY CATEGORY BUTTONS SETUP

// I NEED TO SET UP MY categoryBtns as a string because i still 
// have every value in my array which i can just use join method

// I HAVE MULTIPLE WAYS TO DO IT

// 1. i can either do it long way (displayMenu = displayMenu.join(""))
// i reassign display menu  to the join method (line 219)

// I CANNOT DO IT THAT WAY BECAUSE I USED const which means i cannot reassign

// const categoryBtns = categories.map(function(category){
    // return `<button class="filter-btn" type="button" 
    // data-id="breakfast">
  // breakfast
  // </button>`;
// })
// .join("");
// i can add the join method just not reassign my const categoryBtns variable.

// console.log(categoryBtns);
// logging it to see my string that contains all of my buttons.

// now i target my button container with a class of btn-container use html to add
// my string so i will have my dynamic buttons.

// const container = document.querySelector("btn-container");


// const categoryBtns = categories.map(function(category){
    // return `<button class="filter-btn" type="button" 
    // data-id="breakfast">
  // breakfast
  // </button>`;
// })
// .join("");
// container.innerHTML = categoryBtns;

// i add innerHTML to set the HTML Contents in this case of the btn-container from the
// html.

// I NOW HAVE MY BUTTONS
// ---------------------------------------------------

// At this moment nothing is happening WHEN I CLICK.
// WHY?

// because when i added the buttons (categoryBtns) DYNAMICALLY
// i ALREADY SELECTED THE BUTTONS ON THE filterBtns variable
// const filterBtns = document.querySelectorAll(".filter-btn")

// since i added the buttons DYNAMICALLY when javascript tries to get the
// buttons i will get back undefined
// console.log(filterBtns)

// even though the buttons still have the filter button class BECAUSE 
// I AM ADDING THE BUTTONS DYNAMICALLY I HAVE NO ACCESS
// TO THE buttons and add the filterBtns

// how can i fix that?

// i need to select the buttons once they have been added to the DOM.

// once i have DYNAMICALLY add them to the DOM then i can target them by selecting 
// them and adding event listener for each and every button.

// i need to ITERATE OVER THE BUTTONS AND THEN ADD THE EVENT LISTENER

/**moved the filterBtn variable UP to line 126 to have access to them 
 * 
 * and iterate over them (filterBtns.forEach) LINE 271
 * 
 * and added the event listener LINE 272
 * 
 * 
*/



// I NOW ADD THE ENITRE FILTER BUTTONS SECTION INTO THE DOMContentLoaded function

//  FROM LINES 271 TO 305

// TO LINES 127 TO 162 (VID 158 6:10)

// NOW MY FILTERING OF CATEGORY BUTTONS FUNCTIONAILITY WORKS!!!


// when i press a button i am selecting the items 
// and getting unique items.

// because now the buttons are being selected AFTER i have added them dynamically to
// the DOM.

// FIRST I ADDED THE CATEGORY BUTTONS DYNAMICALLY TO THE DOM STARTS AT LINE
// const categoryBtns = categories.map(function (category) {

// })

// SECOND I SELECTED THE FILTER BUTTONS AFTER I ADDED THEM DYANAMICALLY TO THE DOM


// ==============================================================================


// LAST THING IS SETUP A FUNCTION (7:26)


function displayMenuButtons(){
  const categories = menu.reduce(function(values,item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values
  },['all']
  );
  const categoryBtns = categories.map(function(category){
    return`<button class="filter-btn" type="button"
     data-id=${category}>
     ${category}
     </button>`
  })
  .join("");
  container.innerHTML = categoryBtns;// ADDED THE BUTTONS
  const filterBtns = document.querySelectorAll('.filter-btn')
     // filtering items
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
          // once i have assigned the id of the dataset to each label i put each 
          // and every button in a variable.
          
          
          // (6:34) now i use the filter array where i can filter out what 
          // items are going to be left in the new array.
          // i can filter out the array depending on what the value for my category is.
          // create a new array LINE 248
        })
        // console.log(menuCategory);
        // all button down below
        if(category === "all"){
          displayMenuItems(menu)//if the category is all i will display my menu items with my MENU array
          // (the original array) menu line 17
        }
        else{
          displayMenuItems(menuCategory)//however if the category is not all but
          // breakfast,lunch,or shakes then i will run displayMenuItems(menuCategory)
          // SINCE THAT IS MY NEW ARRAY.
        }
      })
    })
}

// TO SAVE TIME FOR ME TO DEBUG IF I ADD SOMETHING DYNAMICALLY I CAN ONLY ACCESS IT 
// ONCE IT HAS BEEN ADDED TO THE DOM NOT BEFORE LIKE IF I HAD SOMETHING IN THE HTML 
// BEFORE.

// THEN THAT WAY I JUST RUN MY FUNCTION IN THE DomContentLoaded



// i addded this from the DomContentLoaded function (LINES 111 TO 162)

// I NOW NEED TO INVOKE THE FUNCTION(
  // its in the DomContentLoaded function)



  // THIS PROJECT IS VERY IMPORTANT!!!!!!!!!!