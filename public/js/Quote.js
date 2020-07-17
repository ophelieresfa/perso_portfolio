// Strict mode
'use strict';

class Quote {

    constructor() {
        /* Formulaires */
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
        this.button_last = document.getElementById("btn-devis-last");


        /* Bloquer le rechargement du formulaire
        lors de l'envoi avec ajax */
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

        this.button_last.addEventListener("click", (e) => {
            this.sendQuote();
        });
        window.addEventListener("DOMContentLoaded", (e) => {
            sessionStorage.clear();
        });

        document.getElementById("form-1").reset();
        document.getElementById("form-2").reset();
        document.getElementById("form-3").reset();
        document.getElementById("form-4").reset();
        document.getElementById("form-5").reset();
        document.getElementById("form-6").reset();
        document.getElementById("form-7").reset();
        document.getElementById("form-8").reset();
        document.getElementById("form-9").reset();
        document.getElementById("form-10").reset();
        document.getElementById("form-11").reset();
        document.getElementById("form-12").reset();
        document.getElementById("form-13").reset();
        document.getElementById("form-last").reset();
    }

    nextForm() {
        /* Boutons */
        let button_1 = document.getElementById("btn-devis-1");
        let button_2 = document.getElementById("btn-devis-2");
        let button_3 = document.getElementById("btn-devis-3");
        let button_4 = document.getElementById("btn-devis-4");
        let button_5 = document.getElementById("btn-devis-5")
        let button_6 = document.getElementById("btn-devis-6");;
        let button_7 = document.getElementById("btn-devis-7");
        let button_8 = document.getElementById("btn-devis-8");
        let button_9 = document.getElementById("btn-devis-9");
        let button_10 = document.getElementById("btn-devis-10");
        let button_11 = document.getElementById("btn-devis-11");
        let button_12 = document.getElementById("btn-devis-12");
        let button_13 = document.getElementById("btn-devis-13");

        /* Formulaires */
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
        let refonteYes = document.getElementById("refonte");
        let creationYes = document.getElementById("creation");
        let markYes = document.getElementById("mark-yes");
        let markNo = document.getElementById("mark-no");
        let integrateYes = document.getElementById("integrate-yes");
        let integrateNo = document.getElementById("integrate-no");

        /* Affiche la div "De quoi avez-vous besoin"
        Si "Autre" est selectionné */
        selectElem.addEventListener('change', function () {
            let index = selectElem.selectedIndex;
            let what = document.getElementById('what');

            if (index === 7) {
                what.style.display = "block";
                backForm2.style.height = "33.1rem";            }
            else {
                what.style.display = "none";
                backForm2.style.height = "25.75rem";
            }
        });

        /* Affiche la div qui permet d'ajouter
        le fichier ou l'url à modifier */
        refonteYes.addEventListener('change', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            if (choice === "Logo") {
                let file = document.getElementById("file");

                file.style.display = "block";
                backForm3.style.height = "41.4rem";
            }

            if (choice === "Site internet") {
                let url = document.getElementById("url");

                url.style.display = "block";
                backForm3.style.height = "39.75rem";
            }
        });

