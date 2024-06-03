import restaurant1 from "./images/restaurant-outside.jpg";
import restaurant2 from "./images/restaurant-outside2.jpg";
import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza2.jpg";
import pizza3 from "./images/pizza3.jpg";
import pizza4 from "./images/pizza4.jpg";

function displayHome() {
    const restaurantName = "Nestor Pizza's";
    const content = document.querySelector("#content");
    content.textContent = '';
    
    const title = document.createElement("div");
    title.classList.add("restaurant-title")
    title.textContent = `${restaurantName}`;
    content.appendChild(title);

    const main = document.createElement("div");
    main.classList.add("restaurant-main");
    const mainHeadline = document.createElement("div");
    mainHeadline.classList.add("main-headline");
    mainHeadline.textContent = `${restaurantName} was created by Nestor3690 in June 2024. His goal was to propose the best pizzas in the world in a beautiful restaurant.`;
    const mainDesc = document.createElement("div");
    mainDesc.classList.add("main-desc");
    mainDesc.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque mi eget mi suscipit, a commodo turpis laoreet. Quisque hendrerit eros feugiat quam ultrices, in ultrices nisi rhoncus. Curabitur cursus vel lectus in ornare. Proin quis blandit velit. Cras justo ligula, suscipit a augue ac, commodo pellentesque turpis. Integer mattis pharetra dolor at dignissim. Nunc vel sollicitudin nisi, sed egestas velit. Nunc efficitur fringilla metus, ut mollis enim scelerisque eget.`
    main.appendChild(mainHeadline);
    main.appendChild(mainDesc);
    content.appendChild(main);

    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurant");
    const restaurantHeadline = document.createElement("p");
    restaurantHeadline.classList.add("restaurant-headline");
    restaurantHeadline.textContent = "Our Restaurant";
    restaurant.appendChild(restaurantHeadline);
    const restaurantPhotos = document.createElement("div");
    restaurantPhotos.classList.add("restaurant-photos")
    const rest1 = new Image();
    rest1.src = restaurant1;
    restaurantPhotos.appendChild(rest1);
    const rest2 = new Image();
    rest2.src = restaurant2;
    restaurantPhotos.appendChild(rest2);
    restaurant.appendChild(restaurantPhotos);
    content.appendChild(restaurant);

    const pizzas = document.createElement("div");
    pizzas.classList.add("pizzas");
    const pizzasHeadline = document.createElement("p");
    pizzasHeadline.classList.add("pizzas-headline");
    pizzasHeadline.textContent = "Our delicious Pizzas";
    pizzas.appendChild(pizzasHeadline);
    const pizzaPhotos = document.createElement("div");
    pizzaPhotos.classList.add("pizza-photos");
    const piz1 = new Image();
    piz1.src = pizza1;
    pizzaPhotos.appendChild(piz1);
    const piz2 = new Image();
    piz2.src = pizza2;
    pizzaPhotos.appendChild(piz2);
    const piz3 = new Image();
    piz3.src = pizza3;
    pizzaPhotos.appendChild(piz3);
    const piz4 = new Image();
    piz4.src = pizza4;
    pizzaPhotos.appendChild(piz4);
    pizzas.appendChild(pizzaPhotos);
    content.appendChild(pizzas);
}

export { displayHome };