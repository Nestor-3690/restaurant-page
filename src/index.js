import _ from 'lodash';
import './styles.css';
import { displayHome } from './home';
import { displayMenu } from './menu';
import { displayContact } from './contact';

(function() {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent === "Home") {
                displayHome();
            } else if (button.textContent === "Menu") {
                displayMenu();
            } else if (button.textContent === "Contact") {
                displayContact();
            }
        })
    })

    displayHome();
})();