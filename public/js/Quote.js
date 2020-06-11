// Strict mode
'use strict';

class Quote {
    constructor() {
        let form = document.getElementById('form');

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        });

        function submitForm() {
            let name = $("#name").val();
            let firstname = $("#firstname").val();
            let email = $("#email").val();
            let datas = new FormData();

            datas.append("name", name);
            datas.append("firstname", firstname);
            datas.append("email", email);

            ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote!data", datas, function (reponse) {
                console.log("Name = " + name + ", Firstname = " + firstname + ", Email = " + email);
            });
        }
    }

   nextForm() {
        let button    = document.getElementById("btn-devis");
        let name     = document.getElementById("name");
        let firstname = document.getElementById("firstname");
        let email = document.getElementById("email");
        let backForm1 = document.getElementById("fond-form-1");
        let backForm2 = document.getElementById("fond-form-2");

        button.addEventListener('click', function () {
            if ((name.value !== "")) {
                if ((firstname.value !== "")) {
                    if ((email.value !== "")) {
                        backForm1.style.display = "none";
                        backForm2.style.display = "block";

                        localStorage.setItem('name', name.value);
                        localStorage.setItem('firstname', firstname.value);
                    }
                }
            }
        });
    }
}