        /* Cache la div qui permet d'ajouter
        le fichier ou l'url à modifier */
        creationYes.addEventListener('change', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            if (choice === "Logo") {
                let file = document.getElementById("file");

                file.style.display = "none";
                backForm3.style.height = "33.9rem";
            }

            if (choice === "Site internet") {
                let url = document.getElementById("url");

                url.style.display = "none";
                backForm3.style.height = "33.9rem";
            }
        });

        /* Affiche la div qui permet d'ajouter
        le nom de la marque */
        markYes.addEventListener('change', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let divInfo = document.getElementById('mark-name');
            let refonte = sessionStorage.getItem('Refonte / Création');

            divInfo.style.display = "block";
            backForm6.style.height = "125.5rem";

            if (refonte === "refonte") {
                backForm6.style.height = "137.3rem";
            }
            if (integrateYes.checked === true) {
                backForm6.style.height = "132.9rem";
                if (refonte === "refonte") {
                    backForm6.style.height = "144.7rem";
                }
            }
            if (choice === "Carte de visite") {
                backForm6.style.height = "127rem";
                if (integrateYes.checked === true) {
                    backForm6.style.height = "134.4rem";
                }
            }
            if (choice === "Header / Bannière") {
                backForm6.style.height = "127rem";
                if (integrateYes.checked === true) {
                    backForm6.style.height = "134.4rem";
                }
            }
        });

        /* Cache la div qui permet d'ajouter
        le nom de la marque */
        markNo.addEventListener('change', function () {
            let divInfo = document.getElementById('mark-name');
            let refonte = sessionStorage.getItem('Refonte / Création');
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            divInfo.style.display = 'none';
            backForm6.style.height = "118.15rem";

            if (integrateYes.checked === true) {
                backForm6.style.height = "125.5rem";
            }

            if (refonte === "refonte") {
                backForm6.style.height = "130rem";
                if (integrateYes.checked === true) {
                    backForm6.style.height = "137.35rem";
                }
            }

            if (choice === "Carte de visite") {
                backForm6.style.height = "119.65rem";
                if (integrateYes.checked === true) {
                    backForm6.style.height = "127rem";
                }
            }

            if (choice === "Header / Bannière") {
                backForm6.style.height = "119.65rem";
                if (integrateYes.checked === true) {
                    backForm6.style.height = "127rem";
                }
            }
        });

        /* Affiche la div qui permet d'ajouter
        les éléments à intégrer */
        integrateYes.addEventListener('change', function () {
            let divInfo = document.getElementById('what-integrate');
            let refonte = sessionStorage.getItem('Refonte / Création');
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            divInfo.style.display = "block";
            backForm6.style.height = "125.5rem";

            if (refonte === "refonte") {
                backForm6.style.height = "137.35rem";
            }
            if (markYes.checked === true) {
                backForm6.style.height = "132.9rem";
                if (refonte === "refonte") {
                    backForm6.style.height = "144.7rem";
                }
            }
            if (choice === "Carte de visite") {
                backForm6.style.height = "127rem";
                if (markYes.checked === true) {
                    backForm6.style.height = "134.4rem";
                }
            }
            if (choice === "Header / Bannière") {
                backForm6.style.height = "127rem";
                if (markYes.checked === true) {
                    backForm6.style.height = "134.4rem";
                }
            }
            if (choice === "Affiche / Affiche publicitaire") {
                backForm6.style.height = "103.9rem";
            }
            if (choice === "Autre") {
                backForm6.style.height = "115.7rem";
            }

        });

        /* Cache la div qui permet d'ajouter
        les éléments à intégrer */
        integrateNo.addEventListener('change', function () {
            let divInfo = document.getElementById('what-integrate');
            let refonte = sessionStorage.getItem('Refonte / Création');
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            divInfo.style.display = 'none';
            backForm6.style.height = "118.15rem";

            if (markYes.checked === true) {
                backForm6.style.height = "125.5rem";
            }

            if (refonte === "refonte") {
                backForm6.style.height = "130rem";
                if (markYes.checked === true) {
                    backForm6.style.height = "137.35rem";
                }
            }

            if (choice === "Carte de visite") {
                backForm6.style.height = "119.65rem";
                if (markYes.checked === true) {
                    backForm6.style.height = "127rem";
                }
            }
            if (choice === "Header / Bannière") {
                backForm6.style.height = "119.65rem";
                if (markYes.checked === true) {
                    backForm6.style.height = "127rem";
                }
            }
            if (choice === "Affiche / Affiche publicitaire") {
                backForm6.style.height = "96.5rem";
            }
            if (choice === "Autre") {
                backForm6.style.height = "108.35rem";
            }
        });

        /* Affiche le formulaire suivant
        quand on clique sur le bouton envoyé */
        button_1.addEventListener('click', function () {

            function strUcFirst(a){
                return (a+'').charAt(0).toUpperCase()+a.substr(1);
            }

            let name = document.getElementById('name').value;
            let firstname = document.getElementById('firstname').value;
            let email = document.getElementById('email').value;
            let data = document.getElementById("datas");
            let selectElem = document.getElementById('selection');
            let index = selectElem.selectedIndex;
            let what = document.getElementById('what');

            /* Vérifie que les champs sont bien remplis */
            if (name !== "") {
                if (firstname !== "") {
                    if (email !== "") {
                        /* Ajoute les données dans la requête */
                        datas.append("name", name);
                        datas.append("firstname", firstname);
                        datas.append("email", email);

                        /* Envoie la requete Ajax avec les données */
                        ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                            /* Affiche sur la console les données envoyées */
                            console.log("Name = " + name + ", Firstname = " + firstname + ", Email = " + email);
                        });

                        /* Ajoute les données dans un SessionStorage */
                        sessionStorage.setItem('Name', name);
                        sessionStorage.setItem('Firstname', firstname);
                        sessionStorage.setItem('Email', email);

                        /* CSS */
                        backForm1.style.display = "none";
                        backForm2.style.display = "block";
                        backForm2.style.height = "25.75rem";

                        /* Affiche les données à l'utilisateur */
                        data.innerText = "Bonjour " + strUcFirst(name) + " " + strUcFirst(firstname) + ",";

                        /* Affiche la div "De quoi avez-vous besoin"
                        Si "Autre" est selectionné quand on recharge la page */
                        if (index === 7) {
                            what.style.display = "block";
                            backForm2.style.height = "33.1rem";
                        }
                        else {
                            what.style.display = "none";
                        }
                    }
                }
            }
        });
        button_2.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            /* Vérifie qu'une option est bien selectionné */
            if (choice !== "") {
                /* Ajoute les données dans la requête */
                datas.append("Choice", choice);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Choice = " + choice);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Choice', choice);
            }

            /* Si l'option selectionné est "Logo" */
            if (choice === "Logo") {
                let aboutChoice = document.getElementById("about-form-3");
                let refonte = document.getElementById("ref");
                let creation = document.getElementById("crea");
                let file = document.getElementById("file");

                /* CSS */
                backForm2.style.display = "none";
                backForm3.style.display = "block";
                backForm3.style.height = "33.9rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
                refonte.innerHTML = "Refonte d'un " + choice +  " déjà existant";
                creation.innerHTML = "Création d'un nouveau " + choice;

                /* Affiche la div choisir fichier
                Si "Refonte" est coché */
                if (refonteYes.checked === true) {
                    file.style.display = "block";
                    backForm3.style.height = "41.4rem";
                }
                else {
                    file.style.display = "none";
                    backForm3.style.height = "33.9rem";
                }
            }

            /* Si l'option selectionné est "Carte de visite" */
            if (choice === "Carte de visite") {
                let aboutChoice = document.getElementById("about-form-7");
                let rectoChoice = document.getElementById("rec");

                /* CSS */
                backForm2.style.display = "none";
                backForm7.style.display = "block";
                backForm7.style.height = "34rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
                rectoChoice.innerHTML = "Vous souhaitez votre " + choice + " :";
            }

            /* Si l'option selectionné est "Affiche / Affiche publicitaire" */
            if (choice === "Affiche / Affiche publicitaire") {
                let aboutChoice = document.getElementById("about-form-7");
                let rectoChoice = document.getElementById("rec");

                /* CSS */
                backForm2.style.display = "none";
                backForm7.style.display = "block";
                backForm7.style.height = "34rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
                rectoChoice.innerHTML = "Vous souhaitez votre " + choice + " :";
            }

            /* Si l'option selectionné est "Pochette d'album" */
            if (choice === "Pochette d'album") {
                let aboutChoice = document.getElementById("about-form-9");

                /* CSS */
                backForm2.style.display = "none";
                backForm9.style.display = "block";
                backForm9.style.height = "33.5rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
            }

            /* Si l'option selectionné est "Header / Bannière */
            if (choice === "Header / Bannière") {
                /**/
                /* RAJOUTER UN CHOIX "QUOI" SI AUTRE EST SELECTIONNE*/
                /**/
                let aboutChoice = document.getElementById("about-form-10");

                /* CSS */
                backForm2.style.display = "none";
                backForm10.style.display = "block";
                backForm10.style.height = "34.4rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
            }

            /* Si l'option selectionné est "Curriculum Vitae */
            if (choice === "Curriculum Vitae") {
                let aboutChoice = document.getElementById("about-form-5");

                /* CSS */
                backForm2.style.display = "none";
                backForm5.style.display = "block";
                backForm5.style.height = "28.7rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
            }

            /* Si l'option selectionné est "Autre */
            if (choice === "Autre") {
                let whatVal = document.getElementById("what-value").value;
                let aboutChoice = document.getElementById("about-form-5");

                /* Vérifie qu'il existe une valeur
                pour le champs "Quoi" */
                if (whatVal !== "") {
                    /* Ajoute les données dans la requête */
                    datas.append("Quoi", whatVal);

                    /* Envoie la requete Ajax avec les données */
                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        /* Affiche sur la console les données envoyées */
                        console.log("Quoi = " + whatVal);
                    });

                    /* Ajoute les données dans un SessionStorage */
                    sessionStorage.setItem('Quoi', whatVal);

                    /* CSS */
                    backForm2.style.display = "none";
                    backForm5.style.display = "block";
                    backForm5.style.height = "28.7rem";
                    aboutChoice.style.textDecoration = "underline 1px black";

                    /* Affiche les données à l'utilisateur */
                    aboutChoice.innerHTML = choice + ": " + whatVal;
                }
            }

            /* Si l'option selectionné est "Site internet */
            if (choice === "Site internet") {
                let aboutChoice = document.getElementById("about-form-3");
                let refonte = document.getElementById("ref");
                let creation = document.getElementById("crea");
                let url = document.getElementById("url");

                /* CSS */
                backForm2.style.display = "none";
                backForm3.style.display = "block";
                backForm3.style.height = "31.4rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
                refonte.innerHTML = "Refonte d'un " + choice +  " déjà existant";
                creation.innerHTML = "Création d'un nouveau " + choice;

                if (refonteYes.checked === true) {
                    url.style.display = "block";
                    backForm3.style.height = "39.75rem";
                }
                else {
                    url.style.display = "none";
                    backForm3.style.height = "33.9rem";
                }
            }
        });
        button_3.addEventListener('click', function () {
            let refonte = document.getElementById("refonte");
            let creation = document.getElementById("creation");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            /* Vérifie si l'un des deux choix est selectionné */
            if ((refonte.checked === true) || (creation.checked === true)) {
                /* Vérifie que le choix selectionner avant n'a
                * ni était "Curriculum Vitae", ni "Site internet"*/
                if  (choice !== "Curriculum Vitae" && choice !== "Site internet") {
                    let refCrea = document.querySelector('input[name=creation]:checked').value;
                    let aboutChoice = document.getElementById("about-form-4");
                    let quality = document.getElementById("quality");

                    /* Ajoute les données dans la requête */
                    datas.append("Refonte / Création", refCrea);

                    /* Envoie la requete Ajax avec les données */
                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        /* Affiche sur la console les données envoyées */
                        console.log("Refonte / Création = " + refCrea);
                    });
                    /* Ajoute les données dans un SessionStorage */
                    sessionStorage.setItem('Refonte / Création', refCrea);

                    /* CSS */
                    backForm3.style.display = "none";
                    backForm4.style.display = "block";
                    backForm4.style.height = "34rem";
                    aboutChoice.style.textDecoration = "underline 1px black";

                    /* Affiche les données à l'utilisateur */
                    aboutChoice.innerHTML = choice;
                    quality.innerText = "Souhaitez-vous votre " + choice + " au format vectoriel ?";
                }
                /* Si le choix selectionner avant était
                "Curriculum Vitae" ou "Site internet"*/
                else {
                    let refCrea = document.querySelector('input[name=creation]:checked').value;

                    /* Ajoute les données dans la requête */
                    datas.append("Refonte / Création", refCrea);

                    /* Envoie la requete Ajax avec les données */
                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        /* Affiche sur la console les données envoyées */
                        console.log("Refonte / Création = " + refCrea);
                    });

                    /* Ajoute les données dans un SessionStorage */
                    sessionStorage.setItem('Refonte / Création', refCrea);

                    /* Si le choix a été le logo */
                    if (choice === "Logo") {
                        /* CSS */
                        backForm3.style.display = "none";
                        backForm5.style.display = "block";
                    }
                    /* Sinon */
                    else {
                        /* CSS */
                        backForm3.style.display = "none";
                        backForm11.style.display = "block";
                        backForm11.style.height = "29rem";
                    }
                }
            }

        });
        button_4.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let quality = document.querySelector('input[name=quality]:checked').value;
            let qualityChecked = document.getElementsByName("quality").value;

            /* Vérifie si un choix est selectionner */
            if (qualityChecked !== "") {
                let aboutChoice = document.getElementById("about-form-5");

                /* Ajoute les données dans la requête */
                datas.append("Vector", quality);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Vector = " + quality);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Vector', quality);

                /* CSS */
                backForm4.style.display = "none";
                backForm5.style.display = "block";
                backForm5.style.height = "28.75rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
            }
        });
        button_5.addEventListener('click', function () {
            let budget = document.getElementById('budget').value;
            let date = new Date(new Date().getTime()+(4*24*60*60*1000)).toISOString().split('T')[0];
            let aboutChoice = document.getElementById("about-form-6");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let displayMark = document.getElementById("display-mark");
            let integrate = document.getElementById("integrate");
            let dateText = document.getElementById("date");
            let refonte = sessionStorage.getItem('Refonte / Création');
            let colors = document.getElementById("colors");

            /* Vérifie qu'il y a une valeur
            donnée pour le budget */
            if (budget !== "") {

                /* Ajoute les données dans la requête */
                datas.append("budget", budget);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Budget = " + budget);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Budget', budget);

                /* Donne à l'attribut "min" du calendrier
                une valeur supérieure à celle d'aujourd'hui */
                document.getElementsByName("party")[0].setAttribute('min', date);

                /* CSS */
                backForm5.style.display = "none";
                backForm6.style.display = "block";
                backForm6.style.height = "118.2rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;

                /* Affichage selon le choix selectionné */
                if (choice === "Logo") {
                    /* Affiche les données à l'utilisateur */
                    displayMark.innerHTML = "Souhaitez-vous que le nom de la marque apparaisse sur le " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans le " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;

                    if (markYes.checked === true) {
                        let divInfo = document.getElementById('mark-name');

                        /* CSS */
                        divInfo.style.display = "block";
                        backForm6.style.height = "125.5rem";
                    }

                    if (integrateYes.checked === true) {
                        let divInfo = document.getElementById('what-integrate');

                        /* CSS */
                        divInfo.style.display = "block";
                        backForm6.style.height = "125.5rem";
                    }

                    if ((markYes.checked === true) && (integrateYes.checked === true)) {
                        /* CSS */
                        backForm6.style.height = "132.9rem";
                    }

                    if ((markYes.checked === false) && (integrateYes.checked === true)) {
                        /* CSS */
                        backForm6.style.height = "125.5rem";
                    }

                    if (refonte === "refonte") {
                        let divKeep = document.getElementById('keep');

                        /* CSS */
                        divKeep.style.display = "block";
                        backForm6.style.height = "130rem";

                        if (markYes.checked === true) {
                            /* CSS */
                            backForm6.style.height = "137.3rem";
                        }

                        if (integrateYes.checked === true) {
                            /* CSS */
                            backForm6.style.height = "137.35rem";
                        }

                        if ((markYes.checked === true) && (integrateYes.checked === true)) {
                            /* CSS */
                            backForm6.style.height = "144.7rem";
                        }
                    }
                }
                if (choice === "Carte de visite") {
                    /* Affiche les données à l'utilisateur */
                    displayMark.innerHTML = "Souhaitez-vous que le nom de la marque apparaisse sur la " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans la " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;

                    /* CSS */
                    backForm6.style.height = "119.65rem";

                    if (markYes.checked === true) {
                        let divInfo = document.getElementById('mark-name');

                        /* CSS */
                        divInfo.style.display = "block";
                        backForm6.style.height = "127rem";
                    }

                    if (integrateYes.checked === true) {
                        let divInfo = document.getElementById('what-integrate');

                        /* CSS */
                        divInfo.style.display = "block";
                        backForm6.style.height = "125.5rem";
                    }

                    if ((markYes.checked === true) && (integrateYes.checked === true)) {
                        /* CSS */
                        backForm6.style.height = "134.4rem";
                    }

                    if ((markYes.checked === false) && (integrateYes.checked === true)) {
                        /* CSS */
                        backForm6.style.height = "127rem";
                    }

                }
                if (choice === "Affiche / Affiche publicitaire") {
                    let mark = document.getElementById("mark-display");
                    let identity = document.getElementById("identity");

                    /* CSS */
                    mark.style.display = "none";
                    identity.style.display = "none";
                    colors.style.marginTop = "3rem";
                    backForm6.style.height = "96.5rem";

                    /* Affiche les données à l'utilisateur */
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans l' " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;

                    /* Affiche les champs selon choix selectionner
                    * et Adapte le formulaire */
                    if (integrateYes.checked === true) {
                        let divInfo = document.getElementById('what-integrate');

                        /* CSS */
                        divInfo.style.display = "block";
                        backForm6.style.height = "103.9rem";
                    }
                    if (integrateNo.checked === true) {
                        /* CSS */
                        backForm6.style.height = "96.5rem";
                    }
                }
                if (choice === "Pochette d'album") {
                    /* CSS */
                    backForm6.style.height = "119.65rem";

                    /* Affiche les données à l'utilisateur */
                    displayMark.innerHTML = "Souhaitez-vous que le nom de l'album apparaisse sur la " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans la " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;
                }
                if (choice === "Header / Bannière") {
                    /* CSS */
                    backForm6.style.height = "119.65rem";

                    /* Affiche les données à l'utilisateur */
                    displayMark.innerHTML = "Souhaitez-vous que le nom de la marque apparaisse sur le /la " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans le/la  " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;

                    if (markYes.checked === true) {
                        let divInfo = document.getElementById('mark-name');

                        divInfo.style.display = "block";
                        backForm6.style.height = "127rem";
                    }

                    if (integrateYes.checked === true) {
                        let divInfo = document.getElementById('what-integrate');

                        divInfo.style.display = "block";
                        backForm6.style.height = "127rem";
                    }

                    if ((markYes.checked === true) && (integrateYes.checked === true)) {
                        /* CSS */
                        backForm6.style.height = "134.4rem";
                    }

                    if ((markYes.checked === false) && (integrateYes.checked === true)) {
                        /* CSS */
                        backForm6.style.height = "127rem";
                    }
                }
                if (choice === "Curriculum Vitae") {
                    /* CSS */
                    backForm5.style.display = "none";
                    backForm6.style.display = "none";
                    backFormlast.style.display = "block";
                }
                if (choice === "Autre") {
                    let mark = document.getElementById("mark-display");
                    let whatVal = document.getElementById("what-value").value;

                    /* CSS */
                    backForm6.style.height = "108.35rem";
                    mark.style.display = "none";
                    colors.style.marginTop = "3rem";

                    /* Affiche les données à l'utilisateur */
                    aboutChoice.innerHTML = choice + ": " + whatVal;
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans votre " + whatVal + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + whatVal;

                    if (integrateYes.checked === true) {
                        let divInfo = document.getElementById('what-integrate');

                        /* CSS */
                        divInfo.style.display = "block";
                        backForm6.style.height = "115.7rem";
                    }
                }
                if (choice === "Site internet") {
                    let mark = document.getElementById("mark-display");
                    let integrate = document.getElementById("integrate-part");
                    let need = document.getElementById("need");
                    let date = new Date(new Date().getTime()+(15*24*60*60*1000)).toISOString().split('T')[0];

                    /* CSS */
                    mark.style.display = "none";
                    integrate.style.display = "none";
                    colors.style.marginTop = "3rem";
                    dateText.style.marginTop = "3rem";
                    backForm6.style.height = "95.5rem";

                    /* Donne à l'attribut "min"
                    une valeur de +15 jours */
                    document.getElementsByName("party")[0].setAttribute('min', date);

                    /* Affiche les données à l'utilisateur */
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;
                    need.innerHTML = "Avez-vous besoin d'un logo ?";

                }
            }
        });
        button_6.addEventListener('click', function () {
            let activity = document.getElementById("activity").value;
            let markYes = document.getElementById("mark-yes");
            let markNo = document.getElementById("mark-no");
            let integrateYes = document.getElementById("integrate-yes");
            let integrateNo = document.getElementById("integrate-no");
            let identityYes = document.getElementById("identity-yes");
            let identityNo = document.getElementById("identity-no");
            let siteYes = document.getElementById("site-yes");
            let siteNo = document.getElementById("site-no");
            let textColor = [];
            let colors = document.querySelectorAll('input[name=textcolor]');
            let date = document.getElementById("party").value;
            let refonte = sessionStorage.getItem('Refonte / Création');

            /* Vérifie que les champs ont bien étés remplis */
            if (activity !== "") {
                /* Ajoute les données dans la requête */
                datas.append("Activity", activity);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Activity = " + activity);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Activity', activity);
            }
            if ((markYes.checked === true) || (markNo.checked === true)) {
                let mark = document.querySelector('input[name=mark]:checked').value;

                /* Ajoute les données dans la requête */
                datas.append("Mark", mark);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Mark = " + mark);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Mark', mark);

                if (markYes.checked === true ) {
                    let markName = document.getElementById("name-mark").value;

                    /* Ajoute les données dans la requête */
                    datas.append("Mark Name", markName);

                    /* Envoie la requete Ajax avec les données */
                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        /* Affiche sur la console les données envoyées */
                        console.log("Mark Name = " + markName);
                    });

                    /* Ajoute les données dans un SessionStorage */
                    sessionStorage.setItem('Mark Name', markName);
                }
            }
            for (let i = 0; i < colors.length; i++) {
                textColor.push(colors[i].value)
            }
            if (colors.length !== 0) {
                /* Ajoute les données dans la requête */
                datas.append("Colors", textColor);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Colors = " + textColor);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Colors', textColor);
            }
            if ((integrateYes.checked === true) || (integrateNo.checked === true)) {
                let integrate = document.querySelector('input[name=integrate]:checked').value;

                /* Ajoute les données dans la requête */
                datas.append("Integrate", integrate);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Integrate = " + integrate);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Integrate', integrate);

                if (integrateYes.checked === true ) {
                    let integrateWhat = document.getElementById("integrate-what").value;

                    /* Ajoute les données dans la requête */
                    datas.append("Integrate What", integrateWhat);

                    /* Envoie la requete Ajax avec les données */
                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        /* Affiche sur la console les données envoyées */
                        console.log("Integrate What = " + integrateWhat);
                    });

                    /* Ajoute les données dans un SessionStorage */
                    sessionStorage.setItem('Integrate What', integrateWhat);
                }
            }
            if (date !== "") {
                /* Ajoute les données dans la requête */
                datas.append("Date", date);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Date = " + date);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Date', date);
            }
            if ((identityYes.checked === true) || (identityNo.checked === true)) {
                let identity = document.querySelector('input[name=identity]:checked').value;

                /* Ajoute les données dans la requête */
                datas.append("Identity", identity);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Identity = " + identity);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Identity', identity);
            }
            if ((siteYes.checked === true) || (siteNo.checked === true)) {
                let site = document.querySelector('input[name=site]:checked').value;

                /* Ajoute les données dans la requête */
                datas.append("Site internet", site);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Site internet = " + site);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Site internet', site);
            }
            if (refonte === "refonte") {
                let keepYes = document.getElementById("keep-yes");
                let keepNo = document.getElementById("keep-no");

                if ((keepYes.checked === true) || (keepNo.checked === true)) {
                    let keep = document.querySelector('input[name=keep]:checked').value;

                    /* Ajoute les données dans la requête */
                    datas.append("Keep", keep);

                    /* Envoie la requete Ajax avec les données */
                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        /* Affiche sur la console les données envoyées */
                        console.log("Keep = " + keep);
                    });

                    /* Ajoute les données dans un SessionStorage */
                    sessionStorage.setItem('Keep', keep);

                    /* CSS */
                    backForm6.style.display = "none";
                    backFormlast.style.display = "block";
                }
            }

            /* CSS */
            backForm6.style.display = "none";
            backFormlast.style.display = "block";

        });
        button_7.addEventListener('click', function () {
            let recto = document.getElementById("recto");
            let rectVer = document.getElementById("rectoverso");
            let aboutChoice = document.getElementById("about-form-5");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let rectoVerso = document.querySelector('input[name=recto]:checked').value;

            /* Vérifie si l'un des choix est selectionner */
            if ((recto.checked === true) || (rectVer.checked === true)) {

                /* Ajoute les données dans la requête */
                datas.append("Recto", rectoVerso);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Recto = " + rectoVerso);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Recto', rectoVerso);

                /* CSS */
                backForm7.style.display = "none";
                backForm5.style.display = "block";
                backForm5.style.height = "28.75rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;

                /* Affiche le formualaire du nombre
                d'affiche(s) si "Affiche" a été selectionnée */
                if (choice === "Affiche / Affiche publicitaire") {
                    let aboutChoice = document.getElementById("about-form-8");

                    /* CSS */
                    backForm5.style.display = "none";
                    backForm8.style.display = "block";
                    backForm8.style.height = "27.75rem";
                    aboutChoice.style.textDecoration = "underline 1px black";

                    /* Affiche les données à l'utilisateur */
                    aboutChoice.innerHTML = choice;
                }
            }
        });
        button_8.addEventListener('click', function () {
            let unity = document.getElementById('unity').value;

            /* Vérifie qu'une valeur a bien été saisie */
            if (unity !== "") {
                /* Ajoute les données dans la requête */
                datas.append("Unity", unity);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Unity = " + unity);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Unity', unity);

                /* CSS */
                backForm8.style.display = "none";
                backForm5.style.display = "block";
            }
        });
        button_9.addEventListener('click', function () {
            let numerique = document.getElementById("numerique");
            let papier = document.getElementById("papier");
            let version = document.querySelector('input[name=version]:checked').value;
            let aboutChoice = document.getElementById("about-form-7");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let rectoChoice = document.getElementById("rec");

            /* Vérifie si une des deux valeurs est selectionnée */
            if ((numerique.checked === true) || (papier.checked === true)) {
                /* Ajoute les données dans la requête */
                datas.append("Version", version);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Version = " + version);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Version', version);
            }

            /* CSS */
            backForm9.style.display = "none";
            backForm7.style.display = "block";
            backForm7.style.height = "34rem";
            aboutChoice.style.textDecoration = "underline 1px black";

            /* Affiche les données à l'utilisateur */
            aboutChoice.innerHTML = choice;
            rectoChoice.innerHTML = "Vous souhaitez votre " + choice + " :";
        });
        button_10.addEventListener('click', function () {
            let checkboxes = document.querySelectorAll('input[name=network]:checked');
            let network = [];
            let aboutChoice = document.getElementById("about-form-5");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let alert = document.getElementById("social-network");

            /* Ajoute la valeur de chaque
            checkboxes a network  */
            for (let i = 0; i < checkboxes.length; i++) {
                network.push(checkboxes[i].value)
            }

            /* Vérifie qu'au moins une
            selection a été faite */
            if (checkboxes.length !== 0) {
                /* Ajoute les données dans la requête */
                datas.append("Réseaux Sociaux", network);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Réseaux Sociaux = " + network);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Réseaux Sociaux', network);

                /* CSS */
                backForm10.style.display = "none";
                backForm5.style.display = "block";
                backForm5.style.height = "28.8rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
            }

            else {
                /* CSS */
                backForm10.style.height = "41rem";
                alert.style.display = "block";
            }
        });
        button_11.addEventListener('click', function () {
            let vitrine = document.getElementById("vitrine");
            let commerce = document.getElementById("commerce");
            let type = document.querySelector('input[name=type]:checked').value;
            let aboutChoice = document.getElementById("about-form-12");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            /* Vérifie que l'une des deux
            option est bien selectionnée */
            if ((vitrine.checked === true) || (commerce.checked === true)) {
                /* Ajoute les données dans la requête */
                datas.append("Type Site", type);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Type Site = " + type);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Type Site', type);

                /* CSS */
                backForm11.style.display = "none";
                backForm12.style.display = "block";
                backForm12.style.height = "26.25rem";
                aboutChoice.style.textDecoration = "underline 1px black";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
            }
        });
        button_12.addEventListener('click', function () {
            let selectElem = document.getElementById('number-page');
            let numberPages = selectElem.options[selectElem.selectedIndex].text;
            let aboutChoice = document.getElementById("about-form-13");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;

            /* Ajoute les données dans la requête */
            datas.append("Number Pages", numberPages);

            /* Envoie la requete Ajax avec les données */
            ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                /* Affiche sur la console les données envoyées */
                console.log("Number Pages = " + numberPages);
            });

            /* Ajoute les données dans un SessionStorage */
            sessionStorage.setItem('Number Pages', numberPages);

            /* CSS */
            backForm12.style.display = "none";
            backForm13.style.display = "block";
            backForm13.style.height = "31.4rem";

            /* Affiche les données à l'utilisateur */
            aboutChoice.innerHTML = choice;
            aboutChoice.style.textDecoration = "underline 1px black";
        });
        button_13.addEventListener('click', function () {
            let checkboxes = document.querySelectorAll('input[name=feature]:checked');
            let feature = [];
            let aboutChoice = document.getElementById("about-form-5");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let alert = document.getElementById("alert");

            /* Ajoute la valeur de chaque
            checkboxes a feature  */
            for (let i = 0; i < checkboxes.length; i++) {
                feature.push(checkboxes[i].value)
            }

            /* Vérifie qu'au moins une
            selection a été faite */
            if (checkboxes.length !== 0) {
                /* Ajoute les données dans la requête */
                datas.append("Fonctionnalité(s)", feature);

                /* Envoie la requete Ajax avec les données */
                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    /* Affiche sur la console les données envoyées */
                    console.log("Fonctionnalité(s) = " + feature);
                });

                /* Ajoute les données dans un SessionStorage */
                sessionStorage.setItem('Fonctionnalité(s)', feature);

                /* CSS */
                backForm13.style.display = "none";
                backForm5.style.display = "block";
                backForm5.style.height = "28.8rem";

                /* Affiche les données à l'utilisateur */
                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }
            else {
                /* CSS */
                backForm13.style.height = "38rem";
                alert.style.display = "block";
            }
        });
    }

    sendQuote() {
        let name = sessionStorage.getItem('Name');
        let firstname = sessionStorage.getItem('Firstname');
        let email = sessionStorage.getItem('Email');
        let choice = sessionStorage.getItem('Choice');
        let refcrea = sessionStorage.getItem('Refonte / Création');
        let vectoriel = sessionStorage.getItem('Vector');
        let version = sessionStorage.getItem('Version');
        let recto = sessionStorage.getItem('Recto');
        let unity = sessionStorage.getItem('Unity');
        let network = sessionStorage.getItem('Réseaux Sociaux');
        let budget = sessionStorage.getItem('Budget');

        let datas = new FormData();

        datas.append("name", name);
        datas.append("firstname", firstname);
        datas.append("email", email);
        datas.append("choice", choice);
        datas.append("refcrea", refcrea);
        datas.append("vectoriel", vectoriel);
        datas.append("version", version);
        datas.append("recto", recto);
        datas.append("unity", unity);
        datas.append("network", network);
        datas.append("budget", budget);

        ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote!data", datas, function () {
            console.log("Votre demande de devis à bien été envoyée");
        });
    }
}