import _ from 'lodash';
import './styles.css';
import { displayHome } from './home';
import { displayMenu } from './menu';
import { displayContact } from './contact';

(function() {
    const content = document.querySelector("#content");

    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            content.textContent = "";
            if (button.textContent === "Home") {
                displayHome(content);
            } else if (button.textContent === "Menu") {
                displayMenu(content);
            } else if (button.textContent === "Contact") {
                displayContact(content);
            }
        })
    })

    displayHome(content);
})();