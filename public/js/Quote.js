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
        let markYes = document.getElementById("mark-yes");
        let markNo = document.getElementById("mark-no");
        let integrateYes = document.getElementById("integrate-yes");
        let integrateNo = document.getElementById("integrate-no");

        selectElem.addEventListener('change', function () {
            let index = selectElem.selectedIndex;
            if (index === 7) {
                what.style.display = "block";
                backForm2.style.height = "34rem";
            }
            else {
                what.style.display = "none";
                backForm2.style.height = "26rem";
            }
        });

        markYes.addEventListener('change', function () {
            let divInfo = document.getElementById('mark-name');
            let refonte = sessionStorage.getItem('Refonte / Création');

            divInfo.style.display = "block";
            backForm6.style.height = "126rem";

            if (refonte === "refonte") {
                backForm6.style.height = "138rem";
            }

            if (integrateYes.checked === true) {
                backForm6.style.height = "134rem";
                if (refonte === "refonte") {
                    backForm6.style.height = "145rem";
                }
            }
        });

        markNo.addEventListener('change', function () {
            let divInfo = document.getElementById('mark-name');
            let refonte = sessionStorage.getItem('Refonte / Création');

            if (integrateYes.checked === true) {
                backForm6.style.height = "126rem";
            }

            if (refonte === "refonte") {
                backForm6.style.height = "130rem";
            }

            divInfo.style.display = 'none';
            backForm6.style.height = "119rem";
        });

        integrateYes.addEventListener('change', function () {
            let divInfo = document.getElementById('what-integrate');
            let refonte = sessionStorage.getItem('Refonte / Création');
            let choice = selection.options[selection.selectedIndex].text;

            divInfo.style.display = "block";
            backForm6.style.height = "126rem";

            if (refonte === "refonte") {
                backForm6.style.height = "138rem";
            }

            if (markYes.checked === true) {
                backForm6.style.height = "134rem";
                if (refonte === "refonte") {
                    backForm6.style.height = "145rem";
                }
            }

            if (choice === "Affiche / Affiche publicitaire") {
                backForm6.style.height = "105rem";
            }

        });

        integrateNo.addEventListener('change', function () {
            let divInfo = document.getElementById('what-integrate');
            let refonte = sessionStorage.getItem('Refonte / Création');
            let choice = selection.options[selection.selectedIndex].text;

            divInfo.style.display = 'none';
            backForm6.style.height = "119rem";
            if (markYes.checked === true) {
                backForm6.style.height = "126rem";
            }
            if (refonte === "refonte") {
                backForm6.style.height = "130rem";
            }

            if (choice === "Affiche / Affiche publicitaire") {
                backForm6.style.height = "98rem";
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
                        let index = selectElem.selectedIndex;

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
                        backForm2.style.height = "26rem";

                        if (index === 7) {
                            what.style.display = "block";
                            backForm2.style.height = "34rem";
                        }
                        else {
                            what.style.display = "none";
                        }

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
            let whatVal = document.getElementById("what-value").value;

            if (choice !== "") {
                datas.append("about", about);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("About = " + about);
                });

                sessionStorage.setItem('About', about);
            }

            if (choice === "Logo") {
                let aboutChoice = document.getElementById("about-form-3");
                let refonte = document.getElementById("ref");
                let creation = document.getElementById("crea");

                backForm2.style.display = "none";
                backForm3.style.display = "block";

                backForm3.style.height = "34rem";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
                refonte.innerHTML = "Refonte d'un " + choice +  " déjà existant";
                creation.innerHTML = "Création d'un nouveau " + choice;

                if (refonte.onchange === true) {
                    let select = document.getElementById("select-file");
                    select.style.display = "block";
                }

            }

            if (choice === "Carte de visite") {
                let aboutChoice = document.getElementById("about-form-7");
                let rectoChoice = document.getElementById("rec");

                backForm2.style.display = "none";
                backForm7.style.display = "block";
                backForm7.style.height = "35rem";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
                rectoChoice.innerHTML = "Vous souhaitez votre " + choice + " :";
            }

            if (choice === "Affiche / Affiche publicitaire") {
                let aboutChoice = document.getElementById("about-form-7");
                let rectoChoice = document.getElementById("rec");

                backForm2.style.display = "none";
                backForm7.style.display = "block";
                backForm7.style.height = "35rem";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
                rectoChoice.innerHTML = "Vous souhaitez votre " + choice + " :";
            }

            if (choice === "Pochette d'album") {
                let aboutChoice = document.getElementById("about-form-9");

                backForm2.style.display = "none";
                backForm9.style.display = "block";
                backForm9.style.height = "35rem";


                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }

            if (choice === "Header / Bannière") {
                let aboutChoice = document.getElementById("about-form-10");

                backForm2.style.display = "none";
                backForm10.style.display = "block";
                backForm10.style.height = "35rem";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }

            if (choice === "Curriculum Vitae") {
                let aboutChoice = document.getElementById("about-form-5");

                backForm2.style.display = "none";
                backForm5.style.display = "block";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }

            if (choice === "Autre") {
                if (whatVal !== "") {
                    let aboutChoice = document.getElementById("about-form-5");

                    datas.append("Quoi", whatVal);

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        console.log("Quoi = " + whatVal);
                    });

                    sessionStorage.setItem('Quoi', whatVal);

                    backForm2.style.display = "none";
                    backForm5.style.display = "block";

                    aboutChoice.innerHTML = choice + ": " + whatVal;
                    aboutChoice.style.textDecoration = "underline 1px black";
                }
            }

            if (choice === "Site internet") {
                let aboutChoice = document.getElementById("about-form-11");
                let refonte = document.getElementById("ref");
                let creation = document.getElementById("crea");

                backForm2.style.display = "none";
                backForm3.style.display = "block";

                backForm3.style.height = "35rem";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
                refonte.innerHTML = "Refonte d'un " + choice +  " déjà existant";
                creation.innerHTML = "Création d'un nouveau " + choice;
            }

        });

        button_3.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let quality = document.getElementById("quality");
            let refonte = document.getElementById("refonte");
            let creation = document.getElementById("creation");
            let refCrea = document.querySelector('input[name=creation]:checked').value;

            if ((refonte.checked === true) || (creation.checked === true)) {
                if  (choice !== "Curriculum Vitae" && choice !== "Site internet") {
                    let aboutChoice = document.getElementById("about-form-4");

                    datas.append("Refonte / Création", refCrea);

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        console.log("Refonte / Création = " + refCrea);
                    });

                    sessionStorage.setItem('Refonte / Création', refCrea);

                    backForm3.style.display = "none";
                    backForm4.style.display = "block";
                    backForm4.style.height = "35rem";

                    aboutChoice.innerHTML = choice;
                    aboutChoice.style.textDecoration = "underline 1px black";
                    quality.innerText = "Souhaitez-vous votre " + choice + " au format vectoriel ?";
                }
                else {
                    datas.append("Refonte / Création", refCrea);

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        console.log("Refonte / Création = " + refCrea);
                    });

                    sessionStorage.setItem('Refonte / Création', refCrea);

                    if (choice === "Logo") {
                        backForm3.style.display = "none";
                        backForm5.style.display = "block";
                    }

                    else {
                        backForm3.style.display = "none";
                        backForm11.style.display = "block";
                    }
                }
            }
        });

        button_4.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let quality = document.querySelector('input[name=quality]:checked').value;
            let checked = document.getElementsByName("quality").value;

            if (checked !== "") {
                let aboutChoice = document.getElementById("about-form-5");

                datas.append("Vector", quality);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Vector = " + quality);
                });

                sessionStorage.setItem('Vector', quality);

                backForm4.style.display = "none";
                backForm5.style.display = "block";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }
        });

        button_5.addEventListener('click', function () {
             let selection = document.getElementById("selection");
             let choice = selection.options[selection.selectedIndex].text;
             let budget = document.getElementById('budget').value;
             let aboutChoice = document.getElementById("about-form-6");
             let whatVal = document.getElementById("what-value").value;
             let refonte = sessionStorage.getItem('Refonte / Création');
             let displayMark = document.getElementById("display-mark");
             let integrate = document.getElementById("integrate");
             let date = new Date(new Date().getTime()+(4*24*60*60*1000)).toISOString().split('T')[0];
             let dateText = document.getElementById("date");
             let nameMark = document.getElementById("mark-name");
             let identity = document.getElementById("identity");
             let colors = document.getElementById("colors");

            if (budget !== "") {
                datas.append("budget", budget);
                backForm6.style.height = "119rem";

                if (choice === "Logo") {
                    displayMark.innerHTML = "Souhaitez-vous que le nom de la marque apparaisse sur le " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans le " + choice + "?";

                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;
                    if (markYes.checked === true) {
                        let divInfo = document.getElementById('mark-name');
                        divInfo.style.display = "block";
                        backForm6.style.height = "126rem";
                    }

                    if (integrateYes.checked === true) {
                        let divInfo = document.getElementById('what-integrate');
                        divInfo.style.display = "block";
                        backForm6.style.height = "126rem";
                    }

                    if ((markYes.checked === true) && (integrateYes.checked === true)) {
                        backForm6.style.height = "134rem";
                    }

                    if ((markYes.checked === false) && (integrateYes.checked === true)) {
                        backForm6.style.height = "126rem";
                    }

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        console.log("Budget = " + budget);
                    });

                    sessionStorage.setItem('Budget', budget);

                    document.getElementsByName("party")[0].setAttribute('min', date);


                    if (refonte === "refonte") {
                        let divKeep = document.getElementById('keep');

                        divKeep.style.display = "block";
                        backForm6.style.height = "130rem";

                        if (markYes.checked === true) {
                            backForm6.style.height = "138rem";
                        }
                        if (integrateYes.checked === true) {
                            backForm6.style.height = "138rem";
                        }

                        if ((markYes.checked === true) && (integrateYes.checked === true)) {
                            backForm6.style.height = "145rem";
                        }
                    }
                }

                if (choice === "Carte de visite") {
                    displayMark.innerHTML = "Souhaitez-vous que le nom de la marque apparaisse sur la " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans la " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;
                }

                if (choice === "Affiche / Affiche publicitaire") {
                    backForm6.style.height = "98rem";
                    nameMark.style.display = "none";
                    identity.style.display = "none";
                    colors.style.marginTop = "3rem";
                    dateText.style.marginBottom = "1rem";

                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans l' " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;
                }

                if (choice === "Pochette d'album") {
                    displayMark.innerHTML = "Souhaitez-vous que le nom de l'album apparaisse sur la " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans la " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;

                }

                if (choice === "Header / Bannière") {
                    displayMark.innerHTML = "Souhaitez-vous que le nom de la marque apparaisse sur le /la " + choice + " ?*";
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans le/la  " + choice + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;

                }

                if (choice === "Curriculum Vitae") {
                    backForm5.style.display = "none";
                    backFormlast.style.display = "block";
                }

                else {
                    backForm5.style.display = "none";
                    backForm6.style.display = "block";

                    aboutChoice.innerHTML = choice;
                    aboutChoice.style.textDecoration = "underline 1px black";
                }

                if (choice === "Autre") {
                    nameMark.style.display = "none";
                    colors.style.marginTop = "3rem";

                    aboutChoice.innerHTML = choice + ": " + whatVal;
                    integrate.innerHTML = "Faut-il intégrer des éléments particuliers dans votre " + whatVal + "?";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + whatVal;
                }

                if (choice === "Site internet") {
                    let integrate = document.getElementById("integrate-part");
                    let need = document.getElementById("need");
                    let date = new Date(new Date().getTime()+(15*24*60*60*1000)).toISOString().split('T')[0];
                    integrate.style.display = "none";
                    nameMark.style.display = "none";
                    colors.style.marginTop = "3rem";

                    document.getElementsByName("party")[0].setAttribute('min', date);

                    dateText.style.marginTop = "3rem";
                    dateText.innerHTML = "Sélectionner la date maximale à laquelle vous souhaitez recevoir votre " + choice;
                    need.innerHTML = "Avez-vous besoin d'un logo ?";

                }

             }
         });

        button_6.addEventListener('click', function () {
            let activity = document.getElementById("activity").value;
            let markYes = document.getElementById("mark-yes");
            let markNo = document.getElementById("mark-no");
            let keepYes = document.getElementById("keep-yes");
            let keepNo = document.getElementById("keep-no");
            let integrateYes = document.getElementById("integrate-yes");
            let integrateNo = document.getElementById("integrate-no");
            let integrate = document.querySelector('input[name=integrate]:checked').value;
            let identityYes = document.getElementById("identity-yes");
            let identityNo = document.getElementById("identity-no");
            let siteYes = document.getElementById("site-yes");
            let siteNo = document.getElementById("site-no");
            let textColor = [];
            let colors = document.querySelectorAll('input[name=textcolor]');
            let date = document.getElementById("party").value;
            let refonte = sessionStorage.getItem('Refonte / Création');

            if (activity !== "") {
                datas.append("Activity", activity);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Activity = " + activity);
                });

                sessionStorage.setItem('Activity', activity);
            }

            if ((markYes.checked === true) || (markNo.checked === true)) {
                let mark = document.querySelector('input[name=mark]:checked').value;

                datas.append("Mark", mark);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Mark = " + mark);
                });

                sessionStorage.setItem('Mark', mark);
            }

            for (let i = 0; i < colors.length; i++) {
                textColor.push(colors[i].value)
            }

            if (colors.length !== 0) {
                datas.append("Colors", textColor);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Colors = " + textColor);
                });

                sessionStorage.setItem('Colors', textColor);
            }

            if ((integrateYes.checked === true) || (integrateNo.checked === true)) {

                datas.append("Integrate", integrate);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Integrate = " + integrate);
                });

                sessionStorage.setItem('Integrate', integrate);
            }

            datas.append("Date", date);

            ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                console.log("Date = " + date);
            });

            sessionStorage.setItem('Date', date);

            if ((identityYes.checked === true) || (identityNo.checked === true)) {
                let identity = document.querySelector('input[name=identity]:checked').value;

                datas.append("Identity", identity);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Identity = " + identity);
                });

                sessionStorage.setItem('Identity', identity);
            }

            if ((siteYes.checked === true) || (siteNo.checked === true)) {
                let site = document.querySelector('input[name=site]:checked').value;

                datas.append("Site internet", site);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Site internet = " + site);
                });

                sessionStorage.setItem('Site internet', site);
            }

            if (refonte === "refonte") {
                if ((keepYes.checked === true) || (keepNo.checked === true)) {
                    let keep = document.querySelector('input[name=keep]:checked').value;

                    datas.append("Keep", keep);

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                        console.log("Keep = " + keep);
                    });

                    sessionStorage.setItem('Keep', keep);

                    backForm6.style.display = "none";
                    backFormlast.style.display = "block";
                }
            }

            backForm6.style.display = "none";
            backFormlast.style.display = "block";

        });

        button_7.addEventListener('click', function () {
            let recto = document.getElementById("recto");
            let rectoverso = document.getElementById("rectoverso");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let aboutChoice = document.getElementById("about-form-5");
            let rectoVerso = document.querySelector('input[name=recto]:checked').value;

            datas.append("Recto", rectoVerso);

            ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                console.log("Recto = " + rectoVerso);
            });

            sessionStorage.setItem('Recto', rectoVerso);

            if ((recto.checked === true) || (rectoverso.checked === true)) {

                backForm7.style.display = "none";
                backForm5.style.display = "block";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }

            if (choice === "Affiche / Affiche publicitaire") {
                let aboutChoice = document.getElementById("about-form-8");

                backForm5.style.display = "none";
                backForm8.style.display = "block";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }
        });

        button_8.addEventListener('click', function () {
            let unity = document.getElementById('unity').value;

            if (unity !== "") {
                datas.append("Unity", unity);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Unity = " + unity);
                });

                sessionStorage.setItem('Unity', unity);

                backForm8.style.display = "none";
                backForm5.style.display = "block";
            }
        });

        button_9.addEventListener('click', function () {
            let numerique = document.getElementById("numerique");
            let papier = document.getElementById("papier");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let aboutChoice = document.getElementById("about-form-7");
            let version = document.querySelector('input[name=version]:checked').value;
            let rectoChoice = document.getElementById("rec");

            if ((numerique.checked === true) || (papier.checked === true)) {

                datas.append("Version", version);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Version = " + version);
                });

                sessionStorage.setItem('Version', version);

                backForm9.style.display = "none";
                backForm7.style.display = "block";
                backForm7.style.height = "35rem";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
                rectoChoice.innerHTML = "Vous souhaitez votre " + choice + " :";
            }
        });

        button_10.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let aboutChoice = document.getElementById("about-form-5");
            let network = [];
            let checkboxes = document.querySelectorAll('input[name=network]:checked');
            let alert = document.getElementById("social-network");

            for (let i = 0; i < checkboxes.length; i++) {
                network.push(checkboxes[i].value)
            }

            if (checkboxes.length !== 0) {
                datas.append("Réseaux Sociaux", network);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Réseaux Sociaux = " + network);
                });

                sessionStorage.setItem('Réseaux Sociaux', network);

                backForm10.style.display = "none";
                backForm5.style.display = "block";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }

            else {
                backForm10.style.height = "37rem";
                alert.style.display = "block";
            }
        });

        button_11.addEventListener('click', function () {
            let vitrine = document.getElementById("vitrine");
            let commerce = document.getElementById("commerce");
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let aboutChoice = document.getElementById("about-form-12");
            let type = document.querySelector('input[name=type]:checked').value;


            if ((vitrine.checked === true) || (commerce.checked === true)) {
                datas.append("Type Site", type);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Type Site = " + type);
                });

                sessionStorage.setItem('Type Site', type);

                backForm11.style.display = "none";
                backForm12.style.display = "block";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }
        });

        button_12.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let aboutChoice = document.getElementById("about-form-13");
            let selectElem = document.getElementById('number-page');
            let numberPages = selectElem.options[selectElem.selectedIndex].text;

            datas.append("Number Pages", numberPages);

            ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                console.log("Number Pages = " + numberPages);
            });

            sessionStorage.setItem('Number Pages', numberPages);

            backForm12.style.display = "none";
            backForm13.style.display = "block";

            aboutChoice.innerHTML = choice;
            aboutChoice.style.textDecoration = "underline 1px black";
        });

        button_13.addEventListener('click', function () {
            let selection = document.getElementById("selection");
            let choice = selection.options[selection.selectedIndex].text;
            let aboutChoice = document.getElementById("about-form-5");
            let feature = [];
            let checkboxes = document.querySelectorAll('input[name=feature]:checked');
            let alert = document.getElementById("alert");

            for (let i = 0; i < checkboxes.length; i++) {
                feature.push(checkboxes[i].value)
            }

            if (checkboxes.length !== 0) {
                datas.append("Fonctionnalité(s)", feature);

                ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote", datas, function () {
                    console.log("Fonctionnalité(s) = " + feature);
                });

                sessionStorage.setItem('Fonctionnalité(s)', feature);

                backForm13.style.display = "none";
                backForm5.style.display = "block";

                aboutChoice.innerHTML = choice;
                aboutChoice.style.textDecoration = "underline 1px black";
            }
            else {
                backForm13.style.height = "37rem";
                alert.style.display = "block";
            }
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