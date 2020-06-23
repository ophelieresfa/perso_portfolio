// Strict mode
'use strict';

class Quote {
    constructor() {
        this.form_1 = document.getElementById('form-1');
        this.form_2 = document.getElementById('form-2');
        this.form_3 = document.getElementById('form-3');
        this.form_4 = document.getElementById('form-4');
        this.form_5 = document.getElementById('form-5');
        this.form_6 = document.getElementById('form-6');
        this.form_7 = document.getElementById('form-7');
        this.form_8 = document.getElementById('form-8');
        this.form_9 = document.getElementById('form-9');
        this.form_10 = document.getElementById('form-10');
        this.form_11 = document.getElementById('form-11');
        this.form_12 = document.getElementById('form-12');
        this.form_13 = document.getElementById('form-13');
        this.form_last = document.getElementById('form-last');

        this.form_1.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_2.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_3.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_4.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_5.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_6.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_7.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_8.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_9.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_10.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_11.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_12.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_13.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.form_last.addEventListener("submit", (e) => {
            e.preventDefault();
            this.sendQuote();
        });
    }

    nextForm() {
        let button_1 = document.getElementById("btn-devis-1");
        let button_2 = document.getElementById("btn-devis-2");
        let button_3 = document.getElementById("btn-devis-3");
        let button_4 = document.getElementById("btn-devis-4");
        let button_5 = document.getElementById("btn-devis-5");
        let button_6 = document.getElementById("btn-devis-6");
        let button_7 = document.getElementById("btn-devis-7");
        let button_8 = document.getElementById("btn-devis-8");
        let button_9 = document.getElementById("btn-devis-9");
        let button_10 = document.getElementById("btn-devis-10");
        let button_11 = document.getElementById("btn-devis-11");
        let button_12 = document.getElementById("btn-devis-12");
        let button_13 = document.getElementById("btn-devis-13");
        let backForm1 = document.getElementById("fond-form-1");
        let backForm2 = document.getElementById("fond-form-2");
        let backForm3 = document.getElementById("fond-form-3");
        let backForm4 = document.getElementById("fond-form-4");
        let backForm5 = document.getElementById("fond-form-5");
        let backForm6 = document.getElementById("fond-form-6");
        let backForm7 = document.getElementById("fond-form-7");
        let backForm8 = document.getElementById("fond-form-8");
        let backForm9 = document.getElementById("fond-form-9");
        let backForm10 = document.getElementById("fond-form-10");
        let backForm11 = document.getElementById("fond-form-11");
        let backForm12 = document.getElementById("fond-form-12");
        let backForm13 = document.getElementById("fond-form-13");
        let backFormlast = document.getElementById("fond-form-last");
        let datas = new FormData();
        let selectElem = document.getElementById('selection');
        let what = document.getElementById('what');

        selectElem.addEventListener('change', function () {
            let index = selectElem.selectedIndex;
            if (index === 7) {
                what.style.display = "block";
            }
            else {
                what.style.display = "none";
            }
        });

        button_1.addEventListener('click', function () {
            let email = document.getElementById('email').value;
            let data = document.getElementById("datas");
            let name = document.getElementById('name').value;
            let firstname = document.getElementById('firstname').value;

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

                        backForm1.style.display = "none";
                        backForm2.style.display = "block";

                        function strUcFirst(a){
                            return (a+'').charAt(0).toUpperCase()+a.substr(1);
                        }

                        data.innerText = "Bonjour " + strUcFirst(name) + " " + strUcFirst(firstname) + ",";
                    }
                }
            }
        });

        button_2.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let about = selection.options[selection.selectedIndex].text;

            if (choice !== "") {
                datas.append("about", about);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("About = " + about);
                });

                sessionStorage.setItem('About', about);
            }
            if (choice === "Logo") {
                backForm2.style.display = "none";
                backForm3.style.display = "block";
            }

            if (choice === "Carte de visite") {
                backForm2.style.display = "none";
                backForm7.style.display = "block";
            }

            if (choice === "Affiche / Affiche publicitaire") {
                backForm2.style.display = "none";
                backForm7.style.display = "block";
            }

            if (choice === "Pochette d'album") {
                backForm2.style.display = "none";
                backForm9.style.display = "block";
            }

            if (choice === "Header / Bannière") {
                backForm2.style.display = "none";
                backForm10.style.display = "block";
            }

            if (choice === "Curriculum Vitae") {
                backForm2.style.display = "none";
                backForm5.style.display = "block";
            }

            if (choice === "Autre") {
               backForm2.style.display = "none";
                backForm5.style.display = "block";
            }

            if (choice === "Site internet") {
                backForm2.style.display = "none";
                backForm11.style.display = "block";
            }

        });

        button_3.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let about_id = document.getElementById("about");
            let quality = document.getElementById("quality");
            let refonte = document.getElementById("refonte");
            let creation = document.getElementById("creation");

            if ((refonte.checked === true) || (creation.checked === true)) {
                if  (choice !== "Curriculum Vitae" && choice !== "Site internet") {
                    backForm3.style.display = "none";
                    backForm4.style.display = "block";

                    about_id.innerText = choice;
                    quality.innerText = "Souhaitez-vous votre " + choice + " au format vectoriel ?";
                }
                else {
                    backForm2.style.display = "none";
                    backForm5.style.display = "block";
                }
            }
        });

        button_4.addEventListener('click', function () {
            let quality = document.querySelector('input[name=quality]:checked').value;
            let checked = document.getElementsByName("quality").value;

            if (checked !== "") {

                datas.append("Vector", quality);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Vector = " + quality);
                });

                sessionStorage.setItem('Vector', quality);

                backForm4.style.display = "none";
                backForm5.style.display = "block";
            }
        });

         button_5.addEventListener('click', function () {
             let budget = document.getElementById('budget').value;

             if (budget !== "") {
                 datas.append("budget", budget);
                 ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                     console.log("Budget = " + budget);
                 });

                 sessionStorage.setItem('Budget', budget);

                 backForm5.style.display = "none";
                 backForm6.style.display = "block";
             }
         });

        button_6.addEventListener('click', function () {
            backForm6.style.display = "none";
            backFormlast.style.display = "block";
        });

        button_7.addEventListener('click', function () {
            let recto = document.getElementById("recto");
            let rectoverso = document.getElementById("rectoverso");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            if ((recto.checked === true) || (rectoverso.checked === true)) {
                backForm7.style.display = "none";
                backForm5.style.display = "block";
            }

            if (choice === "Affiche / Affiche publicitaire") {
                backForm5.style.display = "none";
                backForm8.style.display = "block";
            }
        });

        button_8.addEventListener('click', function () {
            backForm8.style.display = "none";
            backForm5.style.display = "block";
        });

        button_9.addEventListener('click', function () {
            let numerique = document.getElementById("numerique");
            let papier = document.getElementById("papier");

            if ((numerique.checked === true) || (papier.checked === true)) {
                backForm9.style.display = "none";
                backForm7.style.display = "block";
            }
        });

        button_10.addEventListener('click', function () {
                backForm10.style.display = "none";
                backForm5.style.display = "block";
        });

        button_11.addEventListener('click', function () {
            let vitrine = document.getElementById("vitrine");
            let commerce = document.getElementById("commerce");

            if ((vitrine.checked === true) || (commerce.checked === true)) {
                backForm11.style.display = "none";
                backForm12.style.display = "block";
            }
        });

        button_12.addEventListener('click', function () {
                backForm12.style.display = "none";
                backForm13.style.display = "block";
        });

        button_13.addEventListener('click', function () {
            backForm13.style.display = "none";
            backForm5.style.display = "block";
        });
    }

    sendQuote() {
        let name = sessionStorage.getItem('Name');
        let firstname = sessionStorage.getItem('Firstname');
        let email = sessionStorage.getItem('Email');
        let about = sessionStorage.getItem('About');
        let quality = sessionStorage.getItem('Vector');
        let budget = sessionStorage.getItem('Budget');
        let datas = new FormData();


        datas.append("name", name);
        datas.append("firstname", firstname);
        datas.append("email", email);
        datas.append("about", about);
        datas.append("vector", quality);
        datas.append("budget", budget);

        ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote!data", datas, function () {
            console.log("Votre demande de devis à bien été envoyée");
        });
    }
}