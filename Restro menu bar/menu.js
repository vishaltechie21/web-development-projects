
// items
const menu = [
    {
        id: 1,
        title: "Buttermailk pancake",
        category: "breakfast",
        price: 5.99,
        description: `A fluffy buttermilk-based pancake with a crispy egg on top.`,
        img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2VzfGVufDB8fDB8fHww"
    },
    {
        id: 2,
        title: "Chicken and Waffles",
        category: "dinner",
        price: 7.49,
        description: `Our signature dish - made with fresh chicken, waffle fries, and our specialty syrup.`,
        img: "https://images.unsplash.com/photo-1523813301608-f54a198f6b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWtlbnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 3,
        title: "Chicken and Waffles",
        category: "lunch",
        price: 7.49,
        description: `Our signature dish - made with fresh chicken, waffle fries, and our specialty syrup.`,
        img: "https://images.unsplash.com/photo-1672477179695-7276b0602fa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpa2Vuc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 4,
        title: "Veggie Burger",
        category: "dinner",
        price: 6.99,
        description: `A juicy burger filled with grilled vegetables and topped with avocado mayo.`,
        img: "https://images.unsplash.com/photo-1619683551667-4bc326abff44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZ2llJTIwYnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 5,
        title: "Veggie Burger",
        category: "lunch",
        price: 6.99,
        description: `A juicy burger filled with grilled vegetables and topped with avocado mayo.`,
        img: "https://images.unsplash.com/photo-1619683551667-4bc326abff44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZ2llJTIwYnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 6,
        title: "Creamy Tomato Soup",
        category: "dinner",
        price: "7.56",
        description: "very delious",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 7,
        title: "mango sheak",
        category: "shakes",
        price: "7.34",
        description: "a glass filled with a smoothie next to a mango",
        img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYWtlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 8,
        title: "Chocolate sheak",
        category: "shakes",
        price: "7.34",
        description: "a glass filled with a smoothie next to a mango",
        img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hha2VzfGVufDB8fDB8fHww"
    },
    {
        id: 9,
        title: "Chocolate sheak",
        category: "shakes",
        price: "7.34",
        description: "After two weeks of living on bourbon and donuts (okay, fine. Two and a half.) I decided it was time to kick myself into healthy gear. Pulled out favorite fresh veggies, drizzled with sesame oil,",
        img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
    }
]

const sectionCenter = document.querySelector(".items")
const filterBtns = document.querySelectorAll(".filter-btn");


// load items
window.addEventListener("DOMContentLoaded", function () {
displayMenuItems(menu);
})

// filter items
filterBtns.forEach(function (btn){
    btn.addEventListener('click', function(e){
      const categorey = e.currentTarget.dataset.id;
        const menuCategorey = menu.filter(function (menuItems){
            if(menuItems.category === categorey){
                return menuItems;
            }
        })
        if(categorey === 'all'){
            return displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategorey)
        }
    });
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (items) {
        return `<div class="item1 item" >
        <article>
          <img
            src=${items.img}
            alt=${items.title}
          />
          <header>
            <h2>${items.title}</h2>
            <h3>Price-:$${items.price}</h3>
          </header>
          <div class="desp">
            <p>
             ${items.description}
            </p>
          </div>
          <!-- item 1 item end here  -->
        </article>
      </div>`
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
}