// Strict mode
'use strict';

class Quote {
    constructor() {
        this.form_1 = document.getElementById('form-1');
        this.form_2 = document.getElementById('form-2');
        this.form_3 = document.getElementById('form-3');

        this.form_1.addEventListener("submit", (e) => {
            e.preventDefault();
            this.submitForm();
        });

        this.form_2.addEventListener("submit", (e) => {
            e.preventDefault();
            this.submitForm();
        });

        this.form_3.addEventListener("submit", (e) => {
            e.preventDefault();
            this.sendQuote();
        });
    }

    submitForm() {
        let name = document.getElementById('name').value;
        let firstname = document.getElementById('firstname').value;
        let email = document.getElementById('email').value;
        let selection = document.getElementById("selection");
        let choice = selection.options[selection.selectedIndex].value;
        let about = selection.options[selection.selectedIndex].text;
        let datas = new FormData();

        if (name !== "") {
            if (firstname !== "") {
                if (email !== "") {
                    datas.append("name", name);
                    datas.append("firstname", firstname);
                    datas.append("email", email);

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        console.log("Name = " + name + ", Firstname = " + firstname + ", Email = " + email);
                    });

                    sessionStorage.setItem('Name', name);
                    sessionStorage.setItem('Firstname', firstname);
                    sessionStorage.setItem('Email', email);
                }
            }
        }

        if (choice !== "") {
                    datas.append("about", about);

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        console.log("About = " + about);
                    });

                    sessionStorage.setItem('About', about);
        }
    }

    nextForm() {
        let button_1 = document.getElementById("btn-devis-1");
        let button_2 = document.getElementById("btn-devis-2");
        let backForm1 = document.getElementById("fond-form-1");
        let backForm2 = document.getElementById("fond-form-2");
        let backForm3 = document.getElementById("fond-form-3");

        button_1.addEventListener('click', function () {
            let email = document.getElementById('email').value;
            let datas = document.getElementById("datas");
            let name = document.getElementById('name').value;
            let firstname = document.getElementById('firstname').value;

            if (name !== "") {
                if (firstname !== "") {
                    if (email !== "") {
                        let name = document.getElementById('name').value;
                        let firstname = document.getElementById('firstname').value;

                        backForm1.style.display = "none";
                        backForm2.style.display = "block";

                        function strUcFirst(a){
                            return (a+'').charAt(0).toUpperCase()+a.substr(1);
                        }

                        datas.innerText = "Bonjour " + strUcFirst(name) + " " + strUcFirst(firstname) + ",";
                    }
                }
            }
        });

        button_2.addEventListener('click', function () {
            backForm2.style.display = "none";
            backForm3.style.display = "block";
        });
    }

    sendQuote() {
        let name = sessionStorage.getItem('Name');
        let firstname = sessionStorage.getItem('Firstname');
        let email = sessionStorage.getItem('Email');
        let about = sessionStorage.getItem('About');
        let datas = new FormData();


        datas.append("name", name);
        datas.append("firstname", firstname);
        datas.append("email", email);
        datas.append("about", about);

        ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote!data", datas, function () {
            console.log("Votre demande de devis à bien été envoyée");
        });
    }
}