function displayMenu() {
    const restaurantName = "Nestor's Pizza's"
    const dishes = [{
        name: "Margherita",
        price: "14.00",
    },
    {
        name: "Cheese",
        price: "16.00",
    },
    {
        name: "Napolitana",
        price: "20.00",
    },
    {
        name: "Sicilian",
        price: "22.00",
    },
    {
        name: "Regina",
        price: "16.00",
    },
    {
        name: "Puccini",
        price: "19.00",
    },
    {
        name: "Vegeteriana",
        price: "19.50",
    },
    {
        name: "Calzone",
        price: "20.00",
    },
    {
        name: "Pepperoni",
        price: "16.00",
    },
    ];

    const dessrt = [{
        name: "Gelato",
        price: "5.00",
    },
    {
        name: "Tiramisu",
        price: "9.50",
    },
    {
        name: "Cannoli",
        price: "7.00",
    },
    {
        name: "Chocolate Tartufo",
        price: "7.50",
    },
    {
        name: "Panettone Pudding",
        price: "10.50",
    },
    {
        name: "Affogato",
        price: "2.50",
    },
    ]

    const content = document.querySelector("#content");
    content.textContent = "";

    const title = document.createElement("div");
    title.classList.add("menu-title");
    title.textContent = "Menu";
    content.appendChild(title);

    const main = document.createElement("div");
    main.classList.add("main-menu");
    main.textContent = `Below, you can find ${restaurantName} menu for this season!`;
    content.appendChild(main);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    const pizzastitle = document.createElement("div");
    pizzastitle.textContent = "Pizzas";
    menu.appendChild(pizzastitle);
    const pizzas = document.createElement("div");
    pizzas.classList.add("menu-pizzas");
    dishes.forEach((dish) => {
        const pizza = document.createElement("div");
        pizza.classList.add("pizza");
        const name = document.createElement("div");
        name.classList.add("pizza-name");
        name.textContent = `${dish.name}`;
        pizza.appendChild(name);
        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = `$${dish.price}`;
        pizza.appendChild(price);
        pizzas.appendChild(pizza);
    })
    menu.appendChild(pizzas);
    const dessertstitle = document.createElement("div");
    dessertstitle.textContent = "Desserts";
    menu.appendChild(dessertstitle);
    const desserts = document.createElement("div");;
    desserts.classList.add("desserts");
    dessrt.forEach((dsrt) => {
        const dessert = document.createElement("div");
        dessert.classList.add("dessert");
        const name = document.createElement("div");
        name.classList.add("dessert-name");
        name.textContent = `${dsrt.name}`;
        dessert.appendChild(name);
        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = `$${dsrt.price}`;
        dessert.appendChild(price);
        desserts.appendChild(dessert);
    })
    menu.appendChild(desserts);
    content.appendChild(menu);
}

export { displayMenu };