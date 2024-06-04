function displayContact() {
    const restaurantName = "Nestor's Pizzas"
    const contactList = [{
        name: "Nestor-3690",
        position: "Owner",
        phone: "+1 (081) 958-2324",
        email: "nestor3690@fakemail.com"
    },
    {
        name: "Bob",
        position: "Chef",
        phone: "+1 (299) 228-5301",
        email: "chefbob@fakemail.com"
    }
    ];

    const content = document.querySelector("#content");
    content.textContent = "";

    const title = document.createElement("div");
    title.classList.add("contact-title");
    title.textContent = "Contact";
    content.appendChild(title);

    const main = document.createElement("div");
    main.classList.add("contact-main");
    main.textContent = `Below you can find informations to join the persons in charge of ${restaurantName}.`;
    content.appendChild(main);

    const contacts = document.createElement("div");
    contacts.classList.add("contacts");
    contactList.forEach((cont) => {
        const contact = document.createElement("div");
        contact.classList.add("contact");
        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = `${cont.name}`;
        contact.appendChild(name);
        const position = document.createElement("div");
        position.classList.add("position");
        position.textContent = `${cont.position}`;
        contact.appendChild(position);
        const phone = document.createElement("div");
        phone.classList.add("phone");
        phone.textContent = `${cont.phone}`;
        contact.appendChild(phone);
        const email = document.createElement("div");
        email.classList.add("email");
        email.textContent = `${cont.email}`;
        contact.appendChild(email);
        contacts.appendChild(contact);
        content.appendChild(contacts);
    })

    const contactText = document.createElement("div");
    contactText.classList.add("contact-text");
    contactText.textContent = "Send us a message";
    content.appendChild(contactText);

    const contactForm = document.createElement("form")
    const formName = document.createElement("div");
    formName.classList.add("form-name");
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "form-name");
    nameLabel.textContent = "Name: ";
    formName.appendChild(nameLabel);
    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "form-name");
    formName.appendChild(nameInput);
    contactForm.appendChild(formName);

    const formEmail = document.createElement("div");
    formEmail.classList.add("form-email");
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "form-email");
    emailLabel.textContent = "Email: ";
    formEmail.appendChild(emailLabel);
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "form-email");
    formEmail.appendChild(emailInput);
    contactForm.appendChild(formEmail);

    const formMessage = document.createElement("div");
    formMessage.classList.add("form-message");
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "form-message");
    messageLabel.textContent = "Message: "
    formMessage.appendChild(messageLabel);
    const messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "form-message");
    formMessage.appendChild(messageInput);
    contactForm.appendChild(formMessage);

    const formButton = document.createElement("div");
    formButton.classList.add("form-button");
    formButton.setAttribute("type", "button");
    formButton.textContent = "Send";
    contactForm.appendChild(formButton);

    content.appendChild(contactForm);
}

export { displayContact };